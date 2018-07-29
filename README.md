# Bureau of Labor Statistics API 2.0 Wrapper for Node.js

This is an independent wrapper library to make API calls to the Bureau of Labor Statistics 2.0 API. This library is not in any way associated with the US government. It is just to assist developers to use the API in a JavaScript environment.


## About the BLS API

In order to use the Bureau of Labor Statistics API 2.0, you must register an API key. Please visit [US Bureau of Labor Statistics Developer Website](https://www.bls.gov/developers/) to register your key and learn how to use the API.

### Installation

`npm install bls2`


### Usage

```javascript

var Bls2 = require('bls2');

const API_KEY = 'YOUR API KEY';

let bls = new Bls2(API_KEY);

let options = {
    'seriesid': ['CES3000000001'],
    'startyear': '2008',  
    'endyear': '2018',
    // ...
};

bls.fetch(options).then(function (response) {
    console.log(JSON.stringify(response));
});

```

#### Required Parameters

* `seriesid` (Array, you can find series ids using the [Data Finder](https://beta.bls.gov/dataQuery/search))
* `startyear` (string representing the year you want the data to start at)
* `endyear` (string representing the year you want the data to end at)

Refer to the [US Bureau of Labor Statistics Developer Website](https://www.bls.gov/developers/) for all optional parameters.

### Finding Series IDs

The Bureau of Labor Statistics website has a wonderful [Data Finder](https://beta.bls.gov/dataQuery/search). To use it, type in the type of data you want to find, such as 'employment'. You will get a list of results. Hover over each link, the `seriesid` will be the final parameter in the link. For example, upon searching for 'employment', one of the results is labeled '(Seas) Employment Level', the URL is https://beta.bls.gov/dataViewer/view/timeseries/LNS12000000, so the `seriesid` is `LNS12000000`. Add that to your array of `seriesid` and wa la!

### Common Series IDs

These are just a FEW of the MANY series ids available.

**Employment**

    Civilian Labor Force (Seasonally Adjusted) - LNS11000000 
    Civilian Employment (Seasonally Adjusted) - LNS12000000 
    Civilian Unemployment (Seasonally Adjusted) - LNS13000000 
    Unemployment Rate (Seasonally Adjusted) - LNS14000000 
    Total Nonfarm Employment - Seasonally Adjusted - CES0000000001 
    Total Private Average Weekly Hours of All Employees - Seasonally Adjusted - CES0500000002 
    Total Private Average Weekly Hours of Prod. and Nonsup. Employees - Seasonally Adjusted - CES0500000007 
    Total Private Average Hourly Earnings of All Employees - Seasonally Adjusted - CES0500000003 
    Total Private Average Hourly Earnings of Prod. and Nonsup. Employees - Seasonally Adjusted - CES0500000008 

**Productivity**

    Output Per Hour - Non-farm Business Productivity - PRS85006092 
    Nonfarm Business Unit Labor Costs - PRS85006112 
    Nonfarm Business Real Hourly Compensation - PRS85006152 
    Private Nonfarm Business - Multifactor Productivity, annual index - MPU4910012 

**Price Indexes**

    CPI for All Urban Consumers (CPI-U) 1982-84=100 (Unadjusted) - CUUR0000SA0 
    CPI for All Urban Consumers (CPI-U) 1967=100 (Unadjusted) - CUUR0000AA0 
    CPI for Urban Wage Earners and Clerical Workers (CPI-W) 1982-84=100 (Unadjusted) - CWUR0000SA0 
    CPI-U/Less Food and Energy (Unadjusted) - CUUR0000SA0L1E 
    CPI-W/Less Food and Energy (Unadjusted) - CWUR0000SA0L1E 
    PPI Final Demand (Seasonally Adjusted) - WPSFD4 
    PPI Final Demand (Unadjusted) - WPUFD4 
    PPI Final Demand less foods and energy (Unadjusted) - WPUFD49104 
    PPI Final Demand less foods, energy, and trade services (Unadjusted) - WPUFD49116 
    PPI Finished Goods 1982=100 (Unadjusted) - WPUFD49207 
    Imports - All Commodities - EIUIR 
    Exports - All Commodities - EIUIQ 

**Compensation**

    Employment Cost Index (ECI) Civilian (Unadjusted) - CIU1010000000000A 
    ECI Private (Unadjusted) - CIU2010000000000A 
    ECI Private Wage and Salaries (Unadjusted) - CIU2020000000000A 
