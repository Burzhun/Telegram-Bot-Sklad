const TelegramApi = require("node-telegram-bot-api");

const token = "6208899312:AAEXw74SiCW0gW-WMtrG7bUZWuscWnF9H5A";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "You wrote " + text);
  console.log(msg);
});
