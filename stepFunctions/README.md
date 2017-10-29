# Step Functions (Traffic Lights)

![State Machine Flow](screen.jpg)

## Test

```bat
sls invoke -f entrypoint -data='{ "color":"red" }' -log
```