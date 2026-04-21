export type PropertyType = "hdb" | "condo" | "landed" | "general"

export type WorkflowId = "first-meeting" | "bto" | "resale" | "hfe" | "mop" | "seller-core" | "cpf-core" | "cpf-seniors" | "grants" | "loans" | "stamp" | "upgrader" | "senior" | "divorce-death" | "rental" | "pr" | "tricky" | "agent" | "edge"

export type Priority = "high" | "medium" | "low"

export type QA = {
  id: number
  propertyType: PropertyType
  workflow: WorkflowId
  question: string
  shortAnswer: string
  answer: string
  hdbRef: string
  source: string
  priority: Priority
  tags: string
  personas: string
  isUpdated: boolean
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
    workflow: "first-meeting" as WorkflowId,
    question: `Pre-viewing checklist — what to check BEFORE showing any flat`,
    shortAnswer: `Run through 10 items before you let the buyer fall in love with a unit.`,
    answer: `1. Youngest buyer's age 2. Property's remaining lease 3. Age + lease ≥ 95 (CPF pro-ration) 4. 1st or 2nd property 5. MOP fulfilled (if selling existing HDB) 6. Income ceiling met 7. Citizenship mix 8. Existing outstanding loans 9. TDSR headroom 10. CPF OA balance.

**Why:** saves wasted viewings and awkward 'sorry client can't afford this' moments.`,
    hdbRef: `✓ HDB official HFE letter FAQ confirms these are the eligibility anchors`,
    source: "",
    priority: "high",
    tags: "checklist before view pre viewing qualify buyer",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 2,
    propertyType: "hdb",
    workflow: "first-meeting" as WorkflowId,
    question: `What documents should I ask the buyer to prepare?`,
    shortAnswer: `HFE letter, Singpass login, NRIC, latest 3-month payslips, CPF statement, existing loan statements (if any).`,
    answer: `For non-salaried buyers: 2 years of income tax NOA. For PRs: PR card + entry permit. For foreigners in the household: passport + visa.`,
    hdbRef: `✓ HDB HFE application requires all income earners to submit income documents`,
    source: "",
    priority: "high",
    tags: "buyer documents buyer papers",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 3,
    propertyType: "hdb",
    workflow: "first-meeting" as WorkflowId,
    question: `How do I qualify a buyer's budget in 5 minutes?`,
    shortAnswer: `Quick math: (Income × 12 × 4.5 × 0.5) + (CPF OA + cash savings) = rough max flat price.`,
    answer: `This is a napkin formula assuming TDSR 55% and 25% downpayment. Always confirm with HFE letter.

**Example:** Couple earning $8K combined → ($8,000 × 12 × 4.5 × 0.5) + $100K OA + $50K cash = $366K loan + $150K = **~$516K max flat**.`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "qualify budget budget formula how much can buyer afford",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 4,
    propertyType: "hdb",
    workflow: "first-meeting" as WorkflowId,
    question: `Buyer says 'I have $100K cash' — what flat range can they consider?`,
    shortAnswer: `Depends on their loan eligibility, not just cash.`,
    answer: `$100K cash alone could downpay a $400K flat (25% DP). But if their TDSR only supports a $200K loan, max flat is $300K. Always check **loan capacity first**, cash second.`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "buyer cash 100k cash cash only buyer",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 5,
    propertyType: "hdb",
    workflow: "first-meeting" as WorkflowId,
    question: `Should I ask for HFE letter first or start viewing?`,
    shortAnswer: `HFE letter first. Always. No exceptions.`,
    answer: `HDB requires valid HFE before resale buyer can accept OTP from seller. Without HFE, buyer literally cannot buy. Also — HFE tells you exact grants + loan eligibility so you can shortlist accurately.`,
    hdbRef: `✓ HDB: 'Resale flat buyers will need to have a valid HFE letter before they obtain an OTP from flat sellers'`,
    source: "",
    priority: "high",
    tags: "hfe first when apply hfe",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 6,
    propertyType: "hdb",
    workflow: "first-meeting" as WorkflowId,
    question: `What's a realistic timeline from 'I want to buy' to key collection?`,
    shortAnswer: `Resale: 3–4 months. BTO: 3–5 years (construction + MOP wait).`,
    answer: `**Resale breakdown:** HFE 1 month → find flat + OTP 1–2 months → HDB resale application processing ~8 weeks → completion at HDB appointment.
**BTO:** Application → ballot → booking (2–3 months) → construction (3–4 years) → key collection.`,
    hdbRef: `✓ HDB publishes standard resale timeline`,
    source: "",
    priority: "high",
    tags: "timeline buy how long buy hdb",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 7,
    propertyType: "hdb",
    workflow: "bto" as WorkflowId,
    question: `BTO eligibility — full criteria`,
    shortAnswer: `SC + age 21+ (family) or 35+ (single, 2-room Flexi). Income ceiling $14K (most) or $7K (2-room Flexi). Must not own any property.`,
    answer: `Additional rules:
• Must not have bought 2 HDB flats before
• Must form valid family nucleus
• Multi-generation families: $21K ceiling
• Extended family: $21K ceiling
• Plus/Prime flats may have stricter rules per launch`,
    hdbRef: `✓ HDB Feb 2026 BTO Annex B confirms current income ceilings`,
    source: "",
    priority: "high",
    tags: "bto eligible bto criteria bto income ceiling bto 14000",
    personas: "buyer single",
    isUpdated: true,
  },
  {
    id: 8,
    propertyType: "hdb",
    workflow: "bto" as WorkflowId,
    question: `What are Standard, Plus, Prime flats?`,
    shortAnswer: `New BTO classification from Oct 2024. Standard = regular BTO. Plus = better locations, tighter rules. Prime = best locations, tightest rules.`,
    answer: `**Standard:** 5-yr MOP, no clawback
**Plus:** 10-yr MOP, 6-8% subsidy clawback on resale, resale buyer must meet $14K ceiling
**Prime:** 10-yr MOP, 9% clawback, resale buyer must meet $14K ceiling, 30-month wait-out for private property owners

**Both Plus & Prime:** whole-flat rental banned even after MOP.`,
    hdbRef: `✓ HDB Standard, Plus, and Prime Housing Framework page`,
    source: "",
    priority: "high",
    tags: "plus prime standard plus prime new bto classification prime flat",
    personas: "buyer",
    isUpdated: true,
  },
  {
    id: 9,
    propertyType: "hdb",
    workflow: "bto" as WorkflowId,
    question: `Subsidy clawback — how does it actually work?`,
    shortAnswer: `When Plus/Prime owner sells after MOP, they pay HDB a % of resale price (or valuation, whichever is higher).`,
    answer: `**Rates set per launch:** Oct 2024 launch was 6–8% for Plus, 9% for Prime.
**Example:** Prime flat sold at $1.2M with 9% clawback = $108K paid back to HDB.
**Important:** clawback only applies to the ORIGINAL BTO owner. Resale buyer of a Plus/Prime flat doesn't pay clawback when they later sell.`,
    hdbRef: `✓ HDB confirms clawback % is decided per launch and announced publicly`,
    source: "",
    priority: "high",
    tags: "clawback subsidy clawback plus prime sell 9 percent clawback",
    personas: "buyer",
    isUpdated: true,
  },
  {
    id: 10,
    propertyType: "hdb",
    workflow: "bto" as WorkflowId,
    question: `BTO application process step-by-step`,
    shortAnswer: `1. Apply for HFE letter 2. Watch for sales launch 3. Apply during launch window 4. Ballot 5. Book flat if successful 6. Sign agreement + pay option fee 7. Wait for construction 8. Key collection.`,
    answer: `Ballot results: ~3 weeks after launch. Booking appointment: 2–6 months after ballot depending on queue number. Option fee: $500–$2,000 depending on flat type.`,
    hdbRef: `✓ HDB standard BTO procedure`,
    source: "",
    priority: "high",
    tags: "bto apply bto process bto timeline bto ballot",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 11,
    propertyType: "hdb",
    workflow: "bto" as WorkflowId,
    question: `Can I apply for multiple BTOs at once?`,
    shortAnswer: `No — only 1 application per launch across all towns.`,
    answer: `If you apply and don't book, 1-year time bar applies before next resale grant or BTO application (from March 2012 onwards).`,
    hdbRef: `✓ HDB 1-year time bar rule`,
    source: "",
    priority: "high",
    tags: "multiple bto bto application limit",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 12,
    propertyType: "hdb",
    workflow: "bto" as WorkflowId,
    question: `What happens if I cancel after booking BTO?`,
    shortAnswer: `1-year time bar before you can apply for resale with CPF grant, or before being an essential occupier.`,
    answer: `Option fee is forfeited. For Plus/Prime flats, additional penalties may apply per launch terms. Always warn clients: *'Book a BTO only if you're 100% committed.'*`,
    hdbRef: `✓ HDB rule from March 2012`,
    source: "",
    priority: "high",
    tags: "cancel bto bto 1 year time bar",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 13,
    propertyType: "hdb",
    workflow: "bto" as WorkflowId,
    question: `Single can buy BTO — what are the rules?`,
    shortAnswer: `Single SC aged 35+. Since Oct 2024, singles can buy 2-room Flexi in Standard / Plus / Prime locations.`,
    answer: `Income ceiling: $7,000. Single pays $15,000 premium (vs couples). Can also buy Standard/Plus resale flat of any size. Prime resale: 4-room or smaller only.

**Widowed/orphan:** eligible from age 21.`,
    hdbRef: `✓ HDB confirms new single housing options from Oct 2024 launch`,
    source: "",
    priority: "high",
    tags: "single bto single 35 2 room flexi single buy flat",
    personas: "single",
    isUpdated: true,
  },
  {
    id: 14,
    propertyType: "hdb",
    workflow: "bto" as WorkflowId,
    question: `Why does my client's BTO application keep failing?`,
    shortAnswer: `Usually one of: wrong category (first-timer vs second-timer), applied in wrong town for income level, poor queue number, or over-subscribed launch.`,
    answer: `Check: are they genuinely first-timer? Did they use past Open Booking waiver? Are they married (nucleus) or Single scheme? Tell client to also try Sale of Balance Flats (SBF) or Open Booking — shorter waits.`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 15,
    propertyType: "hdb",
    workflow: "resale" as WorkflowId,
    question: `HDB resale buying process — full steps`,
    shortAnswer: `1. Register Intent to Buy 2. Get HFE letter 3. Find flat 4. Seller grants OTP 5. Buyer exercises OTP 6. Submit resale application 7. HDB processes ~8 weeks 8. Complete at HDB appointment.`,
    answer: `Option fee: $1–$1,000 (negotiable, buyer pays on OTP). OTP valid 21 calendar days from date of grant. Total deposit (option + exercise fee) capped at $5,000 for HDB resale.`,
    hdbRef: `✓ HDB official resale procedure confirms these steps and fee limits`,
    source: "",
    priority: "high",
    tags: "resale process buy resale resale steps",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 16,
    propertyType: "hdb",
    workflow: "resale" as WorkflowId,
    question: `What is COV (Cash Over Valuation)?`,
    shortAnswer: `COV = Purchase price − HDB valuation. Must be paid in CASH (no CPF, no loan).`,
    answer: `HDB issues 'Request for Value' during resale application. Buyer only discovers exact valuation AFTER committing to OTP.

**Tip:** Use recent transactions in the block/street to estimate. Advise buyer to budget extra cash buffer.`,
    hdbRef: `✓ HDB standard resale valuation process`,
    source: "",
    priority: "high",
    tags: "cov cash over valuation",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 17,
    propertyType: "hdb",
    workflow: "resale" as WorkflowId,
    question: `What is Intent to Buy and when to register?`,
    shortAnswer: `Free declaration on HDB Resale Portal. Tells HDB you're starting the resale journey.`,
    answer: `Valid for 12 months. Usually done before/around HFE application. Not binding. Helps HDB prepare your eligibility records.`,
    hdbRef: `✓ HDB resale process page`,
    source: "",
    priority: "high",
    tags: "intent to buy register intent buyer",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 18,
    propertyType: "hdb",
    workflow: "resale" as WorkflowId,
    question: `What is the OTP for HDB resale?`,
    shortAnswer: `Option to Purchase. Seller grants. Buyer pays $1–$1,000 option fee. Valid 21 calendar days.`,
    answer: `Buyer exercises by signing resale application + paying exercise fee. Total (option + exercise) capped at $5,000.
**If buyer doesn't exercise:** seller keeps option fee, nothing more.
**Seller must have registered Intent to Sell for >7 days before granting OTP.**`,
    hdbRef: `✓ HDB confirms $5,000 total cap and 21-day validity`,
    source: "",
    priority: "high",
    tags: "otp option to purchase 21 days otp 5000 deposit",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 19,
    propertyType: "hdb",
    workflow: "resale" as WorkflowId,
    question: `Can buyer extend the 21-day OTP period?`,
    shortAnswer: `Only if seller agrees. No HDB rule forcing extension.`,
    answer: `In practice: rare. Usually buyer either exercises within 21 days or the OTP lapses. If extension agreed, must be documented in writing.`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "extend otp otp extension",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 20,
    propertyType: "hdb",
    workflow: "resale" as WorkflowId,
    question: `Can PRs buy HDB resale?`,
    shortAnswer: `Yes — but only if forming a family nucleus. Single PR cannot buy HDB at all.`,
    answer: `**2 PRs as family nucleus:** resale only (no BTO). Subject to SPR quota per block.
**SC + PR:** can buy BTO and resale. $10,000 premium for first-timer SC+PR household (refunded when PR becomes citizen or has child).
**Must dispose private property 30 months BEFORE HFE if either spouse previously owned.**`,
    hdbRef: `✓ HDB eligibility scheme for PRs`,
    source: "",
    priority: "high",
    tags: "pr buy hdb pr resale pr hdb rules",
    personas: "pr/foreigner",
    isUpdated: false,
  },
  {
    id: 21,
    propertyType: "hdb",
    workflow: "resale" as WorkflowId,
    question: `What is EIP and how to check quota?`,
    shortAnswer: `Ethnic Integration Policy. Caps on ethnic group % per block/neighbourhood.`,
    answer: `**Block / Neighbourhood:**
Chinese: 84% / 87%
Malay: 25% / 22%
Indian & Others: 15% / 13%

If quota hit: buyer cannot buy in that block. Quota refreshes 1st of each month.
**Check:** hdb.gov.sg → EIP/SPR Quota e-Service.`,
    hdbRef: `✓ HDB EIP/SPR Quota e-Service`,
    source: "",
    priority: "high",
    tags: "eip ethnic integration ethnic quota racial quota",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 22,
    propertyType: "hdb",
    workflow: "resale" as WorkflowId,
    question: `What is SPR quota (separate from EIP)?`,
    shortAnswer: `Non-Malaysian PRs capped at 8% per block, 5% per neighbourhood.`,
    answer: `If SPR quota hit: non-Malaysian PR family cannot buy in that block. Malaysian PRs are exempt from this quota (but still subject to EIP).`,
    hdbRef: `✓ HDB EIP/SPR Quota page`,
    source: "",
    priority: "high",
    tags: "spr quota non citizen quota pr quota block",
    personas: "pr/foreigner",
    isUpdated: false,
  },
  {
    id: 23,
    propertyType: "hdb",
    workflow: "resale" as WorkflowId,
    question: `What about buying resale flats with short remaining lease?`,
    shortAnswer: `<20 years: CANNOT use CPF at all. 20+ but doesn't cover youngest to age 95: CPF pro-rated.`,
    answer: `HDB loan also pro-rated if lease doesn't cover to 95. No grants. Must be cash + bank loan (if bank willing).

**Age 55+ exception:** 2-room Flexi short-lease flats (15–45 yr leases) are specifically designed for seniors.`,
    hdbRef: `✓ CPF confirms 20-year minimum lease rule`,
    source: "",
    priority: "high",
    tags: "short lease old flat cpf lease under 20",
    personas: "buyer senior_55+",
    isUpdated: false,
  },
  {
    id: 24,
    propertyType: "hdb",
    workflow: "hfe" as WorkflowId,
    question: `What is the HFE letter and why is it critical?`,
    shortAnswer: `HDB Flat Eligibility letter. Single source of truth for: flat eligibility, CPF grant amount, HDB loan amount, resale levy.`,
    answer: `Introduced 9 May 2023 — replaced the old HLE. Valid 9 months. Processing ~1 month (longer near BTO launches). Free. Apply via HDB Flat Portal with Singpass.`,
    hdbRef: `✓ HDB HFE letter page — validity extended to 9 months from 7 Nov 2023`,
    source: "",
    priority: "high",
    tags: "hfe hfe letter flat eligibility",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 25,
    propertyType: "hdb",
    workflow: "hfe" as WorkflowId,
    question: `Difference between HFE and HLE?`,
    shortAnswer: `HLE (old, pre-May 2023): loan-only assessment. HFE (new): comprehensive — flat eligibility, grants, loan, resale levy all in one.`,
    answer: `HLE no longer issued. If client still has a valid old HLE letter, it can still be used until expiry but new applications use HFE.`,
    hdbRef: `✓ HDB confirms HFE replaced HLE from May 2023`,
    source: "",
    priority: "high",
    tags: "hfe vs hle hle hfe hle different",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 26,
    propertyType: "hdb",
    workflow: "hfe" as WorkflowId,
    question: `My client's HFE expired — what now?`,
    shortAnswer: `Apply for a fresh HFE. Cannot extend expired ones.`,
    answer: `New assessment uses current policies and income. If rules or income changed, new eligibility may differ.
**Tip:** Always tell clients 'Start flat search immediately after HFE. Don't sit on it.'`,
    hdbRef: `✓ HDB: HFE cannot be extended, must reapply`,
    source: "",
    priority: "high",
    tags: "hfe expired hfe renew hfe 9 months",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 27,
    propertyType: "hdb",
    workflow: "hfe" as WorkflowId,
    question: `Can HFE be used if income changed after it was issued?`,
    shortAnswer: `Yes — as long as still valid (9 months). Outcome stands.`,
    answer: `**Income went UP past ceiling:** can still proceed, HFE locks in eligibility.
**Income went DOWN and now qualifies for EHG:** should cancel and reapply to get higher grant.
**Loan amount** won't be reassessed unless adverse change to loan-servicing ability.`,
    hdbRef: `✓ HDB HFE FAQ`,
    source: "",
    priority: "high",
    tags: "hfe income change hfe income update",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 28,
    propertyType: "hdb",
    workflow: "hfe" as WorkflowId,
    question: `How long does HFE application take?`,
    shortAnswer: `About 1 month once all documents submitted. Longer during/near BTO sales launches.`,
    answer: `Apply at least 1 month ahead of any sales launch. All income earners' documents must be uploaded. Use Singpass Myinfo to auto-fill.`,
    hdbRef: `✓ HDB HFE general FAQ`,
    source: "",
    priority: "high",
    tags: "hfe processing hfe how long",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 29,
    propertyType: "hdb",
    workflow: "hfe" as WorkflowId,
    question: `Can 2 applicants have separate HFE letters?`,
    shortAnswer: `No. One person can only be on ONE HFE application (applicant or occupier).`,
    answer: `Flat application is processed based on the SUBMITTED HFE. Other HFEs issued earlier or later are ignored.`,
    hdbRef: `✓ HDB HFE application page`,
    source: "",
    priority: "high",
    tags: "separate hfe two hfe multiple hfe",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 30,
    propertyType: "hdb",
    workflow: "mop" as WorkflowId,
    question: `What is MOP?`,
    shortAnswer: `Minimum Occupation Period. Standard HDB: 5 years. Plus/Prime: 10 years. Starts from key collection date.`,
    answer: `During MOP, owner **cannot:** sell, rent whole flat (rooms OK), buy/own private property.`,
    hdbRef: `✓ HDB conditions after buying`,
    source: "",
    priority: "high",
    tags: "mop minimum occupation 5 years mop 10 years mop",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 31,
    propertyType: "hdb",
    workflow: "mop" as WorkflowId,
    question: `After MOP — what can owner do?`,
    shortAnswer: `Sell on resale market, rent whole flat (with HDB approval), buy private property.`,
    answer: `For Plus/Prime: whole-flat rental still banned even after MOP. Only room rental allowed.`,
    hdbRef: `✓ HDB conditions after buying + Plus/Prime rules`,
    source: "",
    priority: "high",
    tags: "after mop post mop sell after mop",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 32,
    propertyType: "hdb",
    workflow: "mop" as WorkflowId,
    question: `Are there any exceptions to the 5-year MOP?`,
    shortAnswer: `Some cases extend to 10 years (non-citizen spouse scheme, Plus/Prime flats). Hardship waiver for divorce, financial distress, medical is case-by-case.`,
    answer: `Divorce: if couple bought under first-timer scheme, HDB may allow sale before MOP with consent from both parties.
Death: surviving spouse can sell without MOP penalty.
Must apply to HDB in writing for case-specific ruling.`,
    hdbRef: `✓ HDB case-by-case appeal process`,
    source: "",
    priority: "high",
    tags: "mop exception mop waiver before mop",
    personas: "divorce/family",
    isUpdated: false,
  },
  {
    id: 33,
    propertyType: "hdb",
    workflow: "mop" as WorkflowId,
    question: `Can I count rental period toward MOP?`,
    shortAnswer: `No. MOP is 'occupation' — owners must physically live in flat.`,
    answer: `If caught renting out whole flat during MOP: MOP clock resets, possible compulsory acquisition. Room rental during MOP: allowed with HDB approval.`,
    hdbRef: `✓ HDB strict MOP enforcement`,
    source: "",
    priority: "high",
    tags: "rent mop rental mop count",
    personas: "landlord",
    isUpdated: false,
  },
  {
    id: 34,
    propertyType: "hdb",
    workflow: "mop" as WorkflowId,
    question: `Client inherited HDB during MOP of another HDB — what happens?`,
    shortAnswer: `Must dispose of one within 6 months. Cannot own 2 HDB flats.`,
    answer: `Same rule if inherited private property: must dispose of one within 6 months unless HDB grants exception (e.g., inheritor's family occupies inherited private).
**Advise:** write to HDB for case-specific ruling immediately.`,
    hdbRef: `✓ HDB inheritance rules`,
    source: "",
    priority: "high",
    tags: "inherit mop mop inherited",
    personas: "death/inheritance",
    isUpdated: false,
  },
  {
    id: 35,
    propertyType: "hdb",
    workflow: "seller-core" as WorkflowId,
    question: `HDB resale selling process — full steps`,
    shortAnswer: `1. Register Intent to Sell 2. List + market flat 3. Grant OTP to buyer 4. Buyer exercises OTP 5. Submit resale application 6. HDB processes ~8 weeks 7. Completion appointment.`,
    answer: `Intent to Sell must be at least 7 DAYS before granting OTP. Valid 12 months. Seller's agent commission typically ~2%.`,
    hdbRef: `✓ HDB resale selling page`,
    source: "",
    priority: "high",
    tags: "sell process selling steps sell hdb",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 36,
    propertyType: "hdb",
    workflow: "seller-core" as WorkflowId,
    question: `What is Intent to Sell?`,
    shortAnswer: `Free declaration on HDB Flat Portal that you intend to sell. Mandatory before granting OTP.`,
    answer: `Must be registered >7 days before granting OTP. Valid 12 months. Purpose: HDB checks MOP fulfilled, outstanding issues clear.
**Tell sellers:** register early, don't wait until buyer appears.`,
    hdbRef: `✓ HDB Intent to Sell requirement`,
    source: "",
    priority: "high",
    tags: "intent to sell register intent seller 7 days intent",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 37,
    propertyType: "hdb",
    workflow: "seller-core" as WorkflowId,
    question: `What documents should seller prepare?`,
    shortAnswer: `CPF usage statement, outstanding loan statement, title deed, property tax notice, renovation invoices.`,
    answer: `For HDB resale: also EIP quota check, HDB resale checklist. **Get CPF statement FIRST** — determines actual cash seller gets.`,
    hdbRef: `✓ HDB selling page guidance`,
    source: "",
    priority: "high",
    tags: "seller document selling papers",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 38,
    propertyType: "hdb",
    workflow: "seller-core" as WorkflowId,
    question: `What happens to seller's CPF when selling?`,
    shortAnswer: `Must refund Principal + Accrued Interest (2.5%) to CPF, regardless of age.`,
    answer: `**Below 55:** refund → OA.
**55+:** from 1 Jul 2024, refund → OA by default (was cash before). Can top up RA, use for next property, or withdraw cash.
**Negative sale:** refund capped at net proceeds (no cash out of pocket).`,
    hdbRef: `✓ CPF selling your home page confirms 1 Jul 2024 change`,
    source: "",
    priority: "high",
    tags: "cpf sell refund cpf selling cpf refund accrued interest",
    personas: "seller",
    isUpdated: true,
  },
  {
    id: 39,
    propertyType: "hdb",
    workflow: "seller-core" as WorkflowId,
    question: `How to calculate seller's cash proceeds?`,
    shortAnswer: `Selling Price − Outstanding Loan − CPF P+I (all owners) − Agent commission − Legal fees − SSD (if any) = Net cash`,
    answer: `**Run this for every seller at first meeting.** Many sellers are shocked when they realise 'paper gain' doesn't equal 'cash in pocket' after CPF refund.`,
    hdbRef: `✓ CPF refund formula from official CPF page`,
    source: "",
    priority: "high",
    tags: "seller cash net proceeds seller profit",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 40,
    propertyType: "hdb",
    workflow: "seller-core" as WorkflowId,
    question: `Negative sale — how is CPF refund split?`,
    shortAnswer: `Pro-rated based on each owner's P+I share of total.`,
    answer: `**Formula:** Your refund = (Your P+I ÷ Total P+I) × Net proceeds

**Example:** Net $160K. Husband P+I $150K, Wife P+I $50K. Total $200K.
Husband: 150/200 × $160K = $120K
Wife: 50/200 × $160K = $40K
Neither gets cash. Buyer's deposit must also go to sellers' CPF.`,
    hdbRef: `✓ CPF official formula`,
    source: "",
    priority: "high",
    tags: "negative sale selling loss cpf pro rate sell",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 41,
    propertyType: "hdb",
    workflow: "seller-core" as WorkflowId,
    question: `What is Resale Levy and when does it apply?`,
    shortAnswer: `Applies when seller (who received housing subsidy) buys another SUBSIDISED HDB.`,
    answer: `**Levy by flat type SOLD:**
2-room: $15K
3-room: $30K
4-room: $40K
5-room: $45K
Executive: $50K
EC: $55K

Does NOT apply when buying resale or private property.`,
    hdbRef: `✓ HDB resale levy page`,
    source: "",
    priority: "high",
    tags: "resale levy levy subsidised 30k 40k levy",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 42,
    propertyType: "hdb",
    workflow: "seller-core" as WorkflowId,
    question: `Client wants to sell during MOP — is there any way?`,
    shortAnswer: `Only with HDB approval on hardship grounds: divorce, severe financial distress, medical emergency.`,
    answer: `Case-by-case. Apply in writing to HDB explaining situation + supporting documents. No guaranteed outcome. Most early-MOP sales involve compulsory acquisition or financial hardship waivers.`,
    hdbRef: `✓ HDB case-by-case appeal policy`,
    source: "",
    priority: "high",
    tags: "sell before mop early sale mop hardship",
    personas: "divorce/family",
    isUpdated: false,
  },
  {
    id: 43,
    propertyType: "hdb",
    workflow: "seller-core" as WorkflowId,
    question: `EIP affects sellers — how?`,
    shortAnswer: `If block EIP quota for seller's race is hit: can only sell to same race.`,
    answer: `Minority sellers often face smaller eligible buyer pool. Can wait until next month's quota refresh.

**HDB buyback scheme:** owned 10+ years AND tried selling 6+ months at reasonable price → can apply for HDB to buy back.`,
    hdbRef: `✓ HDB EIP rules`,
    source: "",
    priority: "high",
    tags: "eip seller minority seller eip blocked",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 44,
    propertyType: "hdb",
    workflow: "seller-core" as WorkflowId,
    question: `Buyer's deposit after OTP — where does it go?`,
    shortAnswer: `Directly to seller. Agent must NOT hold it.`,
    answer: `Exercise fee goes to seller. At HDB appointment, seller redeems loan + refunds CPF, receives net cash via lawyer's trust account.`,
    hdbRef: `✓ CEA rule: agents cannot handle transaction monies`,
    source: "",
    priority: "high",
    tags: "deposit otp where deposit goes",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 45,
    propertyType: "hdb",
    workflow: "cpf-core" as WorkflowId,
    question: `4 types of CPF accounts — which can be used for property?`,
    shortAnswer: `OA only. Cannot use SA, MA, or RA.`,
    answer: `**OA (Ordinary):** housing, insurance, investment, education
**SA (Special):** retirement — closed for 55+ from 2025
**MA (Medisave):** medical
**RA (Retirement):** created at 55 from OA+SA`,
    hdbRef: `✓ CPF confirms only OA for property`,
    source: "",
    priority: "high",
    tags: "cpf account oa sa ma ra which cpf for property",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 46,
    propertyType: "hdb",
    workflow: "cpf-core" as WorkflowId,
    question: `CPF contribution rates 2026`,
    shortAnswer: `55 & below: 37% total. Rates drop after 55. Salary ceiling $8,000/month from Jan 2026.`,
    answer: `Above 55–60: 34% (+1.5% from 2025)
Above 60–65: 25% (+1.5% from 2025)
Above 65–70: 16.5%
Above 70: 12.5%

The +1.5% for 55–65 goes to RA (up to FRS), then OA.`,
    hdbRef: `✓ CPF employer obligations page`,
    source: "",
    priority: "high",
    tags: "cpf rate cpf percent cpf contribution",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 47,
    propertyType: "hdb",
    workflow: "cpf-core" as WorkflowId,
    question: `CPF interest rates 2026`,
    shortAnswer: `OA: 2.5% | SA/MA/RA: 4.0% | Reviewed quarterly.`,
    answer: `Extra interest: +1% on first $60K combined (cap $20K from OA). Age 55+: extra +1% on first $30K.
**Effective for seniors:** first $30K up to 6%, next $30K up to 5%, rest 4%.`,
    hdbRef: `✓ CPF interest rates — from 1 Jan–31 Mar 2026 announcement`,
    source: "",
    priority: "high",
    tags: "cpf interest oa interest ra interest",
    personas: "buyer senior_55+",
    isUpdated: false,
  },
  {
    id: 48,
    propertyType: "hdb",
    workflow: "cpf-core" as WorkflowId,
    question: `Full list: what can CPF OA be used for?`,
    shortAnswer: `Downpayment, monthly instalment, loan repayment, BSD, ABSD, mortgage stamp, legal fees, HPS premium, HDB upgrading (MUP/HIP), construction loan (landed).`,
    answer: `CANNOT use for: COV, agent commission, renovation, anything else. Each usage is capped differently (see VL and WL).`,
    hdbRef: `✓ CPF home ownership page`,
    source: "",
    priority: "high",
    tags: "cpf uses cpf oa usage what cpf for",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 49,
    propertyType: "hdb",
    workflow: "cpf-core" as WorkflowId,
    question: `What is VL (Valuation Limit)?`,
    shortAnswer: `Lower of: purchase price OR valuation.`,
    answer: `**Example:** Price $420K, Valuation $400K → VL = $400K.
Baseline cap for CPF usage. After hitting VL, continuing to WL requires setting aside BRS.`,
    hdbRef: `✓ CPF home ownership page`,
    source: "",
    priority: "high",
    tags: "valuation limit vl cpf cpf vl",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 50,
    propertyType: "hdb",
    workflow: "cpf-core" as WorkflowId,
    question: `What is WL (Withdrawal Limit)?`,
    shortAnswer: `120% of VL (from Jan 2008).`,
    answer: `**Example:** VL $400K → WL = $480K.
Applies to bank loans. For HDB loan on new BTO: no WL (no limit beyond LTV cap).`,
    hdbRef: `✓ CPF home ownership page`,
    source: "",
    priority: "high",
    tags: "withdrawal limit wl cpf 120 percent cpf wl",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 51,
    propertyType: "hdb",
    workflow: "cpf-core" as WorkflowId,
    question: `The 'age 95' rule — full CPF pro-ration formula`,
    shortAnswer: `Youngest buyer's age + remaining lease ≥ 95 → FULL CPF. If < 95 → pro-rated.`,
    answer: `**Pro-ration formula:** (Remaining Lease − 20) ÷ (95 − Youngest Age − 20) × VL

**Examples:**
Age 25 + 88yr = 113 → Full
Age 25 + 65yr = 90 → 45/50 = 90%
Age 45 + 50yr = 95 → Full (exactly 95 counts)
Age 50 + 40yr = 90 → 20/25 = 80%

From 10 May 2019.`,
    hdbRef: `✓ CPF housing usage calculator`,
    source: "",
    priority: "high",
    tags: "age 95 cpf age 95 lease 95 pro rate cpf proration formula",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 52,
    propertyType: "hdb",
    workflow: "cpf-core" as WorkflowId,
    question: `Can my client retain OA balance when taking HDB loan?`,
    shortAnswer: `Yes. Can retain up to $20,000 EACH in OA (from 28 Aug 2018).`,
    answer: `Optional — can still choose to use all OA. Good for clients wanting emergency buffer. This $20K keeps earning 2.5% interest.`,
    hdbRef: `✓ CPF home ownership page`,
    source: "",
    priority: "high",
    tags: "retain oa 20k oa keep cpf buffer",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 53,
    propertyType: "hdb",
    workflow: "cpf-core" as WorkflowId,
    question: `CPF usage: HDB loan vs Bank loan — summary`,
    shortAnswer: `HDB loan (new BTO): up to LTV 75%, no VL/WL. HDB loan (resale): up to VL, beyond VL if BRS set aside. Bank loan: up to VL, then up to WL if BRS set aside.`,
    answer: `HDB loan still more flexible for CPF. But with 75% LTV cap (since Aug 2024), max CPF-fundable amount = 75% of price for new BTO.`,
    hdbRef: `✓ CPF home ownership page`,
    source: "",
    priority: "high",
    tags: "hdb loan bank loan compare loan which loan better 75 ltv",
    personas: "buyer",
    isUpdated: true,
  },
  {
    id: 54,
    propertyType: "hdb",
    workflow: "cpf-seniors" as WorkflowId,
    question: `What is BRS, FRS, ERS for 2026?`,
    shortAnswer: `BRS: $110,200 | FRS: $220,400 | ERS: $440,800 (for turning 55 in 2026).`,
    answer: `BRS increases ~3.5% yearly. Relevant sum = year person TURNED 55.

2023: $99,400 | 2024: $102,900 | 2025: $106,500 | 2026: $110,200 | 2027: $114,100`,
    hdbRef: `✓ CPF retirement income page`,
    source: "",
    priority: "high",
    tags: "brs frs ers retirement sum 110200 frs 2026 220400",
    personas: "senior_55+",
    isUpdated: false,
  },
  {
    id: 55,
    propertyType: "hdb",
    workflow: "cpf-seniors" as WorkflowId,
    question: `At age 55 — what changes for CPF and property?`,
    shortAnswer: `RA is created. Savings from SA + up to FRS from OA transfer to RA. Only OA left for property.`,
    answer: `If client already owns property covering to age 95: only BRS needs to go to RA (not FRS). Remaining OA stays usable.

**From 2025:** SA is closed for members 55+. SA savings go to RA (up to FRS) then OA.`,
    hdbRef: `✓ CPF age 55 rules`,
    source: "",
    priority: "high",
    tags: "cpf 55 age 55 ra created 55 cpf changes",
    personas: "senior_55+",
    isUpdated: true,
  },
  {
    id: 56,
    propertyType: "hdb",
    workflow: "cpf-seniors" as WorkflowId,
    question: `Can 55+ client still use CPF for housing loan?`,
    shortAnswer: `Yes. OA balance + new CPF contributions can continue paying loan.`,
    answer: `After 55, OA shrinks (some goes to RA). Plan ahead: advise client to calculate remaining OA after 55 transfer.`,
    hdbRef: `✓ CPF retirement income page`,
    source: "",
    priority: "high",
    tags: "cpf 55 housing cpf after 55 oa after 55",
    personas: "senior_55+",
    isUpdated: false,
  },
  {
    id: 57,
    propertyType: "hdb",
    workflow: "cpf-seniors" as WorkflowId,
    question: `How to reserve OA savings before turning 55?`,
    shortAnswer: `At age 54, apply to reserve OA so it WON'T transfer to RA. For existing housing loan or next property.`,
    answer: `**How:** Singpass → my cpf → My Requests → Retirement → 'Decide on my CPF options'
**Deadline:** within 6 months before 55th birthday, at least 5 working days prior.
**Warning:** reserved amount locked to specified property only.`,
    hdbRef: `✓ CPF reservation e-service`,
    source: "",
    priority: "high",
    tags: "reserve oa oa reserve 55 prevent ra transfer",
    personas: "senior_55+",
    isUpdated: false,
  },
  {
    id: 58,
    propertyType: "hdb",
    workflow: "cpf-seniors" as WorkflowId,
    question: `Property Pledge — what is it?`,
    shortAnswer: `Members 55+ with property covering to age 95 can pledge property up to BRS, withdraw RA savings above BRS in cash.`,
    answer: `If property sold: pledge amount refunded to RA. Does NOT affect ownership. Needs all co-owners' consent. Excludes interest, govt grants, top-ups.`,
    hdbRef: `✓ CPF retirement income page`,
    source: "",
    priority: "high",
    tags: "property pledge pledge property cpf withdraw above brs",
    personas: "senior_55+",
    isUpdated: false,
  },
  {
    id: 59,
    propertyType: "hdb",
    workflow: "cpf-seniors" as WorkflowId,
    question: `CPF for 2nd property — what's different?`,
    shortAnswer: `Must set aside BRS (if property covers to 95) or FRS (if not) before using OA for 2nd property.`,
    answer: `**Has property covering to 95:** set aside BRS in OA+SA (<55) or RA+OA (55+). Only EXCESS OA usable. WL capped at 100% VL (not 120%).
**Does not cover to 95:** must set aside FRS.
**Grace period:** 6 months from purchase (completed) or TOP (under construction) to sell existing → BRS rule waived.`,
    hdbRef: `✓ CPF 2nd property rules`,
    source: "",
    priority: "high",
    tags: "cpf 2nd cpf second property brs 2nd frs 2nd property",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 60,
    propertyType: "hdb",
    workflow: "cpf-seniors" as WorkflowId,
    question: `What is Home Protection Scheme (HPS)?`,
    shortAnswer: `Mortgage-reducing insurance. MANDATORY if using CPF for HDB monthly instalments.`,
    answer: `Covers death, terminal illness, total permanent disability up to age 65 or loan fully paid. Premium from OA. Min 100% coverage (50% each or 100% each).

Can buy external insurance (need CPFB approval for exemption).`,
    hdbRef: `✓ CPF HPS page`,
    source: "",
    priority: "high",
    tags: "hps home protection mortgage insurance cpf",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 61,
    propertyType: "hdb",
    workflow: "cpf-seniors" as WorkflowId,
    question: `Does HPS apply to bank loans?`,
    shortAnswer: `No. HPS only for HDB loans with CPF instalments.`,
    answer: `Bank loan borrowers typically buy Mortgage Reducing Term Assurance (MRTA) privately. Not mandatory but strongly recommended.`,
    hdbRef: `✓ CPF HPS page`,
    source: "",
    priority: "high",
    tags: "",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 62,
    propertyType: "hdb",
    workflow: "cpf-seniors" as WorkflowId,
    question: `What is the CPF refund change from 1 Jul 2024?`,
    shortAnswer: `Before: balance after FRS → cash. After: balance → OA by default.`,
    answer: `For 55+ sellers. From OA, member can: (1) use for next property, (2) transfer to RA for higher interest, (3) withdraw as cash.

**Advise senior sellers:** money goes to OA first, not cash directly.`,
    hdbRef: `✓ CPF 1 Jul 2024 announcement`,
    source: "",
    priority: "high",
    tags: "cpf refund 55 1 jul 2024 55 cash oa",
    personas: "senior_55+",
    isUpdated: true,
  },
  {
    id: 63,
    propertyType: "hdb",
    workflow: "grants" as WorkflowId,
    question: `Maximum grants for resale flat — families`,
    shortAnswer: `Up to $230,000 combined: Family Grant $80K + EHG $120K + Proximity $30K.`,
    answer: `**Family Grant:** $80K (2-4rm) or $50K (5rm+). Income ≤ $14K.
**EHG:** up to $120K. Income ≤ $9K.
**Proximity:** $30K (live together) / $20K (within 4km). No income cap.

All grants go to CPF OA, count toward WL.`,
    hdbRef: `✓ HDB flat and grant eligibility page`,
    source: "",
    priority: "high",
    tags: "ehg grant family max grant 230k total grant first timer grant",
    personas: "buyer",
    isUpdated: true,
  },
  {
    id: 64,
    propertyType: "hdb",
    workflow: "grants" as WorkflowId,
    question: `Maximum grants for resale — singles`,
    shortAnswer: `Up to $115,000: Singles Grant $40K + EHG Singles $60K + Proximity $15K.`,
    answer: `**Singles Grant:** $40K (2-4rm) / $25K (5rm). Age 35+, income ≤ $7K.
**EHG Singles:** up to $60K. Income ≤ $4,500.
**Proximity:** $15K (together) / $10K (within 4km).`,
    hdbRef: `✓ HDB flat and grant eligibility — singles`,
    source: "",
    priority: "high",
    tags: "ehg singles single grant 115k singles grant amount",
    personas: "single",
    isUpdated: true,
  },
  {
    id: 65,
    propertyType: "hdb",
    workflow: "grants" as WorkflowId,
    question: `EHG income table — families`,
    shortAnswer: `Tiered. Lower income = higher grant. Max $120K for income ≤ $1,500.`,
    answer: `≤$1,500 → $120K | $1,501–$2K → $110K | $2,001–$2.5K → $105K
$2,501–$3K → $95K | $3,001–$3.5K → $90K | $3,501–$4K → $80K
$4,001–$4.5K → $70K | $4,501–$5K → $65K | $5,001–$5.5K → $55K
$5,501–$6K → $50K | $6,001–$6.5K → $40K | $6,501–$7K → $30K
$7,001–$7.5K → $25K | $7,501–$8K → $20K | $8,001–$8.5K → $10K | $8,501–$9K → $5K

Requires 12 months continuous employment.`,
    hdbRef: `✓ HDB EHG page`,
    source: "",
    priority: "high",
    tags: "ehg amount ehg income tier how much ehg 120k grant enhanced housing grant ehg table",
    personas: "buyer",
    isUpdated: true,
  },
  {
    id: 66,
    propertyType: "hdb",
    workflow: "grants" as WorkflowId,
    question: `Grants for NEW BTO — what's available?`,
    shortAnswer: `EHG (up to $120K families / $60K singles) + Step-Up Grant ($15K).`,
    answer: `Family Grant and Proximity Grant are **resale only**. Step-Up: for second-timer upgrading from 2-room subsidised (non-mature) to 3-room BTO in non-mature estate.`,
    hdbRef: `✓ HDB grants for BTO`,
    source: "",
    priority: "high",
    tags: "",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 67,
    propertyType: "hdb",
    workflow: "grants" as WorkflowId,
    question: `Grant conditions — what comes with accepting a grant?`,
    shortAnswer: `Considered 'housing subsidy received'. Resale levy if buying another subsidised. 5-yr MOP. All grant + accrued interest refunded on sale.`,
    answer: `Also: cannot invest in private property during MOP. Cannot sublet whole flat during MOP. Flat must have ≥20yr remaining lease. Max $60K returns to OA; excess split between SA + MA.`,
    hdbRef: `✓ HDB flat and grant eligibility`,
    source: "",
    priority: "high",
    tags: "grant obligations accept grant grant rules resale levy grant",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 68,
    propertyType: "hdb",
    workflow: "grants" as WorkflowId,
    question: `Proximity Grant — who qualifies?`,
    shortAnswer: `SC buying resale flat to live with or within 4km of parents/child.`,
    answer: `Parents/child can live in HDB or private property. 4km = straight-line distance via HDB Map Services. Can only receive PHG ONCE per buyer.

**Families:** $30K (together) / $20K (within 4km).
**Singles:** $15K (together) / $10K (within 4km).`,
    hdbRef: `✓ HDB Proximity Housing Grant page`,
    source: "",
    priority: "high",
    tags: "phg proximity grant live with parents grant 4km grant stay near parents",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 69,
    propertyType: "hdb",
    workflow: "grants" as WorkflowId,
    question: `1-year time bar after BTO cancellation`,
    shortAnswer: `If cancelled after booking BTO (from March 2012): must wait 1 year before applying for resale with CPF grant or being essential occupier.`,
    answer: `Warn clients: 'Don't book BTO unless 100% committed.' Forfeited option fee + 1-year wait is a double penalty.`,
    hdbRef: `✓ HDB BTO buying procedure`,
    source: "",
    priority: "high",
    tags: "",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 70,
    propertyType: "hdb",
    workflow: "grants" as WorkflowId,
    question: `Citizen Top-Up Grant — when applies?`,
    shortAnswer: `For SC+PR households who paid $10K premium. When PR becomes SC or couple has child, can claim $10K back.`,
    answer: `Only for first-timer SC+PR households. Must apply through HDB. Not automatic.`,
    hdbRef: `✓ HDB first-timer SC+PR scheme`,
    source: "",
    priority: "high",
    tags: "ctu citizen topup pr becomes citizen 10k refund",
    personas: "pr/foreigner",
    isUpdated: false,
  },
  {
    id: 71,
    propertyType: "hdb",
    workflow: "grants" as WorkflowId,
    question: `Client earns slightly above $14K — any workaround?`,
    shortAnswer: `No for BTO. Yes for resale (no income ceiling for resale purchase, only for grants).`,
    answer: `If above $14K: cannot get BTO, cannot get most grants. But can still buy resale flat outright using HDB loan (income cap applies) or bank loan (no cap). For income $14K–$16K: consider EC (Executive Condo) instead.`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "above income ceiling over 14k exceed income",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 72,
    propertyType: "hdb",
    workflow: "loans" as WorkflowId,
    question: `HDB Loan vs Bank Loan — full comparison 2026`,
    shortAnswer: `HDB: LTV 75%, interest 2.6% fixed, no penalty, income ceiling $14K. Bank: LTV 75%, interest 1.5-2% (2026 lows), 5% cash min, no income cap.`,
    answer: `**HDB LOAN:**
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
    hdbRef: `✓ HDB LTV change from 80% to 75% confirmed on HDB cooling measures page`,
    source: "",
    priority: "high",
    tags: "hdb loan bank loan compare loan which loan better 75 ltv",
    personas: "buyer",
    isUpdated: true,
  },
  {
    id: 73,
    propertyType: "hdb",
    workflow: "loans" as WorkflowId,
    question: `What is TDSR and how does it work?`,
    shortAnswer: `Total Debt Servicing Ratio: all monthly debts ≤ 55% of gross income.`,
    answer: `Includes: housing loans, car loan, personal loan, credit card minimum, student loan. Uses stress-test interest rate (currently 4% for residential).

**If tight:** pay down other debts, longer tenure, bigger downpayment.`,
    hdbRef: `✓ MAS property loan rules`,
    source: "",
    priority: "high",
    tags: "tdsr debt servicing 55 percent debt",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 74,
    propertyType: "hdb",
    workflow: "loans" as WorkflowId,
    question: `What is MSR (Mortgage Servicing Ratio)?`,
    shortAnswer: `HDB-specific: monthly mortgage ≤ 30% of gross income.`,
    answer: `Applies to HDB flats AND ECs. On top of TDSR. Stricter constraint for HDB.

**Example:** Income $6,000. MSR max = $1,800/month mortgage. TDSR max = $3,300/month all debts.`,
    hdbRef: `✓ MAS MSR rules`,
    source: "",
    priority: "high",
    tags: "msr mortgage servicing 30 percent msr",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 75,
    propertyType: "hdb",
    workflow: "loans" as WorkflowId,
    question: `Max loan tenure rules`,
    shortAnswer: `HDB: 25 years (or until 65). Bank: 30 years (or until 65).`,
    answer: `If tenure + age > 65:
• LTV drops to 55%
• Min 10% cash downpayment

Older clients = shorter tenure = higher monthly = TDSR issues.`,
    hdbRef: `✓ MAS loan tenure rules`,
    source: "",
    priority: "high",
    tags: "tenure loan years 25 year 30 year",
    personas: "buyer senior_55+",
    isUpdated: false,
  },
  {
    id: 76,
    propertyType: "hdb",
    workflow: "loans" as WorkflowId,
    question: `2nd property LTV rules`,
    shortAnswer: `2nd loan: 45% LTV (if no outstanding) or 25% LTV (if has outstanding). 3rd: 35% / 15%.`,
    answer: `Min 25% cash. If tenure + age > 65, LTV drops further to 25%/15%/15%/5%.`,
    hdbRef: `✓ MAS LTV rules for multiple loans`,
    source: "",
    priority: "high",
    tags: "2nd loan ltv 45 ltv second loan",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 77,
    propertyType: "hdb",
    workflow: "loans" as WorkflowId,
    question: `Can buyer refinance HDB loan to bank loan?`,
    shortAnswer: `Yes, anytime (no HDB penalty).`,
    answer: `Warning: one-way switch. Once on bank, cannot revert to HDB concessionary. Weigh savings vs flexibility.

**Typical savings 2026:** Bank 1.7% vs HDB 2.6% = ~$3,600/year on $400K loan.`,
    hdbRef: `✓ HDB loan — no prepayment penalty confirmed`,
    source: "",
    priority: "high",
    tags: "refinance hdb bank switch to bank",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 78,
    propertyType: "hdb",
    workflow: "loans" as WorkflowId,
    question: `Can buyer refinance bank loan to HDB loan?`,
    shortAnswer: `No. Once on bank loan, cannot switch back to HDB.`,
    answer: `One-way rule. This is why first-time HDB loan selection matters.`,
    hdbRef: `✓ CPF/HDB — one-way switch confirmed`,
    source: "",
    priority: "high",
    tags: "refinance bank to hdb revert hdb loan",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 79,
    propertyType: "hdb",
    workflow: "loans" as WorkflowId,
    question: `What is an IPA (In-Principle Approval)?`,
    shortAnswer: `Bank's conditional loan approval. Shows buyer how much bank will lend. Valid 30–90 days.`,
    answer: `Not binding. Bank can still reject at formal application if circumstances change. Useful for shortlisting flats realistically.

**Different from HFE:** HFE is for HDB loan; IPA is for bank loan.`,
    hdbRef: `✓ Banks issue IPA via HDB Flat Portal integration`,
    source: "",
    priority: "high",
    tags: "ipa in principle approval bank approval",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 80,
    propertyType: "hdb",
    workflow: "loans" as WorkflowId,
    question: `What's the interest rate stress test?`,
    shortAnswer: `Banks must assess at 4% residential / 5% non-residential for TDSR, not current rate.`,
    answer: `So even if actual rate is 1.7%, bank calculates your TDSR using 4%. This is why income required for bank loan looks higher than expected.`,
    hdbRef: `✓ MAS stress test rules`,
    source: "",
    priority: "high",
    tags: "stress test 4 percent stress",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 81,
    propertyType: "hdb",
    workflow: "loans" as WorkflowId,
    question: `Bridge loan — when useful?`,
    shortAnswer: `For upgraders: bridge loan covers downpayment of new property while waiting for old property sale.`,
    answer: `Typically 6-month tenure, interest 4–6%. Secured against the buyer's existing property. Tight TDSR calculation.

**Alternative:** sell existing HDB first, rent temporarily, buy new. Cleaner but more disruptive.`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "bridge loan bridging loan upgrader loan",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 82,
    propertyType: "hdb",
    workflow: "stamp" as WorkflowId,
    question: `Buyer's Stamp Duty (BSD) rates`,
    shortAnswer: `Tiered: 1% → 6%. On purchase price OR valuation, whichever higher.`,
    answer: `First $180K: 1%
Next $180K: 2%
Next $640K: 3%
Next $500K: 4%
Next $1.5M: 5%
Above $3M: 6%

**Example $1M property:** $1,800 + $3,600 + $19,200 = $24,600

BSD payable by CPF OA.`,
    hdbRef: `✓ IRAS BSD rates — effective 15 Feb 2023`,
    source: "",
    priority: "high",
    tags: "bsd buyer stamp duty stamp duty buyer",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 83,
    propertyType: "hdb",
    workflow: "stamp" as WorkflowId,
    question: `Quick BSD calculation shortcut`,
    shortAnswer: `For price up to $1M: BSD ≈ 3% × Price − $5,400`,
    answer: `**Examples:**
$500K → 3% × 500K − 5,400 = $9,600
$800K → 3% × 800K − 5,400 = $18,600
$1M → 3% × 1M − 5,400 = $24,600

Above $1M: add 4% bracket manually or use IRAS calculator.`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "bsd formula bsd shortcut calculate bsd",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 84,
    propertyType: "hdb",
    workflow: "stamp" as WorkflowId,
    question: `ABSD rates — complete table`,
    shortAnswer: `SC: 0% / 20% / 30% | PR: 5% / 30% / 35% | Foreigner: 60% | Entity: 65%`,
    answer: `**SG Citizen:** 1st 0%, 2nd 20%, 3rd+ 30%
**SG PR:** 1st 5%, 2nd 30%, 3rd+ 35%
**Foreigner:** flat 60% (all)
**Entity:** 65% (+ 35% non-remittable)

ABSD is ON TOP of BSD. Payable by CPF OA.`,
    hdbRef: `✓ IRAS ABSD rates — unchanged since 27 April 2023`,
    source: "",
    priority: "high",
    tags: "absd absd rate absd pr absd foreigner absd 20 additional buyer stamp",
    personas: "buyer upgrader",
    isUpdated: false,
  },
  {
    id: 85,
    propertyType: "hdb",
    workflow: "stamp" as WorkflowId,
    question: `ABSD remission for married couples`,
    shortAnswer: `Pay 20% ABSD upfront. Sell first property within 6 months of new purchase. Apply for refund from IRAS.`,
    answer: `**Conditions:**
1. Married couple, at least 1 SC spouse
2. Bought jointly in both names
3. Did not own >1 property at date of purchase
4. First property sold within 6 months (of completion, or 6 months of TOP if new)
5. Must remain married, no ownership change on 2nd property
6. Apply for refund within 6 months of sale

**No extensions.**`,
    hdbRef: `✓ IRAS ABSD remission for married couples`,
    source: "",
    priority: "high",
    tags: "absd refund absd remission absd couple sell 6 months upgrade condo absd refund",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 86,
    propertyType: "hdb",
    workflow: "stamp" as WorkflowId,
    question: `Single SC senior (55+) ABSD refund — new rule`,
    shortAnswer: `From 16 Feb 2024: single SC seniors 55+ can claim ABSD refund when rightsizing to lower-value property.`,
    answer: `**Conditions:**
• Each first property solely owned by single SC 55+ (or with immediate family who are also single SC 55+)
• Owners of first property must also be on 2nd property
• Pay ABSD upfront, apply for refund after selling first

**Purpose:** supports seniors right-sizing for retirement.`,
    hdbRef: `✓ IRAS ABSD concession for single SC seniors 2024`,
    source: "",
    priority: "high",
    tags: "senior absd 55 absd rightsize absd single senior absd",
    personas: "senior_55+",
    isUpdated: true,
  },
  {
    id: 87,
    propertyType: "hdb",
    workflow: "stamp" as WorkflowId,
    question: `Seller's Stamp Duty (SSD) — NEW rates from 4 Jul 2025`,
    shortAnswer: `Now 4-year holding period. Rates: 16% / 12% / 8% / 4% / 0%.`,
    answer: `**Properties bought on/after 4 July 2025:**
≤1 year: 16%
≤2 years: 12%
≤3 years: 8%
≤4 years: 4%
>4 years: 0%

**Properties bought 11 Mar 2017 – 3 Jul 2025:** old 3-year rule still applies (12/8/4/0).

**HDB sellers:** MOP (5 yrs) > SSD period (4 yrs), so effectively never pay SSD.`,
    hdbRef: `✓ IRAS SSD page + MAS 3 July 2025 announcement`,
    source: "",
    priority: "high",
    tags: "ssd seller stamp duty 4 year ssd 16 percent ssd new ssd",
    personas: "seller",
    isUpdated: true,
  },
  {
    id: 88,
    propertyType: "hdb",
    workflow: "stamp" as WorkflowId,
    question: `SSD — does it apply to HDB sellers?`,
    shortAnswer: `In practice no. MOP (5 years) exceeds SSD period (4 years), so HDB sellers don't pay.`,
    answer: `Exception: HDB flat owners identified under SERS who sell before HDB claims — still exempt. Private property sellers: SSD applies in full.`,
    hdbRef: `✓ IRAS confirms HDB sellers typically unaffected`,
    source: "",
    priority: "high",
    tags: "ssd hdb hdb ssd hdb seller stamp",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 89,
    propertyType: "hdb",
    workflow: "stamp" as WorkflowId,
    question: `Mortgage stamp duty`,
    shortAnswer: `0.4% of loan amount, capped at $500.`,
    answer: `Paid by buyer. Can be paid by CPF OA. Applies to both HDB and bank loans.`,
    hdbRef: `✓ IRAS mortgage stamp duty`,
    source: "",
    priority: "high",
    tags: "mortgage stamp loan stamp 0.4 stamp",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 90,
    propertyType: "hdb",
    workflow: "stamp" as WorkflowId,
    question: `Tenancy stamp duty`,
    shortAnswer: `0.4% × total rent for lease up to 4 years. 0.4% × 4× annual rent for lease >4 years.`,
    answer: `Paid by tenant. Must be stamped within 14 days (executed in SG) or 30 days (overseas). Pay via IRAS e-Stamping.`,
    hdbRef: `✓ IRAS rental stamp duty`,
    source: "",
    priority: "high",
    tags: "rental stamp duty lease stamp tenancy stamp",
    personas: "landlord",
    isUpdated: false,
  },
  {
    id: 91,
    propertyType: "hdb",
    workflow: "stamp" as WorkflowId,
    question: `Stamp duty for decoupling`,
    shortAnswer: `Transferring owner pays BSD on market value of share transferred.`,
    answer: `**Example:** $1.5M property, wife transfers 50% to husband. BSD on $750K = ~$17,100.
Plus legal fees $3–5K, potential CPF refund on transferred share.

**Worth it?** Only if ABSD savings on next property > decoupling cost.`,
    hdbRef: `✓ IRAS BSD on transfers`,
    source: "",
    priority: "high",
    tags: "decouple stamp decoupling bsd transfer bsd",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 92,
    propertyType: "hdb",
    workflow: "upgrader" as WorkflowId,
    question: `HDB → condo upgrader math — the big picture`,
    shortAnswer: `Sell HDB first = cleaner but need temp housing. Buy condo first = pay 20% ABSD upfront, refund after selling HDB within 6 months.`,
    answer: `**Sell first path:**
1. Sell HDB, get cash + CPF refund
2. Rent temporarily (3–6 months)
3. Buy condo as FIRST property → no ABSD
**Cleaner. Slower.**

**Buy first path:**
1. Buy condo → pay 20% ABSD upfront
2. Sell HDB within 6 months of condo purchase
3. Apply ABSD refund within 6 months of HDB sale
**Faster. Needs 20% cash buffer.**`,
    hdbRef: `✓ IRAS ABSD remission page confirms 6-month rule`,
    source: "",
    priority: "high",
    tags: "upgrade condo hdb to condo sell hdb buy condo upgrader path",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 93,
    propertyType: "hdb",
    workflow: "upgrader" as WorkflowId,
    question: `HDB upgrader — total cash needed for condo upgrade?`,
    shortAnswer: `Rough rule: ~40–50% of condo price in liquid funds (cash + CPF) during transition.`,
    answer: `**Breakdown for $1.5M condo:**
• 5% cash downpayment: $75K
• 20% CPF/cash: $300K
• ABSD 20% upfront: $300K (refundable)
• BSD: $44K
• Legal + misc: $10K
**Total upfront:** ~$730K
• After HDB sale + ABSD refund: most returns
• Net bridge gap: ~$400K cash for ~6 months.`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "upgrader cash condo cash how much cash upgrade",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 94,
    propertyType: "hdb",
    workflow: "upgrader" as WorkflowId,
    question: `Can client keep HDB and buy condo?`,
    shortAnswer: `Only after MOP fulfilled. And must pay 20% ABSD on condo (no refund unless you sell HDB within 6 months).`,
    answer: `**Keep HDB + buy condo:**
• Must wait 5-yr MOP (10 for Plus/Prime)
• 20% ABSD locked in (not refundable if keeping HDB)
• CPF restrictions: BRS or FRS set aside for 2nd property
• HDB becomes rental asset (subject to EIP/SPR quota for tenants)

**Trade-off:** passive rental income vs. $300K+ ABSD cost.`,
    hdbRef: `✓ HDB MOP conditions + IRAS ABSD`,
    source: "",
    priority: "high",
    tags: "keep hdb condo both property hdb and condo",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 95,
    propertyType: "hdb",
    workflow: "upgrader" as WorkflowId,
    question: `What is decoupling? When to use it?`,
    shortAnswer: `One spouse transfers share to the other, freeing the transferee to buy 2nd property at first-property ABSD rates.`,
    answer: `**How:** Part-transfer via lawyer. BSD on transferred share. CPF refund on transferred share.
**Cost:** BSD (tiered) + legal $3–5K + CPF refund complications.

**Worth it when:** ABSD savings on next property > total decoupling cost. Usually for families buying $1.5M+ condos.

**Note:** HDB flats cannot be decoupled (since Apr 2016) — only private.`,
    hdbRef: `✓ HDB decoupling ban for HDB since April 2016`,
    source: "",
    priority: "high",
    tags: "decouple decoupling part transfer transfer spouse",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 96,
    propertyType: "hdb",
    workflow: "upgrader" as WorkflowId,
    question: `Condo owner wants to DOWNGRADE to HDB — what rules?`,
    shortAnswer: `Must sell condo first. Wait 15 months (if under 55). Then can buy HDB resale.`,
    answer: `**15-month wait-out (from 30 Sep 2022):**
• Applies if under 55
• Counted from legal completion of condo sale
• Only for buying non-subsidised HDB resale

**Exemption:** 55+ buying 4-room or smaller resale flat.

Also: no CPF grants during wait-out. And 30-month rule for grants still applies separately.`,
    hdbRef: `✓ HDB 15-month wait-out scheme`,
    source: "",
    priority: "high",
    tags: "downgrade hdb condo to hdb private to hdb",
    personas: "senior_55+ upgrader",
    isUpdated: false,
  },
  {
    id: 97,
    propertyType: "hdb",
    workflow: "upgrader" as WorkflowId,
    question: `15-month wait-out — how does it work in detail?`,
    shortAnswer: `Count starts from legal completion date of private property sale. During 15 months: cannot buy non-subsidised HDB resale.`,
    answer: `**Can still do during wait-out:**
• Rent
• Apply for HFE (but can't complete purchase)

**Cannot do:**
• Buy resale HDB
• Apply BTO as first-timer with full grants

**Fully privatised EC = private property** for this rule. Non-privatised EC has different rules.`,
    hdbRef: `✓ HDB 15-month wait-out scheme`,
    source: "",
    priority: "high",
    tags: "15 month wait wait out period 15 months private hdb wait",
    personas: "senior_55+ upgrader",
    isUpdated: false,
  },
  {
    id: 98,
    propertyType: "hdb",
    workflow: "upgrader" as WorkflowId,
    question: `30-month rule — different from 15-month?`,
    shortAnswer: `Yes. Two separate rules, often confused.`,
    answer: `**15-month wait-out:** private → HDB resale buy. Under 55.
**30-month rule:** must not have OWNED any private property in the 30 months BEFORE HFE application — for CPF grant eligibility or BTO as first-timer.

**Plus flat 30-month wait:** private property owners wait 30 months before buying Plus flat on resale market.

All three exist. Don't mix them up.`,
    hdbRef: `✓ HDB first-timer eligibility rules`,
    source: "",
    priority: "high",
    tags: "30 month rule 30 months private 30 month grants",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 99,
    propertyType: "hdb",
    workflow: "upgrader" as WorkflowId,
    question: `Client owns inherited condo + wants to buy HDB — options?`,
    shortAnswer: `Must dispose of condo first. Then 15-month wait (if under 55). Then HDB.`,
    answer: `Same rules as any private property ownership. Inheritance doesn't exempt. If inheritor's family lives in inherited condo, may apply for HDB exception — case-by-case.`,
    hdbRef: `✓ HDB conditions after buying`,
    source: "",
    priority: "high",
    tags: "inherit condo inherited private dispose inherited",
    personas: "death/inheritance",
    isUpdated: false,
  },
  {
    id: 100,
    propertyType: "hdb",
    workflow: "upgrader" as WorkflowId,
    question: `ABSD refund — what can go wrong?`,
    shortAnswer: `Missing 6-month deadline. Ownership change. New property purchase. Divorce during period.`,
    answer: `**Common mistakes:**
1. Sell first property AFTER 6 months → refund lost
2. Transfer partial ownership of new property → disqualified
3. Buy 3rd property in between → disqualified
4. Divorce during period → disqualified
5. Refund application not within 6 months of sale

**Advise:** line up HDB sale BEFORE condo OTP to be safe.`,
    hdbRef: `✓ IRAS ABSD remission conditions`,
    source: "",
    priority: "high",
    tags: "absd refund mistake absd refund fail lose absd",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 101,
    propertyType: "hdb",
    workflow: "upgrader" as WorkflowId,
    question: `Sell-before-buy — where to live during gap?`,
    shortAnswer: `Options: rent, stay with family, holiday lease. Plan 3–6 months.`,
    answer: `Some buyers negotiate 'stay-as-tenant' with their own HDB buyer for 1–3 months (at market rent) to bridge. Must be in SPA.

Others use 'extension of lease' with condo developer if buying new launch — move in later.`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "temp rent gap housing between sales",
    personas: "upgrader",
    isUpdated: false,
  },
  {
    id: 102,
    propertyType: "hdb",
    workflow: "senior" as WorkflowId,
    question: `Lease Buyback Scheme (LBS) — eligibility`,
    shortAnswer: `Both owners 65+, SC, income ≤$14K, flat fully paid or pay-off from sale, lived in flat 5+ years, lease ≥20 years remaining.`,
    answer: `Any flat type except: short-lease flats, HUDC, EC.

**Choose lease retention:** 15, 20, 25, 30, or 35 years (must cover youngest owner to 95).`,
    hdbRef: `✓ HDB Lease Buyback eligibility`,
    source: "",
    priority: "high",
    tags: "lbs lease buyback sell lease lbs eligibility",
    personas: "senior_55+",
    isUpdated: false,
  },
  {
    id: 103,
    propertyType: "hdb",
    workflow: "senior" as WorkflowId,
    question: `LBS — how much cash do seniors get?`,
    shortAnswer: `Proceeds pay off any loan first. Then top-up CPF RA. Then LBS bonus ($7,500–$30,000). Then balance cash (capped $100K).`,
    answer: `**LBS bonus by flat type:**
3-room or smaller: up to $30K
4-room: up to $15K
5-room+: up to $7,500

**From 1 Jan 2026:** households with 1 owner top up to age-adjusted FRS. 2+ owners top up to BRS each. Full bonus if total top-up ≥$60K.`,
    hdbRef: `✓ HDB LBS how-it-works page`,
    source: "",
    priority: "high",
    tags: "lbs amount lbs cash lbs bonus 30k lbs",
    personas: "senior_55+",
    isUpdated: true,
  },
  {
    id: 104,
    propertyType: "hdb",
    workflow: "senior" as WorkflowId,
    question: `Silver Housing Bonus (SHB) — what is it?`,
    shortAnswer: `Bonus (up to $40K from 1 Dec 2025) for seniors 55+ who downgrade to 3-room or smaller flat.`,
    answer: `**Conditions:**
• Must be 55+
• Commit up to $60K net increase in CPF RA
• Can use CPF housing refunds (no cash top-up needed if sufficient)
• Cash bonus up to $30K
• Additional $10K bonus if rightsize to 2-room or smaller

**Cannot combine with LBS** — pick one.`,
    hdbRef: `✓ HDB monetising your flat for retirement — SHB increased to $40K on 1 Dec 2025`,
    source: "",
    priority: "high",
    tags: "shb silver housing 40k bonus senior downgrade",
    personas: "senior_55+",
    isUpdated: true,
  },
  {
    id: 105,
    propertyType: "hdb",
    workflow: "senior" as WorkflowId,
    question: `LBS vs SHB vs rent out spare rooms — which is best?`,
    shortAnswer: `LBS for seniors who want to stay. SHB for those willing to move. Room rental for flexible cash flow.`,
    answer: `**LBS:** stay in flat, monthly CPF LIFE payouts, can't sell later.
**SHB:** move to smaller flat, cash bonus, keep full ownership.
**Room rental:** keep flat, monthly rental income, no CPF commitment.

Can combine: SHB for downgrade, then rent spare room later.`,
    hdbRef: `✓ HDB monetising your flat for retirement page`,
    source: "",
    priority: "high",
    tags: "lbs or shb monetise flat senior options",
    personas: "senior_55+",
    isUpdated: false,
  },
  {
    id: 106,
    propertyType: "hdb",
    workflow: "senior" as WorkflowId,
    question: `2-room Flexi short-lease for seniors`,
    shortAnswer: `For seniors 55+. Lease 15–45 years. Fully-priced using CPF refunds or cash.`,
    answer: `Cannot be rented out (bedroom or whole flat). Cannot be sold in open market. No subsidy clawback.

Designed for elderly who want small, affordable home and don't need full 99-year lease.`,
    hdbRef: `✓ HDB 2-room Flexi scheme`,
    source: "",
    priority: "high",
    tags: "2 room flexi short lease senior 15 year flexi",
    personas: "senior_55+",
    isUpdated: false,
  },
  {
    id: 107,
    propertyType: "hdb",
    workflow: "senior" as WorkflowId,
    question: `Community Care Apartment — what is it?`,
    shortAnswer: `Assisted-living flat for seniors 65+ integrated with care services.`,
    answer: `2-room Flexi style. Lease 15–35 years. Includes care plan, 24-hr emergency response, communal spaces. Not sellable on open market.`,
    hdbRef: `✓ HDB Community Care Apartments`,
    source: "",
    priority: "high",
    tags: "community care cca assisted living",
    personas: "senior_55+",
    isUpdated: false,
  },
  {
    id: 108,
    propertyType: "hdb",
    workflow: "senior" as WorkflowId,
    question: `Can senior parents join child's HDB application?`,
    shortAnswer: `Yes under Multi-Generation scheme. $21K income ceiling, 3Gen flats available.`,
    answer: `3Gen flats: for family nucleus + at least 1 parent or grandparent. 4+ bedrooms. Available in BTO launches.

Alternative: parents as 'occupiers' on regular flat application. They don't own but must live there.`,
    hdbRef: `✓ HDB multi-generation scheme`,
    source: "",
    priority: "high",
    tags: "parent occupier 3gen flat multi gen",
    personas: "senior_55+",
    isUpdated: false,
  },
  {
    id: 109,
    propertyType: "hdb",
    workflow: "divorce-death" as WorkflowId,
    question: `Divorced client wants to buy HDB — can they?`,
    shortAnswer: `Yes, but depends on custody and age.`,
    answer: `**Divorced + child custody:** any flat type (child as occupier)
**Divorced, 35+, no child:** 2-room Flexi (new) or up to 5-room resale
**Divorced, under 35, no child:** cannot buy as single

**Warning:** must wait 30 MONTHS from divorce completion before eligible for HDB.
**If ex-spouse still on flat:** settle ownership first.`,
    hdbRef: `✓ HDB divorce rules`,
    source: "",
    priority: "high",
    tags: "divorce buy hdb divorced buyer after divorce buy",
    personas: "divorce/family",
    isUpdated: false,
  },
  {
    id: 110,
    propertyType: "hdb",
    workflow: "divorce-death" as WorkflowId,
    question: `Can one spouse keep the HDB after divorce?`,
    shortAnswer: `Yes with court order + HDB approval. Other spouse must be removed from title.`,
    answer: `**Options:**
1. One takes over (part-transfer or whole transfer)
2. Both sell to third party
3. HDB sells back (rare)

Transferring spouse may need to refund CPF. Remaining spouse must independently meet income/eligibility for retained flat.`,
    hdbRef: `✓ HDB ownership change page`,
    source: "",
    priority: "high",
    tags: "keep flat divorce divorce retain flat",
    personas: "divorce/family",
    isUpdated: false,
  },
  {
    id: 111,
    propertyType: "hdb",
    workflow: "divorce-death" as WorkflowId,
    question: `MOP + divorce — any waiver?`,
    shortAnswer: `Yes, case-by-case. HDB may allow sale during MOP for divorce hardship.`,
    answer: `Apply in writing with court documents. Typical conditions: finalised divorce, genuine inability to continue joint ownership, agreed settlement plan. No guarantees.`,
    hdbRef: `✓ HDB hardship policy`,
    source: "",
    priority: "high",
    tags: "divorce mop divorce before mop mop divorce waiver",
    personas: "divorce/family",
    isUpdated: false,
  },
  {
    id: 112,
    propertyType: "hdb",
    workflow: "divorce-death" as WorkflowId,
    question: `Death of owner — what happens to HDB?`,
    shortAnswer: `Transfer to surviving owner (joint tenancy) or per will (tenancy-in-common).`,
    answer: `**Joint tenancy:** survivor automatically inherits.
**Tenancy-in-common:** deceased's share transfers per will or intestacy.

Survivor must independently meet eligibility to retain. If not, may need to sell (MOP waived in death).`,
    hdbRef: `✓ HDB death and inheritance rules`,
    source: "",
    priority: "high",
    tags: "death flat owner dies inherit hdb death",
    personas: "death/inheritance",
    isUpdated: false,
  },
  {
    id: 113,
    propertyType: "hdb",
    workflow: "divorce-death" as WorkflowId,
    question: `What's the difference between joint tenancy and tenancy-in-common?`,
    shortAnswer: `Joint tenancy: all own 100% together. Tenancy-in-common: each owns defined % share.`,
    answer: `**Joint tenancy:** on death, share automatically goes to surviving owner (no probate for this portion).
**Tenancy-in-common:** on death, deceased's share goes via will or intestacy. More flexible but needs probate.

HDB default is usually joint tenancy for couples. Can change with lawyer.`,
    hdbRef: `✓ Standard Singapore property law`,
    source: "",
    priority: "high",
    tags: "joint tenancy tenancy in common ownership structure",
    personas: "death/inheritance",
    isUpdated: false,
  },
  {
    id: 114,
    propertyType: "hdb",
    workflow: "divorce-death" as WorkflowId,
    question: `CPF nomination — why it matters for HDB owners`,
    shortAnswer: `CPF savings (including refunds on sale) pass via CPF nomination, NOT the will.`,
    answer: `Default intestacy rules apply if no nomination. Nominate via my.cpf.gov.sg. Important for sellers: CPF refund on sale eventually becomes nominated funds.`,
    hdbRef: `✓ CPF nomination scheme`,
    source: "",
    priority: "high",
    tags: "cpf nomination nominate cpf cpf will",
    personas: "death/inheritance",
    isUpdated: false,
  },
  {
    id: 115,
    propertyType: "hdb",
    workflow: "divorce-death" as WorkflowId,
    question: `Client inherited HDB from parent — can they keep it?`,
    shortAnswer: `Only if they're eligible to own HDB (SC, meets eligibility scheme).`,
    answer: `**If inheritor already owns HDB:** must dispose of one within 6 months.
**If inheritor owns private:** dispose of inherited HDB (can't own both).
**If inheritor doesn't meet HDB eligibility:** must sell inherited.

MOP of inheritor counted from original owner's key collection, not inheritance date.`,
    hdbRef: `✓ HDB inheritance policy`,
    source: "",
    priority: "high",
    tags: "inherit parent hdb parent death flat",
    personas: "death/inheritance",
    isUpdated: false,
  },
  {
    id: 116,
    propertyType: "hdb",
    workflow: "divorce-death" as WorkflowId,
    question: `Spouse dies during MOP — can survivor sell?`,
    shortAnswer: `Yes. MOP waived in death. Survivor can sell immediately.`,
    answer: `Also: can retain flat and marry again without MOP issue. Must still meet other HDB rules (EIP, etc.).

Survivor retains original MOP for future flat applications.`,
    hdbRef: `✓ HDB conditions after buying`,
    source: "",
    priority: "high",
    tags: "widow mop spouse death mop dies during mop",
    personas: "death/inheritance",
    isUpdated: false,
  },
  {
    id: 117,
    propertyType: "hdb",
    workflow: "rental" as WorkflowId,
    question: `HDB subletting rules — what landlords must know`,
    shortAnswer: `Get HDB approval BEFORE subletting. MOP fulfilled. Min 6-month tenancy. Max 6 persons in flat.`,
    answer: `**Whole flat subletting:** MOP fulfilled (5yr for Standard, 10yr for Plus/Prime — though Plus/Prime ban whole-flat rental). Owner can live elsewhere.
**Room rental:** owner must continue living in flat.

Non-Malaysian work permit holders CANNOT rent HDB. EIP quota still applies.`,
    hdbRef: `✓ HDB renting a flat page`,
    source: "",
    priority: "high",
    tags: "sublet rules rent out hdb landlord rules",
    personas: "landlord",
    isUpdated: false,
  },
  {
    id: 118,
    propertyType: "hdb",
    workflow: "rental" as WorkflowId,
    question: `Who can rent HDB?`,
    shortAnswer: `SCs, PRs, EP/S Pass holders, Malaysian Work Permit holders, Student Pass, Dependant's Pass, LTVP.`,
    answer: `**CANNOT rent HDB:**
• Work Permit (non-Malaysian)
• Training Work Permit
• Tourists / short-term visitors

Subject to occupancy cap (6 persons/flat) + EIP quota.`,
    hdbRef: `✓ HDB renting a flat page`,
    source: "",
    priority: "high",
    tags: "tenant eligibility who rent hdb work permit rent",
    personas: "landlord",
    isUpdated: false,
  },
  {
    id: 119,
    propertyType: "hdb",
    workflow: "rental" as WorkflowId,
    question: `Standard rental commission rates`,
    shortAnswer: `Half month (1-year lease) / 1 month (2-year lease). Paid by party agent represents.`,
    answer: `**HDB rental:** landlord pays landlord's agent, tenant pays tenant's agent (usually same % each).
**Luxury condo:** some negotiate higher.

CEA rule: agent collects from ONE party only per transaction.`,
    hdbRef: `✓ CEA rental commission guidance`,
    source: "",
    priority: "high",
    tags: "rental commission tenant agent fee landlord agent fee",
    personas: "landlord",
    isUpdated: false,
  },
  {
    id: 120,
    propertyType: "hdb",
    workflow: "rental" as WorkflowId,
    question: `Tenancy Agreement — essential clauses`,
    shortAnswer: `Rent amount, security deposit, lease duration, diplomatic clause, maintenance, minor repair, inventory, termination, number of occupants.`,
    answer: `**Standard terms:**
• Security deposit: 2 months
• Lease: 1 or 2 years
• Diplomatic clause: allows early termination after 12 months, 2 months notice (for 2-year lease)
• Minor repair: tenant pays first $150–$200

Stamp duty: tenant pays. 0.4% × total rent (up to 4-year lease).`,
    hdbRef: `✓ IRAS rental stamp duty + CEA rental guidelines`,
    source: "",
    priority: "high",
    tags: "tenancy agreement ta clauses rental contract",
    personas: "landlord",
    isUpdated: false,
  },
  {
    id: 121,
    propertyType: "hdb",
    workflow: "rental" as WorkflowId,
    question: `Diplomatic clause — what is it?`,
    shortAnswer: `Allows tenant (usually expat) to terminate lease early if relocated overseas or employment terminated.`,
    answer: `**Typical terms:**
• Kicks in after 12 months (2-yr lease) or 6 months (1-yr)
• 2 months written notice
• Proof required (transfer letter / termination letter)

Without this clause: tenant pays remaining rent or negotiates penalty.`,
    hdbRef: `✓ CEA rental guidance`,
    source: "",
    priority: "high",
    tags: "diplomatic clause expat clause early termination",
    personas: "landlord",
    isUpdated: false,
  },
  {
    id: 122,
    propertyType: "hdb",
    workflow: "rental" as WorkflowId,
    question: `Landlord's obligations under HDB subletting`,
    shortAnswer: `Register sublet with HDB. Inform of any changes. Ensure tenants meet eligibility. Pay income tax on rental.`,
    answer: `**Timeline:** register within 7 days of tenancy start. Free registration on HDB e-Service.
**Rental income:** declarable to IRAS. Deductible expenses: property tax, maintenance, agent commission.`,
    hdbRef: `✓ HDB subletting rules`,
    source: "",
    priority: "high",
    tags: "landlord duty landlord tax rental income tax",
    personas: "landlord",
    isUpdated: false,
  },
  {
    id: 123,
    propertyType: "hdb",
    workflow: "rental" as WorkflowId,
    question: `Can landlord evict tenant early?`,
    shortAnswer: `Only for breach of contract (non-payment, illegal use, subletting without consent). Must follow legal process.`,
    answer: `Standard process:
1. Written notice of breach
2. Grace period to rectify
3. If not rectified: terminate lease
4. If tenant refuses to leave: civil court claim for possession

Cannot just change locks or enter without notice.`,
    hdbRef: `✓ Standard tenancy law`,
    source: "",
    priority: "high",
    tags: "evict tenant tenant breach",
    personas: "landlord",
    isUpdated: false,
  },
  {
    id: 124,
    propertyType: "hdb",
    workflow: "rental" as WorkflowId,
    question: `Owner living overseas — can rent out whole HDB?`,
    shortAnswer: `Only after MOP, with HDB approval. Each approval is time-limited.`,
    answer: `Must apply each renewal. HDB may grant 1–3 year approvals. Plus/Prime flats: whole-flat rental banned even after MOP.`,
    hdbRef: `✓ HDB subletting approval`,
    source: "",
    priority: "high",
    tags: "overseas owner owner abroad rent",
    personas: "landlord",
    isUpdated: false,
  },
  {
    id: 125,
    propertyType: "hdb",
    workflow: "pr" as WorkflowId,
    question: `Single PR — can they buy any HDB?`,
    shortAnswer: `No. Single PR cannot buy HDB flat at all.`,
    answer: `Must form family nucleus (2 PRs OR 1 SC + 1 PR) to buy HDB. Single PR must rent, buy private, or wait to become SC.`,
    hdbRef: `✓ HDB eligibility schemes`,
    source: "",
    priority: "high",
    tags: "single pr hdb pr alone buy",
    personas: "pr/foreigner single",
    isUpdated: false,
  },
  {
    id: 126,
    propertyType: "hdb",
    workflow: "pr" as WorkflowId,
    question: `SC married to foreigner — can buy HDB?`,
    shortAnswer: `Yes under Non-Citizen Spouse Scheme. Resale only, no BTO.`,
    answer: `**Conditions:**
• SC must be 21+
• Foreigner spouse must hold valid pass (LTVP, work pass, etc.)
• Apply under Non-Citizen Spouse Scheme
• $10K premium (refunded if spouse becomes SC/PR or couple has child)

Grant amount = singles level (lower than SC+PR or SC+SC).`,
    hdbRef: `✓ HDB Non-Citizen Spouse Scheme`,
    source: "",
    priority: "high",
    tags: "sc foreigner spouse non citizen spouse ltvp spouse",
    personas: "pr/foreigner",
    isUpdated: false,
  },
  {
    id: 127,
    propertyType: "hdb",
    workflow: "pr" as WorkflowId,
    question: `Overseas property ownership — how does HDB check?`,
    shortAnswer: `Self-declaration at HFE application. HDB may request supporting documents.`,
    answer: `**Must declare all:** residential property owned anywhere (SG + overseas). Includes: condo, landed, shophouse, HUDC, inherited property, properties held in trust.

**Must dispose 30 months before HFE** if previously owned private property anywhere.

Non-disclosure is a criminal offence.`,
    hdbRef: `✓ HDB eligibility declaration rules`,
    source: "",
    priority: "high",
    tags: "overseas property foreign property hdb",
    personas: "pr/foreigner",
    isUpdated: false,
  },
  {
    id: 128,
    propertyType: "hdb",
    workflow: "pr" as WorkflowId,
    question: `Can PR use Malaysian/overseas CPF for HDB?`,
    shortAnswer: `No. Only Singapore CPF can be used for HDB purchase.`,
    answer: `Malaysian EPF, overseas pension funds, etc. cannot be used. Only own liquid assets (cash) + Singapore CPF OA.`,
    hdbRef: `✓ CPF home ownership rules`,
    source: "",
    priority: "high",
    tags: "overseas cpf foreign cpf malaysia epf hdb",
    personas: "pr/foreigner",
    isUpdated: false,
  },
  {
    id: 129,
    propertyType: "hdb",
    workflow: "pr" as WorkflowId,
    question: `Foreigner wants to buy HDB — can they?`,
    shortAnswer: `No. HDB is only for SC or PR (with family nucleus).`,
    answer: `Foreigners can only buy private property (with 60% ABSD). Renting HDB is allowed if holding eligible pass.`,
    hdbRef: `✓ HDB citizenship eligibility`,
    source: "",
    priority: "high",
    tags: "foreigner hdb expat buy hdb",
    personas: "pr/foreigner",
    isUpdated: false,
  },
  {
    id: 130,
    propertyType: "hdb",
    workflow: "pr" as WorkflowId,
    question: `Spouse becomes SC during MOP — what changes?`,
    shortAnswer: `Apply for Citizen Top-Up Grant (CTU). $10K premium refunded.`,
    answer: `Also: previously reduced grants (SC+PR) can't be topped up to SC+SC level. Only $10K premium refunds.

Note: ethnic/SPR quota treatment may change — the household reclassifies as SC+SC.`,
    hdbRef: `✓ HDB Citizen Top-Up Grant`,
    source: "",
    priority: "high",
    tags: "pr becomes sc citizen top up",
    personas: "pr/foreigner",
    isUpdated: false,
  },
  {
    id: 131,
    propertyType: "hdb",
    workflow: "tricky" as WorkflowId,
    question: `Buyer age 30 buying flat with 55-yr lease — what happens to CPF?`,
    shortAnswer: `30 + 55 = 85 < 95. CPF pro-rated to 77.8% of VL.`,
    answer: `**Calculation:** (55−20) ÷ (95−30−20) = 35/45 = 77.8%
If VL $400K → max CPF ~$311K.
HDB loan LTV also pro-rated: 77.8% × 75% = 58.3%.

**Warning:** client needs much more cash. Consider newer flat or older co-buyer.`,
    hdbRef: `✓ CPF pro-ration formula`,
    source: "",
    priority: "high",
    tags: "young buyer old flat 55 year lease young",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 132,
    propertyType: "hdb",
    workflow: "tricky" as WorkflowId,
    question: `Buyer 26 + parent co-buyer 60 — which age used for CPF?`,
    shortAnswer: `Youngest buyer's age. So 26 is used.`,
    answer: `26 + remaining lease ≥ 95? That's the test.
**Tip:** adding older co-buyer helps with income for loan, doesn't hurt CPF (since youngest age matters).`,
    hdbRef: `✓ CPF housing usage rules`,
    source: "",
    priority: "high",
    tags: "parent co buyer older co buyer youngest buyer age",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 133,
    propertyType: "hdb",
    workflow: "tricky" as WorkflowId,
    question: `Client can only afford flat with <20yr lease — can they?`,
    shortAnswer: `Possible but difficult. CANNOT use CPF. CANNOT get HDB loan. No grants.`,
    answer: `Must pay cash + bank loan (if bank willing — most won't lend on <20yr lease).

**Strongly advise against** unless client fully understands: no CPF, no grants, depreciating asset.`,
    hdbRef: `✓ CPF 20-year minimum lease rule`,
    source: "",
    priority: "high",
    tags: "overseas singaporean abroad buy bto",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 134,
    propertyType: "hdb",
    workflow: "tricky" as WorkflowId,
    question: `Overseas Singaporean wants to buy BTO — possible?`,
    shortAnswer: `Generally no. BTO requires at least 1 SC + physical presence for key collection.`,
    answer: `**Workaround:** buy resale remotely via Power of Attorney. Resale has more flexibility.

Advise overseas SCs: 'Consider resale instead of BTO while abroad.'`,
    hdbRef: `✓ HDB BTO procedure`,
    source: "",
    priority: "high",
    tags: "overseas singaporean abroad buy bto",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 135,
    propertyType: "hdb",
    workflow: "tricky" as WorkflowId,
    question: `Client's spouse declared bankrupt — impact on HDB?`,
    shortAnswer: `Major impact on loan. HDB loan: likely disqualified. Bank loan: very difficult.`,
    answer: `**If already owning HDB:** generally allowed to keep. But refinancing, 2nd property, CPF usage may be affected.
**If buying new HDB:** bankrupt spouse can be occupier but usually not applicant. Income assessment changes.

Case-by-case. Must disclose at HFE application.`,
    hdbRef: `✓ HDB bankruptcy declaration`,
    source: "",
    priority: "high",
    tags: "bankrupt buyer bankruptcy hdb bankrupt spouse",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 136,
    propertyType: "hdb",
    workflow: "tricky" as WorkflowId,
    question: `Client wants to add/remove person from existing HDB — how?`,
    shortAnswer: `HDB ownership change application. Needs all owners' consent + HDB approval.`,
    answer: `**Types:**
• Part-transfer (add someone)
• Withdrawal (remove someone, if eligible)
• Gift transfer (within family, BSD applies)

Conditions: remaining owners must independently meet eligibility. CPF refund may be triggered on transferred share.`,
    hdbRef: `✓ HDB ownership change page`,
    source: "",
    priority: "high",
    tags: "add owner remove owner change ownership",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 137,
    propertyType: "hdb",
    workflow: "tricky" as WorkflowId,
    question: `Flat was bought via BTO years ago — can change to Tenancy-in-Common?`,
    shortAnswer: `Yes via 'Manner of Holding' change. Apply to HDB + legal work.`,
    answer: `Useful for estate planning. Converts joint tenancy to tenancy-in-common with specified shares (e.g., 70/30, 50/50).

Does not trigger CPF refund if no ownership change (same owners, just new structure).`,
    hdbRef: `✓ HDB manner of holding change`,
    source: "",
    priority: "high",
    tags: "manner of holding change tenancy joint to tic",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 138,
    propertyType: "hdb",
    workflow: "tricky" as WorkflowId,
    question: `What counts as 'family nucleus' for HDB?`,
    shortAnswer: `Married couple, engaged couple, parent+unmarried child, siblings (both SC), single + parents.`,
    answer: `**Eligibility schemes:**
• Public Scheme (married/engaged)
• Fiancé/Fiancée Scheme (engaged, must marry within 3 months of key collection)
• Single Singapore Citizen Scheme
• Joint Singles Scheme (2–4 singles together)
• Non-Citizen Spouse Scheme
• Orphans Scheme`,
    hdbRef: `✓ HDB eligibility schemes`,
    source: "",
    priority: "high",
    tags: "family nucleus eligibility scheme fiance scheme",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 139,
    propertyType: "hdb",
    workflow: "tricky" as WorkflowId,
    question: `Same-sex couple — can they buy HDB?`,
    shortAnswer: `Not as couple. Must use Joint Singles Scheme (both 35+) or each apply separately.`,
    answer: `Cannot form family nucleus as 'couple' under HDB rules. Under Joint Singles Scheme (2 singles together), both must be 35+.

Alternatively: one buys as single, the other as occupier.`,
    hdbRef: `✓ HDB Joint Singles Scheme`,
    source: "",
    priority: "high",
    tags: "same sex gay couple hdb lgbt hdb",
    personas: "single",
    isUpdated: false,
  },
  {
    id: 140,
    propertyType: "hdb",
    workflow: "tricky" as WorkflowId,
    question: `HDB mistake on my side — how to appeal?`,
    shortAnswer: `Write to HDB via HDB e-Feedback with documentation. Takes 2–6 weeks.`,
    answer: `If relating to BTO rejection: appeal within 1 month of result. For other issues: no fixed timeline but act quickly. Always keep written proof.`,
    hdbRef: `✓ HDB e-Feedback channel`,
    source: "",
    priority: "high",
    tags: "appeal hdb hdb mistake dispute hdb",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 141,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `Standard commission rates in Singapore`,
    shortAnswer: `Selling HDB resale: ~2%. Condo: 2-4%. Landed: 2%+. Rental: 0.5-1 month's rent. All negotiable.`,
    answer: `**Seller agent (HDB):** typically 2% of selling price.
**Buyer agent (HDB):** typically 1% from buyer.
**Private:** 2–4% from seller, often 0% from buyer (co-broke split).
**Rental:** 1 month (2-yr lease), half month (1-yr lease).

**Rule:** Agent collects from ONE party only per transaction.`,
    hdbRef: `✓ CEA consumer guidance on commission`,
    source: "",
    priority: "high",
    tags: "commission rate agent fee 2 percent commission",
    personas: "buyer seller",
    isUpdated: false,
  },
  {
    id: 142,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `CEA rules every agent must follow`,
    shortAnswer: `Display CEA card. No handling client money. No dual representation. Use prescribed agreements. Declare conflicts. Complete CPD hours.`,
    answer: `**Top violations:**
1. Handling transaction monies (deposits, exercise fees)
2. Dual representation (both buyer + seller)
3. Misleading claims about property
4. Not issuing estate agency agreement
5. Missing CPD hours

**Penalties:** fines, suspension, revocation.`,
    hdbRef: `✓ CEA professional conduct page`,
    source: "",
    priority: "high",
    tags: "cea rules agent rules cea compliance",
    personas: "buyer seller",
    isUpdated: false,
  },
  {
    id: 143,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `What money can agent handle?`,
    shortAnswer: `Only: valuation fees, own commission. NEVER transaction monies.`,
    answer: `**CANNOT handle:**
• Option money / exercise fee
• Deposits
• Stamp duty payments
• Any buyer–seller money

These must go directly between parties or via lawyers' escrow. Holding client money = serious CEA violation.`,
    hdbRef: `✓ CEA money handling rules`,
    source: "",
    priority: "high",
    tags: "agent money cea money handle cash deposit agent",
    personas: "buyer seller",
    isUpdated: false,
  },
  {
    id: 144,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `What is co-broking?`,
    shortAnswer: `Buyer's agent and seller's agent share commission. Common for private property.`,
    answer: `**Private property:**
• Seller pays 2–4% total
• Seller's agent shares with buyer's agent
• Buyer pays $0

**HDB resale:**
• Seller pays own agent (~2%)
• Buyer pays own agent (~1%)
• No sharing — each collects from own client

**Must use CEA Prescribed Estate Agency Agreement.**`,
    hdbRef: `✓ CEA co-broking rules`,
    source: "",
    priority: "high",
    tags: "co broke cobroke split commission",
    personas: "buyer seller",
    isUpdated: false,
  },
  {
    id: 145,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `What is CPD and what's required?`,
    shortAnswer: `Continuing Professional Development — mandatory yearly hours for registered agents.`,
    answer: `Covers: ethics, property law updates, CPF/HDB policy changes, professional skills. Tracked by CEA. Failure may affect registration renewal.

**Also:** changes to HDB rules (like Aug 2024 LTV, Jul 2025 SSD) are typically covered in CPD modules.`,
    hdbRef: `✓ CEA CPD requirements`,
    source: "",
    priority: "high",
    tags: "cpd continuing professional",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 146,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `Essential GOV.SG links to bookmark`,
    shortAnswer: `CPF Calculator, HDB Resale Portal, IRAS Stamp Duty, MAS Loan Rules, CEA Register.`,
    answer: `**CPF Housing Calculator:** cpf.gov.sg/member/tools-and-services/calculators/cpf-housing-usage
**HDB Resale Portal:** hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-resale-flats
**IRAS Stamp Duty:** iras.gov.sg/taxes/stamp-duty
**MAS Loan Rules:** mas.gov.sg/regulation/explainers/property-loan-rules
**CEA Public Register:** cea.gov.sg/public-register
**CPF Online:** my.cpf.gov.sg
**HDB e-Services:** hdb.gov.sg → Services Hub`,
    hdbRef: `✓ All official government sources`,
    source: "",
    priority: "high",
    tags: "gov links official sources hdb calculator link",
    personas: "buyer seller",
    isUpdated: false,
  },
  {
    id: 147,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `Quick formula — buyer's total upfront cost`,
    shortAnswer: `Downpayment (cash + CPF) + BSD + ABSD + Legal ~$3-5K + Mortgage stamp + Valuation fee + Agent commission = Total.`,
    answer: `Always break this down for every buyer at first meeting. Shock of 'I thought I had enough' kills deals.

**Rule of thumb:** budget 30% of flat price as liquid upfront (cash + CPF).`,
    hdbRef: `✓ IRAS + CPF calculation guidance`,
    source: "",
    priority: "high",
    tags: "buyer upfront total cost buyer cash needed buyer",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 148,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `Quick formula — seller's net cash`,
    shortAnswer: `Selling Price − Outstanding Loan − CPF P+I (all owners) − Agent commission (~2%) − Legal fees (~$2-3K) − SSD (if any) = Net cash`,
    answer: `Run this for every seller. Many think 'I bought for $400K, selling $600K, I get $200K cash'. Actual cash often 10–30% of that after CPF refund.`,
    hdbRef: `✓ CPF official refund formula`,
    source: "",
    priority: "high",
    tags: "seller formula seller net how much seller get",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 149,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `Quick formula — monthly mortgage estimate`,
    shortAnswer: `~$4.50 per $1,000 borrowed at 3% / 25yr. ~$4.30 at 2.6% (HDB loan).`,
    answer: `**Examples (25-year, ~3%):**
$500K loan ≈ $2,250/month
$750K loan ≈ $3,375/month
$1M loan ≈ $4,500/month

For bank loan 2026 (~1.7%): roughly $4,100 / $1M. Rule of thumb only — use bank calculator for exact.`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "monthly instalment mortgage calc monthly payment",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 150,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `Client refuses to sign estate agency agreement — what do I do?`,
    shortAnswer: `Don't proceed. CEA mandates the agreement. No agreement = no commission protection.`,
    answer: `**Prescribed agreements:**
• Exclusive/non-exclusive seller appointment
• Buyer/tenant appointment

Without agreement: you have no contractual basis to claim commission. Also: CEA audits can flag you for non-compliance.`,
    hdbRef: `✓ CEA prescribed agreements`,
    source: "",
    priority: "high",
    tags: "no agreement refuse sign agreement",
    personas: "buyer seller",
    isUpdated: false,
  },
  {
    id: 151,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `Agent says seller's 'reserve price' — is that binding?`,
    shortAnswer: `Only if seller signs exclusive listing agreement with specified reserve.`,
    answer: `Verbal 'reserve' means nothing. Always get in writing. Even then: seller can withdraw anytime (subject to commission penalty).

Different from developer 'reserve price' for new launches — that's a public record.`,
    hdbRef: `✓ CEA exclusive listing guidance`,
    source: "",
    priority: "high",
    tags: "reserve price minimum price seller",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 152,
    propertyType: "hdb",
    workflow: "agent" as WorkflowId,
    question: `How long should agents keep records?`,
    shortAnswer: `5 years for all transaction-related documents (CEA rule).`,
    answer: `Includes: estate agency agreements, client correspondence, commission invoices, ID copies, advertisements. Digital OK. CEA can audit anytime.`,
    hdbRef: `✓ CEA record-keeping requirements`,
    source: "",
    priority: "high",
    tags: "record keeping 5 year records agent files",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 153,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `HDB shop flat — different from residential?`,
    shortAnswer: `Yes. Shop flats (commercial/mixed-use HDB) have different rules.`,
    answer: `No MOP, no income ceiling, can be owned by companies. Cannot use CPF. No grants. ABSD + property tax treated as commercial.

Agents handling HDB shop flats need different expertise — mostly commercial leasing experience.`,
    hdbRef: `✓ HDB commercial property page`,
    source: "",
    priority: "high",
    tags: "shop flat commercial hdb mixed use",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 154,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `What is SERS?`,
    shortAnswer: `Selective En-bloc Redevelopment Scheme. HDB acquires old estates for redevelopment; owners get compensation + priority for new flats.`,
    answer: `**Compensation:** market valuation of flat at acquisition date.
**Rehousing:** priority to buy new flat in designated replacement site at subsidised prices.
**Timeline:** 6+ years from announcement to move-out.

Identified before key acquisition dates. Check HDB announcements.`,
    hdbRef: `✓ HDB SERS page`,
    source: "",
    priority: "high",
    tags: "sers en bloc hdb selective enbloc",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 155,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `VERS — the voluntary version?`,
    shortAnswer: `Voluntary Early Redevelopment Scheme. For flats 70+ years old. Residents vote on early redevelopment.`,
    answer: `Announced 2018, first tranches expected from mid-2020s. Vote required: supermajority of residents. If approved: HDB acquires at market valuation.

Different from SERS — VERS is voluntary and for much older flats.`,
    hdbRef: `✓ HDB VERS announcement`,
    source: "",
    priority: "high",
    tags: "vers voluntary en bloc old flats redevelop",
    personas: "seller senior_55+",
    isUpdated: false,
  },
  {
    id: 156,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `What's HIP (Home Improvement Programme)?`,
    shortAnswer: `Optional HDB-funded upgrade for older flats: toilets, pipes, structural.`,
    answer: `2 tiers: essential (mandatory if voted in) + optional (owner co-pays). HDB subsidises bulk. CPF OA usable for HIP co-payment.`,
    hdbRef: `✓ HDB HIP programme`,
    source: "",
    priority: "high",
    tags: "hip home improvement upgrade programme",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 157,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `MUP (Main Upgrading Programme) — still relevant?`,
    shortAnswer: `Mostly replaced by HIP. Older blocks completed MUP in 2000s-2010s.`,
    answer: `If flat had MUP: costs paid via CPF OA over time. Outstanding balance transfers to buyer on resale (usually built into price).`,
    hdbRef: `✓ HDB MUP legacy`,
    source: "",
    priority: "high",
    tags: "mup main upgrading old upgrading",
    personas: "seller",
    isUpdated: false,
  },
  {
    id: 158,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `Can owner renovate without approval?`,
    shortAnswer: `Minor interior — yes. Structural / external — need HDB permit.`,
    answer: `**Need permit:** hacking walls, bathroom/kitchen upgrade, electrical rewiring, flooring (certain types), ceiling works.
**No permit:** painting, fixtures, small built-ins.

Unauthorised works = HDB can order reinstatement + fines. All renovation must be by HDB-licensed contractor.`,
    hdbRef: `✓ HDB renovation guidelines`,
    source: "",
    priority: "high",
    tags: "reno permit renovation hdb hack wall",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 159,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `When to tell buyer about renovation costs?`,
    shortAnswer: `At first meeting. Budget $20K (minor) to $60K+ (full reno) for HDB resale.`,
    answer: `**Typical HDB resale reno budget 2026:**
• Minimal (paint, fixtures): $10–20K
• Moderate (kitchen, bath, floors): $30–50K
• Full renovation: $50–80K
• Luxury/custom: $100K+

Not claimable via CPF. Some banks offer renovation loans (~4–6%).`,
    hdbRef: `Note: No official HDB policy on this — industry practice only.`,
    source: "",
    priority: "high",
    tags: "reno cost renovation budget how much reno",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 160,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `Million-dollar HDB — what's the reality in 2026?`,
    shortAnswer: `Record highs in 2023–2024. Q1 2026: first HDB resale price dip in ~7 years (-0.1%).`,
    answer: `Million-dollar transactions concentrated in mature estates (Queenstown, Bukit Merah, Bishan), 5-room/executive, attractive blocks.

**2026 market:** prices cooling slightly. Supply ramping up (100,000 BTOs 2021–2025). Bank rates low (~1.7%). Good time for first-timers; upgraders should be cautious.`,
    hdbRef: `✓ HDB resale price index — Q1 2026 data`,
    source: "",
    priority: "high",
    tags: "million dollar hdb 1m hdb expensive hdb",
    personas: "buyer seller",
    isUpdated: false,
  },
  {
    id: 161,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `Valuation gap — when HDB value < price buyer willing to pay`,
    shortAnswer: `This is what COV is. Buyer pays gap in cash.`,
    answer: `**Example:** Seller wants $650K. HDB values at $620K. COV = $30K cash only.

Some sellers refuse to lower, buyers walk. Negotiate: often meet at valuation or slight COV.

Tell buyers early: 'You may need extra cash for COV — budget buffer.'`,
    hdbRef: `✓ HDB resale process`,
    source: "",
    priority: "high",
    tags: "valuation low under valuation",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 162,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `Valuation came in LOWER than asking — buyer's options?`,
    shortAnswer: `1. Negotiate seller down 2. Pay COV in cash 3. Walk away.`,
    answer: `Remember: if buyer has already exercised OTP, they're committed. Valuation comes AFTER. Options are limited.

**Best practice:** check recent transactions BEFORE OTP to estimate valuation. Reduces surprise risk.`,
    hdbRef: `✓ HDB resale process`,
    source: "",
    priority: "high",
    tags: "valuation low under valuation",
    personas: "buyer",
    isUpdated: false,
  },
  {
    id: 163,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `Resale transaction fell through — who keeps what?`,
    shortAnswer: `Depends on WHO backed out and WHEN.`,
    answer: `**Buyer fails to exercise OTP within 21 days:** seller keeps option fee only.
**Buyer exercises but withdraws resale application:** seller may keep deposit (up to $5K).
**Seller withdraws after OTP:** must refund + potential legal action.

Agents: document everything. Never hold client money.`,
    hdbRef: `✓ HDB resale OTP rules`,
    source: "",
    priority: "high",
    tags: "deal fell through transaction fail",
    personas: "buyer seller",
    isUpdated: false,
  },
  {
    id: 164,
    propertyType: "hdb",
    workflow: "edge" as WorkflowId,
    question: `Agent commission dispute — what to do?`,
    shortAnswer: `Follow CEA dispute resolution process. Document everything.`,
    answer: `**Steps:**
1. Direct discussion with client
2. CEA dispute resolution scheme
3. Small Claims Tribunal (up to $30K)
4. Civil court for larger amounts

Key: signed estate agency agreement is your foundation. Verbal agreements = weak case.`,
    hdbRef: `✓ CEA dispute resolution`,
    source: "",
    priority: "high",
    tags: "commission dispute agent fee fight",
    personas: "buyer",
    isUpdated: false,
  },
]

