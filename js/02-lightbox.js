import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const imageGallery = document.querySelector('.gallery');

function createImageGallery() {
  const galleryMarkup = galleryItems.reduce((acc, { original, preview, description }) => acc + 
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`,
    '');

  imageGallery.insertAdjacentHTML('afterbegin', galleryMarkup);
};

createImageGallery();

imageGallery.addEventListener('click', onGalleryImageClick);

function onGalleryImageClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return
  };

  const imageModal = new SimpleLightbox('.gallery__item',
  {
    nav: true,
    enableKeyboard: true,
    overlayOpacity: 0.7,
    
  }
  )
//   const imageModal = basicLightbox.create(`
//     <img
//       src="${evt.target.dataset.source}"
//       width = "600"
//       height = "400"
//       >`,
//     {
//       onShow: imageModal => {document.addEventListener('keydown', onEscapeButtonClick)},
//       onClose: imageModal => {document.removeEventListener('keydown', onEscapeButtonClick)}
//     }
//   );

//   imageModal.show();

//   function onEscapeButtonClick(evt) {
//     if (evt.code !== 'Escape') {
//       return
//     }
//     imageModal.close();
//   };

};


