alert(
  'Xai Vanguard Snippet by HappyCuanAirdrop \nSubscribe: https://t.me/HappyCuanAirdrop'
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

const buttons = document.querySelectorAll('.bg-xai-red');

buttons.forEach((button, index) => {
  setTimeout(() => {
    clickElement(button);
    console.log(`Clicked button ${index + 1}`);
  }, index * 500);
});

console.log('All buttons will be clicked.');
