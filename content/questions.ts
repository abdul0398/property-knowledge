export type PropertyType = "hdb" | "condo" | "landed" | "general"

export type WorkflowId =
  | "meeting-buyer"
  | "meeting-seller"
  | "cpf-rules"
  | "grants-subsidy"
  | "loans-finance"
  | "stamp-duty"
  | "rental"
  | "tricky"
  | "agent-basics"
  | "calculations"

export type Priority = "high" | "medium" | "low"

export type QA = {
  id: number
  propertyType: PropertyType
  workflow: WorkflowId
  question: string
  answer: string
  source: string
  priority: Priority
}

export type WorkflowDef = {
  id: WorkflowId
  label: string
  icon: string
  color: string
}

export const WORKFLOWS: WorkflowDef[] = [
  { id: "meeting-buyer", label: "Meeting a Buyer", icon: "Handshake", color: "#059669" },
  { id: "meeting-seller", label: "Meeting a Seller", icon: "Banknote", color: "#DC2626" },
  { id: "cpf-rules", label: "CPF Rules", icon: "Landmark", color: "#2563EB" },
  { id: "grants-subsidy", label: "Grants & Subsidies", icon: "Gift", color: "#7C3AED" },
  { id: "loans-finance", label: "Loans & Finance", icon: "Building2", color: "#D97706" },
  { id: "stamp-duty", label: "Stamp Duty & Tax", icon: "Receipt", color: "#0D9488" },
  { id: "rental", label: "Rental & Landlord", icon: "Key", color: "#EA580C" },
  { id: "tricky", label: "Tricky Scenarios", icon: "Zap", color: "#DB2777" },
  { id: "agent-basics", label: "Agent Basics", icon: "BookOpen", color: "#4F46E5" },
  { id: "calculations", label: "Calculations", icon: "Calculator", color: "#6366F1" },
]

