const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=b2a3a9a884de9fd6068900e913c31bdd&query=' + latitude + ',' + longitude + '&units=s'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const current = body.current
            callback(undefined, current.weather_descriptions[0] + '. It is currently ' + current.temperature + ' degrees out. It feels like ' + current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast