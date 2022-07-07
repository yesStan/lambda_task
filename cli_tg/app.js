
const TelegramBot = require('node-telegram-bot-api');
const { program } = require('commander');

require('dotenv').config()

console.log(process.env);

// const program = new Command();

const token = process.env.API_KEY;
const bot = new TelegramBot(token, { polling: true });
const chatId = 724025977;

program
.option('-m, --msgText <text>', 'Send direct message to a bot')
.option('-p, --picture <path>', 'Send direct picture to a bot')
.option('-g, --location <location>', 'send location to a bot')

    .parse();
  
const options = program.opts();

const msg = options.msgText ? bot.sendMessage(chatId, options.msgText) : 'sorry wrong action'
const pic = options.picture ? bot.sendPhoto(chatId, options.picture) : 'sorry wrong action'