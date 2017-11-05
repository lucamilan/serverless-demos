'use strict'
const AWS = require('aws-sdk')
const db = new AWS.DynamoDB.DocumentClient()

const write = (payload) => {
  const params = {
    TableName: process.env.DB_TABLE,
    Item: payload
  }
  return db.put(params).promise()
}

module.exports.dynamoAdd = (event, context, callback) => {
  console.log('event:', JSON.stringify(event), process.env.DB_TABLE)
  const payload = {
    id: new Date().getTime().toString(),
    message: 'Hello WebDev!',
    event
  }
  write(payload).then(result => callback(null, result)).catch(callback)
}

module.exports.dynamoListener = (event, context, callback) => {
  console.log('event:', JSON.stringify(event))
  event.Records.forEach((record) => { console.log('record:', JSON.stringify(record)) })
}
