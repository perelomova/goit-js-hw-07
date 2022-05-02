import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryContainer.addEventListener('click', onImageClick);

// console.log(createGalleryItemsMarkup(galleryItems));

function createGalleryItemsMarkup(items) {
  return items.map(({preview, original, description}) => {
    return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
  }).join('');
}

function onImageClick(event) {
  event.preventDefault();
  
  if (!event.target.classList.contains('gallery__image')) {
    return;
  } 

}

new SimpleLightbox('.gallery__item', { captionsData: "alt", captionDelay: 250});
