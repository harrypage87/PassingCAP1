const financeMock2026 = [

  // --- Q1 -------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi_numeric",
    marks: 6,
    questionText:
      "Precision Ltd (\"PRECISION\"), a well-established manufacturer of industrial components, is considering " +
      "investing in artificial intelligence (AI) to optimise its production processes. The company plans to implement " +
      "an AI-driven system that will reduce production waste, improve efficiency, and lower operating costs over the " +
      "next five years. The financial details of the proposed investment are as follows:" +
      "<ol>" +
      "<li>The AI system requires an upfront investment of €/£ 100,000, which includes software, hardware, and " +
      "implementation costs. Capital allowances can be claimed on this investment on a 20% reducing balance basis;</li>" +
      "<li>The AI system is expected to result in annual savings of €/£ 160,000 in Year 1, with an expected 8% " +
      "increase per year thereafter;</li>" +
      "<li>Ongoing maintenance and staff training costs will amount to €/£ 100,000 in Year 1. These costs are " +
      "expected to decrease by 15% annually as the system becomes embedded;</li>" +
      "<li>One new member of staff will be required to manage the system at an annual cost of €/£ 78,000 in " +
      "year 1, increasing by 4% per year thereafter;</li>" +
      "<li>An annual marketing spend has been planned to make potential customers aware of the innovative " +
      "systems PRECISION operates. This will amount to €/£ 5,200 in year 1 and will increase with general " +
      "inflation of 3% each year;</li>" +
      "<li>The company pays corporate tax at a rate of 15%, with tax payable one year in arrears;</li>" +
      "<li>PRECISION expects to make losses on the project in year 2 of €/£ (14,475) resulting in a " +
      "corresponding tax credit.</li>" +
      "</ol>" +
      "<strong>Requirement</strong><br>" +
      "Complete the extract from the net present value schedule for <strong>Year 3</strong> of the investment.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "A cash inflow should be entered as a positive value. A cash outflow should be entered as a negative value.",
    parts: [
      { label: "Cost/£ savings (€/£)",            correctAnswer: 186624,  tolerance: 1 },
      { label: "Maintenance and training costs (€/£)", correctAnswer: -72250, tolerance: 1 },
      { label: "Additional staff (€/£)",           correctAnswer: -84365,  tolerance: 1 },
      { label: "Marketing (€/£)",                  correctAnswer: -5517,   tolerance: 1 },
      { label: "Capital allowance (€/£)",          correctAnswer: -12800,  tolerance: 0 },
      { label: "Taxable profit (€/£)",             correctAnswer: 11692,   tolerance: 2 },
      { label: "Tax (€/£)",                        correctAnswer: 2171,    tolerance: 2 },
      { label: "Capital allowance add-back (€/£)", correctAnswer: 12800,   tolerance: 0 },
      { label: "Net cash flows (€/£)",             correctAnswer: 26663,   tolerance: 5 },
    ],
    explanation:
      "<strong>Year 3 workings:</strong><br>" +
      "Cost savings: €/£ 160,000 × 1.08² = <strong>€/£ 186,624</strong><br>" +
      "Maintenance & training: €/£ 100,000 × 0.85² = <strong>€/£ (72,250)</strong><br>" +
      "Additional staff: €/£ 78,000 × 1.04² = <strong>€/£ (84,365)</strong><br>" +
      "Marketing: €/£ 5,200 × 1.03² = <strong>€/£ (5,517)</strong><br><br>" +
      "<strong>Capital allowances (20% reducing balance):</strong><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Year</th><th>Opening balance</th><th>WDA (20%)</th><th>Tax saving (15%)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>1</td><td>100,000</td><td>20,000</td><td>3,000</td></tr>" +
      "<tr><td>2</td><td>80,000</td><td>16,000</td><td>2,400</td></tr>" +
      "<tr><td>3</td><td>64,000</td><td><strong>12,800</strong></td><td>1,920</td></tr>" +
      "<tr><td>4</td><td>51,200</td><td>10,240</td><td>1,536</td></tr>" +
      "<tr><td>5</td><td>40,960</td><td>8,192</td><td>1,229</td></tr>" +
      "</tbody></table><br>" +
      "Taxable profit = 186,624 − 72,250 − 84,365 − 5,517 − 12,800 = <strong>11,692</strong><br>" +
      "Tax (on year 2 loss credit): €/£ 14,475 × 15% = <strong>€/£ 2,171</strong> (tax credit received in year 3)<br>" +
      "Net cash flows = 11,692 + 2,171 + 12,800 = <strong>€/£ 26,663</strong>",
  },

  // --- Q2 -------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Taxable profit is expected to be €/£ 32,290 in Year 5. Further, tax savings of €/£ 1,229 on capital allowances " +
      "will apply to Year 5. PRECISION has a nominal cost of capital of 11%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the discounted net tax cash outflow for <strong>Year 6</strong> of the net present value (NPV) schedule.<br>" +
      "The reference materials provided should be used where relevant.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "A cash inflow should be entered as a positive value. Use the minus sign \"-\" to indicate a cash outflow.",
    correctAnswer: -1934,
    tolerance: 2,
    explanation:
      "<strong>Year 6 — tax cash flows (tax on Year 5 profit, payable one year in arrears):</strong><br>" +
      "Tax on Year 5 profit: €/£ 32,290 × 15% = €/£ 4,844 (outflow)<br>" +
      "CA tax saving: €/£ 1,229 (inflow)<br>" +
      "Net tax cash flow = €/£ (4,844) + €/£ 1,229 = €/£ (3,615)<br><br>" +
      "Discount factor at 11% for Year 6 = 0.535 (from tables)<br>" +
      "DCF = €/£ (3,615) × 0.535 = <strong>€/£ (1,934)</strong>",
  },

  // --- Q3 -------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "PRECISION recently reviewed the discount rate used in its appraisal of potential investments. In 2xx4, " +
      "PRECISION operated with a real cost of capital of 8% and a general inflation rate of 1.9%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the nominal discount rate of PRECISION in 2xx4.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 10,
    tolerance: 0,
    explanation:
      "<strong>Fisher equation:</strong> (1 + m) = (1 + r)(1 + inf)<br>" +
      "(1 + m) = (1.08)(1.019)<br>" +
      "(1 + m) = 1.10<br>" +
      "m = <strong>10%</strong>",
  },

  // --- Q4 -------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "PRECISION has now determined that the project has a net present value of €/£ 67,600." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the sensitivity of PRECISION's project to an increase in the up-front " +
      "investment of €/£ 100,000.<br>" +
      "Your answer should be entered as a positive value.<br>" +
      "Your answer should be rounded to the nearest whole number.",
    correctAnswer: 68,
    tolerance: 1,
    explanation:
      "<strong>Sensitivity formula:</strong><br>" +
      "Sensitivity = NPV / PV of the variable being tested<br>" +
      "PV of the up-front investment = €/£ 100,000 (Year 0, so no discounting)<br>" +
      "Sensitivity = €/£ 67,600 / €/£ 100,000 = 67.6% ≈ <strong>68%</strong><br><br>" +
      "This means the up-front investment would need to increase by 68% before the project becomes unviable (NPV = 0).",
  },

  // --- Q5 -------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true in respect of net present value (NPV) calculations." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "An increase in the risk profile of an investment will lead to a lower NPV if the discount rate is adjusted accordingly",
      B: "NPV calculations assume that future cash flows are reinvested at the project's discount rate",
      C: "A project with a negative NPV should be accepted if alternative investment opportunities are not available",
      D: "NPV calculations assume that cash flows occur at year end",
    },
    correctAnswer: ["A", "B", "D"],
    explanation:
      "A, B and D are correct.<br>" +
      "C is incorrect — a project with a negative NPV destroys value and should generally be rejected regardless of alternatives.",
  },

  // --- Q6 -------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "SteelForge Ltd (\"STEEL\") is a manufacturer of industrial steel components. The company has faced increasing " +
      "pressure from competitors due to rising raw material costs and global supply chain disruptions. STEEL is one " +
      "of a great number of steel manufacturers in the region all supplying a very similar product at a very similar price." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify the market structure in which STEEL appears to operate." +
      "<br><em>Select the correct answer.</em>",
    options: {
      A: "Perfect competition",
      B: "Oligopoly",
      C: "Monopoly",
      D: "Imperfect competition",
    },
    correctAnswer: ["A"],
    explanation:
      "<strong>Perfect competition</strong> is characterised by: many sellers, a homogeneous (identical) product, " +
      "and price-taking behaviour. STEEL is one of many manufacturers selling a very similar product at a very similar " +
      "price — all hallmarks of a perfectly competitive market.",
  },

  // --- Q7 -------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "The directors of STEEL are considering selling the business. The Finance Director (FD) argues that revising " +
      "the valuation of assets and adjusting subjective liability balances could enhance the financial statements " +
      "without technically breaching accounting standards. This, in turn, might attract higher valuation offers from " +
      "potential buyers." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify the fundamental principle in Chartered Accountants Ireland Code of Ethics that could be compromised, " +
      "and the action that should be taken as a result." +
      "<br><em>Select the correct answer.</em>",
    options: {
      A: "Objectivity is under threat. The Board should not make changes but ask its independent auditor to adjust the financial statements as suggested to avoid the appearance of bias",
      B: "Professional competence and due care is under threat. The Board should make the adjustments as they are technically in line with accounting standards",
      C: "Integrity is under threat. The Board should reject the FD's proposal",
      D: "Professional behaviour is under threat. The Board should approve the adjustments but ensure full disclosure in the financial statements to avoid regulatory penalties",
    },
    correctAnswer: ["C"],
    explanation:
      "<strong>Integrity</strong> is the threatened principle. The FD's proposal, while potentially within the letter " +
      "of accounting standards, is designed to mislead potential buyers by presenting a more favourable picture of " +
      "the business than is genuinely warranted. This is dishonest and the Board should reject it.",
  },

  // --- Q8 -------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Tatolit plc (\"TATOLIT\") has an equity beta of 1.35 and the expected return on the market is 9%. The risk-free " +
      "rate of return is currently 3%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the current cost of the ordinary shares, using the capital asset pricing " +
      "model (CAPM).<br>" +
      "Your answer should be rounded to one decimal place.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 11.1,
    tolerance: 0.05,
    explanation:
      "<strong>CAPM formula:</strong> K<sub>e</sub> = R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)<br>" +
      "K<sub>e</sub> = 3 + 1.35(9 − 3)<br>" +
      "K<sub>e</sub> = 3 + 1.35 × 6<br>" +
      "K<sub>e</sub> = 3 + 8.1 = <strong>11.1%</strong>",
  },

  // --- Q9 -------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "TATOLIT has 5% bonds that will be redeemed in three years' time at nominal value. The coupon has recently " +
      "been paid and the bonds are currently trading at €/£ 98 per €/£ 100 nominal value. Assuming they are " +
      "purchased today and held until maturity, the net present value of the redeemable bond cash flows using two " +
      "discount rates is as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Discount rate</th><th>Net Present Value (€/£)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>3%</td><td>7.65</td></tr>" +
      "<tr><td>10%</td><td>(10.47)</td></tr>" +
      "</tbody></table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the current cost of the redeemable bonds.<br>" +
      "Your answer should be rounded to one decimal place.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 6.0,
    tolerance: 0.1,
    explanation:
      "<strong>IRR interpolation formula:</strong><br>" +
      "IRR = Rate 1 + [ NPV Rate 1 / (NPV Rate 1 − NPV Rate 2) ] × (Rate 2 − Rate 1)<br>" +
      "IRR = 3 + [ 7.65 / (7.65 − (−10.47)) ] × (10 − 3)<br>" +
      "IRR = 3 + [ 7.65 / 18.12 ] × 7<br>" +
      "IRR = 3 + 0.422 × 7 = 3 + 2.95 = <strong>5.95% ≈ 6.0%</strong><br><br>" +
      "Acceptable range: 5.9% – 6.1%",
  },

  // --- Q10 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "TATOLIT has 3% irredeemable bonds that have a market value of €/£ 94 ex-interest per €/£ 100 nominal value. " +
      "The applicable tax rate is 15%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%), the current cost of the irredeemable bonds.<br>" +
      "Your answer should be rounded to one decimal place.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 2.7,
    tolerance: 0.1,
    explanation:
      "<strong>Cost of irredeemable debt (post-tax):</strong><br>" +
      "K<sub>d</sub> = i(1 − t) / D<br>" +
      "i = coupon = 3 (on €/£ 100 nominal)<br>" +
      "t = 0.15<br>" +
      "D = market value = €/£ 94<br>" +
      "K<sub>d</sub> = 3(1 − 0.15) / 94 = 3 × 0.85 / 94 = 2.55 / 94 = <strong>2.71% ≈ 2.7%</strong><br><br>" +
      "Acceptable range: 2.6% – 2.8%",
  },

  // --- Q11 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Nontia plc (\"NONTIA\") has the following capital structure:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;width:100%;'>" +
      "<thead><tr><th></th><th>Nominal value (€/£)</th><th>Market value (€/£)</th><th>Cost (%)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Ordinary share capital (€/£ 1.00 per share)</td><td>200,000</td><td>378,053</td><td>11.2</td></tr>" +
      "<tr><td>7% redeemable bonds</td><td>75,000</td><td>78,940</td><td>8.1</td></tr>" +
      "<tr><td>5% preference shares</td><td>25,000</td><td>30,280</td><td>6.4</td></tr>" +
      "</tbody></table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate, in percentage terms (%) and based on market values, the weighted average cost of capital of NONTIA.<br>" +
      "Your answer should be rounded to one decimal place.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 10.4,
    tolerance: 0.1,
    explanation:
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Component</th><th>Market value (€/£)</th><th>Weighting</th><th>Cost (%)</th><th>Weighted cost (%)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Ordinary shares</td><td>378,053</td><td>0.78</td><td>11.2</td><td>8.69</td></tr>" +
      "<tr><td>6% irredeemable bonds</td><td>78,940</td><td>0.16</td><td>8.1</td><td>1.31</td></tr>" +
      "<tr><td>8% preference shares</td><td>30,280</td><td>0.06</td><td>6.4</td><td>0.40</td></tr>" +
      "<tr><td><strong>Total</strong></td><td><strong>487,273</strong></td><td></td><td></td><td><strong>WACC = 10.4%</strong></td></tr>" +
      "</tbody></table><br>" +
      "Acceptable range: 10.3% – 10.5%",
  },

  // --- Q12 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "The cost of equity is usually higher than the cost of debt because equity holders take on greater risk",
      B: "As equity dividends are tax deductible, the net cost of equity is typically lower than its stated return",
      C: "Higher levels of debt increase financial risk and can lead to higher borrowing costs for a company",
      D: "Debt financing can influence corporate decision-making due to the financial discipline imposed by mandatory interest payments",
    },
    correctAnswer: ["A", "C", "D"],
    explanation:
      "A, C and D are correct.<br>" +
      "B is incorrect — equity dividends are <strong>not</strong> tax deductible (unlike interest on debt). It is debt " +
      "that has a tax shield, which is why the after-tax cost of debt is lower than its stated rate.",
  },

  // --- Q13 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. In the event of liquidation, bondholders will be repaid before preference shareholders<br>" +
      "2. Both bondholders and preference shareholders receive fixed returns, but only bondholders have voting rights" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["A"],
    explanation:
      "Statement 1 is correct — bondholders (debt holders) rank ahead of preference shareholders in a liquidation.<br>" +
      "Statement 2 is incorrect — preference shareholders generally do <strong>not</strong> have voting rights either " +
      "(voting rights belong to ordinary shareholders, not bondholders).",
  },

  // --- Q14 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "MechCore Ltd (\"MECHCORE\") manufactures specialised components for the automotive industry. The " +
      "company is seeking to improve the efficiency of its working capital management by optimising inventory " +
      "ordering decisions." +
      "<br><br>MECHCORE consumes 18,000 units of a key raw material at a constant rate each year. The ordering cost is " +
      "€/£ 250 per order, and MECHCORE follows the economic order quantity (EOQ) model to determine the optimal " +
      "order size. The holding cost per unit per year is €/£ 20." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the economic order quantity (EOQ) for MECHCORE's raw material orders.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 671,
    tolerance: 1,
    explanation:
      "<strong>EOQ formula:</strong> EOQ = √(2FU / CP)<br>" +
      "F = ordering cost = €/£ 250<br>" +
      "U = annual demand = 18,000 units<br>" +
      "CP = holding cost per unit = €/£ 20<br>" +
      "EOQ = √(2 × 250 × 18,000 / 20) = √(9,000,000 / 20) = √450,000 = <strong>671 units</strong>",
  },

  // --- Q15 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi_numeric",
    marks: 2,
    questionText:
      "Senior company management announced an initiative that would reduce the annual holding cost to €/£ 18 per " +
      "item but increase the ordering cost to €/£ 252.05. Under this proposal, the economic order quantity (EOQ) " +
      "would be 710 items." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate MECHCORE's annual ordering and holding costs under the new proposal.<br>" +
      "Your answers should be rounded to the nearest whole number.<br>" +
      "All answers should be entered as positive values.",
    parts: [
      { label: "Ordering costs (€/£)",  correctAnswer: 6390, tolerance: 5 },
      { label: "Holding costs (€/£)",   correctAnswer: 6390, tolerance: 5 },
    ],
    explanation:
      "Ordering costs = ordering cost per order × number of orders<br>" +
      "= €/£ 252.05 × (18,000 / 710) = €/£ 252.05 × 25.35 = <strong>€/£ 6,390</strong><br><br>" +
      "Holding costs = holding cost per unit × average inventory<br>" +
      "= €/£ 18 × (710 / 2) = €/£ 18 × 355 = <strong>€/£ 6,390</strong><br><br>" +
      "Note: at the EOQ, ordering costs = holding costs — this confirms 710 is the correct EOQ under the new proposal.",
  },

  // --- Q16 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "MECHCORE currently does not maintain a buffer inventory. Orders for raw materials have a lead time of three " +
      "weeks. The Operations Manager has proposed implementing a reorder level of 1,200 units. The company " +
      "operates 50 weeks per year." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the level of buffer inventory, in units, that MECHCORE will carry if the Operations Manager's " +
      "proposal is accepted.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "All answers should be entered as positive values.",
    correctAnswer: 120,
    tolerance: 0,
    explanation:
      "Average weekly demand = 18,000 / 50 = 360 units per week<br>" +
      "Demand during lead time = 360 × 3 weeks = 1,080 units<br>" +
      "Reorder level = Buffer inventory + demand during lead time<br>" +
      "1,200 = Buffer inventory + 1,080<br>" +
      "Buffer inventory = <strong>120 units</strong>",
  },

  // --- Q17 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Which of the following statements is/are true?" +
      "<br><br>" +
      "1. If a company increases its order size while keeping demand constant, total inventory costs will always " +
      "decrease due to lower ordering costs<br>" +
      "2. Maintaining a buffer inventory ensures that supply to customers is uninterrupted, but it does not " +
      "necessarily improve overall working capital efficiency" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["B"],
    explanation:
      "Statement 2 is correct — buffer inventory protects supply continuity but ties up cash, which can reduce " +
      "working capital efficiency.<br>" +
      "Statement 1 is incorrect — increasing order size reduces ordering costs but <strong>increases holding costs</strong>. " +
      "Total inventory costs will only decrease if you are currently ordering less than the EOQ. Beyond the EOQ, " +
      "total costs rise.",
  },

  // --- Q18 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi_numeric",
    marks: 2,
    questionText:
      "Veltron Ltd (\"VELTRON\") is a manufacturer of high-performance electronic components. The company " +
      "generates annual credit sales of €/£ 58,200,000 and finances its working capital through a bank overdraft with " +
      "an annual interest rate of 5.5%. On average, customers take 48 days to pay. Bad debts account for 0.8% of " +
      "total credit sales. A 365-day year should be used for any relevant calculations." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the total cost of VELTRON's trade receivables policy.<br>" +
      "Your answers should be rounded to the nearest whole number.<br>" +
      "All answers should be entered as positive values.",
    parts: [
      { label: "Trade receivables finance cost (€/£)", correctAnswer: 420953, tolerance: 100 },
      { label: "Bad debt (€/£)",                       correctAnswer: 465600, tolerance: 0   },
    ],
    explanation:
      "Average receivables = €/£ 58,200,000 × 48 / 365 = €/£ 7,653,699<br>" +
      "Finance cost = €/£ 7,653,699 × 5.5% = <strong>€/£ 420,953</strong><br><br>" +
      "Bad debt = €/£ 58,200,000 × 0.8% = <strong>€/£ 465,600</strong><br><br>" +
      "Total cost of trade receivables policy = €/£ 886,553",
  },

  // --- Q19 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "VELTRON's Sales Director has proposed introducing a discount of 0.75% to those customers who pay within " +
      "25 days. As a consequence, it is expected that 30% of customers will avail of this discount and that total sales " +
      "will increase by 2%. Customers who do not avail of the discount will pay after an average of 50 days." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the total value of the discount taken by customers.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 133569,
    tolerance: 100,
    explanation:
      "New total sales = €/£ 58,200,000 × 1.02 = €/£ 59,364,000<br>" +
      "Customers taking discount = 30% of new sales<br>" +
      "Discount = €/£ 59,364,000 × 30% × 0.75% = <strong>€/£ 133,569</strong>",
  },

  // --- Q20 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi_numeric",
    marks: 2,
    questionText:
      "VELTRON's Sales Director has proposed introducing a discount of 0.75% to those customers who pay within " +
      "25 days. As a consequence, it is expected that 30% of customers will avail of this discount and that total sales " +
      "will increase by 2%. Customers who do not avail of the discount will pay after an average of 50 days." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate, assuming the discount is introduced, the following values:" +
      "<ul><li>Total sales</li><li>Trade receivables balance of the customers who do not take the discount</li></ul>" +
      "Your answers should be rounded to the nearest whole number.<br>" +
      "All answers should be entered as positive values.<br>" +
      "A 365-day year should be used for any relevant calculations.",
    parts: [
      { label: "Total sales (€/£)",              correctAnswer: 59364000, tolerance: 0    },
      { label: "Trade receivables balance (€/£)", correctAnswer: 5692438, tolerance: 100  },
    ],
    explanation:
      "Total sales = €/£ 58,200,000 × 1.02 = <strong>€/£ 59,364,000</strong><br><br>" +
      "Customers not taking discount = 70% of new sales, paying after 50 days<br>" +
      "Trade receivables balance = €/£ 59,364,000 × 70% × 50/365 = <strong>€/£ 5,692,438</strong>",
  },

  // --- Q21 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify the statement(s) that describe good trade receivables management practice." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "A company should establish a documented credit control policy outlining payment terms, follow-up procedures, and escalation steps for overdue accounts",
      B: "If a customer exceeds its credit terms, the preferred approach is to extend further credit automatically to maintain the business relationship",
      C: "A staged collection process, including reminder letters, statements of account, and formal legal notices, is a structured approach to reducing overdue receivables",
      D: "It may be advisable to offer a discount to customers where the entity has liquidity problems and no cheaper source of finance is readily available",
    },
    correctAnswer: ["A", "C", "D"],
    explanation:
      "A, C and D are correct.<br>" +
      "B is incorrect — automatically extending further credit to customers who have already exceeded their terms " +
      "increases credit risk and bad debt exposure. This is poor credit management practice.",
  },

  // --- Q22 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify the true statement(s) from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "A conservative working capital strategy typically results in higher liquidity but may lead to lower returns",
      B: "A decrease in trade payable days will increase the cash available to the company",
      C: "The precautionary motive for holding cash ensures that a business can meet unforeseen financial obligations",
      D: "An increase in the cash conversion cycle leads to a decrease in the working capital requirement",
    },
    correctAnswer: ["A", "C"],
    explanation:
      "A and C are correct.<br>" +
      "B is incorrect — a <strong>decrease</strong> in payable days means the company pays suppliers faster, " +
      "which <strong>reduces</strong> cash available.<br>" +
      "D is incorrect — a longer cash conversion cycle means cash is tied up in working capital for longer, " +
      "which <strong>increases</strong> the working capital requirement.",
  },

  // --- Q23 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Delvex plc (\"DELVEX\") is a publicly listed pharmaceutical company. DELVEX's board consists of five " +
      "executive directors and four non-executive directors. One of the executive directors chairs the audit committee." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. The chair of the audit committee should be an independent non-executive director<br>" +
      "2. The composition of DELVEX's board meets corporate governance requirements as it has more than two non-executive directors" +
      "<br><br><em>Select the correct answer.</em>",
    options: {
      A: "(1) only",
      B: "(2) only",
      C: "Both (1) and (2)",
      D: "Neither (1) or (2)",
    },
    correctAnswer: ["A"],
    explanation:
      "Statement 1 is correct — the audit committee chair must be an independent non-executive director. " +
      "Having an executive director chair the audit committee (as at DELVEX) is a governance failure.<br>" +
      "Statement 2 is incorrect — good governance requires that at least half the board (excluding the chair) " +
      "comprises independent non-executive directors. DELVEX has 5 executive and 4 non-executive directors, " +
      "so non-executives are in the minority.",
  },

  // --- Q24 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "The non-executive directors at DELVEX receive performance-related remuneration based on company profits " +
      "and have extensive experience in unrelated industries. The chief executive personally selects and appoints " +
      "all board members, ensuring that candidates will be a 'good fit' for the culture at DELVEX. The board of " +
      "directors meets an average of four times per year to review strategic decisions and financial performance." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "Non-executive directors should avoid profit-based remuneration to ensure their independence from executive decision-making",
      B: "All business experience of non-executive directors is equally valuable regardless of whether it is in the industry in which the company operates",
      C: "Board meetings should ideally be held more frequently than four times a year to allow for effective oversight and strategic input",
      D: "It is important for the chief executive to personally select and appoint all board members to avoid employing poor candidates",
    },
    correctAnswer: ["A", "C"],
    explanation:
      "A and C are correct.<br>" +
      "B is incorrect — industry-relevant experience is generally more valuable for effective oversight.<br>" +
      "D is incorrect — the CEO personally appointing all board members undermines board independence and is " +
      "a significant governance weakness. Appointments should be made by a nominations committee.",
  },

  // --- Q25 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. The agency problem emerges when the personal incentives of managers align with the goal of maximising long-term shareholder value<br>" +
      "2. Basing management compensation on short-term measures ensures that the goals of investors and management are aligned" +
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
      "Statement 1 is incorrect — the agency problem arises when manager incentives <strong>diverge from</strong> " +
      "shareholder interests, not when they align.<br>" +
      "Statement 2 is incorrect — short-term compensation measures can create misalignment, incentivising managers " +
      "to focus on short-term results at the expense of long-term shareholder value.",
  },

  // --- Q26 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi_numeric",
    marks: 5,
    questionText:
      "At 31 December 2xx4, VERNEX plc (\"VERNEX\") had 20,000 ordinary shares of €/£ 1 each in issue, with the " +
      "shares trading at €/£ 35 each. The company had a 6% long-term loan of €/£ 80,000 at that date and paid " +
      "dividends of €/£ 1.40 per share in 2xx4. VERNEX recorded profit after tax of €/£ 89,740 for 2xx4." +
      "<br><br><strong>Note:</strong> Gearing = (book value of debt / market value of equity)" +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the following ratios of VERNEX for the year ended 31 December 2xx4:<br>" +
      "• Gearing (%)<br>" +
      "• Return on book value of capital employed (%)<br>" +
      "• Earnings per share (cents/pence)<br>" +
      "• Dividend cover (times)<br>" +
      "• Dividend yield (%)<br>" +
      "Your answers should be rounded to the nearest whole number.<br>" +
      "All answers should be entered as positive values.",
    parts: [
      { label: "Gearing (%)",                                    correctAnswer: 11,  tolerance: 1 },
      { label: "Return on book value of capital employed (%)",   correctAnswer: 90,  tolerance: 1 },
      { label: "Earnings per share (cents/pence)",               correctAnswer: 449, tolerance: 1 },
      { label: "Dividend cover (times)",                         correctAnswer: 3,   tolerance: 1 },
      { label: "Dividend yield (%)",                             correctAnswer: 4,   tolerance: 0 },
    ],
    explanation:
      "<strong>Gearing</strong> = Book value of debt / Market value of equity<br>" +
      "= €/£ 80,000 / (20,000 × €/£ 35) = 80,000 / 700,000 = <strong>11.4% ≈ 11%</strong><br><br>" +
      "<strong>ROCE</strong> = Profit after tax / (Equity book value + Debt)<br>" +
      "= €/£ 89,740 / (€/£ 20,000 + €/£ 80,000) = 89,740 / 100,000 = <strong>90%</strong><br><br>" +
      "<strong>EPS</strong> = Profit after tax / Number of shares<br>" +
      "= €/£ 89,740 / 20,000 = <strong>448.7p ≈ 449c/p</strong><br><br>" +
      "<strong>Dividend cover</strong> = Profit after tax / Total dividends<br>" +
      "= €/£ 89,740 / (20,000 × €/£ 1.40) = 89,740 / 28,000 = <strong>3.2 ≈ 3 times</strong><br><br>" +
      "<strong>Dividend yield</strong> = Dividend per share / Share price<br>" +
      "= €/£ 1.40 / €/£ 35 = <strong>4%</strong>",
  },

  // --- Q27 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi_numeric",
    marks: 3,
    questionText:
      "On 1 January 2xx5, VERNEX's total debt increased to €/£ 110,000. The Finance Director expects that revenue " +
      "for the year ended 31 December 2xx5 will decline by 15% from €/£ 506,800 in the previous year, and the " +
      "operating profit margin will be 25%. The company's average cost of debt remains at 6%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate VERNEX's projected profit before tax for the year ended 31 December 2xx5.<br>" +
      "Your answers should be rounded to the nearest whole number.<br>" +
      "All answers should be entered as positive values.",
    parts: [
      { label: "Revenue (€/£)",          correctAnswer: 430780, tolerance: 0 },
      { label: "Costs (€/£)",            correctAnswer: 323085, tolerance: 0 },
      { label: "Operating profit (€/£)", correctAnswer: 107695, tolerance: 0 },
      { label: "Finance cost (€/£)",     correctAnswer: 6600,   tolerance: 0 },
      { label: "Profit before tax (€/£)",correctAnswer: 101095, tolerance: 0 },
    ],
    explanation:
      "Revenue = €/£ 506,800 × (1 − 0.15) = €/£ 506,800 × 0.85 = <strong>€/£ 430,780</strong><br>" +
      "Operating profit margin = 25%, so operating profit = €/£ 430,780 × 25% = <strong>€/£ 107,695</strong><br>" +
      "Costs = €/£ 430,780 − €/£ 107,695 = <strong>€/£ 323,085</strong><br>" +
      "Finance cost = €/£ 110,000 × 6% = <strong>€/£ 6,600</strong><br>" +
      "Profit before tax = €/£ 107,695 − €/£ 6,600 = <strong>€/£ 101,095</strong>",
  },

  // --- Q28 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. The interest expense incurred by bond issuers is generally tax deductible, which helps reduce the issuer's taxable income<br>" +
      "2. The coupon rate on a convertible bond is often lower than on an ordinary bond" +
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
      "1. Interest on bonds is tax deductible — this creates the tax shield benefit of debt financing.<br>" +
      "2. Convertible bonds carry a lower coupon because the option to convert to equity has value — investors " +
      "accept a lower interest rate in exchange for the conversion option.",
  },

  // --- Q29 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "TechnoCorp Ltd (\"TECHNO\"), an electronics manufacturer, is considering investing in a new robotic assembly " +
      "machine to streamline its production process. TECHNO will purchase the machine for €/£ 70,000. The " +
      "machine is expected to incur annual maintenance costs of €/£ 4,000, and it will be used for four years before " +
      "being replaced. At the end of this four-year period, TECHNO anticipates selling the machine for a residual " +
      "value of €/£ 15,000. The company's weighted average cost of capital is 10%." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the net present value of cash flows under the four-year replacement cycle.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "A cash inflow should be entered as a positive value. Use the minus sign \"-\" to indicate a cash outflow.",
    correctAnswer: -72431,
    tolerance: 5,
    explanation:
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Year</th><th>Cash flow (€/£)</th><th>DF @ 10%</th><th>PV (€/£)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>0</td><td>(70,000)</td><td>1.000</td><td>(70,000)</td></tr>" +
      "<tr><td>1</td><td>(4,000)</td><td>0.909</td><td>(3,636)</td></tr>" +
      "<tr><td>2</td><td>(4,000)</td><td>0.826</td><td>(3,304)</td></tr>" +
      "<tr><td>3</td><td>(4,000)</td><td>0.751</td><td>(3,004)</td></tr>" +
      "<tr><td>4</td><td>(4,000) + 15,000 = 11,000</td><td>0.683</td><td>7,513</td></tr>" +
      "</tbody></table><br>" +
      "NPV = −70,000 − 3,636 − 3,304 − 3,004 + 7,513 = <strong>€/£ (72,431)</strong><br><br>" +
      "Alternative using annuity factor:<br>" +
      "Maintenance: €/£ (4,000) × 3.170 = €/£ (12,680)<br>" +
      "Scrap: €/£ 15,000 × 0.683 = €/£ 10,245<br>" +
      "NPV = −70,000 − 12,680 + 10,245 = <strong>€/£ (72,435)</strong> (slight rounding difference)",
  },

  // --- Q30 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "If the machine was replaced after five years, TECHNO has determined the net present value of the costs in " +
      "respect of the five-year replacement cycle to be €/£ 78,954." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the equivalent annual cost (EAC) under the five-year replacement cycle.<br>" +
      "The reference materials provided should be used where relevant.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 20827,
    tolerance: 10,
    explanation:
      "<strong>EAC formula:</strong> EAC = NPV of costs / Annuity factor<br>" +
      "Annuity factor @ 10% for 5 years = 3.791 (from tables)<br>" +
      "EAC = €/£ 78,954 / 3.791 = <strong>€/£ 20,827</strong>",
  },

  // --- Q31 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi_numeric",
    marks: 6,
    questionText:
      "Martin Clarkson is a client of your accountancy practice. The firm's partner has requested your assistance in " +
      "reviewing Martin's personal financial affairs. You have been provided with the following details as at 1 January 2xx5:" +
      "<br><br><strong>Salary and Rental Income</strong><br>" +
      "Martin is employed as an architect and receives an after-tax monthly salary of €/£ 4,500. In addition, he owns " +
      "a commercial property from which he earns a gross rental income of €/£ 2,000 per month. A tax rate of 25% " +
      "applies to all pre-tax income." +
      "<br><br><strong>Property and Loan Payments</strong><br>" +
      "Martin owns his own home, for which he makes monthly mortgage payments of €/£ 1,800. He has an additional " +
      "mortgage on the commercial property with monthly repayments of €/£ 1,200. Moreover, Martin carries a " +
      "personal loan debt of €/£ 40,000 at an annual percentage rate (APR) of 18%, and he pays only the interest on " +
      "this loan with no capital repayments." +
      "<br><br><strong>Living and Non-Discretionary Expenses</strong><br>" +
      "Martin spends €/£ 1,200 per month on living expenses and he incurs non-discretionary expenses averaging " +
      "€/£ 2,500 per month." +
      "<br><br><strong>Pension Contributions</strong><br>" +
      "Martin makes personal pension contributions equal to 8% of his after-tax salary." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate Martin's projected net cash flow for each of the categories for the year ended 31 December 2xx5.<br>" +
      "Your answers should be rounded to the nearest whole number.<br>" +
      "A cash inflow should be entered as a positive value. A cash outflow should be entered as a negative value.",
    parts: [
      { label: "Salary & rental income (€/£)",              correctAnswer: 72000,  tolerance: 0 },
      { label: "Property & loan payments (€/£)",            correctAnswer: -43200, tolerance: 0 },
      { label: "Living & non-discretionary expenses (€/£)", correctAnswer: -44400, tolerance: 0 },
      { label: "Pension contributions (€/£)",               correctAnswer: -4320,  tolerance: 0 },
    ],
    explanation:
      "<strong>Salary & rental income:</strong><br>" +
      "Post-tax salary = €/£ 4,500 × 12 = €/£ 54,000<br>" +
      "Gross rental income = €/£ 2,000 × 12 = €/£ 24,000<br>" +
      "Tax on rental = €/£ 24,000 × 25% = €/£ (6,000)<br>" +
      "Total = €/£ 54,000 + €/£ 24,000 − €/£ 6,000 = <strong>€/£ 72,000</strong><br><br>" +
      "<strong>Property & loan payments:</strong><br>" +
      "Home mortgage = (€/£ 1,800 + €/£ 1,200) × 12 = €/£ (36,000)<br>" +
      "Credit card interest = €/£ 40,000 × 18% = €/£ (7,200)<br>" +
      "Total = <strong>€/£ (43,200)</strong><br><br>" +
      "<strong>Living & non-discretionary expenses:</strong><br>" +
      "Living expenses = €/£ 1,200 × 12 = €/£ (14,400)<br>" +
      "Non-discretionary = €/£ 2,500 × 12 = €/£ (30,000)<br>" +
      "Total = <strong>€/£ (44,400)</strong><br><br>" +
      "<strong>Pension contributions:</strong><br>" +
      "= €/£ 54,000 × 8% = <strong>€/£ (4,320)</strong>",
  },

  // --- Q32 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify, in respect of the capital asset pricing model (CAPM), the true statement(s) from the following." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "CAPM assumes that systematic risk can be eliminated by investors through diversification",
      B: "Beta measures the level of investment made by a company to produce returns in excess of the market average",
      C: "A beta factor of 1.3 is less sensitive to factors that affect the market",
      D: "CAPM is reliant on historic data to determine the level of risk attributable to the entity",
    },
    correctAnswer: ["D"],
    explanation:
      "D is the only correct statement.<br>" +
      "A is incorrect — CAPM assumes that <strong>unsystematic</strong> (specific) risk can be eliminated by " +
      "diversification. Systematic (market) risk cannot be diversified away.<br>" +
      "B is incorrect — beta measures <strong>sensitivity of a share's return to market movements</strong>, " +
      "not investment levels.<br>" +
      "C is incorrect — a beta of 1.3 means the share is <strong>more</strong> sensitive to market movements " +
      "than the market average (beta = 1). A beta below 1 would indicate less sensitivity.",
  },

  // --- Q33 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify, in respect of financial ratios, the correct statement from the following." +
      "<br><em>Select the correct answer.</em>",
    options: {
      A: "Return on capital employed (ROCE) measures the company's efficiency at paying dividends to shareholders from every unit of shareholders' equity and long-term debt finance",
      B: "Gross margin indicates the percentage of revenue that exceeds expenses reflecting the core profitability of the business after administrative and other expenses",
      C: "Interest cover ratio shows the extent to which a company's operating income can cover its interest expenses, indicating ability to meet interest obligations",
      D: "Gearing ratio calculates the proportion of a company's operations funded by equity alone, highlighting financial stability and independence from creditors",
    },
    correctAnswer: ["C"],
    explanation:
      "C is correct — the interest cover ratio = operating profit / interest expense, and shows how many times " +
      "a company can cover its interest obligations from operating income.<br><br>" +
      "A is incorrect — ROCE measures return generated from capital employed, not dividend efficiency.<br>" +
      "B is incorrect — gross margin measures profitability <strong>before</strong> admin and other expenses " +
      "(it is operating/net margin that captures those costs).<br>" +
      "D is incorrect — the gearing ratio measures the proportion funded by <strong>debt</strong>, not equity.",
  },

  // --- Q34 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true in respect of the dividend growth model." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "The dividend growth model assumes that dividends grow at a constant rate indefinitely",
      B: "The dividend growth model applies a measure of systematic risk to determine the cost of equity",
      C: "The dividend growth model uses the risk-free rate to calculate the expected growth in dividends",
      D: "The dividend growth model calculates the cost of equity based on expected future dividends and their constant growth rate",
    },
    correctAnswer: ["A", "D"],
    explanation:
      "A and D are correct.<br>" +
      "B is incorrect — systematic risk is used by the <strong>CAPM</strong>, not the dividend growth model.<br>" +
      "C is incorrect — the dividend growth model uses the current share price, expected dividend and growth " +
      "rate to derive K<sub>e</sub>. It does not use the risk-free rate.",
  },

  // --- Q35 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi_numeric",
    marks: 2,
    questionText:
      "Techtronix Ltd (\"TECHTRONIX\") is a manufacturer of printed circuit boards and is considering an investment " +
      "in a new automated production line. The production line is expected to operate over a four-year period." +
      "<br><br>The profit before depreciation is projected as follows:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Year</th><th>€/£</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>Year 1</td><td>1,500,000</td></tr>" +
      "<tr><td>Year 2</td><td>1,400,000</td></tr>" +
      "<tr><td>Year 3</td><td>1,300,000</td></tr>" +
      "<tr><td>Year 4</td><td>1,200,000</td></tr>" +
      "</tbody></table>" +
      "<br>The new production line will cost €/£ 2,500,000. It will be depreciated on a straight-line basis over the " +
      "four-year period, with a residual value of €/£ 500,000 at the end of the project." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate:<br>" +
      "• The average accounting profit over the term of the project<br>" +
      "• The accounting rate of return (ARR) based on the average investment<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "All answers should be entered as positive values.",
    parts: [
      { label: "Average accounting profit (€/£)", correctAnswer: 850000, tolerance: 0 },
      { label: "Accounting rate of return (%)",   correctAnswer: 57,     tolerance: 1 },
    ],
    explanation:
      "Total cash profit = €/£ 1,500,000 + €/£ 1,400,000 + €/£ 1,300,000 + €/£ 1,200,000 = €/£ 5,400,000<br>" +
      "Total depreciation = (€/£ 2,500,000 − €/£ 500,000) = €/£ 2,000,000<br>" +
      "Net total profit = €/£ 5,400,000 − €/£ 2,000,000 = €/£ 3,400,000<br>" +
      "Average accounting profit = €/£ 3,400,000 / 4 = <strong>€/£ 850,000</strong><br><br>" +
      "Average investment = (€/£ 2,500,000 + €/£ 500,000) / 2 = €/£ 1,500,000<br>" +
      "ARR = €/£ 850,000 / €/£ 1,500,000 = 56.7% ≈ <strong>57%</strong>",
  },

  // --- Q36 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "TECHTRONIX has a cost of capital of 8%. It can be assumed that the net annual operating cashflows of the " +
      "project are equal to the annual profit before depreciation." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the discounted payback period (in years) of the proposed investment.<br>" +
      "The reference materials provided should be used where relevant.<br>" +
      "Your answer should be in years and rounded to one decimal place.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 1.9,
    tolerance: 0.1,
    explanation:
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Year</th><th>Cash flow (€/£)</th><th>DF @ 8%</th><th>Discounted CF (€/£)</th><th>Cumulative (€/£)</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>0</td><td>(2,500,000)</td><td>1.000</td><td>(2,500,000)</td><td>(2,500,000)</td></tr>" +
      "<tr><td>1</td><td>1,500,000</td><td>0.926</td><td>1,389,000</td><td>(1,111,000)</td></tr>" +
      "<tr><td>2</td><td>1,400,000</td><td>0.857</td><td>1,199,800</td><td>88,800</td></tr>" +
      "<tr><td>3</td><td>1,300,000</td><td>0.794</td><td>1,032,200</td><td>1,121,000</td></tr>" +
      "<tr><td>4</td><td>1,200,000</td><td>0.735</td><td>882,000</td><td>2,003,000</td></tr>" +
      "</tbody></table><br>" +
      "Payback occurs during Year 2. Proportion of Year 2 remaining = €/£ 1,111,000 / €/£ 1,199,800 = 0.926<br>" +
      "Discounted payback period = 1 + 0.926 = <strong>1.9 years</strong>",
  },

  // --- Q37 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is true." +
      "<br><em>Select the correct answer.</em>",
    options: {
      A: "The accounting rate of return (ARR) method includes an adjustment for the time value of money",
      B: "The discounted payback period method discounts future cash flows to reflect their present value and considers the overall profitability of the project",
      C: "If the internal rate of return (IRR) is greater than the company's discount rate, then the project is financially attractive",
      D: "The accounting rate of return (ARR) method will not be influenced by the entity's choice of accounting policies",
    },
    correctAnswer: ["C"],
    explanation:
      "C is correct — if IRR > cost of capital, the project generates returns above the required rate and should be accepted.<br><br>" +
      "A is incorrect — ARR does <strong>not</strong> adjust for the time value of money.<br>" +
      "B is incorrect — the discounted payback period does discount cash flows but does <strong>not</strong> " +
      "consider overall profitability (cash flows beyond the payback point are ignored).<br>" +
      "D is incorrect — ARR uses accounting profit, which <strong>is</strong> influenced by choices such as " +
      "depreciation method.",
  },

  // --- Q38 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is true." +
      "<br><em>Select the correct answer.</em>",
    options: {
      A: "Bonds are typically used as a short-term source of finance",
      B: "Bonds are normally secured by a charge on the purchasing company's assets",
      C: "Bonds are generally traded on secondary markets, providing liquidity for investors",
      D: "Interest on bonds is based on the market value and is usually paid at regular intervals",
    },
    correctAnswer: ["C"],
    explanation:
      "C is correct — bonds are traded on secondary markets (e.g. stock exchanges), providing liquidity for investors.<br><br>" +
      "A is incorrect — bonds are a <strong>long-term</strong> source of finance.<br>" +
      "B is incorrect — bonds may or may not be secured. Debentures are secured; unsecured loan notes are not. " +
      "The statement is too broad.<br>" +
      "D is incorrect — bond interest (the coupon) is based on the <strong>nominal/face value</strong>, not the market value.",
  },

  // --- Q39 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi_numeric",
    marks: 2,
    questionText:
      "Novex plc (\"NOVEX\") is a large manufacturing firm that is expecting its working capital position to deteriorate " +
      "due to anticipated supply chain disruptions. Currently, the company holds inventories valued at €/£ 1,500,000 " +
      "and inventories are held for an average of 30 days before being sold. NOVEX maintains trade payables of " +
      "€/£ 600,000 and pays its suppliers after an average of 40 days." +
      "<br><br>Forecasts indicate that the inventory holding period will increase to 37 days and, following recent negotiations, " +
      "NOVEX expects its credit terms with suppliers to deteriorate, reducing the payables period to 35 days. NOVEX " +
      "currently has a positive bank balance of €/£ 380,000." +
      "<br><br><strong>Requirement</strong><br>" +
      "Calculate the expected bank balance after applying the forecast working capital changes.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "A cash increase should be entered as a positive value. Use the minus sign \"-\" to indicate a cash decrease.",
    parts: [
      { label: "Current bank balance (€/£)",             correctAnswer: 380000,  tolerance: 0 },
      { label: "Impact of change in inventory days (€/£)", correctAnswer: -350000, tolerance: 0 },
      { label: "Impact of change in payables days (€/£)", correctAnswer: -75000,  tolerance: 0 },
      { label: "Expected bank balance (€/£)",             correctAnswer: -45000,  tolerance: 0 },
    ],
    explanation:
      "<strong>Inventory impact:</strong><br>" +
      "Daily inventory cost = €/£ 1,500,000 / 30 = €/£ 50,000 per day<br>" +
      "Increase in holding period = 7 days<br>" +
      "Cash tied up = €/£ 50,000 × 7 = <strong>€/£ (350,000)</strong><br><br>" +
      "<strong>Payables impact:</strong><br>" +
      "Daily payables = €/£ 600,000 / 40 = €/£ 15,000 per day<br>" +
      "Reduction in payables period = 5 days<br>" +
      "Cash tied up = €/£ 15,000 × 5 = <strong>€/£ (75,000)</strong><br><br>" +
      "Expected bank balance = €/£ 380,000 − €/£ 350,000 − €/£ 75,000 = <strong>€/£ (45,000)</strong>",
  },

  // --- Q40 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "NOVEX has a history of profitability and growth so has been able to secure an increase to its overdraft to cover " +
      "any potential cash shortfall. The Operations Director has suggested that it might be a better idea to issue " +
      "ordinary shares to cover any cash shortfall as the company would not have to pay interest." +
      "<br><br><strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. The cost of equity finance is likely to be lower than the cost of an overdraft<br>" +
      "2. The use of an overdraft exposes NOVEX to more financial risk than the use of equity finance" +
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
      "Statement 1 is incorrect — equity is generally <strong>more expensive</strong> than debt because equity " +
      "holders bear more risk and require a higher return. While the overdraft charges explicit interest, " +
      "the implicit cost of equity (dividends + required return) is typically higher.<br>" +
      "Statement 2 is correct — an overdraft is repayable on demand and carries mandatory interest obligations, " +
      "exposing the company to more financial risk than equity which has no mandatory payment obligation.",
  },

  // --- Q41 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true in respect of weighted average cost of capital (WACC)." +
      "<br><em>Select ALL that apply.</em>",
    options: {
      A: "Traditional theory suggests that if a company raises debt finance to buy back some of its ordinary shares this will result in a lower WACC, unless the company is highly geared",
      B: "An increase in the WACC of a company will result in an increase in the company value",
      C: "Debt-finance providers will often provide security to the company to ensure its assets are safe",
      D: "Traditional theory suggests that there is an optimum level for the WACC where it is minimised",
    },
    correctAnswer: ["A", "D"],
    explanation:
      "A and D are correct — traditional theory holds that moderate levels of debt reduce WACC (due to the " +
      "cheaper cost of debt and its tax shield), but excessive debt increases financial risk and eventually raises " +
      "the WACC. There is therefore an optimal capital structure where WACC is minimised.<br><br>" +
      "B is incorrect — a higher WACC means future cash flows are discounted at a higher rate, which " +
      "<strong>reduces</strong> company value.<br>" +
      "C is incorrect — it is the <strong>company</strong> that provides security to lenders (e.g. a charge on assets), " +
      "not the other way around.",
  },

  // --- Q42 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "Marlin Ltd has a remaining capital budget of €/£ 320,000. The treasury department has identified four divisible " +
      "investment opportunities with the following details:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Project</th><th>Investment required (€/£)</th><th>Net Present Value (€/£)</th><th>Profitability Index</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>A</td><td>140,000</td><td>18,000</td><td>1.13</td></tr>" +
      "<tr><td>B</td><td>120,000</td><td>18,000</td><td>1.15</td></tr>" +
      "<tr><td>C</td><td>160,000</td><td>16,000</td><td>1.10</td></tr>" +
      "<tr><td>D</td><td>100,000</td><td>8,000</td><td>1.08</td></tr>" +
      "</tbody></table>" +
      "<br><strong>Requirement</strong><br>" +
      "Identify which of the following statements best explains why profitability index (PI) is useful for evaluating divisible projects." +
      "<br><em>Select the correct answer.</em>",
    options: {
      A: "PI provides the total net present value (NPV) of a project without needing to consider the investment size, making it ideal for divisible projects",
      B: "PI focuses solely on the project's internal rate of return (IRR) to assess performance, which is more reliable for divisible projects",
      C: "PI disregards the time value of money, ensuring that all projects are evaluated on the same basis regardless of their duration",
      D: "PI ranks projects based on the incremental value generated per unit of investment, enabling firms to allocate limited capital efficiently",
    },
    correctAnswer: ["D"],
    explanation:
      "D is correct — the profitability index (PI = NPV / Investment) ranks projects by value created per unit of " +
      "capital invested. This is ideal when capital is constrained and projects are divisible, as it shows which " +
      "combination of (partial) investments maximises total NPV within the budget.",
  },

  // --- Q43 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "numeric",
    marks: 2,
    questionText:
      "Marlin Ltd has a remaining capital budget of €/£ 320,000. The treasury department has identified four divisible " +
      "investment opportunities with the following details:" +
      "<br><br>" +
      "<table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'>" +
      "<thead><tr><th>Project</th><th>Investment required (€/£)</th><th>Net Present Value (€/£)</th><th>Profitability Index</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>A</td><td>140,000</td><td>18,000</td><td>1.13</td></tr>" +
      "<tr><td>B</td><td>120,000</td><td>18,000</td><td>1.15</td></tr>" +
      "<tr><td>C</td><td>160,000</td><td>16,000</td><td>1.10</td></tr>" +
      "<tr><td>D</td><td>100,000</td><td>8,000</td><td>1.08</td></tr>" +
      "</tbody></table>" +
      "<br><strong>Requirement</strong><br>" +
      "Calculate, assuming the €/£ 320,000 is invested across the projects so as to maximise shareholder wealth, " +
      "the net present value (NPV) that will be generated by Project C.<br>" +
      "Your answer should be rounded to the nearest whole number.<br>" +
      "Your answer should be entered as a positive value.",
    correctAnswer: 6000,
    tolerance: 0,
    explanation:
      "<strong>Rank by PI (highest first):</strong><br>" +
      "1st: B (PI 1.15) — invest €/£ 120,000 → remaining budget = €/£ 200,000<br>" +
      "2nd: A (PI 1.13) — invest €/£ 140,000 → remaining budget = €/£ 60,000<br>" +
      "3rd: C (PI 1.10) — only €/£ 60,000 remaining of €/£ 160,000 required<br><br>" +
      "As projects are divisible, invest 60,000/160,000 = 37.5% of Project C:<br>" +
      "NPV from Project C = €/£ 16,000 × (60,000 / 160,000) = €/£ 16,000 × 0.375 = <strong>€/£ 6,000</strong>",
  },

  // --- Q44 ------------------------------------------------------------------
  {
    section: "Finance Mock 2026",
    type: "multi",
    marks: 2,
    questionText:
      "<strong>Requirement</strong><br>" +
      "Identify which of the following statements is/are true." +
      "<br><br>" +
      "1. A profitability index greater than one indicates that the project is expected to add value<br>" +
      "2. The project with the highest profitability index always has the highest net present value (NPV)" +
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
      "A PI > 1 means NPV > 0, so the project adds value — statement 1 is correct.<br>" +
      "Statement 2 is incorrect — PI ranks by value <strong>per unit of investment</strong>, not absolute NPV. " +
      "A small project can have a high PI but a low absolute NPV (e.g. Project B has the same NPV as A but " +
      "requires less capital, giving a higher PI).",
  },
];

// --- Export ------------------------------------------------------------------
if (typeof module !== "undefined" && module.exports) {
  module.exports = { financeMock2026 };
}
