'use strict'

console.log('Container initialized: ', new Date().toISOString())

module.exports.hello = (event, context, callback) => {
  console.log('event', JSON.stringify(event))
  console.log('remaining time', context.getRemainingTimeInMillis())
  console.warn('name', context.functionName)
  console.info('log Group', context.logGroupName)
  console.error(new Error('kabom'))
  callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event })
}
