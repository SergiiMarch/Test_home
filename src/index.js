import * as basicLightbox from 'basiclightbox';

import 'basiclightbox/dist/basiclightbox.min.css';

import { instruments } from './instruments.js';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

function createMarkup(arr) {
  const murkup = arr
    .map(
      ({ id, img, name }) => ` <li data-id="${id}" class="js-card">
    <img class = "murkup" src="${img}" alt="${name}" width = "320"/>
    <h2>${name}</h2>
    <p><a href="#" class="js-info">More information</a></p>
    <div>
      <button>Add to favorite</button>
      <button>Add to basket</button>
    </div>
  </li>`
    )
    .join('');
  list.innerHTML = murkup;
}

list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));

    const instance = basicLightbox.create(`
    	<div class="modal">
          <img src="${product.img}" alt="${product.name}" width="200" />
          <h2>${product.name}</h2>
          <h3>${product.price} грн</h3>
          <p>${product.description}</p>
          <div>
            <button>Add to favorite</button>
            <button>Add to basket</button>
          </div>
        </div>
    `);
    instance.show();
  }
}
createMarkup(instruments);

function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}
