'use strict';

const form = document.getElementById('formId');
const page = document.getElementById('page-body');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  evt.target.reset();
});

window.addEventListener('hashchange', function() {
  if (window.location.hash.includes('menu')) {
    page.classList.add('page--hidden');
  } else {
    page.classList.remove('page--hidden');
  }
});
