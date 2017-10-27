# Serverless AWS - Events

* API Gateway
* Kinesis & DynamoDB
* S3
* Schedule
* SNS
* Alexa Skill
* IoT
* CloudWatch Event
* CloudWatch Log
* Cognito User Pool
*  Alexa Smart Home

## Schedule

## Api

## CloudWatch Logs
Sample Payload

```json
{
  "messageType": "DATA_MESSAGE",
  "owner": "687528494169",
  "logGroup": "/aws/lambda/events-dev-cron",
  "logStream": "2017/10/27/[$LATEST]89ff2565b166459c8d96d275f9279ec3",
  "subscriptionFilters": [
    "events-dev-LogLogsSubscriptionFilterCloudWatchLog1-KVQ943FT68HE"
  ],
  "logEvents": [
    {
      "id": "33653999970643374877220195331332580121389268254862540800",
      "timestamp": 1509097551272,
      "message": "2017-10-27T09:45:51.272Z\t9e0e8aaf-bafb-11e7-905d-1988a1314f75\tevent: {\"version\":\"0\",\"id\":\"7727cefb-f444-a892-240a-d531652f7b11\",\"detail-type\":\"Scheduled Event\",\"source\":\"aws.events\",\"account\":\"687528494169\",\"time\":\"2017-10-27T09:45:13Z\",\"region\":\"eu-west-1\",\"resources\":[\"arn:aws:events:eu-west-1:687528494169:rule/events-dev-CronEventsRuleSchedule1-1TQD4WEE9AS7Y\"],\"detail\":{}}\n"
    },
    {
      "id": "33653999970665675622418725954474115839661916616368521217",
      "timestamp": 1509097551273,
      "message": "END RequestId: 9e0e8aaf-bafb-11e7-905d-1988a1314f75\n"
    },
    {
      "id": "33653999970665675622418725954474115839661916616368521218",
      "timestamp": 1509097551273,
      "message": "REPORT RequestId: 9e0e8aaf-bafb-11e7-905d-1988a1314f75\tDuration: 28.82 ms\tBilled Duration: 100 ms \tMemory Size: 128 MB\tMax Memory Used: 19 MB\t\n"
    }
  ]
}
```



