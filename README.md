# slack-message-manager
Node.JS script dedicated to send custom message to a Slack webhook.

## Features
- Parse JSON file to send message to a configured Slack hook
- JSON file path/name passed by command-line parameter, then parse it at run time

## Installation
- Simply clone this depot anywhere on your server.
- Copy [config.json.exemple](https://github.com/BernardJeremy/slack-message-manager/blob/master/config.json.exemple) file into a `config.json` file.
- Perform `npm install` command.
- Install a [incoming-webhooks](https://api.slack.com/incoming-webhooks) on your Slack.
- Add your link of the Slack incoming-webhooks in the `config.json` file.

## Configuration
- `slackHookUrl` :  Link to your Slack incoming-webhooks.

## Message setup
- Create a JSON file like [message-exemple.json](https://github.com/BernardJeremy/slack-message-manager/blob/master/message-exemple.json) with your message's parameters.
- `username` `icon_emoji` and `channel` are optional.
- Run the program with the message file path/name as parameter : `npm install file.json` or `node index.js file.json`.
