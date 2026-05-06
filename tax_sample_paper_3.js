const taxSamplePaper3 = [
  // --- Q1 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "In November 2025 Mitch Brady purchased a new house, constructed by an approved contractor, for €325,000. He paid a deposit of €45,000 and secured a mortgage with a qualifying lender for the balance. Mitch is a first-time buyer. Details of his income tax paid for the past five years is as follows:\n\n" +
      "2021: €1,200 (started employment in September)\n" +
      "2022: €6,200\n" +
      "2023: €6,300\n" +
      "2024: €3,500 (laid off for 4 months)\n" +
      "2025: €6,800\n\n" +
      "Requirement\n" +
      "Calculate the Help to Buy (HTB) relief available in 2025.",
    correctAnswer: 17200,
    tolerance: 0,
  },

  // --- Q2 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 1,
    questionText: "Identify to whom the HTB relief will be refunded.",
    options: {
      A: "The HTB will be refunded to Mitch on the completion of the claim",
      B: "The HTB will be refunded to qualifying lender on the completion of the claim",
      C: "The HTB will be refunded to the approved contractor on the completion of the claim",
      D: "None of the above",
    },
    correctAnswer: "C",
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 4,
    questionText:
      "Desmond and Jen are married and jointly assessed. Desmond is a finance executive and has a salary of €159,000 (PAYE paid €50,800) in 2025. Jen is a marketing executive and has a salary of €215,000 (PAYE paid €73,200) in 2025.\n\n" +
      "They have three children, two of which are in third level education. Joe is an undergraduate student in UCC, and his fees are €3,000 in 2025. Caroline is doing a Masters in DCU, and her fees are €13,000 in 2025.\n\n" +
      "Desmond and Jen also have qualifying medical expenses of €1,330 in 2025.\n\n" +
      "Requirement\n" +
      "Calculate the total non-refundable tax credits that Desmond and Jen can avail of for the tax year 2025.",
    correctAnswer: 9666,
    tolerance: 0,
  },

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText: "Identify which of the following statements are correct in relation to interest on overdue corporation tax.\nSelect ALL that apply",
    options: {
      A: "If there is a default in payment of corporation tax, interest is charged by Revenue at 0.0291% per day or part of a day",
      B: "Where a small company defaults in the payment of preliminary tax, does not pay sufficient preliminary tax or does not pay its preliminary tax by the due date, interest is calculated on the total of the corporation tax for that accounting period",
      C: "If the Form CT1 is filed within two months after the due filing date, the surcharge is 10% of the tax due for the period, subject to a maximum of €12,695",
      D: "Interest is paid by Revenue at 0.011% per day or part thereof on overpaid tax",
    },
    correctAnswer: ["B", "D"],
  },

  // --- Q5 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Caroline is 39 years old and single. She left her job at the end of February 2025 where she earned €8,000 in total in January and February. She started a new job on 1 March 2025. Her new salary is €5,000 per month. She also received a signing-on bonus from her new employer on 1 March 2025 of €8,500. Caroline pays €400 monthly into her pension. A monthly PHI premium of €70 is deducted through payroll.\n\n" +
      "Caroline is taxed on the cumulative basis. RPN to 29 Feb 2025: Gross salary €8,000, Taxable salary €7,200.\n\n" +
      "Calculate Caroline’s taxable cumulative salary to 31 March 2025.",
    options: {
      A: "€13,030",
      B: "€20,230",
      C: "€20,300",
      D: "€20,700",
    },
    correctAnswer: "B",
  },

  // --- Q6 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Calculate the PAYE to be deducted from Caroline’s salary for March 2025.",
    options: {
      A: "€4,119",
      B: "€4,893",
      C: "€5,226",
      D: "€5,892",
    },
    correctAnswer: "A",
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Carma Cakery Limited (“CARMA”) results:\n" +
      "Year ended 31/10/2024: Adjusted Trading Profit €240,000, Interest €3,000, Rental €25,000, Capital Gains €48,000.\n" +
      "Year ended 31/10/2025: Adjusted Trading Loss (€390,000), Interest €5,000, Rental €26,000, Capital Gains NIL.\n\n" +
      "Calculate the corporation tax liability for CARMA for the year ended 31 October 2025.",
    options: {
      A: "€48,750",
      B: "€7,750",
      C: "€625",
      D: "NIL",
    },
    correctAnswer: "D",
  },

  // --- Q8 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Calculate the corporation tax liability for CARMA for the year ended 31 October 2024 (assuming losses from 2025 are carried back where possible).",
    options: {
      A: "NIL",
      B: "€2,000",
      C: "€3,250",
      D: "€33,250",
    },
    correctAnswer: "B",
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 1,
    questionText: "Identify which of the following sources of income is NOT liable to PRSI.",
    options: {
      A: "Rental income",
      B: "Dividends received",
      C: "Redundancy payments",
      D: "Bank deposit interest",
    },
    correctAnswer: "C",
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText: "Identify which of the following statements are correct in relation to the CGT treatment of spouses and civil partners.\nSelect ALL that apply",
    options: {
      A: "A disposal of an asset from one spouse to the other does not give rise to a CGT liability, provided that the couple are living together for tax purposes",
      B: "The asset is deemed to have passed from one spouse to the other at a value that gives rise to no gain or no loss",
      C: "The whole period of ownership by both spouses is considered when determining the indexation date on a subsequent disposal",
      D: "Where a married couple are living together in the year of assessment, the net chargeable gains accruing to one spouse should be reduced by any unutilised allowable losses accruing to the other spouse for the same year",
    },
    correctAnswer: ["A", "B", "D"],
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Paul commences to trade as a bookkeeper on 1 September 2023. Profits:\n" +
      "12m to 31 August 2024: €104,000\n" +
      "12m to 31 August 2025: €96,000\n" +
      "12m to 31 August 2026: €60,000\n\n" +
      "Calculate Paul’s taxable profits in 2025.",
    options: {
      A: "€96,000",
      B: "€93,333",
      C: "€101,333",
      D: "€84,000",
    },
    correctAnswer: "B",
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText: "Identify which of the following statements are correct with respect to the VAT records maintained by a VAT registered trader.\nSelect ALL that apply",
    options: {
      A: "The sales records must include the amount charged in respect of every sale to a registered person and a daily entry of total charged to unregistered persons",
      B: "An accountable person must retain all books and records for eight years from the date of the latest transaction",
      C: "An accountable person must retain all books, records and documents relevant to the business including invoices, receipts and bank statements",
      D: "There is a requirement to retain the paper originals of any third-party record even where an electronic copy is generated",
    },
    correctAnswer: ["A", "C"],
  },

  // --- Q13 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Genevive sold the following in 2025:\n" +
      "- Antique dresser for €2,570 (costs €80). Inherited 2009 (value €1,500). Original cost to cousin €500.\n" +
      "- A stallion for €2,500 (purchased 2018 for €6,000).\n\n" +
      "Calculate Genevive’s CGT liability, if any, in 2025 (ignore annual exemption).",
    options: {
      A: "€4,490",
      B: "€1,482",
      C: "€327",
      D: "€15",
    },
    correctAnswer: "D",
  },

  // --- Q14 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "On 1 January 2025, Freebie Limited purchased notebooks worth €2,200 (ex-VAT) to give to customers free of charge. Notebook value is €11 each. Calculate the output VAT and the input VAT on the notebooks.",
    options: {
      A: "Output VAT €506, Input VAT €506",
      B: "Output VAT €297, Input VAT €297",
      C: "Output VAT €0, Input VAT €506",
      D: "Output VAT €0, Input VAT €297",
    },
    correctAnswer: "C",
  },

  // --- Q15 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 1,
    questionText: "Determine by which date the monthly PAYE submission must be made assuming it is submitted via ROS.",
    options: {
      A: "10 days after the end of the month",
      B: "13 days after the end of the month",
      C: "14 days after the end of the month",
      D: "20 days after the end of the month",
    },
    correctAnswer: "C",
  },

  // --- Q16 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 8,
    questionText:
      "Jumbo Jim Limited 2025 results:\n" +
      "Profit before tax: €296,012.\n" +
      "Add-backs needed:\n" +
      "- Wages: Statutory redundancy €10,000, Pension accrual €2,500.\n" +
      "- Depreciation: €3,750.\n" +
      "- Motor: Leased car (€4,670) price restriction (List price €28k vs €24k limit).\n" +
      "- Prof fees: Architect fees (capital) €7,200.\n" +
      "- Marketing: Entertaining customers €900.\n" +
      "- Other: Suppliers hampers €80, Staff party €870 (Wait, solution adds back €230 for hampers/appeal but not staff party? Check solution p.24: €80 + €150 = €230). Total addbacks = €15,247.\n\n" +
      "Calculate the Total Corporation Tax Payable.",
    correctAnswer: 38947,
    tolerance: 0,
  },

  // --- Q17 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 1,
    questionText: "In the case of an unconditional contract, the date the contract is signed is the relevant date of disposal irrespective of the date of conveyance.",
    options: {
      A: "True",
      B: "False",
    },
    correctAnswer: "A",
  },

  // --- Q18 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 1,
    questionText: "In the case of gifts, the date of disposal is the date on which the property effectively passes.",
    options: {
      A: "True",
      B: "False",
    },
    correctAnswer: "A",
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText: "Identify which of the following medical expenses can Joan claim as a credit in 2025.\nSelect ALL that apply",
    options: {
      A: "Routine Dental Visits",
      B: "Orthodontic visits for her sons’ braces",
      C: "GP Visits and Consultant appointments for her heart condition",
      D: "Medication for her heart condition",
      E: "Physiotherapy (as prescribed by her GP)",
      F: "Nursing home expenses for her father",
    },
    correctAnswer: ["B", "C", "D", "E"],
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText: "Claire is buying a motor vehicle (CO2 < 140g/km). Total VAT is €3,820. She uses it 5 days/week for business and weekends for private. Calculate the VAT that can be reclaimed.",
    correctAnswer: 764,
    tolerance: 0,
  },

  // --- Q21 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText: "DWT should not be deducted from distributions made to which of the following:\nSelect ALL that apply",
    options: {
      A: "Most Irish resident companies",
      B: "Certain non-resident persons",
      C: "A charity",
      D: "Irish resident individuals",
    },
    correctAnswer: ["A", "B", "C"],
  },

  // --- Q22 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText: "Judy Murray (aged 52) is a widow (husband died 2024). Salary €50,000. Calculate the weekly tax credits appearing on her TCC.",
    correctAnswer: 87.31,
    tolerance: 0,
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText: "Identify correct statements in relation to employer benefits.\nSelect ALL that apply",
    options: {
      A: "Up to €1,500 can be provided in cash, tax free to employees each year",
      B: "Reimbursement of removal/relocation expenses is tax free subject to conditions",
      C: "Where sports facilities are provided on premises for all employees, a taxable benefit arises",
      D: "Where an employer provides free in-house childcare, a taxable benefit arises",
    },
    correctAnswer: ["B"],
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Anne (makeup shop) wants to recover VAT on: i) Shop fittings lease €780+VAT. ii) Solicitor bill €400 payment on account. iii) Petrol for van €86.10. Identify correct statement.",
    options: {
      A: "Anne can recover VAT on i, & iii",
      B: "Anne can recover VAT on i, & ii",
      C: "Anne can recover VAT on ii & iii",
      D: "Anne can recover VAT on i only",
    },
    correctAnswer: "B",
  },

  // --- Q25 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText: "The home carer tax credit will be granted where:\nSelect ALL that apply",
    options: {
      A: "The couple are married/civil partners and jointly assessed",
      B: "The home carer’s income is not in excess of €1,950",
      C: "If income exceeds €1,950, credit is reduced by one-half of excess",
      D: "One tax credit is given regardless of the number of dependents",
    },
    correctAnswer: ["A", "B", "D"],
  },

  // --- Q26 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText: "Katie Berry (year end 30 June). Adjusted profit €18k. Cap allowances 2025: W&T €14k, BA €1k, BC €6k. Unutilised CA fwd €19.2k. Calculate S381 loss relief available in 2025.",
    correctAnswer: 10200,
    tolerance: 0,
  },

  // --- Q27 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Jeremy sold equipment for €4,500 (cost €10k in 2021). He claimed capital allowances. Calculate Jeremy’s allowable loss for CGT purposes.",
    options: {
      A: "€5,500",
      B: "€5,000",
      C: "€4,500",
      D: "There is no allowable loss for CGT purposes",
    },
    correctAnswer: "D",
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 5,
    questionText: "Ger Delaney (proprietary director, 61). Salary €71k, Bonus €21k. Company car €38k OMV, 156g/km, 20k km usage, pays €125/month. Credit union interest €80.40. Dividends €7,500 (net). Pension 4%. Calculate taxable income.",
    correctAnswer: 107230,
    tolerance: 0,
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Jude paid covenants: Oisin (incapacitated son) €6,250. Fiachra (son, 17) €4,625. Lesley (grandmother, 89) €3,700. Calculate allowable covenants.",
    options: {
      A: "€6,250",
      B: "€3,088",
      C: "€9,338",
      D: "€13,375",
    },
    correctAnswer: "C",
  },

  // --- Q30 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Robert sold residence for gain of €307,160. Ownership: Jan 2000 to April 2025. Occupied house except for transfers to Cork (2008-14) and Glasgow (2014-17). Calculate taxable gain.",
    options: {
      A: "€101,363",
      B: "€24,330",
      C: "€282,830",
      D: "Robert has no taxable gain",
    },
    correctAnswer: "B",
  },

  // --- Q31 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 6,
    questionText: "Denis (Rental). Rent €2.1k (Jan-June), €2.4k (Sept-Dec). Advertising €210. Repairs €1,730 (incl €395 furniture). Management €205/month. Insurance €400. Calculate Net Case V income.",
    correctAnswer: 17746,
    tolerance: 0,
  },

  // --- Q32 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText: "Morris earns €650 per week. Calculate liability to USC for Week 1.",
    correctAnswer: 10.77,
    tolerance: 0,
  },

  // --- Q33 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Fintan updates a website for a company. He has no set hours, uses premises if he wishes, payments linked to milestones. Is this a contract of service or for service?",
    options: {
      A: "Fintan is entering into a contract of service",
      B: "Fintan is entering into a contract for service",
    },
    correctAnswer: "B",
  },

  // --- Q34 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 6,
    questionText: "Juanita (Development land). MV 1974 €32k (CUV €19k). Sold June 2025 for €235k (CUV €150k). Enhancement 1988 €8k. Indexation for 1974 is 7.528. Calculate CGT payable.",
    correctAnswer: 23000,
    tolerance: 0,
  },

  // --- Q35 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Identify correct statement regarding RCT.",
    options: {
      A: "The RCT system operates in construction, forestry and farming",
      B: "Principal contractor decides the RCT rate to withhold",
      C: "Principal contractor doesn't notify Revenue if sub-contractor's tax affairs are up to date",
      D: "None of the above statements are correct",
    },
    correctAnswer: "D",
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Identify criteria for an eligible business to reduce VAT filing frequency to 4-month basis.",
    options: {
      A: "Annual VAT payments < €3,000",
      B: "Annual VAT payments between €3,000 and €14,400",
      C: "Annual VAT payments < €20,000",
      D: "Annual VAT payments < €40,000",
    },
    correctAnswer: "B",
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText: "Partnership profits €800,000 for year to 31 March 2025. Alex joined 1 October 2024 (20% share). Calculate Alex's share of profits.",
    correctAnswer: 80000,
    tolerance: 0,
  },

  // --- Q38 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText: "Leafy Ltd. Trading profits €162,000. PRSI for 4 employees: €3k, €4.5k, €6.2k, €7.1k. Calculate CT payable (after relief for new company employees, max €5k per employee).",
    correctAnswer: 2750,
    tolerance: 0,
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText: "Identify correct statements in relation to pre-trading expenses.\nSelect ALL that apply",
    options: {
      A: "Claimed if incurred within 48 months of commencement",
      B: "Marketing costs 12 months before are not allowable",
      C: "Accountancy fees 24 months before are allowable",
      D: "Entertaining potential clients 36 months before are allowable",
    },
    correctAnswer: ["A", "C"],
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Declan (Salary €38,500). Pays €4,200 PHI and €3,700 covenant to incapacitated father. Determine PHI amount qualifying for income tax relief.",
    options: {
      A: "€4,200",
      B: "€720",
      C: "€3,480",
      D: "€3,700",
    },
    correctAnswer: "C",
  },

  // --- Q41 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText: "Identify which trade qualifies for S486C CT relief.",
    options: {
      A: "Trade previously carried on by another person",
      B: "Excepted trade",
      C: "Tax/book-keeping services trade commenced 2020",
      D: "Manufacturing trade commenced 2021",
    },
    correctAnswer: "D",
  },

  // --- Q42 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText: "Marie acquired property March 2014 for €195,000. Sold March 2025 for €320,000. Calculate chargeable gain (reflecting PPR exempt years).",
    correctAnswer: 45455,
    tolerance: 0,
  },

  // --- Q43 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText: "Carlos (Sole trader) leases a Cat C car (OMV €30,000). Leased 1 Jan 2023. Lease charges €8,200 in 2025. 75% business usage. Calculate the disallowed lease payment.",
    correctAnswer: 5740,
    tolerance: 0,
  },
];
