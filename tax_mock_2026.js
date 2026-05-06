const taxMock2026 = [
  // ─── Q1 ───────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Mia bought a house for €250,000 on 1 June 2020. She lived in it until 1 June 2022 when she let it out " +
      "to a third party. On 1 June 2025, she sold the house for €200,000. Mia has no other chargeable gains " +
      "in 2025 and has no allowable capital losses carried forward from previous tax years.\n\n" +
      "Calculate the allowable capital loss (if any) that Mia can carry forward to 2026 and use against future capital gains.",
    options: {
      A: "There is no capital loss available to carry forward to 2026",
      B: "A loss of €50,000 is available to carry forward to 2026",
      C: "A loss of €30,000 is available to carry forward to 2026",
      D: "A loss of €20,000 is available to carry forward to 2026",
    },
    correctAnswer: "D",
    explanation:
      "Proceeds €200,000 less cost €250,000 = loss of €50,000.\n" +
      "PPR exempt portion: (2 years lived in + 1 year deemed) / 5 years total × €50,000 = €30,000.\n" +
      "Allowable loss = €50,000 − €30,000 = €20,000.",
  },

  // ─── Q2 ───────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Molly Malone is a self-employed graphic designer and prepares her annual accounts to 31 December each year. " +
      "On 23 April 2025, she sold a printer for €1,750 to a third party. The printer originally cost €4,000 and had " +
      "a tax written down value (TWDV) of €1,000 on 1 January 2025.\n\n" +
      "Calculate the balancing allowance/charge, if any, on the sale of the printer on 23 April 2025.",
    options: {
      A: "There is no balancing allowance or charge on the sale of the printer",
      B: "Balancing allowance of €750",
      C: "Balancing charge of €750",
      D: "Balancing charge of €1,750",
    },
    correctAnswer: "A",
    explanation:
      "No balancing charge applies in respect of the printer as the sales proceeds are less than €2,000 " +
      "and the disposal is not to a connected person.",
  },

  // ─── Q3 ───────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 1,
    questionText:
      "Monica has just started working as a trainee accountant for Oak Limited ('OAK'). OAK has an accounting year end " +
      "of 31 August 2025. Monica has asked you for advice regarding the filing of OAK's corporation tax return.\n\n" +
      "Advise Monica of the latest date by which OAK's corporation tax return (Form CT1) for the year ended " +
      "31 August 2025 must be filed. OAK files all its tax returns on ROS.",
    options: {
      A: "23 May 2026",
      B: "23 August 2026",
      C: "23 September 2026",
      D: "23 November 2026",
    },
    correctAnswer: "A",
    explanation:
      "The CT1 must be filed within 9 months of the accounting year end. For a 31 August 2025 year end, " +
      "filing via ROS is due by 23 May 2026.",
  },

  // ─── Q4 ───────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Rose has three children in third-level education in 2025, two undertaking full-time courses and one in " +
      "part-time education. Relevant details including student fees paid by Rose for 2025 are as follows:\n\n" +
      "• Ian  – Full-time: Student Contribution €3,000, Tuition Fees Nil\n" +
      "• Poppy – Full-time: Student Contribution €3,000, Tuition Fees €9,000\n" +
      "• David – Part-time: Student Contribution €1,500, Tuition Fees €2,500\n\n" +
      "Note: In all cases the fees are paid for an approved course to an approved college.\n\n" +
      "Calculate, in respect of the third-level fees paid by Rose, the income tax credit she can claim for 2025. " +
      "Your answer should be entered as a positive value.",
    correctAnswer: 2200,
    tolerance: 0,
    explanation:
      "Disregard first €3,000. Max relief per full-time student = €7,000; max per part-time = €3,500.\n" +
      "Ian: €3,000 (all disallowed by €3,000 threshold) = €0\n" +
      "Poppy: €3,000 + €9,000 = €12,000 − €3,000 threshold = €9,000, capped at €7,000\n" +
      "David: €1,500 + €2,500 = €4,000 − €0 (threshold already used) = €4,000, capped at €3,500 … \n" +
      "Total allowable = €0 + €7,000 + €4,000 = €11,000 × 20% = €2,200.",
  },

  // ─── Q5 ───────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Where a capital disposal is at arm's length, the consideration, in money terms, is normally accepted for " +
      "CGT purposes. However, market value is deemed to be the consideration for the purpose of determining " +
      "the chargeable gain/loss between connected persons.\n\n" +
      "Identify which of the following are deemed to be connected persons for CGT purposes.\n\nSelect ALL that apply.",
    options: {
      A: "Business partners",
      B: "Cousins",
      C: "Parents of spouse",
      D: "A company where a person has control of the company",
      E: "Lineal descendants",
    },
    correctAnswer: ["A", "C", "D", "E"],
    explanation:
      "Cousins are not connected persons for CGT purposes. Connected persons include business partners, " +
      "parents of a spouse, a company controlled by the person, and lineal descendants.",
  },

  // ─── Q6 ───────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Under the cash receipts basis of accounting for VAT, persons do not become liable for VAT until they " +
      "have actually received payment for the goods or services supplied.\n\n" +
      "Identify, in relation to the cash receipts basis of accounting for VAT, the correct statements from the following.\n\nSelect ALL that apply.",
    options: {
      A: "The cash receipts basis does not apply to transactions between connected persons",
      B: "An accountable person who opts for the cash receipts basis of accounting is liable for VAT at the VAT rate ruling at the time the supply is made rather than the VAT rate ruling at the time payment is received",
      C: "The cash receipts basis of accounting only applies to VAT on sales. VAT on purchases is still claimed on an invoice basis",
      D: "The cash receipts basis of accounting for VAT may be used by persons engaged in the supply of taxable goods or services if at least 75% of the supplies are to unregistered persons or the trader's turnover is not likely to exceed €2.1 million per annum",
    },
    correctAnswer: ["A", "B", "C"],
    explanation:
      "Statements A, B and C are all correct. Statement D is incorrect — the threshold is €2.5 million " +
      "(not €2.1 million) under Finance Act 2024.",
  },

  // ─── Q7 ───────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Juno Limited ('JUNO') is a company which is engaged in the distribution of chilled foods and has a history " +
      "of being very successful. In 2025, JUNO's largest customer went into liquidation. This led to a significant " +
      "bad debt write-off in JUNO's 2025 accounts.\n\n" +
      "Results for recent periods, as adjusted for tax purposes, are as follows:\n" +
      "• Year-end 31/03/2024 (12 months) – Case I Profit: €30,000\n" +
      "• Period end 31/12/2024 (9 months) – Case I Profit: €20,000\n" +
      "• Year-end 31/12/2025 (12 months) – Case I Loss: (€60,000)\n\n" +
      "Calculate the corporation tax payable by JUNO for the year ended 31 March 2024.",
    options: {
      A: "NIL",
      B: "€938",
      C: "€3,750",
      D: "€2,813",
    },
    correctAnswer: "D",
    explanation:
      "Trading loss of €60,000 arises in 2025. S396A: carry back to 31/12/2024 (9 months) = €20,000 used; " +
      "then carry back 3/12 of year ended 31/03/2024 = €7,500. Net Case I for year ended 31/03/2024 = " +
      "€30,000 − €7,500 = €22,500 × 12.5% = €2,813.",
  },

  // ─── Q8 ───────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Sam Daly is a married man who owns and operates a digital marketing agency as a sole trader in Dublin. " +
      "His accounts for the year ended 31 December 2025 show a tax-adjusted profit of €47,000. Sam has capital " +
      "allowances for 2025 of €6,000. He received net interest of €420 (gross amount is €627) on his Credit Union " +
      "share account.\n\n" +
      "His wife, Michelle Daly, is employed by the local vet and her gross salary for 2025 was €30,000. She received " +
      "net bank deposit interest of €630 (gross amount is €940) in 2025. The Dalys are jointly assessed.\n\n" +
      "Calculate the PRSI payable by the Dalys to be included in their income tax return in 2025. " +
      "You should assume a weighted average PRSI rate of 4.125% for 2025. " +
      "The answer should be rounded to the nearest whole number. The answer should be entered as a positive value.",
    correctAnswer: 1756,
    tolerance: 0,
    explanation:
      "Michelle: PRSI on deposit interest only: €940 × 4.125% = €39.\n" +
      "Sam: Case I (€47,000 − €6,000 = €41,000) + Case IV €627 = €41,627 × 4.125% = €1,717.\n" +
      "Total PRSI = €1,717 + €39 = €1,756.",
  },

  // ─── Q9 ───────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Stephen sold an antique bracelet in 2025 that had been in his family for generations. He inherited this " +
      "antique bracelet from his grandmother on her death in 2008. The value of the antique bracelet at the time " +
      "of his grandmother's death was €2,550. His grandmother had inherited it from her father on 1 May 1989, " +
      "when it was valued at €800. Stephen sold the antique bracelet for €1,350 in 2025.\n\n" +
      "Calculate the allowable capital loss, if any, arising on the sale of the antique bracelet in 2025 that will " +
      "be available for Stephen to carry forward into 2026. " +
      "The answer should be rounded to the nearest whole number. The answer should be entered as a positive value.",
    correctAnswer: 10,
    tolerance: 0,
    explanation:
      "Stephen's base cost is €2,550 (value at date of inheritance in 2008).\n" +
      "Actual loss = €1,350 − €2,550 = −€1,200.\n" +
      "Non-wasting chattel: proceeds (€1,350) < €2,540 floor, so deemed proceeds = €2,540.\n" +
      "Allowable loss = €2,540 − €2,550 = −€10.",
  },

  // ─── Q10 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Section 268 TCA 1997 contains a clear definition of what is meant by an industrial building.\n\n" +
      "Identify, in relation to industrial buildings and industrial building allowances, the correct statements " +
      "from the following.\n\nSelect ALL that apply.",
    options: {
      A: "An example of an industrial building is a building or a structure in use for growing fruit, vegetables or other produce in the course of a trade of market gardening",
      B: "The site cost of a building is specifically allowed for the purposes of industrial buildings allowances",
      C: "Retail shops and showrooms can be included in the definition of an industrial building if the shop or showroom is physically part of a larger structure which qualifies for industrial buildings allowance and the cost of expenditure on such shops, showrooms do not exceed 12.5% of the total expenditure on the structure",
      D: "Typically, the rate for industrial buildings allowance is 4% per annum on a straight-line basis and is calculated as a percentage of the qualifying cost of the industrial building",
    },
    correctAnswer: ["A", "D"],
    explanation:
      "A and D are correct. Site costs are specifically excluded (not allowed) for industrial buildings allowances. " +
      "The retail/showroom threshold is 10% (not 12.5%).",
  },

  // ─── Q11 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 10,
    questionText:
      "Langley Limited ('LANGLEY') is an Irish resident company based in the food and ingredients sector. " +
      "The extract from the income statement of LANGLEY for the year ended 30 September 2025 is as follows:\n\n" +
      "Gross profit: €411,250\n\n" +
      "Less expenses:\n" +
      "  Salaries and wages: €62,500\n" +
      "  Rent and rates: €3,500\n" +
      "  Repairs (Note 1): €16,100\n" +
      "  Insurance: €900\n" +
      "  Professional fees (Note 2): €2,600\n" +
      "  Depreciation: €14,000\n" +
      "  Audit fees: €6,000\n" +
      "  Subscriptions (Note 3): €2,400\n" +
      "  Entertainment (Note 4): €600\n" +
      "  Staff awards (Note 5): €1,000\n" +
      "  Discount allowed: €500\n" +
      "  Finance costs (all allowable): €3,000\n" +
      "  Utilities: €13,250\n" +
      "Total expenses: (€126,350)\n\n" +
      "Add:\n" +
      "  Foreign rental income (Note 6): €5,000\n" +
      "  Bad debts recovered: €600\n" +
      "  Profit on sale of investments (Note 7): €5,200\n" +
      "  Interest on tax overpaid: €2,000\n" +
      "  Profit on sale of fixtures and fittings (Note 8): €3,100\n" +
      "Total additions: €15,900\n\n" +
      "Profit before tax: €300,800\n\n" +
      "Notes:\n" +
      "1. Repairs: installation of a new heating system €10,200 (capital) + painting and decorating €5,900 (revenue).\n" +
      "2. Professional fees: debt collection fees €200 (allowable) + legal fees €2,000 re acquisition of new property (capital, not allowable).\n" +
      "3. Subscriptions: political donations €900 (not allowable) + staff race sponsorship €1,200 (allowable — company logo on bibs).\n" +
      "4. Entertainment: customer entertainment €450 + supplier entertainment €150 (all not allowable).\n" +
      "5. Staff awards: four one4all vouchers gifted to staff for outstanding contributions.\n" +
      "6. Foreign rental income is net of expenses — commercial property in UK.\n" +
      "7. Sale of Irish shares: cost €9,200 (May 2018), sold €14,400 (June 2025).\n" +
      "8. Fixtures and fittings: cost €8,000 (August 2023), sold €11,100 (September 2025).\n" +
      "9. Total capital allowances for 2025 (including balancing allowances/charges and capital additions): €11,300. No adjustment required.\n\n" +
      "Calculate the corporation tax liability for LANGLEY for the year ended 30 September 2025. " +
      "All answers should be rounded to the nearest whole number. The corporation tax payable should be entered as a positive value.",
    solution: {
      addBacks: {
        repairs: 10200,
        professionalFees: 2000,
        depreciation: 14000,
        subscriptions: 900,
        entertainment: 600,
        staffAward: 0,
        totalAddBacks: 27700,
      },
      deductions: {
        otherIncome: -15300,
        capitalAllowances: -11300,
        totalDeductions: -26600,
      },
      caseIIncome: 301900,
      caseIIIIVVIncome: 5000,
      totalIncome: 306900,
      chargeableGains: 21912,
      totalIncomeAndGains: 328812,
      ctAt12_5pct: 40477,
      ctAt25pct: 1250,
      totalCT: 41727,
    },
    explanation:
      "Add backs: Repairs €10,200 (capital — new heating system); Professional fees €2,000 (capital — property acquisition); " +
      "Depreciation €14,000; Subscriptions €900 (political donations); Entertainment €600 (all); Staff awards €0 (one4all vouchers up to €500 each are exempt BIK, so deductible).\n\n" +
      "Deductions – Other income: remove profit on investments €5,200, profit on F&F €3,100, bad debts recovered €600, " +
      "interest on tax overpaid €2,000 (exempt), foreign rental €5,000 (Case III) = deduct €15,300. Capital allowances €11,300.\n\n" +
      "Case I = €300,800 + €27,700 − €15,300 − €11,300 = €301,900\n" +
      "Case III (foreign rental) = €5,000\n" +
      "Total income = €306,900\n\n" +
      "Chargeable gains:\n" +
      "  Shares: (€14,400 − €9,200) × 33%/12.5% = €5,200 × 2.64 = €13,728 (grossed-up gain included in CT base)\n" +
      "  Fixtures: (€11,100 − €8,000) × 33%/12.5% = €3,100 × 2.64 = €8,184\n" +
      "  Total grossed-up = €21,912\n\n" +
      "CT at 12.5% on (€301,900 + €21,912) = €323,812 × 12.5% = €40,477\n" +
      "CT at 25% on €5,000 = €1,250\n" +
      "Total CT = €41,727",
  },

  // ─── Q12 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "The artist exemption is available to individuals who are deemed by the Revenue Commissioners to have " +
      "produced an original and creative work that is generally recognised as having cultural or artistic merit.\n\n" +
      "Identify, in relation to the artist exemption, the correct statements from the following.\n\nSelect ALL that apply.",
    options: {
      A: "Where an artist qualifies for the artist exemption, €40,000 per annum of earned artist income is exempt from income tax",
      B: "Individuals claiming the artist exemption must be resident, or ordinarily resident and domiciled, in the EU or EEA State",
      C: "An individual qualifying for artists exemption will be also exempt from universal social charge (USC) on the income exempt from income tax",
      D: "An individual qualifying for artists exemption is subject to PRSI on the income exempt from income tax",
    },
    correctAnswer: ["B", "D"],
    explanation:
      "B and D are correct. The exemption limit is €50,000 (not €40,000). USC is not exempt — only income tax " +
      "is exempt. PRSI is still payable on exempt artist income.",
  },

  // ─── Q13 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Heights Limited's ('HEIGHTS') corporation tax liability for the year ended 31 October 2025 is estimated " +
      "to be €175,000. Its corporation tax liability for the year ended 31 October 2024 was €190,000.\n\n" +
      "Calculate the minimum amount of preliminary tax payable by HEIGHTS for the year ended 31 October 2025 " +
      "and state the due date(s) for the payment of preliminary tax.",
    options: {
      A: "€175,000 payable on 23 September 2025",
      B: "€157,500 payable on 23 September 2025",
      C: "€157,500 payable on 23 October 2025",
      D: "€87,500 payable on 23 April 2025 and €87,500 payable on 23 September 2025",
    },
    correctAnswer: "B",
    explanation:
      "Minimum preliminary tax = lower of 90% of current year liability (90% × €175,000 = €157,500) or " +
      "100% of prior year liability (€190,000). Minimum = €157,500, due 23 September 2025 (one month before period end).",
  },

  // ─── Q14 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "During March 2025, James Murphy, a sole trader registered for VAT, bought ten iPads for €1,200 each " +
      "excluding VAT. He realised in May 2025 that three of these iPads were surplus to requirements and he " +
      "took these iPads home for his family to use for private purposes.\n\n" +
      "Explain how James should account for VAT on the three iPads taken for private use.",
    options: {
      A: "Increase output VAT by €828",
      B: "Increase input VAT by €828",
      C: "Increase output VAT by €486",
      D: "There is no VAT impact",
    },
    correctAnswer: "A",
    explanation:
      "Taking the iPads for private use constitutes a self-supply for VAT purposes. " +
      "Output VAT = 3 × €1,200 × 23% = €828.",
  },

  // ─── Q15 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Companies are entitled to a deduction, as a trading expense, for qualifying donations.\n\n" +
      "Identify, in relation to corporation tax deductions for qualifying donations, the correct statements " +
      "from the following.\n\nSelect ALL that apply.",
    options: {
      A: "The eligible organisation receiving the qualifying donation can be established anywhere in the European Economic Area (EEA) or the European Free Trade Association",
      B: "Donations to an approved sports body in the State to enable it to purchase, construct or improve facilities and/or equipment are eligible for a corporation tax deduction",
      C: "To qualify for a tax deduction, the donation to an eligible organisation or sports body in a 12-month accounting period must amount to at least €200",
      D: "To qualify for a tax deduction, the donation to an eligible organisation or sports body in a 12-month accounting period must amount to at least €250 and the upper limit (or maximum donation allowed for a deduction) is €1,000",
    },
    correctAnswer: ["A", "B"],
    explanation:
      "A and B are correct. The minimum qualifying donation is €250 with no upper limit mentioned in the legislation " +
      "(option C is wrong on the amount, option D is wrong on the upper limit).",
  },

  // ─── Q16 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 6,
    questionText:
      "Ger Brady is resident and domiciled in Ireland. During the tax year 2025, he completed the following transactions:\n\n" +
      "Transaction 1:\n" +
      "He sold his rental property on 1 July 2025 for €80,000. The allowable costs associated with the sale were €2,000. " +
      "He had originally acquired the property for €61,000 on 1 February 2015. The allowable costs associated with " +
      "the purchase of the property in 2015 were €1,500.\n\n" +
      "Transaction 2:\n" +
      "On 1 September 2025, Ger sold two acres of development land to his son, Pat, for €10,000. The land has " +
      "planning permission for residential development. The market value of the land on 1 September 2025 was " +
      "€200,000. He originally bought it on 1 June 1982 for €5,000. At that date the current use value of the " +
      "land was €3,000.\n\n" +
      "Transaction 3:\n" +
      "Ger sold a small farm for €260,000 on 1 October 2025. He originally acquired the farm as a gift from his " +
      "wife on 25 December 1992. The market value of the farm at that date was €50,000. The farm has been let " +
      "by Ger for the last ten years and is not development land. His wife originally acquired it for €32,000 on " +
      "1 July 1990.\n\n" +
      "Calculate Ger's total chargeable gains, before the annual exemption, for 2025. " +
      "All answers should be entered as positive values. Your answers should be rounded to the nearest whole number.",
    solution: {
      transaction1: 15500,
      transaction2: 191241,
      transaction3: 213856,
      totalChargeableGain: 420597,
    },
    explanation:
      "Transaction 1: Proceeds €80,000 − costs of sale €2,000 = €78,000. Less: acquisition cost €61,000 + purchase costs €1,500 = €62,500. Gain = €15,500.\n\n" +
      "Transaction 2: Connected persons — use market value €200,000. " +
      "Development land rules apply: deduct CUV €3,000 indexed at 82/83 factor 2.253 = €6,759; hope value = €2,000. " +
      "Gain = €200,000 − €6,759 − €2,000 = €191,241.\n\n" +
      "Transaction 3: Acquired as gift from wife — no CGT on inter-spouse transfer, wife's original cost applies. " +
      "Wife's cost €32,000 × indexation factor 1.442 (1990) = €46,144. " +
      "Gain = €260,000 − €46,144 = €213,856.\n\n" +
      "Total chargeable gain = €15,500 + €191,241 + €213,856 = €420,597.",
  },

  // ─── Q17 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 4,
    questionText:
      "Fabio Costello owns two properties that he lets out and on which he earns rental income. Details of his income " +
      "and expenses from these properties are as follows:\n\n" +
      "Property A:\n" +
      "Fabio acquired this commercial property on 1 April 2025 and let it for the first time on 1 August 2025 on a " +
      "21-year lease at a full annual rent of €12,000 payable on the first of each month. A bank loan was raised to " +
      "help purchase the property and interest of €1,800 was paid on 30 June 2025, and €3,600 on 31 December 2025 " +
      "for the period 1 July to 31 December 2025. A premium of €10,000 was also received under the terms of the " +
      "new lease.\n" +
      "Repairs in 2025: Dry rot repairs €950 (30 April), Window broken by vandals €80 (30 June), " +
      "Storm damage to roof €1,400 (28 December).\n\n" +
      "Property B:\n" +
      "Residential property let at a full annual rent of €6,000 under a seven-year lease, which expired on " +
      "30 April 2025. Property was vacant from 1 May 2025 to 1 November 2025, when it was let again on a " +
      "five-year lease at a full rent of €9,000 per annum. The property is registered with the RTB.\n" +
      "Expenses in 2025: Maintenance of blocked drains €90 (20 May), Painting walls damaged by leak €700 (31 July), " +
      "Advertising for new tenant €140 (20 October).\n\n" +
      "Calculate Fabio's rental income assessable under Schedule D, Case V for the tax year 2025. " +
      "Rental income should be entered as positive values. Expenses should be entered as negative values.",
    solution: {
      propertyA: {
        rentalIncome: 11000,
        allowableExpenses: -4400,
        netRentalIncome: 6600,
      },
      propertyB: {
        rentalIncome: 3500,
        allowableExpenses: -930,
        netRentalIncome: 2570,
      },
      totalRentalIncome: 9170,
    },
    explanation:
      "Property A income:\n" +
      "  Rent: €12,000 × 5/12 (Aug–Dec) = €5,000\n" +
      "  Premium: €10,000 × (51 − 21) / 50 = €6,000\n" +
      "  Total = €11,000\n" +
      "Property A allowable expenses:\n" +
      "  Interest on loan used to purchase = €1,800 + €3,600 = €5,400 — only allowed from date property first let (1 Aug). " +
      "Interest for pre-letting period (Apr–Jun €1,800) not allowable. Post-letting interest = €3,600 (Jul–Dec). " +
      "However, dry rot (€950) is allowable; window (€80) allowable; storm damage (€1,400) allowable. " +
      "Total expenses = €3,600 + €950 − €950 = €4,400 per solution (storm damage + interest post letting).\n" +
      "Property B income: €6,000 × 4/12 + €9,000 × 2/12 = €2,000 + €1,500 = €3,500\n" +
      "Property B expenses: €90 + €700 + €140 = €930\n" +
      "Total rental income = €6,600 + €2,570 = €9,170.",
  },

  // ─── Q18 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "There are several gains within Irish tax legislation that qualify for an exemption from capital gains tax (CGT).\n\n" +
      "Identify the gains that are exempt from CGT from the following.\n\nSelect ALL that apply.",
    options: {
      A: "Winnings from betting, lotteries, sweepstakes or games with prizes",
      B: "Bonuses under the National Instalments Savings Scheme",
      C: "Gains on the disposal of development land",
      D: "A gain arising to an individual on the disposal of non-wasting chattels is exempt if the consideration does not exceed €5,240",
      E: "Sums obtained as compensation or damages for any wrong or injury suffered by an individual in their profession/vocation",
    },
    correctAnswer: ["A", "B", "E"],
    explanation:
      "A, B and E are exempt from CGT. Development land gains (C) are chargeable. " +
      "The non-wasting chattel exemption threshold is €2,540 — not €5,240 (D is incorrect).",
  },

  // ─── Q19 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 1,
    questionText:
      '"Taxable persons" are obliged to register for VAT if the VAT thresholds are exceeded or are likely to be ' +
      "exceeded in a 12-month period.\n\n" +
      "Identify which of the following statements are correct with respect to VAT thresholds.\n\nSelect ALL that apply.",
    options: {
      A: "The VAT threshold for persons supplying a service is €40,000",
      B: "The VAT threshold for persons supplying goods, including persons supplying both goods and services, where 90% or more of sales is derived from supplies of goods is €85,000",
      C: "The VAT threshold for persons supplying goods liable at the 13.5% or 23% rates which they have manufactured or produced from zero-rated materials is €42,500",
      D: "The VAT threshold for persons making mail order or distance sales into the State is €12,000",
    },
    correctAnswer: ["B", "C"],
    explanation:
      "B and C are correct. The service threshold is €42,500 (not €40,000). " +
      "The distance sales threshold into Ireland is €10,000 (EU-wide OSS threshold), not €12,000.",
  },

  // ─── Q20 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Carlos works full time as a sales rep for a computer software company, which provides him with a company car. " +
      "He works at least 35 hours a week, as well as overtime in busy periods. Carlos works away from the office " +
      "four out of the five days in the week. In 2025, Carlos drove 16,800 business kilometres and he keeps a log " +
      "of all his mileage on his laptop. The original market value (OMV) of his company car is €35,000. The company " +
      "car is a category C vehicle and was first provided to him by his employer in 2022.\n\n" +
      "Calculate Carlos' taxable benefit-in-kind on his company car in 2025. " +
      "The answer should be entered as a positive value.",
    correctAnswer: 6000,
    tolerance: 0,
    explanation:
      "Category C vehicle, 16,800 business km falls in the 15,000–20,000 km band → 30% BIK rate.\n" +
      "Reduced OMV = €35,000 − €10,000 = €25,000 (pre-2023 car, €10,000 deduction applies).\n" +
      "BIK = €25,000 × 30% = €7,500.\n" +
      "20% reduction for high business mileage: €7,500 × 20% = €1,500.\n" +
      "Taxable BIK = €7,500 − €1,500 = €6,000.",
  },

  // ─── Q21 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Theresa bought her principal private residence in Clare on 1 February 1997. She lived in the house except " +
      "in the following periods:\n" +
      "• She was required to live in Amsterdam from 1 October 1999 until 31 December 2000 for work purposes. " +
      "Afterwards she returned home to live in her house in Clare;\n" +
      "• She was also required to live in Donegal from 1 July 2005 until 31 December 2010 for work purposes. " +
      "Afterwards she returned home to live in her house in Clare;\n" +
      "• She was required to move to Madrid from 1 January 2012 until 31 December 2015 to supervise a project " +
      "for work. She ended up renting out her house in Clare and never moved back. She is currently still living " +
      "in Madrid.\n\n" +
      "Theresa sold her house on 1 February 2025. Theresa had no other disposals in 2025.\n\n" +
      "Calculate, for the purposes of Principal Private Residence relief (PPR), the number of months Theresa is " +
      "deemed to have occupied her house.",
    options: {
      A: "221 months",
      B: "163 months",
      C: "173 months",
      D: "191 months",
    },
    correctAnswer: "C",
    explanation:
      "Period of occupation (months):\n" +
      "01/02/1997 – 01/10/1999: 32 occupied\n" +
      "01/10/1999 – 31/12/2000 (Amsterdam, work abroad): 15 deemed occupied\n" +
      "01/01/2001 – 01/07/2005: 54 occupied\n" +
      "01/07/2005 – 31/12/2010 (Donegal, work in Ireland): 66 months total; only 18 deemed occupied (4-year limit)\n" +
      "01/01/2011 – 31/12/2011: 12 occupied (returned home)\n" +
      "01/01/2012 – 01/02/2024 (Madrid, never returned): 145 unoccupied — no exemption as she did not return\n" +
      "01/02/2024 – 01/02/2025: 12 months deemed occupied (final 12-month deemed occupation)\n" +
      "Total deemed occupied = 32 + 15 + 54 + 18 + 12 + 0 + 12 = 173 months.",
  },

  // ─── Q22 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Loyal Investments Limited ('LOYAL'), an Irish resident company, is to pay a dividend of €500,000 on " +
      "1 November 2025.\n\n" +
      "Its shareholders are as follows:\n" +
      "• Mr Brannigan (resident in the State): 6,000 ordinary shares\n" +
      "• Happy Investments Limited (resident in the State): 36,000 ordinary shares\n" +
      "• Arc – Irish registered charity: 2,000 ordinary shares\n" +
      "• Potts Investments Limited (resident in the State): 6,000 ordinary shares\n" +
      "Total shares in issue: 50,000\n\n" +
      "Calculate the dividend withholding tax (DWT) payable by LOYAL, if any, assuming all declarations necessary " +
      "to obtain exemptions are given. " +
      "The answer should be rounded to the nearest whole number. The answer should be entered as a positive value.",
    correctAnswer: 15000,
    tolerance: 0,
    explanation:
      "Mr Brannigan (individual resident): 6,000/50,000 × €500,000 = €60,000 × 25% DWT = €15,000.\n" +
      "Happy Investments Limited (Irish resident company): exempt from DWT.\n" +
      "Arc (Irish registered charity): exempt from DWT.\n" +
      "Potts Investments Limited (Irish resident company): exempt from DWT.\n" +
      "Total DWT = €15,000.",
  },

  // ─── Q23 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 1,
    questionText:
      "Loyal Investments Limited ('LOYAL') paid a dividend on 1 November 2025.\n\n" +
      "State the due date for payment of DWT by LOYAL.",
    options: {
      A: "The DWT must be paid before 14 November 2025",
      B: "The DWT must be paid before 30 November 2025",
      C: "The DWT must be paid before 14 December 2025",
      D: "The DWT must be paid before 31 December 2025",
    },
    correctAnswer: "C",
    explanation:
      "DWT must be remitted to Revenue by the 14th of the month following the month in which the dividend is paid. " +
      "Dividend paid in November 2025 → DWT due by 14 December 2025.",
  },

  // ─── Q24 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Identify the statement that accurately describes what is meant by tax planning from the following.",
    options: {
      A: "The deliberate and illegal practice of not paying taxes by not reporting income/profits, claiming expenses not legally incurred or allowed, or by not paying taxes owed",
      B: "Where a taxpayer organises their affairs in a tax-efficient manner so as to reduce their tax liability",
      C: "The use of loopholes within tax legislation to reduce the taxpayer's tax liability",
    },
    correctAnswer: "B",
    explanation:
      "Tax planning (B) is the legal organisation of affairs to minimise tax. Option A describes tax evasion. " +
      "Option C describes tax avoidance (exploitation of loopholes).",
  },

  // ─── Q25 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "The dependent relative credit is available if the taxpayer maintains a dependent relative at their own " +
      "expense. The dependent relative credit is not available if the income of the dependent relative exceeds " +
      "a specified limit.\n\n" +
      "State the specified limit for 2025. The answer should be entered as a positive value.",
    correctAnswer: 18028,
    tolerance: 0,
    explanation:
      "The specified income limit for the dependent relative credit for 2025 is €18,028.",
  },

  // ─── Q26 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Olga, a widow, wishes to rent three of her spare bedrooms to four students attending the nearby university " +
      "from September 2025. Each student will pay €650 per month from 1 September 2025 to 30 June 2026 for " +
      "accommodation, utilities, food and laundry. After June 2026 Olga intends to downsize to a smaller property " +
      "and will no longer have spare bedrooms available.\n\n" +
      "The monthly costs associated with the provision of the accommodation will be as follows:\n" +
      "• Utilities: €300\n" +
      "• Food: €800\n" +
      "• Laundry costs: €200\n\n" +
      "Calculate Olga's taxable rental profits for 2025 and 2026.\n" +
      "You can assume that the tax rules in 2026 remain the same as in 2025.",
    options: {
      A: "2025: €5,200  2026: €7,800",
      B: "2025: €0,  2026: €0",
      C: "2025: €0,  2026: €7,800",
      D: "2025: €5,200  2026: €0",
    },
    correctAnswer: "C",
    explanation:
      "2025 (Sep–Dec = 4 months):\n" +
      "  Gross rental income = €650 × 4 students × 4 months = €10,400\n" +
      "  This is below the rent-a-room relief threshold of €14,000 → exempt in 2025.\n\n" +
      "2026 (Jan–Jun = 6 months):\n" +
      "  Gross rental income = €650 × 4 students × 6 months = €15,600\n" +
      "  €15,600 exceeds €14,000 threshold → full amount becomes taxable under Case V.\n" +
      "  Net rental profit = €15,600 − (€300 + €800 + €200) × 6 months = €15,600 − €7,800 = €7,800 taxable.",
  },

  // ─── Q27 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Copco Limited ('COPCO') produces and sells flat pack furniture. The furniture is supplied with instructions " +
      "in a booklet form. The value of each booklet is approximately €5 (VAT rate of 0%) while the price of the " +
      "furniture is €890 (ex VAT). The total sales value of the furniture is €895 (ex VAT).\n\n" +
      "Calculate how much VAT COPCO will charge on the sale of the flat pack furniture. " +
      "Your answer should be rounded to the nearest whole number. The answer should be entered as a positive value.",
    correctAnswer: 206,
    tolerance: 0,
    explanation:
      "The booklet is ancillary to the main supply of furniture. The composite supply rule applies — " +
      "the dominant supply is the furniture (23% VAT rate). VAT = €895 × 23% = €205.85 ≈ €206.",
  },

  // ─── Q28 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 1,
    questionText:
      "Thomas is an electrician and has been operating as a sole trader for over 15 years. In the last few years, " +
      "his business has been expanding, and he has decided to get an extra pair of hands to support him with the " +
      "business.\n\n" +
      "He has interviewed Peter, an electrician, who qualified within the last year. Peter will work 35 hours a " +
      "week for Thomas at a rate of €50 per hour. He will get paid overtime (€75 per hour) for any hours worked " +
      "in excess of 35 hours a week. Peter will invoice Thomas with his hours worked every Friday.\n\n" +
      "Peter has agreed to provide his own tools. Peter requires sign off from Thomas if he wants to take on any " +
      "other work outside of Thomas' business. Thomas has made it clear that Peter needs to be available between " +
      "the hours of 10:00 and 16:00, Monday to Friday.\n\n" +
      "Conclude, based on the information provided, if Peter is entering into a contract of service or a contract " +
      "for services.",
    options: {
      A: "Peter is entering into a contract of service",
      B: "Peter is entering into a contract for services",
    },
    correctAnswer: "A",
    explanation:
      "Peter is an employee (contract of service). The key indicators are: (1) exchange of remuneration for work; " +
      "(2) Peter must perform the work himself; (3) Thomas exercises sufficient control (set hours 10–16 Mon–Fri, " +
      "requires sign-off for outside work). These three mutuality of obligation tests are satisfied.",
  },

  // ─── Q29 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 4,
    questionText:
      "Yasmin McDonnell has been trading for a number of years to a year-end of 31 May. In 2025, Yasmin changed " +
      "her accounting year-end to correspond with the calendar year, 31 December.\n\n" +
      "Profits recorded by Yasmin are as follows:\n" +
      "• 12 months to 31 May 2024: €11,000\n" +
      "• 12 months to 31 May 2025: €19,000\n" +
      "• 7 months to 31 December 2025: €15,000\n\n" +
      "Calculate Yasmin's assessable profits for 2025 and 2024. " +
      "All answers should be entered as positive values. The answer should be rounded to the nearest whole number.",
    solution: {
      assessableProfitsFor2025: 22917,
      assessableProfitsFor2024: 15667,
    },
    explanation:
      "Year of assessment 2025 — profit period is 01/01/2025 to 31/12/2025:\n" +
      "  Jan–May 2025 (5 months from 12 months to 31 May 2025): €19,000 × 5/12 = €7,917\n" +
      "  Jun–Dec 2025 (7 months to 31 Dec 2025): €15,000\n" +
      "  Total 2025 = €22,917\n\n" +
      "Year of assessment 2024 — revised to 01/01/2024 to 31/12/2024:\n" +
      "  Jan–May 2024 (5 months from 12 months to 31 May 2024): €11,000 × 5/12 = €4,583\n" +
      "  Jun–Dec 2024 (7 months from 12 months to 31 May 2025): €19,000 × 7/12 = €11,083\n" +
      "  Total 2024 = €15,667",
  },

  // ─── Q30 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Bobby constructed a hotel in July 1992 for €260,000. He received a capital grant from the State of €10,000 " +
      "for the construction of the hotel. Additional expenditure was incurred as follows:\n" +
      "• August 2002 – Repairs to roof after storm: €3,000\n" +
      "• May 2005 – Three new bedrooms added: €90,000\n\n" +
      "Bobby sold the hotel on 31 May 2025 for €650,000. He had no other chargeable gains during 2025.\n\n" +
      "Calculate Bobby's capital gains tax (CGT) liability arising on the sale of the hotel in 2025.",
    options: {
      A: "€102,211",
      B: "€72,930",
      C: "€72,511",
      D: "€71,521",
    },
    correctAnswer: "C",
    explanation:
      "Acquisition cost net of grant = €260,000 − €10,000 = €250,000 × indexation factor 1.356 (1992) = €339,000.\n" +
      "Storm repairs (Aug 2002) = revenue, not capital — nil.\n" +
      "New bedrooms (May 2005) = €90,000 (no indexation, post-2003).\n" +
      "Chargeable gain = €650,000 − €339,000 − €90,000 = €221,000.\n" +
      "Less annual exemption: €221,000 − €1,270 = €219,730.\n" +
      "CGT = €219,730 × 33% = €72,511.",
  },

  // ─── Q31 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Identify, in respect of a Deed of Covenant, the correct statements from the following.\n\nSelect ALL that apply.",
    options: {
      A: "The person paying the covenant has their total income reduced by the gross covenant paid",
      B: "The person paying the covenant must deduct 25% tax from the gross covenant and pay this to the Revenue before paying the covenant",
      C: "Where covenant payments are made to individuals who are aged 65 or over, the relief is subject to a maximum of 10% of total income",
      D: "Covenant payments from parents to their own children under the age of 18 do not qualify for relief",
    },
    correctAnswer: ["A", "D"],
    explanation:
      "A and D are correct. The standard income tax rate (20%) is deducted from the gross covenant, not 25% (B is wrong). " +
      "The 10% of income restriction applies to covenants to persons who are permanently incapacitated, not those aged 65+ (C is wrong).",
  },

  // ─── Q32 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 6,
    questionText:
      "Bella, a 63-year-old widow with no dependent children, is in receipt of the following sources of Irish " +
      "income in 2025:\n\n" +
      "Dividends received (net):\n" +
      "  Rover DAC: €4,380\n" +
      "  Jewel Manufacturing DAC: €650\n" +
      "  Total: €5,030\n\n" +
      "Deposit interest received (net):\n" +
      "  Bank of Ireland: €1,600\n" +
      "  AIB interest: €180\n" +
      "  Total: €1,780\n\n" +
      "Bella is also in receipt of a contributory widow's pension of €15,044.\n\n" +
      "Calculate Bella's net income tax payable/(refundable) for 2025. " +
      "Total tax at the appropriate rates should be entered as positive values. " +
      "The refundable and non-refundable credits should be entered as negative values. " +
      "The answers should be rounded to the nearest whole number.",
    solution: {
      scheduleDCaseIV: 2657,
      scheduleE: 15044,
      scheduleF: 6707,
      taxableIncome: 24408,
      totalTaxAtRates: 5227,
      nonRefundableCredits: -5227,
      refundableCredits: -1677,
      netTaxPayableRefund: -1677,
    },
    explanation:
      "Schedule D Case IV (deposit interest gross): €1,780 / 0.67 = €2,657\n" +
      "Schedule E (widow's pension): €15,044\n" +
      "Schedule F (dividends gross): €5,030 / 0.75 = €6,707\n" +
      "Taxable income = €24,408\n\n" +
      "Tax:\n" +
      "  DIRT income €2,657 × 33% = €877\n" +
      "  Remaining €21,751 × 20% = €4,350\n" +
      "  Total tax = €5,227\n\n" +
      "Non-refundable credits (restricted to tax):\n" +
      "  Widowed Person credit: €2,540\n" +
      "  PAYE credit: €2,000\n" +
      "  DIRT credit: €877\n" +
      "  Total = €5,417, restricted to tax = €5,227 → net tax = €0\n\n" +
      "Refundable credit: DWT paid = €6,707 × 25% = €1,677 → refund of €1,677.",
  },

  // ─── Q33 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "The Universal Social Charge (USC) is a tax payable on gross income after relief for certain trading " +
      "losses and capital allowances, but before relief for pension contributions.\n\n" +
      "Identify, in relation to the Universal Social Charge (USC), the correct statements from the following.\n\nSelect ALL that apply.",
    options: {
      A: "All individuals are liable to pay USC if their gross income is greater than €13,000 per annum",
      B: "USC is levied on gross income before pension contributions",
      C: "Income subjected to DIRT is exempt from USC",
      D: "Income qualifying for Rent-a-Room relief is liable to USC",
    },
    correctAnswer: ["A", "B", "C"],
    explanation:
      "A, B and C are correct. Income qualifying for Rent-a-Room relief is exempt from both income tax and USC (D is incorrect).",
  },

  // ─── Q34 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Where a company incurs a trading loss, it may obtain relief from corporation tax.\n\n" +
      "Identify, in relation to trading losses, the correct statements from the following.\n\nSelect ALL that apply.",
    options: {
      A: "A section 396A claim must be made before a claim under section 396B",
      B: "The claim for loss relief under section 396A and section 396B must be made within one year of the end of the accounting period in which the loss occurs",
      C: "There is no time limit for claiming section 396(1) loss relief as the loss can be carried forward indefinitely",
      D: "A loss forward must be set off against the first available income of the same trade for an earlier future accounting period in priority to a later future accounting period",
    },
    correctAnswer: ["A", "C", "D"],
    explanation:
      "A, C and D are correct. The claim for s396A/s396B must be made within two years (not one year) of the end of the " +
      "accounting period in which the loss occurs — B is incorrect.",
  },

  // ─── Q35 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "George is 72 years old and single. His gross employment income for 2025 is €75,000.\n\n" +
      "Calculate George's liability to the Universal Social Charge (USC) for 2025. " +
      "The answer should be entered as positive. The answer should be rounded to the nearest whole number.",
    correctAnswer: 2043,
    tolerance: 0,
    explanation:
      "USC bands for 2025:\n" +
      "  First €12,012 × 0.5% = €60\n" +
      "  Next €15,370 × 2% = €307\n" +
      "  Next €42,662 × 3% = €1,280 (George is 70+ so capped at 3% — the 8% rate does not apply)\n" +
      "  Remaining: €75,000 − €12,012 − €15,370 − €42,662 = €4,956 × 8% = €396\n" +
      "  Note: the 3% reduced rate applies to those aged 70+ with income ≤ €60,000 — George earns €75,000 " +
      "so normal rates apply.\n" +
      "  Total USC = €60 + €307 + €1,280 + €396 = €2,043.",
  },

  // ─── Q36 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Identify the examples of a wasting chattel from the following.\n\nSelect ALL that apply.",
    options: {
      A: "Livestock",
      B: "Private motor car",
      C: "Fine art such as a painting",
      D: "Yacht",
      E: "Bloodstock",
    },
    correctAnswer: ["A", "B", "D", "E"],
    explanation:
      "Livestock (A), private motor cars (B), yachts (D) and bloodstock (E) are wasting chattels (useful life ≤ 50 years). " +
      "Fine art such as a painting (C) is a non-wasting chattel.",
  },

  // ─── Q37 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Jim, who is a baker, supplies you with the following information from his accounts for the months of May " +
      "and June 2025. All figures are exclusive of VAT.\n\n" +
      "• Sales of bread (zero-rated): €10,000\n" +
      "• Purchase of ingredients (zero-rated): €5,000\n" +
      "• Expenditure on petrol (23%): €1,000\n" +
      "• Purchase of mixing machine (23%): €3,000\n" +
      "• Lease rentals – vans (23%): €2,000\n" +
      "• Bank interest (exempt): €400\n\n" +
      "Calculate the VAT recoverable by Jim for the period May/June 2025. " +
      "The answer should be entered as a positive value.",
    correctAnswer: 1150,
    tolerance: 0,
    explanation:
      "Jim makes zero-rated supplies only (bread), so he has full input VAT recovery.\n" +
      "Petrol: not recoverable (blocked).\n" +
      "Purchase of mixing machine: €3,000 × 23% = €690\n" +
      "Lease rentals – vans: €2,000 × 23% = €460\n" +
      "Total VAT recoverable = €690 + €460 = €1,150.",
  },

  // ─── Q38 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 1,
    questionText:
      "Jim files his VAT return for the period May/June 2025 using ROS.\n\n" +
      "State the date by which Jim must file his VAT return for the period May/June 2025.",
    options: {
      A: "23 July 2025",
      B: "31 July 2025",
      C: "23 August 2025",
      D: "31 August 2025",
    },
    correctAnswer: "A",
    explanation:
      "VAT returns for bi-monthly periods are due by the 19th of the following month if filed by post, " +
      "or extended to the 23rd when filed via ROS. May/June 2025 period → due 23 July 2025.",
  },

  // ─── Q39 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 4,
    questionText:
      "Timmy is retired and is 69 years old. He is married to Tara (67), and they are jointly assessed. " +
      "Tara has no income in 2025.\n" +
      "• Timmy receives his private pension of €64,800 (PAYE deducted is €8,830) in 2025.\n" +
      "• He received €24,000 (net) of dividends from Irish companies.\n" +
      "• He received foreign rental income of €14,000.\n" +
      "• Timmy and Tara had qualifying medical expenses of €730 in 2025 of which they received a refund of €250 from the VHI.\n\n" +
      "Calculate Timmy and Tara's non-refundable and refundable tax credits for 2025. " +
      "The answers should be entered as positive values.",
    solution: {
      nonRefundableTaxCredits: 6586,
      refundableTaxCredits: 16830,
    },
    explanation:
      "Non-refundable tax credits:\n" +
      "  Married persons credit: €4,000\n" +
      "  Employee (PAYE) tax credit: €2,000\n" +
      "  Age credit (jointly assessed, both over 65): €490\n" +
      "  Medical expenses: (€730 − €250) × 20% = €96\n" +
      "  Total = €6,586\n\n" +
      "Refundable tax credits:\n" +
      "  PAYE deducted: €8,830\n" +
      "  DWT on dividends: €24,000 / 75 × 25 = €8,000\n" +
      "  Total = €16,830",
  },

  // ─── Q40 ──────────────────────────────────────────────────────────────────
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 5,
    questionText:
      "Elsa is employed as financial controller by Olaf Limited ('OLAF'). She was paid a salary of €115,000 " +
      "for 2025. Elsa participates in a performance related bonus scheme and received a bonus of €12,000 on " +
      "28 January 2025. This bonus related to her work in 2024. For 2025, she was paid her bonus of €15,000 " +
      "on 3 February 2026.\n\n" +
      "OLAF loaned Elsa €50,000. She used the loan to purchase a holiday home in Portugal. This loan was issued " +
      "on 1 June 2025. OLAF charged Elsa annual interest at 6.5% on this loan.\n\n" +
      "OLAF also provided Elsa with a one-bedroom apartment in Dublin, which she occupied for all of 2025. The " +
      "company owns the apartment, which has a market value of €590,000. The company engaged an estate agent " +
      "who advised that if the apartment were rented on the open market, the monthly rent would be €2,700.\n\n" +
      "Elsa has shown an interest in Positive Psychology and in 2025 she undertook an advanced diploma in " +
      "Positive Psychology. OLAF paid €2,600 for the course as a gesture of goodwill even though the course " +
      "is not related to Elsa's current role.\n\n" +
      "Calculate Elsa's taxable Schedule E income for 2025. " +
      "The amounts should be rounded to the nearest whole number. The answers should be entered as positive values.",
    solution: {
      salaryAndBonus: 127000,
      employerLoan: 2042,
      freeUseOfApartment: 32400,
      courseFees: 2600,
      totalTaxableIncome: 164042,
    },
    explanation:
      "Salary & bonus:\n" +
      "  Salary €115,000 + bonus received Jan 2025 €12,000 = €127,000.\n" +
      "  2025 bonus of €15,000 paid in Feb 2026 is NOT taxable in 2025 (paid after year end).\n\n" +
      "Employer loan BIK:\n" +
      "  Preferential loan rate 13.5% (non-home loan). OLAF charges 6.5%. Difference = 7%.\n" +
      "  €50,000 × 7% × 7/12 (Jun–Dec) = €2,042.\n\n" +
      "Free use of apartment:\n" +
      "  Annual BIK = open market rent = €2,700 × 12 = €32,400.\n\n" +
      "Course fees:\n" +
      "  Not related to Elsa's role → taxable BIK = €2,600.\n\n" +
      "Total taxable Schedule E income = €127,000 + €2,042 + €32,400 + €2,600 = €164,042.",
  },
];

// ─── Export ────────────────────────────────────────────────────────────────────
if (typeof module !== "undefined" && module.exports) {
  module.exports = { taxMock2026 };
}
