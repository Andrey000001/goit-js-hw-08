
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
import colorCardTpl from '../templates/color-card.hbs';


const galleryEl = document.querySelector('.gallery');
const galleryItemsEl = createGallery(galleryItems);

function createGallery(galleryItemsEl) {
  return colorCardTpl(galleryItemsEl);
}

galleryEl.addEventListener('click', onClick);
galleryEl.innerHTML = galleryItemsEl;
function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  lightbox.open()
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
