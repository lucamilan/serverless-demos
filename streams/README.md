# Streams

Sample usage for DynamoDb stream.

# Outputs Variables

* Support for outputs the new entites provisioned into the stack
* Support for creating export variabile for cross stack reference

# How to test

```bat
sls invoke -f dynamo-add --log
sls logs -f dynamo-listener --tail
```

# How to ouput entity ARNs

```bat
sls deploy -v
sls info -v
```