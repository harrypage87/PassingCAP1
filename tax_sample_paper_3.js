const taxSamplePaper3 = [

  // --- Q1 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "In November 2025 Mitch Brady purchased a new house, constructed by an approved contractor, for €325,000. He paid a deposit of €45,000 and secured a mortgage with a qualifying lender for the balance. Mitch is a first-time buyer. Details of his income tax paid for the past five years is as follows:\n\n" +
      "  2021:  €1,200 (started employment in September)\n" +
      "  2022:  €6,200\n" +
      "  2023:  €6,300\n" +
      "  2024:  €3,500 (laid off for 4 months)\n" +
      "  2025:  €6,800\n\n" +
      "Calculate the Help to Buy (HTB) relief available in 2025.",
    correctAnswer: 17200,
    tolerance: 0,
    explanation:
      "As the property was purchased in 2025 the applicable tax years are 2021-2024.<br><br>" +
      "Loan to value: €280,000 to €325,000 = 80%, so the 70% requirement is met.<br><br>" +
      "Tax paid 2021-2024 = €17,200 - no restriction.<br><br>" +
      "Relief is the lower of:<br>" +
      "€30,000, or<br>" +
      "10% of purchase price = €325,000 @ 10% = €32,500, or<br>" +
      "Tax paid = €17,200<br><br>" +
      "HTB refund: €17,200",
  },

  // --- Q2 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 1,
    questionText:
      "In November 2025 Mitch Brady purchased a new house, constructed by an approved contractor, for €325,000. Mitch is a first-time buyer.\n\n" +
      "Identify to whom the HTB relief will be refunded.",
    options: {
      A: "The HTB will be refunded to Mitch on the completion of the claim",
      B: "The HTB will be refunded to qualifying lender on the completion of the claim",
      C: "The HTB will be refunded to the approved contractor on the completion of the claim",
      D: "None of the above",
    },
    correctAnswer: "C",
    explanation:
      "The HTB will be refunded to the approved contractor on the completion of the claim.",
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi_numeric",
    marks: 4,
    questionText:
      "Desmond and Jen are married and jointly assessed. Desmond is a finance executive and has a salary of €159,000 (PAYE paid €50,800) in 2025. Jen is a marketing executive and has a salary of €215,000 (PAYE paid €73,200) in 2025.\n\n" +
      "They have three children, two of which are in third level education. Joe is an undergraduate student in UCC, and his fees are €3,000 in 2025. Caroline is doing a Masters in DCU, and her fees are €13,000 in 2025.\n\n" +
      "Desmond and Jen also have qualifying medical expenses of €1,330 in 2025.\n\n" +
      "Calculate the total non-refundable and the total refundable tax credits that Desmond and Jen can avail of for the tax year 2025.",
    parts: [
      { label: "Total non-refundable tax credits (€)", answer: 9666, tolerance: 0 },
      { label: "Total refundable tax credits (€)", answer: 124000, tolerance: 0 },
    ],
    explanation:
      "Total Non-Refundable Tax Credits:<br>" +
      "Married Person: €4,000<br>" +
      "Employee (Desmond): €2,000<br>" +
      "Employee (Jen): €2,000<br>" +
      "College Tuition Fees: €7,000 * 20% = €1,400<br>" +
      "Medical Expenses: €1,330 * 20% = €266<br>" +
      "Total: €9,666<br><br>" +
      "Total Refundable Tax Credits:<br>" +
      "PAYE Paid (Desmond): €50,800<br>" +
      "PAYE Paid (Jen): €73,200<br>" +
      "Total: €124,000",
  },

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements are correct in relation to interest on overdue corporation tax.\n\nSelect ALL that apply.",
    options: {
      A: "If there is a default in payment of corporation tax, interest is charged by Revenue at 0.0291% per day or part of a day",
      B: "Where a small company defaults in the payment of preliminary tax, does not pay sufficient preliminary tax or does not pay its preliminary tax by the due date, interest is calculated on the total of the corporation tax for that accounting period",
      C: "If the Form CT1 is filed within two months after the due filing date, the surcharge is 10% of the tax due for the period, subject to a maximum of €12,695",
      D: "Interest is paid by Revenue at 0.011% per day or part thereof on overpaid tax",
    },
    correctAnswer: ["B", "D"],
    explanation:
      "Where a small company defaults in the payment of preliminary tax, does not pay sufficient preliminary tax or does not pay its preliminary tax by the due date, interest is calculated on the total of the corporation tax for that accounting period.<br><br>" +
      "Interest is paid by Revenue at 0.011% per day or part thereof on overpaid tax.",
  },

  // --- Q5 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Caroline is 39 years old and single. She left her job at the end of February 2025 where she earned €8,000 in total in January and February.\n\n" +
      "She started a new job on 1 March 2025. Her new salary is €5,000 per month. She also received a signing-on bonus from her new employer on 1 March 2025 of €8,500.\n\n" +
      "Caroline has always made a monthly payment of €400 into her pension scheme and this will continue in her new employment. Caroline also took out a permanent health insurance (PHI) policy on starting her new employment on 1 March 2025. A monthly premium of €70 is deducted through payroll.\n\n" +
      "Caroline is taxed on the cumulative basis. Caroline's RPN year to date to 29 February 2025 is as follows:\n\n" +
      "Gross salary to date:     €8,000\n" +
      "Taxable salary to date:   €7,200\n" +
      "Income tax deducted:      €774\n" +
      "Monthly tax credit:       €333\n" +
      "Monthly SRCOP:            €3,667\n" +
      "Month number:             2\n\n" +
      "Calculate Caroline's taxable cumulative salary to 31 March 2025.",
    options: {
      A: "€13,030",
      B: "€20,230",
      C: "€20,300",
      D: "€20,700",
    },
    correctAnswer: "B",
    explanation:
      "Gross Salary (March): €5,000<br>" +
      "Bonus: €8,500<br>" +
      "Less Pension Contribution: (€400)<br>" +
      "Less PHI: (€70)<br>" +
      "Taxable Salary March: €13,030<br><br>" +
      "Taxable Salary to Date: €7,200<br>" +
      "Taxable Cumulative Salary: €20,230",
  },

  // --- Q6 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Caroline is 39 years old and single. She started a new job on 1 March 2025 with a salary of €5,000 per month and a signing-on bonus of €8,500. She makes a monthly pension contribution of €400 and a PHI premium of €70 is deducted through payroll.\n\n" +
      "Caroline's RPN year to date to 29 February 2025:\n" +
      "Income tax deducted: €774 | Monthly tax credit: €333 | Monthly SRCOP: €3,667\n\n" +
      "Taxable cumulative salary to 31 March 2025: €20,230\n\n" +
      "Calculate the PAYE to be deducted from Caroline's salary for March 2025.",
    options: {
      A: "€4,119",
      B: "€4,893",
      C: "€5,226",
      D: "€5,892",
    },
    correctAnswer: "A",
    explanation:
      "Cumulative Gross Salary: €20,230<br>" +
      "Cumulative SRCOP: €11,001<br><br>" +
      "Calculation of Tax:<br>" +
      "Tax at 20% (€11,001 * 20%): €2,200<br>" +
      "Tax at 40% (Bal * 40%): €3,692<br>" +
      "Less Tax Credits: (€999)<br>" +
      "= €4,893<br>" +
      "Less Tax Paid to date: (€774)<br>" +
      "PAYE in March: €4,119",
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Carma Cakery Limited (CARMA) operates a bakery in Meath. The company has been very profitable in the past but due to increases in the cost of raw materials, the company made its first trading loss in many years in 2025.\n\n" +
      "The company's recent results are as follows:\n\n" +
      "                              Year ended 31/10/2024    Year ended 31/10/2025\n" +
      "Adjusted Trading Profit/(Loss)    €240,000                 (€390,000)\n" +
      "Interest on Government Stocks     €3,000                   €5,000\n" +
      "Irish Rental Income               €25,000                  €26,000\n" +
      "Adjusted Capital Gains            €48,000                  NIL\n\n" +
      "Calculate the corporation tax liability for CARMA for the year ended 31 October 2025.",
    options: {
      A: "€48,750",
      B: "€7,750",
      C: "€625",
      D: "NIL",
    },
    correctAnswer: "D",
    explanation:
      "Case I: NIL<br>" +
      "Case III: €5,000<br>" +
      "Case IV: €26,000<br>" +
      "Total Profits: €31,000<br>" +
      "Tax at 25%: €7,750<br>" +
      "S396B: (€7,750)<br>" +
      "Corporation tax: NIL<br><br>" +
      "Note: The Case I loss will have been utilised against the Case I income (€240,000) in 2024 first. The remaining Case I loss is then brought back into the current year and used on the value basis.",
  },

  // --- Q8 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Carma Cakery Limited (CARMA) operates a bakery in Meath. The company's recent results are as follows:\n\n" +
      "                              Year ended 31/10/2024    Year ended 31/10/2025\n" +
      "Adjusted Trading Profit/(Loss)    €240,000                 (€390,000)\n" +
      "Interest on Government Stocks     €3,000                   €5,000\n" +
      "Irish Rental Income               €25,000                  €26,000\n" +
      "Adjusted Capital Gains            €48,000                  NIL\n\n" +
      "Calculate the corporation tax liability for CARMA for the year ended 31 October 2024 (assuming losses from 2025 are carried back where possible).",
    options: {
      A: "NIL",
      B: "€2,000",
      C: "€3,250",
      D: "€33,250",
    },
    correctAnswer: "B",
    explanation:
      "Case I: €240,000<br>" +
      "S396A: (€240,000) = NIL<br>" +
      "Case III: €3,000<br>" +
      "Case IV: €25,000<br>" +
      "Total Income: €28,000<br>" +
      "Adjusted Gains: €48,000<br>" +
      "Total profits: €76,000<br><br>" +
      "Taxed as follows:<br>" +
      "€48,000 * 12.5% = €6,000<br>" +
      "€28,000 * 25% = €7,000<br>" +
      "S396B: (€11,000)<br>" +
      "CT Payable 2024: €2,000<br><br>" +
      "Loss Memo:<br>" +
      "Case I Loss 2025: (€390,000)<br>" +
      "S396A 2024: €240,000<br>" +
      "S396B 2025 (€7,750/.125): €62,000<br>" +
      "S396B 2024: €88,000<br>" +
      "NIL",
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 1,
    questionText:
      "PRSI is payable on most sources of income.\n\n" +
      "Identify which of the following sources of income is NOT liable to PRSI.",
    options: {
      A: "Rental income",
      B: "Dividends received",
      C: "Redundancy payments",
      D: "Bank deposit interest",
    },
    correctAnswer: "C",
    explanation:
      "Redundancy payments.",
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Each spouse or civil partner is a separate person for CGT purposes.\n\n" +
      "Identify which of the following statements are correct in relation to the CGT treatment of spouses and civil partners.\n\nSelect ALL that apply.",
    options: {
      A: "A disposal of an asset from one spouse to the other does not give rise to a CGT liability, provided that the couple are living together for tax purposes, i.e. they are not separated",
      B: "The asset is deemed to have passed from one spouse to the other at a value that gives rise to no gain or no loss",
      C: "The whole period of ownership by both spouses is considered when determining the indexation date on a subsequent disposal",
      D: "Where a married couple are living together in the year of assessment, the net chargeable gains accruing to one spouse for that year of assessment should be reduced by any unutilised allowable losses accruing to the other spouse (including losses brought forward) for the same year",
    },
    correctAnswer: ["A", "B", "C", "D"],
    explanation:
      "A disposal of an asset from one spouse to the other does not give rise to a CGT liability, provided that the couple are living together for tax purposes, i.e. they are not separated.<br><br>" +
      "The asset is deemed to have passed from one spouse to the other at a value that gives rise to no gain or no loss.<br><br>" +
      "The whole period of ownership by both spouses is considered when determining the indexation date on a subsequent disposal.<br><br>" +
      "Where a married couple are living together in the year of assessment, the net chargeable gains accruing to one spouse for that year of assessment should be reduced by any unutilised allowable losses accruing to the other spouse (including losses brought forward) for the same year.",
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Paul commences to trade as a bookkeeper on 1 September 2023. The following are his profits for the next three years:\n\n" +
      "Accounts for 12 months to 31 August 2024:  €104,000\n" +
      "Accounts for 12 months to 31 August 2025:  €96,000\n" +
      "Accounts for 12 months to 31 August 2026:  €60,000\n\n" +
      "Calculate Paul's taxable profits in 2025.",
    options: {
      A: "€96,000",
      B: "€93,333",
      C: "€101,333",
      D: "€84,000",
    },
    correctAnswer: "B",
    explanation:
      "Year 2 (2024): Accounts for 12 months to 31 August 2024 = €104,000<br>" +
      "Year 3 (2025): Accounts for 12 months to 31 August 2025 = €96,000<br><br>" +
      "Assessed Profits in Year 2: €104,000<br>" +
      "Actual Profits in Year 2: (€104,000 * 8/12) + (€96,000 * 4/12) = €101,333<br>" +
      "Excess: €2,667<br><br>" +
      "Final Assessment for Year 3: €96,000 - €2,667 = €93,333",
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "A VAT-registered trader must keep full records of all transactions that affect the liability to VAT.\n\n" +
      "Identify which of the following statements are correct with respect to the VAT records maintained by a VAT registered trader.\n\nSelect ALL that apply.",
    options: {
      A: "The sales records must include the amount charged in respect of every sale to a registered person and a daily entry of the total amount charged in respect of sales to unregistered persons, distinguishing in all cases between transactions liable at each different VAT rate and exempt transactions",
      B: "An accountable person must retain all books and records for eight years from the date of the latest transaction to which they refer",
      C: "An accountable person must retain all books, records and documents relevant to the business, including invoices, credit and debit notes, receipts, accounts, cash register tally rolls, vouchers, stamped copies of customs entries and other import documents and bank statements",
      D: "There is a requirement to retain the paper originals of any third-party record even where an electronic copy of the original record is generated, recorded and stored in accordance with Revenue's information technology and procedural requirements",
    },
    correctAnswer: ["A", "C"],
    explanation:
      "The sales records must include the amount charged in respect of every sale to a registered person and a daily entry of the total amount charged in respect of sales to unregistered persons, distinguishing in all cases between transactions liable at each different VAT rate and exempt transactions.<br><br>" +
      "An accountable person must retain all books, records and documents relevant to the business, including invoices, credit and debit notes, receipts, accounts, cash register tally rolls, vouchers, stamped copies of customs entries and other import documents and bank statements.",
  },

  // --- Q13 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Genevive sold the following assets in 2025:\n\n" +
      "• An antique dresser for €2,570 (before selling costs) in July 2025, incurring selling costs of €80. Genevive had inherited the dresser from her cousin in June 2009 when it was worth €1,500. Her cousin had originally paid €500 for the dresser in December 1986.\n\n" +
      "• A stallion in December 2025 for €2,500. Genevive had purchased the stallion in March 2018 for €6,000.\n\n" +
      "Calculate Genevive's capital gains tax (CGT) liability, if any, in 2025 (ignore the annual exemption).",
    options: {
      A: "€4,490",
      B: "€1,482",
      C: "€327",
      D: "€15",
    },
    correctAnswer: "D",
    explanation:
      "Antique Dresser:<br>" +
      "Sales Proceeds: €2,570<br>" +
      "Less Disposal Cost: (€80)<br>" +
      "Net Proceeds: €2,490<br>" +
      "Cost: (€1,500)<br>" +
      "Gain: €990<br>" +
      "CGT at 33%: €327<br><br>" +
      "Compare with chattel marginal relief:<br>" +
      "1/2 (€2,570 - €2,540) = €15 (This is lower)<br><br>" +
      "Stallion: This is a wasting chattel and is exempt for CGT.",
  },

  // --- Q14 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "On 1 January 2025, Freebie Limited (FREEBIE) purchased notebooks with the company logo printed on them worth €2,200 (ex-VAT) which they intend to give to customers free of charge. The notebooks have a value of €11 each. 200 customers will receive a notebook free of charge in February 2025.\n\n" +
      "Calculate the output VAT and the input VAT on the notebooks.",
    options: {
      A: "Output VAT €506, Input VAT €506",
      B: "Output VAT €297, Input VAT €297",
      C: "Output VAT €0, Input VAT €506",
      D: "Output VAT €0, Input VAT €297",
    },
    correctAnswer: "C",
    explanation:
      "Output VAT €0, Input VAT €506.",
  },

  // --- Q15 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 1,
    questionText:
      "Payroll submissions and the amounts collected under PAYE must be remitted to Revenue electronically via ROS.\n\n" +
      "Determine by which date the submission must be made assuming the payroll is submitted monthly to Revenue.",
    options: {
      A: "10 days after the end of the month",
      B: "13 days after the end of the month",
      C: "14 days after the end of the month",
      D: "20 days after the end of the month",
    },
    correctAnswer: "C",
    explanation:
      "14 days after the end of the month.",
  },

  // --- Q16 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi_numeric",
    marks: 8,
    questionText:
      "You have been provided with the Statement of Profit and Loss of Jumbo Jim Limited (JUMBO JIM) for the year ended 31 December 2025.\n\n" +
      "Profit before tax: €296,012\n\n" +
      "Notes:\n" +
      "1. Wages & salaries include €10,000 statutory redundancy and €2,500 pension accrual.\n" +
      "2. Motor expenses: Running costs for commercial van €1,540; Leased car for MD €4,670. MD car list price €28,000, CO2 136g/km, business use 25%.\n" +
      "3. Professional fees: Accounting fees €5,100; Legal fee re damage to client property €2,400; Architect fee re office extension €7,200.\n" +
      "4. Interest: Bank charges €138; Interest receivable from UK deposit account (€310).\n" +
      "5. Advertising & marketing: Magazine/radio ads €500; Entertaining potential customers €900.\n" +
      "6. Other expenses: Website running costs €700; Christmas hampers for suppliers €80; Donation to Vincent de Paul €150; Staff Christmas party €870.\n\n" +
      "Calculate the corporation tax payable for JUMBO JIM for the year ended 31 December 2025.",
    parts: [
      { label: "Profit per accounts (€)", answer: 296012, tolerance: 0 },
      { label: "Add back — Wages & salaries (€)", answer: 2500, tolerance: 0 },
      { label: "Add back — Depreciation (€)", answer: 3750, tolerance: 0 },
      { label: "Add back — Motor expenses (€)", answer: 667, tolerance: 1 },
      { label: "Add back — Professional fees (€)", answer: 7200, tolerance: 0 },
      { label: "Add back — Advertising & marketing (€)", answer: 900, tolerance: 0 },
      { label: "Add back — Other expenses (€)", answer: 230, tolerance: 0 },
      { label: "Total addbacks (€)", answer: 15247, tolerance: 1 },
      { label: "Total deductions (€)", answer: -310, tolerance: 0 },
      { label: "Adjusted Case I income (€)", answer: 310949, tolerance: 1 },
      { label: "Other Case III, IV, V income (€)", answer: 310, tolerance: 0 },
      { label: "Total taxable income (€)", answer: 311259, tolerance: 1 },
      { label: "CT at 12.5% (€)", answer: 38869, tolerance: 1 },
      { label: "CT at 25% (€)", answer: 78, tolerance: 1 },
      { label: "Total corporation tax payable (€)", answer: 38947, tolerance: 1 },
    ],
    explanation:
      "Add back — Wages & salaries: €2,500 (pension accrual — statutory redundancy of €10,000 is allowable)<br>" +
      "Add back — Depreciation: €3,750<br>" +
      "Add back — Motor expenses: €4,670 * (€28,000 - €24,000) / €28,000 = €667 (excess lease payments on Category C car)<br>" +
      "Add back — Professional fees: €7,200 (architect fee re office extension — capital)<br>" +
      "Add back — Advertising & marketing: €900 (entertaining potential customers)<br>" +
      "Add back — Other expenses: €80 + €150 = €230 (Christmas hampers for suppliers + donation to charity)<br>" +
      "Total Addbacks: €15,247<br><br>" +
      "Total Deductions: (€310) (interest receivable from UK deposit account)<br>" +
      "Adjusted Case I Income: €310,949<br><br>" +
      "Other Case III, IV, V Income: €310<br>" +
      "Total Taxable Income: €311,259<br><br>" +
      "CT at 12.5%: €310,949 * 12.5% = €38,869<br>" +
      "CT at 25%: €310 * 25% = €78<br>" +
      "Total Corporation Tax Payable: €38,947",
  },

  // --- Q17 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 1,
    questionText:
      "In the case of an unconditional contract, the date the contract is signed is the relevant date of disposal irrespective of the date of the conveyance or transfer of the asset.\n\n" +
      "Determine if this statement is true or false.",
    options: {
      A: "True",
      B: "False",
    },
    correctAnswer: "A",
    explanation:
      "True.",
  },

  // --- Q18 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 1,
    questionText:
      "In the case of gifts, the date of disposal is the date on which the property effectively passes.\n\n" +
      "Determine if this statement is true or false.",
    options: {
      A: "True",
      B: "False",
    },
    correctAnswer: "A",
    explanation:
      "True.",
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Joan incurred a significant amount of medical expenses in 2025. Relief is available as a tax credit for some medical expenses at the standard rate of 20%.\n\n" +
      "Identify which of the following medical expenses can Joan claim as a credit in 2025.\n\nSelect ALL that apply.",
    options: {
      A: "Routine Dental Visits",
      B: "Orthodontic visits for her sons' braces",
      C: "GP Visits and Consultant appointments for her heart condition",
      D: "Medication for her heart condition",
      E: "Physiotherapy (as prescribed by her GP)",
      F: "Nursing home expenses for her father",
    },
    correctAnswer: ["B", "C", "D", "E"],
    explanation:
      "Orthodontic visits for her sons' braces.<br>" +
      "GP Visits and Consultant appointments for her heart condition.<br>" +
      "Medication for her heart condition.<br>" +
      "Physiotherapy (as prescribed by her GP).",
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Claire Flavin is a self-employed mobile hairdresser based in Wexford. Claire travels to clients' homes for her work. Claire is considering purchasing a new motor vehicle in June 2025. The motor vehicle has CO2 emissions of less than 140g/km. The total VAT being charged by the garage on the motor vehicle amounts to €3,820.\n\n" +
      "Claire intends to use the motor vehicle for her own private use at the weekends, but the motor vehicle will be used strictly for business purposes for the remainder of the time. Claire works five days per week.\n\n" +
      "Calculate the VAT that can be reclaimed by Claire in relation to the purchase of the motor vehicle.",
    correctAnswer: 764,
    tolerance: 0,
    explanation:
      "VAT Charged: €3,820<br>" +
      "VAT Reclaimable: €3,820 * 20% = €764",
  },

  // --- Q21 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "DWT (Dividend Withholding Tax) applies to all relevant distributions made by an Irish resident company. DWT should not be deducted from certain distributions.\n\n" +
      "DWT should not be deducted from distributions made to which of the following?\n\nSelect ALL that apply.",
    options: {
      A: "Most Irish resident companies",
      B: "Certain non-resident persons",
      C: "A charity",
      D: "Irish resident individuals",
    },
    correctAnswer: ["A", "B", "C"],
    explanation:
      "Most Irish resident companies.<br>" +
      "Certain non-resident persons.<br>" +
      "A charity.",
  },

  // --- Q22 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Judy Murray (aged 52) is a widow and has no children. Her husband Andy died in 2024. Judy has a salary of €50,000 in 2025.\n\n" +
      "Calculate the weekly tax credits due to Judy which will appear on her tax credit certificate (TCC).\n\n" +
      "Your answer should be rounded to two decimal places.",
    correctAnswer: 87.31,
    tolerance: 0.01,
    explanation:
      "Tax credits due for 2025:<br>" +
      "Widowed Person: €2,540<br>" +
      "Employee tax credit: €2,000<br>" +
      "Total: €4,540<br><br>" +
      "Weekly: €4,540 / 52 = €87.31",
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements are correct in relation to benefits provided by an employer to an employee.\n\nSelect ALL that apply.",
    options: {
      A: "Up to €1,500 can be provided in cash, tax free to employees each year",
      B: "An employer may make the payment or reimbursement of certain removal/relocation expenses, incurred by an employee in moving house to take up employment, free of tax subject to conditions being satisfied",
      C: "Where sports and recreational facilities are made available on the employer's premises and are available to all employees, a taxable benefit arises",
      D: "Where an employer provides free or subsisted childcare, either in-house or externally at an independent facility, a taxable benefit arises",
    },
    correctAnswer: ["B", "D"],
    explanation:
      "An employer may make the payment or reimbursement of certain removal/relocation expenses, incurred by an employee in moving house to take up employment, free of tax subject to conditions being satisfied.<br><br>" +
      "Where an employer provides free or subsisted childcare, either in-house or externally at an independent facility, a taxable benefit arises.",
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Anne owns a make-up shop and incurs some expenses in April 2025. Anne wants advice to understand whether VAT is recoverable on the following:\n\n" +
      "(i) Anne signed a lease for shop fittings requiring a monthly payment of €780 plus VAT @ 23%.\n" +
      "(ii) Payment of €400 on account to a solicitor for legal fees on foot of a bill received.\n" +
      "(iii) Anne purchases petrol for the van totalling €86.10 inclusive of VAT at 23%.\n\n" +
      "Identify which of the following are correct.",
    options: {
      A: "Anne can recover VAT on i & iii",
      B: "Anne can recover VAT on i & ii",
      C: "Anne can recover VAT on ii & iii",
      D: "Anne can recover VAT on i only",
    },
    correctAnswer: "B",
    explanation:
      "Anne can recover VAT on i & ii.",
  },

  // --- Q25 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements are correct in relation to the home carer credit.\n\n" +
      "The home carer tax credit will be granted where:\n\nSelect ALL that apply.",
    options: {
      A: "The couple are married or civil partners and are jointly assessed (this in addition to other conditions being satisfied)",
      B: "The home carer's income is not in excess of €1,950 (this in addition to other conditions being satisfied)",
      C: "If the income of the home carer is in excess of €1,950, the tax credit is reduced by one-half of the excess over the limit (this in addition to other conditions being satisfied)",
      D: "One tax credit is given regardless of the number of dependent persons being cared for",
    },
    correctAnswer: ["A", "D"],
    explanation:
      "The couple are married or civil partners and are jointly assessed (this in addition to other conditions being satisfied).<br><br>" +
      "One tax credit is given regardless of the number of dependent persons being cared for.",
  },

  // --- Q26 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Katie Berry has been in business for many years and prepares annual accounts to 30 June each year. Her tax details are as follows:\n\n" +
      "Tax-adjusted profit for the year ended 30 June 2025:    €18,000\n\n" +
      "Capital allowances 2025:\n" +
      "  Wear and tear allowance:    €14,000\n" +
      "  Balancing allowances:       €1,000\n" +
      "  Balancing charge:           €6,000\n\n" +
      "Unutilised capital allowances forward from 2024:    €19,200\n\n" +
      "Calculate the S381 loss relief which is available to Katie in 2025 (i.e., determine how much of a trading loss she can use against her total income in 2025).",
    correctAnswer: 10200,
    tolerance: 0,
    explanation:
      "Section 381 Claim 2025:<br>" +
      "Tax Adjusted Profit: €18,000<br>" +
      "Deduct: Capital allowances forward (€19,200; limited to actual profit): (€18,000)<br>" +
      "Net Case I: NIL<br><br>" +
      "Balancing Charge 2025: €6,000<br>" +
      "Deduct: Balance of capital allowances forward from 2024: (€1,200)<br>" +
      "Net balancing charge: €4,800<br><br>" +
      "Deduct: Wear and tear 2025: (€14,000)<br>" +
      "Deduct: Balancing Allowance 2025: (€1,000)<br>" +
      "S381 loss available: €10,200",
  },

  // --- Q27 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Jeremy is a sole trader and works in the carpentry industry. Jeremy sold a piece of equipment that he uses in his trade for €4,500 in November 2025. The equipment cost him €10,000 in 2021. Jeremy has also claimed capital allowances on the equipment. Jeremy's year end is 31 December every year.\n\n" +
      "Calculate Jeremy's allowable loss for CGT purposes on the disposal of the equipment.",
    options: {
      A: "€5,500",
      B: "€5,000",
      C: "€4,500",
      D: "There is no allowable loss for CGT purposes",
    },
    correctAnswer: "D",
    explanation:
      "There is no allowable loss for CGT purposes.<br><br>" +
      "Sales proceeds: €4,500<br>" +
      "Cost: (€10,000)<br>" +
      "Loss: (€5,500)<br>" +
      "Loss allowable for CGT purposes: NIL<br><br>" +
      "The loss of €5,500 has already been fully relieved for income tax purposes.",
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi_numeric",
    marks: 5,
    questionText:
      "Ger Delaney (61 years old) is a proprietary director of Red Brick Limited (RED BRICK). Ger is in receipt of income and benefits from his employment in 2025 as follows:\n\n" +
      "Note 1: Annual salary of €71,000. The board agreed on 15 February 2026 that Ger should receive a bonus of €21,000 in respect of the year ended 31 December 2025. The bonus was posted to the accounts on 17 January 2026 and received on 25 February 2026.\n\n" +
      "Note 2: Company car. OMV €38,000, CO2 emissions 156g/km. Company pays all petrol. Ger pays €125/month. Annual business usage: 20,000 km.\n\n" +
      "Note 3: Irish deposit interest of €80.40 on which DIRT has been deducted.\n\n" +
      "Note 4: Irish Dividends of €7,500 (net).\n\n" +
      "Note 5: Ger contributes 4% of his annual salary to the company occupational pension scheme.\n\n" +
      "Calculate Ger's taxable income for the tax year 2025.",
    parts: [
      { label: "Schedule E — Note 1 (salary + bonus) (€)", answer: 92000, tolerance: 0 },
      { label: "Schedule E — Note 2 (car BIK) (€)", answer: 7950, tolerance: 0 },
      { label: "Schedule D — Note 3 (deposit interest gross) (€)", answer: 120, tolerance: 0 },
      { label: "Schedule D — Note 4 (dividends gross) (€)", answer: 10000, tolerance: 0 },
      { label: "Gross income (€)", answer: 110070, tolerance: 0 },
      { label: "Note 5 — Pension deduction (€)", answer: -2840, tolerance: 0 },
      { label: "Taxable income (€)", answer: 107230, tolerance: 0 },
    ],
    explanation:
      "Note 1: €71,000 + €21,000 = €92,000 (bonus is taxable in 2025 as it relates to 2025 even though received in 2026)<br><br>" +
      "Note 2: (€38,000 - €10,000) = €28,000 * 33.75% = €9,450; Less (€125 * 12) = €7,950<br><br>" +
      "Note 3: €80.40 / 0.67 = €120<br><br>" +
      "Note 4: €7,500 / 0.75 = €10,000<br><br>" +
      "Gross Income: €110,070<br><br>" +
      "Note 5: Pension = 4% * €71,000 = €2,840 (deduction based on salary only)<br><br>" +
      "Taxable Income: €107,230",
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Jude is the managing director of Knit Knot Limited (KNIT KNOT), a trading company in which he owns all of the shares. Jude is a single father and earned a salary of €68,000 in 2025.\n\n" +
      "Jude paid the following covenants during 2025:\n" +
      "  Oisin (incapacitated son, aged 21):   €6,250 (gross)\n" +
      "  Fiachra (son, aged 17):               €4,625 (gross)\n" +
      "  Lesley (grandmother, aged 89):        €3,700 (gross)\n\n" +
      "Calculate the allowable covenants for tax purposes for Jude for 2025.",
    options: {
      A: "€6,250",
      B: "€3,088",
      C: "€9,338",
      D: "€13,375",
    },
    correctAnswer: "C",
    explanation:
      "Oisin: €6,250<br><br>" +
      "Lesley: Restricted to lower of gross paid or 5% of gross income less charges.<br>" +
      "Gross Income less charges = €61,750 (€68,000 - €6,250)<br>" +
      "€61,750 * 5% = €3,088<br><br>" +
      "Total allowable covenants: €6,250 + €3,088 = €9,338<br><br>" +
      "Note: Fiachra (aged 17) is not allowable as covenants to minor children are not deductible.",
  },

  // --- Q30 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "On 1 April 2025 Robert sold his private residence in Kildare and made a chargeable gain before any reliefs of €307,160.\n\n" +
      "Robert purchased the house on 1 January 2000. He lived in the house until 1 September 2008, when he moved to Cork for the company he works for. Robert lived in Cork until 1 September 2014. At this date Robert was transferred to work in the company head office in Glasgow until 1 September 2017 when he returned to Kildare.\n\n" +
      "Robert continued to live in his house from 1 September 2017 until 1 April 2025.\n\n" +
      "Calculate Robert's taxable gain, if any, on the disposal of his Kildare residence (ignore the annual exemption).",
    options: {
      A: "€101,363",
      B: "€24,330",
      C: "€282,830",
      D: "Robert has no taxable gain on the disposal of his Kildare residence",
    },
    correctAnswer: "B",
    explanation:
      "Gain: €307,160<br>" +
      "PPR Relief: (279/303) * €307,160 = (€282,830)<br>" +
      "Taxable Gain: €24,330<br><br>" +
      "Period breakdown:<br>" +
      "01/01/2000 - 01/09/2008: 104 months occupied<br>" +
      "01/09/2008 - 01/09/2014 (Cork): 72 months — 48 deemed occupied, 24 not occupied<br>" +
      "01/09/2014 - 01/09/2017 (Glasgow): 36 months — 36 deemed occupied (working abroad)<br>" +
      "01/09/2017 - 01/04/2025: 91 months occupied<br><br>" +
      "Total: 303 months | Occupied/Deemed: 279 months | Non-occupancy: 24 months",
  },

  // --- Q31 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi_numeric",
    marks: 6,
    questionText:
      "Denis lets out a residential property in Kilkenny City. The property was occupied from January to June 2025, earning rent of €2,100 per month. The tenant moved out at the end of June and the property was vacant during July and August.\n\n" +
      "Denis incurred marketing and advertising fees of €210 in August to find a new tenant. The new tenant moved in from 1 September 2025. The new monthly rent is €2,400 from 1 September. The tenant pays monthly in arrears on the 24th day after the month the rent was due.\n\n" +
      "Repairs: €1,730 for the year. €510 of these repairs were incurred during August when the property was vacant. Included in this amount was furniture and fittings installed in August at a cost of €395.\n\n" +
      "Property management fees: €205 per month. House insurance for the calendar year: €400.\n\n" +
      "Calculate Denis's taxable Case V Income for the tax year 2025.",
    parts: [
      { label: "Gross Rental Income (€)", answer: 22200, tolerance: 0 },
      { label: "Advertising fees (€)", answer: -210, tolerance: 0 },
      { label: "Repairs (€)", answer: -1335, tolerance: 0 },
      { label: "Management fees (€)", answer: -2460, tolerance: 0 },
      { label: "Insurance (€)", answer: -400, tolerance: 0 },
      { label: "Capital allowances on furniture (€)", answer: -49, tolerance: 1 },
      { label: "Net Case V Income (€)", answer: 17746, tolerance: 1 },
    ],
    explanation:
      "Gross Rental Income: (€2,100 * 6) + (€2,400 * 4) = €22,200<br>" +
      "Note: September-December rent is receivable in 2025 even though paid in arrears in October-January.<br><br>" +
      "Advertising Fees: (€210)<br>" +
      "Repairs: €1,730 - €395 = (€1,335) (furniture excluded as capital)<br>" +
      "Management Fees: €205 * 12 = (€2,460)<br>" +
      "Insurance: (€400)<br>" +
      "Capital Allowances on furniture: €395 * 12.5% = (€49)<br><br>" +
      "Net Case V Income: €17,746",
  },

  // --- Q32 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Morris works for Moby Limited (MOBY) and earned €650 per week. Morris is paid weekly. MOBY has the most up to date Revenue Payroll Notification (RPN) for Morris on file.\n\n" +
      "Calculate Morris' liability to USC for Week 1.\n\n" +
      "Your answer should be rounded to two decimal places.",
    correctAnswer: 10.77,
    tolerance: 0.01,
    explanation:
      "First €231 @ 0.5% = €1.16<br>" +
      "Next €295.58 @ 2.0% = €5.91<br>" +
      "Balance: €650 - (€231 + €295.58) @ 3% = €3.70<br>" +
      "Total USC (Week 1): €10.77",
  },

  // --- Q33 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Fintan is studying for a master's in software engineering in UCD. While he is studying, he works part time in the local supermarket. Fintan's cousin, Bernie has told him of a project coming up in Small Steps Limited (SMALL STEPS).\n\n" +
      "The project involves updating the website to make it more user-friendly and to enhance the online payment system. There will be project milestones, setting out dates by when certain tasks must be completed, but Fintan will not have set days or hours so long as he successfully meets the milestones. Fintan will be provided with a laptop, and he can work from the SMALL STEPS premises if he wishes. Fintan's payments will be linked to the successful and timely completion of each milestone. Fintan will continue to work at his part-time job during the project.\n\n" +
      "Select the correct answer.",
    options: {
      A: "Fintan is entering into a contract of service",
      B: "Fintan is entering into a contract for service",
    },
    correctAnswer: "B",
    explanation:
      "Fintan is entering into a contract for service.<br><br>" +
      "No set days/hours, work from home, has another part-time job — these factors indicate Fintan is working for himself, not as an employee.",
  },

  // --- Q34 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi_numeric",
    marks: 6,
    questionText:
      "Juanita bought development land worth €10,000 in 1971. The market value of the land on 6 April 1974 was €32,000. The current use value (CUV) of the land on this date was €19,000. In January 1988, Juanita carried out enhancement works in the form of drainage works on the land costing €8,000. Juanita sold the land in June 2025 for €235,000. The CUV of the land on the date of sale was €150,000.\n\n" +
      "Note: Indexation factor 1974/75 = 7.528 | 1987/88 = 1.583.\n\n" +
      "Costs and reliefs should be entered as negative.\n\n" +
      "Calculate the CGT payable by Juanita on the sale of the land in 2025.",
    parts: [
      { label: "Sales proceeds (€)", answer: 235000, tolerance: 0 },
      { label: "Allowable (CUV) cost indexed (€)", answer: -143032, tolerance: 1 },
      { label: "Hope value (€)", answer: -13000, tolerance: 0 },
      { label: "Allowable enhancement cost (€)", answer: -8000, tolerance: 0 },
      { label: "Chargeable gain (€)", answer: 70968, tolerance: 1 },
      { label: "Annual exemption (€)", answer: -1270, tolerance: 0 },
      { label: "Net chargeable gain (€)", answer: 69698, tolerance: 1 },
      { label: "CGT (€)", answer: 23000, tolerance: 0 },
    ],
    explanation:
      "Sales Proceeds: €235,000<br><br>" +
      "Allowable (CUV) cost: €19,000 * 7.528 = (€143,032)<br>" +
      "Hope Value: €32,000 - €19,000 = (€13,000) (hope value = MV at 6 April 1974 less CUV at same date)<br>" +
      "Allowable enhancement cost: (€8,000)<br>" +
      "Chargeable Gain: €70,968<br><br>" +
      "Annual Exemption: (€1,270)<br>" +
      "Net Chargeable Gain: €69,698<br>" +
      "CGT at 33%: €23,000",
  },

  // --- Q35 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Where a principal contractor makes a payment to an individual with whom they have a relevant contract to carry out relevant operations, the principal contractor is obliged to deduct RCT from the payment to the sub-contractor.\n\n" +
      "Identify which of the following statements is correct with respect to Relevant Contracts Tax (RCT).",
    options: {
      A: "The RCT system is a system that operates in the construction, forestry and farming industries",
      B: "It is up to the principal contractor to decide which rate of RCT to withhold on the payments made to the sub-contractor",
      C: "The principal contractor is not required to notify Revenue that they are making payments under the contract to the sub-contractor when the sub-contractors tax affairs are up to date",
      D: "None of the above statements are correct",
    },
    correctAnswer: "D",
    explanation:
      "None of the above statements are correct.",
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Identify the criteria that must be met for an eligible business to reduce the frequency of VAT filings to a four-month basis.",
    options: {
      A: "With authorisation from the Collector General, businesses making total annual VAT payments of less than €3,000 can reduce their VAT filings to a four-month basis",
      B: "With authorisation from the Collector General, businesses making total annual VAT payments of between €3,000 and €14,400 can reduce their VAT filings to a four-month basis",
      C: "With authorisation from the Collector General, businesses making total annual VAT payments of less than €20,000 can reduce their VAT filings to a four-month basis",
      D: "With authorisation from the Collector General, businesses making total annual VAT payments of less than €40,000 can reduce their VAT filings to a four-month basis",
    },
    correctAnswer: "B",
    explanation:
      "With authorisation from the Collector General, businesses making total annual VAT payments of between €3,000 and €14,400 can reduce their VAT filings to a four-month basis.",
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Erin and Philipa have traded in partnership for many years sharing profits 50:50. Alex joined the partnership on 1 October 2024 and the profit-sharing ratio became Erin: 40, Philipa: 40, Alex: 20. In the year ended 31 March 2025, partnership profits were €800,000.\n\n" +
      "Calculate Alex's share of partnership profits for the year ended 31 March 2025.",
    correctAnswer: 80000,
    tolerance: 0,
    explanation:
      "Alex was in the partnership for 6 months:<br>" +
      "€800,000 * 6/12 * 20% = €80,000",
  },

  // --- Q38 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Leafy Limited (LEAFY) commenced to trade on 1 January 2025. It makes up its first set of accounts to the year end 31 December 2025. Trading profits for the year end 31 December 2025 amounted to €162,000. LEAFY hired four employees during the first year of trading.\n\n" +
      "Total PRSI paid to its four employees equals €20,800 which is made up as follows:\n\n" +
      "  Employee 1:    €3,000\n" +
      "  Employee 2:    €4,500\n" +
      "  Employee 3:    €6,200\n" +
      "  Employee 4:    €7,100\n\n" +
      "Calculate the corporation tax LEAFY has to pay in 2025.",
    correctAnswer: 2750,
    tolerance: 0,
    explanation:
      "Corporation Tax Payable Before Relief: €162,000 * 12.5% = €20,250<br><br>" +
      "Employee 1: (€3,000)<br>" +
      "Employee 2: (€4,500)<br>" +
      "Employee 3: Max (€5,000)<br>" +
      "Employee 4: Max (€5,000)<br><br>" +
      "Final Corporation Tax (after relief): €2,750",
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Pre-trading expenses of a sole trader may be claimed as a deduction against Case I income provided certain conditions are met.\n\n" +
      "Identify which of the following statements are correct in relation to pre-trading expenses.\n\nSelect ALL that apply.",
    options: {
      A: "Pre-trading expenses may be claimed against trading income provided that the expenses were incurred within 48 months of the commencement of the trade",
      B: "Expenses incurred 12 months before the commencement of the trade in respect of marketing costs are not allowable pre-trading expenses",
      C: "Expenses incurred 24 months before the commencement of the trade in respect of accountancy fees for the new trade are allowable pre-trading expenses",
      D: "Expenses incurred 36 months before the commencement of the trade in respect of entertaining potential new clients are allowable pre-trading expenses",
    },
    correctAnswer: ["C"],
    explanation:
      "Expenses incurred 24 months before the commencement of the trade in respect of accountancy fees for the new trade are allowable pre-trading expenses.",
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Declan has a gross salary of €38,500 in 2025. He pays €4,200 into an approved PHI (Permanent Health Insurance) scheme. He also pays his father (aged 88) who is permanently incapacitated a deed of covenant of €3,700 (gross).\n\n" +
      "Determine the PHI payment amount that qualifies for income tax relief in 2025.",
    options: {
      A: "€4,200",
      B: "€720",
      C: "€3,480",
      D: "€3,700",
    },
    correctAnswer: "C",
    explanation:
      "Schedule E: €38,500<br>" +
      "Less: Charges (covenant): (€3,700)<br>" +
      "Total Income: €34,800<br>" +
      "Max PHI at 10%: €3,480<br>" +
      "Paid: €4,200<br>" +
      "Max Allowed in 2025: €3,480<br>" +
      "Carried forward to 2026: €720",
  },

  // --- Q41 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Section 486C TCA 1997 provides relief from corporation tax for new companies commencing to trade.\n\n" +
      "Identify which of the following trades will qualify for relief for corporation tax under S486C TCA 1997.",
    options: {
      A: "A trade that was previously carried on by another person",
      B: "A trade that is an excepted trade",
      C: "A trade that carries out tax and book-keeping services that commenced in 2020",
      D: "A manufacturing trade that commenced in 2021",
    },
    correctAnswer: "D",
    explanation:
      "A manufacturing trade that commenced in 2021.",
  },

  // --- Q42 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Marie acquired an investment property in Galway on 1 March 2014 for €195,000. She pays Irish income tax on the rental income. On 1 March 2025, Marie sells the property for €320,000.\n\n" +
      "Calculate the chargeable gain on the sale of the property.",
    correctAnswer: 45455,
    tolerance: 1,
    explanation:
      "A portion of the gain will be exempt (i.e. reflecting seven years' exempt ownership):<br><br>" +
      "Ownership: 1 March 2014 to 1 March 2025 = 11 years<br>" +
      "Exempt: 1 March 2014 to 1 March 2021 = 7 years<br><br>" +
      "Sale proceeds: €320,000<br>" +
      "Cost: (€195,000)<br>" +
      "Gain: €125,000<br><br>" +
      "Deduct exempt gain: €125,000 * 7/11 = (€79,545)<br>" +
      "Chargeable gain: €45,455",
  },

  // --- Q43 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Carlos is a sole trader and leases a car to carry out his duties of work. The Category C car was first leased on 1 January 2023 when its retail price, after cash discount, was €30,000. Carlos incurred lease charges of €8,200 in 2025 and 75% of his mileage was related to his business.\n\n" +
      "Calculate the disallowed lease payment in respect of the car for Carlos in 2025.",
    correctAnswer: 3690,
    tolerance: 0,
    explanation:
      "Lease Charges: €8,200<br>" +
      "Less: Private Element (€8,200 * 25%): (€2,050)<br>" +
      "Business Element: €6,150<br><br>" +
      "Disallowed Lease Payment:<br>" +
      "€6,150 * (€30,000 - €12,000) / €30,000 = €3,690<br>" +
      "(€24,000 * 50% = €12,000)",
  },

];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { taxSamplePaper3 };
}
