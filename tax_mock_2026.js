const taxMock2026 = [
  // --- Q1 -------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Mia bought a house for €250,000 on 1 June 2020. She lived in it until 1 June 2022 when she let it out " +
      "to a third party. On 1 June 2025, she sold the house for €200,000. Mia has no other chargeable gains " +
      "in 2025 and has no allowable capital losses carried forward from previous tax years." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the allowable capital loss (if any) that Mia can carry forward to 2026 and use against future capital gains.",
    options: {
      A: "There is no capital loss available to carry forward to 2026",
      B: "A loss of €50,000 is available to carry forward to 2026",
      C: "A loss of €30,000 is available to carry forward to 2026",
      D: "A loss of €20,000 is available to carry forward to 2026",
    },
    correctAnswer: "D",
    explanation:
      "Proceeds €200,000 less cost €250,000 = loss of €50,000.<br>" +
      "PPR exempt portion: (2 years lived in + 1 year deemed) / 5 years total × €50,000 = €30,000.<br>" +
      "Allowable loss = €50,000 − €30,000 = €20,000.",
  },

  // --- Q2 -------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Molly Malone is a self-employed graphic designer and prepares her annual accounts to 31 December each year. " +
      "On 23 April 2025, she sold a printer for €1,750 to a third party. The printer originally cost €4,000 and had " +
      "a tax written down value (TWDV) of €1,000 on 1 January 2025." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the balancing allowance/charge, if any, on the sale of the printer on 23 April 2025.",
    options: {
      A: "There is no balancing allowance or charge on the sale of the printer",
      B: "Balancing allowance of €750",
      C: "Balancing charge of €750",
      D: "Balancing charge of €1,750",
    },
    correctAnswer: "A",
    explanation:
      "No balancing charge will apply in respect of the printer as the sales proceeds are less than €2,000 " +
      "and the disposal is not to a connected person.",
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 1,
    questionText:
      "Monica has just started working as a trainee accountant for Oak Limited (\"OAK\"). OAK has an accounting year end " +
      "of 31 August 2025. Monica has asked you for advice regarding the filing of OAK's corporation tax return." +
      "<br><br><strong>Requirement</strong><br>" +
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

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Rose has three children in third-level education in 2025, two undertaking full-time courses and one in " +
      "part-time education. Relevant details including student fees paid by Rose for 2025 are as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Child</th><th>Education Status</th><th>Student Contribution</th><th>Tuition Fees</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Ian</td><td>Full-time</td><td>€3,000</td><td>Nil</td></tr>" +
      "<tr><td>Poppy</td><td>Full-time</td><td>€3,000</td><td>€9,000</td></tr>" +
      "<tr><td>David</td><td>Part-time</td><td>€1,500</td><td>€2,500</td></tr>" +
      "</tbody></table>" +
      "<br>Note: In all cases the fees are paid for an approved course to an approved college." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in respect of the third-level fees paid by Rose, the income tax credit she can claim for 2025. " +
      "Your answer should be entered as a positive value.",
    correctAnswer: 2200,
    tolerance: 0,
    explanation:
      "Disregard first €3,000 (one disregard regardless of number of students).<br>" +
      "Max relief per full-time student = €7,000; max per part-time student = €3,500.<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Child</th><th>Fees</th><th>Relief available</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Ian</td><td>€3,000</td><td>€3,000 − €3,000 disregard = €0</td></tr>" +
      "<tr><td>Poppy</td><td>€12,000</td><td>€12,000 − €0 (disregard used) = €12,000, capped at €7,000</td></tr>" +
      "<tr><td>David</td><td>€4,000</td><td>€4,000, capped at €3,500 (part-time)</td></tr>" +
      "</tbody></table><br>" +
      "Total allowable = €0 + €7,000 + €4,000 = €11,000.<br>" +
      "Credit = €11,000 × 20% = <strong>€2,200</strong>.",
  },

  // --- Q5 -------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Where a capital disposal is at arm's length, the consideration, in money terms, is normally accepted for " +
      "CGT purposes. However, market value is deemed to be the consideration for the purpose of determining " +
      "the chargeable gain/loss between connected persons." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify which of the following are deemed to be connected persons for CGT purposes." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "Business partners",
      B: "Cousins",
      C: "Parents of spouse",
      D: "A company where a person has control of the company",
      E: "Lineal descendants",
    },
    correctAnswer: ["A", "C", "D", "E"],
    explanation:
      "Cousins are <strong>not</strong> connected persons for CGT purposes. Connected persons include: " +
      "business partners, parents of a spouse, a company controlled by the person, and lineal descendants.",
  },

  // --- Q6 -------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Under the cash receipts basis of accounting for VAT, persons do not become liable for VAT until they " +
      "have actually received payment for the goods or services supplied." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify, in relation to the cash receipts basis of accounting for VAT, the correct statements from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "The cash receipts basis does not apply to transactions between connected persons",
      B: "An accountable person who opts for the cash receipts basis of accounting is liable for VAT at the VAT rate ruling at the time the supply is made rather than the VAT rate ruling at the time payment is received",
      C: "The cash receipts basis of accounting only applies to VAT on sales. VAT on purchases is still claimed on an invoice basis",
      D: "The cash receipts basis of accounting for VAT may be used by persons engaged in the supply of taxable goods or services if at least 75% of the supplies are to unregistered persons or the trader's turnover is not likely to exceed €2.1 million per annum",
    },
    correctAnswer: ["A", "B", "C"],
    explanation:
      "Statements A, B and C are all correct.<br>" +
      "Statement D is incorrect — the turnover threshold is <strong>€2.5 million</strong> (not €2.1 million) under Finance Act 2024.",
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Juno Limited (\"JUNO\") is a company which is engaged in the distribution of chilled foods and has a history " +
      "of being very successful. In 2025, JUNO's largest customer went into liquidation. This led to a significant " +
      "bad debt write-off in JUNO's 2025 accounts." +
      "<br><br>Results for recent periods, as adjusted for tax purposes, are as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th></th><th>Year-end 31/03/2024<br>(12 Months)</th><th>Period end 31/12/2024<br>(9 Months)</th><th>Year-end 31/12/2025<br>(12 Months)</th></tr></thead>" +
      "<tbody><tr><td>Case I Profit/(Loss)</td><td>€30,000</td><td>€20,000</td><td>(€60,000)</td></tr></tbody>" +
      "</table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate the corporation tax payable by JUNO for the year ended 31 March 2024.",
    options: {
      A: "NIL",
      B: "€938",
      C: "€3,750",
      D: "€2,813",
    },
    correctAnswer: "D",
    explanation:
      "Trading loss of €60,000 arises in y/e 31/12/2025.<br>" +
      "<strong>S396A carry-back:</strong><br>" +
      "Step 1: Set against income in current year (2025) — nil income, so €0 used.<br>" +
      "Step 2: Carry back to period ended 31/12/2024 (9 months) — €20,000 used.<br>" +
      "Step 2 (cont.): Carry back 3/12 of year ended 31/03/2024 = €30,000 × 3/12 = €7,500 used.<br><br>" +
      "Net Case I for year ended 31/03/2024 = €30,000 − €7,500 = €22,500.<br>" +
      "CT @ 12.5% = €22,500 × 12.5% = <strong>€2,813</strong>.",
  },

  // --- Q8 -------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Sam Daly is a married man who owns and operates a digital marketing agency as a sole trader in Dublin. " +
      "His accounts for the year ended 31 December 2025 show a tax-adjusted profit of €47,000. Sam has capital " +
      "allowances for 2025 of €6,000. He received net interest of €420 (gross amount is €627) on his Credit Union " +
      "share account." +
      "<br><br>His wife, Michelle Daly, is employed by the local vet and her gross salary for 2025 was €30,000. She received " +
      "net bank deposit interest of €630 (gross amount is €940) in 2025. The Dalys are jointly assessed." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the PRSI payable by the Dalys to be included in their income tax return in 2025.<br>" +
      "You should assume a weighted average PRSI rate of 4.125% for 2025.<br>" +
      "The answer should be rounded to the nearest whole number.<br>" +
      "The answer should be entered as a positive value.",
    correctAnswer: 1756,
    tolerance: 0,
    explanation:
      "<strong>Michelle (employed):</strong> PRSI applies to deposit interest only (her salary is PRSI'd via payroll).<br>" +
      "€940 × 4.125% = €39.<br><br>" +
      "<strong>Sam (self-employed):</strong><br>" +
      "Case I: €47,000 − €6,000 = €41,000<br>" +
      "Case IV: €627<br>" +
      "Total: €41,627 × 4.125% = €1,717.<br><br>" +
      "Total PRSI = €1,717 + €39 = <strong>€1,756</strong>.",
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Stephen sold an antique bracelet in 2025 that had been in his family for generations. He inherited this " +
      "antique bracelet from his grandmother on her death in 2008. The value of the antique bracelet at the time " +
      "of his grandmother's death was €2,550. His grandmother had inherited it from her father on 1 May 1989, " +
      "when it was valued at €800. Stephen sold the antique bracelet for €1,350 in 2025." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the allowable capital loss, if any, arising on the sale of the antique bracelet in 2025 that will " +
      "be available for Stephen to carry forward into 2026.<br>" +
      "The answer should be rounded to the nearest whole number.<br>" +
      "The answer should be entered as a positive value.",
    correctAnswer: 10,
    tolerance: 0,
    explanation:
      "Stephen's base cost = €2,550 (market value at date of inheritance in 2008).<br>" +
      "Actual proceeds = €1,350 → actual loss = €1,350 − €2,550 = −€1,200.<br><br>" +
      "<strong>Non-wasting chattel rule:</strong> where actual proceeds < €2,540, deemed proceeds = €2,540.<br>" +
      "Allowable loss = €2,540 − €2,550 = <strong>−€10</strong> (i.e. a loss of €10 carried forward).",
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Section 268 TCA 1997 contains a clear definition of what is meant by an industrial building." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify, in relation to industrial buildings and industrial building allowances, the correct statements from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "An example of an industrial building is a building or a structure in use for growing fruit, vegetables or other produce in the course of a trade of market gardening",
      B: "The site cost of a building is specifically allowed for the purposes of industrial buildings allowances",
      C: "Retail shops and showrooms can be included in the definition of an industrial building if the shop or showroom is physically part of a larger structure which qualifies for industrial buildings allowance and the cost of expenditure on such shops, showrooms do not exceed 12.5% of the total expenditure on the structure",
      D: "Typically, the rate for industrial buildings allowance is 4% per annum on a straight-line basis and is calculated as a percentage of the qualifying cost of the industrial building",
    },
    correctAnswer: ["A", "D"],
    explanation:
      "A and D are correct.<br>" +
      "B is incorrect — site costs are specifically <strong>excluded</strong> for industrial buildings allowances.<br>" +
      "C is incorrect — the retail/showroom threshold is <strong>10%</strong> (not 12.5%).",
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 10,
    questionText:
      "Langley Limited (\"LANGLEY\") is an Irish resident company based in the food and ingredients sector. " +
      "The extract from the income statement of LANGLEY for the year ended 30 September 2025 is as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;width:100%;'>" +
      "<tbody>" +
      "<tr><td><strong>Gross profit</strong></td><td></td><td style='text-align:right;'><strong>€411,250</strong></td></tr>" +
      "<tr><td colspan='3'><strong>Less expenses:</strong></td></tr>" +
      "<tr><td>Salaries and wages</td><td></td><td style='text-align:right;'>62,500</td></tr>" +
      "<tr><td>Rent and rates</td><td></td><td style='text-align:right;'>3,500</td></tr>" +
      "<tr><td>Repairs</td><td><em>Note 1</em></td><td style='text-align:right;'>16,100</td></tr>" +
      "<tr><td>Insurance</td><td></td><td style='text-align:right;'>900</td></tr>" +
      "<tr><td>Professional fees</td><td><em>Note 2</em></td><td style='text-align:right;'>2,600</td></tr>" +
      "<tr><td>Depreciation</td><td></td><td style='text-align:right;'>14,000</td></tr>" +
      "<tr><td>Audit fees</td><td></td><td style='text-align:right;'>6,000</td></tr>" +
      "<tr><td>Subscriptions</td><td><em>Note 3</em></td><td style='text-align:right;'>2,400</td></tr>" +
      "<tr><td>Entertainment</td><td><em>Note 4</em></td><td style='text-align:right;'>600</td></tr>" +
      "<tr><td>Staff awards</td><td><em>Note 5</em></td><td style='text-align:right;'>1,000</td></tr>" +
      "<tr><td>Discount allowed</td><td></td><td style='text-align:right;'>500</td></tr>" +
      "<tr><td>Finance costs (all allowable)</td><td></td><td style='text-align:right;'>3,000</td></tr>" +
      "<tr><td>Utilities</td><td></td><td style='text-align:right;'>13,250</td></tr>" +
      "<tr><td></td><td></td><td style='text-align:right;'><strong>(126,350)</strong></td></tr>" +
      "<tr><td colspan='3'><strong>Add:</strong></td></tr>" +
      "<tr><td>Foreign rental income</td><td><em>Note 6</em></td><td style='text-align:right;'>5,000</td></tr>" +
      "<tr><td>Bad debts recovered</td><td></td><td style='text-align:right;'>600</td></tr>" +
      "<tr><td>Profit on sale of investments</td><td><em>Note 7</em></td><td style='text-align:right;'>5,200</td></tr>" +
      "<tr><td>Interest on tax overpaid</td><td></td><td style='text-align:right;'>2,000</td></tr>" +
      "<tr><td>Profit on sale of fixtures and fittings</td><td><em>Note 8</em></td><td style='text-align:right;'>3,100</td></tr>" +
      "<tr><td></td><td></td><td style='text-align:right;'><strong>15,900</strong></td></tr>" +
      "<tr><td><strong>Profit before tax</strong></td><td></td><td style='text-align:right;'><strong>€300,800</strong></td></tr>" +
      "</tbody></table>" +
      "<br><strong>Notes:</strong><ol>" +
      "<li>Repairs consists of the installation of a new heating system at a cost of €10,200 and some painting and decorating costing €5,900.</li>" +
      "<li>Professional fees includes debt collection fees of €200 as well as legal fees of €2,000 regarding the acquisition of a new property.</li>" +
      "<li>Subscriptions includes political donations of €900 and staff race sponsorship of €1,200. The company logo will be displayed on the participants bibs of those running the race.</li>" +
      "<li>Entertainment consists of customer entertainment of €450 and supplier entertainment of €150.</li>" +
      "<li>Staff awards relates to four one4all vouchers gifted to staff for outstanding contributions to the company.</li>" +
      "<li>The foreign rental income is net of expenses. This income is from a commercial property the company owns in the UK.</li>" +
      "<li>Sale of investments relates to the sale of Irish shares. The shares cost €9,200 in May 2018 and were sold for €14,400 in June 2025.</li>" +
      "<li>LANGLEY sold fixtures and fittings in 2025. The fixtures and fittings cost €8,000 in August 2023 and were sold for €11,100 in September 2025.</li>" +
      "<li>The total capital allowances for 2025 (including balancing allowances and charges and capital additions in the year) are €11,300. No adjustment is required to this amount.</li>" +
      "</ol>" +
      "<strong>Requirement</strong><br>" +
      "Calculate the corporation tax liability for LANGLEY for the year ended 30 September 2025.<br>" +
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
      "<strong>Add-backs:</strong><br>" +
      "• Repairs €10,200 (capital — new heating system)<br>" +
      "• Professional fees €2,000 (capital — property acquisition; debt collection €200 is allowable, no add-back)<br>" +
      "• Depreciation €14,000<br>" +
      "• Subscriptions €900 (political donations not allowable; race sponsorship €1,200 is allowable)<br>" +
      "• Entertainment €600 (all not allowable)<br>" +
      "• Staff awards €0 (one4all vouchers up to €500 each are exempt BIK, so deductible for employer)<br>" +
      "<strong>Total add-backs: €27,700</strong><br><br>" +
      "<strong>Deductions — remove non-Case I income:</strong><br>" +
      "• Profit on sale of investments €5,200 (CGT)<br>" +
      "• Profit on sale of F&F €3,100 (CGT)<br>" +
      "• Bad debts recovered €600 (was expensed — allowable; remove from deductions — keep in income = no deduction needed*)<br>" +
      "• Interest on tax overpaid €2,000 (tax-free in hands of taxpayer)<br>" +
      "• Foreign rental €5,000 (Case III)<br>" +
      "Total other income deducted: €15,300. Capital allowances: €11,300.<br><br>" +
      "<strong>Case I = €300,800 + €27,700 − €15,300 − €11,300 = €301,900</strong><br>" +
      "<strong>Case III (foreign rental) = €5,000</strong><br>" +
      "<strong>Total income = €306,900</strong><br><br>" +
      "<strong>Chargeable gains (grossed up for CT):</strong><br>" +
      "• Shares: (€14,400 − €9,200) × 33%/12.5% = €5,200 × 2.64 = €13,728<br>" +
      "• F&F: (€11,100 − €8,000) × 33%/12.5% = €3,100 × 2.64 = €8,184<br>" +
      "Total grossed-up gains = <strong>€21,912</strong><br><br>" +
      "CT @ 12.5% on (€301,900 + €21,912) = €323,812 × 12.5% = €40,477<br>" +
      "CT @ 25% on €5,000 = €1,250<br>" +
      "<strong>Total CT = €41,727</strong>",
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "The artist exemption is available to individuals who are deemed by the Revenue Commissioners to have " +
      "produced an original and creative work that is generally recognised as having cultural or artistic merit." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify, in relation to the artist exemption, the correct statements from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "Where an artist qualifies for the artist exemption, €40,000 per annum of earned artist income is exempt from income tax",
      B: "Individuals claiming the artist exemption must be resident, or ordinarily resident and domiciled, in the EU or EEA State",
      C: "An individual qualifying for artists exemption will be also exempt from universal social charge (USC) on the income exempt from income tax",
      D: "An individual qualifying for artists exemption is subject to PRSI on the income exempt from income tax",
    },
    correctAnswer: ["B", "D"],
    explanation:
      "B and D are correct.<br>" +
      "A is incorrect — the exemption limit is <strong>€50,000</strong> (not €40,000).<br>" +
      "C is incorrect — USC is <strong>not</strong> exempt; only income tax is exempt.<br>" +
      "D is correct — PRSI is still payable on exempt artist income.",
  },

  // --- Q13 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Heights Limited's (\"HEIGHTS\") corporation tax liability for the year ended 31 October 2025 is estimated " +
      "to be €175,000. Its corporation tax liability for the year ended 31 October 2024 was €190,000." +
      "<br><br><strong>Requirement</strong><br>" +
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
      "Minimum preliminary tax = lower of:<br>" +
      "• 90% of current year liability = 90% × €175,000 = €157,500<br>" +
      "• 100% of prior year liability = €190,000<br>" +
      "Minimum = <strong>€157,500</strong>.<br>" +
      "Due date = one month before the end of the accounting period = <strong>23 September 2025</strong>.",
  },

  // --- Q14 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "During March 2025, James Murphy, a sole trader registered for VAT, bought ten iPads for €1,200 each " +
      "excluding VAT. He realised in May 2025 that three of these iPads were surplus to requirements and he " +
      "took these iPads home for his family to use for private purposes." +
      "<br><br><strong>Requirement</strong><br>" +
      "Explain how James should account for VAT on the three iPads taken for private use.",
    options: {
      A: "Increase output VAT by €828",
      B: "Increase input VAT by €828",
      C: "Increase output VAT by €486",
      D: "There is no VAT impact",
    },
    correctAnswer: "A",
    explanation:
      "Taking the iPads for private use constitutes a <strong>self-supply</strong> for VAT purposes.<br>" +
      "Output VAT = 3 × €1,200 × 23% = <strong>€828</strong>.",
  },

  // --- Q15 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Companies are entitled to a deduction, as a trading expense, for qualifying donations." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify, in relation to corporation tax deductions for qualifying donations, the correct statements from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "The eligible organisation receiving the qualifying donation can be established anywhere in the European Economic Area (EEA) or the European Free Trade Association",
      B: "Donations to an approved sports body in the State to enable it to purchase, construct or improve facilities and/or equipment are eligible for a corporation tax deduction",
      C: "To qualify for a tax deduction, the donation to an eligible organisation or sports body in a 12-month accounting period must amount to at least €200",
      D: "To qualify for a tax deduction, the donation to an eligible organisation or sports body in a 12-month accounting period must amount to at least €250 and the upper limit (or maximum donation allowed for a deduction) is €1,000",
    },
    correctAnswer: ["A", "B"],
    explanation:
      "A and B are correct.<br>" +
      "C is incorrect — the minimum qualifying donation is <strong>€250</strong> (not €200).<br>" +
      "D is incorrect — while the minimum is €250, there is <strong>no upper limit</strong> on qualifying donations.",
  },

  // --- Q16 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 6,
    questionText:
      "Ger Brady is resident and domiciled in Ireland. During the tax year 2025, he completed the following transactions:" +
      "<br><br><strong>Transaction 1:</strong><br>" +
      "He sold his rental property on 1 July 2025 for €80,000. The allowable costs associated with the sale were €2,000. " +
      "He had originally acquired the property for €61,000 on 1 February 2015. The allowable costs associated with " +
      "the purchase of the property in 2015 were €1,500." +
      "<br><br><strong>Transaction 2:</strong><br>" +
      "On 1 September 2025, Ger sold two acres of development land to his son, Pat, for €10,000. The land has " +
      "planning permission for residential development. The market value of the land on 1 September 2025 was " +
      "€200,000. He originally bought it on 1 June 1982 for €5,000. At that date the current use value of the " +
      "land was €3,000." +
      "<br><br><strong>Transaction 3:</strong><br>" +
      "Ger sold a small farm for €260,000 on 1 October 2025. He originally acquired the farm as a gift from his " +
      "wife on 25 December 1992. The market value of the farm at that date was €50,000. The farm has been let " +
      "by Ger for the last ten years and is not development land. His wife originally acquired it for €32,000 on " +
      "1 July 1990." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate Ger's total chargeable gains, before the annual exemption, for 2025.<br>" +
      "All answers should be entered as positive values. Your answers should be rounded to the nearest whole number.",
    solution: {
      transaction1: 15500,
      transaction2: 191241,
      transaction3: 213856,
      totalChargeableGain: 420597,
    },
    explanation:
      "<strong>Transaction 1 (rental property):</strong><br>" +
      "Proceeds €80,000 − selling costs €2,000 = €78,000<br>" +
      "Cost €61,000 + purchase costs €1,500 = €62,500<br>" +
      "No indexation (acquired post-2003)<br>" +
      "Gain = €78,000 − €62,500 = <strong>€15,500</strong><br><br>" +
      "<strong>Transaction 2 (development land — connected person):</strong><br>" +
      "Sale to son → connected person → use market value = €200,000<br>" +
      "Development land rules: base cost = CUV indexed + hope value<br>" +
      "CUV: €3,000 × 2.253 (1982/83 index) = €6,759<br>" +
      "Hope value: original cost − CUV = €5,000 − €3,000 = €2,000<br>" +
      "Gain = €200,000 − €6,759 − €2,000 = <strong>€191,241</strong><br><br>" +
      "<strong>Transaction 3 (farm — gift from wife):</strong><br>" +
      "Inter-spouse transfer: no CGT on original gift. Ger takes wife's original cost.<br>" +
      "Wife's cost €32,000 × indexation factor 1.442 (1990/91) = €46,144<br>" +
      "Gain = €260,000 − €46,144 = <strong>€213,856</strong><br><br>" +
      "<strong>Total chargeable gain = €15,500 + €191,241 + €213,856 = €420,597</strong>",
  },

  // --- Q17 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 4,
    questionText:
      "Fabio Costello owns two properties that he lets out and on which he earns rental income. Details of his income " +
      "and expenses from these properties are as follows:" +
      "<br><br><strong>Property A:</strong><br>" +
      "Fabio acquired this commercial property on 1 April 2025 and let it for the first time on 1 August 2025 on a " +
      "21-year lease at a full annual rent of €12,000 payable on the first of each month. A bank loan was raised to " +
      "help purchase the property and interest of €1,800 was paid on 30 June 2025, and €3,600 on 31 December 2025 " +
      "for the period 1 July to 31 December 2025. A premium of €10,000 was also received under the terms of the new lease." +
      "<br><br>During 2025, Fabio incurred the following expenses in relation to repairs:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Date</th><th>Expense</th><th>€</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>30 April</td><td>Dry rot repairs</td><td>950</td></tr>" +
      "<tr><td>30 June</td><td>Window broken by vandals</td><td>80</td></tr>" +
      "<tr><td>28 December</td><td>Storm damage to the roof</td><td>1,400</td></tr>" +
      "</tbody></table>" +
      "<br><strong>Property B:</strong><br>" +
      "This is a residential property let at a full annual rent of €6,000 under a seven-year lease, which expired on " +
      "30 April 2025. The property was vacant from 1 May 2025 to 1 November 2025, when it was let again on a " +
      "five-year lease at a full rent of €9,000 per annum. The property is registered with the RTB." +
      "<br><br>During 2025, Fabio incurred the following expenses:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Date</th><th>Expense</th><th>€</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>20 May</td><td>Maintenance of blocked drains</td><td>90</td></tr>" +
      "<tr><td>31 July</td><td>Painting walls damaged by leak</td><td>700</td></tr>" +
      "<tr><td>20 October</td><td>Advertising for new tenant</td><td>140</td></tr>" +
      "</tbody></table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate Fabio's rental income assessable under Schedule D, Case V for the tax year 2025.<br>" +
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
      "<strong>Property A — Income:</strong><br>" +
      "Rent: €12,000 × 5/12 (Aug–Dec) = €5,000<br>" +
      "Premium: €10,000 × (51 − 21) / 50 = €10,000 × 30/50 = €6,000<br>" +
      "Total income = <strong>€11,000</strong><br><br>" +
      "<strong>Property A — Expenses:</strong><br>" +
      "Interest: pre-letting interest (Apr–Jun €1,800) is not allowable. Post-letting (Jul–Dec €3,600) is allowable.<br>" +
      "Storm damage to roof (€1,400) — allowable revenue repair.<br>" +
      "Dry rot repairs (€950) and window (€80) — incurred before first letting, not allowable.<br>" +
      "Total allowable expenses = €3,600 + €1,400 − €600 = <strong>€4,400</strong> (per solution: storm €1,400 + interest €3,600 = €4,400; dry rot/window disallowed as pre-letting)<br>" +
      "Net Property A = €11,000 − €4,400 = <strong>€6,600</strong><br><br>" +
      "<strong>Property B — Income:</strong><br>" +
      "Old lease: €6,000 × 4/12 (Jan–Apr) = €2,000<br>" +
      "New lease: €9,000 × 2/12 (Nov–Dec) = €1,500<br>" +
      "Total income = <strong>€3,500</strong><br><br>" +
      "<strong>Property B — Expenses:</strong><br>" +
      "All three expenses (€90 + €700 + €140) are allowable = <strong>€930</strong><br>" +
      "(Expenses during vacancy period between lettings are allowable as property is registered with RTB)<br>" +
      "Net Property B = €3,500 − €930 = <strong>€2,570</strong><br><br>" +
      "<strong>Total rental income = €6,600 + €2,570 = €9,170</strong>",
  },

  // --- Q18 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "There are several gains within Irish tax legislation that qualify for an exemption from capital gains tax (CGT)." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify the gains that are exempt from CGT from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "Winnings from betting, lotteries, sweepstakes or games with prizes",
      B: "Bonuses under the National Instalments Savings Scheme",
      C: "Gains on the disposal of development land",
      D: "A gain arising to an individual on the disposal of non-wasting chattels is exempt if the consideration does not exceed €5,240",
      E: "Sums obtained as compensation or damages for any wrong or injury suffered by an individual in their profession/vocation",
    },
    correctAnswer: ["A", "B", "E"],
    explanation:
      "A, B and E are exempt from CGT.<br>" +
      "C is incorrect — gains on disposal of development land are <strong>chargeable</strong> to CGT.<br>" +
      "D is incorrect — the non-wasting chattel exemption threshold is <strong>€2,540</strong> (not €5,240).",
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 1,
    questionText:
      '"Taxable persons" are obliged to register for VAT if the VAT thresholds are exceeded or are likely to be ' +
      "exceeded in a 12-month period." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify which of the following statements are correct with respect to VAT thresholds." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "The VAT threshold for persons supplying a service is €40,000",
      B: "The VAT threshold for persons supplying goods, including persons supplying both goods and services, where 90% or more of sales is derived from supplies of goods is €85,000",
      C: "The VAT threshold for persons supplying goods liable at the 13.5% or 23% rates which they have manufactured or produced from zero-rated materials is €42,500",
      D: "The VAT threshold for persons making mail order or distance sales into the State is €12,000",
    },
    correctAnswer: ["B", "C"],
    explanation:
      "B and C are correct.<br>" +
      "A is incorrect — the service threshold is <strong>€42,500</strong> (not €40,000).<br>" +
      "D is incorrect — the distance sales threshold is <strong>€10,000</strong> (EU-wide OSS threshold), not €12,000.",
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Carlos works full time as a sales rep for a computer software company, which provides him with a company car. " +
      "He works at least 35 hours a week, as well as overtime in busy periods. Carlos works away from the office " +
      "four out of the five days in the week. In 2025, Carlos drove 16,800 business kilometres and he keeps a log " +
      "of all his mileage on his laptop. The original market value (OMV) of his company car is €35,000. The company " +
      "car is a category C vehicle and was first provided to him by his employer in 2022." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate Carlos' taxable benefit-in-kind on his company car in 2025.<br>" +
      "The answer should be entered as a positive value.",
    correctAnswer: 6000,
    tolerance: 0,
    explanation:
      "Category C vehicle, 16,800 business km falls in the 15,000–20,000 km band → BIK rate = <strong>30%</strong>.<br><br>" +
      "Car first provided in 2022 (pre-2023) → €10,000 OMV reduction applies.<br>" +
      "Reduced OMV = €35,000 − €10,000 = €25,000<br><br>" +
      "BIK = €25,000 × 30% = €7,500<br>" +
      "High business mileage reduction (works away 4/5 days, 35+ hours): 20% reduction<br>" +
      "Reduction = €7,500 × 20% = €1,500<br>" +
      "Taxable BIK = €7,500 − €1,500 = <strong>€6,000</strong>",
  },

  // --- Q21 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Theresa bought her principal private residence in Clare on 1 February 1997. She lived in the house except " +
      "in the following periods:" +
      "<ul>" +
      "<li>She was required to live in Amsterdam from 1 October 1999 until 31 December 2000 for work purposes. Afterwards she returned home to live in her house in Clare.</li>" +
      "<li>She was also required to live in Donegal from 1 July 2005 until 31 December 2010 for work purposes. Afterwards she returned home to live in her house in Clare.</li>" +
      "<li>She was required to move to Madrid from 1 January 2012 until 31 December 2015 to supervise a project for work. She ended up renting out her house in Clare and never moved back. She is currently still living in Madrid.</li>" +
      "</ul>" +
      "Theresa sold her house on 1 February 2025. Theresa had no other disposals in 2025." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, for the purposes of Principal Private Residence relief (PPR), the number of months Theresa is deemed to have occupied her house.",
    options: {
      A: "221 months",
      B: "163 months",
      C: "173 months",
      D: "191 months",
    },
    correctAnswer: "C",
    explanation:
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Period</th><th>Occupied</th><th>Unoccupied</th><th>Total</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>01/02/1997 – 01/10/1999</td><td>32</td><td></td><td>32</td></tr>" +
      "<tr><td>01/10/1999 – 31/12/2000 (Amsterdam – work abroad, deemed)</td><td>15</td><td></td><td>15</td></tr>" +
      "<tr><td>01/01/2001 – 01/07/2005</td><td>54</td><td></td><td>54</td></tr>" +
      "<tr><td>01/07/2005 – 31/12/2010 (Donegal – work in Ireland, max 4 yrs = 48 months deemed)</td><td>48</td><td>18</td><td>66</td></tr>" +
      "<tr><td>01/01/2011 – 31/12/2011 (returned home)</td><td>12</td><td></td><td>12</td></tr>" +
      "<tr><td>01/01/2012 – 01/02/2024 (Madrid – never returned, no exemption)</td><td></td><td>145</td><td>145</td></tr>" +
      "<tr><td>01/02/2024 – 01/02/2025 (final 12 months, always deemed)</td><td>12</td><td></td><td>12</td></tr>" +
      "<tr><td><strong>Total</strong></td><td><strong>173</strong></td><td><strong>163</strong></td><td><strong>336</strong></td></tr>" +
      "</tbody></table><br>" +
      "Deemed occupied = <strong>173 months</strong>.<br>" +
      "Note: Donegal period (work within Ireland) is capped at 4 years (48 months) deemed, but total period was 66 months so 18 months are unoccupied.",
  },

  // --- Q22 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Loyal Investments Limited (\"LOYAL\"), an Irish resident company, is to pay a dividend of €500,000 on " +
      "1 November 2025." +
      "<br><br>Its shareholders are as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Shareholder</th><th>Number of Ordinary Shares</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Mr Brannigan (resident in the State)</td><td>6,000</td></tr>" +
      "<tr><td>Happy Investments Limited (resident in the State)</td><td>36,000</td></tr>" +
      "<tr><td>Arc - Irish registered charity</td><td>2,000</td></tr>" +
      "<tr><td>Potts Investments Limited (resident in the State)</td><td>6,000</td></tr>" +
      "<tr><td><strong>Total shares in issue</strong></td><td><strong>50,000</strong></td></tr>" +
      "</tbody></table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate the dividend withholding tax (DWT) payable by LOYAL, if any, assuming all declarations necessary " +
      "to obtain exemptions are given.<br>" +
      "The answer should be rounded to the nearest whole number. The answer should be entered as a positive value.",
    correctAnswer: 15000,
    tolerance: 0,
    explanation:
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Shareholder</th><th>Shares</th><th>Dividend</th><th>DWT</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Mr Brannigan (individual resident)</td><td>6,000</td><td>€60,000</td><td>€60,000 × 25% = €15,000</td></tr>" +
      "<tr><td>Happy Investments Limited (Irish resident company)</td><td>36,000</td><td>€360,000</td><td>Exempt</td></tr>" +
      "<tr><td>Arc (Irish registered charity)</td><td>2,000</td><td>€20,000</td><td>Exempt</td></tr>" +
      "<tr><td>Potts Investments Limited (Irish resident company)</td><td>6,000</td><td>€60,000</td><td>Exempt</td></tr>" +
      "</tbody></table><br>" +
      "Total DWT = <strong>€15,000</strong>.",
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 1,
    questionText:
      "Loyal Investments Limited (\"LOYAL\") paid a dividend on 1 November 2025." +
      "<br><br><strong>Requirement</strong><br>" +
      "State, in respect of the dividend paid on 1 November 2025, the due date for payment of DWT by LOYAL.",
    options: {
      A: "The DWT must be paid before 14 November 2025",
      B: "The DWT must be paid before 30 November 2025",
      C: "The DWT must be paid before 14 December 2025",
      D: "The DWT must be paid before 31 December 2025",
    },
    correctAnswer: "C",
    explanation:
      "DWT must be remitted to Revenue by the <strong>14th of the month following</strong> the month in which the dividend is paid.<br>" +
      "Dividend paid in November 2025 → DWT due by <strong>14 December 2025</strong>.",
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify the statement that accurately describes what is meant by tax planning from the following.",
    options: {
      A: "The deliberate and illegal practice of not paying taxes by not reporting income/profits, claiming expenses not legally incurred or allowed, or by not paying taxes owed",
      B: "Where a taxpayer organises their affairs in a tax-efficient manner so as to reduce their tax liability",
      C: "The use of loopholes within tax legislation to reduce the taxpayer's tax liability",
    },
    correctAnswer: "B",
    explanation:
      "<strong>Tax planning (B)</strong> = legal organisation of affairs to minimise tax liability.<br>" +
      "A = <strong>Tax evasion</strong> (illegal).<br>" +
      "C = <strong>Tax avoidance</strong> (exploitation of loopholes, legal but aggressive).",
  },

  // --- Q25 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "The dependent relative credit is available if the taxpayer maintains a dependent relative at their own " +
      "expense. The dependent relative credit is not available if the income of the dependent relative exceeds " +
      "a specified limit." +
      "<br><br><strong>Requirement</strong><br>" +
      "State the specified limit for 2025. The answer should be entered as a positive value.",
    correctAnswer: 18028,
    tolerance: 0,
    explanation:
      "The specified income limit for the dependent relative credit for 2025 is <strong>€18,028</strong>.",
  },

  // --- Q26 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Olga, a widow, wishes to rent three of her spare bedrooms to four students attending the nearby university " +
      "from September 2025. Each student will pay €650 per month from 1 September 2025 to 30 June 2026 for " +
      "accommodation, utilities, food and laundry. After June 2026 Olga intends to downsize to a smaller property " +
      "and will no longer have spare bedrooms available." +
      "<br><br>The monthly costs associated with the provision of the accommodation will be as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Item</th><th>Monthly costs (€)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Utilities</td><td>300</td></tr>" +
      "<tr><td>Food</td><td>800</td></tr>" +
      "<tr><td>Laundry costs</td><td>200</td></tr>" +
      "</tbody></table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate Olga's taxable rental profits for 2025 and 2026.<br>" +
      "You can assume that the tax rules in 2026 remain the same as in 2025.",
    options: {
      A: "2025: €5,200  2026: €7,800",
      B: "2025: €0,  2026: €0",
      C: "2025: €0,  2026: €7,800",
      D: "2025: €5,200  2026: €0",
    },
    correctAnswer: "C",
    explanation:
      "<strong>2025 (Sep–Dec = 4 months):</strong><br>" +
      "Gross rental income = €650 × 4 students × 4 months = €10,400<br>" +
      "€10,400 is below the rent-a-room relief threshold of <strong>€14,000</strong> → income is <strong>fully exempt</strong>.<br><br>" +
      "<strong>2026 (Jan–Jun = 6 months):</strong><br>" +
      "Gross rental income = €650 × 4 students × 6 months = €15,600<br>" +
      "€15,600 <strong>exceeds</strong> the €14,000 threshold → the entire amount becomes taxable under Case V.<br>" +
      "Net taxable profit = €15,600 − (€300 + €800 + €200) × 6 months = €15,600 − €7,800 = <strong>€7,800</strong>.",
  },

  // --- Q27 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Copco Limited (\"COPCO\") produces and sells flat pack furniture. The furniture is supplied with instructions " +
      "in a booklet form. The value of each booklet is approximately €5 (VAT rate of 0%) while the price of the " +
      "furniture is €890 (ex VAT). The total sales value of the furniture is €895 (ex VAT)." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate how much VAT COPCO will charge on the sale of the flat pack furniture.<br>" +
      "Your answer should be rounded to the nearest whole number. The answer should be entered as a positive value.",
    correctAnswer: 206,
    tolerance: 0,
    explanation:
      "The booklet is ancillary to the main supply of furniture. The <strong>composite supply rule</strong> applies — " +
      "the dominant supply is the furniture, which is subject to VAT at <strong>23%</strong>.<br>" +
      "VAT = €895 × 23% = €205.85 ≈ <strong>€206</strong>.",
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 1,
    questionText:
      "Thomas is an electrician and has been operating as a sole trader for over 15 years. In the last few years, " +
      "his business has been expanding, and he has decided to get an extra pair of hands to support him with the business." +
      "<br><br>He has interviewed Peter, an electrician, who qualified within the last year. Peter will work 35 hours a " +
      "week for Thomas at a rate of €50 per hour. He will get paid overtime (€75 per hour) for any hours worked " +
      "in excess of 35 hours a week. Peter will invoice Thomas with his hours worked every Friday." +
      "<br><br>Peter has agreed to provide his own tools. Peter requires sign off from Thomas if he wants to take on any " +
      "other work outside of Thomas' business. Thomas has made it clear that Peter needs to be available between " +
      "the hours of 10:00 and 16:00, Monday to Friday." +
      "<br><br><strong>Requirement</strong><br>" +
      "Conclude, based on the information provided, if Peter is entering into a contract of service or a contract for services.",
    options: {
      A: "Peter is entering into a contract of service",
      B: "Peter is entering into a contract for services",
    },
    correctAnswer: "A",
    explanation:
      "Peter is an <strong>employee</strong> (contract of service). The three-part test is satisfied:<br>" +
      "1. <strong>Exchange of remuneration for work</strong> — Yes (hourly rate + overtime).<br>" +
      "2. <strong>Personal service</strong> — Peter must perform the work himself.<br>" +
      "3. <strong>Sufficient control by employer</strong> — Thomas sets hours (10:00–16:00, Mon–Fri) and requires sign-off for any outside work.<br>" +
      "All three mutuality of obligation tests are met → contract of service.",
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 4,
    questionText:
      "Yasmin McDonnell has been trading for a number of years to a year-end of 31 May. In 2025, Yasmin changed " +
      "her accounting year-end to correspond with the calendar year, 31 December." +
      "<br><br>Profits recorded by Yasmin are as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Period</th><th>€</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>12 months to 31 May 2024</td><td>11,000</td></tr>" +
      "<tr><td>12 months to 31 May 2025</td><td>19,000</td></tr>" +
      "<tr><td>7 months to 31 December 2025</td><td>15,000</td></tr>" +
      "</tbody></table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate Yasmin's assessable profits for 2025 and 2024.<br>" +
      "All answers should be entered as positive values. The answer should be rounded to the nearest whole number.",
    solution: {
      assessableProfitsFor2025: 22917,
      assessableProfitsFor2024: 15667,
    },
    explanation:
      "<strong>Year of assessment 2025</strong> — profit period 01/01/2025 to 31/12/2025:<br>" +
      "Jan–May 2025 (5 months of the 12 months to 31/05/2025): €19,000 × 5/12 = €7,917<br>" +
      "Jun–Dec 2025 (7 months to 31/12/2025): €15,000<br>" +
      "Total 2025 = <strong>€22,917</strong><br><br>" +
      "<strong>Year of assessment 2024</strong> — revised to 01/01/2024 to 31/12/2024:<br>" +
      "Jan–May 2024 (5 months of the 12 months to 31/05/2024): €11,000 × 5/12 = €4,583<br>" +
      "Jun–Dec 2024 (7 months of the 12 months to 31/05/2025): €19,000 × 7/12 = €11,083<br>" +
      "Total 2024 = <strong>€15,667</strong>",
  },

  // --- Q30 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 2,
    questionText:
      "Bobby constructed a hotel in July 1992 for €260,000. He received a capital grant from the State of €10,000 " +
      "for the construction of the hotel. Additional expenditure was incurred as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Date</th><th>Description</th><th>€</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>August 2002</td><td>Repairs to roof after storm</td><td>3,000</td></tr>" +
      "<tr><td>May 2005</td><td>Three new bedrooms added</td><td>90,000</td></tr>" +
      "</tbody></table>" +
      "<br>Bobby sold the hotel on 31 May 2025 for €650,000. He had no other chargeable gains during 2025." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate Bobby's capital gains tax (CGT) liability arising on the sale of the hotel in 2025.",
    options: {
      A: "€102,211",
      B: "€72,930",
      C: "€72,511",
      D: "€71,521",
    },
    correctAnswer: "C",
    explanation:
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Item</th><th>€</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Sale proceeds</td><td>650,000</td></tr>" +
      "<tr><td>Acquisition cost net of grant: (€260,000 − €10,000) × 1.356 (1992 index)</td><td>(339,000)</td></tr>" +
      "<tr><td>Storm repairs Aug 2002 — revenue expenditure, not capital</td><td>0</td></tr>" +
      "<tr><td>New bedrooms May 2005 (post-2003, no indexation)</td><td>(90,000)</td></tr>" +
      "<tr><td>Chargeable gain</td><td>221,000</td></tr>" +
      "<tr><td>Less annual exemption</td><td>(1,270)</td></tr>" +
      "<tr><td>Net gain</td><td>219,730</td></tr>" +
      "<tr><td>CGT @ 33%</td><td><strong>72,511</strong></td></tr>" +
      "</tbody></table>",
  },

  // --- Q31 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify, in respect of a Deed of Covenant, the correct statements from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "The person paying the covenant has their total income reduced by the gross covenant paid",
      B: "The person paying the covenant must deduct 25% tax from the gross covenant and pay this to the Revenue before paying the covenant",
      C: "Where covenant payments are made to individuals who are aged 65 or over, the relief is subject to a maximum of 10% of total income",
      D: "Covenant payments from parents to their own children under the age of 18 do not qualify for relief",
    },
    correctAnswer: ["A", "D"],
    explanation:
      "A and D are correct.<br>" +
      "B is incorrect — the rate deducted from the gross covenant is the <strong>standard rate of 20%</strong> (not 25%).<br>" +
      "C is incorrect — the 10% of income restriction applies to covenants to <strong>permanently incapacitated persons</strong>, not those aged 65+.",
  },

  // --- Q32 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 6,
    questionText:
      "Bella, a 63-year-old widow with no dependent children, is in receipt of the following sources of Irish income in 2025:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th colspan='2'>Dividends received (net):</th><th>€</th></tr></thead>" +
      "<tbody>" +
      "<tr><td></td><td>Rover DAC</td><td>4,380</td></tr>" +
      "<tr><td></td><td>Jewel Manufacturing DAC</td><td>650</td></tr>" +
      "<tr><td></td><td><strong>Total</strong></td><td><strong>5,030</strong></td></tr>" +
      "</tbody></table>" +
      "<br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th colspan='2'>Deposit interest received (net):</th><th>€</th></tr></thead>" +
      "<tbody>" +
      "<tr><td></td><td>Bank of Ireland</td><td>1,600</td></tr>" +
      "<tr><td></td><td>AIB interest</td><td>180</td></tr>" +
      "<tr><td></td><td><strong>Total</strong></td><td><strong>1,780</strong></td></tr>" +
      "</tbody></table>" +
      "<br>Bella is also in receipt of a contributory widow's pension of <strong>€15,044</strong>." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate Bella's net income tax payable/(refundable) for 2025.<br>" +
      "Total tax at the appropriate rates should be entered as positive values.<br>" +
      "The refundable and non-refundable credits should be entered as negative values.<br>" +
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
      "<strong>Gross up income:</strong><br>" +
      "Schedule D Case IV (deposit interest gross): €1,780 ÷ 0.67 = €2,657<br>" +
      "Schedule E (widow's pension): €15,044<br>" +
      "Schedule F (dividends gross): €5,030 ÷ 0.75 = €6,707<br>" +
      "<strong>Taxable income = €24,408</strong><br><br>" +
      "<strong>Tax calculation:</strong><br>" +
      "DIRT income €2,657 × 33% = €877<br>" +
      "Remaining €21,751 × 20% = €4,350<br>" +
      "<strong>Total tax = €5,227</strong><br><br>" +
      "<strong>Non-refundable credits:</strong><br>" +
      "Widowed Person credit: €2,540<br>" +
      "PAYE credit: €2,000<br>" +
      "DIRT credit: €877<br>" +
      "Total = €5,417, restricted to tax = <strong>€5,227</strong> (net tax = €0)<br><br>" +
      "<strong>Refundable credit:</strong><br>" +
      "DWT paid = €6,707 × 25% = <strong>€1,677 refund</strong>",
  },

  // --- Q33 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "The Universal Social Charge (USC) is a tax payable on gross income after relief for certain trading " +
      "losses and capital allowances, but before relief for pension contributions." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify, in relation to the Universal Social Charge (USC), the correct statements from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "All individuals are liable to pay USC if their gross income is greater than €13,000 per annum",
      B: "USC is levied on gross income before pension contributions",
      C: "Income subjected to DIRT is exempt from USC",
      D: "Income qualifying for Rent-a-Room relief is liable to USC",
    },
    correctAnswer: ["A", "B", "C"],
    explanation:
      "A, B and C are correct.<br>" +
      "D is incorrect — income qualifying for Rent-a-Room relief is exempt from both income tax <strong>and USC</strong>.",
  },

  // --- Q34 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Where a company incurs a trading loss, it may obtain relief from corporation tax." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify, in relation to trading losses, the correct statements from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "A section 396A claim must be made before a claim under section 396B",
      B: "The claim for loss relief under section 396A and section 396B must be made within one year of the end of the accounting period in which the loss occurs",
      C: "There is no time limit for claiming section 396(1) loss relief as the loss can be carried forward indefinitely",
      D: "A loss forward must be set off against the first available income of the same trade for an earlier future accounting period in priority to a later future accounting period",
    },
    correctAnswer: ["A", "C", "D"],
    explanation:
      "A, C and D are correct.<br>" +
      "B is incorrect — the claim for s396A/s396B must be made within <strong>two years</strong> (not one year) of the end of the accounting period in which the loss occurs.",
  },

  // --- Q35 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "George is 72 years old and single. His gross employment income for 2025 is €75,000." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate George's liability to the Universal Social Charge (USC) for 2025.<br>" +
      "The answer should be entered as positive. The answer should be rounded to the nearest whole number.",
    correctAnswer: 2043,
    tolerance: 0,
    explanation:
      "George is aged 70+ but earns €75,000 which exceeds €60,000, so the reduced 3% rate does <strong>not</strong> apply in full.<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Band</th><th>Income</th><th>Rate</th><th>USC</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>First €12,012</td><td>€12,012</td><td>0.5%</td><td>€60</td></tr>" +
      "<tr><td>Next €15,370</td><td>€15,370</td><td>2%</td><td>€307</td></tr>" +
      "<tr><td>Next €42,662</td><td>€42,662</td><td>3%</td><td>€1,280</td></tr>" +
      "<tr><td>Remainder (€75,000 − €70,044)</td><td>€4,956</td><td>8%</td><td>€396</td></tr>" +
      "<tr><td><strong>Total USC</strong></td><td></td><td></td><td><strong>€2,043</strong></td></tr>" +
      "</tbody></table>",
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify the examples of a wasting chattel from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "Livestock",
      B: "Private motor car",
      C: "Fine art such as a painting",
      D: "Yacht",
      E: "Bloodstock",
    },
    correctAnswer: ["A", "B", "D", "E"],
    explanation:
      "Livestock (A), private motor cars (B), yachts (D) and bloodstock (E) are all <strong>wasting chattels</strong> — assets with a predictable useful life of 50 years or less.<br>" +
      "C is incorrect — fine art such as a painting is a <strong>non-wasting chattel</strong> (useful life > 50 years).",
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Jim, who is a baker, supplies you with the following information from his accounts for the months of May and June 2025. All figures are exclusive of VAT." +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Income/Expense</th><th>VAT Rate</th><th>May/June (€)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Sales of bread</td><td>Zero-rated</td><td>10,000</td></tr>" +
      "<tr><td>Purchase of ingredients</td><td>Zero-rated</td><td>5,000</td></tr>" +
      "<tr><td>Expenditure on petrol</td><td>23%</td><td>1,000</td></tr>" +
      "<tr><td>Purchase of mixing machine</td><td>23%</td><td>3,000</td></tr>" +
      "<tr><td>Lease rentals – vans</td><td>23%</td><td>2,000</td></tr>" +
      "<tr><td>Bank interest</td><td>Exempt</td><td>400</td></tr>" +
      "</tbody></table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate the VAT recoverable by Jim for the period May/June 2025.<br>" +
      "The answer should be entered as a positive value.",
    correctAnswer: 1150,
    tolerance: 0,
    explanation:
      "Jim makes only zero-rated supplies (bread), so he has <strong>full input VAT recovery</strong> on taxable inputs.<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Item</th><th>VAT recoverable</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Petrol</td><td>€0 (blocked — petrol input VAT not recoverable)</td></tr>" +
      "<tr><td>Mixing machine: €3,000 × 23%</td><td>€690</td></tr>" +
      "<tr><td>Van lease rentals: €2,000 × 23%</td><td>€460</td></tr>" +
      "<tr><td><strong>Total VAT recoverable</strong></td><td><strong>€1,150</strong></td></tr>" +
      "</tbody></table>",
  },

  // --- Q38 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "single",
    marks: 1,
    questionText:
      "Jim files his VAT return for the period May/June 2025 using ROS." +
      "<br><br><strong>Requirement</strong><br>" +
      "State the date by which Jim must file his VAT return for the period May/June 2025.",
    options: {
      A: "23 July 2025",
      B: "31 July 2025",
      C: "23 August 2025",
      D: "31 August 2025",
    },
    correctAnswer: "A",
    explanation:
      "VAT returns for bi-monthly periods are due by the <strong>19th of the month following</strong> the period end if filed by post, " +
      "extended to the <strong>23rd when filed via ROS</strong>.<br>" +
      "May/June 2025 period → due <strong>23 July 2025</strong>.",
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 4,
    questionText:
      "Timmy is retired and is 69 years old. He is married to Tara (67), and they are jointly assessed. Tara has no income in 2025." +
      "<ul>" +
      "<li>Timmy receives his private pension of €64,800 (PAYE deducted is €8,830) in 2025.</li>" +
      "<li>He received €24,000 (net) of dividends from Irish companies.</li>" +
      "<li>He received foreign rental income of €14,000.</li>" +
      "<li>Timmy and Tara had qualifying medical expenses of €730 in 2025 of which they received a refund of €250 from the VHI.</li>" +
      "</ul>" +
      "<strong>Requirement</strong><br>" +
      "Calculate Timmy and Tara's non-refundable and refundable tax credits for 2025.<br>" +
      "The answers should be entered as positive values.",
    solution: {
      nonRefundableTaxCredits: 6586,
      refundableTaxCredits: 16830,
    },
    explanation:
      "<strong>Non-refundable tax credits:</strong><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Credit</th><th>€</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Married persons credit</td><td>4,000</td></tr>" +
      "<tr><td>Employee (PAYE) tax credit</td><td>2,000</td></tr>" +
      "<tr><td>Age credit (jointly assessed, both 65+): €245 × 2</td><td>490</td></tr>" +
      "<tr><td>Medical expenses: (€730 − €250) × 20%</td><td>96</td></tr>" +
      "<tr><td><strong>Total</strong></td><td><strong>6,586</strong></td></tr>" +
      "</tbody></table>" +
      "<br><strong>Refundable tax credits:</strong><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Credit</th><th>€</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>PAYE deducted at source</td><td>8,830</td></tr>" +
      "<tr><td>DWT on dividends: €24,000 ÷ 75 × 25</td><td>8,000</td></tr>" +
      "<tr><td><strong>Total</strong></td><td><strong>16,830</strong></td></tr>" +
      "</tbody></table>",
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Mock Paper 2026",
    type: "computation",
    marks: 5,
    questionText:
      "Elsa is employed as financial controller by Olaf Limited (\"OLAF\"). She was paid a salary of €115,000 " +
      "for 2025. Elsa participates in a performance related bonus scheme and received a bonus of €12,000 on " +
      "28 January 2025. This bonus related to her work in 2024. For 2025, she was paid her bonus of €15,000 " +
      "on 3 February 2026." +
      "<br><br>OLAF loaned Elsa €50,000. She used the loan to purchase a holiday home in Portugal. This loan was issued " +
      "on 1 June 2025. OLAF charged Elsa annual interest at 6.5% on this loan." +
      "<br><br>OLAF also provided Elsa with a one-bedroom apartment in Dublin, which she occupied for all of 2025. The " +
      "company owns the apartment, which has a market value of €590,000. The company engaged an estate agent " +
      "who advised that if the apartment were rented on the open market, the monthly rent would be €2,700." +
      "<br><br>Elsa has shown an interest in Positive Psychology and in 2025 she undertook an advanced diploma in " +
      "Positive Psychology. OLAF paid €2,600 for the course as a gesture of goodwill even though the course " +
      "is not related to Elsa's current role." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate Elsa's taxable Schedule E income for 2025.<br>" +
      "The amounts should be rounded to the nearest whole number. The answers should be entered as positive values.",
    solution: {
      salaryAndBonus: 127000,
      employerLoan: 2042,
      freeUseOfApartment: 32400,
      courseFees: 2600,
      totalTaxableIncome: 164042,
    },
    explanation:
      "<strong>Salary & Bonus:</strong><br>" +
      "Salary €115,000 + bonus received Jan 2025 €12,000 = <strong>€127,000</strong><br>" +
      "(The 2025 bonus of €15,000 paid on 3 Feb 2026 is taxable in 2026, not 2025.)<br><br>" +
      "<strong>Employer loan BIK:</strong><br>" +
      "Preferential loan rate for non-home loans = 13.5%. OLAF charges 6.5%. Difference = 7%.<br>" +
      "BIK = €50,000 × 7% × 7/12 (Jun–Dec) = <strong>€2,042</strong><br><br>" +
      "<strong>Free use of apartment:</strong><br>" +
      "BIK = open market rent = €2,700 × 12 = <strong>€32,400</strong><br><br>" +
      "<strong>Course fees:</strong><br>" +
      "Not related to Elsa's current role → taxable BIK = <strong>€2,600</strong><br><br>" +
      "<strong>Total taxable Schedule E income = €127,000 + €2,042 + €32,400 + €2,600 = €164,042</strong>",
  },
];

// --- Export --------------------------------------------------------------------
if (typeof module !== "undefined" && module.exports) {
  module.exports = { taxMock2026 };
}
