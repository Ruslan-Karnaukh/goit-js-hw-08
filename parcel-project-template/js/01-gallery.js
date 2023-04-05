// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");

const galleryList = galleryItems.map(({preview ,description, original}) => {
  return `
  <li>
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}">
  </a>
  </li>`
}).join("")


galleryEl.insertAdjacentHTML("afterbegin", galleryList)

  const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
  });