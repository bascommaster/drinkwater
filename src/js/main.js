"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


// console.log(`Hello world!`);

const spanCounter = document.querySelector('.glass__counter--js');
const addButton = document.querySelector('.container__add-glass--js');
const delButton = document.querySelector('.container__del-glass--js');

let counter = 0;

const date = new Date().toISOString().slice(0, 10);
// console.log(date);

if (!localStorage.getItem(date)) {
  localStorage.setItem(date, 0);
} else {
  counter = localStorage.getItem(date);
  spanCounter.innerHTML = localStorage.getItem(date);
}



addButton.addEventListener('click', () => {
  counter++;
  localStorage.setItem(date, counter);
  spanCounter.innerHTML = localStorage.getItem(date);
});


delButton.addEventListener('click', () => {
  if (counter <= 0) {
    counter = 0;
  } else {
    counter--;
    localStorage.setItem(date, counter);
    spanCounter.innerHTML = localStorage.getItem(date);
  }
  spanCounter.innerHTML = counter;
});