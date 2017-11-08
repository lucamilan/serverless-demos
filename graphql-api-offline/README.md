# GraphQL Offline

Test your service locally, without having to deploy it first.

## Setup

```bat
npm install
serverless dynamodb install
serverless offline start
```

# Test

```bat
curl -G 'http://localhost:3000/graphql' --data-urlencode 'query={getKey(key:"Username")}'

curl -G 'http://localhost:3000/graphql' --data-urlencode 'query=mutation {setKey(key:"Username", value: "Luca")}'
```

```bat
sls deploy function -f graphql
```

# How is changed

Now, we can connect to local endpoint of DynamoDb

```javascript
let options = {}

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  }
}

const db = new AWS.DynamoDB.DocumentClient(options)
```

Because { Ref: XYZ } CF syntax is not supported

```yml
DB_TABLE: ${self:custom.dbTable}
```

Shell for local endpoint http://localhost:8000/shell

```javascript
var params = {
    TableName: 'graphql-dev',
    Limit: 10
    }
dynamodb.scan(params, function(err, data) {
    if (err) ppJson(err)
    else ppJson(data)
});
```

