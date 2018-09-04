const sensor = require('node-dht-sensor')

/*
We abstract away the functionality to read sensor information inside the getSensorReadings function.
This function is also asynchronous. It accepts a callback function as an argument.
*/
const getSensorReadings = (callback) => {
  sensor.read(11, 4, function (err, temperature, humidity) {
    if (err) {
      return callback(err)
    }
    callback(null, temperature, humidity)
  })
}
module.exports = getSensorReadings