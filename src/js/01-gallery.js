// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
createELGallery(galleryItems)

function createELGallery(arr) {
  const markup = arr.map(({preview, original, description }) => 
      `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    </li>`).join('')
  gallery.innerHTML = markup;
}
gallery.addEventListener('click',(e) => {
  e.preventDefault()
  
  if(e.target !== 'IMG') {
    return
  }
  lightbox.open()
})

var lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});