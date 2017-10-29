'use strict'
const AWS = require('aws-sdk')
const stepFunctions = new AWS.StepFunctions({ apiVersion: '2016-11-23' })

module.exports.entrypoint = (event, context, callback) => {
  let color = getColor(event) || 'green'
  const input = { color, correlationId: context.awsRequestId, start: new Date().toISOString() }
  const params = {
    stateMachineArn: process.env.STATE_MACHINE_ARN,
    input: JSON.stringify(input),
    name: `trafficlight-${Date.now()}`
  }
  console.log(JSON.stringify(params))
  stepFunctions.startExecution(params, err => callback(err, {
    statusCode: 200
  }))
}

module.exports.green = (event, context, callback) => {
  console.log('event green:', JSON.stringify(event))
  const data = Object.assign( event, { wait: addSeconds( 0 ) } )
  callback(null,data)
}

module.exports.red = (event, context, callback) => {
  console.log('event red:', JSON.stringify(event))
  const data = Object.assign( event, { wait: addSeconds( 5 ) } )
  callback(null,data)
}

module.exports.yellow = (event, context, callback) => {
  console.log('event yellow:', JSON.stringify(event))
  const data = Object.assign( event, { wait: addSeconds( 10 ) } )
  callback(null,data)
}

module.exports.response = (event, context, callback) => {
  console.log('event response:', JSON.stringify(event))
  const data = Object.assign(event, { end: new Date().toISOString() })
  callback(null, data)
}

const getColor = (event) => {
  try {
    return (event || {}).queryStringParameters.color
  } catch (error) {
    return (event || {}).color
  }
}

const addSeconds = (seconds)=>{
  const time = new Date()
  time.setSeconds( time.getSeconds() + seconds )
  return time.toISOString()
}