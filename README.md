# Simple Chat app

This app is built using Amplify AppSync from AWS and React as frontend framework. This is a simple chat application
where users can register and enter a chatroom to just write and read messages from other users.

## getting started

To run app locally make sure to install dependencies with

``npm install``

and then just run

``npm run start``  

Navigate to http://localhost:3000 to see local development server.

## Amplify services
This app relies on aws amplify backend with a graphQl api, authentication and hosted in cloudfront
in https://d3m85d11cwtm93.cloudfront.net

Every service has been added using amplify cli and code generation which takes care of graphQl schemas,
queries, mutations and subscriptions

There are no special things in this app so just register and play with it
