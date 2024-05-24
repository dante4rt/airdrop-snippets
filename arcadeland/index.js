alert(
    'Arcadeland Snippet by HappyCuanAirdrop \nSubscribe: https://t.me/HappyCuanAirdrop'
  );
  
  function clickElement(element) {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    element.dispatchEvent(event);
  }
  
  const buttons = document.querySelectorAll('.chakra-button.css-exvdkj');
  let counter = 0;
  let clicked = false;
  
  buttons.forEach((button) => {
    clickElement(button);
    counter++;
    console.log(`The button has been clicked ${counter} time(s).`);
    clicked = true;
  });
  
  if (!clicked || counter === 0) {
    console.log('All buttons have been clicked.');
  }
  