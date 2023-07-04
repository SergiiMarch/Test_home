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
    console.log(product);
  }
}
createMarkup(instruments);
