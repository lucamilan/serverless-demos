'use strict'
const AWS = require('aws-sdk')
const stepFunctions = new AWS.StepFunctions({ apiVersion: '2016-11-23' })

module.exports.semaphore = (event, context, callback) => {
  const params = {
    stateMachineArn: process.env.STATE_MACHINE_ARN,
    input: JSON.stringify(event),
    name: `semaphore-${Date.now()}`
  }
  console.log(JSON.stringify(params))
  stepFunctions.startExecution(params, err => callback(err, {
    statusCode: 200
  }))
}

module.exports.green = (event, context, callback) => {
  console.log('event green:', JSON.stringify(event))
  callback()
}

module.exports.red = (event, context, callback) => {
  console.log('event red:', JSON.stringify(event))
  callback()
}

module.exports.yellow = (event, context, callback) => {
  console.log('event yellow:', JSON.stringify(event))
  callback()
}

module.exports.response = (event, context, callback) => {
  console.log('event response:', JSON.stringify(event))
  callback()
}