export const RECENT_CHANGES = [
  { date: "4 Jul 2025", text: "SSD extended to 4 years, rates now 16/12/8/4% (was 12/8/4/0 over 3yr)" },
  { date: "20 Aug 2024", text: "HDB loan LTV reduced from 80% to 75% (downpayment now 25%)" },
  { date: "20 Aug 2024", text: "EHG increased to $120K (families) / $60K (singles)" },
  { date: "Oct 2024", text: "BTO reclassified as Standard / Plus / Prime (Plus & Prime have 10-yr MOP + subsidy clawback)" },
  { date: "1 Jul 2024", text: "CPF refund at age 55+ \u2192 OA by default (not cash)" },
  { date: "16 Feb 2024", text: "Single SC seniors 55+ can claim ABSD refund when rightsizing" },
  { date: "1 Dec 2025", text: "Silver Housing Bonus increased from $30K to $40K max" },
]

export const POPULAR_SEARCHES = [
  { label: "EHG", query: "ehg grant" },
  { label: "ABSD Upgrade", query: "absd remission upgrade" },
  { label: "SSD (new)", query: "ssd 4 year" },
  { label: "MOP", query: "mop" },
  { label: "CPF at 55", query: "cpf 55 age" },
  { label: "Upgrader Path", query: "hdb to condo upgrader" },
  { label: "Divorce", query: "divorce hdb" },
  { label: "Decouple", query: "decouple" },
  { label: "Plus/Prime", query: "plus prime clawback" },
  { label: "COV", query: "cov valuation" },
]

