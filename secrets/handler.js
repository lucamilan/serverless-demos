'use strict'

module.exports.hello = (event, context, callback) => {
  const message = 'Global: ' + process.env.GLOBAL_API_KEY + ' - Local:' + process.env.LAMBDA_API_KEY
  const response = {
    statusCode: 200,
    body: JSON.stringify(message)
  }

  callback(null, response)
}
