alert(
  'Nika Labs Airdrop Snippet by HappyCuanAirdrop \nSubscribe: https://t.me/HappyCuanAirdrop'
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

const buttons = document.querySelectorAll('.nikalabs-buttonbase-root');

let counter = 0;
let clicked = false;

buttons.forEach((button) => {
  clickElement(button);
  counter++;
  console.log(`The button has been clicked ${counter} time(s).`);

  if (!clicked) {
    clicked = true;
  } else {
    counter = 0;
    clicked = false;
  }
});

console.log('All buttons have been clicked.');
alert('All tasks completed! \nSubscribe: https://t.me/HappyCuanAirdrop');
