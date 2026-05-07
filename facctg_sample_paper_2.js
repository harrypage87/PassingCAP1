const facctgSamplePaper2 = [

  // --- Q1 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 4,
    questionText:
      "Zeltron Ltd (\"ZELTRON\") pays its water bill quarterly in advance and its office lease in arrears. In December 2xx5, ZELTRON paid its water bill of €/£ 2,250 covering the months of December 2xx5, January 2xx6, and February 2xx6. The lease charged for ZELTRON's office space is €/£ 2,000 per month, and the last payment of €/£ 6,000 was made in December for the months of July, August, and September of 2xx5.<br><br>" +
      "<strong>Requirement:</strong> Calculate the amount to be included in the trial balance of ZELTRON to 31 December 2xx5 for accruals and prepayments. Enter as positive values.",
    parts: [
      { label: "Accruals — Credit (€/£)", answer: 6000 },
      { label: "Prepayments — Debit (€/£)", answer: 1500 },
    ],
  },

  // --- Q2 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "The following balances have been extracted from the records of Apex Industries Ltd (\"APEX\") at 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Buildings at cost as at 1 January 2xx5</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>850,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Accumulated depreciation: Buildings as at 1 January 2xx5</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>400,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Machinery at cost as at 1 January 2xx5</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>500,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Accumulated depreciation: Plant &amp; equipment as at 1 January 2xx5</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>150,000</td></tr>" +
      "</table>" +
      "Depreciation is to be calculated as follows:<br>" +
      "• Buildings are depreciated at 3% per annum on a straight-line basis;<br>" +
      "• Plant and equipment is depreciated at 20% per annum on a reducing balance basis.<br><br>" +
      "An item of plant with a cost of €/£ 25,000 was sold on 31 December 2xx5 for proceeds of €/£ 10,000. The plant had been purchased on 1 January 2xx3. APEX charges depreciation on a proportionate basis.<br><br>" +
      "<strong>Requirement (Q2):</strong> Calculate the depreciation expense that should be charged in each of the categories for the year ended 31 December 2xx5.",
    parts: [
      { label: "Buildings (€/£)", answer: 25500 },
      { label: "Plant and Equipment (€/£)", answer: 70000 },
    ],
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "Using the same APEX information as in Question 2 above.<br><br>" +
      "An item of plant with a cost of €/£ 25,000 was sold on 31 December 2xx5 for proceeds of €/£ 10,000. The plant had been purchased on 1 January 2xx3. APEX charges depreciation on a proportionate basis.<br><br>" +
      "<strong>Requirement:</strong> Calculate the profit / loss arising on the sale of the machinery on 31 December 2xx5. Use the minus sign \"-\" to indicate a loss.",
    answer: -2800,
  },

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements correctly highlight differences between cash-based accounting and accruals accounting.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "In cash-based accounting, revenue is recorded when cash is received; in accruals accounting, revenue is recorded when it is earned",
      B: "In accruals accounting, a sale made on credit is recorded when payment is received; in cash-based accounting, the sale is recorded immediately",
      C: "In accruals accounting, a prepaid expense is recorded as an asset; in cash-based accounting, the expense is recorded when payment is made",
      D: "In cash-based accounting, expenses are recorded when they are paid; in accruals accounting, expenses are recorded when they are incurred",
    },
    correctAnswer: ["A", "C", "D"],
  },

  // --- Q5 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 5,
    questionText:
      "The following balances have been extracted from the records of VentureX Ltd (\"VENTUREX\") at 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Trade receivables</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>310,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Provision for doubtful debts</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>8,300</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Prepayments</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>52,000</td></tr>" +
      "</table>" +
      "Included in the trade receivables balance is an amount of €/£ 5,000 that is no longer expected to be recovered. VENTUREX has reviewed the remaining trade receivables balances and feels that a provision amounting to 3% of these is required.<br><br>" +
      "Not included in the extract is a payment of insurance on company vehicles made on 28 October 2xx5 of €/£ 6,000 for the year ending 31 October 2xx6.<br><br>" +
      "<strong>Requirement:</strong> Calculate the following amounts to be included in the financial statements of VENTUREX for the year ended 31 December 2xx5.",
    parts: [
      { label: "Trade receivables SOFP (€/£)", answer: 305000 },
      { label: "Provision for doubtful receivables SOFP (€/£)", answer: 9150 },
      { label: "Prepayments SOFP (€/£)", answer: 57000 },
      { label: "Insurance expense SPLOCI (€/£)", answer: 1000 },
      { label: "Bad debt expense SPLOCI (€/£)", answer: 5850 },
    ],
  },

  // --- Q6 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 1,
    questionText:
      "QUANTUM, a VAT-registered business, operates with a VAT rate of 20%. In December 2xx5, the following transactions occurred:<br>" +
      "1. Sales of €/£ 760,000, inclusive of VAT, were made on credit to customers;<br>" +
      "2. Purchases of office supplies totalling €/£ 220,000, excluding VAT, were made on credit from suppliers.<br><br>" +
      "<strong>Requirement (Q6):</strong> Calculate the amount of output VAT charged on the credit sales only in the records of QUANTUM.",
    answer: 126667,
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "QUANTUM, a VAT-registered business, operates with a VAT rate of 20%. In December 2xx5, the following transactions occurred:<br>" +
      "1. Sales of €/£ 760,000, inclusive of VAT, were made on credit to customers;<br>" +
      "2. Purchases of office supplies totalling €/£ 220,000, excluding VAT, were made on credit from suppliers.<br><br>" +
      "<strong>Requirement (Q7):</strong> Prepare the journal entry required to record the purchase of office supplies only in the financial statements of QUANTUM for the year ended 31 December 2xx5.",
    parts: [
      { label: "Trade payables SOFP — Credit (€/£)", answer: 264000 },
      { label: "VAT SOFP — Debit (€/£)", answer: 44000 },
      { label: "Office supplies SPLOCI — Debit (€/£)", answer: 220000 },
    ],
  },

  // --- Q8 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "An employee's gross monthly salary at Fusion Tech Ltd (\"FUSION\") is €/£ 6,000, PAYE is €/£ 1,200, the employee's PRSI/NIC is €/£ 600, and employer's PRSI/NIC is €/£ 1,050. FUSION has settled all relevant amounts in respect of the salary.<br><br>" +
      "<strong>Requirement:</strong> Identify the correct journal entry to account for the settlement of amounts due to the tax authorities.",
    options: {
      A: "Debit Employee Benefits Expense €/£ 2,850; Credit Tax Authorities Payable €/£ 2,850",
      B: "Debit Payroll Expenses €/£ 2,850; Credit Cash €/£ 2,850",
      C: "Debit Tax Authorities Payable €/£ 2,850; Credit Cash €/£ 2,850",
      D: "Debit Payroll Tax Expense €/£ 2,850; Credit Tax Authorities Payable €/£ 2,850",
    },
    correctAnswer: "C",
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify possible reasons why a business should reconcile the balance on the trade payables control account to the list of payable balances in the payables' ledger.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "To confirm that payments due to suppliers are recorded in the correct accounting period",
      B: "To ensure that customer transactions adhere to the principles of double-entry bookkeeping",
      C: "To assess the effectiveness of the purchasing department in managing credit terms and conditions",
      D: "To ensure that all transactions have been posted correctly to supplier accounts and to detect any discrepancies",
    },
    correctAnswer: ["A", "D"],
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "An error of omission has been discovered in relation to a cash purchase of office supplies amounting to €/£ 400.<br><br>" +
      "<strong>Requirement:</strong> Identify the correct journal entry to rectify this error.",
    options: {
      A: "Debit the office supplies account €/£ 400 and credit the bank account €/£ 400",
      B: "Debit the bank account €/£ 400 and credit the office supplies account €/£ 400",
      C: "Credit the office supplies account €/£ 400 and debit the purchases account €/£ 400",
      D: "Credit the purchases account €/£ 400 and debit the bank account €/£ 400",
    },
    correctAnswer: "A",
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 7,
    questionText:
      "In 2xx5, Naomi launched Green Thumb Garden Works (\"GREEN THUMB\") with an initial investment of €/£ 100,000 to cover setup and operational costs. The following information relates to the year ended 31 December 2xx5:<br>" +
      "1. <strong>Capital Investments:</strong> on 1 January 2xx5 Naomi bought four items of equipment at an average of €/£ 3,000 each, and two vans at €/£ 20,000 each. These assets all have an expected operational life of ten years, with depreciation recognised from the date of purchase;<br>" +
      "2. <strong>Inventory Transactions:</strong> Monthly stock of plants, soil, and other materials on average cost €/£ 15,000. Naomi used €/£ 6,000 worth of these supplies for personal projects. The inventory value remaining at year-end was €/£ 8,000;<br>" +
      "3. <strong>Sales Activity:</strong> The business operated for 50 weeks of the year five days a week and undertook 14 projects for which they were paid an average of €/£ 30,000. A customer discount of 5% was allowed for payment within 30 days. Six customers received this discount in 2xx5;<br>" +
      "4. <strong>Lease Costs:</strong> Monthly rental expenses for an office and storehouse was €/£ 2,000, paid at the start of each month;<br>" +
      "5. <strong>Operational Overheads:</strong> Utility bills and local council fees related to the property were €/£ 400 and €/£ 250 monthly, respectively, paid at the beginning of each quarter;<br>" +
      "6. <strong>Owner's Drawings:</strong> From September 2xx5, Naomi began withdrawing €/£ 1,500 monthly from the business;<br>" +
      "7. To complete the projects Naomi employed casual labour at a cost of €/£ 200 per person per day. One labourer was needed for the duration of each project, although on 60 days of the year two casual labourers were required.<br><br>" +
      "<strong>Requirement:</strong> Prepare GREEN THUMB's statement of profit or loss for the year ended 31 December 2xx5. Income/credit items should be entered as a positive, and all expense/debit items should be entered as a negative.",
    parts: [
      { label: "Sales (€/£)", answer: 420000 },
      { label: "Cost of sales (€/£ — negative)", answer: -166000 },
      { label: "Depreciation (€/£ — negative)", answer: -5200 },
      { label: "Discounts Allowed (€/£ — negative)", answer: -9000 },
      { label: "Rent (€/£ — negative)", answer: -24000 },
      { label: "Operational Costs (€/£ — negative)", answer: -7800 },
      { label: "Labour (€/£ — negative)", answer: -62000 },
      { label: "Operating profit (€/£)", answer: 146000 },
    ],
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 4,
    questionText:
      "TURNER, HARRIS, and DIAZ operate a partnership. Their profit-sharing ratio is 4:3:2, respectively. Interest is charged on cash drawings at 5% per annum. TURNER and HARRIS receive an annual salary of €/£ 15,000 each. The partnership made a profit of €/£ 300,000 for the year ending 31 December 2xx5.<br><br>" +
      "Cash drawings for the year ended 31 December 2xx5 are as follows:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Drawings on 31 March 2xx5 €/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Drawings on 31 August 2xx5 €/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>TURNER</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>40,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>32,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>HARRIS</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>30,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>20,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>DIAZ</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>16,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>12,000</td></tr>" +
      "</table>" +
      "<strong>Requirement:</strong> Calculate the following values in respect of HARRIS for the year ended 31 December 2xx5. All answers should be entered as positive values.",
    parts: [
      { label: "Interest on Drawings 31 March 2xx5 (€/£)", answer: 1125 },
      { label: "Interest on Drawings 31 August 2xx5 (€/£)", answer: 333 },
      { label: "Salary (€/£)", answer: 15000 },
      { label: "Profit share (€/£)", answer: 91431 },
    ],
  },

  // --- Q13 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "You are an accountant working at a mid-sized firm. You are preparing the financial statements of Northline Manufacturing (\"NORTHLINE\"). During the preparation, you notice that there are significant discrepancies in inventory values, and the finance manager of NORTHLINE has requested that you adjust the figures to reflect a higher inventory valuation. They suggest that this adjustment will help NORTHLINE secure a loan from the bank.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the following best describes the ethical implications of your client's request and an appropriate response.",
    options: {
      A: "This is a threat to objectivity, but you should comply with the client's request to maintain a good business relationship",
      B: "This is a threat to professional competence, and you should document the discrepancy, proceed with the client's instructions, and notify your manager upon their return",
      C: "This is a threat to integrity and professional behaviour, and you should refuse to adjust the inventory values, explaining the importance of accurate financial reporting",
      D: "This is a threat to professional behaviour, and you should immediately inform the bank of the client's potential misrepresentation to protect the firm's reputation",
    },
    correctAnswer: "C",
  },

  // --- Q14 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following are enhancing qualitative characteristics of useful financial information according to the Conceptual Framework for Financial Reporting.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Comparability",
      B: "Relevance",
      C: "Timeliness",
      D: "Verifiability",
    },
    correctAnswer: ["A", "C", "D"],
  },

  // --- Q15 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following are key roles of the International Accounting Standards Board (IASB).<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "To establish a global framework for the preparation and presentation of financial statements",
      B: "To create mandatory guidelines for company tax policies",
      C: "To ensure transparency and comparability of financial statements across different countries",
      D: "To supervise the enforcement of accounting standards in all member countries",
    },
    correctAnswer: ["A", "C"],
  },

  // --- Q16 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "GreenSpace Ltd (\"GREENSPACE\") conducted its year-end stocktake on 31 December 2xx5, and the value of inventory counted came to €/£ 600,000. After the stocktake was completed, it was discovered that a delivery of inventory worth €/£ 20,000 had been received on the same day but had not been included in the count. Additionally, stock that had been purchased in October 2xx5 at a cost of €/£ 40,000 was sold on 5 January 2xx6 for €/£ 28,000.<br><br>" +
      "<strong>Requirement:</strong> Calculate the value of the closing inventory to be included in the statement of financial position of GREENSPACE as at 31 December 2xx5.",
    answer: 608000,
  },

  // --- Q17 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Foxtil Ltd (\"FOXTIL\") discovered that its accounts receivable balance had been overstated by a material amount of €/£ 150,000 in the financial statements for the year ended 31 December 2xx4. This arose due to an error in recording sales. This error has resulted in FOXTIL's profit and receivables being overstated in 2xx4. You are now preparing the financial statements for the year ended 31 December 2xx5.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the following treatments is correct in relation to the error under IAS 8 Accounting policies, changes in accounting estimates and errors.",
    options: {
      A: "Adjust the sales revenue in the 2xx5 financial statements with a corresponding reduction in accounts receivable and profit",
      B: "Restate the retained earnings and accounts receivable for 2xx4 in the 2xx5 financial statements and adjust the 2xx4 comparatives",
      C: "Report the error in the 2xx5 financial statements as a non-adjusting event, as the error occurred in a prior period and does not affect the current year",
      D: "Ignore the error as it does not significantly impact the financial position of FOXTIL",
    },
    correctAnswer: "B",
  },

  // --- Q18 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "Orion Ltd (\"ORION\") had an over-provision of tax brought forward from the year ended 31 December 2xx4 amounting to €/£ 4,500. The corporation tax charge estimated for the year ended 31 December 2xx5 is €/£ 85,000.<br><br>" +
      "<strong>Requirement:</strong> Calculate the amount to be included in the statement of profit or loss in relation to tax for the year ended 31 December 2xx5. Use the minus sign \"-\" to indicate a credit figure.",
    answer: 80500,
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 5,
    questionText:
      "Noram Ltd (\"NORAM\") operates in the retail distribution industry. Set out below is the statement of financial position for NORAM as at 31 December 2xx5 including the prior year ended 31 December 2xx4 comparatives." +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2xx5 €/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2xx4 €/£</th></tr>" +
        "<tr><td colspan='3' style='padding:4px 8px;border:1px solid #ccc'><strong>Non-current assets</strong></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Property, plant and equipment</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>91,681</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>87,250</td></tr>" +
        "<tr><td colspan='3' style='padding:4px 8px;border:1px solid #ccc'><strong>Current assets</strong></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Inventories</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>22,590</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>20,730</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Trade receivables</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>18,760</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>16,540</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Bank deposits</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>0</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Cash</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>5,720</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>0</td></tr>" +
        "<tr><td colspan='3' style='padding:4px 8px;border:1px solid #ccc'><strong>Equity</strong></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Share capital (€/£ 0.50 each)</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>70,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>58,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Share premium</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>6,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>0</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Revaluation surplus</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>4,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Retained earnings</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>16,251</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>11,746</td></tr>" +
        "<tr><td colspan='3' style='padding:4px 8px;border:1px solid #ccc'><strong>Non-current liabilities</strong></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>3% Debentures</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>22,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>10,500</td></tr>" +
        "<tr><td colspan='3' style='padding:4px 8px;border:1px solid #ccc'><strong>Current liabilities</strong></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Overdraft</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>0</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>20,134</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Trade payables</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>20,640</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>18,630</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Current tax payable</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,860</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,510</td></tr>" +
      "</table>" +
      "<strong>Additional Information:</strong><br>" +
      "1. Depreciation for the year ended 31 December 2xx5 was €/£ 4,820;<br>" +
      "2. Plant with a carrying value of €/£ 9,160 was sold during 2xx5 generating a loss on disposal of €/£ 2,690;<br>" +
      "3. A revaluation gain was recognised in 2xx5 in relation to land owned by NORAM;<br>" +
      "4. Profit for the year ended 31 December 2xx5 was €/£ 18,825.<br><br>" +
      "<strong>Requirement (Q19):</strong> Complete the investing activities section of NORAM's statement of cash flows for the year ended 31 December 2xx5. Enter positive or negative values as appropriate.",
    parts: [
      { label: "Payments to acquire Property, Plant & Equipment (€/£ — negative)", answer: -17411 },
      { label: "Receipts from sale of Property, Plant & Equipment (€/£)", answer: 6470 },
      { label: "Investment in Bank Deposits (€/£ — negative)", answer: -3000 },
      { label: "Net cash flow from investing activities (€/£ — negative)", answer: -13941 },
    ],
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 4,
    questionText:
      "Using the same NORAM information as in Question 19 above.<br><br>" +
      "<strong>Requirement:</strong> Complete the financing activities section of NORAM's statement of cash flows for the year ended 31 December 2xx5. Enter positive or negative values as appropriate.",
    parts: [
      { label: "Debentures issued (€/£)", answer: 11500 },
      { label: "Proceeds from issue of shares (€/£)", answer: 18000 },
      { label: "Dividends paid (€/£ — negative)", answer: -14320 },
      { label: "Net cash flow from financing activities (€/£)", answer: 15180 },
    ],
  },

  // --- Q21 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Determine how a company should account for an investment property that is measured at cost in its financial statements in accordance with IAS 40 Investment property.",
    options: {
      A: "Depreciate the investment property over its useful life and test for impairment when indicators of impairment exist",
      B: "Measure the investment property at fair value and recognise any changes in fair value in profit or loss",
      C: "Revalue the investment property annually and recognise gains in equity",
      D: "Measure the investment property at cost and do not recognise any depreciation",
    },
    correctAnswer: "A",
  },

  // --- Q22 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Medica Plc (\"MEDICA\") has prepared its financial statements for the year ended 31 December 2xx5. The financial statements will be approved by the directors on 15 March 2xx6. The following events took place:<br>" +
      "1. In February 2xx6, MEDICA discovered a data breach that occurred in December 2xx5, exposing customer information. Legal claims amounting to €/£ 350,000 have since been filed.<br>" +
      "2. In January 2xx6, the government announced new legislation that will mean that one of MEDICA's products will become illegal if not adapted, costing €/£ 400,000.<br>" +
      "3. In March 2xx6, equipment with a carrying value of €/£ 200,000 on 31 December 2xx5, which had been damaged in January 2xx6, was sold for €/£ 50,000.<br>" +
      "4. A new competitor entered the market in January 2xx6, significantly affecting MEDICA's market share and requiring them to re-structure a major division in 2xx6.<br><br>" +
      "All amounts are considered to be material.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the following would be treated as a non-adjusting event after the reporting date, in accordance with IAS 10 Events after the reporting period.",
    options: {
      A: "None of the above",
      B: "2, 3 and 4 only",
      C: "2 and 3 only",
      D: "2 only",
    },
    correctAnswer: "B",
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Trey Ltd (\"TREY\") is preparing its financial statements for the year ended 31 December 2xx5. During the year, TREY decided to change the method used to value its inventory from the First-In, First-Out (FIFO) method to the Weighted Average Cost method. This change was made to provide more relevant and reliable information to the users of the financial statements.<br><br>" +
      "<strong>Requirement:</strong> Determine how TREY should account for the change in its financial statements for the year ended 31 December 2xx5 in accordance with IAS 8 Accounting policies, changes in accounting estimates and errors.",
    options: {
      A: "Adjust the current period profit or loss to reflect the change in accounting policy and disclose the change in the financial statements",
      B: "Retrospectively apply the new accounting policy by adjusting the comparative amounts for the prior period and provide a disclosure note explaining the change",
      C: "Apply the new accounting policy prospectively from 1 January 2xx5 and disclose the reason for the change in a note to the financial statements",
      D: "Apply the change to the current period only and disclose the impact on retained earnings in the current year",
    },
    correctAnswer: "B",
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "On 1 January 2xx5, Rayner Ltd (\"RAYNER\") entered into a three-year lease contract for the use of office equipment. The agreement requires RAYNER to make an annual payment of €/£ 40,000 on 31 December each year, with the first payment made on 31 December 2xx5. RAYNER also made an upfront payment of €/£ 5,000 as part of the contract and incurred legal fees of €/£ 1,500 related to the lease. The interest rate implicit in the lease is 6%. The present value of the lease payments at the inception of the lease was €/£ 112,800.<br><br>" +
      "<strong>Requirement (Q24):</strong> Calculate the right-of-use asset to be capitalised on the statement of financial position of RAYNER as at 1 January 2xx5.",
    answer: 119300,
  },

  // --- Q25 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "Using the same RAYNER information as in Question 24 above.<br><br>" +
      "<strong>Requirement:</strong> Calculate the following values that should be included in the financial statements of RAYNER for the year ended 31 December 2xx5.",
    parts: [
      { label: "Finance cost SPLOCI (€/£)", answer: 6768 },
      { label: "Total lease liability SOFP (€/£)", answer: 79568 },
    ],
  },

  // --- Q26 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "On 1 February 2xx5, Blue (\"BLUE\") purchased equipment for €/£ 80,000 cash. On the same date, BLUE received a €/£ 25,000 government grant to assist with the acquisition of the equipment. The equipment has an expected useful life of 8 years and a nil residual value. It is the policy of BLUE to charge a full year's depreciation in the year of purchase. The company's policy is to treat government grants as deferred income. To date, BLUE has met all government conditions relating to the grant received.<br><br>" +
      "<strong>Requirement:</strong> Calculate the following values that should be included in the financial statements of BLUE for the year ended 31 December 2xx5.",
    parts: [
      { label: "Depreciation expense SPLOCI (€/£)", answer: 10000 },
      { label: "Grant income SPLOCI (€/£)", answer: 3125 },
      { label: "Grant — current liability SOFP (€/£)", answer: 3125 },
      { label: "Grant — non-current liability SOFP (€/£)", answer: 18750 },
    ],
  },

  // --- Q27 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Identify which of the following is the definition of an asset in accordance with the IASB's conceptual framework for financial reporting.",
    options: {
      A: "An asset is a resource owned by an entity that has measurable value",
      B: "An asset is a present economic resource controlled by the entity as a result of past events",
      C: "An asset is a potential source of future economic benefits owned by an entity",
      D: "An asset is any item that provides future economic benefits and is held by the entity",
    },
    correctAnswer: "B",
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "Emily, a sole trader, conducted her inventory count on 7 January 2xx6 and valued the inventory at €/£ 62,000 at this date. Emily sold goods for €/£ 15,000 on 3 January 2xx6 and made purchases of €/£ 9,000 on 4 January 2xx6. No other transactions took place since Emily's year-end of 31 December 2xx5. Emily applies a 25% mark-up to all sales.<br><br>" +
      "<strong>Requirement:</strong> Calculate the value of Emily's inventory as at 31 December 2xx5.",
    answer: 65000,
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Garson Ltd (\"GARSON\") has produced the following extract from its statement of cash flows:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'>Cash flows from Operating Activities</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Profit for the year</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>250,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Adjustments for:</td><td></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Depreciation</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>90,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Profit on sale of equipment</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>(5,200)</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Increase in inventory</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>28,500</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Increase in trade payables</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>22,750</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'><strong>Cash Generated from Operations</strong></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'><strong>386,050</strong></td></tr>" +
      "</table>" +
      "<strong>Requirement:</strong> Identify which of the following statements is / are true.",
    options: {
      A: "Depreciation should be subtracted from profit, not added to profit",
      B: "Profit on sale of equipment should be added to profit, not subtracted from profit",
      C: "Increase in inventory should be subtracted from profit, not added to profit",
      D: "Increase in trade payables should be subtracted from profit, not added to profit",
    },
    correctAnswer: "C",
  },

  // --- Q30 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "Identify which of the following best describes the definition of \"cash and cash equivalents\" in accordance with IAS 7 Statement of cash flows.",
    options: {
      A: "Cash and cash equivalents comprise physical currency and coins held by the entity",
      B: "Cash and cash equivalents comprise physical currency, demand deposits, and short-term, highly liquid investments with maturities of three months or less",
      C: "Cash and cash equivalents comprise physical currency, demand deposits, and long-term fixed deposits exceeding one year",
      D: "Cash and cash equivalents comprise physical currency, coins, demand deposits, and trade receivables that can be converted to cash",
    },
    correctAnswer: "B",
  },

  // --- Q31 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "single",
    marks: 2,
    questionText:
      "The following information has been extracted from the financial records of Maven Ltd (\"MAVEN\") for the financial year ended 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Purchases</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>275,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Trade discount received</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>12,500</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Opening inventory</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>64,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Administration costs</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>42,500</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Closing inventory</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>72,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Import duties incurred on goods purchased</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>5,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Head office rent and rates</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,500</td></tr>" +
      "</table>" +
      "<strong>Requirement:</strong> Calculate the cost of sales figure which should be included in the statement of profit or loss of MAVEN for the year ended 31 December 2xx5.",
    options: {
      A: "€/£ 262,000",
      B: "€/£ 259,500",
      C: "€/£ 254,500",
      D: "€/£ 284,500",
    },
    correctAnswer: "B",
  },

  // --- Q32 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Mark, a sole trader, purchased new machinery in May 2xx5 for cash of €/£ 80,000. The cash payment was correctly accounted for. In Mark's draft statement of financial position as at 31 December 2xx5, the machinery has been incorrectly included under administrative expenses in the statement of profit or loss instead of being capitalised as a non-current asset.<br><br>" +
      "<strong>Requirement:</strong> Determine the impact of making the appropriate adjustment to Mark's statement of financial position.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "A decrease in current liabilities and a decrease in retained earnings",
      B: "An increase in net current assets and an increase in profit",
      C: "An increase in non-current assets and a decrease in expenses",
      D: "An increase in profit and a decrease in current liabilities",
    },
    correctAnswer: ["C"],
  },

  // --- Q33 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following could explain why an entity's trial balance does not balance.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "A credit purchase of €/£ 2,000 had been correctly recorded as an expense but debited to the cash account in error",
      B: "A bank loan repayment of €/£ 5,000 had not been accounted for at year end",
      C: "A payment received from a customer of €/£ 1,200 had been correctly credited to trade receivables but no corresponding debit was made to the bank account",
      D: "A closing inventory adjustment of €/£ 3,500 had been omitted from the financial statements",
      E: "A rent payment of €/£ 750 had been recorded as a credit to the bank but not debited to the rent expense account",
    },
    correctAnswer: ["A", "C", "E"],
  },

  // --- Q34 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "The draft accounts of Oliver Harper did not balance at 31 December 2xx5, and a suspense account was opened to record the difference.<br>" +
      "1. A sale of €/£ 18,500 was correctly recorded in the statement of profit or loss but only €/£ 17,500 had been posted to the trade receivables account.<br>" +
      "2. A payment of €/£ 3,200 from a customer had been correctly entered in the cash book but was omitted from the trade receivables account.<br>" +
      "3. A sales invoice for €/£ 2,750 had been recorded in the trade receivables account as €/£ 2,570.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to correct any errors and appropriately reflect this information in the financial statements for the year ended 31 December 2xx5.",
    parts: [
      { label: "Trade receivables SOFP — net Debit (€/£)", answer: 2020 },
      { label: "Suspense — net Credit (€/£)", answer: 2020 },
    ],
  },

  // --- Q35 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Financial information should be useful for decision-making in accordance with the IASB's Conceptual Framework for Financial Reporting.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the following are fundamental qualitative characteristics that make financial information useful for decision-making.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Understandability",
      B: "Comparability",
      C: "Relevance",
      D: "Faithful representation",
      E: "Verifiability",
    },
    correctAnswer: ["C", "D"],
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements is / are true.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "A sole trader is personally liable for the debts of the business",
      B: "The shareholders of a limited liability company are personally liable for the company's debts",
      C: "A partnership ceases to exist if one of the partners leaves or dies, unless otherwise agreed",
      D: "A limited liability company can be sued or sue in its own name",
    },
    correctAnswer: ["A", "C", "D"],
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "Inventory counted on 31 December 2xx5 for Jomu Ltd (\"JOMU\") amounted to a total cost of €/£ 97,000. This includes inventory, with a cost of €/£ 13,000 excluding delivery costs of €/£ 800, that was recently damaged. It has been estimated that this inventory will be sold in January 2xx6 for €/£ 8,000 with expected costs to sell of €/£ 180.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to reflect this information in the financial statements of JOMU for the year ended 31 December 2xx5.",
    parts: [
      { label: "Inventory SOFP — Credit (€/£)", answer: 5980 },
      { label: "Inventory Write-Off Expense SPLOCI — Debit (€/£)", answer: 5980 },
    ],
  },

  // --- Q38 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements about the treatment of VAT is correct.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "VAT on purchases is added to the cost of inventory if the entity is not VAT-registered",
      B: "VAT recoverable from Revenue / HMRC is included in sales in the statement of profit or loss",
      C: "VAT on expenses for standard-rated supplies is recoverable from Revenue / HMRC if the entity is VAT-registered",
      D: "VAT on sales is recorded as a liability in the statement of financial position",
      E: "Output VAT collected is treated as an expense in the statement of profit or loss",
    },
    correctAnswer: ["A", "C", "D"],
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "You provide accounting assistance to Optol Limited (\"OPTOL\"). On 1 January 2xx5, the trade payables control account of OPTOL had an opening credit balance of €/£ 84,280." +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Cash purchases</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>92,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Discounts allowed</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>7,650</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Purchases on credit</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>328,700</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Purchases on credit returned</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>27,560</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Discounts received</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>8,610</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Customer returns</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,730</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Payments to suppliers</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>290,630</td></tr>" +
      "</table>" +
      "<strong>Requirement:</strong> Calculate the closing balance on the trade payables control account as at 31 December 2xx5. Your answer should be entered as a positive value.",
    answer: 86180,
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "numeric",
    marks: 2,
    questionText:
      "During a bank reconciliation process for Harris Ltd, the following reconciling items are identified:<br>" +
      "• an uncredited deposit of €/£ 1,200;<br>" +
      "• an unpresented cheque of €/£ 600; and<br>" +
      "• a bank error where a payment of €/£ 150 was recorded as €/£ 15.<br><br>" +
      "The bank statement balance shows a credit balance of €/£ 4,000.<br><br>" +
      "<strong>Requirement:</strong> Calculate the balance on the company's cash book.",
    answer: 4465,
  },

  // --- Q41 ------------------------------------------------------------------
  {
    section: "Sample Paper 2",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "On 31 October 2xx5, Telfin Ltd (\"TELFIN\") entered into a 12-month lease contract for office furniture. Under the terms of the lease, TELFIN is required to make quarterly payments in arrears of €/£ 1,500, starting on 31 January 2xx6. However, the first payment was made early on 1 December 2xx5 and was correctly journalled out of the bank but incorrectly allocated in full to sundry expenses. TELFIN adopts a policy of not capitalising leased assets where the exemption criteria are met.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to reflect this information in the financial statements of TELFIN for the year ended 31 December 2xx5.",
    parts: [
      { label: "Lease expense SPLOCI — Debit (€/£)", answer: 1000 },
      { label: "Sundry expenses SPLOCI — Credit (€/£)", answer: 1500 },
      { label: "Prepayment SOFP — Debit (€/£)", answer: 500 },
    ],
  },

];
