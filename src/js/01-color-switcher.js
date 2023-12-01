const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  document.body.style.background = `${getRandomHexColor()}`;
}

let id = null;

startBtn.addEventListener(`click`, () => {
  id = setInterval(changeColor, 1000);
  startBtn.setAttribute(`disabled`, `true`);
});

stopBtn.addEventListener(`click`, () => {
  clearInterval(id);
  startBtn.removeAttribute('disabled');
});
