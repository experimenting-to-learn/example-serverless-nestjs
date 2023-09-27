# Basic Starter for NestJS

## Description

This is an example of how to use serverless-express with [NestJS](https://github.com/nestjs/nest) on AWS using the [Serverless framework](https://www.serverless.com/).

## Reference commands

### Install dependencies

```bash
$ yarn
```

### Run application to develop

To run locally with nestjs runtime with watch option
```bash
yarn run start:dev
```

To run locally with nestjs runtime with debug option
```bash
yarn run start:debug
```
The application will be available at `http://localhost:3000/dev/hello`.

### Add module in its project(In NestJS, module is to organize the application structure into distinct functional units)
```bash
$ nest g mo <name> modules
```

### Deploy the app

To simulate the app running on Lambda locally, run the following:
```bash
$ yarn run sls:offline
```

To deploy the app to AWS, you'll first need to configure your AWS credentials. There are many ways
to set your credentials, for more information refer to the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

Once set you can deploy your app using the serverless framework with:

```bash
$ yarn run sls:deploy
```
