'use strict'

const response = (data) => {
  return { statusCode: 200, body: JSON.stringify(data) }
}

module.exports.getUser = (event, context, callback) => {
  callback(null, response({ handler: 'getUser', httpMethod: event.httpMethod, resource: event.resource }))
}

module.exports.deleteUser = (event, context, callback) => {
  callback(null, response({ handler: 'deleteUser', httpMethod: event.httpMethod, resource: event.resource }))
}

module.exports.getCart = (event, context, callback) => {
  callback(null, response({ handler: 'getCart', httpMethod: event.httpMethod, resource: event.resource }))
}

module.exports.deleteCart = (event, context, callback) => {
  callback(null, response({ handler: 'deleteCart', httpMethod: event.httpMethod, resource: event.resource }))
}

module.exports.users = (event, context, callback) => {
  callback(null, response({ handler: 'users', httpMethod: event.httpMethod, resource: event.resource }))
}

module.exports.carts = (event, context, callback) => {
  callback(null, response({ handler: 'carts', httpMethod: event.httpMethod, resource: event.resource }))
}

module.exports.all = (event, context, callback) => {
  callback(null, response({ handler: 'all', httpMethod: event.httpMethod, resource: event.resource }))
}
