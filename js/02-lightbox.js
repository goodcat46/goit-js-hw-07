import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

function createGalery() {
  const createGalleryItem = element => {
    const { preview, original, description } = element;
    return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  };

  const galleryItemsArray = galleryItems.map(el => {
    return createGalleryItem(el);
  });

  galleryListEl.insertAdjacentHTML('afterbegin', galleryItemsArray.join(''));

}
createGalery();




