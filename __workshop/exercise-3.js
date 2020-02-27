// Exercise 3 - `getAddressPosition`
// ---------------------------------
// 1. Go to https://darksky.net/dev/ and read the documentation
// 2. Signup and get a free API key
// 3. Complete the code of the function.
// The `position` parameter is an object with `lat` and `lng`.
// 4. Make sure your function only returns a `Promise` for the current temperature
// (a number) and nothing else

// Given a position (latitude and longitude), returns the position

// const darksky = require('dark-sky-api');
const request = require('request-promise');
// const fetch = require('node-fetch');

// let position = {lat: 45.5341142, lng: -73.5695506};


function getCurrentTemperatureAtPosition(position) {
   return request(`https://api.darksky.net/forecast/747a5498ccc770a3d35752ca73caaaf6/${position.lat},${position.lng}`)
    .then(data => {
        let returnedData = JSON.parse(data)
        return {
            currentTemp: returnedData.currently.temperature
        }
    })
    //.then(data => console.log(data))
}

getCurrentTemperatureAtPosition({lat: 45.5341142, lng: -73.5695506});

module.exports = { getCurrentTemperatureAtPosition };