import { galleryItems } from './gallery-items.js';
// Change code below this line

// refs

const galleryRefs = document.querySelector('.gallery');

// function for creating gallery

function createImageGallery() {
  const galleryMarkup = galleryItems.reduce((acc, { original, preview, description }) => acc + 
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`,
    '');

  galleryRefs.insertAdjacentHTML('afterbegin', galleryMarkup);
};

// create gallery

createImageGallery();

// open lightbox

const lightbox = new SimpleLightbox('.gallery a',
  {
    captionsData: "alt",
    captionDelay: 250,
  }
);