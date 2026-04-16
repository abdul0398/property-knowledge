export const categoryInfo = {
  name: "Condo Resale",
  description:
    "Condominium resale market knowledge, regulations, and processes.",
  icon: "Building",
}

export const sections = [
  {
    title: "Condo Resale Process Step by Step",
    content: `**Step 1: Engage a Property Agent**
- Sign an Exclusive or Non-Exclusive Estate Agency Agreement
- Agent conducts a Comparative Market Analysis (CMA)

**Step 2: Property Viewing and Offer**
- Schedule viewings with potential buyers
- Negotiate and accept an offer
- Issue Option to Purchase (OTP) — typically 1% option fee

**Step 3: Exercise of Option**
- Buyer exercises OTP within the option period (usually 14 days)
- Buyer pays remaining deposit (typically 4% of purchase price)

**Step 4: Conveyancing**
- Both parties appoint lawyers
- Buyer applies for mortgage
- Lawyer conducts title search and legal due diligence

**Step 5: Completion**
- Typically 8-12 weeks from exercise of OTP
- Final payment and key handover
- Stamp duty payment by buyer

| Stage | Duration |
|-------|----------|
| Marketing | 2-8 weeks |
| OTP to Exercise | 14 days |
| Exercise to Completion | 8-12 weeks |`,
  },
  {
    title: "Private Property CPF Usage Rules",
    content: `CPF usage for private property is governed by the **Private Properties Scheme (PPS)**, introduced in 1981.

**Remaining Lease Requirement:** Cannot use CPF for property with less than **20 years** remaining lease.

**Valuation Limit (VL):** Lower of purchase price or valuation. CPF can be used up to VL without setting aside BRS.

**Withdrawal Limit (WL):** 120% of VL. To use CPF between VL and WL, must set aside Basic Retirement Sum (BRS — $110,200 in 2026).

**After reaching WL:** No further CPF allowed — cash payments only.

**Retirement Sum Requirements (Below 55):**
- Must have BRS across OA + SA combined to use CPF beyond VL

**Retirement Sum Requirements (55+):**
- Must have BRS in Retirement Account (RA)
- Only OA funds above required retirement savings can be used

**Multiple Property Rules:**
- Existing property covers to age 95 → set aside **BRS** ($110,200)
- Existing property does NOT cover to 95 → set aside **FRS** ($220,400)

**Freehold Properties:** Treated as 999-year lease — no pro-ration, full VL and WL apply.

**Pro-Rated CPF for Shorter Leases:**
CPF Usage = VL x (Remaining Lease - 20) / (95 - Age of Youngest Buyer - 20)

**CPF Accrued Interest:** Must refund principal + 2.5% p.a. interest to CPF OA when selling. If sale proceeds insufficient, shortfall is absorbed.

**6-Month Grace Period:** When buying new property while owning existing one — existing property must be sold within 6 months of new property completion/TOP.`,
  },
  {
    title: "Stamp Duty for Condo Purchases",
    content: `**Buyer's Stamp Duty (BSD):**
| Purchase Price | Rate |
|---------------|------|
| First $180,000 | 1% |
| Next $180,000 | 2% |
| Next $640,000 | 3% |
| Next $500,000 | 4% |
| Next $1,500,000 | 5% |
| Above $3,000,000 | 6% |

**Additional Buyer's Stamp Duty (ABSD):**
| Buyer Profile | Rate |
|--------------|------|
| SC 1st property | 0% |
| SC 2nd property | 20% |
| SC 3rd+ | 30% |
| SPR 1st property | 5% |
| SPR 2nd+ | 30% |
| Foreigners (all) | 60% |

**Seller's Stamp Duty (SSD):**
- Within 1 year: 12%
- Within 2 years: 8%
- Within 3 years: 4%
- After 3 years: 0%

**Payment deadline:** Within **14 days** of signing S&P Agreement.`,
  },
  {
    title: "Financing a Condo Purchase",
    content: `**Maximum LTV:**
- First housing loan: **75%** (if tenure ≤ 30 years and doesn't extend past age 65)
- If either condition exceeded: **55%**
- Second outstanding loan: **45%** (or 25% if tenure/age conditions exceeded)

**TDSR (Total Debt Servicing Ratio):**
- Monthly debt payments (all loans) cannot exceed **55%** of gross monthly income
- Applies to all private property purchases

**MSR does NOT apply** to private resale condos — only to HDB flats and ECs from developers.

**Minimum Cash Down Payment:**
- First loan: **5%** of purchase price (out of 25% down payment)
- Remaining 20% can be CPF OA
- Second loan: **25%** cash minimum`,
  },
]

