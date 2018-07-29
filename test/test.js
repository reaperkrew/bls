var expect = require('expect.js');

var Bls2 = require('../lib/bls2');

describe('Initialization', function() {
  describe('Constructor', function() {
    it('should throw an error if an api key is not sent to the constructor', function() {

      expect(() => {new Bls2();})
      .to.throwError();

    });
  });
});

describe('Options', function() {
  describe('seriesid', function() {
    it('should throw an error if seriesid is not included in options', function() {

      expect(() => {
          const API_KEY = 'MY_API_KEY';
          let bls = new Bls2(API_KEY);
          let options = {
              'startyear': '2008',  
              'endyear': '2018',
          };       
          bls.fetch(options);     
      })
      .to.throwError();

    });
  });
});

describe('Options', function() {
  describe('startyear', function() {
    it('should throw an error if startyear is not included in options', function() {

      expect(() => {
          const API_KEY = 'MY_API_KEY';
          let bls = new Bls2(API_KEY);
          let options = {
            'seriesid': ['CES3000000001'],
            'endyear': '2018',
          };       
          bls.fetch(options);     
      })
      .to.throwError();

    });
  });
});


describe('Options', function() {
  describe('endyear', function() {
    it('should throw an error if endyear is not included in options', function() {

      expect(() => {
          const API_KEY = 'MY_API_KEY';
          let bls = new Bls2(API_KEY);
          let options = {
            'seriesid': ['CES3000000001'],
            'startyear': '2008',
          };       
          bls.fetch(options);     
      })
      .to.throwError();

    });
  });
});