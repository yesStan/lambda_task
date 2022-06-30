// const TelegramBot = require('node-telegram-bot-api');

// import command from './commands.js';
import botCommand from './commands.js';
import TelegramBot from 'node-telegram-bot-api';

const token = '5553083920:AAEf8j_0bnTGgh0M_IDVjQzPzzWFXpFxFfA';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.setMyCommands(botCommand);

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    console.log(msg);
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
})

// bot.on('start', (welcomeMsg) => {
//     const chatId = welcomeMsg.chat.id;
//     bot.sendMessage(chatId, 'hello people')
// })
// bot.onText(/\/start/, (msg) => {
//     bot.sendMessage(msg.chat.id, "Welcome");
// });