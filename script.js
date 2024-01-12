const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let hourHand = document.querySelector('#hr-hand');
let minuteHand = document.querySelector('#min-hand');
let secondHand = document.querySelector('#sec-hand');

let dayBox = document.querySelector('.day');
let monthBox = document.querySelector('.month');
let yearBox = document.querySelector('.year');

let hrRotation;
let minRotation;
let secRotation;

setInterval(() => {
  let d = new Date();

  // Time
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  let date = d.getDate().toString().padStart(2, '0');
  let day = d.getDay();
  let month = d.getMonth();
  let year = d.getFullYear();

  hrRotation = 30 * hr + min / 2;
  minRotation = 6 * min;
  secRotation = 6 * sec;

  dayBox.textContent = `${week[day]},`;
  monthBox.textContent = `${months[month]} ${date},`;
  yearBox.textContent = `${year}`;

  hourHand.style.transform = `rotate(${hrRotation}deg)`;
  minuteHand.style.transform = `rotate(${minRotation}deg)`;
  secondHand.style.transform = `rotate(${secRotation}deg)`;

}, 100);
