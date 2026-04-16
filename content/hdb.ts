export const categoryInfo = {
  name: "HDB",
  description:
    "Everything about HDB flats — BTO, resale, regulations, and financial planning.",
  icon: "Building2",
}

export const sections = [
  {
    title: "Understanding HDB MOP (Minimum Occupation Period)",
    content: `The Minimum Occupation Period (MOP) is a mandatory period during which HDB flat owners must physically occupy their flat before they can sell it on the open market or rent out the entire unit.

**Key Points:**
- **Standard MOP**: 5 years from the date of key collection
- **Applies to**: All HDB flat types — BTO, resale, DBSS, EC (within MOP)
- **Cannot sell or rent** the entire unit during MOP

**Exceptions** — HDB may grant an exemption for:
- Divorce or separation
- Medical reasons requiring relocation
- Financial hardship

**After MOP:**
- You can sell your flat on the open market
- You can rent out the entire flat (subject to approval)
- You can apply for a second property

**Important Notes:**
- Subletting of rooms is allowed during MOP (up to the maximum number of tenants)
- CPF usage rules differ before and after MOP
- MOP starts from key collection, not purchase date`,
  },
  {
    title: "HDB Resale Buying Eligibility",
    content: `Before purchasing an HDB resale flat, buyers must satisfy a set of eligibility conditions imposed by HDB.

**Citizenship Requirements:**
- **Singapore Citizens**: Eligible to purchase any HDB resale flat type immediately.
- **Singapore Permanent Residents**: Must have held SPR status for at least **3 years** before they are eligible.

**Age Requirement:**
- All applicants must be at least **21 years old**.
- For Single Singapore Citizen Scheme: at least **35 years old**.

**Income Ceiling:**
- **No income ceiling** for the purchase itself.
- Income ceilings apply only for **CPF housing grants** or **HDB concessionary loan**.

**Private Property Ownership Restrictions:**
- Must **not own any private residential property** (local or overseas).
- Must **not have disposed of private property within the last 15 months**.
- **Exception for Seniors 55+**: Can purchase 4-room or smaller even with private property, but must dispose within 6 months.

**Ethnic Integration Policy (EIP) & SPR Quota:**
- Each block/neighbourhood has maximum proportions for ethnic groups.
- Non-Malaysian SPRs: **8% block level**, **5% neighbourhood level**.
- Check quota availability on the HDB Resale Portal before committing.`,
  },
  {
    title: "Eligibility Schemes for Resale Purchase",
    content: `HDB provides multiple eligibility schemes:

**1. Public Scheme** — Form a family nucleus with spouse. At least one applicant must be SC.

**2. Fiance/Fiancee Scheme** — Engaged couples. Must submit marriage certificate within **3 months** of completion.

**3. Single SC Scheme** — Single SCs aged **35+**. Can purchase up to 5-room.

**4. Joint Singles Scheme** — Two or more single SCs aged **35+**.

**5. Non-Citizen Spouse Scheme** — SC applicant with non-citizen spouse (listed as essential occupier).

**6. Non-Citizen Family Scheme** — SC applicant with non-citizen parents or children.

**7. Orphans Scheme** — SC orphans aged 21+ forming family nucleus with siblings.

**8. Conversion Scheme** — Existing HDB owners converting flat type.

**9. Multi-Generation Priority Scheme** — Priority for families buying near parents/married children within same estate or 4 km.`,
  },
  {
    title: "HDB Flat Eligibility (HFE) Letter",
    content: `The HFE letter is a mandatory document introduced on **9 May 2023**. It consolidates three checks into one:

1. **Eligibility to purchase** — Confirms whether you qualify.
2. **CPF housing grant amounts** — States exact grant amounts.
3. **HDB loan amount** — Confirms maximum loan quantum.

**Step 1: Preliminary HFE Check**
- Apply through the HDB Flat Portal (My Flat > Buy a Flat).
- Outcome provided **instantly**.
- Based on self-declared information — no documents required.

**Step 2: Confirmed HFE Letter**
- Processed within **30 calendar days**.
- Submit supporting income documents.
- Uses **standardised 12-month income assessment** (from 9 May 2023).

**Participating Financial Institutions (for bank loans):**
1. DBS Bank / POSB
2. Hong Leong Finance
3. Maybank
4. OCBC Bank
5. Sing Investments & Finance
6. UOB

**Validity:** 9 months from date of issue. Must be valid when obtaining OTP.`,
  },
  {
    title: "HDB Concessionary Loan",
    content: `The HDB concessionary loan is provided directly by HDB at a stable, government-backed interest rate.

**Interest Rate:** 2.6% p.a. (0.1% above CPF OA rate of 2.5%), computed on monthly rest.

**Interest Rate Floor:** 3% used for loan eligibility computation (from 30 Sep 2022).

**Maximum LTV:** 75% of the lower of purchase price or valuation.
- Pro-rated if remaining lease doesn't cover youngest buyer to age 95.
- **No loan** for flats with 20 years or less remaining lease.

**Maximum Repayment Period** — shortest of:
1. 25 years
2. 65 minus age of oldest borrower
3. Remaining lease minus 20 years

**MSR:** Monthly repayment must not exceed **30%** of gross monthly income (calculated at 3% floor).

**CPF OA Retention:** Can retain up to **$20,000** in CPF OA (from 28 Aug 2018).

**Income Ceilings:**
| Buyer Type | Ceiling |
|-----------|---------|
| Families | $14,000/month |
| Extended families | $21,000/month |
| Singles (5-room or smaller) | $7,000/month |

**HDB Loan vs Bank Loan:**
| Feature | HDB Loan | Bank Loan |
|---------|----------|-----------|
| Interest Rate | 2.6% (stable) | Variable/Fixed |
| Down Payment | 20% (all CPF) | 25% (5% cash min) |
| Income Ceiling | Yes | No |
| Rate Risk | Low | Higher |`,
  },
  {
    title: "CPF Housing Grants for HDB Resale",
    content: `**1. CPF Housing Grant (Families):**
| Flat Type | SC/SC | SC/SPR |
|-----------|-------|--------|
| 2-room to 4-room | $80,000 | $70,000 |
| 5-room and above | $50,000 | $40,000 |

**2. CPF Housing Grant (Singles — 35+):**
| Flat Type | Amount |
|-----------|--------|
| 2-room to 4-room | $40,000 |
| 5-room and above | $25,000 |

**3. Proximity Housing Grant (PHG):**
| Buyer Type | Living Together | Within 4 km |
|-----------|----------------|-------------|
| Families | $30,000 | $20,000 |
| Singles | $15,000 | $10,000 |

**4. Enhanced CPF Housing Grant (EHG):**
- Families: Up to **$120,000** (from 20 Aug 2024)
- Singles: Up to **$60,000**
- Income ceiling: $9,000 (families), $4,500 (singles)

**5. Half-Housing Grant:** $40,000 (2-4 room) / $25,000 (5+ room) — for first-timer + second-timer couples.

**6. Step-Up Grant:** $15,000 — for 2-room Flexi owners upgrading to 3-room resale.

**Example — First-Timer SC Couple, $8K income, 4-room near parents:**
- Families Grant: $80,000
- EHG: Up to $120,000
- PHG: $20,000
- **Total: Up to $220,000**

**Grant Conditions:** 5-year MOP, no private property during MOP, treated as subsidised purchase.`,
  },
  {
    title: "CPF Usage for Property Purchase",
    content: `Your CPF Ordinary Account (OA) can be used for property purchases, subject to various rules and limits.

**What CPF OA Can Be Used For:**
1. Down payment
2. Monthly mortgage payments
3. Stamp duty and legal fees
4. Construction loans (for BTO)

**HDB Flats:** Can use CPF OA for full purchase price (no Valuation Limit).

**Private Property:** Subject to Valuation Limit (VL). Cannot exceed Withdrawal Limit (WL = 120% of VL). Must set aside BRS if over 55.

**CPF Accrued Interest:** When selling, must refund CPF principal + accrued interest (2.5% p.a.) to CPF OA.`,
  },
  {
    title: "CPF Usage Rules for Older Flats (From 10 May 2019)",
    content: `The remaining lease must cover the buyer to at least age 95 for full CPF usage.

**Rule 1 — Minimum 20 Years:** Remaining lease must be **more than 20 years** to use any CPF. 20 years or less = cash/bank loan only.

**Rule 2 — Full CPF Usage:** Remaining lease covers youngest buyer to age 95 → full VL (100%).

**Rule 3 — Pro-Rated CPF:**
**Formula:** CPF Usage = VL x (Remaining Lease - 20) / (95 - Age of Youngest Buyer - 20)

**Examples:**
- 50-year lease, buyer age 30: (50-20)/(95-30-20) = 66.7%
- 40-year lease, buyer age 45: (40-20)/(95-45-20) = 66.7%
- 35-year lease, buyer age 55: (35-20)/(95-55-20) = 75%

**Rule 4 — Pro-Rated HDB Loan LTV:**
Pro-Rated LTV = 75% x (Remaining Lease - 20) / (95 - Age - 20)

| Remaining Lease | CPF Usage | HDB Loan |
|----------------|-----------|----------|
| Covers to 95 | Full (100% VL) | Full (75% LTV) |
| > 20 years but < 95 | Pro-rated | Pro-rated |
| 20 years or less | None | Not available |`,
  },
  {
    title: "HDB Resale Transaction Process — Step by Step",
    content: `**Step 1: Apply for HFE Letter**
- 1a: Preliminary HFE Check (instant) — no documents needed
- 1b: Confirmed HFE Letter (within 30 days) — submit income docs

**Step 2: Search for Flat & Obtain OTP**
- Seller must register Intent to Sell at least **7 days** before OTP
- Buyer must have valid HFE letter
- Option fee: $1 to $1,000

**Step 3: Request for Value**
- Submit through HDB Resale Portal (next working day after OTP)
- Determines max CPF usage and loan amount

**Step 4: Letter of Offer (Bank Loan Buyers)**
- Obtain formal LO before exercising OTP
- Compare offers from 6 participating FIs

**Step 5: Exercise OTP**
- **21 calendar days** to decide
- Non-exercise = option fee forfeited

**Step 6: Submit Resale Application**
- Both buyer and seller submit via HDB Resale Portal
- Fees: $40 (1-2 room) / $80 (3+ room)

**Step 7: HDB Acceptance** — within **28 working days**

**Step 8: Endorse Resale Documents** — **6 + 2 days** window

**Step 9: Pay Resale Fees Online**

**Step 10: HDB Approval** — 1-2 weeks after endorsement

**Step 11: Completion** — ~8 weeks from acceptance. Keys handed over.

**Prepare for Completion:**
- Inspect the flat
- Fire insurance (mandatory for HDB loan)
- Home Protection Scheme (HPS)
- Ensure funds available`,
  },
]

