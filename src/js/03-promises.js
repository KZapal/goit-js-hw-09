import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector(`.form`);

function cos(event) {
  event.preventDefault();

  const { delay, step, amount } = event.currentTarget.elements;

  for (const i = 0; i < amount.value; i++) {
    let position = i + 1;
    let finallyDelay = Number(delay.value) + Number(step.value) * i;
    createPromise(position, finallyDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  event.currentTarget.reset();
}

form.addEventListener(`submit`, cos);
