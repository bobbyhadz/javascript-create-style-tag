console.log('bobbyhadz.com');

const style = document.createElement('style');

style.textContent = `
  #box {
    width: 100px;
    height: 100px;
    background-color: salmon;
    color: white;
  }

  body {
    background-color: lightgrey;
  }
`;

document.head.appendChild(style);
