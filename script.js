let hourHand = document.querySelector('#hr-hand');
let minuteHand = document.querySelector('#min-hand');
let secondHand = document.querySelector('#sec-hand');

let hrRotation;
let minRotation;
let secRotation;

setInterval(() => {
  let d = new Date();

  // Time
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  hrRotation = 30 * hr + min / 2;
  minRotation = 6 * min;
  secRotation = 6 * sec;

  hourHand.style.transform = `rotate(${hrRotation}deg)`;
  minuteHand.style.transform = `rotate(${minRotation}deg)`;
  secondHand.style.transform = `rotate(${secRotation}deg)`;

}, 100);
