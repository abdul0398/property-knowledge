export type PropertyType = "hdb" | "condo" | "landed" | "general"

export type WorkflowId =
  | "first-meeting"
  | "bto"
  | "resale"
  | "hfe"
  | "mop"
  | "seller-core"
  | "cpf-core"
  | "cpf-seniors"
  | "grants"
  | "loans"
  | "stamp"
  | "upgrader"
  | "senior"
  | "divorce-death"
  | "rental"
  | "pr"
  | "tricky"
  | "agent"
  | "edge"

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
  { id: "first-meeting", label: "First Client Meeting", icon: "Handshake", color: "#059669" },
  { id: "bto", label: "BTO & New Flats", icon: "Building2", color: "#10B981" },
  { id: "resale", label: "Resale Purchase", icon: "Home", color: "#14B8A6" },
  { id: "hfe", label: "HFE Letter", icon: "FileText", color: "#0EA5E9" },
  { id: "mop", label: "MOP Rules", icon: "Clock", color: "#8B5CF6" },
  { id: "seller-core", label: "Selling a Flat", icon: "Banknote", color: "#DC2626" },
  { id: "cpf-core", label: "CPF Rules — Core", icon: "Landmark", color: "#2563EB" },
  { id: "cpf-seniors", label: "CPF — Seniors & 2nd Property", icon: "Landmark", color: "#1D4ED8" },
  { id: "grants", label: "Grants & Subsidies", icon: "Gift", color: "#7C3AED" },
  { id: "loans", label: "Loans & Finance", icon: "Building2", color: "#D97706" },
  { id: "stamp", label: "Stamp Duty & Tax", icon: "Receipt", color: "#0D9488" },
  { id: "upgrader", label: "Upgraders (HDB → Condo)", icon: "TrendingUp", color: "#F59E0B" },
  { id: "senior", label: "Seniors (55+)", icon: "Heart", color: "#EC4899" },
  { id: "divorce-death", label: "Divorce, Death & Inheritance", icon: "Scale", color: "#6B7280" },
  { id: "rental", label: "Rental & Landlord", icon: "Key", color: "#EA580C" },
  { id: "pr", label: "PR / Foreigner", icon: "Globe", color: "#06B6D4" },
  { id: "tricky", label: "Tricky Scenarios", icon: "Zap", color: "#DB2777" },
  { id: "agent", label: "Agent Basics & Compliance", icon: "BookOpen", color: "#4F46E5" },
  { id: "edge", label: "Edge Cases & Market", icon: "AlertTriangle", color: "#78716C" },
]

