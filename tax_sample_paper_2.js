const taxSamplePaper2 = [

  // --- Q1 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 5,
    questionText:
      "Helen works as a marketing executive for a large multi-national company based in Meath. Her employment package for the tax year 2025 includes a basic salary of €31,000, with PAYE deducted at source amounting to €780.\n\n" +
      "Helen received the following benefits in the tax year 2025:\n\n" +
      "• The use of a company owned apartment. Helen is the sole occupant of the apartment which was recently valued at €140,000. An auctioneer has estimated the open market value of the rent per annum on the apartment to be €14,500.\n\n" +
      "• A company car (Category C) with an original market value of €30,000. Her employer pays for all running expenses except for personal petrol expenses. Helen's business travel for 2025 was 54,000 km and at least 60% of her time is spent away from the office. Helen is required to retain a record log of all her daily business travel.\n\n" +
      "Helen is single and has one child, Tom who is aged five.\n\n" +
      "Calculate Helen's Income Tax liability for the tax year 2025.",
    parts: [
      { label: "BIK: Apartment (€)", correctAnswer: 14500, tolerance: 0 },
      { label: "BIK: Car (€)", correctAnswer: 2400, tolerance: 0 },
      { label: "Net Income Tax Payable (€)", correctAnswer: 2900, tolerance: 0 },
    ],
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
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "There are four basic elements that must apply before the provisions relating to the taxation of capital gains come into operation.\n\n" +
      "Identify the four basic elements that must apply before the provisions relating to the taxation of capital gains come into operation.",
    options: {
      A: "There must be a disposal of an asset by a company after 5 April 1974.",
      B: "There must be a disposal of an asset by a chargeable person after 5 April 1974.",
      C: "There must be a disposal of an asset by a chargeable person after 31 December 2023.",
      D: "There must be a sale of an asset by a company after 1 January 2002.",
    },
    correctAnswer: "B",
  },

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 7,
    questionText:
      "Hennessey Distributers Limited (HENNESSEY) is a successful hardware distribution company. It has been in business for ten years, has two fulltime employees and the business is registered for VAT in the Republic of Ireland. HENNESSEY prepares its VAT returns on an invoice basis.\n\n" +
      "The company had the following activities for the VAT period May/June 2025:\n\n" +
      "Sales (exclusive of VAT):\n" +
      "  VAT registered Irish customers:   €310,000\n" +
      "  Private Irish customers:           €52,000\n\n" +
      "Purchases (exclusive of VAT unless stated):\n" +
      "  Inventory from Irish supplier:     €140,000\n" +
      "  Diesel for van fleet:              €960 (inclusive of VAT)\n" +
      "  Staff party:                       €1,100\n" +
      "  Light and heat:                    €278 (inclusive of VAT at 9%)\n" +
      "  Accountancy fees:                  €920\n" +
      "  Company car – Category A:          €15,000 (used 75% for business)\n" +
      "  Salaries:                          €22,000\n" +
      "  Stationery:                        €1,367 (no VAT invoice received)\n\n" +
      "Complete the table to calculate the VAT liability for HENNESSEY in respect of the May/June 2025 period.\n\n" +
      "Note: Input VAT should be entered as positive values here.",
    parts: [
      { label: "T1 — VAT on Sales: VAT registered Irish customers (€)", correctAnswer: 71300, tolerance: 0 },
      { label: "T1 — VAT on Sales: Private Irish customers (€)", correctAnswer: 11960, tolerance: 0 },
      { label: "T2 — Input VAT: Inventory from Irish supplier (€)", correctAnswer: 32200, tolerance: 0 },
      { label: "T2 — Input VAT: Diesel for van fleet (€)", correctAnswer: 180, tolerance: 1 },
      { label: "T2 — Input VAT: Light and heat (€)", correctAnswer: 23, tolerance: 1 },
      { label: "T2 — Input VAT: Accountancy fees (€)", correctAnswer: 212, tolerance: 1 },
      { label: "T2 — Input VAT: Company car – Category A (€)", correctAnswer: 690, tolerance: 1 },
      { label: "Total VAT Payable (€)", correctAnswer: 49955, tolerance: 1 },
    ],
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
      C: "A benefit in kind of only 5% of the OMV of a car/van will be assessed on an employee in respect of a car or van that is in a 'pool' available for employees generally",
      D: "If the employee is provided with the van for part only of the particular tax year, then the cash equivalent is reduced on a pro rata basis",
    },
    correctAnswer: ["A", "D"],
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 1,
    questionText:
      "Gearoid, a sole trader, has decided to hire his first employee, Anita. Anita has accepted Gearoid's offer of employment, with an agreed annual salary of €72,000, and is due to start employment on 1 April 2025. Anita ceased with her former employer on 31 January 2025.\n\n" +
      "Details of her earnings up to the date of leaving were €9,600 (PAYE paid of €1,900). Anita's standard rate cut-off is €44,000 per annum and her yearly tax credit is €4,000.\n\n" +
      "Determine how Gearoid should register as an employer for PAYE purposes.",
    options: {
      A: "Register online using REG1/REG2",
      B: "Register online using TR1/TR2",
      C: "Register online using PAYE1/PAYE2",
      D: "Register online using EMP1/EMP2",
    },
    correctAnswer: "B",
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
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 1,
    questionText:
      "Using the same Anita scenario from Question 8 (annual salary €72,000, prior earnings €9,600, annual standard rate cut-off €44,000, yearly tax credit €4,000):\n\n" +
      "Calculate Anita's cumulative standard rate band for April (Month 4).",
    correctAnswer: 14668,
    tolerance: 1,
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 1,
    questionText:
      "Using the same Anita scenario from Question 8 (annual salary €72,000, prior earnings €9,600, annual standard rate cut-off €44,000, yearly tax credit €4,000):\n\n" +
      "Calculate Anita's cumulative tax credit for April (Month 4).",
    correctAnswer: 1332,
    tolerance: 1,
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "Using the same Anita scenario from Question 8 (annual salary €72,000, prior earnings €9,600, PAYE paid to date €1,900, annual standard rate cut-off €44,000, yearly tax credit €4,000):\n\n" +
      "Calculate the total income tax Anita has to pay in April.",
    correctAnswer: 75,
    tolerance: 1,
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 7,
    questionText:
      "Flower HQ Limited prepares its accounts to 31 October each year. The company is involved in the cultivation and distribution of flowers and plants to florists around Ireland.\n\n" +
      "Flower HQ Limited — Statement of Profit or Loss, year ended 31 October 2025\n\n" +
      "Gross profit:                           €368,890\n\n" +
      "Expenses:\n" +
      "  Bad debts (Note 1):                   €12,500\n" +
      "  Travel and entertainment (Note 2):    €8,320\n" +
      "  Salaries (Note 3):                    €69,950\n" +
      "  Finance charges (Note 4):             €6,030\n" +
      "  Repairs (Note 5):                     €1,086\n" +
      "  Legal fees (Note 6):                  €2,500\n" +
      "  Miscellaneous (Note 7):               €425\n" +
      "  Total expenses:                       (€100,811)\n\n" +
      "Profit before tax:                      €268,079\n\n" +
      "Notes:\n\n" +
      "1. Bad debts are charged based on an estimated 0.5% of sales for the year.\n\n" +
      "2. Travel and entertainment: Travel & subsistence €3,920 | Entertaining customers €1,670 | Staff Christmas party €950 | Travel – visits to suppliers €1,780.\n\n" +
      "3. Salaries includes a pension accrual of €5,000.\n\n" +
      "4. Finance charges: Lease payments for sales director's car €3,500 | Other interest charges €2,530. The car was first leased in July 2025, Category A, retail value €26,000.\n\n" +
      "5. Included in repairs is the purchase of a laptop costing €400 for one of the employees.\n\n" +
      "6. Legal fees: Legal advice for new supplier contract €1,570 | Legal advice re potential purchase of investment property €930.\n\n" +
      "7. Miscellaneous: Donation to local charity €110 | Sponsorship €235 | Sundries (all tax allowable) €80.\n\n" +
      "Complete the table to calculate FLOWER HQ's adjusted Case I profits for the year ended 31 October 2025.",
    parts: [
      { label: "Add back: Bad debts (€)", correctAnswer: 12500, tolerance: 0 },
      { label: "Add back: Travel and entertainment (€)", correctAnswer: 1670, tolerance: 0 },
      { label: "Add back: Salaries (€)", correctAnswer: 5000, tolerance: 0 },
      { label: "Add back: Finance charges (€)", correctAnswer: 269, tolerance: 1 },
      { label: "Add back: Repairs (€)", correctAnswer: 400, tolerance: 0 },
      { label: "Add back: Legal fees (€)", correctAnswer: 930, tolerance: 0 },
      { label: "Add back: Miscellaneous (€)", correctAnswer: 110, tolerance: 0 },
      { label: "Adjusted Case I Profits (€)", correctAnswer: 288958, tolerance: 0 },
    ],
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
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "Danys sold an antique dresser in 2025 that has been in his family for years. He inherited this antique dresser from his father on his death in 2010. The value of the antique dresser at the time of his father's death was €2,560. His father inherited the dresser from his grandmother on 1 June 1992 for €820.\n\n" +
      "Danys sold the antique dresser for €1,270 in 2025.\n\n" +
      "Calculate the allowable capital loss arising on the sale of the antique dresser that will be available for Danys to carry forward into 2026.",
    correctAnswer: 20,
    tolerance: 0,
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 5,
    questionText:
      "Moby Limited, an Irish resident company, began trading on 1 July 2023. The results of MOBY for the first accounting periods are as follows:\n\n" +
      "                          Year ended 30/06/24    Year ended 30/06/25    Period ended 31/12/25\n" +
      "Trading profit/(loss):    (€38,000)              €28,000                €12,000\n" +
      "Case V profit/(loss):     —                      (€15,000)              €30,000\n" +
      "Case V capital allowances:—                      (€5,000)               (€5,000)\n\n" +
      "Calculate the total taxable income subject to corporation tax for MOBY for the period ended 31 December 2025.",
    parts: [
      { label: "Case I Income (€)", correctAnswer: 12000, tolerance: 0 },
      { label: "Case I Loss Relief (€)", correctAnswer: 10000, tolerance: 0 },
      { label: "Net Case I Income (€)", correctAnswer: 2000, tolerance: 0 },
      { label: "Case V Income (€)", correctAnswer: 30000, tolerance: 0 },
      { label: "Case V Capital Allowances (€)", correctAnswer: 5000, tolerance: 0 },
      { label: "Case V Loss Relief (€)", correctAnswer: 20000, tolerance: 0 },
      { label: "Net Case V Income (€)", correctAnswer: 5000, tolerance: 0 },
      { label: "Total Taxable Income (€)", correctAnswer: 7000, tolerance: 0 },
    ],
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
      { label: "Taxable Profits for 2024 (€)", correctAnswer: 52000, tolerance: 0 },
      { label: "Taxable Profits for 2025 (€)", correctAnswer: 25000, tolerance: 0 },
    ],
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Gearoid and Assumpta separated in 2025. As part of a deed of separation, Gearoid transfers the following assets to Assumpta:\n\n" +
      "• Shares worth €43,300 (which he had purchased 9 years ago for €18,900).\n\n" +
      "• His interest in the family home worth €210,000 (cost €95,000 in 2011). Both Gearoid and Assumpta have lived in this house since it was purchased. They own no other properties.\n\n" +
      "Identify which of the following statements are correct regarding the transfer of assets and/or the subsequent sale of assets after the deed of separation.\n\nSelect ALL that apply.",
    options: {
      A: "Gearoid will not be liable for any CGT on either of the disposals to Assumpta in 2025",
      B: "Gearoid will be liable to CGT on the disposals to Assumpta in 2025",
      C: "If Assumpta subsequently sells any of the shares, she will be liable for any CGT which arises. The gain will be calculated as if she had purchased the shares herself, 9 years ago, at the original cost of €18,900",
      D: "If Assumpta subsequently sells the family home after the separation, she will have a CGT liability of €37,531",
    },
    correctAnswer: ["A", "C"],
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "If the corporation tax return (Form CT1) is filed late, there is a surcharge for late filing.\n\n" +
      "Identify which of the following statements are correct in relation to the surcharge for late filing.\n\nSelect ALL that apply.",
    options: {
      A: "If Form CT1 is filed within two months of the due filing date, the surcharge is 5% of the tax due for the period, subject to a maximum of €12,695",
      B: "If Form CT1 is filed within two months of the due filing date, the surcharge is 10% of the tax due for the period, subject to a maximum of €63,485",
      C: "If Form CT1 is filed two months after the due filing date, the surcharge is 5% of the tax due for the period, subject to a maximum of €63,485",
      D: "If Form CT1 is filed two months after the due filing date, the surcharge is 10% of the tax due for the period, subject to a maximum of €63,485",
    },
    correctAnswer: ["A", "D"],
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
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Bairbre (aged 42) is married to Kenneth (aged 42). Both are Irish resident and domiciled and are jointly assessed for income tax purposes. They have three young children between the ages of 2 and 7.\n\n" +
      "Bairbre is a self-employed tax adviser. Her Case II adjusted profits for the year ended 31 December 2025 are €53,000. During 2025, Bairbre made contributions to a Revenue approved pension scheme of €5,000. Kenneth works as an operations manager in the local hospital. In 2025, Kenneth earned €38,000 from which PAYE of €3,600 was deducted.\n\n" +
      "Bairbre owns a residential house in Limerick, rented since 1 January 2025 to students. Gross rents received in 2025 amount to €12,800.\n\n" +
      "Expenses for the rental property in 2025:\n" +
      "  Repairs to a dishwasher:          €320\n" +
      "  Residential Tenancies Board fee:  €40\n" +
      "  Legal fee – tenancy agreement:    €250\n" +
      "  Mortgage interest:                €3,920\n" +
      "  Insurance:                        €482\n" +
      "  New furniture and fittings:       €3,200\n\n" +
      "Calculate Bairbre's net Case V income subject to income tax for the tax year 2025.",
    options: {
      A: "€8,188",
      B: "€7,788",
      C: "€7,428",
      D: "€7,388",
    },
    correctAnswer: "D",
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi_numeric",
    marks: 10,
    questionText:
      "Using the same Bairbre and Kenneth information from Question 28, plus the following additional income:\n\n" +
      "  Deposit interest income – Kenneth (net of DIRT):   €92\n" +
      "  Irish Dividends – Bairbre (net):                   €4,800\n\n" +
      "Calculate Bairbre and Kenneth's liability to income tax (before PRSI and USC) for the year ended 31 December 2025.",
    parts: [
      { label: "Schedule D Case II (€)", correctAnswer: 53000, tolerance: 0 },
      { label: "Schedule D Case IV — deposit interest gross (€)", correctAnswer: 137, tolerance: 1 },
      { label: "Schedule D Case V (€)", correctAnswer: 7388, tolerance: 0 },
      { label: "Schedule E (€)", correctAnswer: 38000, tolerance: 0 },
      { label: "Schedule F — dividends gross (€)", correctAnswer: 6400, tolerance: 0 },
      { label: "Total Taxable Income (after pension deduction) (€)", correctAnswer: 99925, tolerance: 0 },
      { label: "Income Tax Payable (€)", correctAnswer: 9115, tolerance: 0 },
    ],
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
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Using the same Martin Mulrooney information from Question 35, plus the following enhancement expenditure:\n\n" +
      "• February 1994: kitchen extension — Martin paid €5,600 for third party labour and building materials, plus €3,900 on a new fitted kitchen and €1,000 on new kitchen appliances.\n\n" +
      "• July 2001: new conservatory added at a cost of €6,200.\n\n" +
      "Note: The relevant indexation factors are: 1974/75 = 7.528 | 1994/95 = 1.331 | 2001/02 = 1.087.\n\n" +
      "Calculate the total cost (including any enhancement expenditure and indexation) to be included in Martin's CGT computation.",
    options: {
      A: "€112,920",
      B: "€125,565",
      C: "€132,304",
      D: "€128,620",
    },
    correctAnswer: "C",
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Using the same Martin Mulrooney information from Questions 35 and 36:\n\n" +
      "Martin occupied the house as his principal private residence from 1 July 1970 until 1 April 2021, apart from the following periods of absence:\n\n" +
      "• 1 August 1975 to 31 July 1978: worked in Brussels for an associated company of his employer. While away, he let his house to a tenant.\n\n" +
      "• 1 May 1979 to 31 January 1986: sent by his employer to work in Mayo. During this period his house was unoccupied.\n\n" +
      "On 1 April 2021, Martin retired to live in Tralee and let out the house in Listowel.\n\n" +
      "The house was sold on 31 July 2025. Total ownership period (from 6 April 1974): 617 months.\n\n" +
      "Calculate the total number of months in which Martin occupied his house in Listowel for the purposes of claiming principal private residence (PPR) relief.",
    options: {
      A: "605 Months",
      B: "617 Months",
      C: "543 Months",
      D: "576 Months",
      E: "531 Months",
    },
    correctAnswer: "C",
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
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Eco Limited provided James with an electric bike worth €2,410 under the cycle-to-work scheme.\n\n" +
      "Calculate James' taxable BIK (if any) in respect of the electric bike provided by ECO.",
    options: {
      A: "The provision of an electric bike is fully exempt from tax for James",
      B: "€2,410",
      C: "€1,500",
      D: "€910",
    },
    correctAnswer: "D",
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Redup Limited incurred finance costs of €25,800 for the year ended 31 December 2025. This includes:\n\n" +
      "  Interest on working capital bank loan:    €9,000\n" +
      "  Bank interest and charges:                €2,200\n" +
      "  Finance lease interest on machinery:      €8,200\n" +
      "  Operating lease interest:                 €6,400\n" +
      "  Total:                                    €25,800\n\n" +
      "Calculate the finance cost that will be added back in the adjusted Case I computation for REDUP in 2025.",
    options: {
      A: "€25,800",
      B: "€8,200",
      C: "€17,600",
      D: "€14,600",
    },
    correctAnswer: "B",
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
  },
];
