import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox = null;

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy"/>
      <div class="info">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </a>
  `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}

export function showNoResultsMessage() {
  iziToast.info({
    title: 'No Results',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
  });
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('visible');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('visible');
}
