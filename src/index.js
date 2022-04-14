import $ from 'jquery';
// change require to es6 import style
import './style.scss';

let seconds = 0;
function secondCounter() {
  seconds += 1;
  $('#main').html(`You've been on this page for ${seconds} seconds.`);
}

setInterval(secondCounter, 1000);
