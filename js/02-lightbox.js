import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
function createGalery() {
  const createGalleryItem = element => {
    const { preview, original, description } = element;
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>`;
  };

  const galleryItemsArray = galleryItems.map(el => {
    return createGalleryItem(el);
  });

  galleryListEl.insertAdjacentHTML('afterbegin', galleryItemsArray.join(''));
}
createGalery();
let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});