export const faqs = [
  {
    question: "Can I use CPF to buy a resale condo?",
    answer:
      "Yes. Under the Private Properties Scheme (PPS), you can use CPF OA funds. The remaining lease must be more than 20 years, and usage is subject to the Valuation Limit (VL) and Withdrawal Limit (WL = 120% of VL).",
  },
  {
    question:
      "What is the difference between VL and WL for private property CPF usage?",
    answer:
      "The Valuation Limit (VL) is the lower of purchase price or valuation — CPF can be used up to VL without conditions. The Withdrawal Limit (WL) is 120% of VL — to use CPF between VL and WL, you must set aside the Basic Retirement Sum (BRS). Beyond WL, no CPF can be used.",
  },
  {
    question:
      "Can I use CPF for a leasehold condo with only 50 years left?",
    answer:
      "Yes, but the amount is **pro-rated**. Formula: CPF Usage = VL x (Remaining Lease - 20) / (95 - Age - 20). A 35-year-old buying a 50-year lease condo: VL x (50-20)/(95-35-20) = VL x 75%.",
  },
  {
    question: "What happens when I reach the Withdrawal Limit?",
    answer:
      "Once total CPF usage reaches WL (120% of VL), no more CPF can be used. All subsequent mortgage payments must be in cash.",
  },
  {
    question: "Do I need to refund CPF when I sell my condo?",
    answer:
      "Yes. You must refund CPF principal + accrued interest (2.5% p.a.) to your CPF OA from the sale proceeds. If proceeds are insufficient, the shortfall is absorbed.",
  },
  {
    question: "What stamp duty do I pay when buying a resale condo?",
    answer:
      "You pay Buyer's Stamp Duty (BSD) on all purchases. If not your first property, Additional Buyer's Stamp Duty (ABSD) also applies. SC 2nd property ABSD is 20%. BSD and ABSD must be paid within 14 days of signing the S&P Agreement.",
  },
  {
    question: "What are the current ABSD rates?",
    answer:
      "SC 1st: 0%, SC 2nd: 20%, SC 3rd+: 30%, SPR 1st: 5%, SPR 2nd+: 30%, Foreigners: 60%.",
  },
  {
    question: "Is Seller's Stamp Duty (SSD) applicable?",
    answer:
      "SSD applies if sold within 3 years: 12% (within 1 year), 8% (within 2 years), 4% (within 3 years), 0% after 3 years.",
  },
  {
    question: "What is the maximum LTV for a condo purchase?",
    answer:
      "First housing loan: **75%** (if tenure ≤ 30 years and doesn't extend past age 65). Otherwise **55%**. Second outstanding loan: **45%** (or 25% if conditions exceeded).",
  },
  {
    question: "Does MSR apply to condo purchases?",
    answer:
      "No. MSR (30%) applies only to HDB flats and ECs from developers. For private resale condos, only TDSR (55%) applies.",
  },
  {
    question: "What is the minimum cash down payment for a condo?",
    answer:
      "First loan: 5% cash (out of 25% total down payment). Remaining 20% can be CPF. Second loan: 25% cash minimum.",
  },
  {
    question: "How long does a typical condo resale transaction take?",
    answer:
      "From signing OTP to completion: approximately **10 to 12 weeks**. Buyer has 14 days to exercise OTP, followed by 8-12 weeks for conveyancing and completion.",
  },
  {
    question: "Do I need a lawyer for a condo resale purchase?",
    answer:
      "Yes. Both buyer and seller must engage their own lawyers. The lawyer handles title searches, legal due diligence, loan documentation, stamp duty filing, and transfer of title.",
  },
  {
    question: "What is the option fee for a condo resale?",
    answer:
      "Typically **1% of purchase price**. An additional 4% (exercise fee) is paid when OTP is exercised, bringing total deposit to 5%.",
  },
  {
    question: "Can the seller back out after granting the OTP?",
    answer:
      "Once OTP is granted and option fee paid, the seller is legally bound. If the seller backs out, they must return the option fee and may be liable for damages. The buyer can choose not to exercise, forfeiting only the option fee.",
  },
]
