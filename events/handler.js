'use strict'
const zlib = require('zlib')

module.exports.api = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    })
  }
  callback(null, response)
}

module.exports.cron = (event, context, callback) => {
  console.log('event:', JSON.stringify(event))
  callback()
}

module.exports.log = (event, context, callback) => {
  console.log('event:', JSON.stringify(event))
  var payload = new Buffer(event.awslogs.data, 'base64')
  zlib.gunzip(payload, (err, result) => {
    if (err) callback(err)
    console.log('Log', result.toString('utf-8'))
    callback()
  })
}
