// Add imports above this line
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'
import { galleryItems } from './gallery-items';
import { createGallery } from '../helpers/createMarkup';
import { onClick } from '../helpers/onClick';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const galleryItemsEl = createGallery(galleryItems)

galleryEl.innerHTML = galleryItemsEl
galleryEl.addEventListener('click',onClick) 





