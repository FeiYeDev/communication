## Schema:

![MicrosoftTeams-image (8)](https://github.com/vzhangdev/InvestProposal/blob/master/Documents/MicrosoftTeams-image%20(8).png)

![MicrosoftTeams-image (11)](https://github.com/vzhangdev/InvestProposal/blob/master/Documents/MicrosoftTeams-image%20(11).png)



## Permission Set:

	1. Investment Proposal Standard user
 	2. Investment Proposal Admin user
 	3. Asset Management Admin
 	4. Asset Management Money Manager



## Page1:

1. Lookup a household;

lookup a account;

lookup a UMA;

2. switch Assistant and Advisor, when it is Assistant, lookup a user;

## Page2: 

1. lookup two primary users, populate primary users based on first page selection;
2. Auto popuate the first card with advisor information;

## Page3: **Investor Profile Questionnaire**

if FinAcct type === 'FWA', disable Financial holding fields except disregard and dis for fee.

1. set time horizon *
2. auto pulled from IPS-RTQ setting
3. the result decides invest profile

Blackdiamond mapping:

| FIELD1                   | FIELD2                   | FIELD3                   | FIELD4                             |
| IPS: Category            | CRM: Asset Class         | CRM: Asset Category      | CRM: Asset Category Name           |
|                          | BD: Super Class          | BD: Class                | BD: Segment                        |
| ------------------------ | ------------------------ | ------------------------ | ---------------------------------- |
| US Large Cap Value       | Equities                 | US Equity                | US Large Cap Value                 |
| US Large Cap Blend       | Equities                 | US Equity                | US Large Cap Blend                 |
| US Large Cap Growth      | Equities                 | US Equity                | US Large Cap Growth                |
| US Mid Cap Value         | Equities                 | US Equity                | US Mid Cap Value                   |
| US Mid Cap Blend         | Equities                 | US Equity                | US Mid Cap Blend                   |
| US Mid Cap Growth        | Equities                 | US Equity                | US Mid Cap Growth                  |
| US Small Cap Value       | Equities                 | US Equity                | US Small Cap Value                 |
| US Small Cap Blend       | Equities                 | US Equity                | US Small Cap Blend                 |
| US Small Cap Growth      | Equities                 | US Equity                | US Small Cap Growth                |
| Other                    | Equities                 | US Equity                | US Equity-Other                    |
| Other                    | Equities                 | US Equity                | To Be Classified                   |
| Non-US Dev Stock         | Equities                 | International Equity     | Non-US Large Cap Value             |
| Non-US Dev Stock         | Equities                 | International Equity     | Non-US Large Cap Blend             |
| Non-US Dev Stock         | Equities                 | International Equity     | Non-US Large Cap Growth            |
| Non-US Dev Stock         | Equities                 | International Equity     | Non-US Mid Cap Value               |
| Non-US Dev Stock         | Equities                 | International Equity     | Non-US Mid Cap Blend               |
| Non-US Dev Stock         | Equities                 | International Equity     | Non-US Mid Cap Growth              |
| Non-US Dev Stock         | Equities                 | International Equity     | Non-US Small Cap Value             |
| Non-US Dev Stock         | Equities                 | International Equity     | Non-US Small Cap Blend             |
| Non-US Dev Stock         | Equities                 | International Equity     | Non-US Small Cap Growth            |
| Non-US Dev Stock         | Equities                 | International Equity     | Non-US Developed Equity            |
| Non-US Emrg Stock        | Equities                 | International Equity     | Non-US Emerging Equity             |
| Other                    | Equities                 | International Equity     | Non-US Equity-Other                |
| Other                    | Equities                 | Preferred Stock          | Preferred Stock                    |
| US Txbl Long Term Bonds  | Fixed Incomes            | Government Bonds         | Government Long Term Bond          |
| US Txbl Int Term Bonds   | Fixed Incomes            | Government Bonds         | Government Intermediate Term Bond  |
| US Txbl Short Term Bonds | Fixed Incomes            | Government Bonds         | Government Short Term Bond         |
| US Txbl Long Term Bonds  | Fixed Incomes            | Government Bonds         | Gov't Long Term Bond               |
| US Txbl Int Term Bonds   | Fixed Incomes            | Government Bonds         | Gov't Intermediate Term Bond       |
| US Txbl Short Term Bonds | Fixed Incomes            | Government Bonds         | Gov't Short Term Bond              |
| US Infl Protected Bonds  | Fixed Incomes            | Government Bonds         | Inflation-Protected Bond           |
| US Txbl Long Term Bonds  | Fixed Incomes            | Municipal Bonds          | Muni Long Term Bond                |
| US Txbl Int Term Bonds   | Fixed Incomes            | Municipal Bonds          | Muni Intermediate Term Bond        |
| US Txbl Short Term Bonds | Fixed Incomes            | Municipal Bonds          | Muni Short Term Bond               |
| US High Yield Bonds      | Fixed Incomes            | Municipal Bonds          | Muni High Yield Bond               |
| US Txbl Long Term Bonds  | Fixed Incomes            | Corporate Bonds          | Corp Long Term Bond                |
| US Txbl Int Term Bonds   | Fixed Incomes            | Corporate Bonds          | Corp Intermediate Term Bond        |
| US Txbl Short Term Bonds | Fixed Incomes            | Corporate Bonds          | Corp Short Term Bond               |
| US High Yield Bonds      | Fixed Incomes            | Corporate Bonds          | Corp High Yield Bond               |
| US Inv Grade Bonds       | Fixed Incomes            | Corporate Bonds          | Corp Investment Grade Bond         |
| Fixed Income-Other       | Fixed Incomes            | Certificate of Deposit   | Long Term CD                       |
| Fixed Income-Other       | Fixed Incomes            | Certificate of Deposit   | Intermediate Term CD               |
| Fixed Income-Other       | Fixed Incomes            | Certificate of Deposit   | Short Term CD                      |
| Non-US Dev Bonds         | Fixed Incomes            | Misc Fixed Incomes       | Non-US Developed Bond              |
| Fixed Income-Other       | Fixed Incomes            | Misc Fixed Incomes       | Non-US Emerging Bond               |
| Fixed Income-Other       | Fixed Incomes            | Misc Fixed Incomes       | Asset-Backed Security              |
| Fixed Income-Other       | Fixed Incomes            | Misc Fixed Incomes       | Mortgage-Backed Security           |
| Fixed Income-Other       | Fixed Incomes            | Misc Fixed Incomes       | Collateralized Mortgage Obligation |
| Fixed Income-Other       | Fixed Incomes            | Misc Fixed Incomes       | Collateralized Loan Obligation     |
| Fixed Income-Other       | Fixed Incomes            | Misc Fixed Incomes       | Convertibles                       |
| Fixed Income-Other       | Fixed Incomes            | Misc Fixed Incomes       | Demand Note                        |
| Fixed Income-Other       | Fixed Incomes            | Misc Fixed Incomes       | Fixed Income-Other                 |
| Balanced                 | Target Risk              | Risk Allocations         | Aggressive Allocation              |
| Balanced                 | Target Risk              | Risk Allocations         | Growth Allocation                  |
| Balanced                 | Target Risk              | Risk Allocations         | Moderate Allocation                |
| Balanced                 | Target Risk              | Risk Allocations         | Balanced Allocation                |
| Balanced                 | Target Risk              | Risk Allocations         | Conservative Allocation            |
| Balanced                 | Target Risk              | Risk Allocations         | Preservative Allocation            |
| Balanced                 | Target Risk              | Risk Allocations         | Global Allocation                  |
| Balanced                 | Target Risk              | Risk Allocations         | Flexible Allocation                |
| Balanced                 | Target Risk              | Risk Allocations         | Global Flexible Allocation         |
| Balanced                 | Target Risk              | Risk Allocations         | Foreign Allocation                 |
| Balanced                 | Target Risk              | Target Date              | Target-Date 2000-2015              |
| Balanced                 | Target Risk              | Target Date              | Target-Date 2020                   |
| Balanced                 | Target Risk              | Target Date              | Target-Date 2025                   |
| Balanced                 | Target Risk              | Target Date              | Target-Date 2030                   |
| Balanced                 | Target Risk              | Target Date              | Target-Date 2035                   |
| Balanced                 | Target Risk              | Target Date              | Target-Date 2040                   |
| Balanced                 | Target Risk              | Target Date              | Target-Date 2045                   |
| Balanced                 | Target Risk              | Target Date              | Target-Date 2050                   |
| Balanced                 | Target Risk              | Target Date              | Target-Date 2055                   |
| Balanced                 | Target Risk              | Target Date              | Target-Date 2060+                  |
| Balanced                 | Target Risk              | Target Date              | Target-Date Retirement             |
| Other                    | Commodities              | Agriculture              | Agriculture                        |
| Other                    | Commodities              | Broad Basket             | Broad Basket                       |
| Other                    | Commodities              | Energy                   | Energy                             |
| Other                    | Commodities              | Industrial Metals        | Industrial Metals                  |
| Other                    | Commodities              | Misc Commodities         | Misc Commodities                   |
| Other                    | Commodities              | Precious Metals          | Precious Metals                    |
| Other                    | Commodities              | Crypto Currency          | Bitcoin                            |
| Other                    | Commodities              | Crypto Currency          | Ethereum                           |
| Other                    | Commodities              | Crypto Currency          | Ripple                             |
| Other                    | Commodities              | Crypto Currency          | Litecoin                           |
| Other                    | Commodities              | Crypto Currency          | Crypto Currency - Other            |
| Cash & Equivalents       | Cash and Equivalents     | Money Market             | Taxable Money Market               |
| Cash &amp; Equivalents   | Cash and Equivalents     | Money Market             | Non-Taxable Money Market           |
| Cash &amp; Equivalents   | Cash and Equivalents     | Money Market             | Misc Money Market                  |
| Cash &amp; Equivalents   | Cash and Equivalents     | Cash and Equivalents     | Cash and Equivalents               |
| Cash &amp; Equivalents   | Cash and Equivalents     | FDIC Insured             | FDIC Account                       |
| Cash &amp; Equivalents   | Cash and Equivalents     | Cash                     | Cash                               |
| Cash & Equivalents       | Cash and Equivalents     | Money Market             | Taxable Money Market               |
| Cash & Equivalents       | Cash & Equivalents       | Money Market             | Taxable Money Market               |
| Cash & Equivalents       | Cash & Equivalents       | Money Market             | Non-Taxable Money Market           |
| Cash & Equivalents       | Cash & Equivalents       | Money Market             | Misc Money Market                  |
| Cash & Equivalents       | Cash & Equivalents       | Cash & Equivalents       | Cash & Equivalents                 |
| Cash & Equivalents       | Cash & Equivalents       | FDIC Insured             | FDIC Account                       |
| Cash & Equivalents       | Cash & Equivalents       | Cash                     | Cash                               |
| Other                    | Alternative Assets       | Hedge Fund               | Long/Short Equity                  |
| Other                    | Alternative Assets       | Hedge Fund               | Market Neutral                     |
| Other                    | Alternative Assets       | Hedge Fund               | Long/Short Credit                  |
| Other                    | Alternative Assets       | Hedge Fund               | Currency                           |
| Other                    | Alternative Assets       | Hedge Fund               | Trading Tools                      |
| Other                    | Alternative Assets       | Hedge Fund               | Misc Hedge Fund                    |
| Other                    | Alternative Assets       | Hedge Fund               | Global Macro                       |
| Other                    | Alternative Assets       | Hedge Fund               | Multialternative                   |
| Other                    | Alternative Assets       | Private Equity           | Leveraged Buyout                   |
| Other                    | Alternative Assets       | Private Equity           | Growth Capital                     |
| Other                    | Alternative Assets       | Private Equity           | Real Estate                        |
| Other                    | Alternative Assets       | Private Equity           | Infrastructure                     |
| Other                    | Alternative Assets       | Private Equity           | Mezzanine Capital                  |
| Other                    | Alternative Assets       | Private Equity           | Distressed PE                      |
| Other                    | Alternative Assets       | Private Equity           | Secondaries                        |
| Other                    | Alternative Assets       | Venture Fund             | Venture Fund                       |
| Real Estate              | Real Estate              | Commercial Real Estate   | Commercial Real Estate             |
| Real Estate              | Real Estate              | Residential Real Estate  | Residential Real Estate            |
| Real Estate              | Real Estate              | Vacant Land              | Vacant Land                        |
| Real Estate              | Real Estate              | REITS                    | REITS                              |
| Other                    | Other Assets             | Other Assets             | Other Assets                       |
| Other                    | Liabilities              | Mortgage                 | Mortgage                           |
| Other                    | Liabilities              | Notes                    | Notes                              |
| Other                    | Liabilities              | Personal Guarantee       | Personal Guarantee                 |
| Other                    | Liabilities              | Misc Liability           | Misc Liability                     |
| Other                    | Other Assets             | N/A                      | N/A                                |
| Other                    | Separate Account Manager | Separate Account Manager | Separate Account Manager           |
| Not Classified           | N/A                      | N/A                      | N/A                                |
| Not Classified           |                          |                          |                                    |
| Not Classified           | NULL                     | NULL                     | NULL                               |
| Not Classified           | Unclassified             | Unclassified             | Unclassified                       |
| Not Classified           | To Be Classified         | To Be Classified         | To Be Classified                   |


## Page4: **Your Investment Profile**

1. CRUD on Financial Account and Financial Holding
2. UMA lookup
3. **Client** **Personalizations*
4. Investment Goal - selected by user
5. Time Horizon and Investor Risk Profile - auto populated by RTQ 

## Page5: **Current Asset Allocation**

1. Three types of UMA types:  Managed Type; Outside Account;  Illiquid Asset

2. fixed template: 

   | Cash & Equivalents       |      |      |      |      |      |
   | ------------------------ | ---- | ---- | ---- | ---- | ---- |
   | US Large Cap Value       |      |      |      |      |      |
   | US Large Cap Blend       |      |      |      |      |      |
   | US Large Cap Growth      |      |      |      |      |      |
   | US Mid Cap Value         |      |      |      |      |      |
   | US Mid Cap Blend         |      |      |      |      |      |
   | US Mid Cap Growth        |      |      |      |      |      |
   | US Small Cap Value       |      |      |      |      |      |
   | US Small Cap Blend       |      |      |      |      |      |
   | US Small Cap Growth      |      |      |      |      |      |
   | Non-US Dev Stock         |      |      |      |      |      |
   | Non-US Emrg Stock        |      |      |      |      |      |
   | Balanced                 |      |      |      |      |      |
   | US Txbl Long Term Bonds  |      |      |      |      |      |
   | US Txbl Int Term Bonds   |      |      |      |      |      |
   | US Txbl Short Term Bonds |      |      |      |      |      |
   | US High Yield Bonds      |      |      |      |      |      |
   | US Inv Grade Bonds       |      |      |      |      |      |
   | Non-US Dev Bonds         |      |      |      |      |      |
   | Fixed Income-Other       |      |      |      |      |      |
   | Real Estate              |      |      |      |      |      |
   | Other                    |      |      |      |      |      |

## Page6: **Recommended Asset Allocation**

| **Investor Objectives** | Ratio |
| ----------------------- | ----- |
| Equity Range            |       |
| Fixed Income Range      |       |
| Cash Range              |       |

## Page7: **Recommended Allocation&Investments**

1. Lookup a Strategy, which can be made of models, SMAs or Asset

## Page8: **Portfolio Diversification**

#### **Current**Allocation

#### **Recommended **Allocation

#### **Difference**

## Page9: **Fees**

| Account                        | Formula           | Notes |
| ------------------------------ | ----------------- | ----- |
| DAVID A TEST INDIVIDUAL - TEST |                   |       |
| Asset Management Fee           | Sum（Account Fee) |       |
| Family CIO                     |                   |       |
| Total Other Fee                |                   |       |
| Platform Fee                   | see below         |       |
| Total Fee                      |                   |       |

| Account Assets | Platform Fee* |           |
| :------------- | :------------ | --------- |
| From           | To            |           |
| $0             | $499,999      | **0.30%** |
| $500,000       | $999,999      | **0.25%** |
| $1,000,000     | $1,999,999    | **0.20%** |
| $2,000,000     | $2,999,999    | **0.15%** |
| $3,000,000     | $3,999,999    | **0.10%** |
| $4,000,000     | and above     | **0.05%** |

```js
 if (Aum > 0 && Aum < 500000) {
            pf = (Aum * 0.003);
            td = 1;
        } else if (Aum >= 500000 && Aum < 1000000) {
            pf = (500000 * 0.003 + (Aum - 500000) * 0.0025);
            td = 2;
        } else if (Aum >= 1000000 && Aum < 2000000) {
            pf = (500000 * 0.003 + 500000 * 0.0025 + (Aum - 1000000) * 0.002);
            td = 3;
        } else if (Aum >= 2000000 && Aum < 3000000) {
            pf = (500000 * 0.003 + 500000 * 0.0025 + 500000 * 0.002 + (Aum - 2000000) * 0.0015);
            td = 4;
        } else if (Aum >= 3000000 && Aum < 4000000) {
            pf = (500000 * 0.003 + 500000 * 0.0025 + 500000 * 0.002 + 500000 * 0.0015 + (Aum - 3000000) * 0.001);
            td = 5;
        } else if (Aum >= 4000000) {
            pf = (500000 * 0.003 + 500000 * 0.0025 + 500000 * 0.002 + 500000 * 0.0015 + 500000 * 0.001 + (Aum - 4000000) * 0.0005);
            td = 6;
        }
```



## Page10: Signature

All receipients' emails shouldn't be all the same

## Page11: **IMPORTANT INFORMATION**

## Page12: **Definitions**

## Page13: **Definitions**

## Page14: Docusign

```js
doc = [{'documentId': '1', 'name': company + ' Investment Proposal_' + docnamedate + '_' + Household, "fileExtension": "pdf", "documentBase64": pdf}];
dat['recipients'] = r;
dat['status'] = 'sent';
dat['emailSubject'] = this.props.subject;
dat['emailBlurb'] = this.props.message
dat['customFields'] = t;
dat['documents'] = doc;
```

docusign url:

```js
process.env.REACT_APP_HEROKU_INSTANCE + "/api/v1/ips/envelope/embed-sign"
```

## Notes

logger
https://www.npmjs.com/package/redux-logger

build one production 
add namespaces to api file

EmailSearch__c Users Object

-- account
IPS_CustomSetting
- Logo
- Company
- RTQ
- Disclosure
- Fee
IPS_RTQ
 - Sequence
 - Question
 - Weight

-- attach users



```js
<Select defaultValue="Household" style={{width: '100%'}} onChange={this.TypeChanged}>
                        <Option value="Household">Household</Option>
                        <Option value="Individual">Account</Option>
                        <Option value="UMA">Unified Managed Account</Option>
</Select>
```

https://mashmatrix.github.io/react-lightning-design-system/?path=/story/salespath--default



release:
Sleeve Account, 
Phone number format,
add quotemedias api
form spinner


Issues:
Pause revert Primary Contact and Secondary Contact:
Pause reload household structure
