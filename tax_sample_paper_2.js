const taxSamplePaper2 = [
  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Helen works as a marketing executive for a large multi-national company based in Meath. Her employment package for the tax year 2025 includes a basic salary of €31,000, with PAYE deducted at source amounting to €780.\n\nHelen received the following benefits in the tax year 2025:\n- The use of a company owned apartment. Helen is the sole occupant of the apartment which was recently valued at €140,000. An auctioneer has estimated the open market value of the rent per annum on the apartment to be €14,500.\n- A company car (Category C) with an original market value of €30,000. Her employer pays for all running expenses except for personal petrol expenses. Helen’s business travel for 2025 was 54,000 km and at least 60% of her time is spent away from the office. Helen is required to retain a record log of all her daily business travel.\n\nHelen is single and has one child, Tom who is aged five.\n\nRequirement\nCalculate Helen’s Net Income Tax Payable for the tax year 2025.",
    correctAnswer: 2900,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "multi",
    questionText: "Identify which of the following statements are correct in relation to income and gains taxable for Irish corporation tax purposes.\nSelect ALL that apply",
    options: {
      A: "Irish dividends, also known as franked investment income, are taxed at 25% for the purposes of Irish corporation tax",
      B: "Irish dividends, also known as franked investment income, are taxed at 12.5% for the purposes of Irish corporation tax",
      C: "Foreign dividends, also known as franked investment income, are exempt from corporation tax in Ireland",
      D: "Irish chargeable gains are taxed at 25% for the purposes of Irish corporation tax",
      E: "None of the above statements are correct"
    },
    correctAnswer: ["E"],
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "There are four basic elements that must apply before the provisions relating to the taxation of capital gains come into operation.\n\nRequirement\nIdentify the four basic elements that must apply before the provisions relating to the taxation of capital gains come into operation.\nSelect the correct answer",
    options: {
      A: "There must be a disposal of an asset by a company after 5 April 1974.",
      B: "There must be a disposal of an asset by a chargeable person after 5 April 1974.",
      C: "There must be a disposal of an asset by a chargeable person after 31 December 2023.",
      D: "There must be a sale of an asset by a company after 1 January 2002."
    },
    correctAnswer: "B",
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Hennessey Distributers Limited (“HENNESSEY”) is a hardware company. Activities for May/June 2025:\nSales:\n- VAT registered Irish customers: €310,000\n- Private Irish customers: €52,000\nPurchases (excl VAT unless stated):\n- Inventory: €140,000\n- Diesel for van fleet: €960 (incl VAT)\n- Staff party: €1,100\n- Light and heat: €278 (incl VAT)\n- Accountancy fees: €920\n- Company car (Cat A): €15,000\n- Salaries: €22,000\n- Stationery (no invoice): €1,367\nNotes: Car used 75% for business. Light/heat rate 9%.\n\nCalculate the Total VAT Payable/(Recoverable) for the period.",
    correctAnswer: 49955,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Identify the payment date for the VAT period May/June 2025.",
    options: {
      A: "23 June 2025",
      B: "23 July 2025",
      C: "23 August 2025",
      D: "31 December 2025"
    },
    correctAnswer: "B",
  },

  {
    section: "Sample Paper 2",
    type: "multi",
    questionText: "Identify which of the following statements are correct in relation to BIK on company vans.\nSelect ALL that apply",
    options: {
      A: "A van means a mechanically propelled road vehicle which is designed or constructed solely or mainly for the carriage of goods",
      B: "Where a van is made available to an employee for private use, the employee is taxable on the cash equivalent of 12.5% of its OMV",
      C: "A benefit in kind of only 5% of the OMV will be assessed on an employee in respect of a car or van in a ‘pool’",
      D: "If the employee is provided with the van for part only of the particular tax year, then the cash equivalent is reduced on a pro rata basis"
    },
    correctAnswer: ["A", "D"],
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Gearoid, a sole trader, hires Anita. Determine how Gearoid should register as an employer for PAYE purposes.",
    options: {
      A: "Register online using REG1/REG2",
      B: "Register online using TR1/TR2",
      C: "Register online using PAYE1/PAYE2",
      D: "Register online using EMP1/EMP2"
    },
    correctAnswer: "B",
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Anita starts employment on 1 April 2025. Annual salary: €72,000. Prior earnings (Jan): €9,600. \n\nCalculate Anita’s cumulative gross pay for April.",
    correctAnswer: 15600,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Anita's annual standard rate cut-off is €44,000. \n\nCalculate Anita’s cumulative standard rate band for April (Month 4).",
    correctAnswer: 14668,
    tolerance: 1,
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Anita's yearly tax credit is €4,000. \n\nCalculate Anita’s cumulative tax credit for April (Month 4).",
    correctAnswer: 1332,
    tolerance: 1,
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Based on Anita's details: Annual salary €72,000, Prior Earnings €9,600, Prior PAYE paid €1,900. \n\nCalculate the total income tax Anita has to pay in April.",
    correctAnswer: 75,
    tolerance: 1,
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Flower HQ Ltd P&L results for year ended 31 Oct 2025:\nProfit per accounts: €268,079\nExpenses:\n- Bad Debts: €12,500 (General provision 0.5% of sales)\n- Travel/Entertaining: €8,320 (incl. Customer Entertaining €1,670)\n- Salaries: €69,950 (incl. Pension accrual €5,000)\n- Finance Charges: €6,030 (incl. Car lease €3,500 for Cat A car, retail value €26,000)\n- Repairs: €1,086 (incl. Laptop purchase €400)\n- Legal Fees: €2,500 (incl. Advice re investment property €930)\n- Misc: €425 (incl. Local charity donation €110)\n\nCalculate the Adjusted Case I Profits.",
    correctAnswer: 288958,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Identify by which date FLOWER HQ has to file its corporation tax return (Form CT1) for the year ended 31 October 2025.",
    options: {
      A: "23 September 2025",
      B: "23 December 2025",
      C: "23 July 2026",
      D: "23 September 2026"
    },
    correctAnswer: "C",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Cheryl disposed of a Cat B car in Jan 2025 for €35,000. Used 80% for business. Cost €50,000 in 2023. TWDV on 1 Jan 2025 was €18,000. \n\nCalculate the balancing charge/allowance.",
    options: {
      A: "Balancing charge: €6,000",
      B: "Balancing allowance: €6,000",
      C: "Balancing charge: €1,200",
      D: "Balancing allowance: €1,200"
    },
    correctAnswer: "D",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Eamon's 2025 disposals:\n- March: Irish Gov securities sold for €22,800 (Cost €8,000).\n- June: Jewellery sold for €1,220 (Cost €800).\n- Oct: Gifted painting to sister (MV €3,000). Set cost €16,000 for 4 paintings (Total MV €12k).\n\nCalculate Eamon’s net chargeable gain for 2025.",
    options: {
      A: "€15,220",
      B: "€14,800",
      C: "€420",
      D: "No chargeable gains in 2025"
    },
    correctAnswer: "D",
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Newbee Limited trading profits for 2025: €140,000. PRSI for 4 employees: €2k, €4k, €6.2k, €7.5k. \n\nCalculate the amount of corporation tax NEWBEE has to pay in 2025 after relief for new company employees (max €5k per employee).",
    correctAnswer: 1500,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "multi",
    questionText: "Identify which of the following should be shown on a VAT invoice/credit note.\nSelect ALL that apply",
    options: {
      A: "Supplier’s VAT registration number.",
      B: "The tax residence status of the supplier",
      C: "Name and address of the customer.",
      D: "Date of issue of the invoice.",
      E: "Date of supply of the goods or services.",
      F: "The amount charged exclusive of VAT (in €)."
    },
    correctAnswer: ["A", "C", "D", "E", "F"],
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Siobhan (59) is a widow. Husband died July 2023. Total tax liability €9,826. She has one child Lola, 16, incapacitated since birth. \n\nCalculate the total tax credits available to Siobhan in 2025.",
    options: {
      A: "€12,026",
      B: "€14,350",
      C: "€12,150",
      D: "€9,826"
    },
    correctAnswer: "A",
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Danys sold an antique dresser in 2025 for €1,270. He inherited it in 2010 when value was €2,560. \n\nCalculate the allowable capital loss available to carry forward to 2026.",
    correctAnswer: 20,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Moby Limited 2025 results (Year end Dec 25 combines 6m to June and 6m to Dec):\nTrading profit: €14,000 (part of 12m) + €12,000 = €26,000 approx. Previous Case I Loss: €38,000.\nCase V: €30,000 (period ended Dec). Case V Cap Allowances: €5,000.\nPrevious Case V Loss: €15,000.\n\nCalculate the total taxable income for MOBY for 2025.",
    correctAnswer: 7000,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "multi",
    questionText: "Identify, regarding the calculation of capital gains tax (CGT), when market value applies as opposed to consideration given.\nSelect ALL that apply",
    options: {
      A: "Transaction between connected persons",
      B: "Transaction not at arm’s length",
      C: "Transaction where consideration is not valued in money terms or that is a barter transaction",
      D: "Transaction where consideration cannot be valued",
      E: "The acquisition of an asset in a winding up situation"
    },
    correctAnswer: ["A", "B", "C", "D", "E"],
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Dermot retired on 31 May 2025. Results:\nYear ended 31/08/24: €48,000\n9 months to 31/05/25: €45,000\n\nCalculate Dermot’s taxable profits for 2024.",
    correctAnswer: 52000,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "multi",
    questionText: "Gearoid and Assumpta separate in 2025. Gearoid transfers shares (cost €18,900, MV €43,300) and his interest in family home (cost €95,000, MV €210,000). \nIdentify correct statements.\nSelect ALL that apply",
    options: {
      A: "Gearoid will not be liable for any CGT on either of the disposals to Assumpta in 2025",
      B: "Gearoid will be liable to CGT on the disposals to Assumpta in 2025.",
      C: "If Assumpta subsequently sells any of the shares, she will be liable for any CGT using the original cost of €18,900",
      D: "If Assumpta subsequently sells the family home after the separation, she will have a CGT liability of €37,531"
    },
    correctAnswer: ["A", "C"],
  },

  {
    section: "Sample Paper 2",
    type: "multi",
    questionText: "Identify correct statements in relation to the surcharge for late filing of Form CT1.\nSelect ALL that apply",
    options: {
      A: "If filed within two months of the due date, the surcharge is 5% of the tax due, max €12,695",
      B: "If filed within two months of the due date, the surcharge is 10% of the tax due, max €63,485",
      C: "If filed two months after the due date, the surcharge is 5% of the tax due, max €63,485",
      D: "If filed two months after the due date, the surcharge is 10% of the tax due, max €63,485"
    },
    correctAnswer: ["A", "D"],
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "In the case of a conditional contract, the general rule is that the date of the disposal for CGT is the date on which the condition is satisfied.",
    options: { A: "True", B: "False" },
    correctAnswer: "A",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "In the case of gifts, the date of disposal is the date on which the property effectively passes.",
    options: { A: "True", B: "False" },
    correctAnswer: "A",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "In the case of compulsory purchase orders (CPO), the date of disposal is the date the CPO is initiated.",
    options: { A: "True", B: "False" },
    correctAnswer: "B",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Bairbre rental house (Limerick): Gross rent €12,800. Expenses: Dishwasher repair €320, RTB fee €40, Legal fee €250, Mortgage interest €3,920, Insurance €482. Capital Allowances on furniture (€3,200 @ 12.5%): €400.\n\nCalculate Bairbre’s net case V income for 2025.",
    options: { A: "€8,188", B: "€7,788", C: "€7,428", D: "€7,388" },
    correctAnswer: "D",
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Bairbre (Case II €53,000, Case V €7,388, pension €5,000) and Kenneth (Salary €38,000, DIRT net €92). \n\nCalculate Bairbre and Kenneth’s total income tax payable for 2025.",
    correctAnswer: 9115,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Identify the due date for Bairbre and Kenneth to file their income tax return for the tax year 2025.",
    options: {
      A: "31 October 2025",
      B: "31 December 2025",
      C: "23 September 2026",
      D: "31 October 2026"
    },
    correctAnswer: "D",
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Miles purchased property in Athy for €388,000. Council adjustment factor is +10%. \n\nCalculate the LPT payable by Miles for 2026.",
    correctAnswer: 446,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Identify the correct statement regarding LPT penalties/interest.",
    options: {
      A: "Where a person does not file, penalty is LPT due, max €2,000",
      B: "Where a person knowingly undervalues property, penalty is the correct LPT, max €2,000",
      C: "The rate of interest on late payments is 0.0274% per day",
      D: "If self-assessed person fails to pay, Revenue will not issue tax clearance cert"
    },
    correctAnswer: "D",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Identify the correct statement in relation to terminal loss relief.",
    options: {
      A: "Losses in final 12 months offset against same trade for all preceding periods",
      B: "Losses in final 12 months offset against same trade for 24 months preceding final period",
      C: "Losses in final 12 months offset against same trade for 36 months preceding final period",
      D: "Losses in final 36 months offset against same trade for 12 months preceding final period"
    },
    correctAnswer: "C",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Erick installs a false ceiling with decorative lighting in his office. Identify the correct statement regarding its tax treatment.",
    options: {
      A: "Qualifies for capital allowances at 12.5%",
      B: "Qualifies for capital allowances at 4%",
      C: "Qualifies for accelerated capital allowances at 100%",
      D: "Will not qualify for capital allowances as it is not functional to the actual business"
    },
    correctAnswer: "D",
  },

  {
    section: "Sample Paper 2",
    type: "numeric",
    questionText: "Martin's house sale: Sold 31 July 2025 for €720,000. Legal fees €1,310, Auctioneer €3,200. skip hire €320, cleaning €540. \n\nCalculate the net sales proceeds for CGT.",
    correctAnswer: 715490,
    tolerance: 0,
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Martin purchased house in 1970 for €6,000 (MV 1974 €15,000). Enhancement: Feb 1994 extension €5,600 (materials) + €3,900 (kitchen). July 2001 conservatory €6,200. \n\nCalculate the total cost (incl indexation) for CGT.",
    options: { A: "€112,920", B: "€125,565", C: "€132,304", D: "€128,620" },
    correctAnswer: "C",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Martin's ownership (1974-2025): 617 months. Lived there full time except 1975-78 (Brussels job, let out), 1979-86 (Mayo job, unoccupied), and retired April 2021 onwards. \n\nCalculate total months for PPR relief (incl last 12 months).",
    options: { A: "605 Months", B: "617 Months", C: "543 Months", D: "576 Months", E: "531 Months" },
    correctAnswer: "C",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Sean Fitzmaurice: Trading profit €46,000, capital allowances €5,000, net credit union interest €200, pension €3,000. \n\nCalculate the PRSI payable in 2025 (rate 4.125%).",
    options: { A: "€1,662", B: "€1,691", C: "€1,704", D: "€1,910" },
    correctAnswer: "C",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "James provided with electric bike worth €2,410 under cycle-to-work scheme. Calculate James' taxable BIK.",
    options: {
      A: "Fully exempt",
      B: "€2,410",
      C: "€1,500",
      D: "€910"
    },
    correctAnswer: "D",
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Redup Ltd Finance costs: Bank loan interest €9,000, charges €2,200, Finance lease interest €8,200, Operating lease €6,400. \n\nIdentify the amount added back in Adjusted Case I.",
    options: { A: "€25,800", B: "€8,200", C: "€17,600", D: "€14,600" },
    correctAnswer: "B",
  },

  {
    section: "Sample Paper 2",
    type: "multi",
    questionText: "Identify which statement is correct regarding the Employee Tax Credit.\nSelect ALL that apply",
    options: {
      A: "Can claim full €2,000 regardless of income level",
      B: "Claimable for employment held outside State if similar tax system applies",
      C: "Claimable by proprietary director in receipt of Sch E income",
      D: "Can claim full employee credit and full earned income credit in a tax year"
    },
    correctAnswer: ["B"],
  },

  {
    section: "Sample Paper 2",
    type: "single",
    questionText: "Identify which of the following is NOT regarded as a relevant payment for 20% income tax deduction.",
    options: { A: "Bank interest", B: "Patent royalties", C: "Covenants", D: "Rent paid to non-residents" },
    correctAnswer: "A",
  }
];
