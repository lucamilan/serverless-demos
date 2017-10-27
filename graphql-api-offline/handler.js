'use strict'
const AWS = require('aws-sdk')

let options = {}

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  }
}

const db = new AWS.DynamoDB.DocumentClient(options)

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} = require('graphql')

const schema = new GraphQLSchema({
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      setKey: {
        args: {
          key: { name: 'key', type: new GraphQLNonNull(GraphQLString) },
          value: { name: 'value', type: new GraphQLNonNull(GraphQLString) }
        },
        type: GraphQLString,
        resolve: (parent, args) => setKeyValue(args.key, args.value)
      }
    }
  }),
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      getKey: {
        args: { key: { name: 'key', type: new GraphQLNonNull(GraphQLString) } },
        type: GraphQLString,
        resolve: (parent, args) => getKeyValue(args.key)
      }
    }
  })
})

const setKeyValue = (key, info) => {
  const params = {
    TableName: process.env.DB_TABLE,
    Key: { key: key },
    UpdateExpression: 'SET info = :info',
    ExpressionAttributeValues: {
      ':info': info
    }
  }
  return db.update(params).promise().then(() => info)
}

const getKeyValue = (key) => {
  const params = {
    TableName: process.env.DB_TABLE,
    Key: { key }
  }
  return db.get(params).promise().then(result => !result.Item ? '' : result.Item.info)
}

module.exports.graphql = (event, context, callback) => graphql(schema, event.queryStringParameters.query)
  .then(
    result => callback(null, {statusCode: 200, body: JSON.stringify(result)}),
    err => callback(err)
  )
