const facctgSamplePaper1 = [

  // --- Q1 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "The following balances have been extracted from the records of DERRY at 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Property at cost as at 1 January 2xx5</td><td style='padding:4px 8px;border:1px solid #ccc'></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>12,700,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Accumulated depreciation: Property as at 1 January 2xx5</td><td style='padding:4px 8px;border:1px solid #ccc'></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,778,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Plant and equipment at cost at 1 January 2xx5</td><td style='padding:4px 8px;border:1px solid #ccc'></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,275,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Accumulated depreciation: Plant &amp; equipment as at 1 January 2xx5</td><td style='padding:4px 8px;border:1px solid #ccc'></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,892,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Motor vehicles at cost as at 1 January 2xx5</td><td style='padding:4px 8px;border:1px solid #ccc'></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>290,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Accumulated depreciation: Motor vehicles as at 1 January 2xx5</td><td style='padding:4px 8px;border:1px solid #ccc'></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>139,000</td></tr>" +
      "</table>" +
      "Depreciation is charged as follows:<br>" +
      "(i) Buildings are depreciated over 50 years on a straight-line basis;<br>" +
      "(ii) Plant and equipment is depreciated at 25% per annum on a reducing balance basis;<br>" +
      "(iii) Motor vehicles are depreciated at 20% per annum on a straight-line basis.<br><br>" +
      "<strong>Requirement:</strong> Calculate the depreciation expense that should be charged in each asset class for the year ended 31 December 2xx5.",
    parts: [
      { label: "Buildings (€/£)", answer: 254000 },
      { label: "Plant and equipment (€/£)", answer: 345750 },
      { label: "Motor vehicles (€/£)", answer: 58000 },
    ],
  },

  // --- Q2 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "The following balances have been extracted from the records of Astos Ltd (ASTOS) at 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Trade receivables</td><td style='padding:4px 8px;border:1px solid #ccc'></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>420,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Provision for doubtful debts</td><td style='padding:4px 8px;border:1px solid #ccc'></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>27,200</td></tr>" +
      "</table>" +
      "The management of ASTOS have decided to maintain a doubtful debt provision of 4% of trade receivables at 31 December 2xx5. Bad debts and movements in the doubtful debt provision are recognised in administrative expenses.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to reflect this information in the financial statements of ASTOS for the year ended 31 December 2xx5.",
    parts: [
      { label: "Administrative expenses — Debit or Credit? (enter 1=Debit, 2=Credit)", answer: 1 },
      { label: "Administrative expenses (€/£)", answer: 10400 },
      { label: "Provision for doubtful receivables — Debit or Credit? (enter 1=Debit, 2=Credit)", answer: 2 },
      { label: "Provision for doubtful receivables (€/£)", answer: 10400 },
    ],
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "Lasoo Ltd (LASOO) purchased a new piece of equipment at a cost of €/£ 35,000 on 1 January 2xx5. A government grant was received to fund the entire cost of the equipment. The grant received was debited to the bank account and the corresponding credit entry was recorded in the suspense account. Where possible, it is the policy of LASOO to treat government grants as deferred income. The depreciation policy of LASOO states that equipment should be depreciated at 25% per annum on a straight-line basis.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to appropriately reflect this information in the financial statements for the year ended 31 December 2xx5.",
    parts: [
      { label: "Suspense — Debit (€/£)", answer: 35000 },
      { label: "Grant liability SOFP — Credit (€/£)", answer: 26250 },
      { label: "Other income SPLOCI — Credit (€/£)", answer: 8750 },
    ],
  },

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Identify which of the following statements is correct in relation to the statement of changes in equity.",
    options: {
      A: "The statement of changes in equity shows the total revenue and profit generated during the period",
      B: "The statement of changes in equity shows the increase or decrease in net assets or shareholder wealth during the period",
      C: "The statement of changes in equity can be used in order to determine the total cash inflows or outflows during the period",
      D: "The statement of changes in equity represents the increase in the fair value of the non-current assets during the period",
    },
    correctAnswer: "B",
  },

  // --- Q5 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "The following balances have been extracted from the records of Stoday Ltd (STODAY) at 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Provision</td><td style='padding:4px 8px;border:1px solid #ccc'></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>40,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Tax</td><td style='padding:4px 8px;border:1px solid #ccc'></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,500</td></tr>" +
      "</table>" +
      "The provision balance relates to a notification received on 11 November 2xx5 that STODAY is being sued for €/£ 40,000 in relation to an alleged infringement of copyright. STODAY's legal team has recently reviewed the case and feel that there is a 20% chance of STODAY being found liable. Irrecoverable legal fees to date are estimated to be €/£ 5,000 and if the case is lost the legal team estimate that a payout of €/£ 50,000 will be required.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to appropriately reflect this information in the financial statements of STODAY for the year ended 31 December 2xx5.",
    parts: [
      { label: "Expenses SPLOCI — Debit or Credit? (enter 1=Debit, 2=Credit)", answer: 1 },
      { label: "Expenses SPLOCI (€/£) — note: enter the net adjustment (existing provision is 40,000; correct figure is 5,000)", answer: 35000 },
      { label: "Provisions SOFP — Debit or Credit? (enter 1=Debit, 2=Credit)", answer: 2 },
      { label: "Provisions SOFP (€/£)", answer: 35000 },
    ],
  },

  // --- Q6 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "The following balances have been extracted from the records of Stoday Ltd (STODAY) at 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Provision</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>40,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Tax</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,500</td></tr>" +
      "</table>" +
      "The corporation tax charge for the year ended 31 December 2xx5 is estimated to be €/£ 34,570. The tax amount provided of €/£ 3,500 relates to an over/under provision in respect of the tax charge for the prior year ended 31 December 2xx4.<br><br>" +
      "<strong>Requirement:</strong> Calculate the tax expense that should be included in the statement of profit or loss of STODAY for the year ended 31 December 2xx5.",
    answer: 38070,
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "The sales of Trastor Ltd (TRASTOR) on 1 December 2xx5 totalled €/£ 28,800 inclusive of VAT at 20%. These sales have been recorded in the financial statements at their gross value. TRASTOR is a VAT registered business.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to appropriately reflect this information in the financial statements of TRASTOR for the year ended 31 December 2xx5.",
    parts: [
      { label: "Revenue SPLOCI — Debit or Credit? (enter 1=Debit, 2=Credit)", answer: 1 },
      { label: "Revenue SPLOCI (€/£)", answer: 4800 },
      { label: "VAT SOFP — Debit or Credit? (enter 1=Debit, 2=Credit)", answer: 2 },
      { label: "VAT SOFP (€/£)", answer: 4800 },
    ],
  },

  // --- Q8 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "You are a trainee accountant with a large accountancy practice. You are working on the audit of Novoy Productions Ltd (\"NOVOY\"), a television company. In recognition of your hard work, they have offered you a paid extra part in one of their most popular TV shows. Management have also indicated that there could be more opportunities for paid work.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the following correctly describes the threat to compliance with the fundamental principles of Chartered Accountants Ireland Code of Ethics and the action that you should take in respect of the offer from NOVOY.",
    options: {
      A: "The offer may create an advocacy threat but the threat is reduced due to the small value so the offer can be accepted",
      B: "The offer may create a familiarity threat but the threat is reduced due to your lack of seniority in the firm so the offer can be accepted",
      C: "The offer may create a familiarity threat and you should inform your manager of NOVOY's offer and politely reject it",
      D: "The offer may create a self-review threat and you should inform your manager of NOVOY's offer and politely reject it",
    },
    correctAnswer: "C",
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 6,
    questionText:
      "IGP Ltd (\"IGP\") is preparing its statement of cash flows. IGP's statement of financial position as at 31 December 2xx5 and its statement of profit or loss for the year ended 31 December 2xx5 are set out below." +
      "<br><br><strong>IGP Ltd: Statement of Financial Position as at 31 December 2xx5</strong>" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2xx5 €/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2xx4 €/£</th></tr>" +
        "<tr><td colspan='3' style='padding:4px 8px;border:1px solid #ccc'><strong>ASSETS — Non-current assets</strong></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Property, plant and equipment</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,495,570</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,830,750</td></tr>" +
        "<tr><td colspan='3' style='padding:4px 8px;border:1px solid #ccc'><strong>Current assets</strong></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Inventories</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>527,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>426,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Trade receivables</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>327,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>167,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Cash and cash equivalents</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>5,380</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>27,950</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'><strong>Total assets</strong></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'><strong>4,354,950</strong></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'><strong>4,451,700</strong></td></tr>" +
        "<tr><td colspan='3' style='padding:4px 8px;border:1px solid #ccc'><strong>EQUITY AND LIABILITIES — Equity</strong></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Ordinary share capital (€/£ 1 per share)</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,250,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,000,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Share premium</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>72,500</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>nil</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Retained earnings</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,970,750</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,155,200</td></tr>" +
        "<tr><td colspan='3' style='padding:4px 8px;border:1px solid #ccc'><strong>Non-current liabilities</strong></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Lease</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>760,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>895,000</td></tr>" +
        "<tr><td colspan='3' style='padding:4px 8px;border:1px solid #ccc'><strong>Current liabilities</strong></td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Trade payables</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>147,500</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>225,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Lease</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>135,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>127,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Current tax payable</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>14,200</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>27,500</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Dividend payable</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>5,000</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>22,000</td></tr>" +
      "</table>" +
      "<strong>IGP Ltd: Statement of Profit or Loss for the year ended 31 December 2xx5</strong>" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Revenue</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,790,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Cost of sales</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>(725,050)</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Gross profit</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,064,950</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Administrative expenses</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>(529,600)</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Selling &amp; distribution costs</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>(626,750)</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Finance cost</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>(69,250)</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Loss on disposal of non-current asset</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>(26,000)</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Interest income</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>13,900</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Loss before tax</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>(172,750)</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Tax expense</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>(11,700)</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'><strong>Loss for the year</strong></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'><strong>(184,450)</strong></td></tr>" +
      "</table>" +
      "<strong>Additional Information:</strong><br>" +
      "1. Depreciation for the year was €/£ 269,450;<br>" +
      "2. The finance cost includes €/£ 26,000 of lease interest that was paid in 2xx5;<br>" +
      "3. The share capital of IGP was fully paid up at 31 December 2xx5;<br>" +
      "4. The Board of Directors approved the 2xx5 final dividend of ten cents/pence per share on 15 February 2xx6.<br><br>" +
      "<strong>Requirement (Q9):</strong> Complete the operating activities section of IGP's statement of cash flows for the year ended 31 December 2xx5. Enter positive or negative values as appropriate.",
    parts: [
      { label: "Cash received from customers (€/£)", answer: 1630000 },
      { label: "Cash paid to suppliers (€/£ — negative)", answer: -903550 },
      { label: "Cash paid for other expenses (€/£ — negative)", answer: -886900 },
      { label: "Interest paid (€/£ — negative)", answer: -69250 },
      { label: "Income taxes paid (€/£ — negative)", answer: -25000 },
      { label: "Net cash generated from operating activities (€/£ — negative)", answer: -254700 },
    ],
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 4,
    questionText:
      "Using the same IGP Ltd information as in Question 9 above.<br><br>" +
      "<strong>Requirement:</strong> Complete the financing activities section of IGP's statement of cash flows for the year ended 31 December 2xx5. Enter positive or negative values as appropriate.",
    parts: [
      { label: "Lease repayments (€/£ — negative)", answer: -127000 },
      { label: "Proceeds from issue of shares (€/£)", answer: 322500 },
      { label: "Dividends paid (€/£ — negative)", answer: -17000 },
      { label: "Net cash flow from financing activities (€/£)", answer: 178500 },
    ],
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Identify which of the following statements is correct in relation to cash basis of accounting and accruals accounting.",
    options: {
      A: "Accruals accounting always results in a greater profit figure than cash based accounting",
      B: "Accruals accounting records payments and receipts as they occur and does not consider the accounting period to which they relate",
      C: "Cash based accounting records payments and receipts as they occur and does not consider the accounting period to which they relate",
      D: "Cash based accounting is required for entities reporting under International Financial Reporting Standards",
    },
    correctAnswer: "C",
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "<strong>Partnership Bank Statement</strong>" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='padding:4px 8px;border:1px solid #ccc'>Date</th><th style='padding:4px 8px;border:1px solid #ccc'>Detail</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Debit €/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Credit €/£</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Balance €/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>01.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Balance as at 1 December 2xx5</td><td></td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>32,978</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>03.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Cheque 1788</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,790</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>31,188</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>05.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Lodgement 0027</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>12,500</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>43,688</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>07.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Electricity DD - December 2xx5</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>725</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>42,963</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>12.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Lodgement 0028</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>5,925</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>48,888</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>15.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Blogger Sponsorship</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,500</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>51,388</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>17.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Bank Interest</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>375</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>51,763</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>20.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Cheque 1790</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,250</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>49,513</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>28.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Lodgement 0028 - Dishonoured Cheque</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>750</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>48,763</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>29.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Insurance DD</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>5,000</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>43,763</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>29.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Cheque 1793</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,250</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>40,513</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>31.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Cheque 1791</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>300</td><td></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>40,213</td></tr>" +
      "</table>" +
      "<strong>Partnership Cash Book</strong>" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='padding:4px 8px;border:1px solid #ccc'>Date</th><th style='padding:4px 8px;border:1px solid #ccc'>Details</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th><th style='padding:4px 8px;border:1px solid #ccc'>Date</th><th style='padding:4px 8px;border:1px solid #ccc'>Details</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>01.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Balance B/Fwd</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>31,188</td><td style='padding:4px 8px;border:1px solid #ccc'>01.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Cheque 1789</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>1,250</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>04.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Lodgement 0027</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>12,500</td><td style='padding:4px 8px;border:1px solid #ccc'>10.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Cheque 1790</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,250</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>12.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Lodgement 0028</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>5,925</td><td style='padding:4px 8px;border:1px solid #ccc'>12.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Cheque 1791</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>300</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>28.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Lodgement 0029</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>450</td><td style='padding:4px 8px;border:1px solid #ccc'>12.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Cheque 1792</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>20,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>31.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Lodgement 0030</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>6,000</td><td style='padding:4px 8px;border:1px solid #ccc'>13.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Cheque 1793</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,520</td></tr>" +
        "<tr><td></td><td></td><td></td><td style='padding:4px 8px;border:1px solid #ccc'>28.12.x5</td><td style='padding:4px 8px;border:1px solid #ccc'>Cheque 1794</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>12,500</td></tr>" +
      "</table>" +
      "<em>Note: Upon review it is established that all amounts in the bank statement are correct.</em><br><br>" +
      "<strong>Requirement:</strong> Prepare the bank reconciliation for the partnership at 31 December 2xx5. Enter positive or negative values as appropriate.",
    parts: [
      { label: "Balance as per bank statement 31 December 2xx5 (€/£)", answer: 40213 },
      { label: "Total outstanding lodgements (€/£)", answer: 6450 },
      { label: "Total outstanding cheques (€/£ — negative)", answer: -33750 },
      { label: "Balance as per cash book at 31 December 2xx5 (€/£)", answer: 12913 },
    ],
  },

  // --- Q13 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the items below is a fundamental qualitative characteristic of financial statements.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Comparability",
      B: "Verifiability",
      C: "Faithful representation",
      D: "Materiality",
    },
    correctAnswer: ["C"],
  },

  // --- Q14 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 3,
    questionText:
      "DANIEL, EMMA and CLAIRE operate a partnership to the terms of the partnership agreement as of 1 January 2xx5. Each partner receives an annual salary of €/£ 20,000. Interest on cash drawings is charged at 2% per annum. DANIEL, EMMA and CLAIRE have a profit-sharing ratio of 2:3:1 respectively.<br><br>" +
      "During 2xx5 the partners decided to extract the following cash drawings to assist their own personal cash flow:<br>" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'>Partner</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>Cash Drawings</th><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'>Date</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>DANIEL</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£ 13,000</td><td style='padding:4px 8px;border:1px solid #ccc'>1 April 2xx5</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>EMMA</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£ 15,000</td><td style='padding:4px 8px;border:1px solid #ccc'>1 May 2xx5</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>CLAIRE</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£ 10,000</td><td style='padding:4px 8px;border:1px solid #ccc'>1 October 2xx5</td></tr>" +
      "</table>" +
      "The partnership generated a profit before tax of €/£ 219,000 for the year ended 31 December 2xx5. The tax rate is 15%.<br><br>" +
      "<strong>Requirement:</strong> Complete the information below to calculate the profit available for distribution to the partners for the year ended 31 December 2xx5. Enter positive or negative values as appropriate.",
    parts: [
      { label: "Profit for the year (€/£, after tax)", answer: 186150 },
      { label: "Interest on drawings (€/£)", answer: 445 },
      { label: "Salaries (€/£ — negative)", answer: -60000 },
      { label: "Profit for distribution (€/£)", answer: 126595 },
    ],
  },

  // --- Q15 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the items below is/are advantages of being a public limited company.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Costs involved with listing on the stock market and the costs of regulation",
      B: "Increased ability to raise funds through the issue of shares",
      C: "In the event of a liquidation the shareholders are liable for all debts of the company not the directors",
      D: "Increases public profile of the company and prestige within the business community",
    },
    correctAnswer: ["B", "D"],
  },

  // --- Q16 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the items below is/are objectives of the International Accounting Standards Board (IASB).<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "To develop, in the public interest, a single set of high quality, understandable, enforceable and globally accepted financial reporting standards",
      B: "To ensure that every set of financial statements is prepared using IFRSs",
      C: "To facilitate adoption of IFRSs, and convergence of national accounting standards and IFRSs",
      D: "To ensure that all listed entities comply with stock market listing rules",
    },
    correctAnswer: ["A", "C"],
  },

  // --- Q17 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "Adam Suitor decided to open a tailoring business on 1 January 2xx5 called Suitor's Suits (\"SUITS\"). The following information relates to the year ended 31 December 2xx5:<br>" +
      "1. The business was opened with Adam's savings of €/£ 50,000 and €/£ 15,000 gifted to Adam from his parents, all of which was lodged to the business bank account on 1 January 2xx5;<br>" +
      "2. Adam contributed a personal vehicle worth €/£ 10,000 to the business on 1 January 2xx5 which had a remaining useful life of 8 years and a residual value of €/£ 2,000;<br>" +
      "3. SUITS purchased a sewing machine at a cost of €/£ 20,000 on 1 January 2xx5. The machine is expected to have a useful life of five years. A full year's depreciation is charged in the year of acquisition;<br>" +
      "4. SUITS purchased raw materials costing €/£ 87,750. Adam used €/£ 5,000 of these materials to create suits as a gift for his brother's wedding in November 2xx5. A further €/£ 1,655 of the raw materials remained unsold at 31 December 2xx5.<br><br>" +
      "<strong>Requirement (Q17):</strong> Prepare the journal entry required to account for the capital introduced on 1 January 2xx5.",
    parts: [
      { label: "Bank SOFP — Debit (€/£)", answer: 65000 },
      { label: "Capital SOFP — Credit (€/£)", answer: 75000 },
      { label: "Motor vehicles carrying amount SOFP — Debit (€/£)", answer: 10000 },
    ],
  },

  // --- Q18 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Using the same SUITS information as in Question 17 above (Adam Suitor / Suitor's Suits).<br><br>" +
      "<strong>Requirement:</strong> Calculate the carrying amount of plant and equipment as at 31 December 2xx5.",
    answer: 25000,
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Using the same SUITS information as in Question 17 above (Adam Suitor / Suitor's Suits).<br><br>" +
      "<strong>Requirement:</strong> Calculate the cost of sales for SUITS for the year ended 31 December 2xx5.",
    answer: 81095,
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Identify which of the items below is NOT a measurement base used in International Financial Reporting Standards.",
    options: {
      A: "Historical cost",
      B: "Value in use",
      C: "Accruals basis",
      D: "Fair value",
    },
    correctAnswer: "C",
  },

  // --- Q21 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Donegal Limited (\"DONEGAL\"), a tweed making company, has several investment properties. DONEGAL applies the fair value model in respect of the investment properties and the cost model for all other property.<br><br>" +
      "On 1 January 2xx5, DONEGAL's administrative team moved into an office block which DONEGAL had previously rented to Sky Blue Ltd. The market value of the building at 1 January 2xx5 was €/£ 790,000 when it had a 20 year useful life, then increased to €/£ 820,000 by 31 December 2xx5.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the statements below correctly describes the accounting treatment for the office block.",
    options: {
      A: "The office block is an example of an investment property, and as such it should be valued at €/£ 820,000 as at 31 December 2xx5",
      B: "The office building is an owner-occupied investment property so should be valued at €/£ 790,000 at 31 December 2xx5 and not depreciated",
      C: "The office building should be treated at cost less depreciation from 1 January 2xx5 resulting in a carrying value of €/£ 750,500 at 31 December 2xx5",
      D: "The office block should have been treated at cost less depreciation to 1 January 2xx5 and revalued at 31 December 2xx5",
    },
    correctAnswer: "C",
  },

  // --- Q22 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "DONEGAL is building a new residential block that it intends to rent out. The build cost €/£ 1.2m and began on 1 November 2xx4 before being completed on 31 December 2xx5. No work was carried out in June 2xx5 as there was a dispute with the contractor. DONEGAL took out a loan of €/£ 1m specifically for this building at an interest rate of 5%.<br><br>" +
      "<strong>Requirement:</strong> Calculate the total interest to be capitalised for the year ended 31 December 2xx5 in accordance with IAS 23 Borrowing costs.",
    answer: 45833,
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "The remaining €/£ 200,000 to build the residential building was funded through a government grant for the installation of a carbon neutral heating system. The grant was received and recognised as a decrease in the carrying value of the system. The system came into use on 1 November 2xx5 and had a 20 year useful life. A full year of depreciation was correctly applied in the year to 31 December 2xx5. After testing the heating system, it was confirmed that the grant conditions had not been complied with.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to appropriately reflect this information in the financial statements of DONEGAL for the year ended 31 December 2xx5.",
    parts: [
      { label: "Depreciation SPLOCI — Debit (€/£)", answer: 10000 },
      { label: "PPE carrying amount SOFP — Debit (€/£)", answer: 190000 },
      { label: "Provisions SOFP — Credit (€/£)", answer: 200000 },
    ],
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 5,
    questionText:
      "The following is an extract from MCKEAG's statement of financial position as at 1 January 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'>Equity</th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Ordinary share capital (€/£ 1 per share)</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,250,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Retained earnings</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>3,275,898</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Revaluation surplus — Land</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>789,000</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'><strong>Total</strong></td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'><strong>6,314,898</strong></td></tr>" +
      "</table>" +
      "The draft profit for the year ended 31 December 2xx5 was recorded at €/£ 1,278,000. However, the following transactions which occurred during 2xx5 have not yet been accounted for:<br>" +
      "1. On 31 January 2xx5 MCKEAG issued 50,000 shares at a price of €/£ 1.75 per share. All shares were fully paid up at 31 December 2xx5;<br>" +
      "2. The Board proposed and approved an interim dividend payment of five cents/pence per share on 1 July 2xx5. Payment was made on 1 August 2xx5;<br>" +
      "3. The Board proposed a final dividend payment of ten cents/pence per share on 24 December 2xx5. The dividends were approved on 20 January 2xx6 and payment made on 1 February 2xx6;<br>" +
      "4. At 31 December 2xx5, land was professionally valued at €/£ 279,000 lower than its carrying value;<br>" +
      "5. MCKEAG historically carried its buildings at cost. In 2xx5 MCKEAG decided to change the accounting policy for buildings from the cost model to the revaluation model. At 31 December 2xx5, buildings were professionally valued at €/£ 129,000 higher than the carrying value.<br><br>" +
      "<strong>Requirement:</strong> Complete the statement of changes in equity extract of MCKEAG for the year ended 31 December 2xx5. Enter positive or negative values as appropriate.",
    parts: [
      { label: "Closing Share Capital (€/£)", answer: 2300000 },
      { label: "Closing Share Premium (€/£)", answer: 37500 },
      { label: "Closing Revaluation Surplus (€/£)", answer: 639000 },
      { label: "Closing Retained Earnings (€/£)", answer: 4438898 },
    ],
  },

  // --- Q25 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "GUDES leased a new manufacturing machine from 1 January 2xx5. The lease is for a period of four years with annual payments of €/£ 20,000 per annum payable in advance. The interest rate implicit in the lease is 7%. A three-year annuity of 2.624 and a four-year annuity of 3.387 should apply where relevant.<br><br>" +
      "<strong>Requirement:</strong> Calculate the total lease liability at 31 December 2xx5.",
    answer: 56154,
  },

  // --- Q26 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Identify which of the following correctly describes the exemptions from capitalising a lease under IFRS 16 Leases.",
    options: {
      A: "An exemption is allowed for leases that are more than five years in duration",
      B: "An exemption is allowed for leases with no up-front payments",
      C: "An exemption is allowed for short term or low-value leases",
      D: "An exemption is allowed for index-linked leases",
    },
    correctAnswer: "C",
  },

  // --- Q27 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Quaris Ltd (\"QUARIS\") has closing inventories of €/£ 310,000 at 31 December 2xx5. This includes an item that was purchased for €/£ 2,800 and delivered at a cost of €/£ 100 to QUARIS. The item was expected to be sold for €/£ 5,000 but a recent recession means that it is likely to be sold for €/£ 3,000 and will incur selling costs of €/£ 300 to do so.<br><br>" +
      "<strong>Requirement:</strong> Calculate the total value of QUARIS' closing inventories at 31 December 2xx5.",
    answer: 309800,
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the statements below correctly describes a change in accounting policy in accordance with IAS 8 Accounting policies, changes in accounting estimates and errors.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Heat and light costs that were previously charged as cost of sales are now shown under administrative expenses",
      B: "An item of plant that previously had a remaining useful life of six years is found to have a remaining useful life of five years with depreciation changes accordingly",
      C: "A provision recorded at €/£ 300,000 in the prior year financial statements is reduced to €/£ 250,000 in the current year financial statements",
      D: "A company that previously used the cost model for investment property now uses the fair value model",
    },
    correctAnswer: ["A", "D"],
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Lotis Ltd (\"LOTIS\") discovered on 1 February 2xx6 that a legal case that had been instigated against them on 12 October 2xx5 has now been dropped and will result in no payment. A material liability relating to the case of €/£ 500,000 was included in the financial statements at 31 December 2xx5.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the statements below correctly describe the correct treatment for the legal case in the financial statements to 31 December 2xx5.",
    options: {
      A: "This is a non-adjusting event and should be disclosed in the financial statements for the year ended 31 December 2xx5",
      B: "There is no impact on the financial statements to 31 December 2xx5 as the information will be reflected in the financial statements for the year ended 31 December 2xx6",
      C: "This is an adjusting event and should be disclosed in the financial statements for the year ended 31 December 2xx5",
      D: "This is an adjusting event and the liability should be adjusted to zero in the financial statements for the year ended 31 December 2xx5",
    },
    correctAnswer: "D",
  },

  // --- Q30 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "In the quarter ended 31 March 2xx5, Stormac Ltd (\"STORMAC\") made sales of €/£ 480,000 exclusive of VAT. In the same quarter the company made €/£ 230,476 of purchases including VAT. The VAT rate applicable is 21%.<br><br>" +
      "<strong>Requirement:</strong> Calculate the VAT asset / liability arising for the quarter ended 31 March 2xx5. If appropriate, use the minus sign to indicate a credit balance.",
    answer: -60800,
  },

  // --- Q31 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "The gross wages of Lano Ltd (\"LANO\") for the month of June 2xx5 amounted to €/£ 589,188. The employees' PRSI / national insurance and employer's PRSI / NIC were €/£ 41,279 and €/£ 38,421 respectively. These were calculated on 15 June 2xx5 and the employees were paid a total of €/£ 426,571 on 30 June 2xx5.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to reflect this information in the financial statements of LANO.",
    parts: [
      { label: "Wages expense — Debit (€/£)", answer: 627609 },
      { label: "Bank — Credit (€/£)", answer: 426571 },
      { label: "PAYE liability — Credit (€/£)", answer: 121338 },
      { label: "Employees' PRSI/NIC liability — Credit (€/£)", answer: 41279 },
      { label: "Employer's PRSI/NIC liability — Credit (€/£)", answer: 38421 },
    ],
  },

  // --- Q32 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Kesta Ltd (\"KESTA\") has a trade receivables balance of €/£ 132,983 on 1 January 2xx5. The following transactions took place during the year ended 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Credit sales</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>538,912</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Bad debt written off</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,750</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Cash received from credit customers</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>579,276</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Credit sales returns</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>4,920</td></tr>" +
      "</table>" +
      "<strong>Requirement:</strong> Calculate the trade receivables balance at 31 December 2xx5.",
    answer: 84949,
  },

  // --- Q33 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Identify which of the following correctly describes a receivables reconciliation.",
    options: {
      A: "The balance per the cash book is compared to the receivables control account to identify discrepancies",
      B: "The balance per the receivables control account is compared to the sales day book to identify discrepancies",
      C: "The balance per the receivables control account is compared to the receivables ledger to identify discrepancies",
      D: "The balance per the sales ledger is compared to the receivables ledger to identify discrepancies",
    },
    correctAnswer: "C",
  },

  // --- Q34 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements are correct.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Items classified as capital expenditure are recognised in profit or loss as an expense",
      B: "To be classified as capital expenditure, the item must be expected to create future economic benefit",
      C: "Repainting a building is an example of revenue expenditure",
      D: "Staff training costs are classified as capital expenditure as the entity will benefit from them in the future",
    },
    correctAnswer: ["B", "C"],
  },

  // --- Q35 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "IFRS 18 Presentation and disclosure in financial statements sets out the overall requirements for financial statements, including how they should be structured and the minimum requirements for their content.<br><br>" +
      "<strong>Requirement:</strong> Determine which of the following is NOT correct in relation to the requirements under IFRS 18.",
    options: {
      A: "The financial statements must present fairly the financial position, financial performance, and cash flows of an entity",
      B: "Comparative information does not need to be disclosed for expenses reported in the statement of profit or loss",
      C: "Financial statements must be prepared on an accruals basis",
      D: "An entity must present a statement of financial position, a statement of profit or loss and other comprehensive income, a statement of changes in equity, and a statement of cash flows as part of its complete set of financial statements",
    },
    correctAnswer: "B",
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Identify which of the following statements correctly describes how an entity should account for bad debts.",
    options: {
      A: "Bad debts should be recognised only when a debtor declares bankruptcy",
      B: "Bad debts should be written off immediately as an expense when there is evidence that the receivable may not be collectible",
      C: "Bad debts should be ignored until the debt is older than one year",
      D: "Bad debts should be accounted for by creating a provision for doubtful debts based on an estimate of uncollectible receivables",
    },
    correctAnswer: "B",
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "single",
    marks: 2,
    questionText:
      "Parto Ltd (\"PARTO\") discovered an error in its trade payables control account. An invoice for €/£ 12,200 was incorrectly recorded as €/£ 21,200, with a balancing entry made in the purchases account.<br><br>" +
      "<strong>Requirement:</strong> Determine the correcting entry required to adjust the trade payables control account.",
    options: {
      A: "Credit Trade Payables Control Account €/£ 9,000, Debit Purchases €/£ 9,000",
      B: "Debit Trade Payables Control Account €/£ 9,000, Credit Purchases €/£ 9,000",
      C: "Debit Trade Payables Control Account €/£ 21,200, Credit Purchases €/£ 21,200",
      D: "Debit Trade Payables Control Account €/£ 9,000, Credit Suspense Account €/£ 9,000",
    },
    correctAnswer: "B",
  },

  // --- Q38 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "Bonda Ltd. (\"BONDA\") paid its quarterly utility bills for electricity and water in December 2xx5. The quarterly electricity bill is €/£ 1,350, and the quarterly water bill is €/£ 360. The electricity bill covers the months of September, October and November. The water bill covers the months of November, December, and January.<br><br>" +
      "BONDA also pays rent of €/£ 5,000 per month. They had prepaid 2 months at 31 December 2xx4 and paid a total of €/£ 55,000 in cash during 2xx5.<br><br>" +
      "<strong>Requirement:</strong> Calculate the total amount that should be included as a prepayment and accrual in the financial statements to 31 December 2xx5.",
    parts: [
      { label: "Prepayments (€/£)", answer: 5120 },
      { label: "Accruals (€/£)", answer: 450 },
    ],
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi-numeric",
    marks: 2,
    questionText:
      "XYZ Ltd purchased a building on 1 January 2xx2 for €/£ 500,000. The building has an estimated useful life of 20 years and a residual value of €/£ 50,000. The building was revalued for the first time on 31 December 2xx5 to its fair value of €/£ 620,000.<br><br>" +
      "<strong>Requirement:</strong> Prepare the journal entry required to account for the revaluation of the building on 31 December 2xx5.",
    parts: [
      { label: "Building carrying amount SOFP — Debit (€/£)", answer: 210000 },
      { label: "Revaluation gain/loss OCI — Credit (€/£)", answer: 210000 },
    ],
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following are reasons for an entity to produce a trial balance.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "To verify that the ledger accounts are balanced",
      B: "To calculate the net profit or loss for the period",
      C: "To identify errors in the double-entry bookkeeping system",
      D: "To prepare financial statements directly without further adjustments",
    },
    correctAnswer: ["A", "C"],
  },

  // --- Q41 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Yosi Ltd has a trade payables balance of €/£ 928,100 on 1 January 2xx5. The following transactions took place during the year ended 31 December 2xx5:" +
      "<table style='margin:10px 0;border-collapse:collapse;width:100%'>" +
        "<tr><th style='text-align:left;padding:4px 8px;border:1px solid #ccc'></th><th style='text-align:right;padding:4px 8px;border:1px solid #ccc'>€/£</th></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Credit purchases (Note 1)</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,396,400</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Cash paid to suppliers</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>2,249,200</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Damaged goods returned to suppliers</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>52,830</td></tr>" +
        "<tr><td style='padding:4px 8px;border:1px solid #ccc'>Interest on late payment</td><td style='text-align:right;padding:4px 8px;border:1px solid #ccc'>350</td></tr>" +
      "</table>" +
      "<em>Note 1: When reconciling the supplier statements, it was discovered that an invoice from a supplier of €/£ 19,302 was recorded as €/£ 1,932 in the 'Credit purchases' figure. This has not yet been corrected.</em><br><br>" +
      "<strong>Requirement:</strong> Calculate the corrected balance on the trade payables account on 31 December 2xx5.",
    answer: 1040190,
  },

  // --- Q42 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Solap Ltd (\"SOLAP\") created a provision for tax of €/£ 42,800 in the financial statements to 31 December 2xx4. The amount to be paid to the tax authorities was eventually agreed at €/£ 46,750 and paid on 30 June 2xx5.<br><br>" +
      "The estimated tax due for the year ended 31 December 2xx5 was €/£ 52,810 and the tax paid in June 2xx6 was €/£ 54,230.<br><br>" +
      "<strong>Requirement:</strong> Identify which of the statements below is correct in relation to the treatment of tax in the financial statements of SOLAP for the year ended 31 December 2xx5.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "There was an over-provision in 2xx4 resulting in an expense of €/£ 48,860 in 2xx5 and a provision of €/£ 52,810 at 31 December 2xx5",
      B: "There was an under provision of €/£ 3,950 in 2xx4 and an under provision of €/£ 1,420 in 2xx5",
      C: "There was an under-provision in 2xx4 resulting in an expense of €/£ 56,760 in 2xx5 and a provision of €/£ 52,810 at 31 December 2xx5",
      D: "There was an under provision of €/£ 3,950 in 2xx4 and an over provision of €/£ 1,420 in 2xx5",
    },
    correctAnswer: ["B", "C"],
  },

  // --- Q43 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following statements about accruals and prepayments are correct.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Accruals are adjustments made for expenses that have been incurred, but no invoice has been received and the expense has not yet been paid by the end of the accounting period",
      B: "Prepayments are expenses that have been paid in advance and must be recorded as liabilities until they are incurred",
      C: "Accruals ensure that income received but not yet earned is recorded in the period it is received",
      D: "Prepayments are recognised as assets because they represent future economic benefits to the entity",
    },
    correctAnswer: ["A", "D"],
  },

  // --- Q44 ------------------------------------------------------------------
  {
    section: "Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Identify which of the following are types of errors that can occur in recording transactions when preparing the records for a set of financial statements.<br><br>" +
      "<em>Select ALL that apply.</em>",
    options: {
      A: "Error of omission",
      B: "Error of principle",
      C: "Error of commission",
      D: "Error of convocation",
    },
    correctAnswer: ["A", "B", "C"],
  },

];
