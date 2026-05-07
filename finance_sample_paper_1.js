const financeSamplePaper1 = [

  // --- Q1 -------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi_numeric",
    marks: 6,
    questionText:
      "Forture Ltd (\"FORTURE\") is a successful e-books seller. FORTURE is considering expanding its offering to " +
      "include audio books that can be streamed online on users' devices or downloaded within a new Forture Listen App. " +
      "Details of the proposed expansion are outlined below:" +
      "<ul>" +
      "<li>Two subscription models will be available. A basic subscription will cost €/£ 4 per month and will entitle " +
      "customers to one title. A premium subscription will cost €/£ 7.50 per month and will entitle customers to two titles. " +
      "FORTURE intends to increase both subscription prices by 30% at the start of year three and by a further 15% at the " +
      "start of year five.</li>" +
      "<li>Customer volume projections are as follows:</li>" +
      "</ul>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th></th><th>Year 1</th><th>Year 2</th><th>Year 3</th><th>Year 4</th><th>Year 5</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Basic subscribers</td><td>267</td><td>650</td><td>1,010</td><td>1,483</td><td>2,217</td></tr>" +
      "<tr><td>Premium subscribers</td><td>167</td><td>442</td><td>700</td><td>1,050</td><td>1,392</td></tr>" +
      "</tbody></table>" +
      "<ul>" +
      "<li>In year one, FORTURE has agreed to pay audiobook publishers €/£ 28.80 per basic subscriber and €/£ 45 per " +
      "premium subscriber. Similar to revenue, these costs will increase by 30% at the start of year three and by a " +
      "further 15% at the start of year five.</li>" +
      "<li>Marketing and advertising costs of €/£ 30,000 will be paid upfront. Annual costs are estimated to be " +
      "€/£ 20,000 in year one, increasing by 20% each year thereafter.</li>" +
      "<li>Development costs are expected to total €/£ 40,000 and are payable immediately. The development costs will " +
      "qualify for capital allowances at 25% per annum on a reducing balance basis over the life of the project. The " +
      "current corporation tax rate of 14% is expected to increase to 16% at the beginning of year three. Tax is " +
      "payable one year in arrears.</li>" +
      "<li>FORTURE expects to make a loss before tax of €/£ 7,359 in year one and to record a taxable profit of " +
      "€/£ 8,370 in year two.</li>" +
      "</ul>" +
      "<strong>Requirement</strong><br>" +
      "Complete the extract from the net present value schedule for <strong>Year 3</strong> of the investment.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "Use the minus sign \"-\" to indicate a cash outflow.",
    parts: [
      { label: "Revenue — basic subscription (€/£)",   correctAnswer: 63024,  tolerance: 1 },
      { label: "Revenue — premium subscription (€/£)", correctAnswer: 81900,  tolerance: 0 },
      { label: "Publisher cost (€/£)",                  correctAnswer: -78764, tolerance: 1 },
      { label: "Marketing & advertising costs (€/£)",   correctAnswer: -28800, tolerance: 0 },
      { label: "Capital allowance (€/£)",               correctAnswer: -5625,  tolerance: 0 },
      { label: "Taxable profit (€/£)",                  correctAnswer: 31735,  tolerance: 2 },
      { label: "Tax (€/£)",                             correctAnswer: -1172,  tolerance: 2 },
      { label: "Capital allowance add-back (€/£)",      correctAnswer: 5625,   tolerance: 0 },
      { label: "Net cash flows (€/£)",                  correctAnswer: 36188,  tolerance: 5 },
    ],
    explanation:
      "<strong>Year 3 workings:</strong><br>" +
      "Prices and costs increase by 30% at the start of year three.<br><br>" +
      "Revenue — basic: 1,010 × (€/£ 4 × 12 × 1.30) = 1,010 × €/£ 62.40 = <strong>€/£ 63,024</strong><br>" +
      "Revenue — premium: 700 × (€/£ 7.50 × 12 × 1.30) = 700 × €/£ 117 = <strong>€/£ 81,900</strong><br><br>" +
      "Publisher cost — basic: 1,010 × (€/£ 28.80 × 1.30) = 1,010 × €/£ 37.44 = €/£ 37,814<br>" +
      "Publisher cost — premium: 700 × (€/£ 45 × 1.30) = 700 × €/£ 58.50 = €/£ 40,950<br>" +
      "Total publisher cost = <strong>€/£ (78,764)</strong><br><br>" +
      "Marketing: €/£ 20,000 × 1.20² = <strong>€/£ (28,800)</strong><br><br>" +
      "<strong>Capital allowances (25% reducing balance on €/£ 40,000):</strong><br>" +
      "Year 1: €/£ 40,000 × 25% = €/£ 10,000 → Year 2: €/£ 30,000 × 25% = €/£ 7,500 → Year 3: €/£ 22,500 × 25% = <strong>€/£ 5,625</strong><br><br>" +
      "Taxable profit = 63,024 + 81,900 − 78,764 − 28,800 − 5,625 = <strong>€/£ 31,735</strong><br>" +
      "Tax = Year 2 profit €/£ 8,370 × 16% = <strong>€/£ (1,172)</strong> (year 2 tax paid in year 3, at new 16% rate)<br>" +
      "Net cash flows = 31,735 − 1,172 + 5,625 = <strong>€/£ 36,188</strong>",
  },

  // --- Q2 -------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "€/£ 5,000 of working capital will be required at the beginning of the project. The working capital requirement " +
      "will increase annually to €/£ 5,100, €/£ 5,202, €/£ 5,306 and €/£ 5,412 over the five years. It is expected that " +
      "all working capital will be recovered by FORTURE at the end of the five-year project." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the amount that should be included for working capital in Year 5 of the net present value schedule.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "Use the minus sign \"-\" to indicate a cash outflow.",
    correctAnswer: 5412,
    tolerance: 0,
    explanation:
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Year</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Working capital required</td><td>5,000</td><td>5,100</td><td>5,202</td><td>5,306</td><td>5,412</td><td>—</td></tr>" +
      "<tr><td>Movement (NPV entry)</td><td>(5,000)</td><td>(100)</td><td>(102)</td><td>(104)</td><td>(106)</td><td>+5,412</td></tr>" +
      "</tbody></table><br>" +
      "In Year 5, all working capital is recovered, so the entry is a cash <strong>inflow of €/£ 5,412</strong>.",
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "The expected net cash flows from FORTURE's project have now been determined as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Year</th><th>0 (€/£)</th><th>1 (€/£)</th><th>2 (€/£)</th><th>3 (€/£)</th><th>4 (€/£)</th><th>5 (€/£)</th><th>6 (€/£)</th></tr></thead>" +
      "<tbody><tr><td>Net cash flow</td><td>(75,000)</td><td>(7,459)</td><td>10,698</td><td>37,134</td><td>58,697</td><td>111,678</td><td>(16,505)</td></tr></tbody>" +
      "</table>" +
      "<br>FORTURE has a nominal weighted average cost of capital of 6%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the net present value (NPV) of FORTURE's proposed investment.<br>" +
      "The reference materials provided should be used where relevant.<br>" +
      "Your answer should be rounded to the nearest whole number.",
    correctAnswer: 76955,
    tolerance: 100,
    explanation:
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Year</th><th>Cash flow (€/£)</th><th>DF @ 6%</th><th>DCF (€/£)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>0</td><td>(75,000)</td><td>1.000</td><td>(75,000)</td></tr>" +
      "<tr><td>1</td><td>(7,459)</td><td>0.943</td><td>(7,034)</td></tr>" +
      "<tr><td>2</td><td>10,698</td><td>0.890</td><td>9,521</td></tr>" +
      "<tr><td>3</td><td>37,134</td><td>0.840</td><td>31,193</td></tr>" +
      "<tr><td>4</td><td>58,697</td><td>0.792</td><td>46,488</td></tr>" +
      "<tr><td>5</td><td>111,678</td><td>0.747</td><td>83,423</td></tr>" +
      "<tr><td>6</td><td>(16,505)</td><td>0.705</td><td>(11,636)</td></tr>" +
      "<tr><td><strong>NPV</strong></td><td></td><td></td><td><strong>76,955</strong></td></tr>" +
      "</tbody></table>",
  },

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following are <strong>advantages</strong> of using net present value (NPV) as an investment appraisal technique." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "NPV is based on cash-flow rather than accounting profit",
      B: "The NPV assumes cash flows occur at year end",
      C: "The cash flows in the NPV calculation are discounted",
      D: "The accuracy of the NPV depends on the use of an appropriate discount rate",
    },
    correctAnswer: ["A", "C"],
    explanation:
      "A and C are the advantages.<br>" +
      "B is a <strong>limitation/assumption</strong> of NPV, not an advantage.<br>" +
      "D is also a <strong>limitation</strong> — NPV is only as accurate as the discount rate used, which makes it a weakness rather than a strength.",
  },

  // --- Q5 -------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi_numeric",
    marks: 2,
    questionText:
      "Xynax Ltd (\"XYNAX\") has calculated a net present value of €/£ 90,000 for a potential investment. This includes " +
      "a one-off development cost of €/£ 50,000 which would be required immediately. The present value of cash flows " +
      "of the project's raw material costs totals €/£ 350,000." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the sensitivity of XYNAX's investment to an increase in budgeted development " +
      "cost and raw material costs.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "Your answer should be entered as a positive value.",
    parts: [
      { label: "Development cost sensitivity (%)", correctAnswer: 180, tolerance: 1 },
      { label: "Raw material costs sensitivity (%)", correctAnswer: 26,  tolerance: 1 },
    ],
    explanation:
      "<strong>Sensitivity formula:</strong> Sensitivity = NPV / PV of the variable<br><br>" +
      "Development cost: €/£ 90,000 / €/£ 50,000 = <strong>180%</strong><br>" +
      "Raw material costs: €/£ 90,000 / €/£ 350,000 = 25.7% ≈ <strong>26%</strong><br><br>" +
      "This means the development cost would need to increase by 180% before the project becomes unviable, " +
      "while raw material costs would only need to increase by 26%.",
  },

  // --- Q6 -------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following are <strong>disadvantages</strong> of sensitivity analysis." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "Management is less aware of the risks involved in the project",
      B: "Sensitivity analysis does not result in clear decision rules when deciding to accept or reject a project",
      C: "It is difficult for management to focus their attention on the critical variables identified",
      D: "A single input is varied at a time",
    },
    correctAnswer: ["B", "D"],
    explanation:
      "B and D are correct disadvantages.<br>" +
      "A is incorrect — sensitivity analysis actually makes management <strong>more aware</strong> of risks by identifying critical variables.<br>" +
      "C is incorrect — sensitivity analysis helps management <strong>focus</strong> on the most sensitive (critical) variables.",
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Trex Ltd (\"TREX\") operates in the forestry business. The Finance Director strives to maximise the wealth of " +
      "company shareholders. She has identified two investment opportunities, Birch and Chestnut. Birch has a " +
      "profitability index of 1.4. Financial details relating to Chestnut are shown below." +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Project</th><th>Investment Required (€/£)</th><th>NPV (€/£)</th></tr></thead>" +
      "<tbody><tr><td>Chestnut</td><td>285,000</td><td>45,000</td></tr></tbody>" +
      "</table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate the profitability index of Chestnut.<br>" +
      "Your answer should be rounded to one decimal place.",
    correctAnswer: 1.2,
    tolerance: 0.05,
    explanation:
      "<strong>Profitability Index (PI)</strong> = (Investment + NPV) / Investment<br>" +
      "= (€/£ 285,000 + €/£ 45,000) / €/£ 285,000<br>" +
      "= €/£ 330,000 / €/£ 285,000 = 1.158 ≈ <strong>1.2</strong>",
  },

  // --- Q8 -------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Horace plc (\"HORACE\") is a listed company which manufactures and distributes gardening products across Europe. " +
      "HORACE's capital structure comprises ordinary shares, irredeemable bonds and redeemable bonds. The applicable " +
      "tax rate is 14%." +
      "<br><br>HORACE has 300,000 ordinary shares with a nominal value of €/£ 0.50 each. The shares are currently trading " +
      "at €/£ 5.85 per share. A dividend of €/£ 0.25 per share has been declared and is due to be paid next month. " +
      "HORACE has a dividend growth rate of 8.6%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the current cost of the ordinary shares.<br>" +
      "Your answer should be rounded to one decimal place.",
    correctAnswer: 13.4,
    tolerance: 0.1,
    explanation:
      "<strong>Dividend growth model (cum-div price):</strong><br>" +
      "Cum-div share price = €/£ 5.85<br>" +
      "Less: declared dividend = €/£ 0.25<br>" +
      "Ex-div share price (P₀) = <strong>€/£ 5.60</strong><br><br>" +
      "K<sub>e</sub> = D₀(1 + g) / P₀ + g<br>" +
      "K<sub>e</sub> = 0.25(1.086) / 5.60 + 0.086<br>" +
      "K<sub>e</sub> = 0.2715 / 5.60 + 0.086 = 0.0485 + 0.086 = <strong>13.4%</strong>",
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "HORACE holds 8,000 irredeemable 4% bonds. Each bond has a nominal value of €/£ 100 and a current market " +
      "value of €/£ 97.50 ex-interest." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the current cost of the irredeemable bonds.<br>" +
      "Your answer should be rounded to one decimal place.",
    correctAnswer: 3.5,
    tolerance: 0.05,
    explanation:
      "<strong>Cost of irredeemable debt (post-tax):</strong><br>" +
      "K<sub>d</sub> = i(1 − t) / D<br>" +
      "i = 4 (coupon on €/£ 100 nominal)<br>" +
      "t = 0.14<br>" +
      "D = €/£ 97.50 (market value)<br>" +
      "K<sub>d</sub> = 4(1 − 0.14) / 97.50 = 4 × 0.86 / 97.50 = 3.44 / 97.50 = <strong>3.5%</strong>",
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi_numeric",
    marks: 3,
    questionText:
      "HORACE has 300,000 ordinary shares currently trading at €/£ 5.85 per share. A dividend of €/£ 0.25 per share " +
      "has been declared and is due to be paid next month. HORACE holds 8,000 irredeemable 4% bonds with a nominal " +
      "value of €/£ 100 each and a current market value of €/£ 97.50 ex-interest." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the market value of HORACE's ordinary shares and irredeemable bonds.<br>" +
      "Your answer should be rounded to the nearest whole number.",
    parts: [
      { label: "Ordinary shares market value (€/£)",      correctAnswer: 1680000, tolerance: 0 },
      { label: "Irredeemable bonds market value (€/£)",   correctAnswer: 780000,  tolerance: 0 },
    ],
    explanation:
      "Ordinary shares: 300,000 × ex-div price €/£ 5.60 = <strong>€/£ 1,680,000</strong><br>" +
      "(Ex-div price = €/£ 5.85 − €/£ 0.25 = €/£ 5.60)<br><br>" +
      "Irredeemable bonds: 8,000 × €/£ 97.50 = <strong>€/£ 780,000</strong>",
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "HORACE holds redeemable bonds. Each bond has a nominal value of €/£ 100 and a current market value of " +
      "€/£ 102.50 ex-interest. The bonds are redeemable in five years at a premium of 4%." +
      "<br><br>Assuming purchased today and held until maturity, the net present value of the redeemable bond cash flows " +
      "using two discount rates is as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Discount rate</th><th>Net Present Value (€/£)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>3%</td><td>10.88</td></tr>" +
      "<tr><td>10%</td><td>(18.35)</td></tr>" +
      "</tbody></table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the current cost of the redeemable bonds.<br>" +
      "Your answer should be rounded to one decimal place.",
    correctAnswer: 5.6,
    tolerance: 0.1,
    explanation:
      "<strong>IRR interpolation:</strong><br>" +
      "IRR = Rate 1 + [ NPV Rate 1 / (NPV Rate 1 − NPV Rate 2) ] × (Rate 2 − Rate 1)<br>" +
      "IRR = 3 + [ 10.88 / (10.88 − (−18.35)) ] × (10 − 3)<br>" +
      "IRR = 3 + [ 10.88 / 29.23 ] × 7<br>" +
      "IRR = 3 + 0.372 × 7 = 3 + 2.6 = <strong>5.6%</strong>",
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. Bank overdrafts are a relatively cheap and flexible form of finance<br>" +
      "2. Bank overdrafts are not an appropriate source of finance for a long-term project" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["C"],
    explanation:
      "Both statements are correct.<br>" +
      "1. Overdrafts are cheap (interest only on the amount drawn) and flexible (repayable at any time).<br>" +
      "2. Overdrafts are repayable on demand, making them unsuitable for long-term projects which require committed finance.",
  },

  // --- Q13 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "A one-off investment opportunity is being considered by the directors of Tride plc (\"TRIDE\"). The investment " +
      "is only available for a short period of time and, if undertaken, would significantly improve the return for TRIDE's " +
      "shareholders. TRIDE would be required to increase its short-term debt to invest in this project. All directors " +
      "agree that the investment would be positive for the business and provide long-term shareholder value. The Finance " +
      "Director has subsequently reminded the other directors that taking on additional debt may negatively impact the " +
      "annual director bonus payments. Consequently, the Finance Director has suggested that acceptance of the project " +
      "should be deferred until after the end of the current financial year." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "The fundamental ethical principle of integrity is being breached by the Finance Director",
      B: "The suggested course of action would not bring the accounting profession into disrepute",
      C: "There is a responsibility on the part of the directors to act in the shareholders' interest",
      D: "There is a clear self-interest threat to compliance with fundamental ethical principles",
    },
    correctAnswer: ["A", "C", "D"],
    explanation:
      "A, C and D are correct.<br>" +
      "A: The Finance Director is prioritising personal bonus over shareholder interests — this breaches <strong>integrity</strong>.<br>" +
      "C: Directors have a fiduciary duty to act in shareholders' best interests.<br>" +
      "D: The threat to defer a value-creating project to protect bonuses is a clear <strong>self-interest threat</strong>.<br>" +
      "B is incorrect — the suggested course of action <strong>would</strong> bring the profession into disrepute.",
  },

  // --- Q14 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "FINDAL plc (\"FINDAL\") paid a dividend of €/£ 0.31 per share in 2xx0. The dividend payment in 2xx5 is " +
      "€/£ 0.46 per share." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the dividend growth rate of FINDAL.<br>" +
      "Your answer should be rounded to one decimal place.",
    correctAnswer: 8.2,
    tolerance: 0.1,
    explanation:
      "<strong>Dividend growth formula:</strong> g = (D<sub>t0</sub> / D<sub>t0-y</sub>)<sup>1/y</sup> − 1<br>" +
      "D<sub>t0</sub> = €/£ 0.46 (2xx5), D<sub>t0-y</sub> = €/£ 0.31 (2xx0), y = 5 years<br>" +
      "g = (0.46 / 0.31)<sup>1/5</sup> − 1 = (1.4839)<sup>0.2</sup> − 1 = 1.082 − 1 = <strong>8.2%</strong>",
  },

  // --- Q15 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Varspet Ltd (\"VARSPET\") uses 5,200,000 components at a steady rate during the year. The cost per order is " +
      "€/£ 4,000 and the cost of holding one unit of inventory for one year is €/£ 1.10." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, assuming VARSPET uses the economic order quantity (EOQ) model, the number of components that should be ordered.<br>" +
      "Your answer should be rounded to the nearest whole number.",
    correctAnswer: 194469,
    tolerance: 10,
    explanation:
      "<strong>EOQ formula:</strong> EOQ = √(2FU / CP)<br>" +
      "F = €/£ 4,000 (ordering cost)<br>" +
      "U = 5,200,000 units (annual demand)<br>" +
      "CP = €/£ 1.10 (holding cost per unit)<br>" +
      "EOQ = √(2 × 4,000 × 5,200,000 / 1.10) = √(41,600,000,000 / 1.10) = √37,818,181,818 = <strong>194,469 units</strong>",
  },

  // --- Q16 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "VARSPET's supplier is considering a lead time of 14 days." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the re-order level of components to ensure that a stock out does not arise for VARSPET.<br>" +
      "A 365-day year should be assumed.<br>" +
      "Your answer should be rounded to the nearest whole number.",
    correctAnswer: 199452,
    tolerance: 10,
    explanation:
      "Re-order level = daily demand × lead time<br>" +
      "Daily demand = 5,200,000 / 365 = 14,247 units per day<br>" +
      "Re-order level = 14,247 × 14 = <strong>199,452 units</strong>",
  },

  // --- Q17 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Franz plc (\"FRANZ\") has a capital structure comprising 70% debt and 30% equity. FRANZ has a cost of debt of " +
      "7% and a cost of equity equal to 14%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the weighted average cost of capital (WACC) for FRANZ.<br>" +
      "You should round your answer to one decimal place.",
    correctAnswer: 9.1,
    tolerance: 0.05,
    explanation:
      "WACC = (weight of debt × cost of debt) + (weight of equity × cost of equity)<br>" +
      "WACC = (70% × 7%) + (30% × 14%)<br>" +
      "WACC = 4.9% + 4.2% = <strong>9.1%</strong>",
  },

  // --- Q18 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi_numeric",
    marks: 4,
    questionText:
      "Piana Ltd (\"PIANA\") is a manufacturing company. Each raw material component usually costs PIANA €/£ 2.80 " +
      "to purchase. PIANA has been offered a bulk ordering discount of 5% by its supplier if it makes a minimum order " +
      "of 500,000 components. PIANA has decided to accept the supplier's offer and will purchase 550,000 components. " +
      "This will ensure that PIANA will hold an average of 250,000 of this order in inventory. Additionally, PIANA will " +
      "hold a buffer inventory level of 107,534 components." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the purchase cost of the order and the value of the average inventory held by PIANA under this proposal.<br>" +
      "Your answer should be rounded to the nearest whole number.",
    parts: [
      { label: "Purchase cost (€/£)",          correctAnswer: 1463000, tolerance: 0 },
      { label: "Average inventory value (€/£)", correctAnswer: 951040,  tolerance: 10 },
    ],
    explanation:
      "Discounted unit price = €/£ 2.80 × (1 − 5%) = €/£ 2.66<br><br>" +
      "Purchase cost = 550,000 × €/£ 2.66 = <strong>€/£ 1,463,000</strong><br><br>" +
      "Average inventory = cycle inventory + buffer = 250,000 + 107,534 = 357,534 units<br>" +
      "Average inventory value = 357,534 × €/£ 2.66 = <strong>€/£ 951,040</strong>",
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Under the supplier's proposal, it is expected that the average inventory value held by PIANA will increase by " +
      "€/£ 397,249. PIANA finances its working capital using a bank overdraft at a rate of 6% per annum." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the additional finance cost incurred as a consequence of holding the increased inventory.<br>" +
      "Your answer should be rounded to the nearest whole number.",
    correctAnswer: 23835,
    tolerance: 0,
    explanation:
      "Additional finance cost = increase in inventory value × overdraft rate<br>" +
      "= €/£ 397,249 × 6% = <strong>€/£ 23,835</strong>",
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements relating to JIT is/are true." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "JIT is suited to manufacturing companies with low volume, bespoke products",
      B: "A computerised system is required to provide real time information to suppliers",
      C: "The supplier takes on some responsibility for ensuring no stock outs",
      D: "There are hidden costs to a JIT system including storage and finance costs",
    },
    correctAnswer: ["B", "C"],
    explanation:
      "B and C are correct.<br>" +
      "A is incorrect — JIT works best with <strong>high volume, standardised</strong> products where demand is predictable. It is poorly suited to low-volume bespoke production.<br>" +
      "D is incorrect — JIT actually <strong>reduces</strong> storage and finance costs by minimising inventory holdings. These are costs of <strong>traditional</strong> inventory management, not JIT.",
  },

  // --- Q21 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "MAPOF Ltd (\"MAPOF\") incurs annual purchase costs of €/£ 180,000. All purchases are on credit. MAPOF has " +
      "proposed an increase in the credit period offered by its suppliers from 30 days to 45 days. MAPOF finances its " +
      "working capital using a bank overdraft at a rate of 6% per annum. A 365-day year should be assumed." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, assuming the proposed change to the credit period is accepted, the finance savings for MAPOF in " +
      "respect of its trade payables.<br>" +
      "Your answer should be rounded to the nearest whole number.",
    correctAnswer: 444,
    tolerance: 5,
    explanation:
      "Current payables balance = €/£ 180,000 × 30/365 = €/£ 14,795<br>" +
      "New payables balance = €/£ 180,000 × 45/365 = €/£ 22,192<br>" +
      "Increase in payables = €/£ 22,192 − €/£ 14,795 = €/£ 7,397<br>" +
      "Finance saving = €/£ 7,397 × 6% = <strong>€/£ 444</strong><br><br>" +
      "By paying suppliers later, MAPOF holds more of its cash for longer, reducing overdraft usage.",
  },

  // --- Q22 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi_numeric",
    marks: 4,
    questionText:
      "Jondo Ltd (\"JONDO\") sells all goods on credit and has an average trade receivable balance of €/£ 525,000. " +
      "JONDO is considering offering a 2% discount to those customers who pay for goods on the day of purchase. It is " +
      "expected that 10% of customers will accept this offer." +
      "<br><br>JONDO expects that the average trade receivable balance will consequently fall by €/£ 45,000. JONDO " +
      "finances its working capital by utilising a bank overdraft at a rate of 4% per annum." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the sales revenue decrease in respect of the discount and the finance cost saving in respect of " +
      "JONDO's trade receivables.<br>" +
      "Your answers should be entered as positive values.<br>" +
      "Your answers should be rounded to the nearest whole number.",
    parts: [
      { label: "Sales revenue decrease (€/£)", correctAnswer: 1050, tolerance: 0 },
      { label: "Finance cost saving (€/£)",    correctAnswer: 1800, tolerance: 0 },
    ],
    explanation:
      "Sales revenue decrease = total receivables × discount rate × % taking discount<br>" +
      "= €/£ 525,000 × 2% × 10% = <strong>€/£ 1,050</strong><br><br>" +
      "Finance cost saving = reduction in receivables balance × overdraft rate<br>" +
      "= €/£ 45,000 × 4% = <strong>€/£ 1,800</strong>",
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Inspire plc (\"INSPIRE\") is a new insurance provider that will rely on its salesforce of 20 personnel to sell new " +
      "policies. Each salesperson will be provided with a smartphone at a cost of €/£ 500 per phone. INSPIRE is now " +
      "considering whether it is best to replace the smartphones under a two-year contract or a three-year contract. " +
      "At the end of each contract, the phones can be recycled and raise disposal proceeds of €/£ 150 after two years " +
      "or €/£ 70 after three years. Each year a significant number of the smartphones are lost, damaged or broken. " +
      "Repair and replacement costs average €/£ 30 per unit in the first year, increasing by 20% per annum as the " +
      "smartphones age. INSPIRE has a cost of capital of 9%." +
      "<br><br>The net present value of the costs of operating the 20 smartphones over two years totals €/£ 8,630." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the equivalent annual cost (EAC) of replacing the 20 smartphones after two years.<br>" +
      "The reference materials provided should be used where relevant.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 4906,
    tolerance: 10,
    explanation:
      "<strong>EAC formula:</strong> EAC = NPV of costs / Annuity factor<br>" +
      "Annuity factor @ 9% for 2 years = 1.759 (from tables)<br>" +
      "EAC = €/£ 8,630 / 1.759 = <strong>€/£ 4,906</strong>",
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "INSPIRE is considering replacing the 20 smartphones under a three-year contract. Disposal proceeds are " +
      "€/£ 70 per phone after three years. Repair and replacement costs average €/£ 30 per unit in year 1, " +
      "increasing by 20% per annum. INSPIRE has a cost of capital of 9%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the net present value (NPV) of cash flows from replacing the smartphones after three years.<br>" +
      "The reference materials provided should be used where relevant.<br>" +
      "Use the minus sign \"-\" to indicate a cash outflow.",
    correctAnswer: -10742,
    tolerance: 20,
    explanation:
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Year</th><th>0 (€/£)</th><th>1 (€/£)</th><th>2 (€/£)</th><th>3 (€/£)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Cost of phones (20 × €/£ 500)</td><td>(10,000)</td><td></td><td></td><td></td></tr>" +
      "<tr><td>Repairs: Y1 = 20×30, Y2 = 20×36, Y3 = 20×43.2</td><td></td><td>(600)</td><td>(720)</td><td>(864)</td></tr>" +
      "<tr><td>Scrap value (20 × €/£ 70)</td><td></td><td></td><td></td><td>1,400</td></tr>" +
      "<tr><td>Discount factor @ 9%</td><td>1.000</td><td>0.917</td><td>0.842</td><td>0.772</td></tr>" +
      "<tr><td>PV</td><td>(10,000)</td><td>(550)</td><td>(606)</td><td>414</td></tr>" +
      "</tbody></table><br>" +
      "NPV = −10,000 − 550 − 606 + 414 = <strong>€/£ (10,742)</strong>",
  },

  // --- Q25 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. INSPIRE should choose the option with the highest equivalent annual cost (EAC)<br>" +
      "2. Security and software issues may arise if the phones are kept for an extra year" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["B"],
    explanation:
      "Statement 2 only is correct.<br>" +
      "Statement 1 is incorrect — INSPIRE should choose the option with the <strong>lowest</strong> EAC, as EAC represents the annual cost and a lower cost is better.<br>" +
      "Statement 2 is correct — keeping phones for an extra year introduces security vulnerabilities and software compatibility issues as devices age.",
  },

  // --- Q26 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Forstue plc (\"FORSTUE\") is a high-street retailer based in the UK and Ireland. The company is one of many " +
      "retailers specialising in the sale of low-cost clothing which is consistently popular among a significant portion " +
      "of customers." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. The price elasticity of demand is the responsiveness of demand for a product to a change in its price<br>" +
      "2. FORSTUE is operating in a highly elastic market" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["C"],
    explanation:
      "Both statements are correct.<br>" +
      "1. Price elasticity of demand measures how sensitive demand is to a change in price — correct definition.<br>" +
      "2. Low-cost clothing is sold by many competing retailers, so customers will easily switch if prices rise. This makes demand <strong>highly elastic</strong>.",
  },

  // --- Q27 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. In some instances, decisions which maximise equity holder wealth could be detrimental to directors' interests<br>" +
      "2. An agency relationship exists in a company whereby the shareholders (principal) act on behalf of the directors (agent)" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["A"],
    explanation:
      "Statement 1 only is correct.<br>" +
      "Statement 1: Decisions that maximise shareholder wealth (e.g. cutting executive pay, taking on risk) can be detrimental to directors' personal interests — this is the root of the agency problem.<br>" +
      "Statement 2 is incorrect — the agency relationship is the <strong>opposite</strong>: shareholders are the <strong>principals</strong> and directors are the <strong>agents</strong> acting on their behalf, not the other way around.",
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi_numeric",
    marks: 5,
    questionText:
      "Steve Gold, a client of yours, has approached you for some financial advice. You are provided with the following " +
      "financial information for Steve as at 1 January 2xx5:" +
      "<br><br><strong>Note 1</strong><br>" +
      "Steve is employed as a restaurant manager and earns a pre-tax monthly income of €/£ 3,200. Steve has been " +
      "informed that he will be made redundant in two months. On that date, he will be eligible for a redundancy payment " +
      "equivalent to 1.5 times his annual salary. All of the redundancy payment is taxable." +
      "<br><br><strong>Note 2</strong><br>" +
      "Steve owns a rental property which is valued at €/£ 400,000. The property has a pre-tax annual rental yield of 12%. " +
      "Tax allowable costs associated with the property average €/£ 100 per month." +
      "<br><br><strong>Note 3</strong><br>" +
      "Steve has savings of €/£ 28,000 on deposit in a bank account earning 2% in pre-tax interest. He intends to add " +
      "his post-tax redundancy payment to this when it is received." +
      "<br><br><strong>Note 4</strong><br>" +
      "Steve lives in his own house for which he makes a mortgage payment of €/£ 2,300 per month. He pays other " +
      "non-discretionary expenses of €/£ 1,100 each month." +
      "<br><br>The applicable tax rate is 20% and applies to all income." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate Steve's projected net cash flow for 2xx5 in respect of each of the four notes above.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "Use the minus sign \"-\" to indicate a cash outflow.",
    parts: [
      { label: "Note 1 — Employment & redundancy (€/£)", correctAnswer: 51200,  tolerance: 0 },
      { label: "Note 2 — Rental income (€/£)",           correctAnswer: 37440,  tolerance: 0 },
      { label: "Note 3 — Deposit interest (€/£)",        correctAnswer: 1062,   tolerance: 5 },
      { label: "Note 4 — Property & expenses (€/£)",     correctAnswer: -40800, tolerance: 0 },
    ],
    explanation:
      "<strong>Note 1:</strong><br>" +
      "Employment income (2 months): €/£ 3,200 × 2 × 80% = €/£ 5,120<br>" +
      "Redundancy payment: €/£ 3,200 × 12 × 1.5 × 80% = €/£ 46,080<br>" +
      "Total = <strong>€/£ 51,200</strong><br><br>" +
      "<strong>Note 2:</strong><br>" +
      "Gross rental = €/£ 400,000 × 12% = €/£ 48,000<br>" +
      "Less allowable costs = €/£ 100 × 12 = €/£ 1,200<br>" +
      "Net rental (pre-tax) = €/£ 46,800 × 80% = <strong>€/£ 37,440</strong><br><br>" +
      "<strong>Note 3:</strong><br>" +
      "Interest on original savings: €/£ 28,000 × 2% × 80% = €/£ 448<br>" +
      "Post-tax redundancy received in month 2: €/£ 46,080<br>" +
      "Interest on redundancy (10 months remaining): €/£ 46,080 × 2% × 10/12 × 80% = €/£ 614<br>" +
      "Total = <strong>€/£ 1,062</strong><br><br>" +
      "<strong>Note 4:</strong><br>" +
      "Mortgage: €/£ 2,300 × 12 = €/£ 27,600<br>" +
      "Expenses: €/£ 1,100 × 12 = €/£ 13,200<br>" +
      "Total outflow = <strong>€/£ (40,800)</strong>",
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "The Managing Director of Tailor Ltd (\"TAILOR\") has asked you to investigate the possibility of improving the " +
      "company's management of trade receivables. TAILOR earns revenue of €/£ 500,000 per month. All sales are on " +
      "credit. On average, customers are offered a credit period of 60 days; this term is fully utilised. A 365-day year " +
      "should be assumed." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate TAILOR's current average trade receivables balance.<br>" +
      "You should round your answer to the nearest whole number.",
    correctAnswer: 986301,
    tolerance: 100,
    explanation:
      "Annual revenue = €/£ 500,000 × 12 = €/£ 6,000,000<br>" +
      "Average trade receivables = Annual revenue × (credit days / 365)<br>" +
      "= €/£ 6,000,000 × 60/365 = <strong>€/£ 986,301</strong>",
  },

  // --- Q30 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Farout Music Ltd (\"FAROUT\") has grown rapidly since inception three years ago. It has become one of the fastest " +
      "growing music streaming services in the world and now boasts a subscriber base of over ten million users which " +
      "continues to grow at a steady rate." +
      "<br><br>FAROUT needs to secure funding to maintain its growth trajectory to a point of profitability which is expected " +
      "within the next year. The board of FAROUT is inexperienced, several of whom are musicians who founded the business " +
      "and financed its initial stages. The majority of the board believe it is a bad idea to seek a stock market listing as " +
      "they are reluctant to be accountable to outsiders. FAROUT has recently been approached by a venture capital firm " +
      "which is interested in making a significant investment to fund the company's future growth." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify which of the following is/are <strong>disadvantages</strong> of seeking a stock market listing." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "It is very expensive to undertake a stock market listing",
      B: "There's an increased risk that the founders may lose control of the company",
      C: "The founders will be unable to realise the return on their initial investment",
      D: "There are ongoing additional costs of compliance for listed companies",
    },
    correctAnswer: ["A", "B", "D"],
    explanation:
      "A, B and D are correct disadvantages of a stock market listing.<br>" +
      "C is incorrect — a stock market listing actually <strong>enables</strong> founders to realise their investment by selling shares on the open market. This is often a key motivation for listing.",
  },

  // --- Q31 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following is/are reasons why FAROUT would be an <strong>attractive investment</strong> to venture capitalists." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "The inexperienced board suggests that the expertise of a venture capitalist could add value to the business",
      B: "FAROUT is not open to the idea of a stock market listing",
      C: "FAROUT has proven it has a popular concept with growth potential",
      D: "The board of FAROUT does not want to lose control",
    },
    correctAnswer: ["A", "C"],
    explanation:
      "A and C are correct.<br>" +
      "A: An inexperienced board means a VC can add significant strategic value, which is attractive to VCs as they can justify their involvement and fees.<br>" +
      "C: A proven concept with strong subscriber growth and a clear path to profitability is exactly what VCs look for.<br>" +
      "B is incorrect — resistance to a stock market listing is actually a <strong>concern</strong> for VCs, as an IPO is often their preferred exit route.<br>" +
      "D is incorrect — a board that doesn't want to lose control makes the VC's ability to exert influence (which they need to protect their investment) more difficult.",
  },

  // --- Q32 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "On 1 January 2xx5, Adios plc (\"ADIOS\") had retained earnings of €/£ 34.2 million. The company recorded a " +
      "profit after tax of €/£ 12.3 million for the year ended 31 December 2xx5 and retained earnings at 31 December " +
      "2xx5 totalled €/£ 40.8 million. ADIOS has issued ordinary share capital of €/£ 13.5 million comprising shares " +
      "with a nominal value of €/£ 0.75 each. During 2xx5, loan notes in issue totalled €/£ 38 million which had an " +
      "average effective interest rate of 4%. At 31 December 2xx5, the ordinary shares of ADIOS had a market value of " +
      "€/£ 2.48. The applicable tax rate is 20%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the earnings per share (EPS) of ADIOS for the year ended 31 December 2xx5.<br>" +
      "Your answer should be presented in cents/pence and rounded to one decimal place.",
    correctAnswer: 68.3,
    tolerance: 0.1,
    explanation:
      "Number of ordinary shares = €/£ 13,500,000 / €/£ 0.75 = 18,000,000 shares<br>" +
      "EPS = Profit after tax / Number of shares<br>" +
      "= €/£ 12,300,000 / 18,000,000 = 68.33c ≈ <strong>68.3c/p</strong>",
  },

  // --- Q33 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "On 1 January 2xx5, ADIOS had retained earnings of €/£ 34.2 million. Profit after tax for 2xx5 was €/£ 12.3 million. " +
      "Retained earnings at 31 December 2xx5 totalled €/£ 40.8 million." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the dividend payout ratio of ADIOS for the year ended 31 December 2xx5.<br>" +
      "Your answer should be rounded to one decimal place.",
    correctAnswer: 46.3,
    tolerance: 0.2,
    explanation:
      "Dividend paid = opening retained earnings + profit − closing retained earnings<br>" +
      "= €/£ 34.2m + €/£ 12.3m − €/£ 40.8m = <strong>€/£ 5.7 million</strong><br><br>" +
      "Dividend payout ratio = Dividends / Profit after tax<br>" +
      "= €/£ 5.7m / €/£ 12.3m = 46.3%",
  },

  // --- Q34 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "ADIOS had loan notes of €/£ 38 million at an average effective interest rate of 4% during 2xx5. Profit after tax " +
      "for 2xx5 was €/£ 12.3 million. The applicable tax rate is 20%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the interest cover of ADIOS for the year ended 31 December 2xx5.<br>" +
      "Your answer should be rounded to one decimal place.",
    correctAnswer: 11.1,
    tolerance: 0.1,
    explanation:
      "Interest = €/£ 38,000,000 × 4% = €/£ 1,520,000<br><br>" +
      "PBIT = Profit after tax + Tax + Interest<br>" +
      "Tax = €/£ 12,300,000 / 80 × 20 = €/£ 3,075,000<br>" +
      "PBIT = €/£ 12,300,000 + €/£ 3,075,000 + €/£ 1,520,000 = €/£ 16,895,000<br><br>" +
      "Interest cover = PBIT / Interest = €/£ 16,895,000 / €/£ 1,520,000 = <strong>11.1 times</strong>",
  },

  // --- Q35 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. Pecking order theory states that when managers source finance, they seek an optimal capital structure<br>" +
      "2. In general, Finance Managers prefer to use external sources of finance to internal sources of finance" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["D"],
    explanation:
      "Neither statement is correct.<br>" +
      "Statement 1 is incorrect — pecking order theory states managers have a <strong>preference order</strong> for financing (retained earnings → debt → equity), <strong>not</strong> that they seek an optimal capital structure. Seeking an optimal structure is associated with <strong>trade-off theory</strong>.<br>" +
      "Statement 2 is incorrect — pecking order theory says managers prefer <strong>internal</strong> sources (retained earnings) first, then external debt, and equity as a last resort.",
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "numeric",
    marks: 2,
    questionText:
      "Jasa Ltd (\"JASA\") is a computer chip manufacturing company that is considering an investment of €/£ 100 million " +
      "in a project to produce a new chip for tablet devices over a four-year term. The after-tax profit that JASA " +
      "expects to earn from the sale of the new chip in each year is outlined below." +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Year</th><th>1</th><th>2</th><th>3</th><th>4</th></tr></thead>" +
      "<tbody><tr><td>Profit after tax (€/£)</td><td>5,464,000</td><td>5,628,000</td><td>5,797,000</td><td>5,971,000</td></tr></tbody>" +
      "</table>" +
      "<br>At the end of the project, it is expected that the production line will be sold for €/£ 20 million. Depreciation should be ignored." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the expected accounting rate of return (ARR) of the project.<br>" +
      "Your answer should be rounded to one decimal place.",
    correctAnswer: 9.5,
    tolerance: 0.1,
    explanation:
      "Total profit after tax = €/£ 5,464,000 + €/£ 5,628,000 + €/£ 5,797,000 + €/£ 5,971,000 = €/£ 22,860,000<br>" +
      "Average annual profit = €/£ 22,860,000 / 4 = €/£ 5,715,000<br><br>" +
      "Average investment = (initial investment + residual value) / 2<br>" +
      "= (€/£ 100,000,000 + €/£ 20,000,000) / 2 = €/£ 60,000,000<br><br>" +
      "ARR = Average profit / Average investment<br>" +
      "= €/£ 5,715,000 / €/£ 60,000,000 = <strong>9.5%</strong>",
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true regarding uncertainty in the context of investment appraisal." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "Where cash flows are totally uncertain, the project should not proceed",
      B: "Uncertainty is the likelihood that any estimates or assumptions made will differ from what occurs",
      C: "When the outcomes are regarded as totally uncertain, no probabilities can be assigned to them",
      D: "Uncertainty occurs when probabilities can be assigned to the various possible outcomes",
    },
    correctAnswer: ["A", "C"],
    explanation:
      "A and C are correct.<br>" +
      "B is incorrect — that description refers to <strong>risk</strong>, not uncertainty. Uncertainty is the condition where <strong>no probabilities</strong> can be assigned (outcomes are unknown).<br>" +
      "D is incorrect — that describes <strong>risk</strong>. Risk is when probabilities can be assigned to outcomes; uncertainty is when they cannot.",
  },

  // --- Q38 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Shogun Ltd (\"SHOGUN\") is a company in the textile design industry that is rapidly expanding across Europe. " +
      "SHOGUN's revenue and profitability increased significantly in recent years and the company has relied on " +
      "short-term sources of finance and variable rate bank loans to fund this expansion. SHOGUN operates in an " +
      "economic environment where inflation has been rising in response to increasing consumer demand and a shortage " +
      "of consumer goods." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "Inflation is a decrease in the price of goods over time",
      B: "Interest rate changes are typically used by the government to control inflation",
      C: "Demand for SHOGUN's products is likely to decrease if interest rates increase",
      D: "An interest rate rise would cause an increase in SHOGUN's finance costs",
    },
    correctAnswer: ["B", "C", "D"],
    explanation:
      "B, C and D are correct.<br>" +
      "A is incorrect — inflation is an <strong>increase</strong> in the general price level over time, not a decrease (which would be deflation).<br>" +
      "B: Central banks and governments use interest rates as the primary tool to control inflation.<br>" +
      "C: Higher interest rates reduce consumer spending power, which typically lowers demand for goods including SHOGUN's products.<br>" +
      "D: SHOGUN uses variable rate bank loans, so an interest rate rise directly increases its borrowing costs.",
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. Companies generally require a long-term investment in permanent current assets<br>" +
      "2. Few companies have constant demand and constant costs; therefore, permanent current assets are required" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["C"],
    explanation:
      "Both statements are correct.<br>" +
      "1: Permanent current assets (the minimum level of inventory, receivables and cash a business must always hold) require long-term financing because they are always present.<br>" +
      "2: Because demand and costs fluctuate, companies must maintain a base level of current assets at all times — these are the permanent current assets.",
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. The conservative approach to the finance mix aims to fully match the maximum finance requirement of a company using short-term sources of finance<br>" +
      "2. Under an aggressive approach to financing, short-term sources can be used to finance temporary current assets, permanent current assets and non-current assets" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["B"],
    explanation:
      "Statement 2 only is correct.<br>" +
      "Statement 1 is incorrect — the conservative approach uses <strong>long-term</strong> sources of finance to fund both non-current assets and the <strong>maximum</strong> working capital requirement (including temporary current assets). Short-term finance is barely used.<br>" +
      "Statement 2 is correct — the aggressive approach uses cheap short-term finance to fund not just temporary current assets but also permanent current assets and even some non-current assets, accepting higher liquidity risk in exchange for lower financing costs.",
  },

  // --- Q41 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "Latox plc (\"LATOX\") sought a €/£ 1.5 million loan from its bank to invest in new projects. However, the " +
      "company was only granted a loan of €/£ 1 million." +
      "<br><br><strong>Requirement</strong><br>" +
      "Determine, based on the information provided, whether hard or soft capital rationing applies to LATOX." +
      "<br><em>Select the correct answer.</em>",
    options: {
      A: "Hard capital rationing as the capital rationing is imposed internally",
      B: "Soft capital rationing as the capital rationing is imposed externally",
      C: "Soft capital rationing as the capital rationing is imposed internally",
      D: "Hard capital rationing as the capital rationing is imposed externally",
    },
    correctAnswer: ["D"],
    explanation:
      "<strong>Hard capital rationing</strong> = imposed <strong>externally</strong> (e.g. by a bank refusing to lend the full amount).<br>" +
      "<strong>Soft capital rationing</strong> = imposed <strong>internally</strong> by management (e.g. a policy to limit borrowing).<br><br>" +
      "LATOX was <strong>refused</strong> the full loan by its bank — this is an external constraint, so it is <strong>hard capital rationing</strong>.",
  },

  // --- Q42 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is true in relation to the effect of an interest rate increase on financial decision making." +
      "<br><em>Select the correct answer.</em>",
    options: {
      A: "Goods become more expensive and the real value of money decreases",
      B: "It will be easier to borrow as the cost of capital decreases",
      C: "Demand will increase and prices will rise which will make projects more profitable",
      D: "The cost of capital will increase so less investments may be undertaken",
    },
    correctAnswer: ["D"],
    explanation:
      "D is correct — a higher interest rate raises the cost of capital, which increases the discount rate used in NPV calculations. This makes fewer projects viable and results in less investment.<br><br>" +
      "A is incorrect — that describes the effect of <strong>inflation</strong>, not an interest rate rise per se.<br>" +
      "B is incorrect — higher interest rates make borrowing <strong>more expensive</strong> and harder, not easier.<br>" +
      "C is incorrect — higher interest rates typically <strong>reduce</strong> demand (by making borrowing more expensive for consumers) and are used specifically to dampen price rises.",
  },

  // --- Q43 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. The capital asset pricing model (CAPM) measures the relationship between the risk and return of a company relative to that of the market<br>" +
      "2. A higher beta is an indication of a higher risk and a higher cost of equity" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["C"],
    explanation:
      "Both statements are correct.<br>" +
      "1: CAPM models how the expected return of an asset relates to its systematic risk (beta) relative to the market.<br>" +
      "2: Beta measures sensitivity to market movements. A higher beta means greater systematic risk, and per the CAPM formula K<sub>e</sub> = R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>), a higher beta produces a higher required return (cost of equity).",
  },

  // --- Q44 ------------------------------------------------------------------
  {
    section: "Finance Sample Paper 1",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. Equity funding can limit management decision making due to the imposition of restrictive covenants<br>" +
      "2. Loan covenants can include dividend restrictions, interest cover requirements and gearing restrictions" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["B"],
    explanation:
      "Statement 2 only is correct.<br>" +
      "Statement 1 is incorrect — restrictive covenants are associated with <strong>debt (loan) financing</strong>, not equity. Equity investors do not typically impose covenants; it is lenders who do.<br>" +
      "Statement 2 is correct — loan covenants commonly include dividend restrictions (to protect cash for debt repayment), minimum interest cover ratios, and maximum gearing ratios.",
  },
];

// --- Export ------------------------------------------------------------------
if (typeof module !== "undefined" && module.exports) {
  module.exports = { financeSamplePaper1 };
}
