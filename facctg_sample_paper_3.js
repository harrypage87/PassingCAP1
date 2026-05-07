const facctgSamplePaper3 = [

  // --- Q1 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements is / are correct in accordance with IAS 37 Provisions, contingent liabilities and contingent assets.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "A provision is a liability of uncertain timing or amount",
      B: "A contingent asset should be disclosed by way of note when the inflow of economic benefit is probable",
      C: "A contingent liability should be disclosed by way of note when the outflow of economic benefit is possible",
      D: "Contingent assets should only be recognised in the financial statements when the inflow of economic benefit is virtually certain",
    },
    correctAnswer: ["A", "B", "C", "D"],
  },

  // --- Q2 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "The management of Couch Ltd (\"COUCH\") has conducted a review of its operations and has decided to close one of its divisions. The estimated costs set out below have been included in the detailed formal restructuring plan of COUCH." +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Redundancy costs</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>190,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Retraining costs</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>35,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Relocation costs of continuing staff</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>25,000</td></tr>" +
      "</table>" +
      "The restructuring plan has been communicated to relevant stakeholders. The plan was implemented in November 2xx5 and is expected to be completed by February 2xx6. As at 31 December 2xx5, €/£ 10,000 of the estimated retraining costs and €/£ 5,000 of the estimated relocation costs have been incurred and paid by COUCH.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to reflect this information in the financial statements of COUCH for the year ended 31 December 2xx5.",
    parts: [
      { label: "Bank SOFP — Credit (€/£)", answer: 15000 },
      { label: "Provision SOFP — Credit (€/£)", answer: 190000 },
      { label: "Expense SPLOCI — Debit (€/£)", answer: 205000 },
    ],
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "The following balances have been extracted from the records of Lamb Ltd (\"LAMB\") at 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Debit €/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Credit €/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Trade receivables</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>150,520</td><td></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Provision for doubtful receivables</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>5,162</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Tax</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,500</td></tr>" +
      "</table>" +
      "After a review of its trade receivables, LAMB has decided that €/£ 40,000 of the year end trade receivables balance of €/£ 150,520 should be written off as a bad debt. Management has also deemed it prudent to provide for 15% of the remaining trade receivable balances.<br><br>" +
      "<strong>Requirement (Q3):</strong> Calculate the bad and doubtful debt expense that should be included in the statement of profit or loss of LAMB for the year ended 31 December 2xx5.",
    answer: 51416,
  },

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "The following balances have been extracted from the records of Lamb Ltd (\"LAMB\") at 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Debit €/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Credit €/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Trade receivables</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>150,520</td><td></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Provision for doubtful receivables</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>5,162</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Tax</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,500</td></tr>" +
      "</table>" +
      "The corporation tax charge for the year ended 31 December 2xx5 is estimated to be €/£ 41,500. The tax amount provided relates to an over/under provision in respect of the tax charge for the prior year ended 31 December 2xx4.<br><br>" +
      "<strong>Requirement (Q4):</strong> Calculate the tax expense that should be included in the statement of profit or loss of LAMB for the year ended 31 December 2xx5.",
    answer: 45000,
  },

  // --- Q5 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "The following balances have been extracted from the records of Brog Ltd (\"BROG\") at 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Debit €/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Credit €/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Land</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>500,000</td><td></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Buildings as at 1 January 2xx5</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,200,000</td><td></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Accumulated depreciation: Buildings as at 1 January 2xx5</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>468,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Plant &amp; equipment at cost as at 1 January 2xx5</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>835,000</td><td></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Accumulated depreciation: Plant &amp; equipment as at 1 January 2xx5</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>470,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Revaluation surplus — land</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>60,000</td></tr>" +
      "</table>" +
      "It is the policy of BROG to depreciate buildings at 2% per annum on straight-line basis and to depreciate plant and equipment at 10% per annum on a reducing balance basis.<br><br>" +
      "<strong>Requirement (Q5):</strong> Calculate the total depreciation expense that should be included in the statement of profit or loss of BROG for the year ended 31 December 2xx5.",
    answer: 60500,
  },

  // --- Q6 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "Using the same BROG information as in Question 5 above.<br><br>" +
      "BROG applies the revaluation model to its land. In prior years the land was revalued upwards and has been correctly accounted for. On 31 December 2xx5, the land was independently assessed to have a fair value of €/£ 400,000.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to reflect this information in the financial statements of BROG for the year ended 31 December 2xx5.",
    parts: [
      { label: "Land SOFP — Debit or Credit? (1=Debit, 2=Credit — it is a downward revaluation)", answer: 2 },
      { label: "Land SOFP amount (€/£)", answer: 100000 },
      { label: "Revaluation gain/loss OCI — Credit (€/£, up to existing surplus)", answer: 60000 },
      { label: "Revaluation gain/loss P/L — Debit excess (€/£)", answer: 40000 },
    ],
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 5,
    questionText:
      "Below is an extract from the statement of financial position of Compu Ltd (\"COMPU\") as at 1 January 2xx5." +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'>Equity</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Ordinary share capital (€/£ 1 per share)</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>600,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Share premium</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>200,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Revaluation surplus — buildings</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>45,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Retained earnings</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>788,740</td></tr>" +
      "</table>" +
      "The following information has been provided:<br>" +
      "1. Profit for the year ended 31 December 2xx5 totalled €/£ 147,200;<br>" +
      "2. On 1 September 2xx5, COMPU issued 110,000 ordinary shares at €/£ 1.20 per share. All shares were fully paid in cash by year end 31 December 2xx5;<br>" +
      "3. An ordinary dividend of five cents/pence per share was approved by the shareholders of COMPU at the company annual general meeting on 22 December 2xx5;<br>" +
      "4. COMPU applies the revaluation model to its tangible non-current assets. One building, which had a carrying value of €/£ 220,000 on 31 December 2xx5, was independently assessed to have a fair value of €/£ 250,000 on that date.<br><br>" +
      "<strong>Requirement:</strong> Complete the statement of changes in equity extract of COMPU for the year ended 31 December 2xx5. Enter positive or negative values as appropriate.",
    parts: [
      { label: "Closing Share Capital (€/£)", answer: 710000 },
      { label: "Closing Share Premium (€/£)", answer: 222000 },
      { label: "Closing Revaluation Surplus (€/£)", answer: 75000 },
      { label: "Closing Retained Earnings (€/£)", answer: 900440 },
    ],
  },

  // --- Q8 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following are secondary (enhancing) characteristics of financial information in accordance with the IASB's conceptual framework for financial reporting.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Materiality",
      B: "Understandability",
      C: "Accruals",
      D: "Comparability",
    },
    correctAnswer: ["B", "D"],
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "The annual audit of Tej Ltd (\"TEJ\") is due to commence in the coming weeks. The audit firm has appointed a new audit partner for the engagement. TEJ's Finance Director has informed her finance team that the new audit partner is her brother and should be seen as positive news – it should mean that the audit will run smoothly and the finance team should not have to work any overtime.<br><br>" +
      "<strong>Requirement:</strong> Identify which threat(s) to compliance with the fundamental principles of Chartered Accountants Ireland Code of Ethics could arise in respect of the audit of TEJ.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Intimidation",
      B: "Objectivity",
      C: "Self-interest",
      D: "Advocacy",
    },
    correctAnswer: ["A", "C"],
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Front Ltd (\"FRONT\") borrowed €/£ 2,000,000 to fund the construction of its head office. The loan was drawn down on 1 March 2xx5 at a rate of 6% per annum. The construction commenced on 1 April 2xx5. Due to environmental concerns, construction was suspended for a two-month period, from 1 September 2xx5 to 31 October 2xx5, and re-commenced on 1 November 2xx5. Construction is expected to be completed on 31 July 2xx6.<br><br>" +
      "<strong>Requirement (Q10):</strong> Calculate, in accordance with IAS 23 Borrowing costs, the number of months of borrowing costs that should be capitalised by FRONT on its statement of financial position as at 31 December 2xx5.",
    options: {
      A: "0 months",
      B: "7 months",
      C: "9 months",
      D: "10 months",
    },
    correctAnswer: "B",
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Front Ltd (\"FRONT\") borrowed €/£ 2,000,000 to fund the construction of its head office. The loan was drawn down on 1 March 2xx5 at a rate of 6% per annum. The construction commenced on 1 April 2xx5. Due to environmental concerns, construction was suspended for a two-month period, from 1 September 2xx5 to 31 October 2xx5, and re-commenced on 1 November 2xx5. Construction is expected to be completed on 31 July 2xx6.<br><br>" +
      "Some of the loan proceeds were put on deposit for a two-month period commencing 1 June 2xx5. Deposit interest of €/£ 2,000 and €/£ 2,150 was received by FRONT for the months of June and July respectively.<br><br>" +
      "<strong>Requirement (Q11):</strong> Calculate the deposit interest that is permitted to be offset against FRONT's borrowing costs.",
    answer: 4150,
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "The regulatory framework is set up to regulate the format and content of financial reports.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the following can be said to form part of the regulatory framework.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Company law",
      B: "Accounting standards",
      C: "The conceptual framework",
      D: "Stock exchange regulation",
    },
    correctAnswer: ["A", "B", "D"],
  },

  // --- Q13 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "Ross Hamish established a new catering business, Hamish Eats (\"EATS\"), on 1 January 2xx5. On that date, Ross invested €/£ 40,000 into EATS's business bank account to purchase equipment and pay overheads.<br><br>" +
      "On 1 January 2xx5, Ross decided to use his own car for business use. The car was valued at €/£ 8,000 on 1 January 2xx5 and has an estimated useful life of ten years.<br><br>" +
      "Total rent for the business premises amounted to €/£ 14,000 for 2xx5. On 1 July 2xx5, Ross withdrew €/£ 2,000 from EATS's bank account to pay for the rent of his own house.<br><br>" +
      "<strong>Requirement:</strong> Calculate the balance of the capital account and drawings account in the financial statements of EATS as at 31 December 2xx5.",
    parts: [
      { label: "Capital (€/£)", answer: 48000 },
      { label: "Drawings (€/£)", answer: 2000 },
    ],
  },

  // --- Q14 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "You are preparing a trade receivables control account and a trade payables control account. The following transactions took place during the year ended 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Contra entry trade payables / receivables ledger</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,134</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Discounts allowed on credit sales</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>6,120</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Discount received on credit purchases</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,850</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Bad debt written off</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>870</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Cheques paid to payables</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>97,930</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Cash received from receivables</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>144,945</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Cheques received from credit customers dishonoured by bank</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,275</td></tr>" +
      "</table>" +
      "In addition, financial records revealed the following day book totals for the year ended 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Sales day book</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>167,370</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Sales returns day book</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,160</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Purchases day book</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>105,270</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Purchases return day book</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,400</td></tr>" +
      "</table>" +
      "<strong>Requirement (Q14):</strong> Determine which amounts would appear on the credit side of the trade receivables control account for the year ended 31 December 2xx5.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "€/£ 167,370",
      B: "€/£ 3,160",
      C: "€/£ 6,120",
      D: "€/£ 870",
      E: "€/£ 144,945",
      F: "€/£ 3,850",
    },
    correctAnswer: ["B", "C", "D", "E"],
  },

  // --- Q15 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Using the same information as in Question 14 above (trade receivables and payables control accounts).<br><br>" +
      "<strong>Requirement:</strong> Determine which amounts would appear on the credit side of the trade payables control account for the year ended 31 December 2xx5.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "€/£ 6,120",
      B: "€/£ 105,270",
      C: "€/£ 1,400",
      D: "€/£ 1,134",
    },
    correctAnswer: ["B"],
  },

  // --- Q16 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Alice Brady is a sole trader. The bank statement for Alice's business account shows a credit balance of €/£ 18,515 as at 31 December 2xx5. Upon closer investigation you note the following:<br>" +
      "• A cheque of €/£ 450, paid to a supplier on 11 December 2xx5, has not been reflected on the bank statement;<br>" +
      "• December 2xx5 cash lodgements of €/£ 1,500 were not reflected on the bank statement until January 2xx6;<br>" +
      "• A lodgement of €/£ 340 made by Alice in October 2xx5 was not recorded on the bank statement;<br>" +
      "• Bank fees of €/£ 55 have been recorded on the bank statement and have been reflected in Alice's accounts.<br><br>" +
      "<strong>Requirement (Q16):</strong> Determine which of the following amounts would appear as a reconciling item in the bank reconciliation of Alice Brady as at 31 December 2xx5.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "€/£ 450",
      B: "€/£ 1,500",
      C: "€/£ 340",
      D: "€/£ 55",
    },
    correctAnswer: ["A", "B", "C"],
  },

  // --- Q17 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 1,
    questionText:
      "Using the same Alice Brady information as in Question 16 above.<br><br>" +
      "The bank statement for Alice's business account shows a credit balance of €/£ 18,515 as at 31 December 2xx5.<br>" +
      "• A cheque of €/£ 450, paid to a supplier on 11 December 2xx5, has not been reflected on the bank statement;<br>" +
      "• December 2xx5 cash lodgements of €/£ 1,500 were not reflected on the bank statement until January 2xx6;<br>" +
      "• A lodgement of €/£ 340 made by Alice in October 2xx5 was not recorded on the bank statement.<br><br>" +
      "<strong>Requirement:</strong> Calculate the balance of Alice Brady's cash book as at 31 December 2xx5.",
    answer: 19905,
  },

  // --- Q18 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "On 1 January 2xx5, Compra Ltd (\"COMPRA\") purchased a vacant building for €/£ 488,000. In addition, COMPRA incurred legal fees of €/£ 22,000 on the purchase. It is the company's intention to rent the building to a third party as soon as possible. At 31 December 2xx5, the building was independently assessed to have a fair value of €/£ 560,000. It is the policy of COMPRA to apply the cost model to its property, plant and equipment, and to apply the fair value model to its investment properties. The building is deemed to have a useful life of 20 years.<br><br>" +
      "<strong>Requirement:</strong> Calculate the net amount which should be recorded in the statement of profit or loss of COMPRA for the year ended 31 December 2xx5.",
    options: {
      A: "€/£ 50,000 credit",
      B: "€/£ 12,000 debit",
      C: "€/£ 36,400 debit",
      D: "€/£ 37,500 debit",
    },
    correctAnswer: "A",
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "Ken Woods operates as a sole trader. Ken is VAT registered; the applicable VAT rate is 21%. In December 2xx5, Ken purchased a machine on credit for €/£ 60,500, inclusive of VAT. The machine will be used in Ken's warehouse.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to reflect this information in the financial statements of Ken Woods for the year ended 31 December 2xx5.",
    parts: [
      { label: "Machine cost SOFP — Debit (€/£)", answer: 50000 },
      { label: "VAT SOFP — Debit (€/£)", answer: 10500 },
      { label: "Trade payable SOFP — Credit (€/£)", answer: 60500 },
    ],
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "KELLY, JONES and ROY have been in partnership for many years sharing profits in the ratio of 1:2:3 respectively. During 2xx5, drawings of cash were taken by each of the partners. These are detailed in the table below." +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>KELLY</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>JONES</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>ROY</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Amount</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£ 112,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£ 150,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£ 108,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Date of drawings</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1 April 2xx5</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1 May 2xx5</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1 September 2xx5</td></tr>" +
      "</table>" +
      "The partnership profit for the year ended 31 December 2xx5 totalled €/£ 150,602. The partnership allows for interest on drawings to be charged at 2% per annum. JONES receives an annual salary of €/£ 43,000.<br><br>" +
      "<strong>Requirement:</strong> Calculate ROY's profit share for the year ended 31 December 2xx5.",
    answer: 56001,
  },

  // --- Q21 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "BILLS, FOX and NEIGH have been in partnership for many years sharing profits in the ratio of 2:2:1 respectively. At 1 January 2xx5, the following balances were recorded in the current accounts of BILLS, FOX and NEIGH." +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>BILLS</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>93,050 credit</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>FOX</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>980 debit</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>NEIGH</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>93,850 credit</td></tr>" +
      "</table>" +
      "The partnership profit for the year ended 31 December 2xx5 totalled €/£ 92,450. BILLS is guaranteed a minimum profit of €/£ 50,000.<br><br>" +
      "<strong>Requirement:</strong> Calculate the closing balance of the current account of FOX as at 31 December 2xx5. If appropriate, use the minus sign to indicate a credit balance.",
    answer: -27320,
  },

  // --- Q22 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 4,
    questionText:
      "Bunclo Ltd (\"BUNCLO\") is preparing its statement of cash flows. Information from the financial statements of the company for the years ended 31 December 2xx5 and 31 December 2xx4 are set out below." +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'>BUNCLO — Extracts: SOFP as at 31 December 2xx5 and 2xx4</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2xx5 €/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2xx4 €/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Property, plant and equipment</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,653,540</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,762,500</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Interest receivable</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>8,875</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>13,394</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Ordinary share capital (€/£ 1 per share)</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,650,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,500,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Share premium</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>60,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>nil</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Revaluation surplus — property</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>197,500</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>147,500</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Retained earnings</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>964,175</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>913,216</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Debentures (8%)</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>750,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>850,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Dividend payable</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>62,150</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>34,450</td></tr>" +
      "</table>" +
      "<strong>Additional Information:</strong><br>" +
      "1. Profit for the year ended 31 December 2xx5 totalled €/£ 409,786. This includes interest income of €/£ 11,200;<br>" +
      "2. BUNCLO sold equipment on 1 December 2xx5 at a profit of €/£ 7,450. The equipment was purchased at a cost of €/£ 305,000 and had accumulated depreciation of €/£ 84,638 at the date of disposal;<br>" +
      "3. Depreciation for the year ended 31 December 2xx5 totalled €/£ 381,322;<br>" +
      "4. The debentures were redeemed on 30 June 2xx5;<br>" +
      "5. An issue of ordinary shares took place during 2xx5. All proceeds in respect of the share issue were fully paid up on 31 December 2xx5.<br><br>" +
      "<strong>Requirement (Q22):</strong> Complete the investing activities section of BUNCLO's statement of cash flows for the year ended 31 December 2xx5. Enter positive or negative values as appropriate.",
    parts: [
      { label: "Payments to acquire PPE (€/£ — negative)", answer: -442724 },
      { label: "Receipts from sale of PPE (€/£)", answer: 227812 },
      { label: "Interest income received (€/£)", answer: 15719 },
      { label: "Net cash flow from investing activities (€/£ — negative)", answer: -199193 },
    ],
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 4,
    questionText:
      "Using the same BUNCLO information as in Question 22 above.<br><br>" +
      "<strong>Requirement:</strong> Complete the financing activities section of BUNCLO's statement of cash flows for the year ended 31 December 2xx5. Enter positive or negative values as appropriate.",
    parts: [
      { label: "Debentures redeemed (€/£ — negative)", answer: -100000 },
      { label: "Proceeds from issue of shares (€/£)", answer: 210000 },
      { label: "Dividends paid (€/£ — negative)", answer: -331127 },
      { label: "Net cash flow from financing activities (€/£ — negative)", answer: -221127 },
    ],
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Kathleen owns a small business which buys printers directly from manufacturers and sells them to retailers and private individuals. One of Kathleen's office employees required a replacement printer for office use. This was sourced directly from Kathleen's warehouse.<br><br>" +
      "<strong>Requirement:</strong> Identify which journal entry is required to reflect this in the financial statements of Kathleen.",
    options: {
      A: "Debit Property, plant & equipment; Credit Cost of sales",
      B: "Debit Drawings; Credit Cost of sales",
      C: "Debit Property, plant & equipment; Credit Drawings",
      D: "Debit Cost of sales; Credit Property, plant & equipment",
    },
    correctAnswer: "A",
  },

  // --- Q25 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Dopra Ltd (\"DOPRA\") has prepared its financial statements for the year ended 31 December 2xx5. The financial statements will be approved by the directors on 20 April 2xx6.<br><br>" +
      "The following events took place:<br>" +
      "1. In January 2xx6, a customer who owed DOPRA €/£ 200,000 at 31 December 2xx5 ceased trading. Any further payments from the customer are unlikely;<br>" +
      "2. Inventory valued at €/£ 45,000 at 31 December 2xx5 was sold in February 2xx6 for €/£ 32,000;<br>" +
      "3. A storm caused damage of €/£ 28,000 to DOPRA's factory on 22 January 2xx6;<br>" +
      "4. A customer took a legal action against DOPRA in November 2xx5 and DOPRA recorded a provision of €/£ 250,000 as at 31 December 2xx5. In March 2xx6, a one-off settlement of €/£ 290,000 was made by DOPRA.<br><br>" +
      "All amounts are considered to be material.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the following would be treated as a non-adjusting event after the reporting date, in accordance with IAS 10 Events after the reporting period.",
    options: {
      A: "None of the above",
      B: "3 and 4",
      C: "3 only",
      D: "1 and 2",
    },
    correctAnswer: "C",
  },

  // --- Q26 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Dunes Ltd (\"DUNES\") is preparing its financial statements for the year ended 31 December 2xx5. A material error in the financial statements for the prior period ended 31 December 2xx4 has been identified.<br><br>" +
      "<strong>Requirement:</strong> Determine how DUNES should account for the error in its financial statements for the year ended 31 December 2xx5 in accordance with IAS 8 Accounting policies, changes in accounting estimates and errors.",
    options: {
      A: "Restate the comparative amounts for the prior period at their correct value, without the requirement to disclose a note to the financial statements",
      B: "Adjust the current period statement of profit or loss and include a disclosure note with relevant details of the adjustment",
      C: "Adjust the current year statement of financial position and include a disclosure note with relevant details of the adjustment",
      D: "Restate the comparative amounts for the prior period at their correct value and include a disclosure note with relevant details of the adjustment",
    },
    correctAnswer: "D",
  },

  // --- Q27 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Identify which statement best describes the objective of general purpose financial reporting in accordance with the IASB's conceptual framework for financial reporting.",
    options: {
      A: "To provide financial information about the reporting entity that is useful to users in making decisions",
      B: "To accurately record transactions in order to produce financial statements",
      C: "To prepare ledger accounts to enable a trial balance to be prepared",
      D: "To provide financial information to management to enable resources to be allocated correctly",
    },
    correctAnswer: "A",
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "On 1 January 2xx5, Carson Ltd (\"CARSON\") entered into a four-year lease contract for the use of an industrial machine in CARSON's factory. The agreement requires CARSON to make an annual payment of €/£ 30,000 on 31 December each year and the first payment was made on 31 December 2xx5. As part of the contract CARSON was required to make an upfront payment of €/£ 3,000. The company incurred legal costs of €/£ 2,000 in respect of the lease. The interest rate implicit in the lease is 5%. At the inception of the lease, the present value of the lease payments totalled €/£ 106,380.<br><br>" +
      "<strong>Requirement (Q28):</strong> Calculate the right-of-use asset to be capitalised on the statement of financial position of CARSON as at 1 January 2xx5.",
    answer: 111380,
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "Using the same CARSON information as in Question 28 above.<br><br>" +
      "<strong>Requirement:</strong> Calculate the following values that should be included in the financial statements of CARSON for the year ended 31 December 2xx5.",
    parts: [
      { label: "Finance cost SPLOCI (€/£)", answer: 5319 },
      { label: "Total lease liability SOFP (€/£)", answer: 81699 },
    ],
  },

  // --- Q30 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "On 1 March 2xx5, White Ltd (\"WHITE\") purchased a machine for €/£ 60,000 cash. On the same date, WHITE received a €/£ 20,000 government grant in respect of the machine acquisition. The machine has an expected useful life of ten years and a nil residual value. It is the policy of WHITE to charge a full year's depreciation in the year of purchase. Where applicable, the company has a policy to treat government grants as deferred income. To date, WHITE has satisfied the government conditions pertaining to the grant received.<br><br>" +
      "<strong>Requirement:</strong> Calculate the following values that should be included in the financial statements of WHITE for the year ended 31 December 2xx5.",
    parts: [
      { label: "Depreciation expense SPLOCI (€/£)", answer: 6000 },
      { label: "Grant income SPLOCI (€/£)", answer: 2000 },
      { label: "Grant — non-current liability SOFP (€/£)", answer: 16000 },
    ],
  },

  // --- Q31 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Identify which of the following best satisfies the definition of a liability in accordance with the IASB's conceptual framework for financial reporting.",
    options: {
      A: "A liability is a legal or constructive obligation which arises from a past event",
      B: "A liability is an obligation which will result in the outflow of economic benefit from the entity",
      C: "A liability is an outflow of economic benefit to a third party as a result from a past event",
      D: "A liability is a present obligation to transfer economic resource as a result of a past event",
    },
    correctAnswer: "D",
  },

  // --- Q32 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Stephen, a sole trader, conducted his inventory count on 5 January 2xx6 and valued the inventory at €/£ 74,000 at this date. Stephen sold goods for €/£ 18,000 on 2 January 2xx6 and made purchases of €/£ 11,500 on 3 January 2xx6. No other transactions took place since Stephen's year end of 31 December 2xx5. Stephen applies a 20% mark-up to all sales.<br><br>" +
      "<strong>Requirement:</strong> Calculate the value of Stephen's inventories as at 31 December 2xx5.",
    answer: 77500,
  },

  // --- Q33 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Kin Ltd (\"KIN\") has produced the following extract from its statement of cash flows." +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'>Cash flows from Operating Activities</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Profit for the year</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>222,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Adjustments for:</td><td></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Depreciation</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>101,100</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Profit on sale of equipment</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>(7,450)</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Increase in inventory</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>33,211</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Increase in trade payables</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>29,676</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'><strong>Cash Generated from Operations</strong></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'><strong>378,537</strong></td></tr>" +
      "</table>" +
      "<strong>Requirement:</strong> Identify which of the following statements is / are true.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Depreciation should be subtracted from profit, not added to profit",
      B: "Profit on sale of equipment should be added to profit, not subtracted from profit",
      C: "Increase in inventory should be subtracted from profit, not added to profit",
      D: "Increase in trade payables should be subtracted from profit, not added to profit",
    },
    correctAnswer: ["C"],
  },

  // --- Q34 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following would be included in a statement of cash flow under the direct method, but not included in the statement of cash flow under the indirect method.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Cash paid to suppliers",
      B: "Cash paid for the purchase of non-current assets",
      C: "Tax paid",
      D: "Cash received from customers",
    },
    correctAnswer: ["A", "D"],
  },

  // --- Q35 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "You are responsible for preparing the financial statements of Gino Ltd (\"GINO\"). The following information has been extracted from the financial records of GINO for the financial year ended 31 December 2xx5." +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Purchases</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>222,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Trade discount</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>11,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Opening inventory</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>56,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Administration costs</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>37,600</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Closing inventory</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>66,500</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Import duties incurred on goods purchased</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,200</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Transport costs incurred on sale of goods</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,500</td></tr>" +
      "</table>" +
      "<strong>Requirement:</strong> Calculate the cost of sales figure which should be included in the statement of profit or loss of GINO for the year ended 31 December 2xx5.",
    options: {
      A: "€/£ 242,800",
      B: "€/£ 203,700",
      C: "€/£ 211,500",
      D: "€/£ 205,200",
    },
    correctAnswer: "B",
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Margaret, a sole trader, received a five-year bank loan in June 2xx5. This loan has been included as an 'other payable' under current liabilities in Margaret's draft statement of financial position as at 31 December 2xx5.<br><br>" +
      "<strong>Requirement:</strong> Determine the impact of making the appropriate adjustment to Margaret's statement of financial position.",
    options: {
      A: "An increase in current liabilities",
      B: "A decrease in net assets",
      C: "A decrease in current liabilities and a decrease in net assets",
      D: "An increase in net current assets",
    },
    correctAnswer: "D",
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following could explain why an entity's trial balance does not balance.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "A prepayment of €/£ 500 had not been accounted for at year end",
      B: "An opening insurance accrual of €/£ 1,050 was not included in the insurance expense account",
      C: "A cash purchase had been correctly recorded as an expense but credited to trade payables in error",
      D: "The sales day book had been understated by €/£ 9,000",
    },
    correctAnswer: ["B"],
  },

  // --- Q38 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "numeric",
    marks: 2,
    questionText:
      "Jet Kitchen Ltd (\"JET\") is a catering company that prepares inflight meals for airlines. Inventory counted on 31 December 2xx5 totalled €/£ 370,000. Included in the count was €/£ 60,000 of food and beverages that were nearing their expiry date. These food and beverages were sold at a reduced price of €/£ 15,000 on 2 January 2xx6.<br><br>" +
      "<strong>Requirement:</strong> Calculate the value of inventories that should be included on the statement of financial position of JET as at 31 December 2xx5.",
    answer: 325000,
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "Identify which of the following items appears on the same side of the trial balance.",
    options: {
      A: "Share capital; Sales returns",
      B: "Accruals; Revaluation surplus",
      C: "Prepayments; Sales revenue",
      D: "Other payables; Rent expense",
    },
    correctAnswer: "B",
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "The draft accounts of Elizabeth Paisley did not balance at 31 December 2xx5 and a suspense account was opened to record the difference. Subsequently, it was discovered that a credit purchase of €/£ 13,200 had been correctly recorded in the profit or loss account but a credit entry of €/£ 12,300 had been posted to the bank account.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to correct any errors and appropriately reflect this information in the financial statements for the year ended 31 December 2xx5.",
    parts: [
      { label: "Bank SOFP — Credit (€/£)", answer: 12300 },
      { label: "Trade payables SOFP — Credit (€/£)", answer: 13200 },
      { label: "Suspense — Debit (€/£)", answer: 900 },
    ],
  },

  // --- Q41 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "Jennifer Parr owns a hat-making business. During the year ended 31 December 2xx5, Jennifer withdrew €/£ 300 cash each month from the business bank account for her own personal use. In November 2xx5 Jennifer gifted an item of inventory to her niece as a birthday gift. This inventory had cost the business €/£ 500.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to reflect this information in the financial statements of Jennifer Parr for the year ended 31 December 2xx5.",
    parts: [
      { label: "Bank SOFP — Credit (€/£)", answer: 3600 },
      { label: "Drawings SOFP — Debit (€/£)", answer: 4100 },
      { label: "Purchases SPLOCI — Credit (€/£)", answer: 500 },
    ],
  },

  // --- Q42 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Information in the financial statements should faithfully represent what it purports to represent in accordance with the IASB's conceptual framework for financial reporting.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the following are characteristics which ensure that financial information is faithfully represented.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Neutral",
      B: "Free from error",
      C: "Relevance",
      D: "Complete",
    },
    correctAnswer: ["A", "B", "D"],
  },

  // --- Q43 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements is / are true.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "A limited liability company can incur expenses in its own name",
      B: "A company continues to exist regardless of the identity of its owners",
      C: "A sole trader has limited liability for the business debts",
      D: "A sole trader can withdraw capital from the business at any time",
    },
    correctAnswer: ["A", "B", "D"],
  },

  // --- Q44 ------------------------------------------------------------------
  {
    section: "Sample Paper 3",
    type: "single",
    marks: 2,
    questionText:
      "A company's cash book has recorded a positive cash balance of €/£ 11,000 as at 31 December 2xx5. It has since been discovered that, in December 2xx5, a dishonoured cheque of €/£ 600 had been debited in the cash book instead of being credited, and that a standing order of €/£ 200 had been entered three times in error.<br><br>" +
      "<strong>Requirement:</strong> Calculate the correct cash book balance as at 31 December 2xx5.",
    options: {
      A: "€/£ 10,200 debit",
      B: "€/£ 10,400 debit",
      C: "€/£ 10,800 debit",
      D: "€/£ 11,800 debit",
    },
    correctAnswer: "A",
  },

];
