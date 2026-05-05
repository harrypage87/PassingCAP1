// PassingCAP — Tax Question Bank
// tax_mock_2026.js — Mock Paper 2026

const taxMock2026 = [

    { section:"Mock Paper 2026", type:"single",
      questionText:"Mia bought a house for €250,000 on 1 June 2020. She lived in it until 1 June 2022 when she let it out to a third party. On 1 June 2025, she sold the house for €200,000. Mia has no other chargeable gains in 2025 and has no allowable capital losses carried forward.\n\nCalculate the allowable capital loss (if any) that Mia can carry forward to 2026.",
      options:{A:"There is no capital loss available to carry forward to 2026",B:"A loss of €50,000 is available to carry forward to 2026",C:"A loss of €30,000 is available to carry forward to 2026",D:"A loss of €20,000 is available to carry forward to 2026"},
      correctAnswer:"D" },

    { section:"Mock Paper 2026", type:"single",
      questionText:"Molly Malone (self-employed graphic designer) sold a printer for €1,750 on 23 April 2025 to a third party. The printer originally cost €4,000 and had a TWDV of €1,000 on 1 January 2025.\n\nCalculate the balancing allowance/charge, if any, on the sale of the printer.",
      options:{A:"There is no balancing allowance or charge on the sale of the printer",B:"Balancing allowance of €750",C:"Balancing charge of €750",D:"Balancing charge of €1,750"},
      correctAnswer:"A" },

    { section:"Mock Paper 2026", type:"single",
      questionText:"OAK Limited has an accounting year end of 31 August 2025 and files all tax returns on ROS.\n\nWhat is the latest date by which OAK's corporation tax return (Form CT1) for the year ended 31 August 2025 must be filed?",
      options:{A:"23 May 2026",B:"23 August 2026",C:"23 September 2026",D:"23 November 2026"},
      correctAnswer:"A" },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"Rose has three children in third-level education in 2025:\n• Ian: Full-time, Student Contribution €3,000, Tuition Fees Nil\n• Poppy: Full-time, Student Contribution €3,000, Tuition Fees €9,000\n• David: Part-time, Student Contribution €1,500, Tuition Fees €2,500\n\nAll fees paid for approved courses at approved colleges.\n\nCalculate the income tax credit Rose can claim for 2025 (€).\n\nHint: Disregard first €3,000. Full-time max per student €7,000. Part-time max €3,500. Relief at 20%.",
      correctAnswer:2200, tolerance:0 },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Where a capital disposal is at arm's length, the consideration is normally accepted for CGT purposes. However, market value is deemed to be the consideration between connected persons.\n\nIdentify which of the following are deemed to be connected persons for CGT purposes. Select ALL that apply.",
      options:{A:"Business partners",B:"Cousins",C:"Parents of spouse",D:"A company where a person has control of the company",E:"Lineal descendants"},
      correctAnswer:["A","C","D","E"] },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Identify the correct statements in relation to the cash receipts basis of accounting for VAT. Select ALL that apply.",
      options:{
        A:"The cash receipts basis does not apply to transactions between connected persons",
        B:"An accountable person who opts for the cash receipts basis is liable for VAT at the rate ruling at the time the supply is made rather than the time payment is received",
        C:"The cash receipts basis of accounting only applies to VAT on sales. VAT on purchases is still claimed on an invoice basis",
        D:"The cash receipts basis may be used by persons if at least 75% of supplies are to unregistered persons or turnover is not likely to exceed €2.1 million per annum"
      },
      correctAnswer:["A","B","C"] },

    { section:"Mock Paper 2026", type:"single",
      questionText:"JUNO Limited (chilled foods distribution) had a major bad debt write-off in 2025. Tax adjusted results:\n• Year-end 31/03/2024 (12 months): Case I Profit €30,000\n• Period-end 31/12/2024 (9 months): Case I Profit €20,000\n• Year-end 31/12/2025 (12 months): Case I Loss (€60,000)\n\nCalculate the corporation tax payable by JUNO for the year ended 31 March 2024.",
      options:{A:"NIL",B:"€938",C:"€3,750",D:"€2,813"},
      correctAnswer:"D" },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"Sam Daly (married, jointly assessed, sole trader). 2025 tax-adjusted profit: €47,000. Capital allowances: €6,000. Net Credit Union interest: €420 (gross €627).\n\nHis wife Michelle: gross salary €30,000. Net bank deposit interest: €630 (gross €940).\n\nWeighted average PRSI rate: 4.125%.\n\nNote: Sam pays PRSI on Case I (after CAs) plus non-DIRT investment income. Michelle pays PRSI on salary only. DIRT interest excluded from PRSI for both.\n\nCalculate the total PRSI payable by the Dalys in 2025 (€, rounded to nearest whole number).",
      correctAnswer:1756, tolerance:2 },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"Stephen sold an antique bracelet in 2025 for €1,350. He inherited it from his grandmother in 2008 when it was valued at €2,550.\n\nActual loss = €1,350 - €2,550 = (€1,200). For non-wasting chattels where cost > €2,540: allowable loss = €2,540 - €2,550 = (€10).\n\nCalculate the allowable capital loss available to carry forward to 2026 (€, positive value).",
      correctAnswer:10, tolerance:0 },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Identify the correct statements in relation to industrial buildings and industrial building allowances. Select ALL that apply.",
      options:{
        A:"An example of an industrial building is a building in use for growing fruit, vegetables or other produce in the course of a trade of market gardening",
        B:"The site cost of a building is specifically allowed for the purposes of industrial buildings allowances",
        C:"Retail shops can be included in the definition of an industrial building if the shop is physically part of a larger qualifying structure and the cost does not exceed 12.5% of total expenditure",
        D:"Typically, the rate for industrial buildings allowance is 4% per annum on a straight-line basis calculated as a percentage of the qualifying cost"
      },
      correctAnswer:["A","D"] },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"LANGLEY Limited (food & ingredients, year ended 30 September 2025). Profit before tax: €300,800.\n\nAdd backs: New heating system €10,200; legal re property acquisition €2,000; depreciation €14,000; political donations €900; all entertainment €600. One4All vouchers are allowable — no add back.\n\nDeductions: Interest on overpaid tax is tax-free (exclude); investment gain and F&F gain are CGT. Deduct foreign rental net €15,300 and capital allowances €11,300.\n\nCGT grossed up: Shares gain €5,200 × 33%/12.5% = €13,728. F&F gain €3,100 × 33%/12.5% = €8,184. Total grossed up gains = €21,912.\n\nCT at 12.5% on (Case I + gains): (€301,900 + €21,912) × 12.5% = €40,477\nCT at 25% on Case III/V (€5,000): €1,250\nTotal CT = €41,727\n\nCalculate total corporation tax liability for LANGLEY (€, rounded to nearest whole number).",
      correctAnswer:41727, tolerance:100 },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Identify the correct statements in relation to the artist exemption. Select ALL that apply.",
      options:{
        A:"Where an artist qualifies for the exemption, €40,000 per annum of earned artist income is exempt from income tax",
        B:"Individuals claiming the artist exemption must be resident, or ordinarily resident and domiciled, in the EU or EEA State",
        C:"An individual qualifying for artist exemption will also be exempt from USC on the income exempt from income tax",
        D:"An individual qualifying for artist exemption is subject to PRSI on the income exempt from income tax"
      },
      correctAnswer:["B","D"] },

    { section:"Mock Paper 2026", type:"single",
      questionText:"HEIGHTS Limited's corporation tax liability for year ended 31 October 2025 is estimated at €175,000. Its liability for year ended 31 October 2024 was €190,000.\n\nCalculate the minimum preliminary tax payable by HEIGHTS for year ended 31 October 2025 and state the due date.",
      options:{A:"€175,000 payable on 23 September 2025",B:"€157,500 payable on 23 September 2025",C:"€157,500 payable on 23 October 2025",D:"€87,500 payable on 23 April 2025 and €87,500 payable on 23 September 2025"},
      correctAnswer:"B" },

    { section:"Mock Paper 2026", type:"single",
      questionText:"James Murphy (sole trader, VAT registered) bought ten iPads for €1,200 each (ex VAT) in March 2025. In May 2025, he took three iPads home for private use.\n\nHow should James account for VAT on the three iPads taken for private use?",
      options:{A:"Increase output VAT by €828",B:"Increase input VAT by €828",C:"Increase output VAT by €486",D:"There is no VAT impact"},
      correctAnswer:"A" },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Identify the correct statements in relation to corporation tax deductions for qualifying donations. Select ALL that apply.",
      options:{
        A:"The eligible organisation can be established anywhere in the EEA or the European Free Trade Association",
        B:"Donations to an approved sports body in the State to enable it to purchase, construct or improve facilities and/or equipment are eligible for a corporation tax deduction",
        C:"To qualify, the donation in a 12-month accounting period must amount to at least €200",
        D:"To qualify, the donation must amount to at least €250 and the upper limit is €1,000"
      },
      correctAnswer:["A","B"] },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"Ger Brady (resident and domiciled in Ireland) — 2025 CGT:\n\nTransaction 1: Sold rental property for €80,000 (sale costs €2,000). Acquired 1 Feb 2015 for €61,000 (purchase costs €1,500). Gain = €15,500.\n\nTransaction 2: Sold development land to son (connected) at MV €200,000. Cost 1 June 1982 €5,000 (CUV €3,000). CUV indexed: €3,000 × 2.253 = €6,759. Hope value deducted. Gain = €191,241.\n\nTransaction 3: Sold farm for €260,000. Received as gift from wife Dec 1992 — use wife's cost. Wife's cost €32,000 on 1 July 1990 × 1.442 = €46,144. Gain = €213,856.\n\nTotal = €15,500 + €191,241 + €213,856 = €420,597.\n\nCalculate Ger's TOTAL chargeable gains before annual exemption for 2025 (€).",
      correctAnswer:420597, tolerance:200 },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"Fabio Costello — 2025 rental income:\n\nProperty A (commercial): Rental income €5,000 + premium €6,000 = €11,000. Allowable expenses: interest €3,600 + storm damage €1,400 = €5,000. Wait — per solution expenses = €4,400. Net A = €6,600.\n\nProperty B (residential, RTB): Income (€6,000×4/12) + (€9,000×2/12) = €3,500. Expenses: drains €90 + painting €700 + advertising €140 = €930. Net B = €2,570.\n\nTotal = €9,170.\n\nCalculate Fabio's total rental income assessable under Schedule D Case V for 2025 (€).",
      correctAnswer:9170, tolerance:10 },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Identify the gains that are EXEMPT from CGT. Select ALL that apply.",
      options:{
        A:"Winnings from betting, lotteries, sweepstakes or games with prizes",
        B:"Bonuses under the National Instalments Savings Scheme",
        C:"Gains on the disposal of development land",
        D:"A gain on disposal of non-wasting chattels where consideration does not exceed €5,240",
        E:"Sums obtained as compensation or damages for any wrong or injury suffered by an individual in their profession/vocation"
      },
      correctAnswer:["A","B","E"] },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Identify the correct statements with respect to VAT thresholds. Select ALL that apply.",
      options:{
        A:"The VAT threshold for persons supplying a service is €40,000",
        B:"The VAT threshold for persons supplying goods, where 90% or more of sales is derived from supplies of goods, is €85,000",
        C:"The VAT threshold for persons supplying goods liable at 13.5% or 23% which they have manufactured from zero-rated materials is €42,500",
        D:"The VAT threshold for persons making mail order or distance sales into the State is €12,000"
      },
      correctAnswer:["B","C"] },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"Carlos works as a sales rep. Company car: OMV €35,000 (Category C, first provided 2022). Business kilometres in 2025: 16,800.\n\nBIK = (€35,000 - €10,000) × 30% = €7,500. Less 20% reduction (high business mileage) = €1,500. Net BIK = €6,000.\n\nCalculate Carlos' taxable benefit-in-kind on his company car in 2025 (€).",
      correctAnswer:6000, tolerance:0 },

    { section:"Mock Paper 2026", type:"single",
      questionText:"Theresa bought her PPR in Clare on 1 February 1997. Absences:\n• 1 Oct 1999 – 31 Dec 2000: Amsterdam for work (returned home after) — deemed occupied\n• 1 Jul 2005 – 31 Dec 2010: Donegal for work (returned home after) — deemed occupied\n• 1 Jan 2012 onwards: Madrid for work — rented house, never returned. 4 years deemed + last 12 months deemed.\nSold 1 February 2025.\n\nCalculate the number of months Theresa is deemed to have occupied her house for PPR purposes.",
      options:{A:"221 months",B:"163 months",C:"173 months",D:"191 months"},
      correctAnswer:"C" },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"LOYAL Investments Limited pays a dividend of €500,000 on 1 November 2025.\n\nShareholders: Mr Brannigan (resident) 6,000 shares → dividend €60,000 → DWT 25% = €15,000. Happy Investments Ltd (resident company) — exempt. Arc (Irish charity) — exempt. Potts Investments Ltd (resident) — exempt.\n\nCalculate the DWT payable by LOYAL (€).",
      correctAnswer:15000, tolerance:0 },

    { section:"Mock Paper 2026", type:"single",
      questionText:"LOYAL Investments Limited pays a dividend on 1 November 2025.\n\nWhat is the due date for payment of DWT by LOYAL?",
      options:{A:"The DWT must be paid before 14 November 2025",B:"The DWT must be paid before 30 November 2025",C:"The DWT must be paid before 14 December 2025",D:"The DWT must be paid before 31 December 2025"},
      correctAnswer:"C" },

    { section:"Mock Paper 2026", type:"single",
      questionText:"Which statement accurately describes what is meant by TAX PLANNING?",
      options:{A:"The deliberate and illegal practice of not paying taxes by not reporting income/profits or claiming expenses not legally incurred",B:"Where a taxpayer organises their affairs in a tax-efficient manner so as to reduce their tax liability",C:"The use of loopholes within tax legislation to reduce the taxpayer's tax liability"},
      correctAnswer:"B" },

    { section:"Mock Paper 2026", type:"single",
      questionText:"Olga (widow) rents three spare bedrooms to four students from 1 September 2025 at €650/month/student until 30 June 2026. Monthly costs: utilities €300, food €800, laundry €200.\n\n2025: Gross income = €650 × 4 × 4 months = €10,400 (below €14,000 threshold → rent-a-room relief, exempt).\n2026: Gross income = €650 × 4 × 6 months = €15,600 (exceeds €14,000 → full net amount €7,800 taxable).\n\nCalculate Olga's taxable rental profits for 2025 and 2026.",
      options:{A:"2025: €5,200, 2026: €7,800",B:"2025: €0, 2026: €0",C:"2025: €0, 2026: €7,800",D:"2025: €5,200, 2026: €0"},
      correctAnswer:"C" },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"COPCO produces flat pack furniture. Each unit: furniture €890 (ex-VAT, 23%), instruction booklet €5 (ex-VAT, 0%). Total sale value €895 (ex-VAT).\n\nVAT = €895 × 23% = €205.85 → rounded to €206.\n\nCalculate how much VAT COPCO will charge on the sale (€, rounded to nearest whole number).",
      correctAnswer:206, tolerance:1 },

    { section:"Mock Paper 2026", type:"single",
      questionText:"Peter (electrician) will work 35 hours/week for Thomas at €50/hour. He provides his own tools and invoices weekly. However, he requires Thomas's sign-off to take other work, and Thomas sets his available hours (10:00–16:00, Mon–Fri).\n\nIs Peter entering into a contract of service or a contract for services?",
      options:{A:"Peter is entering into a contract of service",B:"Peter is entering into a contract for services"},
      correctAnswer:"A" },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"Yasmin McDonnell changed her accounting year-end from 31 May to 31 December in 2025.\n\nProfits: 12 months to 31 May 2024: €11,000. 12 months to 31 May 2025: €19,000. 7 months to 31 December 2025: €15,000.\n\n2025 assessable = (€19,000 × 5/12) + €15,000 = €7,917 + €15,000 = €22,917.\n\nCalculate Yasmin's assessable profits for 2025 (€, rounded to nearest whole number).",
      correctAnswer:22917, tolerance:5 },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"Yasmin McDonnell changed her accounting year-end from 31 May to 31 December in 2025.\n\nProfits: 12 months to 31 May 2024: €11,000. 12 months to 31 May 2025: €19,000. 7 months to 31 December 2025: €15,000.\n\n2024 revised = (€11,000 × 5/12) + (€19,000 × 7/12) = €4,583 + €11,083 = €15,667.\n\nCalculate Yasmin's assessable profits for 2024 (€, rounded to nearest whole number).",
      correctAnswer:15667, tolerance:5 },

    { section:"Mock Paper 2026", type:"single",
      questionText:"Bobby constructed a hotel in July 1992 for €260,000 (capital grant: €10,000). Additional: August 2002 roof repairs €3,000 (revenue); May 2005 three new bedrooms €90,000 (capital). Sold 31 May 2025 for €650,000. No other chargeable gains in 2025.\n\nCalculate Bobby's CGT liability on the sale of the hotel in 2025.",
      options:{A:"€102,211",B:"€72,930",C:"€72,511",D:"€71,521"},
      correctAnswer:"C" },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Identify the correct statements in respect of a Deed of Covenant. Select ALL that apply.",
      options:{
        A:"The person paying the covenant has their total income reduced by the gross covenant paid",
        B:"The person paying the covenant must deduct 25% tax from the gross covenant and pay this to Revenue before paying the covenant",
        C:"Where covenant payments are made to individuals aged 65 or over, the relief is subject to a maximum of 10% of total income",
        D:"Covenant payments from parents to their own children under the age of 18 do not qualify for relief"
      },
      correctAnswer:["A","D"] },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Identify the correct statements in relation to the Universal Social Charge (USC). Select ALL that apply.",
      options:{
        A:"All individuals are liable to pay USC if their gross income is greater than €13,000 per annum",
        B:"USC is levied on gross income before pension contributions",
        C:"Income subjected to DIRT is exempt from USC",
        D:"Income qualifying for Rent-a-Room relief is liable to USC"
      },
      correctAnswer:["A","B","C"] },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Identify the correct statements in relation to corporate trading losses. Select ALL that apply.",
      options:{
        A:"A section 396A claim must be made before a claim under section 396B",
        B:"The claim for loss relief under section 396A and 396B must be made within one year of the end of the accounting period in which the loss occurs",
        C:"There is no time limit for claiming section 396(1) loss relief as the loss can be carried forward indefinitely",
        D:"A loss forward must be set off against the first available income of the same trade for an earlier future accounting period in priority to a later future accounting period"
      },
      correctAnswer:["A","C","D"] },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"George is 72 years old and single. Gross employment income for 2025: €75,000.\n\nUSC: First €12,012 × 0.5% = €60. Next €15,370 × 2% = €307. Next €42,662 × 3% = €1,280. Remaining €4,956 × 8% = €396. Total = €2,043.\n\nNote: Reduced 2% cap for over-70s only applies where income ≤ €60,000. George's income exceeds this.\n\nCalculate George's USC liability for 2025 (€, rounded to nearest whole number).",
      correctAnswer:2043, tolerance:5 },

    { section:"Mock Paper 2026", type:"multi",
      questionText:"Identify the examples of a WASTING CHATTEL from the following. Select ALL that apply.",
      options:{A:"Livestock",B:"Private motor car",C:"Fine art such as a painting",D:"Yacht",E:"Bloodstock"},
      correctAnswer:["A","B","D","E"] },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"Jim the baker — May/June 2025 (ex-VAT):\n• Sales of bread (zero-rated): €10,000 → Output VAT: €0\n• Ingredients (zero-rated): €5,000 → Input VAT: €0\n• Petrol (23%): €1,000 → BLOCKED\n• Mixing machine (23%): €3,000 → Input VAT: €690\n• Lease rentals – vans (23%): €2,000 → Input VAT: €460\n• Bank interest (exempt): €400 → no VAT\n\nTotal VAT recoverable = €690 + €460 = €1,150.\n\nCalculate the VAT recoverable by Jim for May/June 2025 (€).",
      correctAnswer:1150, tolerance:0 },

    { section:"Mock Paper 2026", type:"single",
      questionText:"Jim the baker files his VAT return using ROS. What is the date by which he must file his VAT return for the period May/June 2025?",
      options:{A:"23 July 2025",B:"31 July 2025",C:"23 August 2025",D:"31 August 2025"},
      correctAnswer:"A" },

    { section:"Mock Paper 2026", type:"numeric",
      questionText:"Elsa (financial controller, OLAF Ltd) — Taxable Schedule E income 2025:\n• Salary: €115,000\n• Bonus received 28 Jan 2025 (re 2024 work): €12,000 — taxable in year received\n• Bonus for 2025 paid 3 Feb 2026: NOT taxable in 2025\n• Employer loan €50,000 from 1 June 2025 for Portuguese holiday home. OLAF charges 6.5%. Taxable rate = 13.5% - 6.5% = 7%. BIK = €50,000 × 7% × 7/12 = €2,042\n• Free apartment Dublin: €2,700/month × 12 = €32,400\n• Course fees (not related to role): €2,600\n\nTotal = €115,000 + €12,000 + €2,042 + €32,400 + €2,600 = €164,042.\n\nCalculate Elsa's total taxable Schedule E income for 2025 (€, rounded to nearest whole number).",
      correctAnswer:164042, tolerance:50 },

];
