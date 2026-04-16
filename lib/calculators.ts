export interface MortgageResult {
  monthlyPayment: number
  totalPayment: number
  totalInterest: number
}

export function calculateMortgage(
  principal: number,
  annualRate: number,
  years: number
): MortgageResult {
  const monthlyRate = annualRate / 100 / 12
  const numPayments = years * 12

  if (monthlyRate === 0) {
    const monthlyPayment = principal / numPayments
    return {
      monthlyPayment,
      totalPayment: principal,
      totalInterest: 0,
    }
  }

  const monthlyPayment =
    (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)

  const totalPayment = monthlyPayment * numPayments
  const totalInterest = totalPayment - principal

  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
  }
}

export interface BSDResult {
  bsd: number
  breakdown: { range: string; rate: number; amount: number }[]
}

export function calculateBSD(price: number): BSDResult {
  const brackets = [
    { limit: 180000, rate: 0.01, label: "First $180,000" },
    { limit: 360000, rate: 0.02, label: "Next $180,000" },
    { limit: 1000000, rate: 0.03, label: "Next $640,000" },
    { limit: 1500000, rate: 0.04, label: "Next $500,000" },
    { limit: 3000000, rate: 0.05, label: "Next $1,500,000" },
    { limit: Infinity, rate: 0.06, label: "Remaining" },
  ]

  let remaining = price
  let prevLimit = 0
  let totalBSD = 0
  const breakdown: { range: string; rate: number; amount: number }[] = []

  for (const bracket of brackets) {
    if (remaining <= 0) break
    const bracketSize = bracket.limit - prevLimit
    const taxable = Math.min(remaining, bracketSize)
    const tax = taxable * bracket.rate

    breakdown.push({
      range: bracket.label,
      rate: bracket.rate * 100,
      amount: tax,
    })

    totalBSD += tax
    remaining -= taxable
    prevLimit = bracket.limit
  }

  return { bsd: totalBSD, breakdown }
}

export type BuyerProfile =
  | "sc_first"
  | "sc_second"
  | "sc_third"
  | "pr_first"
  | "pr_second"
  | "foreigner"

export function calculateABSD(price: number, profile: BuyerProfile): number {
  const rates: Record<BuyerProfile, number> = {
    sc_first: 0,
    sc_second: 0.2,
    sc_third: 0.3,
    pr_first: 0.05,
    pr_second: 0.3,
    foreigner: 0.6,
  }

  return price * (rates[profile] ?? 0)
}

export interface AffordabilityResult {
  maxLoanTDSR: number
  maxLoanMSR: number
  maxLoan: number
  recommendedPrice: number
  monthlyPayment: number
}

export function calculateAffordability(
  monthlyIncome: number,
  existingObligations: number,
  annualRate: number,
  years: number,
  isHDB: boolean = false
): AffordabilityResult {
  const monthlyRate = annualRate / 100 / 12
  const numPayments = years * 12

  // TDSR: total debt ≤ 55% of income
  const maxMonthlyTDSR = monthlyIncome * 0.55 - existingObligations

  // MSR: mortgage ≤ 30% of income (HDB/EC only)
  const maxMonthlyMSR = isHDB ? monthlyIncome * 0.3 : Infinity

  const maxMonthlyPayment = Math.min(maxMonthlyTDSR, maxMonthlyMSR)

  if (maxMonthlyPayment <= 0 || monthlyRate === 0) {
    return {
      maxLoanTDSR: maxMonthlyTDSR * numPayments,
      maxLoanMSR: isHDB ? maxMonthlyMSR * numPayments : 0,
      maxLoan: 0,
      recommendedPrice: 0,
      monthlyPayment: 0,
    }
  }

  const maxLoan =
    (maxMonthlyPayment * (Math.pow(1 + monthlyRate, numPayments) - 1)) /
    (monthlyRate * Math.pow(1 + monthlyRate, numPayments))

  const maxLoanTDSR =
    (maxMonthlyTDSR * (Math.pow(1 + monthlyRate, numPayments) - 1)) /
    (monthlyRate * Math.pow(1 + monthlyRate, numPayments))

  const maxLoanMSR = isHDB
    ? (maxMonthlyMSR * (Math.pow(1 + monthlyRate, numPayments) - 1)) /
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments))
    : 0

  // Recommended property price assumes 75% LTV
  const recommendedPrice = maxLoan / 0.75

  return {
    maxLoanTDSR,
    maxLoanMSR,
    maxLoan,
    recommendedPrice,
    monthlyPayment: maxMonthlyPayment,
  }
}