export const PERSONA_FILTERS = [
  { id: "all", label: "All" },
  { id: "buyer", label: "Buyer" },
  { id: "seller", label: "Seller" },
  { id: "upgrader", label: "Upgrader" },
  { id: "senior", label: "Senior 55+" },
  { id: "single", label: "Single" },
  { id: "pr", label: "PR/Foreigner" },
  { id: "divorce", label: "Divorce" },
  { id: "landlord", label: "Landlord" },
  { id: "updated", label: "Recently Updated" },
]

export const SYNONYMS: Record<string, string[]> = {
  'ehg': ['enhanced housing grant', 'enhanced grant'],
  'absd': ['additional buyer stamp duty'],
  'bsd': ['buyer stamp duty'],
  'ssd': ['seller stamp duty'],
  'hfe': ['hdb flat eligibility', 'eligibility letter'],
  'hle': ['hdb loan eligibility'],
  'mop': ['minimum occupation period', 'occupation period'],
  'cov': ['cash over valuation'],
  'otp': ['option to purchase'],
  'tdsr': ['total debt servicing ratio'],
  'msr': ['mortgage servicing ratio'],
  'ltv': ['loan to value'],
  'vl': ['valuation limit'],
  'wl': ['withdrawal limit'],
  'brs': ['basic retirement sum'],
  'frs': ['full retirement sum'],
  'ers': ['enhanced retirement sum'],
  'hps': ['home protection scheme'],
  'phg': ['proximity housing grant', 'proximity grant'],
  'shb': ['silver housing bonus'],
  'lbs': ['lease buyback scheme', 'lease buyback'],
  'cpd': ['continuing professional development'],
  'cea': ['council for estate agencies'],
  'pr': ['permanent resident'],
  'sc': ['singapore citizen'],
  'bto': ['build to order', 'new flat'],
  'ec': ['executive condominium'],
  'eip': ['ethnic integration policy', 'ethnic quota'],
  'sers': ['selective en bloc redevelopment'],
  'vers': ['voluntary early redevelopment'],
  'hip': ['home improvement programme'],
  'oa': ['ordinary account'],
  'sa': ['special account'],
  'ma': ['medisave'],
  'ra': ['retirement account'],
  'ipa': ['in principle approval'],
  'upgrade': ['upgrader', 'upgrading'],
  'downgrade': ['downgrader', 'downgrading'],
  'decouple': ['decoupling', 'part transfer'],
  'divorce': ['divorced', 'separation'],
  'inherit': ['inherited', 'inheritance'],
  'senior': ['seniors', 'elderly', '55+'],
  'single': ['singles', 'unmarried'],
  'foreigner': ['foreign', 'expat'],
  'commission': ['agent fee'],
  'rental': ['rent', 'sublet', 'landlord'],
  'grant': ['grants', 'subsidy'],
  'calculator': ['calc', 'formula'],
  'plus': ['plus flat'],
  'prime': ['prime flat'],
}