export const ALL_QUESTIONS: QA[] = [
  {
    id: 1,
    propertyType: "hdb",
    workflow: "first-meeting",
    question: "Pre-viewing checklist — what to check BEFORE showing any flat",
    answer: `Run through 10 items before you let the buyer fall in love with a unit.

1. Youngest buyer's age 2. Property's remaining lease 3. Age + lease ≥ 95 (CPF pro-ration) 4. 1st or 2nd property 5. MOP fulfilled (if selling existing HDB) 6. Income ceiling met 7. Citizenship mix 8. Existing outstanding loans 9. TDSR headroom 10. CPF OA balance.

**Why:** saves wasted viewings and awkward 'sorry client can't afford this' moments.`,
    source: "",
    priority: "high",
  },
  {
    id: 2,
    propertyType: "hdb",
    workflow: "first-meeting",
    question: "What documents should I ask the buyer to prepare?",
    answer: `HFE letter, Singpass login, NRIC, latest 3-month payslips, CPF statement, existing loan statements (if any).

For non-salaried buyers: 2 years of income tax NOA. For PRs: PR card + entry permit. For foreigners in the household: passport + visa.`,
    source: "",
    priority: "high",
  },
  {
    id: 3,
    propertyType: "hdb",
    workflow: "first-meeting",
    question: "How do I qualify a buyer's budget in 5 minutes?",
    answer: `Quick math: (Income × 12 × 4.5 × 0.5) + (CPF OA + cash savings) = rough max flat price.

This is a napkin formula assuming TDSR 55% and 25% downpayment. Always confirm with HFE letter.

**Example:** Couple earning $8K combined → ($8,000 × 12 × 4.5 × 0.5) + $100K OA + $50K cash = $366K loan + $150K = **~$516K max flat**.`,
    source: "",
    priority: "high",
  },
  {
    id: 4,
    propertyType: "hdb",
    workflow: "first-meeting",
    question: "Buyer says 'I have $100K cash' — what flat range can they consider?",
    answer: `Depends on their loan eligibility, not just cash.

$100K cash alone could downpay a $400K flat (25% DP). But if their TDSR only supports a $200K loan, max flat is $300K. Always check **loan capacity first**, cash second.`,
    source: "",
    priority: "high",
  },
  {
    id: 5,
    propertyType: "hdb",
    workflow: "first-meeting",
    question: "Should I ask for HFE letter first or start viewing?",
    answer: `HFE letter first. Always. No exceptions.

HDB requires valid HFE before resale buyer can accept OTP from seller. Without HFE, buyer literally cannot buy. Also — HFE tells you exact grants + loan eligibility so you can shortlist accurately.`,
    source: "",
    priority: "high",
  },
  {
    id: 6,
    propertyType: "hdb",
    workflow: "first-meeting",
    question: "What's a realistic timeline from 'I want to buy' to key collection?",
    answer: `Resale: 3–4 months. BTO: 3–5 years (construction + MOP wait).

**Resale breakdown:** HFE 1 month → find flat + OTP 1–2 months → HDB resale application processing ~8 weeks → completion at HDB appointment.
**BTO:** Application → ballot → booking (2–3 months) → construction (3–4 years) → key collection.`,
    source: "",
    priority: "high",
  },
  {
    id: 7,
    propertyType: "hdb",
    workflow: "bto",
    question: "BTO eligibility — full criteria",
    answer: `SC + age 21+ (family) or 35+ (single, 2-room Flexi). Income ceiling $14K (most) or $7K (2-room Flexi). Must not own any property.

Additional rules:
• Must not have bought 2 HDB flats before
• Must form valid family nucleus
• Multi-generation families: $21K ceiling
• Extended family: $21K ceiling
• Plus/Prime flats may have stricter rules per launch`,
    source: "",
    priority: "high",
  },
  {
    id: 8,
    propertyType: "hdb",
    workflow: "bto",
    question: "What are Standard, Plus, Prime flats?",
    answer: `New BTO classification from Oct 2024. Standard = regular BTO. Plus = better locations, tighter rules. Prime = best locations, tightest rules.

**Standard:** 5-yr MOP, no clawback
**Plus:** 10-yr MOP, 6-8% subsidy clawback on resale, resale buyer must meet $14K ceiling
**Prime:** 10-yr MOP, 9% clawback, resale buyer must meet $14K ceiling, 30-month wait-out for private property owners

**Both Plus & Prime:** whole-flat rental banned even after MOP.`,
    source: "",
    priority: "high",
  },
  {
    id: 9,
    propertyType: "hdb",
    workflow: "bto",
    question: "Subsidy clawback — how does it actually work?",
    answer: `When Plus/Prime owner sells after MOP, they pay HDB a % of resale price (or valuation, whichever is higher).

**Rates set per launch:** Oct 2024 launch was 6–8% for Plus, 9% for Prime.
**Example:** Prime flat sold at $1.2M with 9% clawback = $108K paid back to HDB.
**Important:** clawback only applies to the ORIGINAL BTO owner. Resale buyer of a Plus/Prime flat doesn't pay clawback when they later sell.`,
    source: "",
    priority: "high",
  },
  {
    id: 10,
    propertyType: "hdb",
    workflow: "bto",
    question: "BTO application process step-by-step",
    answer: `1. Apply for HFE letter 2. Watch for sales launch 3. Apply during launch window 4. Ballot 5. Book flat if successful 6. Sign agreement + pay option fee 7. Wait for construction 8. Key collection.

Ballot results: ~3 weeks after launch. Booking appointment: 2–6 months after ballot depending on queue number. Option fee: $500–$2,000 depending on flat type.`,
    source: "",
    priority: "high",
  },
  {
    id: 11,
    propertyType: "hdb",
    workflow: "bto",
    question: "Can I apply for multiple BTOs at once?",
    answer: `No — only 1 application per launch across all towns.

If you apply and don't book, 1-year time bar applies before next resale grant or BTO application (from March 2012 onwards).`,
    source: "",
    priority: "high",
  },
  {
    id: 12,
    propertyType: "hdb",
    workflow: "bto",
    question: "What happens if I cancel after booking BTO?",
    answer: `1-year time bar before you can apply for resale with CPF grant, or before being an essential occupier.

Option fee is forfeited. For Plus/Prime flats, additional penalties may apply per launch terms. Always warn clients: *'Book a BTO only if you're 100% committed.'*`,
    source: "",
    priority: "high",
  },
  {
    id: 13,
    propertyType: "hdb",
    workflow: "bto",
    question: "Single can buy BTO — what are the rules?",
    answer: `Single SC aged 35+. Since Oct 2024, singles can buy 2-room Flexi in Standard / Plus / Prime locations.

Income ceiling: $7,000. Single pays $15,000 premium (vs couples). Can also buy Standard/Plus resale flat of any size. Prime resale: 4-room or smaller only.

**Widowed/orphan:** eligible from age 21.`,
    source: "",
    priority: "high",
  },
  {
    id: 14,
    propertyType: "hdb",
    workflow: "bto",
    question: "Why does my client's BTO application keep failing?",
    answer: `Usually one of: wrong category (first-timer vs second-timer), applied in wrong town for income level, poor queue number, or over-subscribed launch.

Check: are they genuinely first-timer? Did they use past Open Booking waiver? Are they married (nucleus) or Single scheme? Tell client to also try Sale of Balance Flats (SBF) or Open Booking — shorter waits.`,
    source: "",
    priority: "high",
  },
  {
    id: 15,
    propertyType: "hdb",
    workflow: "resale",
    question: "HDB resale buying process — full steps",
    answer: `1. Register Intent to Buy 2. Get HFE letter 3. Find flat 4. Seller grants OTP 5. Buyer exercises OTP 6. Submit resale application 7. HDB processes ~8 weeks 8. Complete at HDB appointment.

Option fee: $1–$1,000 (negotiable, buyer pays on OTP). OTP valid 21 calendar days from date of grant. Total deposit (option + exercise fee) capped at $5,000 for HDB resale.`,
    source: "",
    priority: "high",
  },
  {
    id: 16,
    propertyType: "hdb",
    workflow: "resale",
    question: "What is COV (Cash Over Valuation)?",
    answer: `COV = Purchase price − HDB valuation. Must be paid in CASH (no CPF, no loan).

HDB issues 'Request for Value' during resale application. Buyer only discovers exact valuation AFTER committing to OTP.

**Tip:** Use recent transactions in the block/street to estimate. Advise buyer to budget extra cash buffer.`,
    source: "",
    priority: "high",
  },
  {
    id: 17,
    propertyType: "hdb",
    workflow: "resale",
    question: "What is Intent to Buy and when to register?",
    answer: `Free declaration on HDB Resale Portal. Tells HDB you're starting the resale journey.

Valid for 12 months. Usually done before/around HFE application. Not binding. Helps HDB prepare your eligibility records.`,
    source: "",
    priority: "high",
  },
  {
    id: 18,
    propertyType: "hdb",
    workflow: "resale",
    question: "What is the OTP for HDB resale?",
    answer: `Option to Purchase. Seller grants. Buyer pays $1–$1,000 option fee. Valid 21 calendar days.

Buyer exercises by signing resale application + paying exercise fee. Total (option + exercise) capped at $5,000.
**If buyer doesn't exercise:** seller keeps option fee, nothing more.
**Seller must have registered Intent to Sell for >7 days before granting OTP.**`,
    source: "",
    priority: "high",
  },
  {
    id: 19,
    propertyType: "hdb",
    workflow: "resale",
    question: "Can buyer extend the 21-day OTP period?",
    answer: `Only if seller agrees. No HDB rule forcing extension.

In practice: rare. Usually buyer either exercises within 21 days or the OTP lapses. If extension agreed, must be documented in writing.`,
    source: "",
    priority: "high",
  },
  {
    id: 20,
    propertyType: "hdb",
    workflow: "resale",
    question: "Can PRs buy HDB resale?",
    answer: `Yes — but only if forming a family nucleus. Single PR cannot buy HDB at all.

**2 PRs as family nucleus:** resale only (no BTO). Subject to SPR quota per block.
**SC + PR:** can buy BTO and resale. $10,000 premium for first-timer SC+PR household (refunded when PR becomes citizen or has child).
**Must dispose private property 30 months BEFORE HFE if either spouse previously owned.**`,
    source: "",
    priority: "high",
  },
  {
    id: 21,
    propertyType: "hdb",
    workflow: "resale",
    question: "What is EIP and how to check quota?",
    answer: `Ethnic Integration Policy. Caps on ethnic group % per block/neighbourhood.

**Block / Neighbourhood:**
Chinese: 84% / 87%
Malay: 25% / 22%
Indian & Others: 15% / 13%

If quota hit: buyer cannot buy in that block. Quota refreshes 1st of each month.
**Check:** hdb.gov.sg → EIP/SPR Quota e-Service.`,
    source: "",
    priority: "high",
  },
  {
    id: 22,
    propertyType: "hdb",
    workflow: "resale",
    question: "What is SPR quota (separate from EIP)?",
    answer: `Non-Malaysian PRs capped at 8% per block, 5% per neighbourhood.

If SPR quota hit: non-Malaysian PR family cannot buy in that block. Malaysian PRs are exempt from this quota (but still subject to EIP).`,
    source: "",
    priority: "high",
  },
  {
    id: 23,
    propertyType: "hdb",
    workflow: "resale",
    question: "What about buying resale flats with short remaining lease?",
    answer: `<20 years: CANNOT use CPF at all. 20+ but doesn't cover youngest to age 95: CPF pro-rated.

HDB loan also pro-rated if lease doesn't cover to 95. No grants. Must be cash + bank loan (if bank willing).

**Age 55+ exception:** 2-room Flexi short-lease flats (15–45 yr leases) are specifically designed for seniors.`,
    source: "",
    priority: "high",
  },
  {
    id: 24,
    propertyType: "hdb",
    workflow: "hfe",
    question: "What is the HFE letter and why is it critical?",
    answer: `HDB Flat Eligibility letter. Single source of truth for: flat eligibility, CPF grant amount, HDB loan amount, resale levy.

Introduced 9 May 2023 — replaced the old HLE. Valid 9 months. Processing ~1 month (longer near BTO launches). Free. Apply via HDB Flat Portal with Singpass.`,
    source: "",
    priority: "high",
  },
  {
    id: 25,
    propertyType: "hdb",
    workflow: "hfe",
    question: "Difference between HFE and HLE?",
    answer: `HLE (old, pre-May 2023): loan-only assessment. HFE (new): comprehensive — flat eligibility, grants, loan, resale levy all in one.

HLE no longer issued. If client still has a valid old HLE letter, it can still be used until expiry but new applications use HFE.`,
    source: "",
    priority: "high",
  },
  {
    id: 26,
    propertyType: "hdb",
    workflow: "hfe",
    question: "My client's HFE expired — what now?",
    answer: `Apply for a fresh HFE. Cannot extend expired ones.

New assessment uses current policies and income. If rules or income changed, new eligibility may differ.
**Tip:** Always tell clients 'Start flat search immediately after HFE. Don't sit on it.'`,
    source: "",
    priority: "high",
  },
  {
    id: 27,
    propertyType: "hdb",
    workflow: "hfe",
    question: "Can HFE be used if income changed after it was issued?",
    answer: `Yes — as long as still valid (9 months). Outcome stands.

**Income went UP past ceiling:** can still proceed, HFE locks in eligibility.
**Income went DOWN and now qualifies for EHG:** should cancel and reapply to get higher grant.
**Loan amount** won't be reassessed unless adverse change to loan-servicing ability.`,
    source: "",
    priority: "high",
  },
  {
    id: 28,
    propertyType: "hdb",
    workflow: "hfe",
    question: "How long does HFE application take?",
    answer: `About 1 month once all documents submitted. Longer during/near BTO sales launches.

Apply at least 1 month ahead of any sales launch. All income earners' documents must be uploaded. Use Singpass Myinfo to auto-fill.`,
    source: "",
    priority: "high",
  },
  {
    id: 29,
    propertyType: "hdb",
    workflow: "hfe",
    question: "Can 2 applicants have separate HFE letters?",
    answer: `No. One person can only be on ONE HFE application (applicant or occupier).

Flat application is processed based on the SUBMITTED HFE. Other HFEs issued earlier or later are ignored.`,
    source: "",
    priority: "high",
  },
  {
    id: 30,
    propertyType: "hdb",
    workflow: "mop",
    question: "What is MOP?",
    answer: `Minimum Occupation Period. Standard HDB: 5 years. Plus/Prime: 10 years. Starts from key collection date.

During MOP, owner **cannot:** sell, rent whole flat (rooms OK), buy/own private property.`,
    source: "",
    priority: "high",
  },
  {
    id: 31,
    propertyType: "hdb",
    workflow: "mop",
    question: "After MOP — what can owner do?",
    answer: `Sell on resale market, rent whole flat (with HDB approval), buy private property.

For Plus/Prime: whole-flat rental still banned even after MOP. Only room rental allowed.`,
    source: "",
    priority: "high",
  },
  {
    id: 32,
    propertyType: "hdb",
    workflow: "mop",
    question: "Are there any exceptions to the 5-year MOP?",
    answer: `Some cases extend to 10 years (non-citizen spouse scheme, Plus/Prime flats). Hardship waiver for divorce, financial distress, medical is case-by-case.

Divorce: if couple bought under first-timer scheme, HDB may allow sale before MOP with consent from both parties.
Death: surviving spouse can sell without MOP penalty.
Must apply to HDB in writing for case-specific ruling.`,
    source: "",
    priority: "high",
  },
  {
    id: 33,
    propertyType: "hdb",
    workflow: "mop",
    question: "Can I count rental period toward MOP?",
    answer: `No. MOP is 'occupation' — owners must physically live in flat.

If caught renting out whole flat during MOP: MOP clock resets, possible compulsory acquisition. Room rental during MOP: allowed with HDB approval.`,
    source: "",
    priority: "high",
  },
  {
    id: 34,
    propertyType: "hdb",
    workflow: "mop",
    question: "Client inherited HDB during MOP of another HDB — what happens?",
    answer: `Must dispose of one within 6 months. Cannot own 2 HDB flats.

Same rule if inherited private property: must dispose of one within 6 months unless HDB grants exception (e.g., inheritor's family occupies inherited private).
**Advise:** write to HDB for case-specific ruling immediately.`,
    source: "",
    priority: "high",
  },
  {
    id: 35,
    propertyType: "hdb",
    workflow: "seller-core",
    question: "HDB resale selling process — full steps",
    answer: `1. Register Intent to Sell 2. List + market flat 3. Grant OTP to buyer 4. Buyer exercises OTP 5. Submit resale application 6. HDB processes ~8 weeks 7. Completion appointment.

Intent to Sell must be at least 7 DAYS before granting OTP. Valid 12 months. Seller's agent commission typically ~2%.`,
    source: "",
    priority: "high",
  },
  {
    id: 36,
    propertyType: "hdb",
    workflow: "seller-core",
    question: "What is Intent to Sell?",
    answer: `Free declaration on HDB Flat Portal that you intend to sell. Mandatory before granting OTP.

Must be registered >7 days before granting OTP. Valid 12 months. Purpose: HDB checks MOP fulfilled, outstanding issues clear.
**Tell sellers:** register early, don't wait until buyer appears.`,
    source: "",
    priority: "high",
  },
  {
    id: 37,
    propertyType: "hdb",
    workflow: "seller-core",
    question: "What documents should seller prepare?",
    answer: `CPF usage statement, outstanding loan statement, title deed, property tax notice, renovation invoices.

For HDB resale: also EIP quota check, HDB resale checklist. **Get CPF statement FIRST** — determines actual cash seller gets.`,
    source: "",
    priority: "high",
  },
  {
    id: 38,
    propertyType: "hdb",
    workflow: "seller-core",
    question: "What happens to seller's CPF when selling?",
    answer: `Must refund Principal + Accrued Interest (2.5%) to CPF, regardless of age.

**Below 55:** refund → OA.
**55+:** from 1 Jul 2024, refund → OA by default (was cash before). Can top up RA, use for next property, or withdraw cash.
**Negative sale:** refund capped at net proceeds (no cash out of pocket).`,
    source: "",
    priority: "high",
  },
  {
    id: 39,
    propertyType: "hdb",
    workflow: "seller-core",
    question: "How to calculate seller's cash proceeds?",
    answer: `Selling Price − Outstanding Loan − CPF P+I (all owners) − Agent commission − Legal fees − SSD (if any) = Net cash

**Run this for every seller at first meeting.** Many sellers are shocked when they realise 'paper gain' doesn't equal 'cash in pocket' after CPF refund.`,
    source: "",
    priority: "high",
  },
  {
    id: 40,
    propertyType: "hdb",
    workflow: "seller-core",
    question: "Negative sale — how is CPF refund split?",
    answer: `Pro-rated based on each owner's P+I share of total.

**Formula:** Your refund = (Your P+I ÷ Total P+I) × Net proceeds

**Example:** Net $160K. Husband P+I $150K, Wife P+I $50K. Total $200K.
Husband: 150/200 × $160K = $120K
Wife: 50/200 × $160K = $40K
Neither gets cash. Buyer's deposit must also go to sellers' CPF.`,
    source: "",
    priority: "high",
  },
  {
    id: 41,
    propertyType: "hdb",
    workflow: "seller-core",
    question: "What is Resale Levy and when does it apply?",
    answer: `Applies when seller (who received housing subsidy) buys another SUBSIDISED HDB.

**Levy by flat type SOLD:**
2-room: $15K
3-room: $30K
4-room: $40K
5-room: $45K
Executive: $50K
EC: $55K

Does NOT apply when buying resale or private property.`,
    source: "",
    priority: "high",
  },
  {
    id: 42,
    propertyType: "hdb",
    workflow: "seller-core",
    question: "Client wants to sell during MOP — is there any way?",
    answer: `Only with HDB approval on hardship grounds: divorce, severe financial distress, medical emergency.

Case-by-case. Apply in writing to HDB explaining situation + supporting documents. No guaranteed outcome. Most early-MOP sales involve compulsory acquisition or financial hardship waivers.`,
    source: "",
    priority: "high",
  },
  {
    id: 43,
    propertyType: "hdb",
    workflow: "seller-core",
    question: "EIP affects sellers — how?",
    answer: `If block EIP quota for seller's race is hit: can only sell to same race.

Minority sellers often face smaller eligible buyer pool. Can wait until next month's quota refresh.

**HDB buyback scheme:** owned 10+ years AND tried selling 6+ months at reasonable price → can apply for HDB to buy back.`,
    source: "",
    priority: "high",
  },
  {
    id: 44,
    propertyType: "hdb",
    workflow: "seller-core",
    question: "Buyer's deposit after OTP — where does it go?",
    answer: `Directly to seller. Agent must NOT hold it.

Exercise fee goes to seller. At HDB appointment, seller redeems loan + refunds CPF, receives net cash via lawyer's trust account.`,
    source: "",
    priority: "high",
  },
  {
    id: 45,
    propertyType: "hdb",
    workflow: "cpf-core",
    question: "4 types of CPF accounts — which can be used for property?",
    answer: `OA only. Cannot use SA, MA, or RA.

**OA (Ordinary):** housing, insurance, investment, education
**SA (Special):** retirement — closed for 55+ from 2025
**MA (Medisave):** medical
**RA (Retirement):** created at 55 from OA+SA`,
    source: "",
    priority: "high",
  },
  {
    id: 46,
    propertyType: "hdb",
    workflow: "cpf-core",
    question: "CPF contribution rates 2026",
    answer: `55 & below: 37% total. Rates drop after 55. Salary ceiling $8,000/month from Jan 2026.

Above 55–60: 34% (+1.5% from 2025)
Above 60–65: 25% (+1.5% from 2025)
Above 65–70: 16.5%
Above 70: 12.5%

The +1.5% for 55–65 goes to RA (up to FRS), then OA.`,
    source: "",
    priority: "high",
  },
  {
    id: 47,
    propertyType: "hdb",
    workflow: "cpf-core",
    question: "CPF interest rates 2026",
    answer: `OA: 2.5% | SA/MA/RA: 4.0% | Reviewed quarterly.

Extra interest: +1% on first $60K combined (cap $20K from OA). Age 55+: extra +1% on first $30K.
**Effective for seniors:** first $30K up to 6%, next $30K up to 5%, rest 4%.`,
    source: "",
    priority: "high",
  },
  {
    id: 48,
    propertyType: "hdb",
    workflow: "cpf-core",
    question: "Full list: what can CPF OA be used for?",
    answer: `Downpayment, monthly instalment, loan repayment, BSD, ABSD, mortgage stamp, legal fees, HPS premium, HDB upgrading (MUP/HIP), construction loan (landed).

CANNOT use for: COV, agent commission, renovation, anything else. Each usage is capped differently (see VL and WL).`,
    source: "",
    priority: "high",
  },
  {
    id: 49,
    propertyType: "hdb",
    workflow: "cpf-core",
    question: "What is VL (Valuation Limit)?",
    answer: `Lower of: purchase price OR valuation.

**Example:** Price $420K, Valuation $400K → VL = $400K.
Baseline cap for CPF usage. After hitting VL, continuing to WL requires setting aside BRS.`,
    source: "",
    priority: "high",
  },
  {
    id: 50,
    propertyType: "hdb",
    workflow: "cpf-core",
    question: "What is WL (Withdrawal Limit)?",
    answer: `120% of VL (from Jan 2008).

**Example:** VL $400K → WL = $480K.
Applies to bank loans. For HDB loan on new BTO: no WL (no limit beyond LTV cap).`,
    source: "",
    priority: "high",
  },
  {
    id: 51,
    propertyType: "hdb",
    workflow: "cpf-core",
    question: "The 'age 95' rule — full CPF pro-ration formula",
    answer: `Youngest buyer's age + remaining lease ≥ 95 → FULL CPF. If < 95 → pro-rated.

**Pro-ration formula:** (Remaining Lease − 20) ÷ (95 − Youngest Age − 20) × VL

**Examples:**
Age 25 + 88yr = 113 → Full
Age 25 + 65yr = 90 → 45/50 = 90%
Age 45 + 50yr = 95 → Full (exactly 95 counts)
Age 50 + 40yr = 90 → 20/25 = 80%

From 10 May 2019.`,
    source: "",
    priority: "high",
  },
  {
    id: 52,
    propertyType: "hdb",
    workflow: "cpf-core",
    question: "Can my client retain OA balance when taking HDB loan?",
    answer: `Yes. Can retain up to $20,000 EACH in OA (from 28 Aug 2018).

Optional — can still choose to use all OA. Good for clients wanting emergency buffer. This $20K keeps earning 2.5% interest.`,
    source: "",
    priority: "high",
  },
  {
    id: 53,
    propertyType: "hdb",
    workflow: "cpf-core",
    question: "CPF usage: HDB loan vs Bank loan — summary",
    answer: `HDB loan (new BTO): up to LTV 75%, no VL/WL. HDB loan (resale): up to VL, beyond VL if BRS set aside. Bank loan: up to VL, then up to WL if BRS set aside.

HDB loan still more flexible for CPF. But with 75% LTV cap (since Aug 2024), max CPF-fundable amount = 75% of price for new BTO.`,
    source: "",
    priority: "high",
  },
  {
    id: 54,
    propertyType: "hdb",
    workflow: "cpf-seniors",
    question: "What is BRS, FRS, ERS for 2026?",
    answer: `BRS: $110,200 | FRS: $220,400 | ERS: $440,800 (for turning 55 in 2026).

BRS increases ~3.5% yearly. Relevant sum = year person TURNED 55.

2023: $99,400 | 2024: $102,900 | 2025: $106,500 | 2026: $110,200 | 2027: $114,100`,
    source: "",
    priority: "high",
  },
  {
    id: 55,
    propertyType: "hdb",
    workflow: "cpf-seniors",
    question: "At age 55 — what changes for CPF and property?",
    answer: `RA is created. Savings from SA + up to FRS from OA transfer to RA. Only OA left for property.

If client already owns property covering to age 95: only BRS needs to go to RA (not FRS). Remaining OA stays usable.

**From 2025:** SA is closed for members 55+. SA savings go to RA (up to FRS) then OA.`,
    source: "",
    priority: "high",
  },
  {
    id: 56,
    propertyType: "hdb",
    workflow: "cpf-seniors",
    question: "Can 55+ client still use CPF for housing loan?",
    answer: `Yes. OA balance + new CPF contributions can continue paying loan.

After 55, OA shrinks (some goes to RA). Plan ahead: advise client to calculate remaining OA after 55 transfer.`,
    source: "",
    priority: "high",
  },
  {
    id: 57,
    propertyType: "hdb",
    workflow: "cpf-seniors",
    question: "How to reserve OA savings before turning 55?",
    answer: `At age 54, apply to reserve OA so it WON'T transfer to RA. For existing housing loan or next property.

**How:** Singpass → my cpf → My Requests → Retirement → 'Decide on my CPF options'
**Deadline:** within 6 months before 55th birthday, at least 5 working days prior.
**Warning:** reserved amount locked to specified property only.`,
    source: "",
    priority: "high",
  },
  {
    id: 58,
    propertyType: "hdb",
    workflow: "cpf-seniors",
    question: "Property Pledge — what is it?",
    answer: `Members 55+ with property covering to age 95 can pledge property up to BRS, withdraw RA savings above BRS in cash.

If property sold: pledge amount refunded to RA. Does NOT affect ownership. Needs all co-owners' consent. Excludes interest, govt grants, top-ups.`,
    source: "",
    priority: "high",
  },
  {
    id: 59,
    propertyType: "hdb",
    workflow: "cpf-seniors",
    question: "CPF for 2nd property — what's different?",
    answer: `Must set aside BRS (if property covers to 95) or FRS (if not) before using OA for 2nd property.

**Has property covering to 95:** set aside BRS in OA+SA (<55) or RA+OA (55+). Only EXCESS OA usable. WL capped at 100% VL (not 120%).
**Does not cover to 95:** must set aside FRS.
**Grace period:** 6 months from purchase (completed) or TOP (under construction) to sell existing → BRS rule waived.`,
    source: "",
    priority: "high",
  },
  {
    id: 60,
    propertyType: "hdb",
    workflow: "cpf-seniors",
    question: "What is Home Protection Scheme (HPS)?",
    answer: `Mortgage-reducing insurance. MANDATORY if using CPF for HDB monthly instalments.

Covers death, terminal illness, total permanent disability up to age 65 or loan fully paid. Premium from OA. Min 100% coverage (50% each or 100% each).

Can buy external insurance (need CPFB approval for exemption).`,
    source: "",
    priority: "high",
  },
  {
    id: 61,
    propertyType: "hdb",
    workflow: "cpf-seniors",
    question: "Does HPS apply to bank loans?",
    answer: `No. HPS only for HDB loans with CPF instalments.

Bank loan borrowers typically buy Mortgage Reducing Term Assurance (MRTA) privately. Not mandatory but strongly recommended.`,
    source: "",
    priority: "high",
  },
  {
    id: 62,
    propertyType: "hdb",
    workflow: "cpf-seniors",
    question: "What is the CPF refund change from 1 Jul 2024?",
    answer: `Before: balance after FRS → cash. After: balance → OA by default.

For 55+ sellers. From OA, member can: (1) use for next property, (2) transfer to RA for higher interest, (3) withdraw as cash.

**Advise senior sellers:** money goes to OA first, not cash directly.`,
    source: "",
    priority: "high",
  },
  {
    id: 63,
    propertyType: "hdb",
    workflow: "grants",
    question: "Maximum grants for resale flat — families",
    answer: `Up to $230,000 combined: Family Grant $80K + EHG $120K + Proximity $30K.

**Family Grant:** $80K (2-4rm) or $50K (5rm+). Income ≤ $14K.
**EHG:** up to $120K. Income ≤ $9K.
**Proximity:** $30K (live together) / $20K (within 4km). No income cap.

All grants go to CPF OA, count toward WL.`,
    source: "",
    priority: "high",
  },
  {
    id: 64,
    propertyType: "hdb",
    workflow: "grants",
    question: "Maximum grants for resale — singles",
    answer: `Up to $115,000: Singles Grant $40K + EHG Singles $60K + Proximity $15K.

**Singles Grant:** $40K (2-4rm) / $25K (5rm). Age 35+, income ≤ $7K.
**EHG Singles:** up to $60K. Income ≤ $4,500.
**Proximity:** $15K (together) / $10K (within 4km).`,
    source: "",
    priority: "high",
  },
  {
    id: 65,
    propertyType: "hdb",
    workflow: "grants",
    question: "EHG income table — families",
    answer: `Tiered. Lower income = higher grant. Max $120K for income ≤ $1,500.

≤$1,500 → $120K | $1,501–$2K → $110K | $2,001–$2.5K → $105K
$2,501–$3K → $95K | $3,001–$3.5K → $90K | $3,501–$4K → $80K
$4,001–$4.5K → $70K | $4,501–$5K → $65K | $5,001–$5.5K → $55K
$5,501–$6K → $50K | $6,001–$6.5K → $40K | $6,501–$7K → $30K
$7,001–$7.5K → $25K | $7,501–$8K → $20K | $8,001–$8.5K → $10K | $8,501–$9K → $5K

Requires 12 months continuous employment.`,
    source: "",
    priority: "high",
  },
  {
    id: 66,
    propertyType: "hdb",
    workflow: "grants",
    question: "Grants for NEW BTO — what's available?",
    answer: `EHG (up to $120K families / $60K singles) + Step-Up Grant ($15K).

Family Grant and Proximity Grant are **resale only**. Step-Up: for second-timer upgrading from 2-room subsidised (non-mature) to 3-room BTO in non-mature estate.`,
    source: "",
    priority: "high",
  },
  {
    id: 67,
    propertyType: "hdb",
    workflow: "grants",
    question: "Grant conditions — what comes with accepting a grant?",
    answer: `Considered 'housing subsidy received'. Resale levy if buying another subsidised. 5-yr MOP. All grant + accrued interest refunded on sale.

Also: cannot invest in private property during MOP. Cannot sublet whole flat during MOP. Flat must have ≥20yr remaining lease. Max $60K returns to OA; excess split between SA + MA.`,
    source: "",
    priority: "high",
  },
  {
    id: 68,
    propertyType: "hdb",
    workflow: "grants",
    question: "Proximity Grant — who qualifies?",
    answer: `SC buying resale flat to live with or within 4km of parents/child.

Parents/child can live in HDB or private property. 4km = straight-line distance via HDB Map Services. Can only receive PHG ONCE per buyer.

**Families:** $30K (together) / $20K (within 4km).
**Singles:** $15K (together) / $10K (within 4km).`,
    source: "",
    priority: "high",
  },
  {
    id: 69,
    propertyType: "hdb",
    workflow: "grants",
    question: "1-year time bar after BTO cancellation",
    answer: `If cancelled after booking BTO (from March 2012): must wait 1 year before applying for resale with CPF grant or being essential occupier.

Warn clients: 'Don't book BTO unless 100% committed.' Forfeited option fee + 1-year wait is a double penalty.`,
    source: "",
    priority: "high",
  },
  {
    id: 70,
    propertyType: "hdb",
    workflow: "grants",
    question: "Citizen Top-Up Grant — when applies?",
    answer: `For SC+PR households who paid $10K premium. When PR becomes SC or couple has child, can claim $10K back.

Only for first-timer SC+PR households. Must apply through HDB. Not automatic.`,
    source: "",
    priority: "high",
  },
  {
    id: 71,
    propertyType: "hdb",
    workflow: "grants",
    question: "Client earns slightly above $14K — any workaround?",
    answer: `No for BTO. Yes for resale (no income ceiling for resale purchase, only for grants).

If above $14K: cannot get BTO, cannot get most grants. But can still buy resale flat outright using HDB loan (income cap applies) or bank loan (no cap). For income $14K–$16K: consider EC (Executive Condo) instead.`,
    source: "",
    priority: "high",
  },
  {
    id: 72,
    propertyType: "hdb",
    workflow: "loans",
    question: "HDB Loan vs Bank Loan — full comparison 2026",
    answer: `HDB: LTV 75%, interest 2.6% fixed, no penalty, income ceiling $14K. Bank: LTV 75%, interest 1.5-2% (2026 lows), 5% cash min, no income cap.

**HDB LOAN:**
• LTV: 75% (since 20 Aug 2024)
• Downpayment: 25% (can be all CPF)
• Interest: 2.6% fixed (OA + 0.1%)
• No prepayment penalty
• Income ceiling $14K
• Both buyers must not own private

**BANK LOAN:**
• LTV: 75%
• 5% cash min in downpayment
• Interest 1.5%–2% (2026)
• Lock-in typically 1–2 years
• Variable rates possible`,
    source: "",
    priority: "high",
  },
  {
    id: 73,
    propertyType: "hdb",
    workflow: "loans",
    question: "What is TDSR and how does it work?",
    answer: `Total Debt Servicing Ratio: all monthly debts ≤ 55% of gross income.

Includes: housing loans, car loan, personal loan, credit card minimum, student loan. Uses stress-test interest rate (currently 4% for residential).

**If tight:** pay down other debts, longer tenure, bigger downpayment.`,
    source: "",
    priority: "high",
  },
  {
    id: 74,
    propertyType: "hdb",
    workflow: "loans",
    question: "What is MSR (Mortgage Servicing Ratio)?",
    answer: `HDB-specific: monthly mortgage ≤ 30% of gross income.

Applies to HDB flats AND ECs. On top of TDSR. Stricter constraint for HDB.

**Example:** Income $6,000. MSR max = $1,800/month mortgage. TDSR max = $3,300/month all debts.`,
    source: "",
    priority: "high",
  },
  {
    id: 75,
    propertyType: "hdb",
    workflow: "loans",
    question: "Max loan tenure rules",
    answer: `HDB: 25 years (or until 65). Bank: 30 years (or until 65).

If tenure + age > 65:
• LTV drops to 55%
• Min 10% cash downpayment

Older clients = shorter tenure = higher monthly = TDSR issues.`,
    source: "",
    priority: "high",
  },
  {
    id: 76,
    propertyType: "hdb",
    workflow: "loans",
    question: "2nd property LTV rules",
    answer: `2nd loan: 45% LTV (if no outstanding) or 25% LTV (if has outstanding). 3rd: 35% / 15%.

Min 25% cash. If tenure + age > 65, LTV drops further to 25%/15%/15%/5%.`,
    source: "",
    priority: "high",
  },
  {
    id: 77,
    propertyType: "hdb",
    workflow: "loans",
    question: "Can buyer refinance HDB loan to bank loan?",
    answer: `Yes, anytime (no HDB penalty).

Warning: one-way switch. Once on bank, cannot revert to HDB concessionary. Weigh savings vs flexibility.

**Typical savings 2026:** Bank 1.7% vs HDB 2.6% = ~$3,600/year on $400K loan.`,
    source: "",
    priority: "high",
  },
  {
    id: 78,
    propertyType: "hdb",
    workflow: "loans",
    question: "Can buyer refinance bank loan to HDB loan?",
    answer: `No. Once on bank loan, cannot switch back to HDB.

One-way rule. This is why first-time HDB loan selection matters.`,
    source: "",
    priority: "high",
  },
  {
    id: 79,
    propertyType: "hdb",
    workflow: "loans",
    question: "What is an IPA (In-Principle Approval)?",
    answer: `Bank's conditional loan approval. Shows buyer how much bank will lend. Valid 30–90 days.

Not binding. Bank can still reject at formal application if circumstances change. Useful for shortlisting flats realistically.

**Different from HFE:** HFE is for HDB loan; IPA is for bank loan.`,
    source: "",
    priority: "high",
  },
  {
    id: 80,
    propertyType: "hdb",
    workflow: "loans",
    question: "What's the interest rate stress test?",
    answer: `Banks must assess at 4% residential / 5% non-residential for TDSR, not current rate.

So even if actual rate is 1.7%, bank calculates your TDSR using 4%. This is why income required for bank loan looks higher than expected.`,
    source: "",
    priority: "high",
  },
  {
    id: 81,
    propertyType: "hdb",
    workflow: "loans",
    question: "Bridge loan — when useful?",
    answer: `For upgraders: bridge loan covers downpayment of new property while waiting for old property sale.

Typically 6-month tenure, interest 4–6%. Secured against the buyer's existing property. Tight TDSR calculation.

**Alternative:** sell existing HDB first, rent temporarily, buy new. Cleaner but more disruptive.`,
    source: "",
    priority: "high",
  },
  {
    id: 82,
    propertyType: "hdb",
    workflow: "stamp",
    question: "Buyer's Stamp Duty (BSD) rates",
    answer: `Tiered: 1% → 6%. On purchase price OR valuation, whichever higher.

First $180K: 1%
Next $180K: 2%
Next $640K: 3%
Next $500K: 4%
Next $1.5M: 5%
Above $3M: 6%

**Example $1M property:** $1,800 + $3,600 + $19,200 = $24,600

BSD payable by CPF OA.`,
    source: "",
    priority: "high",
  },
  {
    id: 83,
    propertyType: "hdb",
    workflow: "stamp",
    question: "Quick BSD calculation shortcut",
    answer: `For price up to $1M: BSD ≈ 3% × Price − $5,400

**Examples:**
$500K → 3% × 500K − 5,400 = $9,600
$800K → 3% × 800K − 5,400 = $18,600
$1M → 3% × 1M − 5,400 = $24,600

Above $1M: add 4% bracket manually or use IRAS calculator.`,
    source: "",
    priority: "high",
  },
  {
    id: 84,
    propertyType: "hdb",
    workflow: "stamp",
    question: "ABSD rates — complete table",
    answer: `SC: 0% / 20% / 30% | PR: 5% / 30% / 35% | Foreigner: 60% | Entity: 65%

**SG Citizen:** 1st 0%, 2nd 20%, 3rd+ 30%
**SG PR:** 1st 5%, 2nd 30%, 3rd+ 35%
**Foreigner:** flat 60% (all)
**Entity:** 65% (+ 35% non-remittable)

ABSD is ON TOP of BSD. Payable by CPF OA.`,
    source: "",
    priority: "high",
  },
  {
    id: 85,
    propertyType: "hdb",
    workflow: "stamp",
    question: "ABSD remission for married couples",
    answer: `Pay 20% ABSD upfront. Sell first property within 6 months of new purchase. Apply for refund from IRAS.

**Conditions:**
1. Married couple, at least 1 SC spouse
2. Bought jointly in both names
3. Did not own >1 property at date of purchase
4. First property sold within 6 months (of completion, or 6 months of TOP if new)
5. Must remain married, no ownership change on 2nd property
6. Apply for refund within 6 months of sale

**No extensions.**`,
    source: "",
    priority: "high",
  },
  {
    id: 86,
    propertyType: "hdb",
    workflow: "stamp",
    question: "Single SC senior (55+) ABSD refund — new rule",
    answer: `From 16 Feb 2024: single SC seniors 55+ can claim ABSD refund when rightsizing to lower-value property.

**Conditions:**
• Each first property solely owned by single SC 55+ (or with immediate family who are also single SC 55+)
• Owners of first property must also be on 2nd property
• Pay ABSD upfront, apply for refund after selling first

**Purpose:** supports seniors right-sizing for retirement.`,
    source: "",
    priority: "high",
  },
  {
    id: 87,
    propertyType: "hdb",
    workflow: "stamp",
    question: "Seller's Stamp Duty (SSD) — NEW rates from 4 Jul 2025",
    answer: `Now 4-year holding period. Rates: 16% / 12% / 8% / 4% / 0%.

**Properties bought on/after 4 July 2025:**
≤1 year: 16%
≤2 years: 12%
≤3 years: 8%
≤4 years: 4%
>4 years: 0%

**Properties bought 11 Mar 2017 – 3 Jul 2025:** old 3-year rule still applies (12/8/4/0).

**HDB sellers:** MOP (5 yrs) > SSD period (4 yrs), so effectively never pay SSD.`,
    source: "",
    priority: "high",
  },
  {
    id: 88,
    propertyType: "hdb",
    workflow: "stamp",
    question: "SSD — does it apply to HDB sellers?",
    answer: `In practice no. MOP (5 years) exceeds SSD period (4 years), so HDB sellers don't pay.

Exception: HDB flat owners identified under SERS who sell before HDB claims — still exempt. Private property sellers: SSD applies in full.`,
    source: "",
    priority: "high",
  },
  {
    id: 89,
    propertyType: "hdb",
    workflow: "stamp",
    question: "Mortgage stamp duty",
    answer: `0.4% of loan amount, capped at $500.

Paid by buyer. Can be paid by CPF OA. Applies to both HDB and bank loans.`,
    source: "",
    priority: "high",
  },
  {
    id: 90,
    propertyType: "hdb",
    workflow: "stamp",
    question: "Tenancy stamp duty",
    answer: `0.4% × total rent for lease up to 4 years. 0.4% × 4× annual rent for lease >4 years.

Paid by tenant. Must be stamped within 14 days (executed in SG) or 30 days (overseas). Pay via IRAS e-Stamping.`,
    source: "",
    priority: "high",
  },
  {
    id: 91,
    propertyType: "hdb",
    workflow: "stamp",
    question: "Stamp duty for decoupling",
    answer: `Transferring owner pays BSD on market value of share transferred.

**Example:** $1.5M property, wife transfers 50% to husband. BSD on $750K = ~$17,100.
Plus legal fees $3–5K, potential CPF refund on transferred share.

**Worth it?** Only if ABSD savings on next property > decoupling cost.`,
    source: "",
    priority: "high",
  },
  {
    id: 92,
    propertyType: "hdb",
    workflow: "upgrader",
    question: "HDB → condo upgrader math — the big picture",
    answer: `Sell HDB first = cleaner but need temp housing. Buy condo first = pay 20% ABSD upfront, refund after selling HDB within 6 months.

**Sell first path:**
1. Sell HDB, get cash + CPF refund
2. Rent temporarily (3–6 months)
3. Buy condo as FIRST property → no ABSD
**Cleaner. Slower.**

**Buy first path:**
1. Buy condo → pay 20% ABSD upfront
2. Sell HDB within 6 months of condo purchase
3. Apply ABSD refund within 6 months of HDB sale
**Faster. Needs 20% cash buffer.**`,
    source: "",
    priority: "high",
  },
  {
    id: 93,
    propertyType: "hdb",
    workflow: "upgrader",
    question: "HDB upgrader — total cash needed for condo upgrade?",
    answer: `Rough rule: ~40–50% of condo price in liquid funds (cash + CPF) during transition.

**Breakdown for $1.5M condo:**
• 5% cash downpayment: $75K
• 20% CPF/cash: $300K
• ABSD 20% upfront: $300K (refundable)
• BSD: $44K
• Legal + misc: $10K
**Total upfront:** ~$730K
• After HDB sale + ABSD refund: most returns
• Net bridge gap: ~$400K cash for ~6 months.`,
    source: "",
    priority: "high",
  },
  {
    id: 94,
    propertyType: "hdb",
    workflow: "upgrader",
    question: "Can client keep HDB and buy condo?",
    answer: `Only after MOP fulfilled. And must pay 20% ABSD on condo (no refund unless you sell HDB within 6 months).

**Keep HDB + buy condo:**
• Must wait 5-yr MOP (10 for Plus/Prime)
• 20% ABSD locked in (not refundable if keeping HDB)
• CPF restrictions: BRS or FRS set aside for 2nd property
• HDB becomes rental asset (subject to EIP/SPR quota for tenants)

**Trade-off:** passive rental income vs. $300K+ ABSD cost.`,
    source: "",
    priority: "high",
  },
  {
    id: 95,
    propertyType: "hdb",
    workflow: "upgrader",
    question: "What is decoupling? When to use it?",
    answer: `One spouse transfers share to the other, freeing the transferee to buy 2nd property at first-property ABSD rates.

**How:** Part-transfer via lawyer. BSD on transferred share. CPF refund on transferred share.
**Cost:** BSD (tiered) + legal $3–5K + CPF refund complications.

**Worth it when:** ABSD savings on next property > total decoupling cost. Usually for families buying $1.5M+ condos.

**Note:** HDB flats cannot be decoupled (since Apr 2016) — only private.`,
    source: "",
    priority: "high",
  },
  {
    id: 96,
    propertyType: "hdb",
    workflow: "upgrader",
    question: "Condo owner wants to DOWNGRADE to HDB — what rules?",
    answer: `Must sell condo first. Wait 15 months (if under 55). Then can buy HDB resale.

**15-month wait-out (from 30 Sep 2022):**
• Applies if under 55
• Counted from legal completion of condo sale
• Only for buying non-subsidised HDB resale

**Exemption:** 55+ buying 4-room or smaller resale flat.

Also: no CPF grants during wait-out. And 30-month rule for grants still applies separately.`,
    source: "",
    priority: "high",
  },
  {
    id: 97,
    propertyType: "hdb",
    workflow: "upgrader",
    question: "15-month wait-out — how does it work in detail?",
    answer: `Count starts from legal completion date of private property sale. During 15 months: cannot buy non-subsidised HDB resale.

**Can still do during wait-out:**
• Rent
• Apply for HFE (but can't complete purchase)

**Cannot do:**
• Buy resale HDB
• Apply BTO as first-timer with full grants

**Fully privatised EC = private property** for this rule. Non-privatised EC has different rules.`,
    source: "",
    priority: "high",
  },
  {
    id: 98,
    propertyType: "hdb",
    workflow: "upgrader",
    question: "30-month rule — different from 15-month?",
    answer: `Yes. Two separate rules, often confused.

**15-month wait-out:** private → HDB resale buy. Under 55.
**30-month rule:** must not have OWNED any private property in the 30 months BEFORE HFE application — for CPF grant eligibility or BTO as first-timer.

**Plus flat 30-month wait:** private property owners wait 30 months before buying Plus flat on resale market.

All three exist. Don't mix them up.`,
    source: "",
    priority: "high",
  },
  {
    id: 99,
    propertyType: "hdb",
    workflow: "upgrader",
    question: "Client owns inherited condo + wants to buy HDB — options?",
    answer: `Must dispose of condo first. Then 15-month wait (if under 55). Then HDB.

Same rules as any private property ownership. Inheritance doesn't exempt. If inheritor's family lives in inherited condo, may apply for HDB exception — case-by-case.`,
    source: "",
    priority: "high",
  },
  {
    id: 100,
    propertyType: "hdb",
    workflow: "upgrader",
    question: "ABSD refund — what can go wrong?",
    answer: `Missing 6-month deadline. Ownership change. New property purchase. Divorce during period.

**Common mistakes:**
1. Sell first property AFTER 6 months → refund lost
2. Transfer partial ownership of new property → disqualified
3. Buy 3rd property in between → disqualified
4. Divorce during period → disqualified
5. Refund application not within 6 months of sale

**Advise:** line up HDB sale BEFORE condo OTP to be safe.`,
    source: "",
    priority: "high",
  },
  {
    id: 101,
    propertyType: "hdb",
    workflow: "upgrader",
    question: "Sell-before-buy — where to live during gap?",
    answer: `Options: rent, stay with family, holiday lease. Plan 3–6 months.

Some buyers negotiate 'stay-as-tenant' with their own HDB buyer for 1–3 months (at market rent) to bridge. Must be in SPA.

Others use 'extension of lease' with condo developer if buying new launch — move in later.`,
    source: "",
    priority: "high",
  },
  {
    id: 102,
    propertyType: "hdb",
    workflow: "senior",
    question: "Lease Buyback Scheme (LBS) — eligibility",
    answer: `Both owners 65+, SC, income ≤$14K, flat fully paid or pay-off from sale, lived in flat 5+ years, lease ≥20 years remaining.

Any flat type except: short-lease flats, HUDC, EC.

**Choose lease retention:** 15, 20, 25, 30, or 35 years (must cover youngest owner to 95).`,
    source: "",
    priority: "high",
  },
  {
    id: 103,
    propertyType: "hdb",
    workflow: "senior",
    question: "LBS — how much cash do seniors get?",
    answer: `Proceeds pay off any loan first. Then top-up CPF RA. Then LBS bonus ($7,500–$30,000). Then balance cash (capped $100K).

**LBS bonus by flat type:**
3-room or smaller: up to $30K
4-room: up to $15K
5-room+: up to $7,500

**From 1 Jan 2026:** households with 1 owner top up to age-adjusted FRS. 2+ owners top up to BRS each. Full bonus if total top-up ≥$60K.`,
    source: "",
    priority: "high",
  },
  {
    id: 104,
    propertyType: "hdb",
    workflow: "senior",
    question: "Silver Housing Bonus (SHB) — what is it?",
    answer: `Bonus (up to $40K from 1 Dec 2025) for seniors 55+ who downgrade to 3-room or smaller flat.

**Conditions:**
• Must be 55+
• Commit up to $60K net increase in CPF RA
• Can use CPF housing refunds (no cash top-up needed if sufficient)
• Cash bonus up to $30K
• Additional $10K bonus if rightsize to 2-room or smaller

**Cannot combine with LBS** — pick one.`,
    source: "",
    priority: "high",
  },
  {
    id: 105,
    propertyType: "hdb",
    workflow: "senior",
    question: "LBS vs SHB vs rent out spare rooms — which is best?",
    answer: `LBS for seniors who want to stay. SHB for those willing to move. Room rental for flexible cash flow.

**LBS:** stay in flat, monthly CPF LIFE payouts, can't sell later.
**SHB:** move to smaller flat, cash bonus, keep full ownership.
**Room rental:** keep flat, monthly rental income, no CPF commitment.

Can combine: SHB for downgrade, then rent spare room later.`,
    source: "",
    priority: "high",
  },
  {
    id: 106,
    propertyType: "hdb",
    workflow: "senior",
    question: "2-room Flexi short-lease for seniors",
    answer: `For seniors 55+. Lease 15–45 years. Fully-priced using CPF refunds or cash.

Cannot be rented out (bedroom or whole flat). Cannot be sold in open market. No subsidy clawback.

Designed for elderly who want small, affordable home and don't need full 99-year lease.`,
    source: "",
    priority: "high",
  },
  {
    id: 107,
    propertyType: "hdb",
    workflow: "senior",
    question: "Community Care Apartment — what is it?",
    answer: `Assisted-living flat for seniors 65+ integrated with care services.

2-room Flexi style. Lease 15–35 years. Includes care plan, 24-hr emergency response, communal spaces. Not sellable on open market.`,
    source: "",
    priority: "high",
  },
  {
    id: 108,
    propertyType: "hdb",
    workflow: "senior",
    question: "Can senior parents join child's HDB application?",
    answer: `Yes under Multi-Generation scheme. $21K income ceiling, 3Gen flats available.

3Gen flats: for family nucleus + at least 1 parent or grandparent. 4+ bedrooms. Available in BTO launches.

Alternative: parents as 'occupiers' on regular flat application. They don't own but must live there.`,
    source: "",
    priority: "high",
  },
  {
    id: 109,
    propertyType: "hdb",
    workflow: "divorce-death",
    question: "Divorced client wants to buy HDB — can they?",
    answer: `Yes, but depends on custody and age.

**Divorced + child custody:** any flat type (child as occupier)
**Divorced, 35+, no child:** 2-room Flexi (new) or up to 5-room resale
**Divorced, under 35, no child:** cannot buy as single

**Warning:** must wait 30 MONTHS from divorce completion before eligible for HDB.
**If ex-spouse still on flat:** settle ownership first.`,
    source: "",
    priority: "high",
  },
  {
    id: 110,
    propertyType: "hdb",
    workflow: "divorce-death",
    question: "Can one spouse keep the HDB after divorce?",
    answer: `Yes with court order + HDB approval. Other spouse must be removed from title.

**Options:**
1. One takes over (part-transfer or whole transfer)
2. Both sell to third party
3. HDB sells back (rare)

Transferring spouse may need to refund CPF. Remaining spouse must independently meet income/eligibility for retained flat.`,
    source: "",
    priority: "high",
  },
  {
    id: 111,
    propertyType: "hdb",
    workflow: "divorce-death",
    question: "MOP + divorce — any waiver?",
    answer: `Yes, case-by-case. HDB may allow sale during MOP for divorce hardship.

Apply in writing with court documents. Typical conditions: finalised divorce, genuine inability to continue joint ownership, agreed settlement plan. No guarantees.`,
    source: "",
    priority: "high",
  },
  {
    id: 112,
    propertyType: "hdb",
    workflow: "divorce-death",
    question: "Death of owner — what happens to HDB?",
    answer: `Transfer to surviving owner (joint tenancy) or per will (tenancy-in-common).

**Joint tenancy:** survivor automatically inherits.
**Tenancy-in-common:** deceased's share transfers per will or intestacy.

Survivor must independently meet eligibility to retain. If not, may need to sell (MOP waived in death).`,
    source: "",
    priority: "high",
  },
  {
    id: 113,
    propertyType: "hdb",
    workflow: "divorce-death",
    question: "What's the difference between joint tenancy and tenancy-in-common?",
    answer: `Joint tenancy: all own 100% together. Tenancy-in-common: each owns defined % share.

**Joint tenancy:** on death, share automatically goes to surviving owner (no probate for this portion).
**Tenancy-in-common:** on death, deceased's share goes via will or intestacy. More flexible but needs probate.

HDB default is usually joint tenancy for couples. Can change with lawyer.`,
    source: "",
    priority: "high",
  },
  {
    id: 114,
    propertyType: "hdb",
    workflow: "divorce-death",
    question: "CPF nomination — why it matters for HDB owners",
    answer: `CPF savings (including refunds on sale) pass via CPF nomination, NOT the will.

Default intestacy rules apply if no nomination. Nominate via my.cpf.gov.sg. Important for sellers: CPF refund on sale eventually becomes nominated funds.`,
    source: "",
    priority: "high",
  },
  {
    id: 115,
    propertyType: "hdb",
    workflow: "divorce-death",
    question: "Client inherited HDB from parent — can they keep it?",
    answer: `Only if they're eligible to own HDB (SC, meets eligibility scheme).

**If inheritor already owns HDB:** must dispose of one within 6 months.
**If inheritor owns private:** dispose of inherited HDB (can't own both).
**If inheritor doesn't meet HDB eligibility:** must sell inherited.

MOP of inheritor counted from original owner's key collection, not inheritance date.`,
    source: "",
    priority: "high",
  },
  {
    id: 116,
    propertyType: "hdb",
    workflow: "divorce-death",
    question: "Spouse dies during MOP — can survivor sell?",
    answer: `Yes. MOP waived in death. Survivor can sell immediately.

Also: can retain flat and marry again without MOP issue. Must still meet other HDB rules (EIP, etc.).

Survivor retains original MOP for future flat applications.`,
    source: "",
    priority: "high",
  },
  {
    id: 117,
    propertyType: "hdb",
    workflow: "rental",
    question: "HDB subletting rules — what landlords must know",
    answer: `Get HDB approval BEFORE subletting. MOP fulfilled. Min 6-month tenancy. Max 6 persons in flat.

**Whole flat subletting:** MOP fulfilled (5yr for Standard, 10yr for Plus/Prime — though Plus/Prime ban whole-flat rental). Owner can live elsewhere.
**Room rental:** owner must continue living in flat.

Non-Malaysian work permit holders CANNOT rent HDB. EIP quota still applies.`,
    source: "",
    priority: "high",
  },
  {
    id: 118,
    propertyType: "hdb",
    workflow: "rental",
    question: "Who can rent HDB?",
    answer: `SCs, PRs, EP/S Pass holders, Malaysian Work Permit holders, Student Pass, Dependant's Pass, LTVP.

**CANNOT rent HDB:**
• Work Permit (non-Malaysian)
• Training Work Permit
• Tourists / short-term visitors

Subject to occupancy cap (6 persons/flat) + EIP quota.`,
    source: "",
    priority: "high",
  },
  {
    id: 119,
    propertyType: "hdb",
    workflow: "rental",
    question: "Standard rental commission rates",
    answer: `Half month (1-year lease) / 1 month (2-year lease). Paid by party agent represents.

**HDB rental:** landlord pays landlord's agent, tenant pays tenant's agent (usually same % each).
**Luxury condo:** some negotiate higher.

CEA rule: agent collects from ONE party only per transaction.`,
    source: "",
    priority: "high",
  },
  {
    id: 120,
    propertyType: "hdb",
    workflow: "rental",
    question: "Tenancy Agreement — essential clauses",
    answer: `Rent amount, security deposit, lease duration, diplomatic clause, maintenance, minor repair, inventory, termination, number of occupants.

**Standard terms:**
• Security deposit: 2 months
• Lease: 1 or 2 years
• Diplomatic clause: allows early termination after 12 months, 2 months notice (for 2-year lease)
• Minor repair: tenant pays first $150–$200

Stamp duty: tenant pays. 0.4% × total rent (up to 4-year lease).`,
    source: "",
    priority: "high",
  },
  {
    id: 121,
    propertyType: "hdb",
    workflow: "rental",
    question: "Diplomatic clause — what is it?",
    answer: `Allows tenant (usually expat) to terminate lease early if relocated overseas or employment terminated.

**Typical terms:**
• Kicks in after 12 months (2-yr lease) or 6 months (1-yr)
• 2 months written notice
• Proof required (transfer letter / termination letter)

Without this clause: tenant pays remaining rent or negotiates penalty.`,
    source: "",
    priority: "high",
  },
  {
    id: 122,
    propertyType: "hdb",
    workflow: "rental",
    question: "Landlord's obligations under HDB subletting",
    answer: `Register sublet with HDB. Inform of any changes. Ensure tenants meet eligibility. Pay income tax on rental.

**Timeline:** register within 7 days of tenancy start. Free registration on HDB e-Service.
**Rental income:** declarable to IRAS. Deductible expenses: property tax, maintenance, agent commission.`,
    source: "",
    priority: "high",
  },
  {
    id: 123,
    propertyType: "hdb",
    workflow: "rental",
    question: "Can landlord evict tenant early?",
    answer: `Only for breach of contract (non-payment, illegal use, subletting without consent). Must follow legal process.

Standard process:
1. Written notice of breach
2. Grace period to rectify
3. If not rectified: terminate lease
4. If tenant refuses to leave: civil court claim for possession

Cannot just change locks or enter without notice.`,
    source: "",
    priority: "high",
  },
  {
    id: 124,
    propertyType: "hdb",
    workflow: "rental",
    question: "Owner living overseas — can rent out whole HDB?",
    answer: `Only after MOP, with HDB approval. Each approval is time-limited.

Must apply each renewal. HDB may grant 1–3 year approvals. Plus/Prime flats: whole-flat rental banned even after MOP.`,
    source: "",
    priority: "high",
  },
  {
    id: 125,
    propertyType: "hdb",
    workflow: "pr",
    question: "Single PR — can they buy any HDB?",
    answer: `No. Single PR cannot buy HDB flat at all.

Must form family nucleus (2 PRs OR 1 SC + 1 PR) to buy HDB. Single PR must rent, buy private, or wait to become SC.`,
    source: "",
    priority: "high",
  },
  {
    id: 126,
    propertyType: "hdb",
    workflow: "pr",
    question: "SC married to foreigner — can buy HDB?",
    answer: `Yes under Non-Citizen Spouse Scheme. Resale only, no BTO.

**Conditions:**
• SC must be 21+
• Foreigner spouse must hold valid pass (LTVP, work pass, etc.)
• Apply under Non-Citizen Spouse Scheme
• $10K premium (refunded if spouse becomes SC/PR or couple has child)

Grant amount = singles level (lower than SC+PR or SC+SC).`,
    source: "",
    priority: "high",
  },
  {
    id: 127,
    propertyType: "hdb",
    workflow: "pr",
    question: "Overseas property ownership — how does HDB check?",
    answer: `Self-declaration at HFE application. HDB may request supporting documents.

**Must declare all:** residential property owned anywhere (SG + overseas). Includes: condo, landed, shophouse, HUDC, inherited property, properties held in trust.

**Must dispose 30 months before HFE** if previously owned private property anywhere.

Non-disclosure is a criminal offence.`,
    source: "",
    priority: "high",
  },
  {
    id: 128,
    propertyType: "hdb",
    workflow: "pr",
    question: "Can PR use Malaysian/overseas CPF for HDB?",
    answer: `No. Only Singapore CPF can be used for HDB purchase.

Malaysian EPF, overseas pension funds, etc. cannot be used. Only own liquid assets (cash) + Singapore CPF OA.`,
    source: "",
    priority: "high",
  },
  {
    id: 129,
    propertyType: "hdb",
    workflow: "pr",
    question: "Foreigner wants to buy HDB — can they?",
    answer: `No. HDB is only for SC or PR (with family nucleus).

Foreigners can only buy private property (with 60% ABSD). Renting HDB is allowed if holding eligible pass.`,
    source: "",
    priority: "high",
  },
  {
    id: 130,
    propertyType: "hdb",
    workflow: "pr",
    question: "Spouse becomes SC during MOP — what changes?",
    answer: `Apply for Citizen Top-Up Grant (CTU). $10K premium refunded.

Also: previously reduced grants (SC+PR) can't be topped up to SC+SC level. Only $10K premium refunds.

Note: ethnic/SPR quota treatment may change — the household reclassifies as SC+SC.`,
    source: "",
    priority: "high",
  },
  {
    id: 131,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Buyer age 30 buying flat with 55-yr lease — what happens to CPF?",
    answer: `30 + 55 = 85 < 95. CPF pro-rated to 77.8% of VL.

**Calculation:** (55−20) ÷ (95−30−20) = 35/45 = 77.8%
If VL $400K → max CPF ~$311K.
HDB loan LTV also pro-rated: 77.8% × 75% = 58.3%.

**Warning:** client needs much more cash. Consider newer flat or older co-buyer.`,
    source: "",
    priority: "high",
  },
  {
    id: 132,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Buyer 26 + parent co-buyer 60 — which age used for CPF?",
    answer: `Youngest buyer's age. So 26 is used.

26 + remaining lease ≥ 95? That's the test.
**Tip:** adding older co-buyer helps with income for loan, doesn't hurt CPF (since youngest age matters).`,
    source: "",
    priority: "high",
  },
  {
    id: 133,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Client can only afford flat with <20yr lease — can they?",
    answer: `Possible but difficult. CANNOT use CPF. CANNOT get HDB loan. No grants.

Must pay cash + bank loan (if bank willing — most won't lend on <20yr lease).

**Strongly advise against** unless client fully understands: no CPF, no grants, depreciating asset.`,
    source: "",
    priority: "high",
  },
  {
    id: 134,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Overseas Singaporean wants to buy BTO — possible?",
    answer: `Generally no. BTO requires at least 1 SC + physical presence for key collection.

**Workaround:** buy resale remotely via Power of Attorney. Resale has more flexibility.

Advise overseas SCs: 'Consider resale instead of BTO while abroad.'`,
    source: "",
    priority: "high",
  },
  {
    id: 135,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Client's spouse declared bankrupt — impact on HDB?",
    answer: `Major impact on loan. HDB loan: likely disqualified. Bank loan: very difficult.

**If already owning HDB:** generally allowed to keep. But refinancing, 2nd property, CPF usage may be affected.
**If buying new HDB:** bankrupt spouse can be occupier but usually not applicant. Income assessment changes.

Case-by-case. Must disclose at HFE application.`,
    source: "",
    priority: "high",
  },
  {
    id: 136,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Client wants to add/remove person from existing HDB — how?",
    answer: `HDB ownership change application. Needs all owners' consent + HDB approval.

**Types:**
• Part-transfer (add someone)
• Withdrawal (remove someone, if eligible)
• Gift transfer (within family, BSD applies)

Conditions: remaining owners must independently meet eligibility. CPF refund may be triggered on transferred share.`,
    source: "",
    priority: "high",
  },
  {
    id: 137,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Flat was bought via BTO years ago — can change to Tenancy-in-Common?",
    answer: `Yes via 'Manner of Holding' change. Apply to HDB + legal work.

Useful for estate planning. Converts joint tenancy to tenancy-in-common with specified shares (e.g., 70/30, 50/50).

Does not trigger CPF refund if no ownership change (same owners, just new structure).`,
    source: "",
    priority: "high",
  },
  {
    id: 138,
    propertyType: "hdb",
    workflow: "tricky",
    question: "What counts as 'family nucleus' for HDB?",
    answer: `Married couple, engaged couple, parent+unmarried child, siblings (both SC), single + parents.

**Eligibility schemes:**
• Public Scheme (married/engaged)
• Fiancé/Fiancée Scheme (engaged, must marry within 3 months of key collection)
• Single Singapore Citizen Scheme
• Joint Singles Scheme (2–4 singles together)
• Non-Citizen Spouse Scheme
• Orphans Scheme`,
    source: "",
    priority: "high",
  },
  {
    id: 139,
    propertyType: "hdb",
    workflow: "tricky",
    question: "Same-sex couple — can they buy HDB?",
    answer: `Not as couple. Must use Joint Singles Scheme (both 35+) or each apply separately.

Cannot form family nucleus as 'couple' under HDB rules. Under Joint Singles Scheme (2 singles together), both must be 35+.

Alternatively: one buys as single, the other as occupier.`,
    source: "",
    priority: "high",
  },
  {
    id: 140,
    propertyType: "hdb",
    workflow: "tricky",
    question: "HDB mistake on my side — how to appeal?",
    answer: `Write to HDB via HDB e-Feedback with documentation. Takes 2–6 weeks.

If relating to BTO rejection: appeal within 1 month of result. For other issues: no fixed timeline but act quickly. Always keep written proof.`,
    source: "",
    priority: "high",
  },
  {
    id: 141,
    propertyType: "hdb",
    workflow: "agent",
    question: "Standard commission rates in Singapore",
    answer: `Selling HDB resale: ~2%. Condo: 2-4%. Landed: 2%+. Rental: 0.5-1 month's rent. All negotiable.

**Seller agent (HDB):** typically 2% of selling price.
**Buyer agent (HDB):** typically 1% from buyer.
**Private:** 2–4% from seller, often 0% from buyer (co-broke split).
**Rental:** 1 month (2-yr lease), half month (1-yr lease).

**Rule:** Agent collects from ONE party only per transaction.`,
    source: "",
    priority: "high",
  },
  {
    id: 142,
    propertyType: "hdb",
    workflow: "agent",
    question: "CEA rules every agent must follow",
    answer: `Display CEA card. No handling client money. No dual representation. Use prescribed agreements. Declare conflicts. Complete CPD hours.

**Top violations:**
1. Handling transaction monies (deposits, exercise fees)
2. Dual representation (both buyer + seller)
3. Misleading claims about property
4. Not issuing estate agency agreement
5. Missing CPD hours

**Penalties:** fines, suspension, revocation.`,
    source: "",
    priority: "high",
  },
  {
    id: 143,
    propertyType: "hdb",
    workflow: "agent",
    question: "What money can agent handle?",
    answer: `Only: valuation fees, own commission. NEVER transaction monies.

**CANNOT handle:**
• Option money / exercise fee
• Deposits
• Stamp duty payments
• Any buyer–seller money

These must go directly between parties or via lawyers' escrow. Holding client money = serious CEA violation.`,
    source: "",
    priority: "high",
  },
  {
    id: 144,
    propertyType: "hdb",
    workflow: "agent",
    question: "What is co-broking?",
    answer: `Buyer's agent and seller's agent share commission. Common for private property.

**Private property:**
• Seller pays 2–4% total
• Seller's agent shares with buyer's agent
• Buyer pays $0

**HDB resale:**
• Seller pays own agent (~2%)
• Buyer pays own agent (~1%)
• No sharing — each collects from own client

**Must use CEA Prescribed Estate Agency Agreement.**`,
    source: "",
    priority: "high",
  },
  {
    id: 145,
    propertyType: "hdb",
    workflow: "agent",
    question: "What is CPD and what's required?",
    answer: `Continuing Professional Development — mandatory yearly hours for registered agents.

Covers: ethics, property law updates, CPF/HDB policy changes, professional skills. Tracked by CEA. Failure may affect registration renewal.

**Also:** changes to HDB rules (like Aug 2024 LTV, Jul 2025 SSD) are typically covered in CPD modules.`,
    source: "",
    priority: "high",
  },
  {
    id: 146,
    propertyType: "hdb",
    workflow: "agent",
    question: "Essential GOV.SG links to bookmark",
    answer: `CPF Calculator, HDB Resale Portal, IRAS Stamp Duty, MAS Loan Rules, CEA Register.

**CPF Housing Calculator:** cpf.gov.sg/member/tools-and-services/calculators/cpf-housing-usage
**HDB Resale Portal:** hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-resale-flats
**IRAS Stamp Duty:** iras.gov.sg/taxes/stamp-duty
**MAS Loan Rules:** mas.gov.sg/regulation/explainers/property-loan-rules
**CEA Public Register:** cea.gov.sg/public-register
**CPF Online:** my.cpf.gov.sg
**HDB e-Services:** hdb.gov.sg → Services Hub`,
    source: "",
    priority: "high",
  },
  {
    id: 147,
    propertyType: "hdb",
    workflow: "agent",
    question: "Quick formula — buyer's total upfront cost",
    answer: `Downpayment (cash + CPF) + BSD + ABSD + Legal ~$3-5K + Mortgage stamp + Valuation fee + Agent commission = Total.

Always break this down for every buyer at first meeting. Shock of 'I thought I had enough' kills deals.

**Rule of thumb:** budget 30% of flat price as liquid upfront (cash + CPF).`,
    source: "",
    priority: "high",
  },
  {
    id: 148,
    propertyType: "hdb",
    workflow: "agent",
    question: "Quick formula — seller's net cash",
    answer: `Selling Price − Outstanding Loan − CPF P+I (all owners) − Agent commission (~2%) − Legal fees (~$2-3K) − SSD (if any) = Net cash

Run this for every seller. Many think 'I bought for $400K, selling $600K, I get $200K cash'. Actual cash often 10–30% of that after CPF refund.`,
    source: "",
    priority: "high",
  },
  {
    id: 149,
    propertyType: "hdb",
    workflow: "agent",
    question: "Quick formula — monthly mortgage estimate",
    answer: `~$4.50 per $1,000 borrowed at 3% / 25yr. ~$4.30 at 2.6% (HDB loan).

**Examples (25-year, ~3%):**
$500K loan ≈ $2,250/month
$750K loan ≈ $3,375/month
$1M loan ≈ $4,500/month

For bank loan 2026 (~1.7%): roughly $4,100 / $1M. Rule of thumb only — use bank calculator for exact.`,
    source: "",
    priority: "high",
  },
  {
    id: 150,
    propertyType: "hdb",
    workflow: "agent",
    question: "Client refuses to sign estate agency agreement — what do I do?",
    answer: `Don't proceed. CEA mandates the agreement. No agreement = no commission protection.

**Prescribed agreements:**
• Exclusive/non-exclusive seller appointment
• Buyer/tenant appointment

Without agreement: you have no contractual basis to claim commission. Also: CEA audits can flag you for non-compliance.`,
    source: "",
    priority: "high",
  },
  {
    id: 151,
    propertyType: "hdb",
    workflow: "agent",
    question: "Agent says seller's 'reserve price' — is that binding?",
    answer: `Only if seller signs exclusive listing agreement with specified reserve.

Verbal 'reserve' means nothing. Always get in writing. Even then: seller can withdraw anytime (subject to commission penalty).

Different from developer 'reserve price' for new launches — that's a public record.`,
    source: "",
    priority: "high",
  },
  {
    id: 152,
    propertyType: "hdb",
    workflow: "agent",
    question: "How long should agents keep records?",
    answer: `5 years for all transaction-related documents (CEA rule).

Includes: estate agency agreements, client correspondence, commission invoices, ID copies, advertisements. Digital OK. CEA can audit anytime.`,
    source: "",
    priority: "high",
  },
  {
    id: 153,
    propertyType: "hdb",
    workflow: "edge",
    question: "HDB shop flat — different from residential?",
    answer: `Yes. Shop flats (commercial/mixed-use HDB) have different rules.

No MOP, no income ceiling, can be owned by companies. Cannot use CPF. No grants. ABSD + property tax treated as commercial.

Agents handling HDB shop flats need different expertise — mostly commercial leasing experience.`,
    source: "",
    priority: "high",
  },
  {
    id: 154,
    propertyType: "hdb",
    workflow: "edge",
    question: "What is SERS?",
    answer: `Selective En-bloc Redevelopment Scheme. HDB acquires old estates for redevelopment; owners get compensation + priority for new flats.

**Compensation:** market valuation of flat at acquisition date.
**Rehousing:** priority to buy new flat in designated replacement site at subsidised prices.
**Timeline:** 6+ years from announcement to move-out.

Identified before key acquisition dates. Check HDB announcements.`,
    source: "",
    priority: "high",
  },
  {
    id: 155,
    propertyType: "hdb",
    workflow: "edge",
    question: "VERS — the voluntary version?",
    answer: `Voluntary Early Redevelopment Scheme. For flats 70+ years old. Residents vote on early redevelopment.

Announced 2018, first tranches expected from mid-2020s. Vote required: supermajority of residents. If approved: HDB acquires at market valuation.

Different from SERS — VERS is voluntary and for much older flats.`,
    source: "",
    priority: "high",
  },
  {
    id: 156,
    propertyType: "hdb",
    workflow: "edge",
    question: "What's HIP (Home Improvement Programme)?",
    answer: `Optional HDB-funded upgrade for older flats: toilets, pipes, structural.

2 tiers: essential (mandatory if voted in) + optional (owner co-pays). HDB subsidises bulk. CPF OA usable for HIP co-payment.`,
    source: "",
    priority: "high",
  },
  {
    id: 157,
    propertyType: "hdb",
    workflow: "edge",
    question: "MUP (Main Upgrading Programme) — still relevant?",
    answer: `Mostly replaced by HIP. Older blocks completed MUP in 2000s-2010s.

If flat had MUP: costs paid via CPF OA over time. Outstanding balance transfers to buyer on resale (usually built into price).`,
    source: "",
    priority: "high",
  },
  {
    id: 158,
    propertyType: "hdb",
    workflow: "edge",
    question: "Can owner renovate without approval?",
    answer: `Minor interior — yes. Structural / external — need HDB permit.

**Need permit:** hacking walls, bathroom/kitchen upgrade, electrical rewiring, flooring (certain types), ceiling works.
**No permit:** painting, fixtures, small built-ins.

Unauthorised works = HDB can order reinstatement + fines. All renovation must be by HDB-licensed contractor.`,
    source: "",
    priority: "high",
  },
  {
    id: 159,
    propertyType: "hdb",
    workflow: "edge",
    question: "When to tell buyer about renovation costs?",
    answer: `At first meeting. Budget $20K (minor) to $60K+ (full reno) for HDB resale.

**Typical HDB resale reno budget 2026:**
• Minimal (paint, fixtures): $10–20K
• Moderate (kitchen, bath, floors): $30–50K
• Full renovation: $50–80K
• Luxury/custom: $100K+

Not claimable via CPF. Some banks offer renovation loans (~4–6%).`,
    source: "",
    priority: "high",
  },
  {
    id: 160,
    propertyType: "hdb",
    workflow: "edge",
    question: "Million-dollar HDB — what's the reality in 2026?",
    answer: `Record highs in 2023–2024. Q1 2026: first HDB resale price dip in ~7 years (-0.1%).

Million-dollar transactions concentrated in mature estates (Queenstown, Bukit Merah, Bishan), 5-room/executive, attractive blocks.

**2026 market:** prices cooling slightly. Supply ramping up (100,000 BTOs 2021–2025). Bank rates low (~1.7%). Good time for first-timers; upgraders should be cautious.`,
    source: "",
    priority: "high",
  },
  {
    id: 161,
    propertyType: "hdb",
    workflow: "edge",
    question: "Valuation gap — when HDB value < price buyer willing to pay",
    answer: `This is what COV is. Buyer pays gap in cash.

**Example:** Seller wants $650K. HDB values at $620K. COV = $30K cash only.

Some sellers refuse to lower, buyers walk. Negotiate: often meet at valuation or slight COV.

Tell buyers early: 'You may need extra cash for COV — budget buffer.'`,
    source: "",
    priority: "high",
  },
  {
    id: 162,
    propertyType: "hdb",
    workflow: "edge",
    question: "Valuation came in LOWER than asking — buyer's options?",
    answer: `1. Negotiate seller down 2. Pay COV in cash 3. Walk away.

Remember: if buyer has already exercised OTP, they're committed. Valuation comes AFTER. Options are limited.

**Best practice:** check recent transactions BEFORE OTP to estimate valuation. Reduces surprise risk.`,
    source: "",
    priority: "high",
  },
  {
    id: 163,
    propertyType: "hdb",
    workflow: "edge",
    question: "Resale transaction fell through — who keeps what?",
    answer: `Depends on WHO backed out and WHEN.

**Buyer fails to exercise OTP within 21 days:** seller keeps option fee only.
**Buyer exercises but withdraws resale application:** seller may keep deposit (up to $5K).
**Seller withdraws after OTP:** must refund + potential legal action.

Agents: document everything. Never hold client money.`,
    source: "",
    priority: "high",
  },
  {
    id: 164,
    propertyType: "hdb",
    workflow: "edge",
    question: "Agent commission dispute — what to do?",
    answer: `Follow CEA dispute resolution process. Document everything.

**Steps:**
1. Direct discussion with client
2. CEA dispute resolution scheme
3. Small Claims Tribunal (up to $30K)
4. Civil court for larger amounts

Key: signed estate agency agreement is your foundation. Verbal agreements = weak case.`,
    source: "",
    priority: "high",
  },
]