export const ALL_QUESTIONS: QA[] = [
  // ═══ MEETING A BUYER ═══
  {
    id: 1,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "What should I check BEFORE showing any property to a buyer?",
    answer: `Agent pre-viewing checklist:

1. Buyer's age (youngest if multiple buyers)
2. Property's remaining lease
3. Age + Lease ≥ 95? (CPF pro-ration check)
4. 1st or 2nd property? (ABSD + CPF limits)
5. Has MOP been fulfilled? (if selling existing HDB)
6. Income ceiling met? (for HDB loan / grants)
7. Citizenship status (affects ABSD, loan, grants)
8. Existing outstanding loans? (affects LTV)
9. TDSR headroom? (total debts vs income)
10. CPF OA balance? (run CPF calculator)

**Tip:** Do this BEFORE falling in love with a unit. Save everyone's time.`,
    source: "https://www.cpf.gov.sg/member/tools-and-services/calculators/cpf-housing-usage",
    priority: "high",
  },
  {
    id: 2,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "What are the eligibility criteria for BTO?",
    answer: `- Singapore Citizen (at least 1 buyer)
- Age 21+ (family nucleus) or 35+ (single — 2-room Flexi only)
- Income ceiling: $14,000 (≤4-room) or $16,000 (5-room/exec)
- Must NOT own private property (local or overseas)
- Must not have bought 2 new HDB flats before
- Must form valid family nucleus

**Tip:** Use HDB's eligibility checker at hdb.gov.sg`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-new-flats",
    priority: "high",
  },
  {
    id: 3,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "What is the HDB resale flat buying process step-by-step?",
    answer: `1. Register Intent to Buy on HDB Resale Portal
2. Get HLE letter (HDB loan) or bank IPA letter
3. Find flat & negotiate with seller
4. Seller grants OTP (Option to Purchase) — valid 21 days
5. Buyer exercises OTP + pays option fee ($1–$1,000)
6. Submit resale application on HDB portal
7. HDB processes (~8 weeks)
8. Complete transaction at HDB appointment

**Tip:** Option fee for HDB resale is between $1 to $1,000 (negotiable).`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-resale-flats",
    priority: "high",
  },
  {
    id: 4,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "What is MOP and what are the restrictions during MOP?",
    answer: `Minimum Occupation Period = 5 years from key collection.

**During MOP CANNOT:**
- Sell the flat
- Rent out entire flat (rooms OK with approval)
- Buy/invest in private property (SG or overseas)

**After MOP:**
- Sell on resale market
- Rent out whole flat
- Buy private property

**Warning:** Some cases have 10-year MOP (non-citizen spouse).`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/conditions-after-buying",
    priority: "high",
  },
  {
    id: 5,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "Can my client retain CPF OA balance when taking HDB loan?",
    answer: `YES — from 28 Aug 2018:
- Can retain up to $20,000 EACH in CPF OA
- Remaining OA used for flat purchase
- Optional — can still choose to use all OA

**Tip:** Good for clients who want a buffer for emergencies.`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "high",
  },
  {
    id: 6,
    propertyType: "condo",
    workflow: "meeting-buyer",
    question: "What is the downpayment for condo (1st property, bank loan)?",
    answer: `Total downpayment: 25% of price/valuation (lower)
- 5% MUST be CASH
- 20% can be CPF OA
- LTV: 75%

**Example for $1M condo:**
- Cash: $50K
- CPF: $200K
- Loan: $750K

**Warning:** If loan tenure + age > 65: LTV drops to 55%, 10% cash required.`,
    source: "https://www.mas.gov.sg/regulation/explainers/property-loan-rules",
    priority: "high",
  },
  {
    id: 7,
    propertyType: "condo",
    workflow: "meeting-buyer",
    question: "What is the downpayment if buying 2nd property with outstanding loan?",
    answer: `**With outstanding home loan:**
- Downpayment: 45% (min 25% CASH)
- LTV: 55%

**No outstanding home loan:**
- Downpayment: 25% (min 5% cash)
- LTV: 75%

**Tip:** HUGE difference. Advise client to pay off 1st loan first if possible.`,
    source: "https://www.mas.gov.sg/regulation/explainers/property-loan-rules",
    priority: "high",
  },
  {
    id: 8,
    propertyType: "condo",
    workflow: "meeting-buyer",
    question: "What is the EC buying process and eligibility?",
    answer: `**EC eligibility:**
- SG Citizen (at least 1 buyer)
- Age 21+ with family nucleus
- Income ceiling: $16,000
- Must not own private property

**EC timeline:**
- 5-year MOP: cannot sell/rent whole unit
- After 5 years: sell to SG Citizens/PRs only
- After 10 years: fully privatised — sell to anyone

**Tip:** EC = hybrid. HDB rules first 10 years, then private.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/executive-condominiums",
    priority: "high",
  },
  {
    id: 9,
    propertyType: "landed",
    workflow: "meeting-buyer",
    question: "What types of landed property are there?",
    answer: `1. **Terrace** — row houses sharing walls
2. **Semi-Detached** — shares one wall
3. **Detached / Bungalow** — standalone
4. **Good Class Bungalow (GCB)** — land ≥ 1,393 sqm, gazetted area
5. **Strata Landed** — landed in development with shared facilities
6. **Cluster Housing** — gated community with condo facilities

**Tip:** All follow Private Properties Scheme for CPF. Freehold = no lease concern.`,
    source: "https://www.ura.gov.sg/Corporate/Property/Residential",
    priority: "medium",
  },
  {
    id: 10,
    propertyType: "landed",
    workflow: "meeting-buyer",
    question: "Can foreigners or PRs buy landed property?",
    answer: `**SG Citizens:** No restrictions.

**SG PRs:** Need SLA approval. Conditions:
- PR for 5+ years
- Making economic contribution to SG
- For own occupation only

**Foreigners:** Generally NO.
Exception: Sentosa Cove landed only.

**Warning:** ABSD still applies on top of SLA approval.`,
    source: "https://www.sla.gov.sg/land-dealings-approval-unit",
    priority: "high",
  },
  {
    id: 11,
    propertyType: "condo",
    workflow: "meeting-buyer",
    question: "New launch condo — what is the booking process?",
    answer: `1. Ballot for queue number (if balloting)
2. Select unit on booking day
3. Sign Booking Form + pay 5% booking fee (CASH/cheque)
4. Receive OTP from developer (valid 3 weeks for condo)
5. Within 3 weeks: exercise OTP or forfeit 25% of booking fee
6. Appoint lawyer, arrange loan
7. Sign S&P Agreement within 3 weeks of exercising OTP
8. Progressive payment over construction (3-5 years)

**Warning:** Cooling-off period: 3 calendar days after exercising OTP.`,
    source: "https://www.ura.gov.sg/Corporate/Property/Residential/Buying-Property",
    priority: "high",
  },
  {
    id: 12,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "Can my client buy resale HDB with short remaining lease?",
    answer: `**Rules:**
- Lease < 20 years → CANNOT use CPF at all
- Lease 20+ but doesn't cover youngest buyer to 95 → CPF PRO-RATED
- Lease covers youngest buyer to 95 → FULL CPF

HDB loan also pro-rated if lease doesn't cover to 95.

**Tip:** Always check remaining lease vs buyer's age FIRST before viewing older flats.`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "high",
  },

  // ═══ MEETING A SELLER ═══
  {
    id: 20,
    propertyType: "hdb",
    workflow: "meeting-seller",
    question: "What happens to CPF when selling property?",
    answer: `MUST refund regardless of age:
Principal (P) + Accrued interest at 2.5% (I) → back to CPF

**Below 55:** Refund → OA
**Above 55:** Refund → meet FRS in RA first, balance → OA (from 1 Jul 2024)

**Warning:** Even selling at a loss — must refund up to net sale proceeds.
**Tip:** Always check CPF statement early for exact P+I.`,
    source: "https://www.cpf.gov.sg/member/home-ownership/selling-your-home",
    priority: "high",
  },
  {
    id: 21,
    propertyType: "hdb",
    workflow: "meeting-seller",
    question: "How to calculate sale proceeds (positive sale)?",
    answer: `**Example:**
Selling price: $500K
Outstanding loan: $200K
Mr CPF P+I: $150K
Mrs CPF P+I: $100K

$500K − $200K = $300K net
$300K − $150K − $100K = $50K cash to split

**Tip:** Pull CPF usage statement from my.cpf.gov.sg BEFORE listing.`,
    source: "https://www.cpf.gov.sg/member/home-ownership/selling-your-home",
    priority: "high",
  },
  {
    id: 22,
    propertyType: "hdb",
    workflow: "meeting-seller",
    question: "How is CPF refund split for NEGATIVE sale?",
    answer: `When net proceeds < total P+I:

Your refund = (Your P+I ÷ All owners' P+I) × Net proceeds

**Example:**
Net: $160K. Mr P+I: $150K. Mrs P+I: $50K. Total: $200K.
Mr: 150/200 × $160K = $120K (short $30K)
Mrs: 50/200 × $160K = $40K (short $10K)
Cash: $0

**Warning:** Buyer's deposit must be returned to sellers' CPF too.`,
    source: "https://www.cpf.gov.sg/member/home-ownership/selling-your-home",
    priority: "high",
  },
  {
    id: 23,
    propertyType: "general",
    workflow: "meeting-seller",
    question: "What documents should seller prepare?",
    answer: `**Key documents:**
1. CPF Usage Statement (from my.cpf.gov.sg) — shows P+I
2. Outstanding loan statement from bank/HDB
3. Title deed / lease info
4. Latest property tax notice
5. Past renovation invoices (for buyer reference)

**For HDB resale:**
6. HDB resale checklist (from HDB portal)
7. Ethnic Integration Policy quota check

**Tip:** Get CPF statement FIRST — it determines how much cash seller actually gets.`,
    source: "https://www.hdb.gov.sg/residential/selling-a-flat",
    priority: "high",
  },
  {
    id: 24,
    propertyType: "hdb",
    workflow: "meeting-seller",
    question: "What is the resale levy and when does it apply?",
    answer: `Applies when: Received housing subsidy + buying another subsidised flat.

**Levy by flat type SOLD:**
- 2-room: $15K
- 3-room: $30K
- 4-room: $40K
- 5-room: $45K
- Executive: $50K
- EC: $55K

Does NOT apply when buying resale or private property.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/resale/financing/resale-levy",
    priority: "high",
  },
  {
    id: 25,
    propertyType: "condo",
    workflow: "meeting-seller",
    question: "What is Seller's Stamp Duty (SSD) for condo?",
    answer: `SSD applies if selling within 3 years of purchase:
- Within 1 year: 12% of selling price
- Within 2 years: 8%
- Within 3 years: 4%
- After 3 years: NO SSD

**Warning:** SSD is calculated on selling price or market value (higher).
**Tip:** Always check purchase date before advising seller on timing.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/selling-or-disposing-of-property/seller-stamp-duty-(ssd)",
    priority: "high",
  },
  {
    id: 26,
    propertyType: "general",
    workflow: "meeting-seller",
    question: "What changed for CPF refund from 1 Jul 2024?",
    answer: `**BEFORE 1 Jul 2024 (age 55+):** Balance after FRS → paid as CASH.

**FROM 1 Jul 2024:** Balance → OA as default.
Members can then:
- Use for next property purchase
- Transfer to RA for higher interest
- Withdraw as cash

**Tip:** Advise senior sellers: money goes to OA first, not cash directly.`,
    source: "https://www.cpf.gov.sg/member/home-ownership/selling-your-home",
    priority: "high",
  },

  // ═══ CPF RULES ═══
  {
    id: 40,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "What are the 4 types of CPF accounts?",
    answer: `1. **Ordinary Account (OA)** — housing, insurance, investment, education
2. **Special Account (SA)** — retirement (closed for 55+ from 2025)
3. **Medisave Account (MA)** — medical
4. **Retirement Account (RA)** — created at 55 from OA+SA

**Key:** ONLY OA can be used for property.`,
    source: "https://www.cpf.gov.sg/member/cpf-overview",
    priority: "high",
  },
  {
    id: 41,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "CPF contribution rates from Jan 2026",
    answer: `For employees earning > $750/month:

- 55 & below: Total 37% (Employer 17%, Employee 20%)
- Above 55–60: Total 34% (+1.5%) (Employer 16%, Employee 18%)
- Above 60–65: Total 25% (+1.5%) (Employer 12.5%, Employee 12.5%)
- Above 65–70: Total 16.5% (Employer 9%, Employee 7.5%)
- Above 70: Total 12.5% (Employer 7.5%, Employee 5%)

Salary ceiling: $8,000/month from Jan 2026.
The +1.5% for age 55-65 goes to RA (up to FRS), then OA.`,
    source: "https://www.cpf.gov.sg/employer/employer-obligations",
    priority: "high",
  },
  {
    id: 42,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "CPF interest rates (2026)",
    answer: `**OA:** 2.5% p.a.
**SA / MA / RA:** 4.0% p.a.
(Reviewed quarterly)

**Extra interest:**
- All members: +1% on first $60K combined (cap $20K from OA)
- Age 55+: additional +1% on first $30K

**Effective for seniors:**
- First $30K: up to 6% p.a.
- Next $30K: up to 5% p.a.
- Remaining: 4% p.a.`,
    source: "https://www.cpf.gov.sg/member/growing-your-savings",
    priority: "high",
  },
  {
    id: 43,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "What can CPF OA be used for in property?",
    answer: `- Downpayment (lump sum)
- Monthly loan instalments
- Partial/full loan repayment
- Buyer's Stamp Duty & ABSD
- Mortgage stamp duty
- Legal fees
- Home Protection Scheme premiums (HDB only)
- HDB upgrading costs (MUP/HIP)
- Construction loan repayment (landed, after TOP)

**Cannot use SA or MA for property.**`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "high",
  },
  {
    id: 44,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "What is VL (Valuation Limit)?",
    answer: `VL = Purchase price OR market valuation — whichever is LOWER.

**Example:** Price $420K, Valuation $400K → VL = $400K

This determines the baseline CPF usage limit.`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "high",
  },
  {
    id: 45,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "What is WL (Withdrawal Limit)?",
    answer: `WL = 120% of VL (from Jan 2008)

**Example:** VL $400K → WL = $480K

Applies to bank loans. After hitting VL, can continue to WL if BRS is set aside.
For HDB loan on new BTO → NO WL applies (no limit).`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "high",
  },
  {
    id: 46,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "CPF usage rules: HDB loan vs Bank loan summary",
    answer: `**REMAINING LEASE COVERS BUYER TO 95:**

**HDB Loan — New flat:** NO LIMIT
**HDB Loan — Resale flat:** Up to VL, beyond VL if set aside BRS
**Bank Loan — Any:** Up to VL, then up to WL (120% VL) if set aside BRS

**Tip:** HDB loan is more generous for CPF usage. No VL/WL for new BTO is a big advantage.`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "high",
  },
  {
    id: 47,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "The 'age 95' rule and CPF pro-ration formula",
    answer: `From 10 May 2019:
Youngest buyer's age + Remaining lease ≥ 95 → FULL CPF
If < 95 → Pro-rated

**Formula:**
(Remaining Lease − 20) ÷ (95 − Youngest Age − 20) × VL

**Examples:**
- Age 25 + 88yr = 113 → Full
- Age 25 + 65yr = 90 → 45/50 = 90%
- Age 45 + 50yr = 95 → Full (exactly 95 counts)
- Age 50 + 40yr = 90 → 20/25 = 80%

Use CPF Calculator to compute exact figures.`,
    source: "https://www.cpf.gov.sg/member/tools-and-services/calculators/cpf-housing-usage",
    priority: "high",
  },
  {
    id: 48,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "What is BRS, FRS, ERS for 2026?",
    answer: `For members turning 55 in 2026:
- **Basic Retirement Sum (BRS):** $110,200
- **Full Retirement Sum (FRS):** $220,400 (2×BRS)
- **Enhanced Retirement Sum (ERS):** $440,800 (4×BRS)

BRS increases ~3.5% yearly.
Relevant sum is based on year person TURNED 55.

2023: $99,400 / $198,800
2024: $102,900 / $205,800
2025: $106,500 / $213,000
2026: $110,200 / $220,400
2027: $114,100 / $228,200`,
    source: "https://www.cpf.gov.sg/member/retirement-income",
    priority: "high",
  },
  {
    id: 49,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "What is Property Pledge?",
    answer: `Members 55+ with property covering them to age 95 can:
- Pledge property up to BRS amount
- Withdraw RA savings ABOVE BRS in cash

**Key points:**
- If property sold → pledge amount refunded to RA
- Does NOT affect ownership
- Need all co-owners' consent
- Excludes interest, govt grants, top-ups`,
    source: "https://www.cpf.gov.sg/member/retirement-income",
    priority: "high",
  },
  {
    id: 50,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "CPF for 2nd property — what rules apply?",
    answer: `**HAS property covering to age 95:**
→ Set aside BRS in OA+SA (<55) or RA+OA (55+)
→ Only EXCESS OA can be used
→ WL capped at 100% VL (not 120%)

**DOES NOT HAVE property covering to 95:**
→ Must set aside FRS (not just BRS)
→ Only excess OA can be used

Grace period: 6 months from purchase (completed) or TOP (under construction) to sell existing property → BRS rule waived.`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "high",
  },
  {
    id: 51,
    propertyType: "general",
    workflow: "cpf-rules",
    question: "What is Home Protection Scheme (HPS)?",
    answer: `MANDATORY if using CPF for HDB monthly loan instalments.

Mortgage-reducing insurance covering:
- Death / Terminal illness / Total permanent disability
- Up to age 65 or loan fully paid
- Premium from CPF OA
- Min 100% coverage (50% each or 100% each)

Can buy external insurance (need CPFB approval for exemption).`,
    source: "https://www.cpf.gov.sg/member/home-ownership/home-protection-scheme",
    priority: "high",
  },

  // ═══ GRANTS & SUBSIDIES ═══
  {
    id: 60,
    propertyType: "hdb",
    workflow: "grants-subsidy",
    question: "Maximum grants for resale flat — families",
    answer: `Up to 3 grants combined:

**1. Family Grant:** $80K (2-4rm) or $50K (5rm+)
   Income ≤ $14K
**2. Enhanced Housing Grant:** Up to $120K
   Income ≤ $9K
**3. Proximity Grant:** $30K (together) / $20K (within 4km)
   No income cap!

**MAX: $80K + $120K + $30K = $230,000!**

**Tip:** Grant goes to CPF OA, counts towards withdrawal limit.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility",
    priority: "high",
  },
  {
    id: 61,
    propertyType: "hdb",
    workflow: "grants-subsidy",
    question: "Maximum grants for resale flat — singles",
    answer: `**1. Singles Grant:** $40K (2-4rm) / $25K (5rm)
   Age 35+, income ≤ $7K
**2. EHG Singles:** Up to $60K
   Income ≤ $4,500
**3. Proximity Grant:** $15K (together) / $10K (within 4km)

**MAX: $40K + $60K + $15K = $115,000!**`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility",
    priority: "high",
  },
  {
    id: 62,
    propertyType: "hdb",
    workflow: "grants-subsidy",
    question: "EHG income table — families",
    answer: `Household income → EHG:
≤$1,500 → $120K    $1,501-$2K → $110K
$2,001-$2.5K → $105K    $2,501-$3K → $95K
$3,001-$3.5K → $90K    $3,501-$4K → $80K
$4,001-$4.5K → $70K    $4,501-$5K → $65K
$5,001-$5.5K → $55K    $5,501-$6K → $50K
$6,001-$6.5K → $40K    $6,501-$7K → $30K
$7,001-$7.5K → $25K    $7,501-$8K → $20K
$8,001-$8.5K → $10K    $8,501-$9K → $5K

Requires 12 months continuous employment. For new AND resale flats.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility",
    priority: "high",
  },
  {
    id: 63,
    propertyType: "hdb",
    workflow: "grants-subsidy",
    question: "Grants for NEW BTO flat",
    answer: `**1. Enhanced Housing Grant:** Up to $120K (families) / $60K (singles)
**2. Step-Up Grant:** $15K (second-timer upgrading 2-room→3-room)

Family Grant ($80K/$50K) is resale ONLY.
Proximity Grant is resale ONLY.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility",
    priority: "high",
  },
  {
    id: 64,
    propertyType: "condo",
    workflow: "grants-subsidy",
    question: "Grants for EC from developer",
    answer: `CPF Housing Grant for EC (first-timer families):
- Income ≤ $10K: $30,000
- $10,001–$11K: $20,000
- $11,001–$12K: $10,000
- $12,001–$16K: NOT eligible

**Warning:** New EC from developer only, not resale EC.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/executive-condominiums/cpf-housing-grants-for-ecs",
    priority: "high",
  },
  {
    id: 65,
    propertyType: "hdb",
    workflow: "grants-subsidy",
    question: "Grant conditions — what comes with accepting a grant?",
    answer: `Recipients:
- Considered having enjoyed housing subsidy
- Must pay resale levy if buying another subsidised flat
- 5-year MOP before selling
- Cannot invest in private property during MOP
- Cannot sublet whole flat during MOP
- On sale: ALL grant + CPF used + accrued interest refunded to CPF
- Flat must have ≥ 20yr remaining lease`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility",
    priority: "high",
  },
  {
    id: 66,
    propertyType: "hdb",
    workflow: "grants-subsidy",
    question: "1-year time bar after BTO cancellation",
    answer: `If cancelled after booking BTO (from March 2012 onwards):
→ Must wait 1 YEAR before applying for resale with CPF Housing Grant or being essential occupier.

**Tip:** Warn clients: don't book BTO unless committed.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-new-flats",
    priority: "medium",
  },

  // ═══ LOANS & FINANCE ═══
  {
    id: 70,
    propertyType: "hdb",
    workflow: "loans-finance",
    question: "HDB Loan vs Bank Loan — full comparison",
    answer: `**HDB LOAN:**
- LTV: 80%
- Downpayment: 20% (ALL by CPF)
- Interest: 2.6% fixed (OA rate + 0.1%)
- New BTO: No VL/WL
- No penalty for early repayment
- Income ceiling $14K
- Both must not own private property

**BANK LOAN:**
- No income ceiling
- Lower rates possible (1.5-3%)
- LTV: 75%
- 5% cash in downpayment
- Subject to VL & WL
- Variable rates can rise
- May have lock-in penalty (usually 1-2 years)`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/financing-a-flat-purchase",
    priority: "high",
  },
  {
    id: 71,
    propertyType: "general",
    workflow: "loans-finance",
    question: "What is TDSR?",
    answer: `Total Debt Servicing Ratio: All monthly debts ≤ 55% of gross monthly income.

Includes: Housing loans, car loan, personal loan, credit card minimum, student loan.

**Tip:** If tight: pay down other debts, longer tenure, or bigger downpayment.`,
    source: "https://www.mas.gov.sg/regulation/explainers/property-loan-rules",
    priority: "high",
  },
  {
    id: 72,
    propertyType: "general",
    workflow: "loans-finance",
    question: "Maximum loan tenure rules",
    answer: `**HDB Loan:** Max 25 years (or until age 65)
**Bank Loan:** Max 30 years (or age 65)

If tenure + age > 65:
- LTV drops to 55%
- Min 10% cash downpayment

**Tip:** Older clients = shorter tenure = higher monthly payments = TDSR issues.`,
    source: "https://www.mas.gov.sg/regulation/explainers/property-loan-rules",
    priority: "high",
  },

  // ═══ STAMP DUTY ═══
  {
    id: 80,
    propertyType: "general",
    workflow: "stamp-duty",
    question: "Buyer's Stamp Duty (BSD) rates",
    answer: `BSD on purchase price/valuation (higher):
- First $180K: 1%
- Next $180K: 2%
- Next $640K: 3%
- Next $500K: 4%
- Next $1.5M: 5%
- Above $3M: 6%

**Example — $1M property:**
$1,800 + $3,600 + $19,200 = $24,600

**Tip:** BSD can be paid by CPF OA.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/buying-or-acquiring-property/buyer-stamp-duty-(bsd)",
    priority: "high",
  },
  {
    id: 81,
    propertyType: "general",
    workflow: "stamp-duty",
    question: "ABSD rates — complete table",
    answer: `**SG Citizen:**
- 1st: 0%   - 2nd: 20%   - 3rd+: 30%

**SG PR:**
- 1st: 5%   - 2nd: 30%   - 3rd+: 35%

**Foreigner:** 60% (all)
**Entity:** 65% (all) + 35% non-remittable

**Tip:** ABSD can be paid by CPF OA.
**Tip:** ABSD is ON TOP of BSD.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/paying-stamp-duty/additional-buyer-stamp-duty-(absd)",
    priority: "high",
  },
  {
    id: 82,
    propertyType: "general",
    workflow: "stamp-duty",
    question: "ABSD remission — when can you get it back?",
    answer: `SG Citizen buying 2nd property:
- Pay 20% ABSD upfront
- Sell existing property within 6 months of new purchase (or 6 months of new TOP)
- Apply for ABSD remission from IRAS

**Warning:** Must pay first, then claim back. Cash flow planning crucial.
**Tip:** This is the key mechanism for HDB→condo upgraders.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/paying-stamp-duty/additional-buyer-stamp-duty-(absd)",
    priority: "high",
  },
  {
    id: 83,
    propertyType: "general",
    workflow: "stamp-duty",
    question: "Seller's Stamp Duty (SSD)",
    answer: `SSD if selling within 3 years:
- ≤ 1 year: 12%
- ≤ 2 years: 8%
- ≤ 3 years: 4%
- > 3 years: 0%

Calculated on selling price or market value (higher).
**Tip:** Always check purchase date for sellers.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/selling-or-disposing-of-property/seller-stamp-duty-(ssd)",
    priority: "high",
  },

  // ═══ RENTAL & LANDLORD ═══
  {
    id: 90,
    propertyType: "hdb",
    workflow: "rental",
    question: "HDB subletting rules — what landlords must know",
    answer: `- MUST get HDB approval BEFORE subletting
- Min occupation period: 5 years (MOP)
- Owner must continue to live in flat (if renting rooms)
- Whole flat subletting: owner can live elsewhere
- Max 6 persons in flat (including owner's household)
- Ethnic Integration Policy quota must be met
- Min subletting period: 6 months
- Non-Malaysian work permit holders CANNOT rent HDB

**Tip:** Check HDB website for current ethnic quota for the block.`,
    source: "https://www.hdb.gov.sg/residential/renting-a-flat",
    priority: "high",
  },
  {
    id: 91,
    propertyType: "condo",
    workflow: "rental",
    question: "Condo rental process — step by step",
    answer: `1. Find tenant (portal listing, agent, referral)
2. Screen tenant (employment, references, pass type)
3. Negotiate terms (rent, deposit, duration)
4. Sign Letter of Intent (LOI) + collect 1 month good faith deposit
5. Draft Tenancy Agreement (TA)
6. Sign TA + collect:
   - Security deposit (typically 2 months rent)
   - Advance rent (1 month)
   - Stamp duty (paid by tenant usually)
7. Hand over keys + inventory checklist

**Tip:** Diplomatic clause typically kicks in after 12 months.`,
    source: "https://www.cea.gov.sg/consumers/renting-a-property",
    priority: "high",
  },
  {
    id: 92,
    propertyType: "general",
    workflow: "rental",
    question: "What is the standard rental commission?",
    answer: `Standard market practice:

**HDB rental:**
- Landlord agent: 1 month rent (2-year lease) or half month (1-year)
- Tenant agent: 1 month rent (2-year lease) or half month (1-year)

**Condo rental:**
- Same as HDB typically
- Some luxury properties: higher commissions negotiable

**Warning:** Agent can only collect from ONE party per transaction.
**Tip:** Commissions are negotiable — no fixed rules.`,
    source: "https://www.cea.gov.sg/consumers/renting-a-property",
    priority: "high",
  },
  {
    id: 93,
    propertyType: "general",
    workflow: "rental",
    question: "Tenancy Agreement essentials — what to include",
    answer: `**Key clauses:**
1. Rent amount + payment date
2. Security deposit (usually 2 months)
3. Lease duration (typically 1 or 2 years)
4. Diplomatic clause (allows early termination with 2 months notice, usually after 12 months)
5. Maintenance responsibilities
6. Minor repair clause (tenant pays first $150-$200)
7. Inventory list + condition report
8. Permitted use (residential only)
9. Number of occupants
10. Termination & renewal terms

**Tip:** Stamp duty on lease: Tenant pays, 0.4% × total rent for lease up to 4 years.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property",
    priority: "high",
  },
  {
    id: 94,
    propertyType: "hdb",
    workflow: "rental",
    question: "Who can and cannot rent HDB flats?",
    answer: `**CAN rent HDB:**
- SG Citizens
- SG PRs
- Employment Pass holders
- S Pass holders
- Work Permit holders (Malaysian only)
- Student Pass holders
- Dependant's Pass holders
- Long Term Visit Pass holders

**CANNOT rent HDB:**
- Work Permit holders (non-Malaysian)
- Tourists / Short-term visitors

**Warning:** Subject to Ethnic Integration Policy quota + non-citizen quota.`,
    source: "https://www.hdb.gov.sg/residential/renting-a-flat",
    priority: "high",
  },
  {
    id: 95,
    propertyType: "condo",
    workflow: "rental",
    question: "Condo rental stamp duty — who pays and how much?",
    answer: `Usually paid by TENANT.

**Rates:**
- Lease ≤ 4 years: 0.4% of total rent
- Lease > 4 years: 0.4% of total rent for 4 years

**Example:** $3,000/month × 24 months = $72,000 total rent
Stamp duty: 0.4% × $72,000 = $288

Pay via IRAS within 14 days of signing TA.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property",
    priority: "medium",
  },

  // ═══ TRICKY SCENARIOS ═══
  {
    id: 100,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Client is divorced — can they buy HDB?",
    answer: `- Divorced + child custody → any flat type (child as occupier)
- Divorced, 35+, no child → 2-room Flexi (new) or resale up to 5-room
- Divorced, under 35, no child → cannot buy as single

**Warning:** Must wait 30 MONTHS from divorce completion before eligible for HDB flat.
**Warning:** If ex-spouse still on flat → must settle ownership first.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility",
    priority: "high",
  },
  {
    id: 101,
    propertyType: "condo",
    workflow: "tricky",
    question: "Decoupling — how does it work?",
    answer: `Strategy to buy 2nd property without ABSD:
1. One spouse transfers share to other (partial sale)
2. BSD payable on transfer (based on market value of share)
3. 'Freed' spouse buys new property as 1st-time buyer → 0% ABSD

**Warning:** Bank must approve refinancing
**Warning:** Transferring spouse's CPF must be refunded with accrued interest
**Warning:** Legal + stamp duty costs apply

**Tip:** Popular but complex — recommend legal advice.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/buying-or-acquiring-property/additional-buyer-stamp-duty-(absd)",
    priority: "high",
  },
  {
    id: 102,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Client inherited property during MOP — what happens?",
    answer: `**If inherited private property during HDB MOP:**
- HDB may allow retention of inherited property if it's occupied by the inheritor's family
- Otherwise, must dispose of one property within 6 months

**If inherited HDB flat during MOP:**
- Complex — depends on existing flat ownership and family situation

**Tip:** Each case is unique. Advise client to write to HDB for case-specific ruling.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/conditions-after-buying",
    priority: "high",
  },
  {
    id: 103,
    propertyType: "condo",
    workflow: "tricky",
    question: "PR buying first condo — total cash needed?",
    answer: `**Example: $1.5M condo (PR, 1st property):**

BSD: ~$44,600
ABSD: 5% = $75,000
Downpayment: 25% = $375,000 (min $75K cash)
Loan: 75% = $1,125,000
Legal: ~$3,000-$5,000

**Total upfront cash needed:**
~$75K (cash DP) + $75K (ABSD) + $44.6K (BSD) + $4K (legal)
= ~$198,600+

**Tip:** PRs are often shocked by ABSD. Budget early.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/paying-stamp-duty/additional-buyer-stamp-duty-(absd)",
    priority: "high",
  },
  {
    id: 104,
    propertyType: "general",
    workflow: "tricky",
    question: "Client age 30 buying flat with 55-year lease — what happens?",
    answer: `Check: 30 + 55 = 85 < 95

Pro-rated: (55-20)/(95-30-20) = 35/45 = 77.8%

If VL = $400K → max CPF = ~$311K only
HDB loan LTV also pro-rated: 77.8% × 75% = 58.3%

**Warning:** Client needs much MORE cash.
**Tip:** Consider newer flat or adding older co-buyer.`,
    source: "https://www.cpf.gov.sg/member/tools-and-services/calculators/cpf-housing-usage",
    priority: "high",
  },
  {
    id: 105,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Can someone working overseas buy BTO?",
    answer: `Generally NO — BTO requires at least 1 applicant to be SG Citizen AND physically present for key collection.

But can buy resale HDB remotely via power of attorney.

**Tip:** Advise overseas Singaporeans to consider resale instead of BTO.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-new-flats",
    priority: "medium",
  },
  {
    id: 106,
    propertyType: "condo",
    workflow: "tricky",
    question: "Can foreigner buy condo in Singapore?",
    answer: `YES — foreigners CAN buy private condos/apartments.

CANNOT buy: Landed, HDB, vacant land, shophouses.

ABSD: 60% — massive tax.
No CPF — must be full cash or foreign bank loan.

**Tip:** Some foreign banks offer loans for SG property.`,
    source: "https://www.sla.gov.sg/land-dealings-approval-unit",
    priority: "high",
  },
  {
    id: 107,
    propertyType: "landed",
    workflow: "tricky",
    question: "CPF for self-build / reconstruction of landed house",
    answer: `**Process:**
1. Get URA written permission for reconstruction
2. Get construction loan from bank
3. Build the house
4. Get TOP issued
5. Apply for CPF within 6 months of TOP

Total CPF for construction + purchase cannot exceed new property value.

**Documents needed:** URA permission, cost breakdown, valuation report at TOP, receipts, Letter of Offer, TOP certificate.`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "medium",
  },
  {
    id: 108,
    propertyType: "landed",
    workflow: "tricky",
    question: "Buying old leasehold landed with 50yr lease — CPF?",
    answer: `Buyer age 40 + 50yr = 90 < 95 → Pro-rated (85.7%)
Buyer age 50 + 50yr = 100 ≥ 95 → Full CPF

**Tip:** Freehold landed = no lease concern ever.
**Warning:** Banks may be reluctant for short-lease landed.`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "high",
  },
  {
    id: 109,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Client buying resale HDB with <20yr lease — can use CPF?",
    answer: `CANNOT use CPF at all — minimum 20 years required.
CANNOT get HDB loan.

Must pay entirely by cash + bank loan (if bank willing).
No grants available either.

**Tip:** Strongly advise against unless client fully understands the implications.`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "high",
  },
  {
    id: 110,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Buyer is 26, co-buyer (parent) is 60 — which age for CPF?",
    answer: `The YOUNGEST buyer's age is used for pro-ration.

So age 26 is used, not 60.
26 + remaining lease ≥ 95? That's the test.

**Tip:** Adding older parent helps with income for loan but doesn't hurt CPF since youngest age is used.`,
    source: "https://www.cpf.gov.sg/member/home-ownership",
    priority: "high",
  },

  // ═══ AGENT BASICS ═══
  {
    id: 120,
    propertyType: "general",
    workflow: "agent-basics",
    question: "Standard commission rates in Singapore",
    answer: `**SELLING:**
- HDB resale: ~2% of selling price
- Condo/Private: 2-4% (negotiable)
- Landed: 2%+ (often higher — complex deals)

**BUYING:**
- HDB resale: ~1% (paid by buyer)
- Private: Usually 0% (buyer's agent paid via co-broking from seller's agent)

**RENTAL:**
- 1 month rent (2-year lease)
- Half month (1-year lease)

**Warning:** Cannot dual-represent. Can only collect from ONE party.
**Tip:** All commissions are negotiable.`,
    source: "https://www.cea.gov.sg/consumers/engaging-a-property-agent/what-to-take-note-of-when-engaging-a-property-agent",
    priority: "high",
  },
  {
    id: 121,
    propertyType: "general",
    workflow: "agent-basics",
    question: "CEA rules every agent must follow",
    answer: `**Key CEA regulations:**
1. Must display CEA registration card during work
2. Cannot handle transaction monies (e.g., deposits go direct to seller/lawyer)
3. Cannot dual-represent buyer AND seller in same transaction
4. Must issue prescribed documents (estate agency agreement)
5. Must declare conflict of interest
6. Cannot make misleading claims about property
7. Must keep proper records for 5 years
8. Must complete CPD hours yearly

**Warning:** Violations can lead to fines, suspension, or revocation.`,
    source: "https://www.cea.gov.sg/professionals/professional-conduct",
    priority: "high",
  },
  {
    id: 122,
    propertyType: "general",
    workflow: "agent-basics",
    question: "What are CPD requirements?",
    answer: `Continuing Professional Development:
- Must complete required CPD hours yearly
- Includes: Ethics, property law updates, CPF/HDB policy changes, professional skills
- Tracked by CEA
- Failure to complete → may affect registration renewal`,
    source: "https://www.cea.gov.sg/professionals/continuing-professional-development",
    priority: "medium",
  },
  {
    id: 123,
    propertyType: "general",
    workflow: "agent-basics",
    question: "What can and cannot agents handle in terms of money?",
    answer: `**CAN handle:** Valuation fees, agent commissions

**CANNOT handle:**
- Option money / exercise money
- Deposit money
- Stamp duty payments
- Any buyer/seller transaction monies

Payments should go DIRECTLY between parties or through lawyers' escrow.

**Tip:** Never hold client's money — serious CEA violation.`,
    source: "https://www.cea.gov.sg/consumers/engaging-a-property-agent/what-to-take-note-of-when-engaging-a-property-agent",
    priority: "high",
  },
  {
    id: 124,
    propertyType: "general",
    workflow: "agent-basics",
    question: "Essential GOV.SG links every agent must bookmark",
    answer: `**CPF Housing Calculator:**
cpf.gov.sg/member/tools-and-services/calculators/cpf-housing-usage

**HDB Resale Portal:**
hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-resale-flats

**HDB Grant Eligibility:**
hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility

**IRAS Stamp Duty Calculator:**
iras.gov.sg/taxes/stamp-duty

**MAS Loan Rules:**
mas.gov.sg/regulation/explainers/property-loan-rules

**CEA Public Register:**
cea.gov.sg/public-register

**CPF Online:**
my.cpf.gov.sg`,
    source: "https://www.cpf.gov.sg/member/tools-and-services/calculators/cpf-housing-usage",
    priority: "high",
  },
  {
    id: 130,
    propertyType: "general",
    workflow: "agent-basics",
    question: "Can client above 55 still use CPF for housing loan?",
    answer: `YES — at 55, RA created. Savings up to FRS transferred from SA+OA to RA.

After that:
- Remaining OA balance → can continue paying loan
- New CPF contributions to OA → can also be used

**Tip:** OA shrinks at 55 — plan ahead.`,
    source: "https://www.cpf.gov.sg/member/retirement-income",
    priority: "high",
  },
  {
    id: 131,
    propertyType: "general",
    workflow: "agent-basics",
    question: "How to reserve OA savings before turning 55?",
    answer: `At age 54, apply to reserve OA so it WON'T transfer to RA.

**For:** Existing housing loan or next property.

**How:** Singpass → my cpf → My Requests → Retirement → 'Decide on my CPF options'

**Deadline:** Within 6 months before 55th birthday, at least 5 working days.
**Warning:** Reserved amount locked to specified property only.`,
    source: "https://www.cpf.gov.sg/member/retirement-income",
    priority: "high",
  },

  // ═══ CALCULATIONS ═══
  {
    id: 140,
    propertyType: "general",
    workflow: "calculations",
    question: "Quick BSD calculation method",
    answer: `For quick mental math:

**Up to $1M:**
BSD ≈ 3% × Price − $5,400

**Examples:**
$500K: 3% × 500K − $5,400 = $9,600
$800K: 3% × 800K − $5,400 = $18,600
$1M: 3% × 1M − $5,400 = $24,600

For above $1M, add 4% bracket.

**Tip:** Use IRAS stamp duty calculator for exact figures.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/buying-or-acquiring-property/buyer-stamp-duty-(bsd)",
    priority: "high",
  },
  {
    id: 141,
    propertyType: "general",
    workflow: "calculations",
    question: "Quick monthly mortgage estimation",
    answer: `**Rough formula:** $4.50 per $1,000 borrowed per month (at ~3% interest, 25yr)

**Examples:**
$500K loan ≈ $2,250/month
$750K loan ≈ $3,375/month
$1M loan ≈ $4,500/month

For HDB loan (2.6%, 25yr): ~$4.30 per $1,000

**Tip:** This is approximate — use bank calculators for exact.`,
    source: "https://www.mas.gov.sg/regulation/explainers/property-loan-rules",
    priority: "high",
  },
  {
    id: 142,
    propertyType: "general",
    workflow: "calculations",
    question: "How to calculate seller's net proceeds",
    answer: `**Formula:**
Selling Price
− Outstanding loan redemption
− CPF refund (P+I for all owners)
− Agent commission (~2%)
− Legal fees (~$2-3K)
− SSD (if within 3 years for private)
= Net cash proceeds

**Tip:** Run this for every seller client at first meeting.`,
    source: "https://www.cpf.gov.sg/member/home-ownership/selling-your-home",
    priority: "high",
  },
  {
    id: 143,
    propertyType: "general",
    workflow: "calculations",
    question: "How to calculate buyer's total upfront cost",
    answer: `**Formula:**
Downpayment (cash portion)
+ Downpayment (CPF portion)
+ BSD
+ ABSD (if applicable)
+ Legal fees (~$3-5K)
+ Stamp fees for mortgage
+ Valuation fee (~$200-500)
+ Agent commission (if buyer pays)
= Total upfront cost

**Tip:** Break this down for every buyer at first meeting.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/buying-or-acquiring-property/buyer-stamp-duty-(bsd)",
    priority: "high",
  },

  // ═══ HFE LETTER ═══
  {
    id: 150,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "What is the HFE letter and why is it important?",
    answer: `HDB Flat Eligibility (HFE) letter replaced the old HLE letter. It tells buyers upfront:
- Eligibility to buy new or resale flat
- Amount of CPF housing grants eligible for
- HDB housing loan amount eligible for
- Resale levy / premium payable (for 2nd-timers)

**Warning:** MUST have valid HFE letter BEFORE:
- Applying for BTO
- Sellers can grant you OTP for resale

Valid for 9 months. Processing: ~1 month. Free of charge.
Apply via HDB Flat Portal with Singpass.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/application-for-an-hdb-flat-eligibility-hfe-letter",
    priority: "high",
  },
  {
    id: 151,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "Can buyer still use HFE letter if income changed after issuance?",
    answer: `YES — as long as HFE letter is still valid (9 months), the outcome stands.

If income INCREASED above ceiling after HFE was issued → can still proceed.
If income DECREASED and now qualifies for EHG → must cancel current HFE and apply fresh one.

Housing loan amount won't be reassessed unless there are adverse changes to loan-servicing ability.

**Tip:** Advise clients: Apply for HFE early. It locks in eligibility.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/application-for-an-hdb-flat-eligibility-hfe-letter",
    priority: "high",
  },
  {
    id: 152,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "What is the difference between HFE and HLE letter?",
    answer: `**HLE** (HDB Loan Eligibility) = old system, only assessed loan eligibility.

**HFE** (HDB Flat Eligibility) = new system (from May 2023), comprehensive:
- Flat purchase eligibility
- CPF housing grant amounts
- HDB loan amount (3 tiers: Prudent, Moderate, Maximum)
- Resale levy info

HFE validity: 9 months
HLE is no longer issued for new applications.

**Tip:** If client has old HLE letter, check if it's still valid.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/application-for-an-hdb-flat-eligibility-hfe-letter",
    priority: "high",
  },

  // ═══ EIP & SPR QUOTA ═══
  {
    id: 160,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "What is the Ethnic Integration Policy (EIP) and how does it affect buying?",
    answer: `EIP = caps on ethnic group proportions per HDB block/neighbourhood to prevent enclaves.

**Block limit / Neighbourhood limit:**
- Chinese: 84% / 87%
- Malay: 25% / 22%
- Indian & Others: 15% / 13%

If quota for your race is hit → CANNOT buy in that block/neighbourhood.
Quotas refresh on 1st of each month.

**Tip:** Check EIP before viewing: hdb.gov.sg EIP/SPR Quota e-Service.
**Warning:** Mixed-race households can choose which race to register under.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-resale-flats/plan-source-and-contract/planning-considerations/eip-spr-quota",
    priority: "high",
  },
  {
    id: 161,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "What is the SPR Quota for HDB?",
    answer: `Non-Malaysian Singapore PR households:
- Block limit: 8%
- Neighbourhood limit: 5%

Malaysian PRs are EXEMPT from SPR quota (as long as Malaysian PR is listed as buyer).

**Warning:** SPR quota is separate from EIP — both must be met.
**Tip:** Always check both EIP and SPR quota before proceeding with any resale viewing.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-resale-flats/plan-source-and-contract/planning-considerations/eip-spr-quota",
    priority: "high",
  },
  {
    id: 162,
    propertyType: "hdb",
    workflow: "meeting-seller",
    question: "How does EIP affect SELLERS?",
    answer: `If your block's EIP quota for your race is at the limit:
- You can only sell to someone of the SAME race
- OR wait until quota refreshes next month

Minority sellers often face difficulty — smaller pool of eligible buyers.

HDB buyback scheme: If you've owned 10+ years AND tried selling for 6+ months at reasonable price → can apply for HDB to buy back.

**Tip:** Check EIP status before listing. If constrained, set realistic expectations on timeline.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-resale-flats/plan-source-and-contract/planning-considerations/eip-spr-quota",
    priority: "high",
  },

  // ═══ OTP DIFFERENCES ═══
  {
    id: 170,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "OTP for HDB resale — key details",
    answer: `**Option to Purchase (OTP) for HDB resale:**
- Option fee: $1 to $1,000 (negotiable)
- Valid for: 21 calendar days from date of issue
- Buyer exercises OTP by signing resale application + paying remaining deposit (total up to $5,000 including option fee)
- Seller must have registered Intent to Sell for >7 days
- Buyer must have valid HFE letter

**Warning:** If buyer doesn't exercise → seller keeps option fee only.
**Tip:** Option fee is much lower than private property.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-resale-flats",
    priority: "high",
  },
  {
    id: 171,
    propertyType: "condo",
    workflow: "meeting-buyer",
    question: "OTP for private property — key details",
    answer: `**OTP for private resale:**
- Option fee: Usually 1% of purchase price
- Valid for: 14 days (negotiable)
- Buyer exercises by signing + paying further 4% (total 5% deposit)
- Then sign Sale & Purchase Agreement

**OTP for new launch (developer):**
- Booking fee: 5% (cash/cheque)
- OTP valid: 3 weeks (21 days) — CANNOT be extended or reissued
- Exercise OTP → sign S&P within 3 weeks
- 3-day cooling-off period after exercising (forfeit 25% of booking fee)

**Warning:** NO cooling-off for resale private property.
**Warning:** Developer cannot reissue OTP to same buyer.`,
    source: "https://www.ura.gov.sg/Corporate/Property/Residential/Buying-Property",
    priority: "high",
  },

  // ═══ CASH OVER VALUATION (COV) ═══
  {
    id: 175,
    propertyType: "hdb",
    workflow: "meeting-buyer",
    question: "What is Cash Over Valuation (COV)?",
    answer: `COV = Purchase price − HDB valuation

**Example:** Price $550K, Valuation $520K → COV = $30K

COV MUST be paid in CASH. Cannot use CPF or loan.

HDB will issue a 'Request for Value' report during resale application.
Buyer only discovers the exact valuation AFTER committing to buy.

**Tip:** Advise buyer: Budget extra cash for potential COV.
**Tip:** Use recent transactions in the area to estimate likely valuation.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-resale-flats",
    priority: "high",
  },

  // ═══ URA CAVEATS ═══
  {
    id: 180,
    propertyType: "condo",
    workflow: "meeting-buyer",
    question: "What is a URA caveat and why does it matter?",
    answer: `A caveat is a legal document lodged with SLA by a buyer (through lawyer) after exercising OTP or signing S&P.

**Purpose:**
- Registers your legal interest in the property
- Prevents seller from selling to someone else
- URA uses caveats for property price index

Caveat data is PUBLIC — anyone can check prices at:
eservice.ura.gov.sg/property-market-information

Updated: Tuesdays (resale) and Fridays (new launches)

**Tip:** Use URA caveat data to check recent transaction prices when advising clients.`,
    source: "https://eservice.ura.gov.sg/property-market-information/pmiResidentialTransactionSearch",
    priority: "medium",
  },

  // ═══ PR BUYING RULES ═══
  {
    id: 185,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Can PRs buy HDB flats? What are the rules?",
    answer: `- Two PRs forming family nucleus → can buy RESALE flat only (not BTO)
- 1 SC + 1 PR → can buy BTO and resale
- Single PR → CANNOT buy HDB at all

**Additional rules for PR households:**
- Must meet SPR quota (non-Malaysian PRs)
- Cannot own private property (local/overseas)
- Must dispose of private property within 30 months BEFORE HFE application
- First-timer SC+PR household: $10,000 premium applies
- Can get Citizen Top-Up Grant later if PR becomes citizen

**Tip:** Many PR clients don't know they CAN buy resale HDB.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility",
    priority: "high",
  },
  {
    id: 186,
    propertyType: "condo",
    workflow: "tricky",
    question: "PR buying first condo — total upfront cash breakdown",
    answer: `**For $1.5M condo, PR 1st property:**

BSD: ~$44,600
ABSD: 5% × $1.5M = $75,000
Cash downpayment (5% min): $75,000
CPF downpayment (20%): $300,000
Legal fees: ~$4,000
Loan (75%): $1,125,000

**Total cash needed: ~$198,600+**
(Plus CPF if available)

**Warning:** ABSD must be paid in cash upfront.
**Tip:** Many PRs underestimate the total cash requirement.`,
    source: "https://www.iras.gov.sg/taxes/stamp-duty/for-property/paying-stamp-duty/additional-buyer-stamp-duty-(absd)",
    priority: "high",
  },

  // ═══ RENTAL DEEP DIVE ═══
  {
    id: 190,
    propertyType: "hdb",
    workflow: "rental",
    question: "What work pass holders CANNOT rent HDB?",
    answer: `**CANNOT rent HDB:**
- Work Permit holders (non-Malaysian)
- Training work permit holders
- Tourists / Short-term visitors

**CAN rent HDB:**
- Employment Pass (EP)
- S Pass
- Work Permit (Malaysian ONLY)
- Student Pass
- Dependant's Pass
- Long Term Visit Pass (LTVP)

**Warning:** Subject to occupancy cap: Max 6 persons per flat.
**Warning:** Must also meet EIP quota for the block.`,
    source: "https://www.hdb.gov.sg/residential/renting-a-flat",
    priority: "high",
  },
  {
    id: 191,
    propertyType: "general",
    workflow: "rental",
    question: "What is the diplomatic clause?",
    answer: `Standard clause in Tenancy Agreements for expats:

Allows tenant to terminate lease early if:
- Relocated overseas by employer
- Employment terminated

**Typical terms:**
- Kicks in after 12 months (for 2-year lease) or 6 months (for 1-year)
- Tenant gives 2 months written notice
- Tenant must provide proof (transfer letter from employer)

**Tip:** Without diplomatic clause, tenant must pay remaining rent or negotiate penalty.`,
    source: "https://www.cea.gov.sg/consumers/renting-a-property",
    priority: "high",
  },
  {
    id: 192,
    propertyType: "condo",
    workflow: "rental",
    question: "URA minimum rental period rules",
    answer: `URA requires minimum rental periods:

- Private property (condo/landed): Min 3 consecutive months
- HDB rooms: Min 6 months
- HDB whole flat: Min 6 months

**Warning:** Short-term rental (Airbnb-style) is generally NOT allowed for residential properties unless exempted.

Occupancy cap for private property: 6 unrelated persons (or 8 for larger units).`,
    source: "https://www.ura.gov.sg/Corporate/Property/Residential/Renting-Property",
    priority: "high",
  },

  // ═══ PRACTICAL AGENT SCENARIOS ═══
  {
    id: 200,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Client's HFE letter expired before they found a flat — what to do?",
    answer: `HFE letter valid for 9 months. If expired:
- Must apply for a FRESH HFE letter
- New application assessed based on latest situation and prevailing policies
- Cannot extend expired HFE
- Processing: ~1 month

**Warning:** If policies or income changed → eligibility may differ from previous HFE.
**Tip:** Advise clients: Start flat search immediately after getting HFE. Don't wait.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/application-for-an-hdb-flat-eligibility-hfe-letter",
    priority: "high",
  },
  {
    id: 201,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Client wants to buy HDB but spouse owns private property overseas",
    answer: `For HDB purchase:
- Must NOT own any private property (SG or overseas) at time of application
- Must have disposed of overseas private property at least 30 months before HFE application

**Options:**
1. Spouse disposes overseas property → wait 30 months → apply HFE
2. If spouse is not included in HDB application (certain schemes) → may not apply

**Tip:** This 30-month rule catches many people off guard. Check early.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility",
    priority: "high",
  },
  {
    id: 202,
    propertyType: "condo",
    workflow: "tricky",
    question: "Client buying new launch condo — progressive payment explained",
    answer: `**Progressive Payment Schedule:**
1. Booking: 5% (cash/cheque)
2. Within 8 weeks (sign S&P): 15% (CPF can be used)
3. Foundation complete: 10%
4. Concrete framework: 10%
5. Walls complete: 5%
6. Ceiling/roofing: 5%
7. Electrical wiring: 5%
8. Car park/roads: 5%
9. Building complete (TOP): 25%
10. Final (CSC): 15%

Bank loan disbursed progressively → pay interest on drawn amount only.

**Tip:** Total cash + CPF + loan flows over 3-5 years of construction.`,
    source: "https://www.ura.gov.sg/Corporate/Property/Residential/Buying-Property",
    priority: "high",
  },
  {
    id: 203,
    propertyType: "general",
    workflow: "agent-basics",
    question: "What is co-broking and how does commission work?",
    answer: `Co-broking = buyer's agent and seller's agent share commission.

**Common for private property:**
- Seller pays 2-4% total commission
- Seller's agent shares portion with buyer's agent
- Buyer pays $0 commission

**For HDB resale:**
- Seller pays own agent (~2%)
- Buyer pays own agent (~1%)
- Each agent only collects from their client

**Warning:** Agent CANNOT collect from both parties in same transaction.
**Warning:** Must use CEA Prescribed Estate Agency Agreement.`,
    source: "https://www.cea.gov.sg/consumers/engaging-a-property-agent/what-to-take-note-of-when-engaging-a-property-agent",
    priority: "high",
  },
  {
    id: 204,
    propertyType: "landed",
    workflow: "tricky",
    question: "What is GCB and what are the restrictions?",
    answer: `**Good Class Bungalow (GCB):**
- Land area ≥ 1,393 sqm (15,000 sq ft)
- Located in 39 gazetted GCB areas
- Only SG CITIZENS can buy (no PRs, no foreigners)
- Cannot subdivide below 1,393 sqm
- Max 2-storey building height
- Max site coverage 35-40%

GCB areas include: Nassim, Dalvey, Cluny, Holland, Bukit Timah, etc.

**Tip:** GCB is the most exclusive residential property segment in SG.`,
    source: "https://www.ura.gov.sg/Corporate/Property/Residential/GCB-Areas",
    priority: "medium",
  },
  {
    id: 205,
    propertyType: "general",
    workflow: "tricky",
    question: "What is the 30-month private property ownership rule for HDB?",
    answer: `To buy HDB flat or get HDB loan:
- Applicants must NOT own private property
- If previously owned → must have disposed of it at least 30 MONTHS before HFE application date

**Applies to:** Local AND overseas private property.
**Includes:** Condo, landed, shophouse, HUDC, overseas property.

**Warning:** This is 30 months from DISPOSAL, not from signing sales agreement.
**Tip:** Plan the timeline: Sell private → wait 30 months → apply HFE → buy HDB.`,
    source: "https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/flat-and-grant-eligibility",
    priority: "high",
  },
  {
    id: 206,
    propertyType: "hdb",
    workflow: "meeting-seller",
    question: "What is Intent to Sell and when must it be registered?",
    answer: `Sellers must register Intent to Sell on HDB Flat Portal:
- Must be registered at least 7 DAYS before granting OTP to buyer
- Valid for 12 months
- Must remain valid when submitting resale application

**Purpose:** HDB checks eligibility to sell (e.g., MOP fulfilled, no outstanding issues).

**How:** Log in to HDB Flat Portal → My Flat Dashboard → Register Intent to Sell.

**Tip:** Advise sellers to register early — don't wait until they find a buyer.`,
    source: "https://www.hdb.gov.sg/residential/selling-a-flat",
    priority: "high",
  },
]
