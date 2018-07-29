class Bls2 {

    constructor(api_key) {
        if (!api_key) {
            throw new Error('API key is required');
        }
        this.api_key = api_key;
        this.api_endpoint = 'https://api.bls.gov/publicAPI/v2/timeseries/data/';
    }

    fetch(options) {
        let errors = this.validate(options);
        if (errors.length > 0) {
            if (errors.length === 1) {
                throw new Error(`Missing required parameter: ${errors[0]}`);
            } else {
                let list = errors.join(', ');
                throw new Error(`Missing required parameters: ${list}`);
            }
        }

        options.registrationkey = this.api_key;
        const axios = require('axios');
        return axios.post(this.api_endpoint, options)
            .then(function (response) {
                return response.data;
            })
            .catch (function (err) {
                throw new Error(err);
            });
    }

    validate(options) {
        let errors = [];
        if (!options.hasOwnProperty('seriesid')) {
            errors.push('seriesid');
        }
        if (!options.hasOwnProperty('startyear')) {
            errors.push('startyear');
        }
        if (!options.hasOwnProperty('endyear')) {
            errors.push('endyear');
        }
        return errors;
    }

}



module.exports = Bls2;

