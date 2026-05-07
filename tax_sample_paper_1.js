const taxSamplePaper1 = [

  // --- Q1 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 1,
    questionText:
      "The Badges of Trade are indicators, derived from case law, of whether a person is trading.\n\n" +
      "Identify which of the following are badges of trade.\n\nSelect ALL that apply.",
    options: {
      A: "Subject matter of transaction",
      B: "Level of income earned",
      C: "Length of period of ownership",
      D: "Frequency of transactions",
      E: "Purchase of equipment",
      F: "Circumstances giving rise to the realisation of the property",
    },
    correctAnswer: ["A", "C", "D", "F"],
  },

  // --- Q2 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi_numeric",
    marks: 4,
    questionText:
      "Compu C Limited (COMPU C) is a trading company which sells electronic devices (liable to VAT at the standard rate). Sales and purchases for the VAT period September/October 2025 for COMPU C are detailed below. All figures are exclusive of VAT:\n\n" +
      "Sales:\n" +
      "  Sale of electronic devices to customer not VAT registered:    €10,000\n" +
      "  Sale of electronic devices to VAT registered corporate clients: €70,000\n" +
      "  Total:                                                         €80,000\n\n" +
      "Purchases:\n" +
      "  Electronic devices for re-sale from Irish supplier:            €15,000\n" +
      "  Salaries:                                                      €11,000\n" +
      "  Heating for premises:                                          €2,000\n" +
      "  Advertising for 12 months from 1 October 2025:                €7,000\n" +
      "  Total:                                                         €35,000\n\n" +
      "Calculate the total VAT payable/refundable for COMPU C for September/October 2025.",
    parts: [
      { label: "Total Output VAT (€)", answer: 18400, tolerance: 0 },
      { label: "Input VAT: Electronic devices for re-sale from Irish supplier (€)", answer: 3450, tolerance: 0 },
      { label: "Input VAT: Heating for premises (€)", answer: 180, tolerance: 0 },
      { label: "Input VAT: Advertising for 12 months from 1 October 2025 (€)", answer: 1610, tolerance: 0 },
      { label: "VAT Payable (€)", answer: 13160, tolerance: 0 },
    ],
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 1,
    questionText:
      "Aoibhe is 28 years old and has worked for her employer for many years. Her annual gross salary for 2025 is €45,000. Aoibhe is taxed on the cumulative basis. Aoibhe's RPN year to date to 28 February 2025 is as follows:\n\n" +
      "Gross salary to date:     €7,500\n" +
      "Income tax deducted:      €867\n" +
      "Monthly tax credit:       €333\n" +
      "Monthly SRCOP:            €3,667\n" +
      "Month number:             2\n\n" +
      "Calculate Aoibhe's gross cumulative salary to 31 March 2025.",
    correctAnswer: 11250,
    tolerance: 0,
  },

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 1,
    questionText:
      "Aoibhe is 28 years old and has worked for her employer for many years. Her annual gross salary for 2025 is €45,000. Aoibhe is taxed on the cumulative basis. Aoibhe's RPN year to date to 28 February 2025 is as follows:\n\n" +
      "Gross salary to date:     €7,500\n" +
      "Income tax deducted:      €867\n" +
      "Monthly tax credit:       €333\n" +
      "Monthly SRCOP:            €3,667\n" +
      "Month number:             2\n\n" +
      "Calculate Aoibhe's cumulative standard rate cut-off to 31 March 2025 (Month 3).",
    correctAnswer: 11001,
    tolerance: 0,
  },

  // --- Q5 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Aoibhe is 28 years old and has worked for her employer for many years. Her annual gross salary for 2025 is €45,000. Aoibhe is taxed on the cumulative basis. Aoibhe's RPN year to date to 28 February 2025 is as follows:\n\n" +
      "Gross salary to date:     €7,500\n" +
      "Income tax deducted:      €867\n" +
      "Monthly tax credit:       €333\n" +
      "Monthly SRCOP:            €3,667\n" +
      "Month number:             2\n\n" +
      "Calculate the PAYE to be deducted from Aoibhe's salary in March 2025.",
    correctAnswer: 434,
    tolerance: 1,
  },

  // --- Q6 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "The results for Diffuse Limited for the year ended 31 December 2025 are as follows:\n\n" +
      "  Case I income:              €2,800\n" +
      "  Chargeable gain (not adjusted for CT): €200\n" +
      "  Charges: Trade:             (€3,500)\n\n" +
      "Calculate the Case I loss that can be carried forward to 2026 (assuming all available reliefs are claimed in 2025).",
    correctAnswer: 172,
    tolerance: 0,
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Fionn sold an antique dresser for €2,750 on 30 June 2025. Fionn had originally purchased the dresser in September 1997 for €780.\n\n" +
      "Calculate the capital gains tax (CGT) payable in 2025, by Fionn (ignore the annual exemption).",
    options: {
      A: "€171",
      B: "€591",
      C: "€105",
      D: "€210",
    },
    correctAnswer: "C",
  },

  // --- Q8 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 1,
    questionText:
      "Section 486C TCA 1997 provides relief from corporation tax for new companies commencing to trade in the period 1 January 2009 to 31 December 2026.\n\n" +
      "Identify which of the following trades will NOT qualify for relief for corporation tax under S486C TCA 1997.\n\nSelect ALL that apply.",
    options: {
      A: "A trade that was previously carried on by another person",
      B: "A trade that is an excepted trade",
      C: "A trade that commenced in 2019 that carries out accountancy services",
      D: "A manufacturing trade that commenced in 2020",
    },
    correctAnswer: ["A", "B", "C"],
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi_numeric",
    marks: 8,
    questionText:
      "Peter works as a full-time landlord looking after several properties. Details of his rental properties are as follows:\n\n" +
      "Commercial unit 1 — Rental income: €39,000\n" +
      "On 30 June 2025, the old tenant moved out and from 1 August 2025 a new tenant occupied the unit. Prior to the new tenant moving in, Peter repainted and decorated the unit at a cost of €7,000. The new tenant agreed to pay 25% of the cost of the painting and decorating. In addition, on 1 July 2025, Peter had to pay €2,200 to the waste supplier for an unpaid bill left by the old tenant.\n\n" +
      "Commercial unit 2 — Rental income: €33,300 (includes upfront premium of €22,500)\n" +
      "On 1 March 2025, Peter purchased commercial unit 2 for €690,000, part financed by means of a bank loan. The bank loan interest for the period 1 March 2025 to 31 December 2025 was €8,200. The bank interest accrued evenly over the period. Peter first let the unit on 1 November 2025 on a 13-year lease for €5,400 per month and an upfront premium of €22,500. In addition, on 1 March 2025, Peter paid insurance on the unit of €3,600 for 12 months.\n\n" +
      "Two residential apartments — Rental income: €45,000\n" +
      "Expenses incurred:\n" +
      "  Local property tax:          €585\n" +
      "  Letting agents fees:         €2,500\n" +
      "  Upgrading of windows:        €17,500\n" +
      "  Grant received for windows:  (€7,000)\n\n" +
      "Calculate the total net Case V income for Peter for 2025.",
    parts: [
      { label: "Commercial unit 1 — Net rental income (€)", answer: 31550, tolerance: 0 },
      { label: "Commercial unit 2 — Monthly rental income (€)", answer: 10800, tolerance: 0 },
      { label: "Commercial unit 2 — Premium income (€)", answer: 17100, tolerance: 0 },
      { label: "Commercial unit 2 — Net rental income (€)", answer: 25660, tolerance: 0 },
      { label: "Two residential apartments — Net rental income (€)", answer: 42500, tolerance: 0 },
      { label: "Total Net Case V Income (€)", answer: 99710, tolerance: 0 },
    ],
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Declan died on 30 June 2025. During 2025, prior to his death, Declan had the following capital transactions:\n\n" +
      "• Declan sold shares on 1 May 2025 for €350,000. Declan had inherited the shares from his late sister, Anna, on 1 April 1999, when the shares had a value of €500,000. Declan realised a capital loss of €150,000 on the sale of the shares.\n\n" +
      "• On 1 June 2025, Declan sold the remaining part of a building unit that he owned for €240,000. He realised a chargeable gain of €37,000 on the sale of the building.\n\n" +
      "• Declan incurred chargeable gains in 2024 and 2023 amounting to €33,000 and €175,000 respectively.\n\n" +
      "Determine Declan's CGT liability (ignoring the annual exemption) in 2025, 2024 and 2023.",
    options: {
      A: "2025 NIL, 2024 NIL, 2023 NIL",
      B: "2025 NIL, 2024 €10,890, 2023 €57,750",
      C: "2025 NIL, 2024 NIL, 2023 €57,750",
      D: "2025 NIL, 2024 NIL, 2023 €31,350",
    },
    correctAnswer: "D",
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Sinead Buckley bought 15 acres of land on 5 August 1972 at €300 per acre. The market value of the land on 6 April 1974 was €600 per acre. The land has no development value.\n\n" +
      "On 7 July 2025, Sinead sold four acres of the land as sites to several locals who wished to build residential properties on the sites. Sinead received €25,250 for each of the four sites while the market value of the remaining 11 acres at the date of sale were valued at €202,000 in total.\n\n" +
      "Sinead made no other disposals in 2025.\n\n" +
      "Calculate Sinead's total allowable cost (including indexation, if appropriate) in her CGT computation on the sale of land in 2025.\n\n" +
      "Note: The indexation factor for 1974/75 is 7.528.",
    correctAnswer: 22584,
    tolerance: 0,
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi_numeric",
    marks: 9,
    questionText:
      "Sean is married to Denise. Both are Irish resident and domiciled and are jointly assessed for tax purposes. The couple have 2 children, aged 4 and 6. Denise is in receipt of €12,000 in net rental income from a residential property in Clare in 2025. The property is rented out to a third party. Denise has registered the property with the RTB and holds a valid tax clearance cert.\n\n" +
      "Sean is employed by Design X Limited (DESIGNX), an IT company. During 2025, Sean earned a salary of €98,000 from which PAYE of €24,600 was deducted. In addition to his salary, Sean received the following:\n\n" +
      "i) A loan of €295,000 made by DESIGNX on 17 August 2016. The balance outstanding on 1 January 2025 was €65,000 and no repayments were made during 2025. This loan was used by Sean for the purchase of the couple's principal private residence in Kerry. The interest on this loan was at a fixed rate of 2.5% per annum.\n\n" +
      "ii) A loan of €50,000 made by DESIGNX on 1 July 2025. This loan was used by Sean and Denise to carry out an extension on their holiday home in Clare. The interest on this loan was at a fixed rate of 5.5% per annum.\n\n" +
      "iii) Sean secured a loan of €4,300 from DESIGNX on 1 September 2025 to join the local golf club. There was no interest charged on this loan.\n\n" +
      "iv) Sean was provided with a company car on 1 January 2025. The car is Category B with an OMV of €48,000. Sean's total business kilometres to 31 December 2025 were 26,300. The company pays all costs associated with the car, but Sean contributes €65 per month to DESIGNX for the car.\n\n" +
      "Note: Specified rates 2025 — qualifying home loans: 4% | all other loans: 13.5%.\n\n" +
      "Calculate the balance of income tax payable/(repayable) by Sean and Denise for 2025.",
    parts: [
      { label: "BIK — Loan for house in Kerry (€)", answer: 975, tolerance: 0 },
      { label: "BIK — Loan for holiday home in Clare (€)", answer: 2000, tolerance: 0 },
      { label: "BIK — Loan for golf membership (€)", answer: 194, tolerance: 1 },
      { label: "BIK — Car (net of employee contribution) (€)", answer: 7200, tolerance: 0 },
      { label: "Income Tax Payable/(Repayable) (€)", answer: 4547, tolerance: 0 },
    ],
  },

  // --- Q13 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Derek is in the business of bathroom renovations. Derek is registered for VAT in Ireland. He has quoted a customer €6,000 (exclusive of VAT) to renovate their ensuite bathroom.\n\n" +
      "This amount is made up as follows:\n" +
      "  Materials at 23% (VAT exclusive):    €3,500\n" +
      "  Labour, overheads and profit:        €2,500\n" +
      "  Total:                               €6,000\n\n" +
      "Calculate the VAT Derek should charge for the renovation of the bathroom.",
    correctAnswer: 810,
    tolerance: 0,
  },

  // --- Q14 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi_numeric",
    marks: 6,
    questionText:
      "You have been provided with the Statement of Profit and Loss for Jules Limited (JULES) for the year ended 31 December 2025. JULES is a company operating in the retail sector.\n\n" +
      "Gross profit:                €702,000\n\n" +
      "Expenses:\n" +
      "  Administration wages and salaries (Note 1):   €243,000\n" +
      "  Directors' emoluments:                        €157,000\n" +
      "  Pension contributions (Note 2):               €49,850\n" +
      "  Premises expenses (Note 3):                   €17,000\n" +
      "  Travel and subsistence:                       €51,000\n" +
      "  Repairs (Note 4):                             €35,000\n" +
      "  Professional fees (Note 5):                   €23,157\n" +
      "  General expenses (Note 6):                    €17,000\n" +
      "  Depreciation:                                 €18,000\n" +
      "  Total expenses:                               (€611,007)\n\n" +
      "Profit before tax:           €90,993\n\n" +
      "Notes:\n\n" +
      "1. Included in administration wages and salaries: Leaving lunch for 3 colleagues €800 | Christmas party with staff and clients €4,500.\n\n" +
      "2. Pension contributions: Payments made during the year €39,850 | Accrued at 31 December 2025 €10,000.\n\n" +
      "3. Premises expenses include €5,000 for architects' fees for advice on the proposed extension of an existing premises.\n\n" +
      "4. JULES has made a provision of €15,000 in repairs for a warehouse heating upgrade. Work has not yet commenced and no formal quotes have been received.\n\n" +
      "5. Professional fees include a €12,500 legal fee regarding a product liability claim and €1,000 in fines for breach of data protection laws.\n\n" +
      "6. General expenses include: Interest on late payment of PAYE €650 | Subscriptions to trade magazines €1,000 | Staff training €1,300 | Donation to eligible charity €500.\n\n" +
      "Calculate the Adjusted Case I Profits for JULES for the year ended 31 December 2025.",
    parts: [
      { label: "Add back: Administration wages and salaries (€)", answer: 4500, tolerance: 0 },
      { label: "Add back: Pension contributions (€)", answer: 10000, tolerance: 0 },
      { label: "Add back: Premises expenses (€)", answer: 5000, tolerance: 0 },
      { label: "Add back: Repairs (€)", answer: 15000, tolerance: 0 },
      { label: "Add back: Professional fees (€)", answer: 13500, tolerance: 0 },
      { label: "Add back: General expenses (€)", answer: 650, tolerance: 0 },
      { label: "Add back: Depreciation (€)", answer: 18000, tolerance: 0 },
      { label: "Adjusted Case I Profits (€)", answer: 157643, tolerance: 0 },
    ],
  },

  // --- Q15 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Taxable persons are obliged to register for VAT if the VAT thresholds are exceeded or are likely to be exceeded in a 12-month period.\n\n" +
      "Identify which of the following statements are correct with respect to VAT thresholds.\n\nSelect ALL that apply.",
    options: {
      A: "The VAT threshold for persons supplying a service is €40,000",
      B: "The VAT threshold for persons supplying goods, including persons supplying both goods and services, where 90% or more of sales is derived from supplies of goods is €85,000",
      C: "The VAT threshold for persons supplying goods liable at the 13.5% or 23% rates which they have manufactured or produced from zero-rated materials is €42,500",
      D: "The VAT threshold for persons making mail order or distance sales into the State is €12,000",
    },
    correctAnswer: ["B", "C"],
  },

  // --- Q16 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "You have been provided with the following statements in relation to partnerships.\n\n" +
      "i) For the purposes of tax assessment, each partner's share of the total profits is treated as personal to that partner, as if they arose from a separate trade or profession.\n\n" +
      "ii) The correct order of the steps for calculating the tax due on partners' partnership profits are: Calculate the tax adjusted trading profit/loss of the partnership for the accounting period, divide profits/losses between partners according to their profit-sharing ratio, allocate salaries and interest on capital to partners, and then include allocated partnership profits on the individual partner's self-assessment tax return on a tax year basis.\n\n" +
      "iii) The correct order of the steps for calculating the tax due on partners' partnership profits are: Calculate the tax adjusted trading profit/loss of the partnership for the accounting period, allocate salaries and interest on capital to partners, divide profits/losses between partners according to their profit-sharing ratio and then include allocated partnership profits on the individual partner's self-assessment tax return on a tax year basis.\n\n" +
      "iv) For taxation purposes a partnership continues no matter how many partners are admitted or leave, provided there are always at least three partners, one of whom was a partner immediately prior to the admission of a new partner.\n\n" +
      "Identify which of the statements is correct.",
    options: {
      A: "i only",
      B: "i, ii & iv",
      C: "i, iii & iv",
      D: "i & iii",
    },
    correctAnswer: "D",
  },

  // --- Q17 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi_numeric",
    marks: 6,
    questionText:
      "Blast Limited (BLAST) prepares its financial statements to 30 April each year. During the year ending 30 April 2025, BLAST had the following tax adjusted results:\n\n" +
      "  Trading income:                    €150,000\n" +
      "  Foreign interest income:           €20,000\n" +
      "  Gross deposit interest (Irish):    €3,000\n" +
      "  Irish rental income:               €24,000\n" +
      "  Chargeable gain (not adjusted for CT): €120,000\n\n" +
      "Calculate the corporation tax payable by BLAST for the year ended 30 April 2025.",
    parts: [
      { label: "Case I (€)", answer: 150000, tolerance: 0 },
      { label: "Case III — Foreign interest (€)", answer: 23000, tolerance: 0 },
      { label: "Case V (€)", answer: 24000, tolerance: 0 },
      { label: "Chargeable gain (adjusted for CT) (€)", answer: 316800, tolerance: 0 },
      { label: "CT at 12.5% (€)", answer: 58350, tolerance: 0 },
      { label: "CT at 25% (€)", answer: 11750, tolerance: 0 },
      { label: "Total Corporation Tax Liability (€)", answer: 70100, tolerance: 0 },
    ],
  },

  // --- Q18 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements are correct in relation to Local Property Tax (LPT).\n\nSelect ALL that apply.",
    options: {
      A: "Properties liable to LPT include sheds, outhouses and garages ancillary to the main residence",
      B: "A property that is not occupied, but is suitable for use as a dwelling, is still a liable property for LPT",
      C: "A liable person is required to pay LPT, based on the value of the property as of the valuation date at a rate of 1.5% per annum on the portion of the property value up to €1,050,000",
      D: "The liability date for 2025 is 15 December 2024",
    },
    correctAnswer: ["A", "B"],
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Disc Goods Limited (DISC) is an Irish resident company, engaged in the wholesale distribution of electrical goods to retailers throughout Ireland. It prepares financial statements to 31 December annually.\n\n" +
      "The results of DISC for the years ended 31 December 2024 and 2025 are as follows:\n\n" +
      "                  2024         2025\n" +
      "Case I:           (€52,000)    €85,000\n" +
      "Case III:         —            €2,000\n" +
      "Case V:           (€5,000)     (€9,000)\n\n" +
      "Calculate the minimum amount of corporation tax payable by DISC for the year ended 31 December 2025.",
    options: {
      A: "€4,625",
      B: "€4,375",
      C: "€11,125",
      D: "€3,250",
    },
    correctAnswer: "A",
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Where a company incurs a trading loss, it may obtain relief from corporation tax.\n\n" +
      "Identify which of the following statements are correct in relation to trading losses.\n\nSelect ALL that apply.",
    options: {
      A: "A section 396A claim must be made before a claim under section 396B",
      B: "The claim for loss relief under section 396A and section 396B must be made within one year of the end of the accounting period in which the loss occurs",
      C: "There is no time limit for claiming section 396(1) loss relief as the loss can be carried forward indefinitely",
      D: "If the accounting period in which the loss is incurred is shorter than the accounting period to which the loss is to be offset, then only a proportion of the relevant trading income will be available for offset (in the case where the loss is carried back)",
    },
    correctAnswer: ["A", "C", "D"],
  },

  // --- Q21 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Florence is a self-employed optometrist and has historically prepared accounts to 30 April each year. She has decided to change her accounting date to 31 December in line with the tax year. Florence prepared accounts for the eight months to 31 December 2025 to effect the change. Florence's Case II, tax adjusted profits for the relevant periods of account were as follows:\n\n" +
      "  12 months to 30 April 2024:     €139,000\n" +
      "  12 months to 30 April 2025:     €147,000\n" +
      "  8 months to 31 December 2025:   €105,000\n\n" +
      "Calculate Florence's assessable Case II income for the tax year 2025.",
    correctAnswer: 154000,
    tolerance: 0,
  },

  // --- Q22 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Florence is a self-employed optometrist and has historically prepared accounts to 30 April each year. She has decided to change her accounting date to 31 December in line with the tax year. Florence prepared accounts for the eight months to 31 December 2025 to effect the change. Florence's Case II, tax adjusted profits for the relevant periods of account were as follows:\n\n" +
      "  12 months to 30 April 2024:     €139,000\n" +
      "  12 months to 30 April 2025:     €147,000\n" +
      "  8 months to 31 December 2025:   €105,000\n\n" +
      "Identify which of the following statements are correct in relation to Florence's assessable income in 2024.",
    options: {
      A: "Florence has no additional assessable income in 2024 due to the change in accounting dates in 2025",
      B: "Florence has additional assessable income in 2024 of €5,333 due to the change in accounting dates in 2025",
      C: "Florence has additional assessable income in 2024 of €144,333 due to the change in accounting dates in 2025",
      D: "Florence has additional assessable income in 2024 of €98,000 due to the change in accounting dates in 2025",
    },
    correctAnswer: "B",
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 1,
    questionText:
      "Florence is a self-employed optometrist and has historically prepared accounts to 30 April each year. She has decided to change her accounting date to 31 December in line with the tax year. Florence prepared accounts for the eight months to 31 December 2025 to effect the change.\n\n" +
      "Identify, assuming she files a paper return, the due date for Florence's 2025 income tax return.",
    options: {
      A: "31 October 2025",
      B: "31 December 2025",
      C: "23 September 2026",
      D: "31 October 2026",
    },
    correctAnswer: "D",
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements are correct with regard to the Universal Social Charge (USC).\n\nSelect ALL that apply.",
    options: {
      A: "An individual's income is exempt from USC where it does not exceed €13,610",
      B: "Income subject to DIRT is exempt from USC",
      C: "All Department of Social Protection payments, including social welfare payments received from abroad are exempt for USC",
      D: "USC is calculated after considering relief for pension contributions",
    },
    correctAnswer: ["B", "C"],
  },

  // --- Q25 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 1,
    questionText:
      "Orla, a principal contractor, pays a subcontractor €10,200 on 19 July 2025. Orla correctly deducted RCT (Relevant Contracts Tax) of €2,550 on the payment to the subcontractor.\n\n" +
      "Determine when Orla is required to pay the RCT to Revenue.",
    options: {
      A: "19 July 2025",
      B: "23 July 2025",
      C: "19 August 2025",
      D: "23 August 2025",
    },
    correctAnswer: "D",
  },

  // --- Q26 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "A CGT exemption exists, under section 603A TCA 1997, where a parent disposes of a site to their child.\n\n" +
      "Identify which of the following statements are correct in relation to the CGT exemption on the disposal of a site to a child.\n\nSelect ALL that apply.",
    options: {
      A: "A disposal of a site by a parent to child is exempt from CGT provided the market value of the site at the date of the disposal does not exceed €600,000. This is in addition to other conditions that must also be satisfied.",
      B: "To qualify for the exemption, the site area is limited to two acres (excluding the area of the house to be built).",
      C: "Where the child subsequently disposes of a site that qualified for exemption, then the chargeable gain will accrue to the parent that originally transferred the site to the child.",
      D: "None of the above are correct.",
    },
    correctAnswer: ["D"],
  },

  // --- Q27 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements are correct in relation to capital allowances.\n\nSelect ALL that apply.",
    options: {
      A: "The qualifying asset must be owned by the taxpayer at the year end to claim capital allowances",
      B: "The capital allowance is calculated on the cost price of the plant plus any grants received",
      C: "In the year of acquisition, a full year's wear and tear allowance is granted, provided the basis period is at least 12 months long",
      D: "The tax written down value (TWDV) of an asset is the cost price (as allowable for tax purposes) less any capital allowance already claimed in previous years",
    },
    correctAnswer: ["A", "C", "D"],
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Gemma owns and runs a packaging and distribution business in Mallow, Co Cork. Gemma uses the premises in Mallow to package flat pack furniture. Gemma has decided to expand and add an extension to the packaging area in August 2025 so that additional machinery could be installed. The costs associated with the extension, all of which have been capitalised in her accounts, are set out below:\n\n" +
      "  Preparation of site for construction:    €12,000\n" +
      "  Building structure:                      €75,000\n" +
      "  Electrical systems:                      €10,000\n" +
      "  Bagging machine:                         €3,000\n" +
      "  Vacuum sealer machine:                   €2,000\n" +
      "  Fixtures & fittings:                     €9,500\n\n" +
      "Calculate the total allowable cost for capital allowances for Gemma for 2025.",
    correctAnswer: 14500,
    tolerance: 0,
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Tax avoidance is:\n\nSelect the correct answer.",
    options: {
      A: "Used by taxpayers to reduce their tax bill by making use of provisions within domestic tax legislation",
      B: "The use of loopholes within tax legislation to reduce the taxpayer's tax liability",
      C: "Breaking the law deliberately and not paying any of the taxes that fall due",
      D: "Underpaying the taxes that fall due when the law clearly states that they must be paid",
    },
    correctAnswer: "B",
  },

  // --- Q30 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Morris, who is Irish resident and domiciled, has provided the following information:\n\n" +
      "Note 1: Morris and his friends won the lotto as part of a syndicate in August 2025. Morris' share of the winnings amounted to €58,000.\n\n" +
      "Note 2: Morris gifted a rare piece of jewellery to his cousin on 15 September 2025. The market value of the jewellery at date of the gift was €2,390. The jewellery had originally cost Morris €1,270 in 2016.\n\n" +
      "Note 3: Morris's father Danny died in September 2021. As part of Danny's will, he left a rental property to Morris valued at €270,000 on the date of his death. It originally cost Danny €125,700 on 1 May 1996. Morris sold this property in October 2025 for €290,000.\n\n" +
      "Calculate Morris's total chargeable gain for 2025.",
    correctAnswer: 20000,
    tolerance: 0,
  },

  // --- Q31 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 1,
    questionText:
      "Morris, who is Irish resident and domiciled, sold a rental property in October 2025 for €290,000, realising a chargeable gain of €20,000. He also won €58,000 in the lotto in August 2025, and gifted jewellery (MV €2,390, cost €1,270) to his cousin in September 2025.\n\n" +
      "Identify the due date for Morris' CGT payment on the gains arising in 2025.",
    options: {
      A: "31 October 2025",
      B: "31 October 2026",
      C: "15 December 2025",
      D: "31 January 2026",
    },
    correctAnswer: "C",
  },

  // --- Q32 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 1,
    questionText:
      "Morris, who is Irish resident and domiciled, sold a rental property in October 2025 for €290,000, realising a chargeable gain of €20,000. He also won €58,000 in the lotto in August 2025, and gifted jewellery (MV €2,390, cost €1,270) to his cousin in September 2025.\n\n" +
      "Identify the date by which Morris has to file a return for his chargeable gains in 2025.",
    options: {
      A: "31 October 2025",
      B: "15 December 2025",
      C: "31 January 2026",
      D: "31 October 2026",
    },
    correctAnswer: "D",
  },

  // --- Q33 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "You have asked a junior member of staff to write a briefing note on the rent-a-room relief for a client. They have given you the following information to review:\n\n" +
      "i.  If you let a room in your home, the income you receive is exempt from income tax up to a limit of €14,000.\n\n" +
      "ii. The taxpayer will have to pay PRSI and USC on the rental income even if they meet all the conditions of the relief.\n\n" +
      "iii. If the income from the rent exceeds €14,000, tax is paid on the excess. In other words, tax is paid on any rent received more than €14,000.\n\n" +
      "iv. Rent-a-Room Relief can be claimed by individual taxpayers and corporate entities.\n\n" +
      "Identify which statement is correct in relation to rent-a-room relief.",
    options: {
      A: "i, ii, iii, & iv",
      B: "i only",
      C: "i & ii",
      D: "ii only",
    },
    correctAnswer: "B",
  },

  // --- Q34 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following goods or services are subject to the 0% VAT rate.\n\nSelect ALL that apply.",
    options: {
      A: "Building services",
      B: "Books",
      C: "Hotel lettings",
      D: "Gas and electricity",
      E: "Accountancy and Tax Services",
    },
    correctAnswer: ["B"],
  },

  // --- Q35 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi_numeric",
    marks: 4,
    questionText:
      "On 28 February 2000, Michael gifted 3 acres of land to his daughter Kate, when it was valued at €250,000. On 28 February 2000, the current use value of the land was €52,000. Michael had purchased the land from his late father on 1 April 1976 for €16,000, when the 3 acres of land was valued at €32,000 and had a current use value of €16,000. On 1 March 2001, Kate spent €50,000 on land drainage works. On 1 February 2025, Kate disposed of all the land for €430,000 to a property developer. The cost associated with the disposal amounted to €20,000.\n\n" +
      "Note: The indexation factor for 1999/00 is 1.193. The enhancement cost (2001) does not attract indexation.\n\n" +
      "Calculate the chargeable gain on the sale of the land by Kate in 2025.",
    parts: [
      { label: "Net sales proceeds (€)", answer: 410000, tolerance: 0 },
      { label: "Current use value of land (indexed) (€)", answer: 62036, tolerance: 1 },
      { label: "Hope value of land (€)", answer: 198000, tolerance: 0 },
      { label: "Enhancement cost (€)", answer: 50000, tolerance: 0 },
      { label: "Chargeable gain (€)", answer: 99964, tolerance: 1 },
    ],
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Tulip Limited's (TULIP) corporation tax for the year ended 31 October 2025 is expected to be €210,000. Its corporation tax liability for 2024 was €245,000.\n\n" +
      "Identify the due date for the payment of preliminary tax for TULIP for the year ended 31 October 2025.\n\n" +
      "Note: TULIP is a large company.",
    options: {
      A: "Total instalment due 23 November 2025",
      B: "Total instalment due 23 April 2025",
      C: "Total instalment due 23 September 2025",
      D: "First instalment due 23 April 2025 & second instalment due 23 September 2025",
      E: "First instalment due 23 November 2025 & second instalment due 23 April 2026",
    },
    correctAnswer: "D",
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Julie paid the following medical bills in 2025:\n\n" +
      "  Costs of doctors and consultants:       €700\n" +
      "  Prescriptions:                          €280\n" +
      "  Eye test (not prescribed by a doctor):  €90\n" +
      "  Hearing aids (prescribed by a doctor):  €3,120\n" +
      "  Holiday travel health insurance:        €95\n\n" +
      "An amount of €400 was refunded by her health insurance provider in respect of the doctors and consultancy fees.\n\n" +
      "Calculate the income tax credit Julie can claim for her medical expenses in 2025.",
    correctAnswer: 740,
    tolerance: 0,
  },

  // --- Q38 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi_numeric",
    marks: 4,
    questionText:
      "Niall is a vet and is aged 52 in 2025. He is single and has three children under the age of 16. His taxable trading income for the year is €90,000. He has commercial properties in Cavan and Sligo and earned rental income of €26,000 in 2025 from the properties. Niall made contributions into his personal pension scheme of €29,000 for the 2025 tax year.\n\n" +
      "Calculate the total income tax liability for Niall for 2025.",
    parts: [
      { label: "Total Income (€)", answer: 116000, tolerance: 0 },
      { label: "Less: Pension relief (€)", answer: 27000, tolerance: 0 },
      { label: "Total Taxable Income (€)", answer: 89000, tolerance: 0 },
      { label: "Total Income Tax Liability (after credits) (€)", answer: 20100, tolerance: 0 },
    ],
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi_numeric",
    marks: 3,
    questionText:
      "Brid purchased a house on 1 June 2000 for €155,000. The allowable costs associated with the purchase of the house in June 2000 were €4,500. Brid resided for the full period of ownership in the house but also used 20% of the house for trade purposes. This % of use was agreed by Revenue. On 1 June 2025, she sold the house for €356,000. Legal and professional fees amounted to €5,400 on the sale. Brid had no other disposals in 2025.\n\n" +
      "Note: The indexation factor for 1999/00 is 1.144.\n\n" +
      "Calculate Brid's chargeable gain (if any) on the sale of her house in 2025.",
    parts: [
      { label: "Net sales proceeds (€)", answer: 350600, tolerance: 0 },
      { label: "Total purchase cost (indexed) (€)", answer: 182468, tolerance: 1 },
      { label: "PPR relief (€)", answer: 134506, tolerance: 1 },
      { label: "Net chargeable gain (€)", answer: 33626, tolerance: 1 },
    ],
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Section 381 TCA 1997 provides relief for a loss sustained, in a trade, profession, employment or farming.\n\n" +
      "Identify which of the following statements is correct in relation to relief for trading losses.",
    options: {
      A: "The trading loss is deducted from gross income after the deduction of charges on income or personal allowances/reliefs.",
      B: "Relief for trading losses carried forward must be used against the first available profits of the same trade.",
      C: "Relief for trading losses carried forward can be offset against Case III & Case IV income of the taxpayer or his/her spouse.",
      D: "Relief for trading losses carried forward can be offset against employment income only of the taxpayer.",
    },
    correctAnswer: "B",
  },
];
