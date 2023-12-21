import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css'
import { galleryItems } from './gallery-items';
import colorCardTpl from '../templates/color-card.hbs' 
const galleryEl = document.querySelector('.gallery')
const galleryItemsEl = createGallery(galleryItems)


function createGallery(galleryItemsEl) {
    return colorCardTpl(galleryItemsEl)
}
galleryEl.innerHTML = galleryItemsEl
galleryEl.addEventListener('click',onClick) 
function onClick(evt) {
    evt.preventDefault()
    if(evt.target.nodeName !== 'IMG') {
        return
    }
    var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
}
// }
// import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from "simplelightbox";
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const galleryImg = document.querySelector('.gallery');

// const imagesMarkup = galleryItems
// .map(({preview,original,description}) => 
// `<div class = "gallery__item">
// <a class = "gallery__link" href = "${original}">
// <img class = "gallery__image"
//   src = "${preview}"
//   data-source = "${original}"
//   alt = "${description}"/>
// </a></div>`).join("");

// galleryImg.insertAdjacentHTML('afterbegin', imagesMarkup);

// let gallery = new SimpleLightbox('.gallery a', );
