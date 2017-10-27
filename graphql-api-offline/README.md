# GraphQL


```bat
curl -G 'http://localhost:3000/graphql' --data-urlencode 'query={getKey(key:"Username")}'

curl -G 'http://localhost:3000/graphql' --data-urlencode 'query=mutation {setKey(key:"Username", value: "Luca")}'
```

```bat
sls deploy function -f graphql
```

```javascript
var params = {
    TableName: 'graphql-dev',
    Limit: 10 // optional (limit the number of items to evaluate)
    }
dynamodb.scan(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```