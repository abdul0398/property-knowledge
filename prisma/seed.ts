import { PrismaClient, Role } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  // Create users
  const adminPassword = await hash("admin123", 12)
  const agentPassword = await hash("agent123", 12)

  const admin = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@example.com",
      passwordHash: adminPassword,
      role: Role.ADMIN,
    },
  })

  const agent = await prisma.user.upsert({
    where: { email: "agent@example.com" },
    update: {},
    create: {
      name: "John Agent",
      email: "agent@example.com",
      passwordHash: agentPassword,
      role: Role.AGENT,
    },
  })

  console.log("Created users:", { admin: admin.email, agent: agent.email })

  // Create categories
  const categories = await Promise.all(
    [
      {
        name: "HDB",
        slug: "hdb",
        description:
          "Everything about HDB flats — BTO, resale, regulations, and financial planning.",
        icon: "Building2",
        order: 1,
      },
      {
        name: "Condo Resale",
        slug: "condo-resale",
        description:
          "Condominium resale market knowledge, regulations, and processes.",
        icon: "Building",
        order: 2,
      },
      {
        name: "New Launches",
        slug: "new-launches",
        description:
          "New property launches, developer sales, and booking procedures.",
        icon: "Rocket",
        order: 3,
      },
      {
        name: "Landed",
        slug: "landed",
        description:
          "Landed property knowledge — terrace, semi-detached, bungalows, and GCBs.",
        icon: "Home",
        order: 4,
      },
      {
        name: "Rental",
        slug: "rental",
        description:
          "Rental market regulations, tenancy agreements, and landlord-tenant rights.",
        icon: "Key",
        order: 5,
      },
    ].map((cat) =>
      prisma.category.upsert({
        where: { slug: cat.slug },
        update: {},
        create: cat,
      })
    )
  )

  console.log("Created categories:", categories.length)

  // Create sample articles
  const articles = [
    // =========================================================================
    // EXISTING ARTICLES
    // =========================================================================
    {
      title: "Understanding HDB MOP (Minimum Occupation Period)",
      slug: "hdb-mop-guide",
      content: `# HDB Minimum Occupation Period (MOP)

The Minimum Occupation Period (MOP) is a mandatory period during which HDB flat owners must physically occupy their flat before they can sell it on the open market or rent out the entire unit.

## Key Points

- **Standard MOP**: 5 years from the date of key collection
- **Applies to**: All HDB flat types — BTO, resale, DBSS, EC (within MOP)
- **Cannot sell or rent** the entire unit during MOP

## Exceptions

There are limited circumstances where HDB may grant an exemption:
- Divorce or separation
- Medical reasons requiring relocation
- Financial hardship

## After MOP

Once MOP is fulfilled:
- You can sell your flat on the open market
- You can rent out the entire flat (subject to approval)
- You can apply for a second property

## Important Notes

- Subletting of rooms is allowed during MOP (up to the maximum number of tenants)
- CPF usage rules differ before and after MOP
- MOP starts from key collection, not purchase date`,
      excerpt:
        "Learn about the HDB Minimum Occupation Period — duration, rules, exceptions, and what happens after MOP.",
      published: true,
      categoryId: categories[0].id,
      authorId: admin.id,
      tags: ["HDB", "MOP", "regulations"],
    },
    {
      title: "CPF Usage for Property Purchase",
      slug: "cpf-property-usage",
      content: `# CPF Usage for Property Purchase

Your CPF Ordinary Account (OA) can be used for property purchases, subject to various rules and limits.

## What CPF OA Can Be Used For

1. **Down payment** (up to a certain percentage)
2. **Monthly mortgage payments**
3. **Stamp duty and legal fees**
4. **Construction loans** (for BTO)

## CPF Usage Limits

### HDB Flats
- Can use CPF OA for full purchase price (no Valuation Limit)
- Must set aside Basic Retirement Sum (BRS) if over 55

### Private Property
- Subject to Valuation Limit (VL)
- Cannot exceed Withdrawal Limit (WL = 120% of VL)
- Must set aside BRS if over 55

## CPF Accrued Interest

When you sell your property, you must refund:
- The CPF principal used
- The accrued interest (2.5% p.a.)

This is refunded to your CPF OA, not paid in cash.

## Tips for Agents

- Always check client's CPF OA balance early
- Consider the impact of accrued interest on sale proceeds
- Advise clients on the 55-year-old BRS requirement`,
      excerpt:
        "Complete guide to using CPF for property purchases — rules, limits, and accrued interest explained.",
      published: true,
      categoryId: categories[0].id,
      authorId: admin.id,
      tags: ["CPF", "financing", "HDB"],
    },
    {
      title: "Condo Resale Process Step by Step",
      slug: "condo-resale-process",
      content: `# Condo Resale Process

A comprehensive guide to the condominium resale transaction process in Singapore.

## Step 1: Engage a Property Agent
- Sign an Exclusive or Non-Exclusive Estate Agency Agreement
- Agent conducts a Comparative Market Analysis (CMA)

## Step 2: Property Viewing and Offer
- Schedule viewings with potential buyers
- Negotiate and accept an offer
- Issue Option to Purchase (OTP) — typically 1% option fee

## Step 3: Exercise of Option
- Buyer exercises OTP within the option period (usually 14 days)
- Buyer pays remaining deposit (typically 4% of purchase price)

## Step 4: Conveyancing
- Both parties appoint lawyers
- Buyer applies for mortgage (if applicable)
- Lawyer conducts title search and legal due diligence

## Step 5: Completion
- Typically 8-12 weeks from exercise of OTP
- Final payment and key handover
- Stamp duty payment by buyer

## Timeline Summary
| Stage | Duration |
|-------|----------|
| Marketing | 2-8 weeks |
| OTP to Exercise | 14 days |
| Exercise to Completion | 8-12 weeks |`,
      excerpt:
        "Step-by-step guide to the Singapore condo resale transaction process.",
      published: true,
      categoryId: categories[1].id,
      authorId: admin.id,
      tags: ["condo", "resale", "process"],
    },
    {
      title: "New Launch Booking Process",
      slug: "new-launch-booking",
      content: `# New Launch Booking Process

Guide to booking a unit at a new property launch in Singapore.

## Before the Launch

1. **Research the project** — floor plans, pricing, location
2. **Check eligibility** — ABSD, loan limits, TDSR
3. **Obtain IPA** (In-Principle Approval) from bank
4. **Prepare funds** — booking fee (typically 5% for private, $2,000-$5,000 for EC)

## During Balloting

- Register for a ballot number
- Attend the sales briefing
- Wait for ballot number to be called

## Booking Process

1. Select your preferred unit
2. Sign the booking form
3. Pay the booking fee (typically by cheque)
4. Receive the Sale & Purchase Agreement (S&P) within 3 weeks

## After Booking

- Sign S&P within 3 weeks of booking
- Progressive payment scheme kicks in
- Engage a lawyer for conveyancing

## Payment Schedule (Progressive)
| Stage | Percentage |
|-------|-----------|
| Booking fee | 5% |
| Within 8 weeks (sign S&P) | 15% |
| Foundation | 10% |
| Reinforced concrete | 10% |
| Partition walls | 5% |
| Ceiling/roofing | 5% |
| Electrical wiring | 5% |
| Car park/roads | 5% |
| Building facade | 10% |
| TOP | 25% |
| CSC | 15% |`,
      excerpt:
        "Everything you need to know about the new property launch booking process in Singapore.",
      published: true,
      categoryId: categories[2].id,
      authorId: admin.id,
      tags: ["new launch", "booking", "developer"],
    },
    {
      title: "Landed Property Purchase Guide",
      slug: "landed-property-guide",
      content: `# Landed Property Purchase Guide

Comprehensive guide to buying landed property in Singapore.

## Types of Landed Property

1. **Terrace House** — row of houses sharing side walls
2. **Semi-Detached** — two houses sharing one wall
3. **Detached / Bungalow** — standalone house
4. **Good Class Bungalow (GCB)** — minimum land area of 1,400 sqm in designated GCB areas

## Eligibility

- **Singapore Citizens** can buy any landed property
- **PRs** need approval from the Land Dealings Approval Unit (LDAU) under SLA
- **Foreigners** generally cannot buy landed property (except in Sentosa Cove with approval)

## Key Considerations

### Zoning and Land Use
- Check the URA Master Plan for zoning
- Understand the Gross Floor Area (GFA) and plot ratio
- Check for conservation status

### Structural Assessment
- Always conduct a thorough structural inspection
- Check for unauthorized additions/alterations
- Verify the Certificate of Statutory Completion (CSC)

### Financing
- LTV limits apply (75% for first property, less for subsequent)
- TDSR and MSR do not apply to landed (MSR is HDB/EC only)
- Higher cash outlay required

## Additional Costs
- Land survey fees
- Renovation (often substantial)
- Property tax (higher for non-owner-occupied)
- Maintenance of external areas`,
      excerpt:
        "Complete guide to buying landed property in Singapore — types, eligibility, and key considerations.",
      published: true,
      categoryId: categories[3].id,
      authorId: admin.id,
      tags: ["landed", "purchase", "guide"],
    },
    {
      title: "Rental Agreement Essentials",
      slug: "rental-agreement-essentials",
      content: `# Rental Agreement Essentials

Key knowledge for agents handling rental transactions.

## Standard Lease Terms

- **Lease Period**: Minimum 3 months for HDB, typically 1-2 years for private
- **Security Deposit**: Usually 1 month (1-year lease) or 2 months (2-year lease)
- **Advance Rent**: 1 month in advance
- **Diplomatic Clause**: Allows early termination (usually after 12 months with 2 months' notice)

## Landlord's Responsibilities

1. Ensure property is habitable
2. Maintain structural elements
3. Pay property tax
4. Handle major repairs (unless tenant-caused)
5. Return security deposit (less legitimate deductions)

## Tenant's Responsibilities

1. Pay rent on time
2. Maintain the property in good condition
3. Not sublet without permission
4. Return property in original condition (fair wear and tear accepted)

## Stamp Duty for Rental

Stamp duty on rental agreements:
- 0.4% of total rent for lease ≤ 4 years
- Payable by tenant (unless otherwise agreed)
- Must be stamped within 14 days of signing

## Commission Structure

- Typically 1 month's rent for 2-year lease
- Half month's rent for 1-year lease
- Co-broking split varies (usually 50/50)`,
      excerpt:
        "Essential guide to rental agreements — lease terms, responsibilities, stamp duty, and commission.",
      published: true,
      categoryId: categories[4].id,
      authorId: admin.id,
      tags: ["rental", "tenancy", "agreement"],
    },

    // =========================================================================
    // NEW HDB ARTICLES
    // =========================================================================
    {
      title: "HDB Resale Buying Eligibility — Complete Guide",
      slug: "hdb-resale-buying-eligibility",
      content: `# HDB Resale Buying Eligibility — Complete Guide

Before purchasing an HDB resale flat, buyers must satisfy a set of eligibility conditions imposed by HDB. This guide covers every requirement and eligibility scheme available for resale flat purchases.

## Citizenship Requirements

At least one buyer in the application must be a Singapore Citizen (SC) or a Singapore Permanent Resident (SPR).

- **Singapore Citizens**: Eligible to purchase any HDB resale flat type immediately.
- **Singapore Permanent Residents**: Must have held SPR status for at least **3 years** before they are eligible to buy an HDB resale flat. During this 3-year waiting period, SPRs cannot purchase any HDB flat (BTO or resale).

## Age Requirement

- All applicants listed on the flat application must be at least **21 years old**.
- For the Single Singapore Citizen Scheme, the applicant must be at least **35 years old**.

## Income Ceiling

- There is **no income ceiling** imposed on the purchase of an HDB resale flat itself.
- Income ceilings apply only when buyers wish to obtain **CPF housing grants** or an **HDB concessionary loan**.
- This is a common misconception — agents should clarify to clients that anyone can buy resale regardless of income, but grants and HDB loans are income-restricted.

## Private Property Ownership Restrictions

### General Rule
- Buyers must **not own any private residential property** (local or overseas) at the time of resale flat application.
- Buyers must **not have disposed of any private residential property within the last 15 months** before the date of the resale flat application.
- This 15-month rule applies to completed properties that were sold, transferred, or otherwise disposed of.

### Exception for Seniors Aged 55 and Above
- Seniors aged **55 years and above** are allowed to purchase a resale flat of **4-room or smaller** even if they currently own private property.
- However, they must **dispose of the private property within 6 months** of the resale flat purchase completion.
- This exception is designed to facilitate downsizing for retirees.

## Ethnic Integration Policy (EIP) and SPR Quota

HDB enforces ethnic quotas at both the block and neighbourhood level to ensure a balanced ethnic mix in HDB estates.

### EIP Limits
- Each block and neighbourhood has maximum proportions for the three main ethnic groups (Chinese, Malay, Indian/Others).
- Buyers can only purchase a flat if their ethnic group has not exceeded the quota for that block and neighbourhood.

### SPR Quota
- Non-Malaysian SPRs are subject to an **SPR quota** of:
  - **8% at the block level**
  - **5% at the neighbourhood level**
- Malaysian SPRs are exempt from the SPR quota but are still subject to EIP.
- Buyers should check quota availability on the HDB Resale Portal before committing to a flat.

## Eligibility Schemes for Resale Purchase

HDB provides multiple eligibility schemes to cater to different family structures and circumstances. Buyers must qualify under at least one scheme:

### 1. Public Scheme
- Form a family nucleus with spouse and children (if any).
- Both spouses listed as co-owners.
- At least one applicant must be SC; spouse can be SC, SPR, or non-citizen.

### 2. Fiance/Fiancee Scheme
- Engaged couples who intend to marry.
- Must submit the marriage certificate to HDB within **3 months** from the date of completion of the resale transaction.
- Failure to provide the marriage certificate may result in HDB voiding the transaction.

### 3. Single Singapore Citizen Scheme
- For single SCs who are **35 years and above**.
- Must be unmarried, divorced, or widowed.
- Can purchase any resale flat type up to **5-room** (for 2-room Flexi or bigger, subject to remaining lease covering the buyer to at least age 95).
- Only SCs are eligible under this scheme — SPRs cannot apply as singles.

### 4. Joint Singles Scheme
- Two or more single SCs who are **35 years and above**.
- Both applicants must be unmarried, divorced, or widowed.
- Both must be SCs.

### 5. Non-Citizen Spouse Scheme
- SC applicant with a non-citizen spouse (not SC or SPR).
- SC applicant must be at least 21 years old.
- Only the SC applicant is listed as an owner; the non-citizen spouse is listed as an essential occupier.

### 6. Non-Citizen Family Scheme
- SC applicant with non-citizen parents or children.
- The non-citizen family members are listed as essential occupiers, not owners.

### 7. Orphans Scheme
- For orphans who are SCs and at least 21 years old.
- Must form a family nucleus with siblings.

### 8. Conversion Scheme
- For existing HDB flat owners who wish to convert their flat type (e.g., purchase a resale flat of a different type while selling their current flat).

### 9. Multi-Generation Priority Scheme
- Priority allocation for families who wish to live with or near their parents or married children.
- Families buying two resale flats in the same estate or within 4 km of each other receive priority in the queue.

## Summary for Agents

When advising clients on HDB resale eligibility:
1. Confirm citizenship status and SPR wait period (3 years).
2. Verify no private property ownership or 15-month disposal rule compliance.
3. Check EIP and SPR quota availability on the target block.
4. Identify the correct eligibility scheme based on the buyer's family situation.
5. Clarify that income ceilings only apply to grants and HDB loans, not the purchase itself.`,
      excerpt:
        "Comprehensive guide to HDB resale buying eligibility — citizenship, age, income ceiling, private property restrictions, EIP/SPR quota, and all eligibility schemes.",
      published: true,
      categoryId: categories[0].id,
      authorId: admin.id,
      tags: ["HDB", "eligibility", "resale", "buying"],
    },
    {
      title: "HDB Flat Eligibility (HFE) Letter — Everything You Need to Know",
      slug: "hdb-hfe-letter-guide",
      content: `# HDB Flat Eligibility (HFE) Letter — Everything You Need to Know

The HDB Flat Eligibility (HFE) letter is a mandatory document for anyone looking to purchase an HDB flat. Introduced on **9 May 2023**, it consolidates multiple checks into a single, streamlined process.

## What Is the HFE Letter?

The HFE letter is a comprehensive assessment issued by HDB that tells buyers three critical things in one document:

1. **Eligibility to purchase an HDB flat** — Confirms whether you qualify to buy.
2. **CPF housing grant amounts** — States the exact grant amounts you are eligible for.
3. **HDB loan amount** — If applying for an HDB concessionary loan, confirms the maximum loan quantum.

Before the HFE letter was introduced, buyers had to apply separately for eligibility, grants, and loan assessments. The HFE letter replaced this with a single unified process.

## Why Is the HFE Letter Important?

- It is **mandatory** to have a valid HFE letter before you can obtain an Option to Purchase (OTP) from an HDB resale flat seller.
- Sellers should request to see a buyer's HFE letter to verify financing capability.
- The HFE letter helps buyers understand their full budget (grants + loan + cash/CPF) before committing to a purchase.

## Step 1: Preliminary HFE Check

The first step is to apply for a **Preliminary HFE Check** through the HDB Flat Portal (My Flat > Buy a Flat).

### Key Details
- The outcome is provided **instantly** upon submission.
- It gives a preliminary assessment of eligibility, indicative grant amounts, and indicative loan amounts.
- No income documents are required at this stage — it is based on self-declared information.
- This preliminary check helps buyers understand their initial budget before spending time searching for flats.

### What You Receive
- Confirmation of whether you are preliminarily eligible.
- Indicative CPF housing grant amounts.
- Indicative HDB loan amount (if applicable).

## Step 2: Confirmed HFE Letter

After receiving the preliminary outcome, buyers proceed to apply for a **Confirmed HFE Letter**.

### Key Details
- HDB will process the confirmed HFE letter within **30 calendar days** from the date of the preliminary HFE check.
- Buyers must submit supporting documents, including income proof (payslips, tax returns, etc.).
- The confirmed HFE letter reflects **actual assessed** eligibility, grant amounts, and loan amounts — not indicative figures.

### Income Assessment
- From 9 May 2023, HDB uses a **standardised 12-month income assessment** for both HDB loan and grant eligibility.
- This applies to all income types: employment income, self-employment income, variable income, etc.

## Participating Financial Institutions (FIs)

For buyers seeking a **bank loan** instead of an HDB loan, HDB has partnered with **6 participating FIs** that are part of the HFE framework:

1. **DBS Bank / POSB**
2. **Hong Leong Finance**
3. **Maybank**
4. **OCBC Bank**
5. **Sing Investments & Finance**
6. **UOB**

### How It Works with Bank Loans
- When you apply for the HFE letter, you can simultaneously apply for an In-Principle Approval (IPA) from one or more of the 6 participating FIs.
- The IPA applications are submitted through the **HDB Flat Portal** — you do not need to approach each bank separately.
- Each participating FI will provide their IPA outcome, allowing you to compare loan offers.

## Validity Period

- The HFE letter is valid for **9 months** from the date of issue.
- If the HFE letter expires before you complete your purchase, you must apply for a new one.
- Buyers must have a **valid (non-expired) HFE letter** at the time they obtain an OTP from the seller.

## When to Apply

- Apply for the HFE letter **before** you start seriously searching for a flat.
- You do not need to have identified a specific flat before applying.
- The HFE letter tells you your budget, which helps narrow down the search.

## Common Questions

### Can I apply for an HFE letter multiple times?
Yes, you can reapply if your circumstances change (e.g., income change, change in family structure). The latest HFE letter supersedes any previous one.

### Do both buyers need to apply?
All applicants and essential occupiers listed in the flat application should be included in the HFE application.

### What if I am using a bank loan instead of HDB loan?
You still need the HFE letter for eligibility and grant assessment. The bank loan IPA can be obtained simultaneously through the HDB Flat Portal via the participating FIs.

## Tips for Agents

- Always ensure your client has a valid HFE letter before arranging viewings.
- Use the preliminary HFE check to quickly establish a client's budget range.
- Remind clients that the HFE letter is valid for only 9 months — time the application carefully.
- For bank loan clients, encourage them to apply for IPAs from multiple participating FIs through the portal to compare offers.
- The HFE letter date is critical — an expired HFE letter means the buyer cannot obtain an OTP.`,
      excerpt:
        "Complete guide to the HDB Flat Eligibility (HFE) letter — application process, validity, participating banks, and tips for agents.",
      published: true,
      categoryId: categories[0].id,
      authorId: admin.id,
      tags: ["HDB", "HFE", "eligibility", "financing"],
    },
    {
      title: "HDB Concessionary Loan — Eligibility & Terms",
      slug: "hdb-concessionary-loan",
      content: `# HDB Concessionary Loan — Eligibility & Terms

The HDB concessionary loan is a housing loan provided directly by HDB to eligible buyers. It offers a stable, government-backed interest rate and is an important alternative to bank loans for many HDB buyers.

## Interest Rate

- The HDB concessionary loan interest rate is pegged at **0.1% above the prevailing CPF Ordinary Account (OA) interest rate**.
- The CPF OA rate is currently **2.5% per annum**, making the HDB loan rate **2.6% per annum**.
- Interest is computed on a **monthly rest** basis (interest is recalculated based on the outstanding balance each month).
- Unlike bank loans, the HDB loan rate does not fluctuate with market conditions (SORA, fixed-rate packages, etc.), providing stability and predictability for borrowers.

## Interest Rate Floor for Loan Eligibility

- From **30 September 2022**, HDB uses a **3% interest rate floor** when computing the eligible loan amount.
- This means that even though the actual loan rate is 2.6%, HDB assesses affordability at 3% to build in a buffer.
- This was introduced as a prudential measure to ensure borrowers can afford repayments even if rates rise.

## Income Assessment Period

- From **9 May 2023**, HDB uses a **standardised 12-month income assessment** for determining HDB loan eligibility.
- This applies to all income types and is aligned with the HFE letter process.
- Previously, different income assessment windows were used for different income types.

## Maximum Loan-to-Value (LTV) Ratio

- The maximum LTV for an HDB concessionary loan is **75%** of the lower of the purchase price or valuation.
- Example: For a flat valued at $500,000 purchased at $520,000, the maximum loan is 75% of $500,000 = $375,000.

### Pro-Rated LTV for Shorter Leases
- If the remaining lease of the flat does not cover the youngest buyer to age 95, the LTV is **pro-rated downward**.
- Pro-ration formula: LTV = 75% x (Remaining Lease - 20) / (95 - Age of Youngest Buyer - 20)
- If the remaining lease is 20 years or less, **no HDB loan is available**.

## Maximum Repayment Period

The maximum loan repayment period is the **shortest** of the following three calculations:

1. **25 years** (absolute maximum)
2. **65 minus the age of the oldest borrower** (e.g., a 45-year-old borrower: 65 - 45 = 20 years maximum)
3. **Remaining lease of the flat minus 20 years** (e.g., flat with 60 years remaining: 60 - 20 = 40 years, but capped at 25)

This ensures the loan is fully repaid before the borrower reaches retirement age and well before the lease expires.

## Mortgage Servicing Ratio (MSR)

- Monthly loan repayment must not exceed **30% of gross monthly income** of all borrowers.
- MSR is calculated using the **3% interest rate floor** (not the actual 2.6% rate).
- MSR applies to HDB flats and Executive Condominiums purchased from developers.

## CPF OA Retention

- From **28 August 2018**, HDB loan applicants are allowed to retain up to **$20,000 in their CPF OA** when applying for an HDB loan.
- Previously, borrowers had to use almost all CPF OA savings before qualifying for the maximum loan.
- This retention provides a financial buffer for buyers.

## Income Ceiling Requirements

HDB loan eligibility is subject to income ceilings:

| Buyer Type | Income Ceiling |
|-----------|---------------|
| Families (standard) | $14,000 per month |
| Extended families | $21,000 per month |
| Singles (5-room or smaller) | $7,000 per month |

- Income refers to **gross monthly household income** of all persons listed in the flat application.
- Buyers exceeding these ceilings must take a bank loan instead.

## Second HDB Loan Rules

Buyers who have previously taken an HDB loan and are applying for a second HDB loan face additional conditions:

### Sell First, Buy Later
- If you sell your existing flat before buying the next one, standard HDB loan conditions apply (subject to eligibility).

### Buy First, Sell Later
- If you buy a new flat before selling your current one, additional restrictions apply.
- You must commit to selling your existing flat within a specified timeframe.
- The second HDB loan assessment may be stricter.

## Credit Assessment

- HDB conducts a credit assessment as part of the loan application.
- The maximum HDB loan amount is capped at **2 times** the result of the credit assessment.
- Buyers with poor credit history or existing debt obligations may receive a lower loan quantum.

## Remaining Lease Requirement

- **No HDB loan is available** for flats with **20 years or less** remaining on the lease.
- This is a hard cutoff — regardless of the buyer's age or income, HDB will not grant a loan for such flats.

## Summary: HDB Loan vs Bank Loan

| Feature | HDB Loan | Bank Loan |
|---------|----------|-----------|
| Interest Rate | 2.6% (stable) | Variable (SORA-based) or Fixed |
| LTV | 75% | 75% |
| Income Ceiling | $14K / $21K / $7K | No ceiling |
| Down Payment | 20% (all CPF) | 25% (5% cash minimum) |
| MSR | 30% | 30% |
| Rate Risk | Low | Higher |

## Tips for Agents

- For clients with income below the ceiling, the HDB loan offers stability and a lower cash requirement (no mandatory 5% cash).
- For higher-income clients or those seeking potentially lower rates, bank loans may be more suitable.
- Always compute the loan using the 3% floor rate to set realistic expectations.
- Remind clients about the $20,000 CPF OA retention option.
- Check remaining lease carefully — the pro-rated LTV can significantly reduce the loan quantum for older flats.`,
      excerpt:
        "Detailed guide to HDB concessionary loan — interest rate, LTV, MSR, income ceiling, repayment period, and comparison with bank loans.",
      published: true,
      categoryId: categories[0].id,
      authorId: admin.id,
      tags: ["HDB", "loan", "financing", "concessionary"],
    },
    {
      title: "CPF Housing Grants for HDB Resale — Complete Breakdown",
      slug: "cpf-housing-grants-hdb-resale",
      content: `# CPF Housing Grants for HDB Resale — Complete Breakdown

CPF housing grants are a significant source of financial assistance for HDB resale flat buyers. This guide covers every grant available, eligibility criteria, and conditions that apply.

## Overview of Available Grants

There are several grants available for HDB resale flat purchases:

1. **CPF Housing Grant (Families)**
2. **CPF Housing Grant (Singles)**
3. **Proximity Housing Grant (PHG)**
4. **Enhanced CPF Housing Grant (EHG)**
5. **Half-Housing Grant**
6. **Step-Up CPF Housing Grant**
7. **CPF Housing Top-Up Grant**

## 1. CPF Housing Grant (Families)

This is the primary grant for families purchasing an HDB resale flat.

### Grant Amounts

| Flat Type | SC/SC Household | SC/SPR Household |
|-----------|----------------|-----------------|
| 2-room to 4-room | $80,000 | $70,000 |
| 5-room and above | $50,000 | $40,000 |

### Eligibility
- At least one applicant must be an SC.
- Must form a family nucleus (married couple, with or without children; parent with children; etc.).
- Must not have previously received a CPF housing grant for a resale flat.
- Must meet the income ceiling (see below).

## 2. CPF Housing Grant (Singles)

For single Singapore Citizens aged 35 and above purchasing under the Single SC Scheme or Joint Singles Scheme.

### Grant Amounts

| Flat Type | Grant Amount |
|-----------|-------------|
| 2-room to 4-room | $40,000 |
| 5-room and above | $25,000 |

### Eligibility
- Must be a Singapore Citizen aged 35 and above.
- Must be single, divorced, or widowed.
- Must meet the income ceiling of $7,000 per month.

## 3. Proximity Housing Grant (PHG)

The PHG encourages families to live near their parents or married children for mutual support.

### Grant Amounts

| Buyer Type | Living with parents/children | Living within 4 km |
|-----------|---------------------------|-------------------|
| Families | $30,000 | $20,000 |
| Singles | $15,000 | $10,000 |

### Eligibility
- Applicable when buying a resale flat to live with or near parents or married children.
- "Living with" means in the same flat.
- "Living near" means within 4 km of the parents'/children's home.
- Parents or married children must own an HDB flat or private property.
- Can be combined with other grants (Families Grant, Singles Grant, EHG).

## 4. Enhanced CPF Housing Grant (EHG)

The EHG provides additional financial assistance for lower- and middle-income families, scaled according to household income.

### Grant Amounts (from 20 August 2024)

- **Families**: Up to **$120,000** (sliding scale based on income)
- **Singles**: Up to **$60,000** (sliding scale based on income)

### Income Ceiling
- **Families**: $9,000 gross monthly household income
- **Singles**: $4,500 gross monthly income

### Key Features
- The EHG amount decreases as income increases (means-tested).
- From 20 August 2024, the maximum EHG for families was increased to $120,000 (previously $80,000).
- Applicants must be first-timer buyers who have not previously owned a subsidised flat.
- Applicants must have been continuously employed for at least 12 months before the flat application.

## 5. Half-Housing Grant

For households where one buyer is a first-timer and the other is a second-timer.

### Grant Amounts

| Flat Type | Grant Amount |
|-----------|-------------|
| 2-room to 4-room | $40,000 |
| 5-room and above | $25,000 |

### Eligibility
- One applicant is a first-timer (never owned subsidised housing).
- The other applicant is a second-timer (previously owned subsidised housing).
- The grant amount is half of the Families Grant.

## 6. Step-Up CPF Housing Grant

The Step-Up Grant helps lower-income families upgrade from a 2-room Flexi flat to a 3-room resale flat.

### Grant Amount
- **$15,000**

### Eligibility
- Must be existing owners of a 2-room Flexi flat purchased from HDB.
- Must have fulfilled the MOP for the 2-room Flexi flat.
- Purchasing a 3-room resale flat.
- Gross monthly household income must not exceed $7,000.

## 7. CPF Housing Top-Up Grant

Provides additional assistance for eligible households that have experienced a decline in income.

### Eligibility
- Typically applies to families who previously purchased a subsidised flat and are now purchasing a second subsidised flat after a change in circumstances (e.g., divorce).
- Income ceiling and other conditions apply.

## Income Ceilings for Grants

| Buyer Type | Income Ceiling |
|-----------|---------------|
| Families (standard) | $14,000 per month |
| Extended families | $21,000 per month |
| Singles | $7,000 per month |
| EHG — Families | $9,000 per month |
| EHG — Singles | $4,500 per month |

## Grant Conditions

All CPF housing grants come with conditions:

- **5-year MOP**: Buyers who receive a grant must fulfil a 5-year Minimum Occupation Period.
- **No private property during MOP**: Grant recipients cannot own or acquire private property during the MOP.
- **Treated as subsidised**: If you receive a grant, the flat purchase is treated as a subsidised transaction, which affects eligibility for future housing subsidies.

## 1-Year Time Bar After Cancellation

- If a buyer cancels a resale transaction where grants were approved, there is a **1-year time bar** before they can apply for grants again.
- This discourages frivolous applications and cancellations.

## Grant Distribution (from 9 May 2023)

- From 9 May 2023, grants are shared proportionally among the **SC and SPR members** of the core nucleus (applicants and essential occupiers).
- This means grants are disbursed based on the number of SC members in the household.

## Maximum Combined Grants — Example Scenarios

### Scenario 1: First-Timer SC Couple, Income $8,000, Buying 4-Room Near Parents
- Families Grant: $80,000
- EHG: Up to $120,000 (based on income)
- PHG (within 4 km): $20,000
- **Total possible: Up to $220,000**

### Scenario 2: Single SC, 35+, Income $4,000, Buying 3-Room Near Parents
- Singles Grant: $40,000
- EHG: Up to $60,000 (based on income)
- PHG (within 4 km): $10,000
- **Total possible: Up to $110,000**

## Tips for Agents

- Always run the HFE letter to get confirmed grant amounts — do not rely on estimates.
- Grants significantly affect affordability; help clients understand their total budget including grants.
- Remind clients about the 5-year MOP condition attached to grants.
- For couples where one is a second-timer, check if the Half-Housing Grant applies.
- EHG is means-tested — a small increase in income can significantly reduce the grant amount.`,
      excerpt:
        "Complete breakdown of all CPF housing grants for HDB resale — Families Grant, Singles Grant, EHG, PHG, conditions, and maximum amounts.",
      published: true,
      categoryId: categories[0].id,
      authorId: admin.id,
      tags: ["CPF", "grants", "HDB", "resale", "financing"],
    },
    {
      title: "HDB Resale Transaction Process — Step by Step for Buyers",
      slug: "hdb-resale-transaction-process",
      content: `# HDB Resale Transaction Process — Step by Step for Buyers

This guide walks through the complete HDB resale purchase process, from the initial HFE application through to completion and key collection. The process was streamlined with the introduction of the HFE letter on 9 May 2023.

## Step 1: Apply for HFE Letter

### Step 1a: Preliminary HFE Check
- Apply through the HDB Flat Portal (My Flat > Buy a Flat).
- Outcome is provided **instantly**.
- Gives indicative eligibility, grant amounts, and loan amounts.
- No documents required — based on self-declared information.

### Step 1b: Confirmed HFE Letter
- Processed within **30 calendar days** of Step 1.
- Submit supporting income documents.
- Provides confirmed eligibility, exact grant amounts, and exact loan quantum.
- Valid for **9 months**.

## Step 2: Search for a Flat and Obtain OTP

- Search for resale flats through the HDB Resale Portal, property portals, or through your agent.
- When you find a suitable flat, negotiate with the seller.
- The seller must have registered an **Intent to Sell** on the HDB Resale Portal at least **7 days** before granting the OTP.
- The seller grants the buyer an Option to Purchase (OTP).
- The buyer must have a **valid HFE letter** at the time of obtaining the OTP.
- Option fee: Negotiable between $1 and $1,000 (typically $1,000).

## Step 3: Request for Value

- If you are using CPF funds or an HDB/bank loan, you need to obtain a valuation from HDB.
- Submit a **Request for Value** through the HDB Resale Portal.
- This can be done from the **next working day** after the OTP is granted.
- HDB will provide the assessed value (usually within a few working days).
- The valuation determines the maximum CPF usage and loan amount.

## Step 4: Obtain Letter of Offer (Bank Loan Buyers)

- If you are taking a **bank loan**, obtain a formal **Letter of Offer (LO)** from the bank.
- This should be done after you have the OTP and valuation.
- Compare offers from the 6 participating FIs if you applied through the HFE portal.
- The LO must be obtained **before** you exercise the OTP.

## Step 5: Exercise the OTP

- The buyer has **21 calendar days** from the date of the OTP to decide whether to exercise it.
- Exercising the OTP commits the buyer to the purchase.
- Once exercised, the buyer cannot withdraw without forfeiting the option fee and potentially facing additional penalties.
- If the buyer does not exercise within 21 days, the OTP lapses and the option fee is forfeited.

## Step 6: Submit Resale Application

- After exercising the OTP, the **buyer and seller** each submit their respective portions of the resale application through the HDB Resale Portal.
- Both parties must submit within the application window.

### Application Fees
- **$40** for 1-room and 2-room flats
- **$80** for 3-room and larger flats

## Step 7: HDB Acceptance

- HDB reviews the resale application to verify eligibility, valuation, grant eligibility, and financing.
- HDB will accept the application within **28 working days** if all documents are in order.
- If documents are incomplete or there are issues, HDB may request additional information, which extends the timeline.

## Step 8: Endorse Resale Documents

- After HDB accepts the application, both buyer and seller are required to **endorse the resale documents** online.
- The endorsement window is **6 calendar days**, with a possible **2-day extension** if needed.
- Documents include the lease agreement, transfer documents, and financial arrangements.
- Both parties must endorse within the window, or the transaction may be delayed or voided.

## Step 9: Pay Resale Fees Online

- After endorsement, the buyer pays the required fees online through the HDB Resale Portal.
- Fees include:
  - Conveyancing fees (if using HDB's conveyancing service)
  - Stamp duty (Buyer's Stamp Duty)
  - Registration fees
  - Any other applicable charges

## Step 10: HDB Approval

- After endorsement and fee payment, HDB issues the **approval for the resale transaction**.
- This typically takes **1 to 2 weeks** after endorsement.
- HDB approval is the formal green light for the transaction to proceed to completion.

## Step 11: Completion Appointment

- The completion appointment is scheduled approximately **8 weeks from the date of HDB acceptance** (Step 7).
- At completion:
  - The remaining purchase price is paid (via CPF, loan, and/or cash).
  - Keys are handed over from seller to buyer.
  - The lease is officially transferred to the buyer.

### What to Prepare for Completion
- **Inspect the flat** before the completion date to ensure it is in the agreed condition.
- **Fire insurance** — mandatory if you are taking an HDB loan. Arrange fire insurance before the completion appointment.
- **Home Protection Scheme (HPS)** — mandatory if using CPF to pay the mortgage. HPS provides mortgage insurance in case of death or permanent incapacity.
- **Balance payment** — ensure sufficient funds (CPF + cash) are available to cover the balance of the purchase price.

### What to Bring to the Completion Appointment
- Original NRIC (Identity Card)
- Original passport or employment pass (for SPR or non-citizen family members)
- Payment receipt for fees paid
- Fire insurance certificate (if taking HDB loan)
- Any other documents requested by HDB

## Changing the Completion Date

- If either the buyer or seller needs to change the completion date, they must write to HDB via **MyRequest@HDB** within **1 week** of the acceptance letter.
- Changes are subject to HDB's approval and are not guaranteed.
- Both parties must agree to the new date.

## Timeline Summary

| Step | Timeframe |
|------|-----------|
| Preliminary HFE | Instant |
| Confirmed HFE | Within 30 days |
| Intent to Sell (seller) | At least 7 days before OTP |
| OTP exercise period | 21 days |
| Resale application review | 28 working days |
| Document endorsement | 6 + 2 days |
| HDB approval | 1-2 weeks after endorsement |
| Completion | ~8 weeks from acceptance |

## Tips for Agents

- Guide your clients to apply for the HFE letter early — do not wait until a flat is found.
- Ensure the seller has registered Intent to Sell at least 7 days before the OTP date.
- For bank loan buyers, ensure the Letter of Offer is secured before the OTP exercise deadline.
- Remind clients about the 21-day OTP exercise window — it is strict and cannot be extended.
- Help clients prepare for completion well in advance: fire insurance, HPS, flat inspection, and fund availability.`,
      excerpt:
        "Complete step-by-step guide to the HDB resale transaction process — from HFE application to completion appointment.",
      published: true,
      categoryId: categories[0].id,
      authorId: admin.id,
      tags: ["HDB", "resale", "process", "transaction"],
    },
    {
      title: "HDB Resale FAQs — Frequently Asked Questions",
      slug: "hdb-resale-faqs",
      content: `# HDB Resale FAQs — Frequently Asked Questions

A compilation of the most frequently asked questions about HDB resale transactions, drawn from official HDB guidance and common agent queries.

## HFE Letter Questions

### Q: When should buyers apply for the HFE letter?
**A:** Buyers should apply for the HFE letter before they begin searching for a flat. The HFE letter establishes your budget (eligibility, grant amounts, and loan quantum), which helps narrow down your flat search. You do not need to have identified a specific flat before applying.

### Q: What is the validity period for the HFE letter?
**A:** The HFE letter is valid for **9 months** from the date of issue. If it expires before you complete your purchase, you must apply for a new one. You must have a valid (non-expired) HFE letter at the time you obtain the OTP from the seller.

### Q: Can I apply for the HFE letter more than once?
**A:** Yes. You can reapply if your circumstances change (e.g., change in income, marital status, or household composition). The latest HFE letter will supersede any previous one.

## Financing Questions

### Q: When must buyers have the Letter of Offer from the bank?
**A:** Buyers taking a bank loan must have the formal Letter of Offer (LO) **before exercising the OTP**. It is advisable to start the bank loan application as soon as you receive the OTP so that the LO is ready well within the 21-day exercise window.

### Q: Can I switch from an HDB loan to a bank loan (or vice versa) after the HFE letter?
**A:** You can change your loan type, but you may need to reapply for the HFE letter to reflect the new financing arrangement. Consult HDB for specific guidance on your situation.

## Transaction Timeline Questions

### Q: How long does it take for HDB to accept a resale application?
**A:** HDB processes resale applications within **28 working days** from the date both buyer and seller submit their respective portions. This timeline assumes all documents are complete and in order. Incomplete submissions will take longer.

### Q: When will a resale transaction be completed?
**A:** The completion appointment is typically scheduled approximately **8 weeks from the date of HDB acceptance**. This is the date when keys are handed over and the lease is officially transferred.

### Q: Can sellers or buyers change the completion date?
**A:** Yes. Either party can request a change to the completion date by writing to HDB via **MyRequest@HDB** within **1 week** of the acceptance letter. Changes are subject to HDB's approval and both parties must agree to the new date.

## Marriage and Eligibility Questions

### Q: When must buyers under the Fiance/Fiancee Scheme submit their marriage certificate?
**A:** Buyers who purchase under the Fiance/Fiancee Scheme must submit their marriage certificate to HDB within **3 months from the date of completion** of the resale transaction. Failure to do so may result in HDB taking action, including potentially voiding the transaction.

### Q: Can an engaged couple buy under the Public Scheme instead?
**A:** No. Engaged couples who are not yet legally married must apply under the Fiance/Fiancee Scheme. The Public Scheme requires the couple to be legally married at the time of application.

## Completion Questions

### Q: What should buyers prepare for the completion appointment?
**A:** Buyers should:
- **Inspect the flat** before the completion date to ensure it is in the agreed condition.
- Arrange **fire insurance** (mandatory if taking an HDB loan).
- Ensure **Home Protection Scheme (HPS)** coverage is in place (mandatory if using CPF for mortgage payments).
- Confirm that sufficient **CPF and/or cash funds** are available for the balance payment.
- Arrange for any necessary renovations or moving logistics to begin after key collection.

### Q: What documents should buyers bring to the completion appointment?
**A:** Buyers should bring:
- Original **NRIC** (Identity Card)
- Original **passport or employment pass** (for SPR or non-citizen family members)
- **Payment receipt** for fees already paid
- **Fire insurance certificate** (if taking an HDB loan)
- Any other documents specifically requested by HDB in the acceptance letter

## OTP Questions

### Q: What happens if I do not exercise the OTP within 21 days?
**A:** The OTP lapses and the option fee (up to $1,000) is forfeited to the seller. The buyer would need to negotiate a new OTP if they still wish to purchase the flat.

### Q: Can the OTP exercise period be extended?
**A:** No. The 21-day exercise period is fixed and cannot be extended. Buyers should ensure all financing and documentation is in order well before the deadline.

### Q: What is the maximum option fee for HDB resale?
**A:** The option fee for HDB resale is negotiable between **$1 and $1,000**. This is different from private property transactions, where the option fee is typically 1% of the purchase price.

## Seller-Related Questions

### Q: Does the seller need to register Intent to Sell before granting an OTP?
**A:** Yes. The seller must register an **Intent to Sell** on the HDB Resale Portal at least **7 days** before granting the OTP to a buyer. This is a mandatory step in the resale process.

### Q: Can a seller grant multiple OTPs simultaneously?
**A:** No. A seller can only grant one OTP at a time. If the buyer does not exercise the OTP within 21 days, the seller is free to grant a new OTP to another buyer.

## Grant-Related Questions

### Q: Will receiving a CPF housing grant affect my MOP?
**A:** Receiving a grant does not change the MOP duration (it remains 5 years). However, it does mean your purchase is treated as a subsidised transaction, which affects your eligibility for future housing subsidies and your ability to own private property during the MOP.

### Q: Can I receive grants if my income exceeds the ceiling?
**A:** No. If your gross monthly household income exceeds the applicable income ceiling ($14,000 for families, $7,000 for singles), you are not eligible for CPF housing grants. However, you can still purchase the resale flat — the income ceiling only applies to grants and HDB loans, not to the purchase itself.`,
      excerpt:
        "Frequently asked questions about HDB resale — covering HFE letter, OTP, financing, completion, grants, and more.",
      published: true,
      categoryId: categories[0].id,
      authorId: admin.id,
      tags: ["HDB", "FAQ", "resale"],
    },
    {
      title: "New Rules on CPF Usage and HDB Loans (From 10 May 2019)",
      slug: "cpf-usage-hdb-loan-rules-2019",
      content: `# New Rules on CPF Usage and HDB Loans (From 10 May 2019)

On 10 May 2019, the government introduced revised rules governing CPF usage and HDB loan eligibility for older HDB flats with shorter remaining leases. These rules were designed to ensure buyers do not overcommit CPF savings to properties that may not retain value throughout their retirement years.

## Core Principle

The fundamental rule is that **the remaining lease of the property must be sufficient to cover the buyer to at least age 95** for full CPF usage and full HDB loan entitlement. If it does not, CPF usage and the HDB loan LTV are pro-rated.

## Rule 1: Minimum 20 Years Remaining Lease

- To use **any** CPF funds for a property purchase, the remaining lease must be **more than 20 years** at the time of purchase.
- If the remaining lease is **20 years or less**, **no CPF can be used at all** — the entire purchase must be funded with cash and/or bank loans.
- Similarly, **no HDB loan is available** for flats with 20 years or less remaining lease.

## Rule 2: Full CPF Usage (100% of Valuation Limit)

- To use CPF up to the **full Valuation Limit (100% VL)**, the remaining lease must cover the **youngest buyer to age 95**.
- Example: If the youngest buyer is 30 years old, the remaining lease must be at least 95 - 30 = **65 years**.
- If this condition is met, the buyer can use CPF up to the full VL without any pro-ration.

## Rule 3: Pro-Rated CPF Usage

If the remaining lease does **not** cover the youngest buyer to age 95 but is more than 20 years, CPF usage is **pro-rated** according to the following formula:

### Pro-Ration Formula

**CPF Usage Limit = Valuation Limit x (Remaining Lease - 20) / (95 - Age of Youngest Buyer - 20)**

This formula calculates what proportion of the VL the buyer can use based on how much of the useful lease (beyond the 20-year minimum) is available relative to the buyer's remaining years to age 95.

### Example Calculation 1

- **Flat remaining lease**: 50 years
- **Youngest buyer age**: 30
- **Calculation**: (50 - 20) / (95 - 30 - 20) = 30 / 45 = 66.7%
- **Result**: Buyer can use up to 66.7% of the VL in CPF funds.

### Example Calculation 2

- **Flat remaining lease**: 40 years
- **Youngest buyer age**: 45
- **Calculation**: (40 - 20) / (95 - 45 - 20) = 20 / 30 = 66.7%
- **Result**: Buyer can use up to 66.7% of the VL in CPF funds.

### Example Calculation 3

- **Flat remaining lease**: 35 years
- **Youngest buyer age**: 55
- **Calculation**: (35 - 20) / (95 - 55 - 20) = 15 / 20 = 75%
- **Result**: Buyer can use up to 75% of the VL in CPF funds.

## Rule 4: Pro-Rated HDB Loan LTV

The same pro-ration logic applies to the **HDB loan LTV ratio**:

- Base LTV for HDB loan is **75%**.
- If the remaining lease covers the youngest buyer to age 95, the full 75% LTV applies.
- If not, the LTV is pro-rated:

**Pro-Rated LTV = 75% x (Remaining Lease - 20) / (95 - Age of Youngest Buyer - 20)**

### Example

- **Flat remaining lease**: 50 years
- **Youngest buyer age**: 30
- **Pro-Rated LTV**: 75% x (50 - 20) / (95 - 30 - 20) = 75% x 66.7% = **50%**
- The maximum HDB loan is 50% of the lower of purchase price or valuation, instead of the usual 75%.

## Impact on Older Flats

These rules have significant implications for older flats:

- **Flats with 60+ years remaining**: Most buyers will qualify for full CPF usage and full LTV, since buyers aged 35 and under need 60 years (95 - 35 = 60).
- **Flats with 40-60 years remaining**: Pro-ration kicks in for younger buyers, reducing CPF usage and loan quantum.
- **Flats with 20-40 years remaining**: Significant pro-ration for most buyers; only older buyers may get close to full usage.
- **Flats with 20 years or less remaining**: No CPF, no HDB loan — cash or bank loan only.

## CPF Housing Usage Calculator

CPF provides an online calculator to help buyers determine their exact CPF usage limits:

**https://www.cpf.gov.sg/member/tools-and-services/calculators/cpf-housing-usage**

Agents should encourage clients to use this tool before committing to a purchase, especially for older flats.

## Practical Implications for Agents

1. **Always check the remaining lease** — this is now one of the most critical data points for any HDB resale transaction involving older flats.
2. **Calculate the pro-ration early** — clients need to understand how much CPF they can use and how much cash they need.
3. **Advise on buyer age strategy** — adding a younger buyer can extend the lease coverage and increase CPF usage and LTV. However, all buyers must genuinely intend to occupy the flat.
4. **Older flats are not necessarily bad investments** — but buyers need to understand the financing constraints and plan accordingly.
5. **Cash-rich buyers have an advantage** — for older flats with limited CPF usage, cash-rich buyers face fewer constraints.

## Key Dates

- **10 May 2019**: Rules on CPF usage and remaining lease took effect.
- **30 September 2022**: 3% interest rate floor introduced for HDB loan eligibility computation.
- **9 May 2023**: HFE letter introduced, standardising the 12-month income assessment.

## Summary Table

| Remaining Lease | CPF Usage | HDB Loan |
|----------------|-----------|----------|
| Covers youngest buyer to 95 | Full (100% VL) | Full (75% LTV) |
| > 20 years but < covers to 95 | Pro-rated | Pro-rated |
| 20 years or less | None | Not available |`,
      excerpt:
        "Guide to the 2019 CPF usage and HDB loan rules — remaining lease requirements, pro-ration formula, and impact on older flats.",
      published: true,
      categoryId: categories[0].id,
      authorId: admin.id,
      tags: ["CPF", "HDB", "loan", "regulations"],
    },

    // =========================================================================
    // NEW CONDO RESALE ARTICLES
    // =========================================================================
    {
      title: "Private Property CPF Usage Rules",
      slug: "private-property-cpf-usage-rules",
      content: `# Private Property CPF Usage Rules

CPF usage for private property purchases is governed by the Private Properties Scheme (PPS), which was introduced in 1981. The rules differ from HDB purchases in several important ways, particularly around the Valuation Limit, Withdrawal Limit, and retirement sum requirements.

## Private Properties Scheme (PPS) Overview

The PPS allows CPF members to use their Ordinary Account (OA) savings to purchase private residential properties, including:

- Condominiums and apartments
- Landed properties (terrace, semi-detached, bungalows)
- Executive Condominiums (after MOP, treated as private)

## Remaining Lease Requirement

- **Cannot use CPF** for any private property with a remaining lease of **less than 20 years** at the time of purchase.
- This is the same threshold as HDB flats — the 20-year minimum is universal across all property types.

## Valuation Limit (VL) and Withdrawal Limit (WL)

### Valuation Limit (VL)
- The VL is the **lower of the purchase price or the valuation** of the property at the time of purchase.
- CPF OA funds can be used up to the VL without additional conditions (subject to the retirement sum requirements below).

### Withdrawal Limit (WL)
- The WL is set at **120% of the Valuation Limit**.
- For bank loans, CPF usage can extend beyond the VL up to the WL, but only if the buyer has set aside the required retirement sum.
- The additional 20% (from VL to WL) provides a buffer for mortgage payments over time.

### What Happens After Reaching the WL?
- Once CPF usage reaches the WL, **no further CPF can be used** for mortgage payments on that property.
- Subsequent mortgage payments must be made entirely in **cash**.
- This is an important planning consideration for long-term mortgage commitments.

## Retirement Sum Requirements

### Buyers Below Age 55

For CPF members below age 55, the retirement sum requirement for using CPF beyond the VL is:

- Must have set aside the **Basic Retirement Sum (BRS)** across their **OA and Special Account (SA) combined**.
- The BRS for 2026 is **$110,200**.
- If the combined OA + SA balance (after deducting the CPF used for housing up to VL) meets the BRS, the member can continue using CPF up to the WL.
- If the BRS is not met, CPF usage is capped at the VL.

### Buyers Age 55 and Above

For CPF members aged 55 and above:

- Must have set aside the **BRS in their Retirement Account (RA)** plus the remaining required amount in OA.
- The RA is created at age 55 by combining SA and OA funds.
- Only OA funds **above** the required retirement savings can be used for housing.

## Multiple Property Rules

If the buyer already owns one or more properties, additional CPF rules apply:

### If Existing Property Covers Buyer to Age 95
- Must set aside the **Basic Retirement Sum (BRS)** — $110,200 in 2026.
- CPF usage is allowed for the new property after setting aside BRS.

### If Existing Property Does NOT Cover Buyer to Age 95
- Must set aside the **Full Retirement Sum (FRS)** — $220,400 in 2026.
- This higher requirement reflects the greater retirement risk when the existing property lease may not last through retirement.

## Grace Period for Selling Existing Property

When a buyer purchases a new property and needs to sell an existing one:

- There is a **6-month grace period** from the date of **completion or TOP (Temporary Occupation Permit)** of the new property.
- During this period, the buyer is not penalised for owning two properties simultaneously.
- The existing property must be sold within this grace period to avoid the multiple property CPF restrictions becoming permanent.

## Pro-Rated CPF Usage for Shorter Leases

Similar to HDB, CPF usage for private property is pro-rated if the remaining lease does not cover the youngest buyer to age 95:

**CPF Usage Limit = VL x (Remaining Lease - 20) / (95 - Age of Youngest Buyer - 20)**

This applies equally to condominiums, apartments, and other private properties with leasehold tenure.

## Freehold Properties

- Freehold properties are treated as having a remaining lease of **999 years** (or effectively infinite).
- There is no pro-ration for freehold properties — the full VL and WL apply.
- This makes freehold properties more attractive from a CPF usage perspective, especially for older buyers.

## CPF Accrued Interest

When selling a private property purchased with CPF:

- The CPF principal used plus **accrued interest at 2.5% per annum** must be refunded to the CPF OA.
- This refund comes from the sale proceeds.
- If sale proceeds are insufficient to cover the CPF refund, the shortfall is absorbed (no cash top-up required).
- Accrued interest can be substantial for properties held over many years.

## Practical Tips for Agents

1. **Check CPF OA balance and retirement sums early** — this determines how much CPF the client can deploy.
2. **Understand the VL vs WL distinction** — clients relying heavily on CPF for monthly payments need to know when they will hit the WL.
3. **For older leasehold condos**, calculate the pro-ration carefully — a 60-year lease condo may significantly limit CPF usage for younger buyers.
4. **Freehold vs leasehold** has real financial implications beyond just resale value — CPF usage flexibility is a practical consideration.
5. **For clients with multiple properties**, check whether BRS or FRS applies — this can significantly reduce available CPF for the new purchase.
6. **The 6-month grace period** is important for clients doing a sell-and-buy or buy-and-sell — time the transactions carefully.`,
      excerpt:
        "Comprehensive guide to CPF usage rules for private property — VL, WL, retirement sum requirements, pro-ration, and multiple property rules.",
      published: true,
      categoryId: categories[1].id,
      authorId: admin.id,
      tags: ["CPF", "private property", "financing"],
    },
    {
      title: "Condo Resale FAQs",
      slug: "condo-resale-faqs",
      content: `# Condo Resale FAQs

Frequently asked questions about purchasing resale condominiums and private properties in Singapore. This guide covers CPF usage, stamp duty, financing, and common transaction queries.

## CPF Usage Questions

### Q: Can I use CPF to buy a resale condo?
**A:** Yes. Under the Private Properties Scheme (PPS), you can use CPF Ordinary Account (OA) funds to purchase private residential property, including resale condominiums. However, the remaining lease must be more than 20 years, and usage is subject to the Valuation Limit (VL) and Withdrawal Limit (WL = 120% of VL).

### Q: What is the difference between VL and WL for private property CPF usage?
**A:** The Valuation Limit (VL) is the lower of the purchase price or valuation. You can use CPF up to the VL without additional conditions. The Withdrawal Limit (WL) is 120% of the VL — you can use CPF between the VL and WL only if you have set aside the Basic Retirement Sum (BRS) in your CPF accounts. Beyond the WL, no further CPF can be used.

### Q: Can I use CPF to buy a leasehold condo with only 50 years left on the lease?
**A:** Yes, but the amount of CPF you can use will be **pro-rated**. The pro-ration formula is: CPF Usage = VL x (Remaining Lease - 20) / (95 - Age of Youngest Buyer - 20). For example, a 35-year-old buyer purchasing a condo with 50 years remaining lease can use up to VL x (50-20)/(95-35-20) = VL x 75%.

### Q: What happens when I reach the Withdrawal Limit?
**A:** Once your total CPF usage for a property reaches the WL (120% of VL), you can no longer use CPF for that property. All subsequent mortgage payments must be made in cash. This typically happens after many years of using CPF for monthly mortgage payments.

### Q: Do I need to refund CPF when I sell my condo?
**A:** Yes. When you sell a property purchased with CPF, you must refund the CPF principal used plus accrued interest (2.5% per annum) back to your CPF OA. This refund comes from the sale proceeds. If the proceeds are insufficient, the shortfall is absorbed.

## Stamp Duty Questions

### Q: What stamp duty do I pay when buying a resale condo?
**A:** You pay **Buyer's Stamp Duty (BSD)** on all property purchases. The rates are:
- First $180,000: 1%
- Next $180,000: 2%
- Next $640,000: 3%
- Next $500,000: 4%
- Next $1,500,000: 5%
- Amount exceeding $3,000,000: 6%

If this is not your first property, **Additional Buyer's Stamp Duty (ABSD)** also applies.

### Q: What are the current ABSD rates for condo purchases?
**A:** Current ABSD rates:
- SC 1st property: 0%
- SC 2nd property: 20%
- SC 3rd and subsequent: 30%
- SPR 1st property: 5%
- SPR 2nd and subsequent: 30%
- Foreigners (all properties): 60%

### Q: When must stamp duty be paid?
**A:** BSD and ABSD must be paid within **14 days** of signing the Sale & Purchase Agreement (or exercising the Option to Purchase). Late payment incurs penalties.

### Q: Is Seller's Stamp Duty (SSD) applicable?
**A:** SSD applies if the seller disposes of the property within the holding period:
- Sold within 1 year of purchase: 12%
- Sold within 2 years: 8%
- Sold within 3 years: 4%
- Sold after 3 years: No SSD

## Financing Questions

### Q: What is the maximum LTV for a condo purchase?
**A:** For the first housing loan, the maximum LTV is **75%** (if loan tenure does not exceed 30 years and does not extend past the borrower's age 65). If either condition is exceeded, LTV drops to **55%**. For a second outstanding housing loan, LTV is **45%** (or 25% if tenure/age conditions are exceeded).

### Q: Does MSR apply to condo purchases?
**A:** **No.** The Mortgage Servicing Ratio (MSR) of 30% applies only to HDB flats and Executive Condominiums purchased from developers. For private resale condos, only the **Total Debt Servicing Ratio (TDSR) of 55%** applies.

### Q: What is the minimum cash down payment for a condo?
**A:** For the first housing loan, the minimum cash component is **5%** of the purchase price (out of the 25% down payment). The remaining 20% can be paid with CPF OA funds. For a second housing loan, the minimum cash component is **25%**.

## Transaction Process Questions

### Q: How long does a typical condo resale transaction take?
**A:** From signing the OTP to completion, a typical condo resale transaction takes approximately **10 to 12 weeks**. The buyer has 14 days to exercise the OTP, followed by 8-12 weeks for conveyancing and completion.

### Q: Do I need a lawyer for a condo resale purchase?
**A:** Yes. Both the buyer and seller must engage their own lawyers for a private property transaction. The lawyer handles title searches, legal due diligence, loan documentation, stamp duty filing, and the transfer of title.

### Q: What is the option fee for a condo resale?
**A:** The option fee for private property is typically **1% of the purchase price**. This is paid when the OTP is granted. An additional **4%** (exercise fee) is paid when the OTP is exercised, bringing the total deposit to 5%.

### Q: Can the seller back out after granting the OTP?
**A:** Once the OTP is granted and the option fee is paid, the seller is legally bound by the terms of the OTP. If the seller backs out, they must return the option fee and may be liable for damages. The buyer, on the other hand, can choose not to exercise the OTP, forfeiting only the option fee.`,
      excerpt:
        "Frequently asked questions about condo resale purchases — CPF usage, stamp duty, financing, and transaction process.",
      published: true,
      categoryId: categories[1].id,
      authorId: admin.id,
      tags: ["condo", "FAQ", "resale"],
    },

    // =========================================================================
    // NEW LAUNCHES ARTICLE
    // =========================================================================
    {
      title: "New Launch FAQs — Common Questions",
      slug: "new-launch-faqs",
      content: `# New Launch FAQs — Common Questions

Frequently asked questions about purchasing new launch properties from developers in Singapore. This guide covers the booking process, progressive payment, CPF usage, and other common queries.

## Booking Process Questions

### Q: How does the balloting process work for new launches?
**A:** For popular new launches, developers conduct a balloting process. Interested buyers register their interest (usually with a cheque for the booking fee). A ballot is conducted to determine the order in which buyers can select their units. Those with lower ballot numbers get to choose first. Note that having a ballot number does not guarantee a unit — it depends on availability when your number is called.

### Q: What happens at the booking appointment?
**A:** At the booking appointment, you select your preferred unit from the available options, sign the booking form, and pay the booking fee (typically 5% of the purchase price for private properties, or $2,000-$5,000 for Executive Condominiums). You will then receive the Sale & Purchase Agreement (S&P) within 3 weeks.

### Q: How long do I have to sign the S&P Agreement?
**A:** You must sign the S&P Agreement within **3 weeks** of the booking date (or within 9 weeks if buying an EC from a developer). If you fail to sign within this period, the booking may be cancelled, and the developer may forfeit a portion of your booking fee.

### Q: Can I cancel after booking?
**A:** You can choose not to sign the S&P Agreement, but you will forfeit **25%** of the booking fee (for private properties). Once the S&P is signed, cancellation terms are governed by the agreement and the Housing Developers (Control and Licensing) Act.

## Progressive Payment Questions

### Q: What is the progressive payment scheme?
**A:** The progressive payment scheme allows buyers to pay for the property in stages as construction progresses. Instead of paying the full amount upfront, payments are triggered at specific construction milestones. This scheme is the standard payment method for new launches in Singapore.

### Q: What are the progressive payment stages?
**A:** The standard progressive payment stages are:
- **Booking fee**: 5%
- **S&P signing (within 8 weeks)**: 15% (total 20%)
- **Foundation**: 10% (total 30%)
- **Reinforced concrete framework**: 10% (total 40%)
- **Partition walls**: 5% (total 45%)
- **Ceiling/roofing**: 5% (total 50%)
- **Electrical wiring/plumbing**: 5% (total 55%)
- **Car park/roads/drains**: 5% (total 60%)
- **Building facade**: 10% (total 70%)
- **TOP (Temporary Occupation Permit)**: 25% (total 95%)
- **CSC (Certificate of Statutory Completion)**: 5% (total 100%)

### Q: Can I use CPF for progressive payments?
**A:** Yes. You can use CPF OA funds for each progressive payment stage as they become due. The CPF usage is subject to the standard Valuation Limit, Withdrawal Limit, and retirement sum requirements applicable to private property purchases.

### Q: Is there an alternative to progressive payment?
**A:** Some developers offer a **deferred payment scheme (DPS)**, where a larger portion of the payment is deferred to a later date (usually TOP). DPS may involve a price premium (typically 2-3% higher than the progressive payment price). Note that DPS is subject to regulatory restrictions and may not always be available.

### Q: When does my mortgage start?
**A:** For progressive payment, your mortgage disbursement follows the construction milestones. The bank releases funds progressively as each stage is completed, and you start paying interest on the disbursed amount. Full mortgage payments begin after the final disbursement (typically at TOP or CSC).

## Financing Questions

### Q: What are the ABSD implications for new launches?
**A:** ABSD applies to new launch purchases just as it does to resale:
- SC 1st property: 0%
- SC 2nd property: 20%
- SC 3rd+: 30%
- SPR 1st property: 5%
- SPR 2nd+: 30%
- Foreigners: 60%

Developers also pay ABSD on unsold units (35% for non-remission, subject to remission if units are sold within the qualifying period).

### Q: Can I take an HDB loan for an Executive Condominium (EC)?
**A:** No. HDB loans are not available for EC purchases. EC buyers must take a bank loan. However, MSR (30% of gross monthly income) applies to EC purchases from developers.

### Q: What is the income ceiling for EC purchases?
**A:** The income ceiling for EC purchases is **$16,000** gross monthly household income. This is higher than the HDB BTO ceiling ($14,000) but is still a restriction. There is no income ceiling for private condo purchases.

## Defects and Handover Questions

### Q: What is the defect liability period?
**A:** The defect liability period (DLP) is typically **12 months from the date of TOP** (or the date of vacant possession for landed properties). During this period, the developer is responsible for rectifying any defects in workmanship or materials at no cost to the buyer.

### Q: What should I check at the unit inspection?
**A:** At the defects inspection, check for:
- Cracks in walls, ceilings, and floors
- Alignment of doors, windows, and cabinets
- Functionality of electrical outlets, switches, and lighting
- Plumbing — water pressure, drainage, leaks
- Paintwork — uneven coats, marks, drips
- Tiling — alignment, grouting, hollow tiles (tap test)
- Air-conditioning functionality
- Balcony waterproofing

Engage a professional defect inspector if you are unsure — the cost is typically $300-$500 and is well worth it.

### Q: When can I start renovating?
**A:** You can start renovations after receiving the keys at TOP. However, you must comply with the management corporation's renovation guidelines, which typically include:
- Permitted renovation hours (usually weekdays 9am-5pm)
- Approval for hacking or structural works
- Security deposit for renovation
- Maximum renovation period (usually 3 months)

## Tips for Agents Handling New Launches

1. **Know the project thoroughly** — floor plans, pricing, site plan, surrounding developments, and future URA Master Plan changes.
2. **Prepare clients financially** — ensure IPA, ABSD calculations, and TDSR/MSR compliance before balloting day.
3. **Be present at balloting** — guide clients through unit selection under time pressure.
4. **Explain the progressive payment schedule** — clients need to understand cash flow requirements over 3-5 years of construction.
5. **Highlight the defect liability period** — buyers should conduct thorough inspections within the DLP.`,
      excerpt:
        "Frequently asked questions about new launch property purchases — booking, progressive payment, CPF, financing, and defects.",
      published: true,
      categoryId: categories[2].id,
      authorId: admin.id,
      tags: ["new launch", "FAQ", "developer"],
    },

    // =========================================================================
    // RENTAL ARTICLE
    // =========================================================================
    {
      title: "Rental FAQs — Common Questions for Agents",
      slug: "rental-faqs",
      content: `# Rental FAQs — Common Questions for Agents

A comprehensive set of frequently asked questions about rental transactions in Singapore, covering regulations, stamp duty, subletting rules, and practical agent guidance.

## Rental Regulations

### Q: What is the minimum rental period for HDB flats?
**A:** The minimum rental period for HDB flats is **3 months** (previously 6 months; reduced in 2023). This applies to both whole-unit rentals and room rentals. The landlord must obtain HDB's approval before renting out the flat.

### Q: What is the minimum rental period for private properties?
**A:** For private residential properties (condos, apartments, landed), the minimum rental period is **3 months** under URA regulations. Leases shorter than 3 months are considered short-term rentals and require specific approval, which is generally not granted for residential properties.

### Q: Do landlords need approval to rent out their HDB flat?
**A:** Yes. HDB flat owners must apply for and obtain **HDB's approval** before renting out their flat (whether whole unit or individual rooms). The application is done through the HDB portal. Conditions include:
- MOP must be fulfilled (for whole-unit rental)
- Owner must be a Singapore Citizen or SPR
- Tenant must hold a valid pass (for foreigners)
- Maximum occupancy limits must be observed (total number of tenants varies by flat type)

### Q: Can foreigners rent HDB flats?
**A:** Yes, foreigners can rent HDB flats, but they must hold a valid employment pass, S pass, work permit, student pass, long-term visit pass, or dependant's pass. The landlord must verify the tenant's pass validity and include the pass details in the HDB rental application.

### Q: What is the maximum number of tenants allowed in an HDB flat?
**A:** The maximum number of tenants depends on the flat type:
- 1-room / 2-room: 4 persons
- 3-room: 6 persons
- 4-room: 6 persons
- 5-room and larger: 9 persons
- These limits include all occupants (owners and tenants combined for room rentals).

## Stamp Duty on Rental

### Q: Is stamp duty payable on rental agreements?
**A:** Yes. **Tenancy stamp duty** is payable on all rental agreements. The tenant is typically responsible for payment (unless otherwise agreed in the tenancy agreement).

### Q: How is rental stamp duty calculated?
**A:** Rental stamp duty is calculated as follows:
- For leases of **4 years or less**: **0.4% of the total rent** for the lease period.
- For leases **exceeding 4 years**: Higher rates apply (rare for residential leases).
- Example: Monthly rent $3,000, 2-year lease. Total rent = $3,000 x 24 = $72,000. Stamp duty = 0.4% x $72,000 = **$288**.

### Q: When must rental stamp duty be paid?
**A:** Stamp duty must be paid within **14 days** of signing the tenancy agreement (if signed in Singapore). Late payment incurs penalties:
- Up to 3 months late: $10 or the duty amount (whichever is higher)
- 3-6 months late: 2x the duty amount
- More than 6 months late: 4x the duty amount

### Q: Who is responsible for paying the stamp duty?
**A:** By market convention, the **tenant** pays the stamp duty for the tenancy agreement. However, this can be negotiated and should be explicitly stated in the tenancy agreement. For renewals or new agreements, stamp duty is payable again.

## Subletting Rules

### Q: Can HDB flat owners sublet individual rooms?
**A:** Yes. HDB flat owners can sublet individual bedrooms, subject to conditions:
- Must obtain HDB's approval before subletting.
- Owner must continue to physically reside in the flat.
- Maximum occupancy limits must be observed.
- MOP does not need to be completed for room subletting (unlike whole-unit rental).
- Non-citizen occupancy quotas (EIP/SPR quotas) apply.

### Q: Can HDB tenants sublet to others?
**A:** No. HDB tenants (those renting the whole unit) are **not allowed to sublet** to other parties. Only the registered flat owner can rent out rooms or the entire flat.

### Q: Can condo owners sublet their units?
**A:** Yes. Private property owners can rent out their units without government approval (unlike HDB). However, they must comply with:
- The minimum 3-month lease period (URA regulation).
- Any restrictions in the condominium's by-laws (some condos restrict short-term rentals).
- Tax obligations — rental income is taxable and must be declared to IRAS.

### Q: Can condo tenants sublet?
**A:** Only if the tenancy agreement explicitly permits it. Most standard tenancy agreements prohibit subletting without the landlord's prior written consent.

## Practical Agent Questions

### Q: What is the standard commission structure for rentals?
**A:** The standard market practice is:
- **2-year lease**: 1 month's rent commission (typically split 50/50 if co-broking)
- **1-year lease**: Half month's rent commission
- **Renewal**: Typically half month's rent (payable by landlord's agent from the landlord)
- Commission is usually paid by the landlord to the landlord's agent, and by the tenant to the tenant's agent.

### Q: What should a tenancy agreement include?
**A:** A comprehensive tenancy agreement should include:
- Names and details of landlord and tenant
- Property address and description
- Monthly rent amount and payment date
- Lease period (start and end date)
- Security deposit amount and conditions for return
- Utility payment responsibilities
- Maintenance and repair responsibilities
- Diplomatic clause (if applicable)
- Early termination clause and conditions
- Renewal terms and rent escalation
- Inventory list of furniture and fittings
- Pet policy
- Guest and visitor policies (especially for condos)

### Q: What is a diplomatic clause?
**A:** A diplomatic clause allows the tenant to terminate the lease early if they are transferred out of Singapore by their employer, or if their employment pass is cancelled. Standard terms:
- Can only be exercised **after 12 months** (for a 2-year lease) or **after 6 months** (for a 1-year lease, if included).
- Tenant must give **2 months' written notice**.
- Security deposit is returned (less any legitimate deductions).
- Without a diplomatic clause, early termination may result in forfeiture of the entire security deposit.

### Q: What happens at the end of the lease?
**A:** At lease end:
- Tenant returns the property in its original condition (fair wear and tear accepted).
- Landlord conducts a joint inspection with the tenant.
- Deductions are made from the security deposit for any damages beyond fair wear and tear, or unpaid rent/utilities.
- The remaining security deposit is returned to the tenant (typically within 7-14 days of handing back keys).
- If the tenant wishes to renew, a new tenancy agreement is signed (with new stamp duty payable).`,
      excerpt:
        "Frequently asked questions about rental transactions — regulations, stamp duty, subletting rules, commission, and tenancy agreements.",
      published: true,
      categoryId: categories[4].id,
      authorId: admin.id,
      tags: ["rental", "FAQ", "tenancy"],
    },

    // =========================================================================
    // LANDED ARTICLE
    // =========================================================================
    {
      title: "Landed Property FAQs",
      slug: "landed-property-faqs",
      content: `# Landed Property FAQs

Frequently asked questions about purchasing landed property in Singapore, covering eligibility, construction loans, CPF usage, and other considerations unique to landed homes.

## Eligibility Questions

### Q: Can Permanent Residents (PRs) buy landed property in Singapore?
**A:** PRs can buy landed property, but they must obtain approval from the **Land Dealings Approval Unit (LDAU)** under the Singapore Land Authority (SLA). Approval is granted under the Residential Property Act and typically requires the PR to demonstrate that they have made significant economic contribution to Singapore. The process can take several months and approval is not guaranteed.

### Q: Can foreigners buy landed property?
**A:** Generally, foreigners **cannot buy landed property** in Singapore. The Residential Property Act restricts landed property ownership to Singapore Citizens and approved PRs. The only exception is **Sentosa Cove**, where foreigners can purchase landed property with approval from the LDAU.

### Q: Are there restrictions on buying Good Class Bungalows (GCBs)?
**A:** Yes. GCBs are located in 39 gazetted GCB areas and are restricted to **Singapore Citizens only**. PRs (even with LDAU approval for other landed property) cannot purchase GCBs. The minimum land area for a GCB is **1,400 square metres**.

### Q: Can I buy a landed property through a company?
**A:** Generally, companies (including those fully owned by Singapore Citizens) need LDAU approval to purchase landed property. There are specific conditions and exceptions, and legal advice should be sought for such arrangements.

## Construction Loan Questions

### Q: What is a construction loan for landed property?
**A:** A construction loan is used when building a new house on a plot of land or when undertaking major reconstruction (Additions & Alterations, or A&A) on an existing landed property. Instead of receiving the full loan amount upfront, the bank disburses funds progressively as construction milestones are reached, similar to the progressive payment scheme for new launches.

### Q: How does a construction loan differ from a standard mortgage?
**A:** Key differences:
- **Disbursement**: Progressive (in stages) rather than a lump sum.
- **Interest during construction**: You pay interest only on the disbursed amount during the construction period.
- **Valuation**: The bank may value the property based on the projected completed value, not just the current land value.
- **Timeline**: Construction loans have a construction period (typically 12-24 months) followed by a standard mortgage term.
- **Draw-down schedule**: Tied to construction milestones certified by the architect or quantity surveyor.

### Q: Can I use CPF for a construction loan?
**A:** Yes, CPF OA funds can be used for construction loans on landed property, subject to:
- The property must have a remaining lease of more than 20 years (for leasehold land).
- Freehold land has no lease restriction.
- Standard VL and WL limits apply.
- CPF can be drawn down progressively as construction stages are completed.
- Retirement sum (BRS) must be set aside if applicable.

### Q: What is the typical LTV for a construction loan?
**A:** The LTV for a construction loan follows the same rules as standard property loans:
- First housing loan: up to **75% LTV** (subject to loan tenure and age conditions).
- The loan quantum is based on the **total development cost** (land price + construction cost) or the **projected completed value**, whichever is lower, depending on the bank's policy.

## CPF Usage for Landed Property

### Q: Can I use CPF to buy a freehold landed property?
**A:** Yes. CPF OA funds can be used for freehold landed property purchases. Since freehold properties have no lease expiry concern, there is no pro-ration of CPF usage. The standard VL, WL, and retirement sum requirements apply.

### Q: Can I use CPF to buy a leasehold landed property?
**A:** Yes, provided the remaining lease is more than 20 years. If the remaining lease does not cover the youngest buyer to age 95, CPF usage is pro-rated using the standard formula:
CPF Usage = VL x (Remaining Lease - 20) / (95 - Age of Youngest Buyer - 20).

### Q: Can I use CPF for renovation of a landed property?
**A:** **No.** CPF cannot be used for renovation, furnishing, or interior design works. CPF can only be used for the purchase of the property (including land), construction costs (via a construction loan), stamp duty, and legal fees directly related to the purchase.

## Other Common Questions

### Q: What additional costs should I budget for when buying landed property?
**A:** Beyond the purchase price, budget for:
- **Buyer's Stamp Duty (BSD)** and **ABSD** (if applicable).
- **Legal fees**: Typically higher than for condos due to more complex conveyancing.
- **Property tax**: Landed properties generally have higher annual values, leading to higher property tax.
- **Land survey fees**: Required to verify the exact boundaries of the land.
- **Structural inspection fees**: Highly recommended for older properties to assess the building's condition.
- **Renovation and rebuilding costs**: Often substantial — landed properties may require significant works.
- **Regular maintenance**: Unlike condos, there is no management corporation — the owner is responsible for all external maintenance (roof, drainage, fencing, garden, pest control, etc.).

### Q: How is property tax calculated for landed properties?
**A:** Property tax is based on the **Annual Value (AV)** of the property, which is the estimated gross annual rent the property can fetch. Tax rates:
- **Owner-occupied**: Progressive rates from 0% (first $8,000 of AV) up to 32% (for AV exceeding $130,000).
- **Non-owner-occupied**: Progressive rates from 12% to 36%.
- Landed properties typically have higher AVs than condos, resulting in higher property tax.

### Q: What is the process for rebuilding or major A&A on a landed property?
**A:** The process involves:
1. Engage an architect to design the new building or A&A works.
2. Submit plans to **BCA** (Building and Construction Authority) and **URA** for approval.
3. Obtain a **planning permission** from URA (if required).
4. Engage a contractor and obtain a **building permit** from BCA.
5. Arrange financing (construction loan if needed).
6. Construction period (typically 12-24 months for rebuilds).
7. Obtain **Temporary Occupation Permit (TOP)** from BCA.
8. Obtain **Certificate of Statutory Completion (CSC)** from BCA (typically 6-12 months after TOP).

### Q: What zoning checks should I do before buying landed property?
**A:** Before purchasing, verify:
- **URA Master Plan zoning**: Confirms the land is zoned for residential use and specifies the Gross Plot Ratio (GPR) and building height limits.
- **Road reserve lines**: Check if any part of the land is affected by future road widening plans.
- **Conservation status**: Some landed properties are gazetted for conservation, which restricts modifications.
- **Drainage reserve**: Check for drainage easements that may affect usable land area.
- **Surrounding developments**: Review the Master Plan for future developments nearby that could affect the property's value or liveability.

## Tips for Agents Handling Landed Transactions

1. **Verify eligibility early** — confirm citizenship status and LDAU requirements for PRs before proceeding.
2. **Recommend professional inspections** — structural engineers, surveyors, and pest inspectors are essential for older landed properties.
3. **Understand rebuilding potential** — many buyers purchase old landed properties for the land, intending to rebuild. Help clients assess the GPR and building height limits.
4. **Factor in total cost of ownership** — landed properties have ongoing maintenance costs that condo owners do not face.
5. **Check for encumbrances** — easements, caveats, and road reserves can significantly affect the property's usability and value.`,
      excerpt:
        "Frequently asked questions about landed property — eligibility, construction loans, CPF usage, costs, and zoning considerations.",
      published: true,
      categoryId: categories[3].id,
      authorId: admin.id,
      tags: ["landed", "FAQ", "purchase"],
    },
  ]

  for (const article of articles) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: {},
      create: article,
    })
  }

  console.log("Created articles:", articles.length)

  // Create dictionary entries
  const dictionaryEntries = [
    // =========================================================================
    // EXISTING DICTIONARY ENTRIES
    // =========================================================================
    {
      term: "MOP",
      slug: "mop",
      definition: "Minimum Occupation Period",
      explanation:
        "The mandatory period (usually 5 years) during which HDB flat owners must physically occupy their flat before selling or renting out the entire unit.",
      examples:
        "A BTO flat owner who collects keys in January 2024 can only sell the flat on the open market after January 2029.",
      relatedTerms: ["BTO", "HDB Resale"],
      category: "HDB",
    },
    {
      term: "CPF Usage",
      slug: "cpf-usage",
      definition: "Central Provident Fund usage for property",
      explanation:
        "CPF Ordinary Account funds can be used for property down payments, monthly mortgage installments, and stamp duties, subject to valuation limits and withdrawal limits.",
      examples:
        "A buyer can use CPF OA to pay the 25% down payment for an HDB flat. For private property, usage is capped at 120% of the Valuation Limit.",
      relatedTerms: ["Valuation Limit", "Accrued Interest", "BRS"],
      category: "Financing",
    },
    {
      term: "Stamp Duty",
      slug: "stamp-duty",
      definition: "Tax levied on property transaction documents",
      explanation:
        "Buyer's Stamp Duty (BSD) is payable on all property purchases. Additional Buyer's Stamp Duty (ABSD) applies based on citizenship and number of properties owned. Seller's Stamp Duty (SSD) may apply if selling within the holding period.",
      examples:
        "BSD for a $1M property: First $180k at 1%, next $180k at 2%, next $640k at 3% = $24,600. ABSD for a Singapore Citizen buying their 2nd property = 20%.",
      relatedTerms: ["BSD", "ABSD", "SSD"],
      category: "Tax",
    },
    {
      term: "Loan to Value (LTV)",
      slug: "ltv",
      definition: "Maximum loan amount as a percentage of property value",
      explanation:
        "LTV ratio determines the maximum loan a buyer can obtain. For the first housing loan, LTV is typically 75% (or 55% if loan tenure exceeds 30 years or extends past age 65). Second and subsequent property loans have lower LTV limits.",
      examples:
        "For a $1M property with 75% LTV, maximum loan = $750,000. Buyer needs $250,000 (minimum 5% cash, rest can be CPF).",
      relatedTerms: ["TDSR", "MSR", "Mortgage"],
      category: "Financing",
    },
    {
      term: "TDSR",
      slug: "tdsr",
      definition: "Total Debt Servicing Ratio",
      explanation:
        "TDSR limits total monthly debt obligations (including the new mortgage) to 55% of gross monthly income. This applies to all property loans from financial institutions.",
      examples:
        "If gross monthly income is $10,000, total monthly debt payments (all loans) cannot exceed $5,500.",
      relatedTerms: ["MSR", "LTV", "Mortgage"],
      category: "Financing",
    },
    {
      term: "MSR",
      slug: "msr",
      definition: "Mortgage Servicing Ratio",
      explanation:
        "MSR limits monthly mortgage payments to 30% of gross monthly income. Applies only to HDB flats and Executive Condominiums (ECs) purchased from developers.",
      examples:
        "If gross monthly income is $10,000, monthly mortgage payment for an HDB flat cannot exceed $3,000.",
      relatedTerms: ["TDSR", "HDB", "EC"],
      category: "Financing",
    },
    {
      term: "OTP",
      slug: "otp",
      definition: "Option to Purchase",
      explanation:
        "A legal document that gives a potential buyer the exclusive right to purchase a property within a specified period (usually 14 days for private, 21 days for HDB). An option fee (typically 1% for private) is paid to secure the OTP.",
      examples:
        "Buyer pays $10,000 option fee (1%) for a $1M condo and has 14 days to exercise the option or forfeit the fee.",
      relatedTerms: ["Exercise", "Conveyancing", "S&P Agreement"],
      category: "Transaction",
    },
    {
      term: "ABSD",
      slug: "absd",
      definition: "Additional Buyer's Stamp Duty",
      explanation:
        "An additional tax on top of BSD for certain property purchases. Rates vary by citizenship and number of properties. Singapore Citizens pay 0% on 1st property, 20% on 2nd, 30% on 3rd+. PRs pay 5% on 1st, 30% on 2nd+. Foreigners pay 60% on all.",
      examples:
        "A PR buying their 2nd property at $1.5M pays ABSD of $450,000 (30%).",
      relatedTerms: ["BSD", "Stamp Duty", "SSD"],
      category: "Tax",
    },

    // =========================================================================
    // NEW DICTIONARY ENTRIES
    // =========================================================================
    {
      term: "HFE",
      slug: "hfe",
      definition: "HDB Flat Eligibility Letter",
      explanation:
        "Introduced on 9 May 2023, the HFE letter consolidates eligibility assessment, CPF housing grant amounts, and HDB loan amounts into a single document. Buyers must have a valid HFE letter before obtaining an OTP for an HDB resale flat. The letter is valid for 9 months.",
      examples:
        "A couple planning to buy an HDB resale flat applies for the HFE letter through the HDB Flat Portal. The preliminary check gives instant results, and the confirmed letter is issued within 30 days.",
      relatedTerms: ["OTP", "HDB", "CPF Housing Grant"],
      category: "HDB",
    },
    {
      term: "VL",
      slug: "vl",
      definition: "Valuation Limit",
      explanation:
        "The Valuation Limit is the lower of the purchase price or the property's valuation at the time of purchase. For HDB flats, CPF can be used up to the full VL. For private property, CPF usage up to the VL does not require setting aside the Basic Retirement Sum. Beyond the VL (up to the WL), the BRS must be set aside.",
      examples:
        "A condo is purchased at $1.2M but valued at $1.1M. The VL is $1.1M. The buyer can use CPF up to $1.1M without needing to set aside BRS. Beyond $1.1M and up to the WL ($1.32M), BRS must be set aside.",
      relatedTerms: ["WL", "CPF Usage", "BRS"],
      category: "Financing",
    },
    {
      term: "WL",
      slug: "wl",
      definition: "Withdrawal Limit (120% of Valuation Limit)",
      explanation:
        "The Withdrawal Limit is set at 120% of the Valuation Limit. It represents the maximum amount of CPF that can be used for a property purchase. To use CPF between the VL and WL, the buyer must have set aside the Basic Retirement Sum. Beyond the WL, no further CPF can be used and all payments must be in cash.",
      examples:
        "For a property with a VL of $1M, the WL is $1.2M. Once the buyer has used $1.2M of CPF (principal) for this property, no further CPF withdrawals are allowed for mortgage payments.",
      relatedTerms: ["VL", "CPF Usage", "BRS"],
      category: "Financing",
    },
    {
      term: "BRS",
      slug: "brs",
      definition: "Basic Retirement Sum ($110,200 in 2026)",
      explanation:
        "The Basic Retirement Sum is the minimum amount CPF members need to set aside in their Retirement Account at age 55 to receive monthly payouts in retirement. For property purchases, members using CPF beyond the Valuation Limit must have set aside the BRS. The BRS is adjusted annually for inflation.",
      examples:
        "A 50-year-old buyer wants to use CPF beyond the VL for a condo purchase. They must ensure their combined OA + SA balance (excluding the CPF used for housing up to VL) meets the BRS of $110,200.",
      relatedTerms: ["FRS", "ERS", "CPF Usage", "VL"],
      category: "Financing",
    },
    {
      term: "FRS",
      slug: "frs",
      definition: "Full Retirement Sum ($220,400 in 2026)",
      explanation:
        "The Full Retirement Sum is twice the Basic Retirement Sum. CPF members who own a property that does not cover them to age 95 must set aside the FRS (instead of the BRS) before using additional CPF for a new property purchase. The FRS provides higher monthly payouts in retirement.",
      examples:
        "A buyer who owns a leasehold condo with only 40 years remaining lease (which does not cover them to 95) must set aside the FRS of $220,400 before using CPF for a second property purchase.",
      relatedTerms: ["BRS", "ERS", "CPF Usage"],
      category: "Financing",
    },
    {
      term: "ERS",
      slug: "ers",
      definition: "Enhanced Retirement Sum ($440,800 in 2026)",
      explanation:
        "The Enhanced Retirement Sum is four times the Basic Retirement Sum. CPF members can voluntarily top up their Retirement Account to the ERS to receive higher monthly payouts in retirement. The ERS is not a mandatory requirement for property transactions but represents the maximum amount that can be set aside in the RA.",
      examples:
        "A retiree who wants the highest possible CPF LIFE monthly payouts can top up their RA to the ERS of $440,800.",
      relatedTerms: ["BRS", "FRS", "CPF Usage"],
      category: "Financing",
    },
    {
      term: "EHG",
      slug: "ehg",
      definition: "Enhanced CPF Housing Grant (up to $120K for families)",
      explanation:
        "The Enhanced CPF Housing Grant provides additional financial assistance for lower- and middle-income first-timer buyers of HDB resale flats. The grant amount is means-tested and scales with income. From 20 August 2024, the maximum EHG for families was increased to $120,000 (up to $60,000 for singles). The income ceiling is $9,000 for families and $4,500 for singles.",
      examples:
        "A first-timer SC couple with a gross monthly household income of $5,000 buying a 4-room resale flat may receive the full EHG of $120,000 on top of the Families Grant of $80,000.",
      relatedTerms: ["PHG", "CPF Housing Grant", "HDB"],
      category: "HDB",
    },
    {
      term: "PHG",
      slug: "phg",
      definition: "Proximity Housing Grant",
      explanation:
        "The Proximity Housing Grant encourages families to live with or near their parents or married children. Families receive $30,000 (living together) or $20,000 (within 4 km). Singles receive $15,000 (living together) or $10,000 (within 4 km). Can be combined with other grants.",
      examples:
        "A young couple buying a resale flat within 4 km of their parents' HDB flat qualifies for a PHG of $20,000, in addition to the Families Grant and EHG.",
      relatedTerms: ["EHG", "CPF Housing Grant", "HDB"],
      category: "HDB",
    },
    {
      term: "HPS",
      slug: "hps",
      definition: "Home Protection Scheme",
      explanation:
        "The Home Protection Scheme is a mortgage insurance scheme administered by CPF Board. It is mandatory for HDB flat owners who use CPF to pay their housing loan. HPS ensures that the outstanding housing loan is covered in the event of the owner's death or permanent incapacity, so the family does not lose the home.",
      examples:
        "A couple buying an HDB resale flat using CPF for their monthly mortgage payments must be enrolled in HPS. If one owner passes away, HPS pays off the outstanding loan balance.",
      relatedTerms: ["CPF Usage", "HDB", "Mortgage"],
      category: "HDB",
    },
    {
      term: "EIP",
      slug: "eip",
      definition: "Ethnic Integration Policy",
      explanation:
        "The Ethnic Integration Policy was introduced in 1989 to ensure a balanced ethnic mix in HDB estates and prevent the formation of ethnic enclaves. Each HDB block and neighbourhood has maximum proportions for each ethnic group (Chinese, Malay, Indian/Others). Buyers can only purchase a flat if their ethnic group has not exceeded the quota.",
      examples:
        "A Malay family wishes to buy a resale flat in a particular block, but the Malay quota for that block has been reached. They must look for a flat in a different block or neighbourhood where the quota is not full.",
      relatedTerms: ["HDB", "SPR Quota"],
      category: "HDB",
    },
    {
      term: "COV",
      slug: "cov",
      definition: "Cash Over Valuation",
      explanation:
        "Cash Over Valuation is the difference between the agreed purchase price and the HDB-assessed valuation of the flat. COV must be paid entirely in cash — CPF and housing loans cannot be used for this portion. COV is common in the HDB resale market when market prices exceed valuations.",
      examples:
        "A flat is valued by HDB at $500,000 but the buyer agrees to purchase it at $530,000. The COV is $30,000, which must be paid in cash by the buyer.",
      relatedTerms: ["HDB", "Valuation", "VL"],
      category: "HDB",
    },
    {
      term: "IPA",
      slug: "ipa",
      definition: "In-Principle Approval",
      explanation:
        "An In-Principle Approval is a preliminary indication from a bank or HDB that a buyer is eligible for a housing loan up to a stated amount. An IPA is not a binding commitment — the final loan offer (Letter of Offer) is issued after the bank conducts full due diligence. IPAs are typically valid for 30 days to 3 months.",
      examples:
        "A buyer obtains an IPA from DBS for a loan of up to $800,000 at 3.5% interest rate. With this IPA in hand, the buyer can confidently search for properties within their budget.",
      relatedTerms: ["LO", "HFE", "Mortgage"],
      category: "Financing",
    },
    {
      term: "LO",
      slug: "lo",
      definition: "Letter of Offer",
      explanation:
        "The Letter of Offer is a formal document from a bank confirming the approved housing loan amount, interest rate, loan tenure, and other terms. Unlike the IPA, the LO is a binding commitment from the bank. For HDB resale, the LO must be obtained before exercising the OTP.",
      examples:
        "After exercising due diligence, OCBC issues a Letter of Offer to the buyer for a $600,000 loan at a fixed rate of 3.2% for 2 years, followed by a floating rate pegged to SORA.",
      relatedTerms: ["IPA", "OTP", "Mortgage"],
      category: "Financing",
    },
    {
      term: "SSD",
      slug: "ssd",
      definition: "Seller's Stamp Duty",
      explanation:
        "Seller's Stamp Duty is a tax imposed on property sellers who dispose of their property within a specified holding period. For residential properties: 12% if sold within 1 year, 8% within 2 years, 4% within 3 years, and 0% after 3 years. SSD is designed to discourage short-term speculative flipping.",
      examples:
        "An investor buys a condo for $1.5M and sells it 18 months later. SSD of 8% applies: $1.5M x 8% = $120,000 in SSD payable to IRAS.",
      relatedTerms: ["BSD", "ABSD", "Stamp Duty"],
      category: "Tax",
    },
    {
      term: "TOP",
      slug: "top",
      definition: "Temporary Occupation Permit",
      explanation:
        "The Temporary Occupation Permit is issued by the Building and Construction Authority (BCA) when a newly constructed building is deemed safe for occupation, even though not all works may be fully completed. For new launch buyers, TOP is a major milestone — it is when keys are collected and the 25% progressive payment is triggered. The property can be occupied from the TOP date.",
      examples:
        "A new condo development receives its TOP in March 2026. Buyers can collect their keys and move in, even though minor landscaping works and the swimming pool may still be under completion.",
      relatedTerms: ["CSC", "Progressive Payment", "New Launch"],
      category: "Transaction",
    },
    {
      term: "CSC",
      slug: "csc",
      definition: "Certificate of Statutory Completion",
      explanation:
        "The Certificate of Statutory Completion is issued by BCA when all building works are fully completed and comply with the approved building plans. CSC is typically issued 6-12 months after TOP. For new launch buyers, the final 5% progressive payment is triggered at CSC. The property is considered fully completed after CSC.",
      examples:
        "A development that received TOP in March 2026 obtains its CSC in December 2026 after all common areas, facilities, and landscaping are completed. The final 5% payment is due from buyers.",
      relatedTerms: ["TOP", "Progressive Payment", "New Launch"],
      category: "Transaction",
    },
    {
      term: "BTO",
      slug: "bto",
      definition: "Build-To-Order",
      explanation:
        "Build-To-Order is HDB's primary mode of selling new flats. Flats are launched for sale before construction begins, and are only built when a sufficient number of applications are received. BTO flats are sold at subsidised prices and come with eligibility conditions including income ceilings and MOP requirements. BTO projects typically take 3-5 years from launch to key collection.",
      examples:
        "HDB launches a BTO project in Tengah with 1,000 units. Eligible applicants ballot for a queue number. Successful applicants select their flat and pay a deposit, with key collection expected in 4 years.",
      relatedTerms: ["MOP", "HDB", "HFE"],
      category: "HDB",
    },
    {
      term: "EC",
      slug: "ec",
      definition: "Executive Condominium",
      explanation:
        "Executive Condominiums are a hybrid public-private housing type developed by private developers but sold with conditions similar to HDB flats. ECs have income ceilings ($16,000), MOP (5 years), and MSR requirements. After MOP, ECs can be sold to SCs and SPRs. After 10 years, ECs are fully privatised and can be sold to foreigners. ECs offer condo facilities at a lower price point than fully private condos.",
      examples:
        "A couple earning a combined $15,000/month buys an EC from a developer at $1.1M. They must fulfil a 5-year MOP. After 10 years, the EC is fully privatised and can be sold to anyone, including foreigners.",
      relatedTerms: ["HDB", "MOP", "MSR", "BTO"],
      category: "HDB",
    },
    {
      term: "PPS",
      slug: "pps",
      definition: "Private Properties Scheme",
      explanation:
        "The Private Properties Scheme, introduced in 1981, allows CPF members to use their OA savings to purchase private residential properties. Under PPS, CPF usage is subject to the Valuation Limit (VL) and Withdrawal Limit (WL = 120% of VL). Retirement sum requirements (BRS or FRS) must be met for usage beyond the VL.",
      examples:
        "Under the PPS, a buyer uses $500,000 from CPF OA to purchase a $1.2M condo. The VL is $1.1M (valuation), so the buyer can continue using CPF for mortgage payments up to the WL of $1.32M.",
      relatedTerms: ["PHS", "VL", "WL", "CPF Usage"],
      category: "Financing",
    },
    {
      term: "PHS",
      slug: "phs",
      definition: "Public Housing Scheme",
      explanation:
        "The Public Housing Scheme allows CPF members to use their OA savings to purchase HDB flats. Under PHS, there is no Valuation Limit — CPF can be used for the full purchase price of the HDB flat. This is more generous than the Private Properties Scheme (PPS), reflecting the government's support for public housing ownership.",
      examples:
        "Under PHS, a buyer purchasing a $450,000 HDB resale flat can use CPF OA funds for the full amount without being restricted by a VL or WL.",
      relatedTerms: ["PPS", "CPF Usage", "HDB"],
      category: "HDB",
    },
  ]

  for (const entry of dictionaryEntries) {
    await prisma.dictionaryEntry.upsert({
      where: { slug: entry.slug },
      update: {},
      create: entry,
    })
  }

  console.log("Created dictionary entries:", dictionaryEntries.length)

  // Create calculators
  const calculators = [
    {
      name: "Mortgage Calculator",
      slug: "mortgage",
      description:
        "Calculate monthly mortgage payments, total interest, and amortization schedule.",
      type: "mortgage",
      config: {
        defaultRate: 3.5,
        defaultTenure: 25,
        maxTenure: 35,
      },
    },
    {
      name: "Stamp Duty Calculator",
      slug: "stamp-duty",
      description:
        "Calculate Buyer's Stamp Duty (BSD) and Additional Buyer's Stamp Duty (ABSD).",
      type: "stamp_duty",
      config: {
        bsdRates: [
          { threshold: 180000, rate: 0.01 },
          { threshold: 360000, rate: 0.02 },
          { threshold: 1000000, rate: 0.03 },
          { threshold: 1500000, rate: 0.04 },
          { threshold: 3000000, rate: 0.05 },
          { threshold: Infinity, rate: 0.06 },
        ],
      },
    },
    {
      name: "Loan Affordability Calculator",
      slug: "affordability",
      description:
        "Calculate maximum loan amount based on income, TDSR, and MSR requirements.",
      type: "affordability",
      config: {
        tdsrLimit: 0.55,
        msrLimit: 0.3,
        stressTestRate: 4.0,
      },
    },
  ]

  for (const calc of calculators) {
    await prisma.calculator.upsert({
      where: { slug: calc.slug },
      update: {},
      create: calc,
    })
  }

  console.log("Created calculators:", calculators.length)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
