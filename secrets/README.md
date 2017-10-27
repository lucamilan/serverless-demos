# Secrets

AWS SSM Parameters are a great and recommended way to share encrypted variables between and within services.

Serverless v1.22 introduces support for SSM Parameters via the Serverless Variables system.

https://aws.amazon.com/it/ec2/systems-manager/parameter-store/

http://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-paramstore.html

http://docs.aws.amazon.com/cli/latest/reference/ssm/index.html

```bat
aws ssm put-parameter --name globalKey --value XYZ --type String
aws ssm put-parameter --name lambdaKey --value ZZZ --type String
aws ssm delete-parameter --name globalKey
aws ssm delete-parameter --name lambdaKey
```

```bat
${ssm:globalKey}
${ssm:lambdaKey}
```
