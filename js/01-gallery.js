import { galleryItems } from './gallery-items.js';
// Change code below this line

// refs

const galleryRefs = document.querySelector('.gallery');

// functions for creating gallery and opening lightbox

function createImageGallery() {
  const galleryMarkup = galleryItems.reduce((acc, { original, preview, description }) => acc + 
    `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`,
    '');

  galleryRefs.insertAdjacentHTML('afterbegin', galleryMarkup);
};

function onGalleryImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return
  };

  const lightbox = basicLightbox.create(`
    <img
      src="${evt.target.dataset.source}"
      width = "600"
      height = "400"
      >`,
    {
      onShow: lightbox => {document.addEventListener('keydown', onEscapeButtonClick)},
      onClose: lightbox => {document.removeEventListener('keydown', onEscapeButtonClick)}
    }
  );

  lightbox.show();

  function onEscapeButtonClick(evt) {
    if (evt.code !== 'Escape') {
      return
    }
    lightbox.close();
  };
};

// create gallery

createImageGallery();

// open lightbox

galleryRefs.addEventListener('click', onGalleryImageClick);