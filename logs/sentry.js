const Sentry = require("@sentry/node");
// or use es6 import statements
// import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: "https://d7d566eb8d0d4f499ae2a89245102dfe@o4504992072204288.ingest.sentry.io/4504993248706560",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

const transaction = Sentry.startTransaction({
  op: "test",
  name: "My First Test Transaction",
});




module.exports= Sentry;