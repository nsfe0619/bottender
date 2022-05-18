module.exports = async function App(context) {
  // await context.sendText('Welcome to Bottender');
  console.log(context.event);
  if (context.event) {
    if (context.event.isText) {
      switch (context.event.message.text) {
        case '貼圖':
          context.sendSticker({ packageId: '6325', stickerId: '10979905' });
          break;
        case '地址':
          context.sendLocation({
            title: 'my location',
            address: '〒150-0002 東京都渋谷区渋谷２丁目２１−１',
            latitude: 35.65910807942215,
            longitude: 139.70372892916203,
          });
          break;
        default:
          context.sendText('我聽不懂你在講什麼');
      }
    } else {
      context.sendText('我看不懂你在講什麼');
    }
  }
};
