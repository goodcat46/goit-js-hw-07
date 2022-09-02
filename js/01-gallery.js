import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');
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

galleryListEl.addEventListener('click', event => {
  event.preventDefault();
  let { target } = event;

  if (target.nodeName !== 'IMG') {
    return;
  }
  let imgLinkToShow = target.dataset.source;
  console.log(imgLinkToShow);

  const instance = basicLightbox.create(`
    <img src="${imgLinkToShow}" alt="">
  `);
  instance.show();

  const closeBckdrp = event => {
    let { code } = event;
    if (code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', closeBckdrp)
    }
    console.log('fhdfgnfdhgndytymdfhngfbfjhhjfhnfhg');
  }
  window.addEventListener('keydown', closeBckdrp)
});