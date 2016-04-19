const fs = require('fs');
const Slack = require('slack-node');
const slackUrl = require('./config.json').slackHookUrl;

/*
  Check if the program is run with at least 3 arguments
 */
if (process.argv.length < 3) {
  console.log('Missing file parameter');
  process.exit();
}

/*
  Retrieve message paramters file path
 */
var filePath = process.argv[2];
if (filePath.indexOf('/') == -1) {
  filePath = './' + filePath;
}

/*
  Check if the message paramters file path exist
 */
if (!fs.existsSync(filePath)) {
  console.log('Wrong file path');
  process.exit();
}

/*
  Retrieve message paramters
 */
const msgParameters = require(filePath);

/*
  Send message to the slack webhook, displaying response in case of error
 */
var slack = new Slack();
slack.setWebhook(slackUrl);
slack.webhook(msgParameters, function (err, response) {
  if (response.statusCode != 200) {
    console.log(response);
  }
});
