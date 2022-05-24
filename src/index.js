var findBeauty = require("./func/findBeauty");
var divination = require("./func/divination");

module.exports = async function App(context) {
  // await context.sendText('Welcome to Bottender');
  console.log('context.event', context.event);
  if (context.event) {
    if (context.event.isText) {
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
        case '天氣':
          console.log('get_weather', get_weather());
          // context.sendSticker({ packageId: '6325', stickerId: '10979905' });
          break;
        default:
          context.replyText('我聽不懂你在講什麼');
      }
    } else if (context.event) {
      console.log('context.event.message',context.event.message.stickerId=='444306422');
      if (context.event.message.stickerId == '444306422') {
        findBeauty.findBeauty(context);
      }
    } else {
      context.replyText('我看不懂你在講什麼');
    }
  }
};

function get_weather(location, chatid) {

  var response = UrlFetchApp.fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-989FFA02-379A-4D81-AE8F-652286D0EA74" + "&" + "locationName=台北市");
  var weatherData = JSON.parse(response);
  //Logger.log(response);
  return weatherData;

}