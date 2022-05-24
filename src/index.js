var findBeauty = require("./func/findBeauty");
var divination = require("./func/divination");
var weather = require("./func/weather");

module.exports = async function App(context) {
  // await context.sendText('Welcome to Bottender');
  console.log('context.event', context.event);
  if (context.event) {
    if (context.event.isText) {
      if (context.event.message.text.split(' ').length > 1 && context.event.message.text.split(' ')[1] == '天氣') {
        let loc = context.event.message.text.split(' ')[0];
        weather.weather(context,loc);
      } else {
        switch (context.event.message.text) {
          case '貼圖':
            context.replySticker({ packageId: '6325', stickerId: '10979905' });
            break;
          case '地址':
            context.replyLocation({
              title: 'my location',
              address: '〒150-0002 東京都渋谷区渋谷２丁目２１−１',
              latitude: 35.65910807942215,
              longitude: 139.70372892916203,
            });
            break;
          case '運勢':
            divination.divination(context);
            break;
          default:
            context.replyText('我聽不懂你在講什麼');
        }
      }
    } else if (context.event) {
      if (context.event.message.stickerId == '444306422') {
        findBeauty.findBeauty(context);
      }
    } else {
      context.replyText('我看不懂你在講什麼');
    }
  }
};
