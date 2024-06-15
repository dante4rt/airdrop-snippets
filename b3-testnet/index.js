alert(
  'B3 Testnet Snippet by HappyCuanAirdrop \nSubscribe: https://t.me/HappyCuanAirdrop'
);

function clickElement(element) {
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
}

window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
  event.returnValue = '';
});

const canvas = document.querySelector('canvas');

function spamClickCanvas(numClicks, delay) {
  if (canvas) {
    let counter = 0;
    const interval = setInterval(() => {
      clickElement(canvas);
      counter++;
      console.log(`Canvas clicked ${counter} time(s).`);

      if (counter >= numClicks) {
        clearInterval(interval);
        console.log(`Completed ${numClicks} clicks on the canvas.`);
      }
    }, delay);
  } else {
    console.log('Canvas element not found.');
  }
}

const numClicks = parseInt(prompt('Enter the number of clicks:', '100'), 10);
const delay =
  parseFloat(prompt('Enter the delay between clicks (in seconds):', '0.1')) *
  1000;

spamClickCanvas(numClicks, delay);
