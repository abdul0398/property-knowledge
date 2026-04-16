export const categoryInfo = {
  name: "Rental",
  description:
    "Rental market regulations, tenancy agreements, and landlord-tenant rights.",
  icon: "Key",
}

export const sections = [
  {
    title: "Rental Agreement Essentials",
    content: `**Standard Lease Terms:**
- **Lease Period:** Minimum 3 months for HDB and private
- **Security Deposit:** Usually 1 month (1-year lease) or 2 months (2-year lease)
- **Advance Rent:** 1 month in advance
- **Diplomatic Clause:** Allows early termination (usually after 12 months with 2 months' notice)

**Landlord's Responsibilities:**
1. Ensure property is habitable
2. Maintain structural elements
3. Pay property tax
4. Handle major repairs (unless tenant-caused)
5. Return security deposit (less legitimate deductions)

**Tenant's Responsibilities:**
1. Pay rent on time
2. Maintain property in good condition
3. Not sublet without permission
4. Return property in original condition (fair wear and tear accepted)`,
  },
  {
    title: "Stamp Duty for Rental",
    content: `**Rate:** 0.4% of total rent for leases ≤ 4 years.

**Example:** Monthly rent $3,000, 2-year lease.
Total rent = $3,000 x 24 = $72,000
Stamp duty = 0.4% x $72,000 = **$288**

**Payment deadline:** Within **14 days** of signing (if signed in Singapore).

**Late penalties:**
- Up to 3 months late: $10 or the duty amount (whichever higher)
- 3-6 months late: 2x the duty amount
- More than 6 months late: 4x the duty amount

**Who pays:** By market convention, the **tenant** pays. Can be negotiated. For renewals, stamp duty is payable again.`,
  },
  {
    title: "HDB Rental Regulations",
    content: `**Approval Required:** HDB flat owners must apply for and obtain HDB's approval before renting out.

**Conditions:**
- MOP must be fulfilled (for whole-unit rental)
- Owner must be SC or SPR
- Tenant must hold a valid pass (for foreigners)
- Maximum occupancy limits must be observed

**Maximum Tenants by Flat Type:**
| Flat Type | Max Persons |
|-----------|------------|
| 1-room / 2-room | 4 |
| 3-room | 6 |
| 4-room | 6 |
| 5-room and larger | 9 |

These include all occupants (owners + tenants for room rentals).

**Foreigners Renting HDB:** Must hold valid employment pass, S pass, work permit, student pass, long-term visit pass, or dependant's pass. Landlord must verify and include pass details in HDB application.

**Minimum Lease Period:** 3 months (reduced from 6 months in 2023) for both whole-unit and room rentals.`,
  },
  {
    title: "Subletting Rules",
    content: `**HDB Room Subletting:**
- Must obtain HDB approval
- Owner must continue to physically reside in the flat
- Maximum occupancy limits apply
- MOP does NOT need to be completed for room subletting
- EIP/SPR quotas apply

**HDB Tenants:** Cannot sublet to others. Only registered flat owner can rent out.

**Private Property (Condo):**
- No government approval needed
- Must comply with minimum 3-month lease (URA)
- Check condo by-laws for restrictions
- Rental income is taxable (declare to IRAS)

**Condo Tenants:** Can sublet only if tenancy agreement explicitly permits it. Most prohibit subletting without landlord's written consent.`,
  },
  {
    title: "Commission Structure & Tenancy Agreement",
    content: `**Standard Commission:**
- **2-year lease:** 1 month's rent (split 50/50 if co-broking)
- **1-year lease:** Half month's rent
- **Renewal:** Half month's rent (from landlord)
- Commission paid by landlord to landlord's agent, tenant to tenant's agent

**Comprehensive Tenancy Agreement Should Include:**
- Names/details of landlord and tenant
- Property address and description
- Monthly rent and payment date
- Lease period (start and end)
- Security deposit amount and return conditions
- Utility payment responsibilities
- Maintenance and repair responsibilities
- Diplomatic clause (if applicable)
- Early termination clause
- Renewal terms and rent escalation
- Inventory list of furniture/fittings
- Pet policy
- Guest and visitor policies

**Diplomatic Clause:**
- Allows early termination if transferred out of Singapore or employment pass cancelled
- Can only be exercised after **12 months** (2-year lease) or **6 months** (1-year lease)
- Tenant must give **2 months' written notice**
- Security deposit returned (less deductions)

**End of Lease:**
- Tenant returns property in original condition (fair wear and tear accepted)
- Joint inspection with landlord
- Deductions from security deposit for damages
- Remaining deposit returned within 7-14 days of key handback`,
  },
]

export const faqs = [
  {
    question: "What is the minimum rental period for HDB flats?",
    answer:
      "**3 months** (reduced from 6 months in 2023). Applies to both whole-unit and room rentals. Landlord must obtain HDB's approval before renting.",
  },
  {
    question: "What is the minimum rental period for private properties?",
    answer:
      "**3 months** under URA regulations. Leases shorter than 3 months are considered short-term rentals and require specific approval, which is generally not granted for residential properties.",
  },
  {
    question: "Do landlords need approval to rent out their HDB flat?",
    answer:
      "Yes. Must apply through the HDB portal. Conditions: MOP fulfilled (for whole-unit), owner must be SC/SPR, tenant must hold valid pass, and occupancy limits observed.",
  },
  {
    question: "Can foreigners rent HDB flats?",
    answer:
      "Yes, with valid employment pass, S pass, work permit, student pass, long-term visit pass, or dependant's pass. Landlord must verify pass validity and include details in HDB rental application.",
  },
  {
    question: "What is the maximum number of tenants in an HDB flat?",
    answer:
      "1-2 room: 4 persons, 3-room: 6, 4-room: 6, 5-room+: 9. Includes all occupants (owners and tenants combined for room rentals).",
  },
  {
    question: "Is stamp duty payable on rental agreements?",
    answer:
      "Yes. **0.4% of total rent** for leases ≤ 4 years. Typically paid by the tenant within 14 days of signing.",
  },
  {
    question: "How is rental stamp duty calculated?",
    answer:
      "0.4% of total rent for the lease period. Example: $3,000/month x 24 months = $72,000 total rent. Stamp duty = 0.4% x $72,000 = **$288**.",
  },
  {
    question: "Can HDB flat owners sublet individual rooms?",
    answer:
      "Yes, with HDB approval. Owner must continue residing in the flat. MOP does NOT need to be completed for room subletting. Occupancy limits and EIP/SPR quotas apply.",
  },
  {
    question: "Can HDB tenants sublet to others?",
    answer:
      "No. Only the registered flat owner can rent out rooms or the entire flat. HDB tenants cannot sublet.",
  },
  {
    question: "Can condo owners sublet their units?",
    answer:
      "Yes, without government approval. Must comply with minimum 3-month lease (URA) and condo by-laws. Rental income is taxable.",
  },
  {
    question: "What is the standard commission for rentals?",
    answer:
      "2-year lease: 1 month's rent (50/50 co-broking). 1-year lease: half month's rent. Renewal: half month's rent. Landlord pays landlord's agent, tenant pays tenant's agent.",
  },
  {
    question: "What is a diplomatic clause?",
    answer:
      "Allows early termination if tenant is transferred out of Singapore or employment pass cancelled. Exercisable after **12 months** (2-year lease) with **2 months' written notice**. Security deposit returned less deductions.",
  },
  {
    question: "What happens at the end of the lease?",
    answer:
      "Tenant returns property in original condition (fair wear and tear accepted). Joint inspection. Deductions from security deposit for damages. Remaining deposit returned within 7-14 days.",
  },
]
