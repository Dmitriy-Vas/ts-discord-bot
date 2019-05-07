# ts-discord-bot
A console based discord bot built with Node.JS and TypeScript.

## Contents

+ [Install](#Install)
+ [Setup](#Setup)
+ [Run](#Run)

## Install

Make sure you have [Node.JS](https://nodejs.org/en/) before starting.

1. Clone the repo to your computer

```bash
git clone https://github.com/Dmitriy-Vas/ts-discord-bot.git
```

2. Change directory into the project folder

```bash
cd ts-discord-bot
```

3. Install the required dependencies

```bash
npm install
```

#### Optional

4. Install bot as an npm module. This will let you use bot from any directory in the console

```bash
npm install -g
```

5. Link the installed module to this folder to automatically update the module when any code changes happen

```bash
npm link
``` 

## Setup

Now that ts-discord-bot is installed, you will need to set up your `config.json` file. This can be done in few steps:

1. Open the project folder in your file explorer.
2. Rename the file `config-sample.json` to `config.json`. (Note: Depending on your computer's settings you might not see the `.json` part of the file name)
3. Change the bot settings with your own settings.

```json5
{
  "token": "W2dEwPEUhBreMqcnGkr7ghi9u3TqdfvZXpyEhkZDHtZkKwCnv4svmLgT", // Your Discord token.
  "prefix": ">"                                                        // Your prefix to use with commands.
}
```

## Run

After setting up the `config.json` file, bot is ready to go. To run program, simply use the command `gulp start` in the console. If you have setup your `config.json` properly (and used the correct credentials) you should see an output similar to this

```bash
C:\ts-discord-bot>gulp start
[19:24:10] Using gulpfile C:\ts-discord-bot\gulpfile.js
[19:24:10] Starting 'lint'...
[19:24:12] Finished 'lint' after 1.5 s
[19:24:12] Starting 'build'...
[19:24:18] Finished 'build' after 5.83 s
[19:24:18] Starting 'start'...
[19:24:18] Finished 'start' after 94 ms
[19:24:18] [nodemon] 1.18.10
[19:24:18] [nodemon] to restart at any time, enter `rs`
[19:24:18] [nodemon] watching: C:\ts-discord-bot\src\**\*
[19:24:18] [nodemon] starting `node ./index.js`
Successfully logged as Dmitriy
```
