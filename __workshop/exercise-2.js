// Exercise 2 - `getAddressPosition`
// ---------------------------------
// 1. Complete the code of this function to return a `Promise` for a lat/lng object
// 2. Use the [OpenCage Data API](https://opencagedata.com/) to do this
//     - Sign up for an account (free) and follow the various guides to get started.
//     - [NodeJs tutorial](https://opencagedata.com/tutorials/geocode-in-nodejs)
//     - missing from the above is the need for the `key` in the request object.
//     - disregard the `.env` guidelines for now.
// 3. Once you have it working, pass it a few address to see what the responses look like.
// 4. Make sure to only return an object with lat/lng and not the whole response

const opencage = require('opencage-api-client');


function getAddressPosition(address) {
    // Request object takes a key and an address:
    const requestObj = {
        key: '7c84850c2a554696ae1277e7d704868f',
        q: address
    };
    // API Request is made here thru the opencage api client's geocode request method:
    return opencage.geocode(requestObj)
        // When the request is returned, treat the data:
        .then(data => {
             if (data.status.code == 200) {
                 if (data.results.length > 0) {
                    const place = data.results[0];
                    // Then, return the coordinates
                    return place.geometry;
                };
            } else {
                // other possible response codes:
                // https://opencagedata.com/api#codes
                console.log('error', data.status.message);
            }
        })
        .catch(error => console.log('error', error.message));
}

console.log(getAddressPosition('1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'));
// console.log(getAddressPosition('4327 Avenue de Lorimier, Montreal, QC H2H 2A9'));
// console.log(getAddressPosition('10 Downing Street, London, England, SW1A 2AA'))

module.exports = { getAddressPosition };