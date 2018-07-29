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

* `seriesid` (Array, you can find series ids at the [BLS website](https://www.bls.gov/))
* `startyear` (string representing the year you want the data to start at)
* `endyear` (string representing the year you want the data to end at)

Refer to the [US Bureau of Labor Statistics Developer Website](https://www.bls.gov/developers/) for all optional parameters.

### Finding Series IDs

The Bureau of Labor Statistics website has a wonderful [Data Finder](https://beta.bls.gov/dataQuery/search). To use it, type in the type of data you want to find, such as 'employment'. You will get a list of results. Hover over each link, the `seriesid` will be the final parameter in the link. For example, upon searching for 'employment', one of the results is labeled '(Seas) Employment Level', the URL is https://beta.bls.gov/dataViewer/view/timeseries/LNS12000000, so the `seriesid` is `LNS12000000`. Add that to your array of `seriesid` and wa la!