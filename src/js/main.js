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


let counter = localStorage.getItem('glassNumber');
spanCounter.innerHTML = localStorage.getItem('glassNumber');

addButton.addEventListener('click', () => {
  // spanCounter.innerHTML = parseInt(spanCounter.innerHTML)+1; // you can do something like this
  counter++;
  localStorage.setItem('glassNumber', counter);
  // spanCounter.innerHTML = counter;
  spanCounter.innerHTML = localStorage.getItem('glassNumber');
});

delButton.addEventListener('click', () => {
  if (counter <= 0) {
    counter = 0;
  } else {
    counter--;
    localStorage.setItem('glassNumber', counter);
    spanCounter.innerHTML = localStorage.getItem('glassNumber');
  }
  spanCounter.innerHTML = counter;
});