import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const imageGallery = document.querySelector('.gallery');
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
    </div>`, '');

  imageGallery.insertAdjacentHTML('afterbegin', galleryMarkup);
};

createImageGallery();

// console.log(basicLightbox);



// imageGallery.addEventListener('click', onGalleryImageClick);

const openImageModal = basicLightbox.create(`
  <img
    class="gallery__image"
    src="${original}"
    alt="${description}"
  />
`);

openImageModal();

// const onGalleryImgClick = event => {  
//   event.preventDefault();  
//   if (event.target.nodeName !== 'IMG') {
//     return
//   };

//   const imageModal = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="800" height="600">  `,
//     {
//       onShow: imageModal => {document.addEventListener('keydown', onEscapeKeyDown)},
//       onClose: imageModal => {document.removeEventListener('keydown', onEscapeKeyDown)},    
//     }
//   );  

//   imageModal.show();

//   function onEscapeKeyDown(event) { 
//     if (event.code !== 'Escape') {
//       return
//     }
//     imageModal.close()
//   };
// }

