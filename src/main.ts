import Discord = require('discord.js');

const BOT = new Discord.Client();

export class Main {

    constructor() {
        BOT.login(require('./../config.json').token)
            .then(() => console.log('Successfully logged as', BOT.user.username))
            .catch((error) => console.log(error));
    }

}
