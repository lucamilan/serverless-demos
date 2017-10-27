# GraphQL

curl -G 'https://so8t289szc.execute-api.eu-west-1.amazonaws.com/dev/graphql' --data-urlencode 'query={getKey(key:"Username")}'

curl -G 'https://so8t289szc.execute-api.eu-west-1.amazonaws.com/dev/graphql' --data-urlencode 'query=mutation {setKey(key:"Username", value: "Luca")}'


sls deploy function -f graphql