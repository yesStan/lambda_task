const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios').default;

require('dotenv').config()

const token = process.env.API_KEY;
// const chatId = process.env.CHAT_ID;
const bot = new TelegramBot(token, { polling: true });

// console.log(process.env);

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    // console.log(msg);

    bot.sendMessage(chatId, ` You wrote: ${msg.text}`);
    console.log(`${msg.chat.username} wrote text: ${msg.text}`)

    // https://picsum.photos/200/300

    if (msg.text === 'photo') {
        try {
            const photoResponse = await axios.get('https://picsum.photos/200/300');
            bot.sendPhoto(chatId, photoResponse.request.res.responseUrl);
        } catch (e) {
            console.log(e);
        }
    }
});
