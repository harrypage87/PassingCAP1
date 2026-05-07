const taxSamplePaper2 = [

  // --- Q1 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 5,
    questionText:
      "Helen works as a marketing executive for a large multi-national company based in Meath. Her employment package for the tax year 2025 includes a basic salary of €31,000, with PAYE deducted at source amounting to €780.\n\n" +
      "Helen received the following benefits in the tax year 2025:\n\n" +
      "Apartment: Helen is the sole occupant of a company owned apartment recently valued at €140,000. An auctioneer has estimated the open market value of the rent per annum to be €14,500.\n\n" +
      "Company car (Category C, OMV €30,000): Her employer pays all running expenses except personal petrol. Helen's business travel for 2025 was 54,000 km and at least 60% of her time is spent away from the office.\n\n" +
      "Helen is single and has one child, Tom, aged five.\n\n" +
      "Calculate Helen's Income Tax liability for the tax year 2025.",
    parts: [
      { label: "Salary (€)", answer: 31000, tolerance: 0 },
      { label: "BIK: Apartment (€)", answer: 14500, tolerance: 0 },
      { label: "BIK: Car (€)", answer: 2400, tolerance: 0 },
      { label: "Total Income (€)", answer: 47900, tolerance: 0 },
      { label: "Income Tax Before Credits (€)", answer: 9580, tolerance: 0 },
      { label: "Non-Refundable Tax Credits (€)", answer: -5900, tolerance: 0 },
      { label: "Refundable Tax Credits (€)", answer: -780, tolerance: 0 },
      { label: "Net Income Tax Payable (€)", answer: 2900, tolerance: 0 },
    ],
    explanation:
      "Salary: €31,000<br>" +
      "BIK: Apartment: €14,500 (open market rental value)<br>" +
      "BIK: Car: (€30,000 - €10,000) * 12% = €2,400<br>" +
      "Total Income: €47,900<br><br>" +
      "Income Tax Before Credits: €9,580<br><br>" +
      "Non-Refundable Tax Credits (x3):<br>" +
      "Single Person: €2,000<br>" +
      "PAYE: €2,000<br>" +
      "Single Person Child Carer: €1,900<br>" +
      "Total: (€5,900)<br><br>" +
      "Refundable Tax Credits — PAYE Paid: (€780)<br><br>" +
      "Net Income Tax Payable: €2,900",
  },

  // --- Q2 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements are correct in relation to income and gains taxable for Irish corporation tax purposes.\n\nSelect ALL that apply.",
    options: {
      A: "Irish dividends, also known as franked investment income, are taxed at 25% for the purposes of Irish corporation tax",
      B: "Irish dividends, also known as franked investment income, are taxed at 12.5% for the purposes of Irish corporation tax",
      C: "Foreign dividends, also known as franked investment income, are exempt from corporation tax in Ireland",
      D: "Irish chargeable gains are taxed at 25% for the purposes of Irish corporation tax",
      E: "None of the above statements are correct",
    },
    correctAnswer: ["E"],
    explanation:
      "None of the above statements are correct.",
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "There are four basic elements that must apply before the provisions relating to the taxation of capital gains come into operation.\n\n" +
      "Identify the four basic elements that must apply before the provisions relating to the taxation of capital gains come into operation.\n\nSelect the correct answer.",
    options: {
      A: "There must be a disposal of an asset by a company after 5 April 1974.",
      B: "There must be a disposal of an asset by a chargeable person after 5 April 1974.",
      C: "There must be a disposal of an asset by a chargeable person after 31 December 2023.",
      D: "There must be a sale of an asset by a company after 1 January 2002.",
    },
    correctAnswer: "B",
    explanation:
      "There must be a disposal of an asset by a chargeable person after 5 April 1974.",
  },

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 7,
    questionText:
      "Hennessey Distributers Limited (HENNESSEY) is a successful hardware distribution company registered for VAT. HENNESSEY prepares its VAT returns on an invoice basis.\n\n" +
      "The company had the following activities for the VAT period May/June 2025:\n\n" +
      "Sales (exclusive of VAT):\n" +
      "  VAT registered Irish customers:   €310,000\n" +
      "  Private Irish customers:          €52,000\n\n" +
      "Purchases (exclusive of VAT except Diesel and Light & heat):\n" +
      "  Inventory from Irish supplier:    €140,000\n" +
      "  Diesel for van fleet:             €960 (VAT inclusive)\n" +
      "  Staff party:                      €1,100\n" +
      "  Light and heat:                   €278 (VAT inclusive)\n" +
      "  Accountancy fees:                 €920\n" +
      "  Company car (Category A):         €15,000 — used 75% for business\n" +
      "  Salaries:                         €22,000\n" +
      "  Stationery:                       €1,367 — no VAT invoice received\n\n" +
      "Input VAT should be entered as negative values. Enter zero where appropriate.\n\n" +
      "Calculate the VAT liability for HENNESSEY for May/June 2025.",
    parts: [
      { label: "VAT — VAT registered Irish customers (€)", answer: 71300, tolerance: 0 },
      { label: "VAT — Private Irish customers (€)", answer: 11960, tolerance: 0 },
      { label: "T1 Total VAT on Sales (€)", answer: 83260, tolerance: 0 },
      { label: "Input VAT — Inventory from Irish supplier (€)", answer: -32200, tolerance: 0 },
      { label: "Input VAT — Diesel for van fleet (€)", answer: -180, tolerance: 1 },
      { label: "Input VAT — Staff party (€)", answer: 0, tolerance: 0 },
      { label: "Input VAT — Light and heat (€)", answer: -23, tolerance: 1 },
      { label: "Input VAT — Accountancy fees (€)", answer: -212, tolerance: 0 },
      { label: "Input VAT — Company car Category A (€)", answer: -690, tolerance: 0 },
      { label: "Input VAT — Salaries (€)", answer: 0, tolerance: 0 },
      { label: "Input VAT — Stationery (€)", answer: 0, tolerance: 0 },
      { label: "T2 Total VAT on Purchases (€)", answer: -33305, tolerance: 1 },
      { label: "Total VAT Payable/(Recoverable) (€)", answer: 49955, tolerance: 1 },
    ],
    explanation:
      "VAT on Sales:<br>" +
      "VAT registered Irish customers: €310,000 * 23% = €71,300<br>" +
      "Private Irish customers: €52,000 * 23% = €11,960<br>" +
      "T1 Total VAT on Sales: €83,260<br><br>" +
      "Purchases:<br>" +
      "Inventory from Irish supplier: €140,000 * 23% = (€32,200)<br>" +
      "Diesel for van fleet: €960/123*23 = (€180)<br>" +
      "Staff party: Not Allowed = 0<br>" +
      "Light and heat: €278/109*9 = (€23)<br>" +
      "Accountancy fees: €920 * 23% = (€212)<br>" +
      "Company car Category A: €15,000 * 23% * 20% = (€690)<br>" +
      "Salaries: 0<br>" +
      "Stationery: No Invoice = 0<br>" +
      "T2 Total VAT on Purchases: (€33,305)<br><br>" +
      "Total VAT Payable: €49,955",
  },

  // --- Q5 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 1,
    questionText:
      "Identify the payment date for the VAT period May/June 2025.",
    options: {
      A: "23 June 2025",
      B: "23 July 2025",
      C: "23 August 2025",
      D: "31 December 2025",
    },
    correctAnswer: "B",
    explanation:
      "23 July 2025",
  },

  // --- Q6 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements are correct in relation to BIK on company vans.\n\nSelect ALL that apply.",
    options: {
      A: "A van means a mechanically propelled road vehicle which is designed or constructed solely or mainly for the carriage of goods (this is in addition to other conditions to be satisfied to meet the definition of a van)",
      B: "Where a van is made available to an employee for private use, the employee is taxable on the cash equivalent of the benefit of the van. The cash equivalent is 12.5% of its OMV",
      C: "A benefit in kind of only 5% of the OMV of a car/van will be assessed on an employee in respect of a car or van that is in a pool available for employees generally",
      D: "If the employee is provided with the van for part only of the particular tax year, then the cash equivalent is reduced on a pro rata basis",
    },
    correctAnswer: ["A", "D"],
    explanation:
      "A van means a mechanically propelled road vehicle which is designed or constructed solely or mainly for the carriage of goods (this is in addition to other conditions to be satisfied to meet the definition of a van).<br><br>" +
      "If the employee is provided with the van for part only of the particular tax year, then the cash equivalent is reduced on a pro rata basis.",
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 1,
    questionText:
      "Gearoid, a sole trader, has decided to hire his first employee, Anita.\n\n" +
      "Determine how Gearoid should register as an employer for PAYE purposes.",
    options: {
      A: "Register online using REG1/REG2",
      B: "Register online using TR1/TR2",
      C: "Register online using PAYE1/PAYE2",
      D: "Register online using EMP1/EMP2",
    },
    correctAnswer: "B",
    explanation:
      "Register online using TR1/TR2.",
  },

  // --- Q8 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 1,
    questionText:
      "Gearoid, a sole trader, has decided to hire his first employee, Anita. Anita has accepted Gearoid's offer of employment, with an agreed annual salary of €72,000, and is due to start employment on 1 April 2025. Anita ceased with her former employer on 31 January 2025.\n\n" +
      "Details of her earnings up to the date of leaving were €9,600 (PAYE paid of €1,900). Anita's standard rate cut-off is €44,000 per annum and her yearly tax credit is €4,000.\n\n" +
      "Calculate Anita's cumulative gross pay for April based on a salary of €72,000.",
    correctAnswer: 15600,
    tolerance: 0,
    explanation:
      "€15,600",
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 1,
    questionText:
      "Gearoid, a sole trader, has decided to hire his first employee, Anita. Anita has accepted Gearoid's offer of employment, with an agreed annual salary of €72,000, and is due to start employment on 1 April 2025. Anita ceased with her former employer on 31 January 2025.\n\n" +
      "Details of her earnings up to the date of leaving were €9,600 (PAYE paid of €1,900). Anita's standard rate cut-off is €44,000 per annum and her yearly tax credit is €4,000.\n\n" +
      "Calculate Anita's cumulative standard rate band for April (Month 4).",
    correctAnswer: 14668,
    tolerance: 1,
    explanation:
      "€14,668",
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 1,
    questionText:
      "Gearoid, a sole trader, has decided to hire his first employee, Anita. Anita has accepted Gearoid's offer of employment, with an agreed annual salary of €72,000, and is due to start employment on 1 April 2025. Anita ceased with her former employer on 31 January 2025.\n\n" +
      "Details of her earnings up to the date of leaving were €9,600 (PAYE paid of €1,900). Anita's standard rate cut-off is €44,000 per annum and her yearly tax credit is €4,000.\n\n" +
      "Calculate Anita's cumulative tax credit for April (Month 4).",
    correctAnswer: 1332,
    tolerance: 1,
    explanation:
      "€1,332",
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "Gearoid, a sole trader, has decided to hire his first employee, Anita. Anita has accepted Gearoid's offer of employment, with an agreed annual salary of €72,000, and is due to start employment on 1 April 2025. Anita ceased with her former employer on 31 January 2025.\n\n" +
      "Details of her earnings up to the date of leaving were €9,600 (PAYE paid of €1,900). Anita's standard rate cut-off is €44,000 per annum and her yearly tax credit is €4,000.\n\n" +
      "Calculate the total income tax Anita has to pay in April.",
    correctAnswer: 75,
    tolerance: 0,
    explanation:
      "Month — Gross Pay — Cum Gross Pay — Cum Std Rate Band — Cum at 20% — Cum at 40% — Total Cum Tax — Tax Credit — Net Tax<br><br>" +
      "Jan: €9,600 / €9,600 / €3,667 / €3,106 / — / €3,106 / €333 / €2,773<br>" +
      "Feb: — / — / €7,334 / — / — / — / €666 / —<br>" +
      "Mar: — / — / €11,001 / — / — / — / €999 / —<br>" +
      "April: €6,000 / €15,600 / €14,668 / €2,934 / €373 / €3,307 / €1,332 / €1,975<br><br>" +
      "Total Tax Payable up to April 2025: €1,975<br>" +
      "Tax Already Paid: (€1,900)<br>" +
      "Net Tax due in April: €75",
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 7,
    questionText:
      "Flower HQ Limited prepares its accounts to 31 October each year. You have been provided with the statement of profit or loss for the accounting year ended 31 October 2025.\n\n" +
      "Profit before tax: €268,079\n\n" +
      "Notes:\n" +
      "1. Bad debts: estimated at 0.5% of sales (€2,500,000).\n" +
      "2. Travel and entertainment: Travel & subsistence €3,920; Entertaining customers €1,670; Staff Christmas party €950; Travel to suppliers €1,780.\n" +
      "3. Salaries includes a pension accrual of €5,000.\n" +
      "4. Finance charges: Lease payments for sales director's car €3,500 (Category A, retail value €26,000, first leased July 2025); Other interest charges €2,530.\n" +
      "5. Repairs includes purchase of a laptop costing €400 for an employee.\n" +
      "6. Legal fees: Legal advice for new supplier contract €1,570; Legal advice re potential purchase of investment property €930.\n" +
      "7. Miscellaneous: Donation to local charity €110; Sponsorship €235; Sundries (all allowable) €80.\n\n" +
      "Calculate FLOWER HQ's adjusted Case I profits for the year ended 31 October 2025.",
    parts: [
      { label: "Profit per Accounts (€)", answer: 268079, tolerance: 0 },
      { label: "Add back — Bad Debts (€)", answer: 12500, tolerance: 0 },
      { label: "Add back — Travel and entertainment (€)", answer: 1670, tolerance: 0 },
      { label: "Add back — Salaries (€)", answer: 5000, tolerance: 0 },
      { label: "Add back — Finance charges (€)", answer: 269, tolerance: 1 },
      { label: "Add back — Repairs (€)", answer: 400, tolerance: 0 },
      { label: "Add back — Legal fees (€)", answer: 930, tolerance: 0 },
      { label: "Add back — Miscellaneous (€)", answer: 110, tolerance: 0 },
      { label: "Total Addbacks (€)", answer: 20879, tolerance: 1 },
      { label: "Adjusted Case I Profits (€)", answer: 288958, tolerance: 1 },
    ],
    explanation:
      "Bad Debts: €12,500 (general provision — not allowable)<br>" +
      "Travel and entertainment: €1,670 (entertaining customers — not allowable)<br>" +
      "Salaries: €5,000 (pension accrual — not yet paid)<br>" +
      "Finance charges: €3,500 * (€26,000 - €24,000) / €26,000 = €269 (excess lease payments over the €24,000 threshold for Category A car)<br>" +
      "Repairs: €400 (laptop — capital in nature)<br>" +
      "Legal fees: €930 (legal advice re potential purchase of investment property — capital)<br>" +
      "Miscellaneous: €110 (donation to local charity — not allowable)<br><br>" +
      "Total Addbacks: €20,879<br>" +
      "Adjusted Case I Profits: €288,958",
  },

  // --- Q13 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 1,
    questionText:
      "Identify by which date FLOWER HQ has to file its corporation tax return (Form CT1) for the year ended 31 October 2025.",
    options: {
      A: "23 September 2025",
      B: "23 December 2025",
      C: "23 July 2026",
      D: "23 September 2026",
    },
    correctAnswer: "C",
    explanation:
      "23 July 2026",
  },

  // --- Q14 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "In January 2025, Cheryl disposed of a car for €35,000 (emissions category B) which was used 80% for business purposes. The car had originally cost €50,000 in 2023 and had a tax written down value (TWDV) on 1 January 2025 of €18,000.\n\n" +
      "Calculate the balancing charge/allowance arising on the disposal of the car in 2025.",
    options: {
      A: "Balancing charge: €6,000",
      B: "Balancing allowance: €6,000",
      C: "Balancing charge: €1,200",
      D: "Balancing allowance: €1,200",
    },
    correctAnswer: "D",
    explanation:
      "Deemed sales proceeds: €35,000 * €24,000 / €50,000 = €16,800<br>" +
      "TWDV 01/01/2025: (€18,000)<br>" +
      "Balancing Allowance: (€1,200)",
  },

  // --- Q15 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "During the tax year 2025 Eamon made several capital disposals, as follows:\n\n" +
      "March 2025 — He sold Irish Government securities for €22,800. Eamon had purchased the securities in April 2006 for €8,000.\n\n" +
      "June 2025 — Eamon sold a piece of jewellery for €1,220. The jewellery originally cost him €800 in 2012.\n\n" +
      "October 2025 — Eamon gifted a painting to his sister Nora. The painting was part of a collection of four. Eamon had bought the set of paintings in February 2010, paying €16,000. At the date of the gift, the market value of the painting was €3,000 and the total market value of the remaining paintings was €9,000.\n\n" +
      "Calculate Eamon's net chargeable gain for the tax year 2025, assuming all potential tax reliefs are claimed.",
    options: {
      A: "€15,220",
      B: "€14,800",
      C: "€420",
      D: "No chargeable gains in 2025",
    },
    correctAnswer: "D",
    explanation:
      "No chargeable gains in 2025.",
  },

  // --- Q16 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "Newbee Limited commenced to trade on 1 January 2025. It makes up its first set of accounts to the year end 31 December 2025. Trading profits for the year end 31 December 2025 amounted to €140,000. NEWBEE hired four employees during the first year of trading.\n\n" +
      "Total PRSI paid to its four employees equals €19,700, made up as follows:\n\n" +
      "  Employee 1:    €2,000\n" +
      "  Employee 2:    €4,000\n" +
      "  Employee 3:    €6,200\n" +
      "  Employee 4:    €7,500\n\n" +
      "Calculate the amount of corporation tax NEWBEE has to pay in 2025 (after relief for new company employees, maximum €5,000 per employee).",
    correctAnswer: 1500,
    tolerance: 0,
    explanation:
      "Corporation Tax Payable Before Relief: €140,000 * 12.5% = €17,500<br><br>" +
      "Employee 1: (€2,000)<br>" +
      "Employee 2: (€4,000)<br>" +
      "Employee 3: Max (€5,000)<br>" +
      "Employee 4: Max (€5,000)<br><br>" +
      "Final Corporation Tax (after relief): €1,500",
  },

  // --- Q17 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following should be shown on a VAT invoice/credit note.\n\nSelect ALL that apply.",
    options: {
      A: "Supplier's VAT registration number",
      B: "The tax residence status of the supplier",
      C: "Name and address of the customer",
      D: "Date of issue of the invoice",
      E: "Date of supply of the goods or services",
      F: "The amount charged exclusive of VAT (in €)",
    },
    correctAnswer: ["A", "C", "D", "E", "F"],
    explanation:
      "Supplier's VAT registration number.<br>" +
      "Name and address of the customer.<br>" +
      "Date of issue of the invoice.<br>" +
      "Date of supply of the goods or services.<br>" +
      "The amount charged exclusive of VAT (in €).",
  },

  // --- Q18 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Siobhan (59) is a widow. Her husband Eoin died in July 2023. For 2025, she had employment income from which PAYE of €2,200 was deducted. She was also in receipt of the Department of Social Protection contributory widow's pension. Her total tax liability for 2025 is €9,826 (before the deduction of any tax credits). Siobhan has one child Lola, who is 16, and is incapacitated since birth.\n\n" +
      "Calculate the total tax credits available to Siobhan in 2025.",
    options: {
      A: "€12,026",
      B: "€14,350",
      C: "€12,150",
      D: "€9,826",
    },
    correctAnswer: "A",
    explanation:
      "Total Tax: €9,826<br><br>" +
      "Non-Refundable Tax Credits:<br>" +
      "Basic personal tax credit (widowed): €2,000<br>" +
      "Single Person Child Carer: €1,900<br>" +
      "PAYE tax credit: €2,000<br>" +
      "Widowed Parent (2nd year after year of death): €3,150<br>" +
      "Incapacitated Child: €3,800<br>" +
      "Total Non-Refundable Tax Credits: €12,850<br>" +
      "Restricted to Total Tax: €9,826<br><br>" +
      "Refundable Tax Credit: €2,200<br><br>" +
      "Total Tax Credits available: €12,026",
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "Danys sold an antique dresser in 2025 that has been in his family for years. He inherited this antique dresser from his father on his death in 2010. The value of the antique dresser at the time of his father's death was €2,560. His father inherited the dresser from his grandmother on 1 June 1992 for €820.\n\n" +
      "Danys sold the antique dresser for €1,270 in 2025.\n\n" +
      "Calculate the allowable capital loss arising on the sale of antique dresser that will be available for Danys to carry forward into 2026.",
    correctAnswer: 20,
    tolerance: 0,
    explanation:
      "Sales Proceeds: €1,270<br>" +
      "Cost: (€2,560)<br>" +
      "Actual Loss: (€1,290)<br><br>" +
      "Allowable Loss: €2,540 - €2,560 = (€20)",
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 5,
    questionText:
      "Moby Limited (MOBY), an Irish resident company, began trading on 1 July 2023. The results of MOBY for the first accounting periods are reported as follows:\n\n" +
      "                          Year ended 30/06/24   Year ended 30/06/25   Period ended 31/12/25\n" +
      "Trading profit/(loss):   (€38,000)             €28,000               €12,000\n" +
      "Case V profit/(loss):    —                     (€15,000)             €30,000\n" +
      "Case V capital allow.:   —                     (€5,000)              (€5,000)\n\n" +
      "Losses should be entered as negative values. Relief for capital allowances should be entered as negative values.\n\n" +
      "Calculate the total taxable income subject to corporation tax for MOBY for the year ended 31 December 2025.",
    parts: [
      { label: "Case I Income (€)", answer: 12000, tolerance: 0 },
      { label: "Loss Relief (€)", answer: -10000, tolerance: 0 },
      { label: "Net Case I Income (€)", answer: 2000, tolerance: 0 },
      { label: "Case V Income (€)", answer: 30000, tolerance: 0 },
      { label: "Case V Capital Allowances (€)", answer: -5000, tolerance: 0 },
      { label: "Loss Relief (€)", answer: -20000, tolerance: 0 },
      { label: "Net Case V Income (€)", answer: 5000, tolerance: 0 },
      { label: "Total Taxable Income (€)", answer: 7000, tolerance: 0 },
    ],
    explanation:
      "Case I Income: €12,000<br>" +
      "Loss Relief: (€38,000 - €28,000) = (€10,000)<br>" +
      "Net Case I Income: €2,000<br><br>" +
      "Case V Income: €30,000<br>" +
      "Case V Capital Allowances: (€5,000)<br>" +
      "Loss Relief: (€20,000)<br>" +
      "Net Case V Income: €5,000<br><br>" +
      "Total Taxable Income: €7,000",
  },

  // --- Q21 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify, regarding the calculation of capital gains tax (CGT), when market value applies as opposed to the consideration given, for the sales proceeds.\n\nSelect ALL that apply.",
    options: {
      A: "Transaction between connected persons",
      B: "Transaction not at arm's length",
      C: "Transaction where consideration is not valued in money terms or that is a barter transaction",
      D: "Transaction where consideration cannot be valued",
      E: "The acquisition of an asset in a winding up situation",
    },
    correctAnswer: ["A", "B", "C", "D", "E"],
    explanation:
      "Transaction between connected persons.<br>" +
      "Transaction not at arm's length.<br>" +
      "Transaction where consideration is not valued in money terms or that is a barter transaction.<br>" +
      "Transaction where consideration cannot be valued.<br>" +
      "The acquisition of an asset in a winding up situation.",
  },

  // --- Q22 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 4,
    questionText:
      "Dermot, who traded as an architect for many years, retired on 31 May 2025. The results for the last few years of trading were as follows:\n\n" +
      "  Year ended 31/08/2023:       Profit €36,000\n" +
      "  Year ended 31/08/2024:       Profit €48,000\n" +
      "  Nine months to 31/05/2025:   Profit €45,000\n\n" +
      "Calculate Dermot's taxable profits for 2024 and 2025.",
    parts: [
      { label: "Taxable Profits for 2024 (€)", answer: 52000, tolerance: 0 },
      { label: "Taxable Profits for 2025 (€)", answer: 25000, tolerance: 0 },
    ],
    explanation:
      "Taxable Profits for 2024:<br>" +
      "Original Assessed Profits: €48,000<br>" +
      "Revise to Actual 01/01/2024 - 31/12/2024:<br>" +
      "€48,000 * 8/12 = €32,000<br>" +
      "€45,000 * 4/9 = €20,000<br>" +
      "Revised to Actual: €52,000<br><br>" +
      "Taxable Profits for 2025:<br>" +
      "01/01/2025 - 31/05/2025:<br>" +
      "€45,000 * 5/9 = €25,000",
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Gearoid and Assumpta separated in 2025. As part of a deed of separation, Gearoid transfers the following assets to Assumpta:\n\n" +
      "• Shares worth €43,300 (which he had purchased 9 years ago for €18,900).\n" +
      "• His interest in the family home worth €210,000 (cost €95,000 in 2011). Both Gearoid and Assumpta have lived in this house since it was purchased. They own no other properties.\n\n" +
      "Identify which of the following statements are correct regarding the transfer of assets and/or the subsequent sale of assets after the deed of separation.\n\nSelect ALL that apply.",
    options: {
      A: "Gearoid will not be liable for any CGT on either of the disposals to Assumpta in 2025",
      B: "Gearoid will be liable to CGT on the disposals to Assumpta in 2025.",
      C: "If Assumpta subsequently sells any of the shares, she will be liable for any CGT which arises. The gain will be calculated as if she had purchased the shares herself, 9 years ago, at the original cost of €18,900",
      D: "If Assumpta subsequently sells the family home after the separation, she will have a CGT liability of €37,531",
    },
    correctAnswer: ["A", "C"],
    explanation:
      "Gearoid will not be liable for any CGT on either of the disposals to Assumpta in 2025.<br><br>" +
      "If Assumpta subsequently sells any of the shares, she will be liable for any CGT which arises. The gain will be calculated as if she had purchased the shares herself, nine years ago, at the original cost of €18,900.",
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "If the corporation tax return (FORM CT1) is filed late, there is a surcharge for late filing.\n\n" +
      "Identify which of the following statements are correct in relation to the surcharge for late filing.\n\nSelect ALL that apply.",
    options: {
      A: "If Form CT1 is filed within two months of the due filing date, the surcharge is 5% of the tax due for the period, subject to a maximum of €12,695",
      B: "If Form CT1 is filed within two months of the due filing date, the surcharge is 10% of the tax due for the period, subject to a maximum of €63,485",
      C: "If Form CT1 is filed two months after the due filing date, the surcharge is 5% of the tax due for the period, subject to a maximum of €63,485",
      D: "If Form CT1 is filed two months after the due filing date, the surcharge is 10% of the tax due for the period, subject to a maximum of €64,485",
    },
    correctAnswer: ["A", "D"],
    explanation:
      "If Form CT1 is filed within two months of the due filing date, the surcharge is 5% of the tax due for the period, subject to a maximum of €12,695.<br><br>" +
      "If Form CT1 is filed two months after the due filing date, the surcharge is 10% of the tax due for the period, subject to a maximum of €63,485.",
  },

  // --- Q25 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 1,
    questionText:
      "The date of disposal determines the rate of CGT that applies and when the CGT must be paid.\n\n" +
      "In the case of a conditional contract, the general rule is that the date of the disposal for the purposes of CGT is the date on which the condition is satisfied.\n\n" +
      "Determine whether this statement is true or false.",
    options: { A: "True", B: "False" },
    correctAnswer: "A",
    explanation:
      "True.",
  },

  // --- Q26 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 1,
    questionText:
      "In the case of gifts, the date of disposal is the date on which the property effectively passes.\n\n" +
      "Determine whether this statement is true or false.",
    options: { A: "True", B: "False" },
    correctAnswer: "A",
    explanation:
      "True.",
  },

  // --- Q27 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 1,
    questionText:
      "In the case of compulsory purchase orders (CPO), the date of disposal is the date the CPO is initiated.\n\n" +
      "Determine whether this statement is true or false.",
    options: { A: "True", B: "False" },
    correctAnswer: "B",
    explanation:
      "False.",
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Bairbre (aged 42) is married to Kenneth (aged 42). Both are Irish resident and domiciled and are jointly assessed for income tax purposes. They have three young children between the ages of 2 and 7.\n\n" +
      "Bairbre is a self-employed tax adviser. Her Case II adjusted profits for the year ended 31 December 2025 are €53,000. During 2025, Bairbre made contributions to a Revenue approved pension scheme of €5,000. Kenneth works as an operations manager in the local hospital. In 2025, Kenneth earned €38,000 from which PAYE of €3,600 was deducted.\n\n" +
      "Bairbre owns a residential house in Limerick, rented since 1 January 2025 to students. Gross rents received in 2025 amount to €12,800. Net Case V income after allowable expenses and capital allowances is €7,388.\n\n" +
      "Calculate Bairbre's net Case V income subject to income tax for the tax year 2025.",
    options: {
      A: "€8,188",
      B: "€7,788",
      C: "€7,428",
      D: "€7,388",
    },
    correctAnswer: "D",
    explanation:
      "Gross rent received: €12,800<br><br>" +
      "Less Expenses:<br>" +
      "Repairs to dishwasher: (€320)<br>" +
      "PRTB Fee: (€40)<br>" +
      "Legal Fees: (€250)<br>" +
      "Mortgage Interest: (€3,920)<br>" +
      "Insurance: (€482)<br>" +
      "Case V Income before capital allowances: €7,788<br><br>" +
      "Capital Allowances: €3,200 * 12.5% = (€400)<br><br>" +
      "Net Case V Income: €7,388",
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 10,
    questionText:
      "Bairbre (aged 42) is married to Kenneth (aged 42). Both are Irish resident and domiciled and are jointly assessed for income tax purposes. They have three young children between the ages of 2 and 7.\n\n" +
      "Bairbre is a self-employed tax adviser. Her Case II adjusted profits for the year ended 31 December 2025 are €53,000. During 2025, Bairbre made contributions to a Revenue approved pension scheme of €5,000. Kenneth works as an operations manager in the local hospital. In 2025, Kenneth earned €38,000 from which PAYE of €3,600 was deducted.\n\n" +
      "Additional income for the tax year 2025:\n" +
      "  Deposit interest income (Kenneth, net of DIRT): €92\n" +
      "  Irish Dividends (Bairbre, net):                 €4,800\n\n" +
      "Net Case V income: €7,388\n\n" +
      "Calculate Bairbre and Kenneth's liability to income tax (before PRSI and USC) for the year ended 31 December 2025.",
    parts: [
      { label: "Schedule D Case II (€)", answer: 53000, tolerance: 0 },
      { label: "Schedule D Case IV — deposit interest gross (€)", answer: 137, tolerance: 1 },
      { label: "Schedule D Case V (€)", answer: 7388, tolerance: 0 },
      { label: "Schedule E (€)", answer: 38000, tolerance: 0 },
      { label: "Schedule F — dividends gross (€)", answer: 6400, tolerance: 0 },
      { label: "Total Taxable Income (after pension deduction) (€)", answer: 99925, tolerance: 0 },
      { label: "Income Tax Payable (€)", answer: 9115, tolerance: 0 },
    ],
    explanation:
      "Schedule D Case I: €53,000<br>" +
      "Case IV (deposit interest gross): €92 / 0.67 = €137<br>" +
      "Case V: €7,388<br>" +
      "Schedule E: €38,000<br>" +
      "Schedule F (dividends gross): €4,800 / 0.75 = €6,400<br>" +
      "Total Income before Allowances/Reliefs: €104,925<br>" +
      "Less: Pension deduction: (€5,000)<br>" +
      "Total Taxable Income: €99,925<br><br>" +
      "Income Tax at 20%: €88,000 * 20% = €17,600<br>" +
      "Income Tax at 33%: €137 * 33% = €45<br>" +
      "Income Tax at 40%: €11,788 * 40% = €4,715<br>" +
      "Total tax before credits: €22,360<br><br>" +
      "Less Non-Refundable Tax Credits:<br>" +
      "Personal: €4,000; PAYE: €2,000; Earned Income: €2,000; DIRT: €45 = (€8,045)<br><br>" +
      "Less Refundable Tax Credits:<br>" +
      "PAYE: €3,600; DWT: €1,600 = (€5,200)<br><br>" +
      "Income Tax Payable: €9,115",
  },

  // --- Q30 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 1,
    questionText:
      "Identify the due date for Bairbre and Kenneth to file their income tax return for the tax year 2025.",
    options: {
      A: "31 October 2025",
      B: "31 December 2025",
      C: "23 September 2026",
      D: "31 October 2026",
    },
    correctAnswer: "D",
    explanation:
      "31 October 2026.",
  },

  // --- Q31 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "In August 2025, Miles purchased a residential property for €388,000 in Athy, County Kildare. Miles has sought your advice on the Local Property Tax (LPT) due on this property for 2026. Kildare County Council has a local adjustment factor of an increase of 10%.\n\n" +
      "Calculate the LPT payable by Miles on the Athy property for 2026.",
    correctAnswer: 446,
    tolerance: 1,
    explanation:
      "Market Value: €388,000<br>" +
      "Midpoint: €393,750<br>" +
      "Rate: 0.1029%<br>" +
      "€393,750 * 0.1029% = €405<br>" +
      "Kildare Council Increase: €41<br>" +
      "LPT Payable: €446",
  },

  // --- Q32 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "A person may be liable to penalties, interest and sanctions for non-filing or late payment of LPT.\n\n" +
      "Identify which of the following statements is correct regarding penalties, interest and sanctions for non-filing or late payment of LPT.",
    options: {
      A: "Where a liable person does not file a LPT return the penalty is the LPT due, subject to a maximum of €2,000",
      B: "Where a liable person knowingly undervalues their property for the purpose of calculating LPT due, the penalty is the correct amount of LPT, subject to a maximum of €2,000",
      C: "The rate of interest due on late payments is 0.0274% per day or part thereof",
      D: "Where a self-assessed liable person fails to pay LPT, Revenue will not issue a tax clearance certificate",
    },
    correctAnswer: "D",
    explanation:
      "Where a self-assessed liable person fails to pay LPT, Revenue will not issue a tax clearance certificate.",
  },

  // --- Q33 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Terminal loss relief permits the carry back of losses on a permanent cessation of a trade.\n\n" +
      "Identify which of the following statements is correct in relation to terminal loss relief.",
    options: {
      A: "Any trading losses incurred in the final 12 months of trading, which have not otherwise been used, can be set against trading income of the same trade for all periods preceding the final 12-month period",
      B: "Any trading losses incurred in the final 12 months of trading, which have not otherwise been used, can be set against trading income of the same trade for the 24 months preceding the final 12-month period",
      C: "Any trading losses incurred in the final 12 months of trading, which have not otherwise been used, can be set against trading income of the same trade for the 36 months preceding the final 12-month period",
      D: "Any trading losses incurred in the final 36 months of trading, which have not otherwise been used, can be set against trading income of the same trade for the 12 months preceding the final 36-month period",
    },
    correctAnswer: "C",
    explanation:
      "Any trading losses incurred in the final 12 months of trading, which have not otherwise been used, can be set against trading income of the same trade for the 36 months preceding the final 12-month period.",
  },

  // --- Q34 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Erick is a self-employed tax adviser. He is currently updating his office space. He is considering installing a false ceiling with decorative lighting in his newly decorated office.\n\n" +
      "Identify which of the following statements are correct regarding the tax treatment of the false ceiling.",
    options: {
      A: "The decorative ceiling will qualify for capital allowances at the standard rate of 12.5% of the cost",
      B: "The decorative ceiling will qualify for capital allowances at the reduced rate of 4% of the cost",
      C: "The decorative ceiling will qualify for accelerated capital allowances at a rate of 100% of the cost",
      D: "The decorative ceiling will not qualify for capital allowances as it is not functional to the actual business",
    },
    correctAnswer: "D",
    explanation:
      "The decorative ceiling will not qualify for capital allowances as it is not functional to the actual business.",
  },

  // --- Q35 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "Martin Mulrooney is a single man resident and domiciled in Ireland. Martin purchased a house in Listowel on 1 July 1970 for €6,000. The market value of the house on 6 April 1974 was €15,000.\n\n" +
      "The house was sold by Martin on 31 July 2025 for €720,000. Martin incurred legal fees of €1,310 and auctioneer fees of €3,200 in connection with the disposal. Before selling the house, Martin paid €320 for the hire of a skip to get rid of old furnishings and €540 to a cleaning company.\n\n" +
      "Calculate the net sales proceeds to be included in Martin's CGT computation on the sale of his house in Listowel in 2025.",
    correctAnswer: 715490,
    tolerance: 0,
    explanation:
      "€715,490",
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Martin Mulrooney is a single man resident and domiciled in Ireland. Martin purchased a house in Listowel on 1 July 1970 for €6,000. The market value of the house on 6 April 1974 was €15,000.\n\n" +
      "Over his duration of ownership, Martin incurred the following additional expenditure on the house:\n\n" +
      "February 1994: kitchen extension. Martin paid for third party labour and building materials at a total cost of €5,600. Martin also spent €3,900 on a new fitted kitchen and €1,000 on new kitchen appliances.\n\n" +
      "July 2001: a new conservatory was added at a cost of €6,200.\n\n" +
      "Note: The relevant indexation factors are: 1974/75 = 7.528 | 1994/95 = 1.331 | 2001/02 = 1.087.\n\n" +
      "Calculate the total cost (including any enhancement expenditure and indexation) to be included in Martin's CGT computation.",
    options: {
      A: "€112,920",
      B: "€125,565",
      C: "€132,304",
      D: "€128,620",
    },
    correctAnswer: "C",
    explanation:
      "Base Cost: €15,000 * 7.528 = €112,920<br>" +
      "Extension: (€5,600 + €3,900) * 1.331 = €12,645<br>" +
      "Conservatory: €6,200 * 1.087 = €6,739<br><br>" +
      "Total Cost: €132,304",
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Calculate the total number of months in which Martin occupied his house in Listowel for the purposes of claiming principal private residence (PPR) relief.\n\n" +
      "Martin occupied the house as his PPR from 1 July 1970 until 1 April 2021, apart from the following periods of absence:\n\n" +
      "• 1 August 1975 to 31 July 1978: worked in Brussels for an associated company of his employer. While away, he let his house to a tenant.\n\n" +
      "• 1 May 1979 to 31 January 1986: sent by his employer to work in Mayo. House was unoccupied during this period.\n\n" +
      "On 1 April 2021, Martin retired to live in Tralee and let out the house. The house was sold on 31 July 2025.",
    options: {
      A: "605 Months",
      B: "617 Months",
      C: "543 Months",
      D: "576 Months",
      E: "531 Months",
    },
    correctAnswer: "C",
    explanation:
      "Ownership: 06/04/1974 - 31/08/2025 = 617 Months<br><br>" +
      "Deemed occupation: 01/08/1975 - 31/07/1978 (working abroad for employer — fully deemed)<br>" +
      "Occupied: 01/08/1978 - 30/04/1979<br>" +
      "Partial Occupation: 01/05/1979 - 31/01/1986 (4 years allowed — working in Ireland but away) = 33 Months not occupied<br>" +
      "Occupied: 01/02/1986 - 31/03/2021<br>" +
      "Not Occupied: 01/04/2021 - 31/08/2024 = 41 Months<br>" +
      "Last 12 Months — Deemed occupation: 01/09/2024 - 31/08/2025<br><br>" +
      "Total Not Occupied: 74 Months<br>" +
      "Total Occupied: 617 - 74 = 543 Months",
  },

  // --- Q38 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Sean Fitzmaurice has a tax-adjusted trading profit of €46,000 for the year ended 31 December 2025. He also has capital allowances of €5,000 for 2025. He received net interest of €200 on his Credit Union share account. He contributed €3,000 to his pension scheme in 2025. Sean is single and Irish tax resident.\n\n" +
      "Calculate the PRSI payable by Sean Fitzmaurice in 2025.",
    options: {
      A: "€1,662",
      B: "€1,691",
      C: "€1,704",
      D: "€1,910",
    },
    correctAnswer: "C",
    explanation:
      "Income liable to PRSI:<br>" +
      "Case I Income: €46,000<br>" +
      "Less Capital Allowances: (€5,000)<br>" +
      "Net Case I Income: €41,000<br>" +
      "Credit Union Interest: €200 / 0.67 = €299<br>" +
      "Total Income liable to PRSI: €41,299<br><br>" +
      "PRSI at 4.125%: €1,704",
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Eco Limited (ECO) provided James with an electric bike worth €2,410 under the cycle-to-work scheme.\n\n" +
      "Calculate James' taxable BIK (if any) in respect of the electric bike provided by ECO.",
    options: {
      A: "The provision of an electric bike is fully exempt from tax for James.",
      B: "€2,410",
      C: "€1,500",
      D: "€910",
    },
    correctAnswer: "D",
    explanation:
      "€2,410 - €1,500 = €910",
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Redup Limited (REDUP) incurred finance costs of €25,800 for the year ended 31 December 2025. This includes:\n\n" +
      "  Interest on working capital bank loan:   €9,000\n" +
      "  Bank interest and charges:               €2,200\n" +
      "  Finance lease interest on machinery:     €8,200\n" +
      "  Operating lease interest:                €6,400\n" +
      "  Total:                                   €25,800\n\n" +
      "Calculate the finance cost that will be added back in the adjusted Case I computation for REDUP in 2025.",
    options: {
      A: "€25,800",
      B: "€8,200",
      C: "€17,600",
      D: "€14,600",
    },
    correctAnswer: "B",
    explanation:
      "€8,200 (Finance lease interest on machinery — added back as it is a capital finance cost).",
  },

  // --- Q41 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements is correct in respect of the Employee Tax Credit.\n\nSelect ALL that apply.",
    options: {
      A: "An employee can claim the full credit of €2,000 in 2025 regardless of their level of employment income in a year",
      B: "An individual can receive the employee tax credit where they receive income from an employment held outside the State if that income has been subject to a tax deduction system similar to that of Ireland",
      C: "The employee tax credit can be claimed by a proprietary director of a company where they are in receipt of Schedule E income",
      D: "An individual can claim the full employee tax credit and the full earned income credits in a tax year",
    },
    correctAnswer: ["B"],
    explanation:
      "An individual can receive the employee tax credit where they receive income from an employment held outside the State if that income has been subject to a tax deduction system similar to that of Ireland.",
  },

  // --- Q42 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Companies must deduct income tax at the standard rate (20%) when making annual payments or relevant payments.\n\n" +
      "Identify which of the following is NOT regarded as a relevant payment.",
    options: {
      A: "Bank interest",
      B: "Patent royalties",
      C: "Covenants",
      D: "Rent paid to non-residents",
    },
    correctAnswer: "A",
    explanation:
      "Bank interest.",
  },

];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { taxSamplePaper2 };
}
