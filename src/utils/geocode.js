const request = require('request')

const geocode = (address, callback) => {
    // const url = 'https://api.mapbox.com/search/geocode/v6/forward?q='+ address +'&access_token=pk.eyJ1IjoiY2FrcmF5dWRoYXNzIiwiYSI6ImNtY3ZrZnFxZzBiejEya29iaGxybzEwcGcifQ.XTH-4rr5FJZ0D0xOTR-LDw&limit=1'
    const url = 'https://api.mapbox.com/search/geocode/v6/forward?q='+ encodeURIComponent(address) +'&access_token=pk.eyJ1IjoiY2FrcmF5dWRoYXNzIiwiYSI6ImNtY3ZrZnFxZzBiejEya29iaGxybzEwcGcifQ.XTH-4rr5FJZ0D0xOTR-LDw&limit=1'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].geometry.coordinates[0],
                latitude: body.features[0].geometry.coordinates[1],
                location: body.features[0].properties.full_address
            })
        }
    })
}

module.exports = geocode