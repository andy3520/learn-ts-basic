let appId = 'test';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
  if (n1 + n2) {
    return n1 + n2;
  }

  return;
}

function clickHandler(message: string) {
  // let userName = 'Andy';
  console.log('Clicked! ' + message);
}

// This text is not include in js file
button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