export const faqs = [
  {
    question: "When should buyers apply for the HFE letter?",
    answer:
      "Buyers should apply before they begin searching for a flat. The HFE letter establishes your budget (eligibility, grant amounts, and loan quantum), which helps narrow down your flat search. You do not need to have identified a specific flat before applying.",
  },
  {
    question: "What is the validity period for the HFE letter?",
    answer:
      "The HFE letter is valid for **9 months** from the date of issue. If it expires before you complete your purchase, you must apply for a new one. You must have a valid (non-expired) HFE letter at the time you obtain the OTP from the seller.",
  },
  {
    question: "Can I apply for the HFE letter more than once?",
    answer:
      "Yes. You can reapply if your circumstances change (e.g., change in income, marital status, or household composition). The latest HFE letter will supersede any previous one.",
  },
  {
    question:
      "When must buyers have the Letter of Offer from the bank?",
    answer:
      "Buyers taking a bank loan must have the formal Letter of Offer (LO) **before exercising the OTP**. Start the bank loan application as soon as you receive the OTP so the LO is ready within the 21-day exercise window.",
  },
  {
    question:
      "Can I switch from HDB loan to bank loan (or vice versa) after the HFE letter?",
    answer:
      "You can change your loan type, but you may need to reapply for the HFE letter to reflect the new financing arrangement. Consult HDB for specific guidance.",
  },
  {
    question: "How long does it take for HDB to accept a resale application?",
    answer:
      "HDB processes resale applications within **28 working days** from the date both buyer and seller submit. This assumes all documents are complete. Incomplete submissions take longer.",
  },
  {
    question: "When will a resale transaction be completed?",
    answer:
      "The completion appointment is typically scheduled approximately **8 weeks from the date of HDB acceptance**. Keys are handed over and the lease is officially transferred.",
  },
  {
    question: "Can sellers or buyers change the completion date?",
    answer:
      "Yes. Either party can request a change by writing to HDB via **MyRequest@HDB** within **1 week** of the acceptance letter. Changes require HDB approval and both parties' agreement.",
  },
  {
    question:
      "When must buyers under Fiance/Fiancee Scheme submit their marriage certificate?",
    answer:
      "Within **3 months from the date of completion** of the resale transaction. Failure may result in HDB voiding the transaction.",
  },
  {
    question: "What should buyers prepare for the completion appointment?",
    answer:
      "Inspect the flat, arrange fire insurance (mandatory for HDB loan), ensure Home Protection Scheme (HPS) coverage, confirm sufficient CPF/cash funds, and bring original NRIC, passport/employment pass, payment receipts, and fire insurance certificate.",
  },
  {
    question: "What happens if I do not exercise the OTP within 21 days?",
    answer:
      "The OTP lapses and the option fee (up to $1,000) is forfeited to the seller. You would need to negotiate a new OTP.",
  },
  {
    question: "Can the OTP exercise period be extended?",
    answer:
      "No. The 21-day period is fixed and cannot be extended. Ensure all financing and documentation is in order before the deadline.",
  },
  {
    question: "What is the maximum option fee for HDB resale?",
    answer:
      "The option fee is negotiable between **$1 and $1,000**. This differs from private property (typically 1% of purchase price).",
  },
  {
    question:
      "Does the seller need to register Intent to Sell before granting an OTP?",
    answer:
      "Yes. The seller must register Intent to Sell on the HDB Resale Portal at least **7 days** before granting the OTP.",
  },
  {
    question: "Can a seller grant multiple OTPs simultaneously?",
    answer:
      "No. A seller can only grant one OTP at a time. If the buyer doesn't exercise within 21 days, the seller can grant a new OTP to another buyer.",
  },
  {
    question: "Will receiving a CPF housing grant affect my MOP?",
    answer:
      "The MOP remains 5 years. However, receiving a grant means your purchase is treated as a subsidised transaction, affecting future housing subsidies eligibility and ability to own private property during MOP.",
  },
  {
    question: "Can I receive grants if my income exceeds the ceiling?",
    answer:
      "No. If your gross monthly household income exceeds $14,000 (families) or $7,000 (singles), you're not eligible for CPF housing grants. However, you can still purchase the resale flat — income ceiling only applies to grants and HDB loans.",
  },
  {
    question: "What is the income ceiling for HDB resale purchases?",
    answer:
      "There is **no income ceiling** for the purchase itself. Income ceilings only apply when applying for CPF housing grants ($14,000 for families, $7,000 for singles) or an HDB concessionary loan.",
  },
  {
    question: "Can SPRs buy HDB resale flats?",
    answer:
      "Yes, but SPRs must have held SPR status for at least **3 years**. They're also subject to SPR quota limits (8% at block level, 5% at neighbourhood level). Malaysian SPRs are exempt from SPR quota but subject to EIP.",
  },
  {
    question: "What is the 15-month rule for private property disposal?",
    answer:
      "Buyers must not have disposed of any private residential property within the **last 15 months** before the HDB resale application. This applies to completed properties that were sold, transferred, or otherwise disposed of.",
  },
]
