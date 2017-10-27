# serverless-demos


## Intro
A basic serverless service.
Variables (https://serverless.com/framework/docs/providers/aws/guide/variables/#variables)

```bat
sls #show all commands
sls create -t aws-nodejs
sls invoke local -f hello
sls info
sls deploy
sls invoke -f hello
sls logs -f hello
sls remove
```

New stage

```yml
  stage: ${opt:stage, 'dev'}
```

```bat
sls #show all commands
sls info -s stage
sls deploy -s stage
sls invoke -s stage -f hello
sls logs -s stage -f hello
sls remove -s stage
```
