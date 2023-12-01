import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector(`button[data-start]`);
startBtn.disabled = true;
const datetimePicker = document.querySelector(`#datetime-picker`);
const daysValue = document.querySelector(`span[data-days]`);
const hoursValue = document.querySelector(`span[data-hours]`);
const minutesValue = document.querySelector(`span[data-minutes]`);
const secondsValue = document.querySelector(`span[data-seconds]`);
const timerHtml = document.querySelector('.timer');
timerHtml.style.fontSize = `120%`;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date() >= selectedDates[0]) {
      Notiflix.Notify.failure(`Wybierz date w przyszłości`);
    } else {
      startBtn.disabled = false;
    }
  },
};

function addLeadingZero(value) {
  return String(value).padStart(2, `0`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
startBtn.addEventListener('click', () => {
  let timer = setInterval(() => {
    let countdown = new Date(datetimePicker.value) - new Date();
    startBtn.disabled = true;
    datetimePicker.disabled = true;
    if (countdown >= 0) {
      let timeObject = convertMs(countdown);
      daysValue.textContent = addLeadingZero(timeObject.days);
      hoursValue.textContent = addLeadingZero(timeObject.hours);
      minutesValue.textContent = addLeadingZero(timeObject.minutes);
      secondsValue.textContent = addLeadingZero(timeObject.seconds);
    } else {
      Notiflix.Notify.success('Odliczanie zakończone!');
      clearInterval(timer);
      datetimePicker.disabled = false;
    }
  }, 1000);
});

flatpickr(datetimePicker, options);
