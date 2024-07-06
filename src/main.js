import { fetchImages } from './js/pixabay-api.js';
import {
  clearGallery,
  renderImages,
  showNoResultsMessage,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#search-form');

  form.addEventListener('submit', event => {
    event.preventDefault();

    const input = form.querySelector('input[name="searchQuery"]');
    const query = input.value.trim();

    if (!query) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query.',
        position: 'topRight',
      });
      return;
    }

    clearGallery();
    showLoader();

    fetchImages(query)
      .then(images => {
        if (images.length === 0) {
          showNoResultsMessage();
        } else {
          renderImages(images);
        }
      })
      .catch(error => {
        iziToast.error({
          title: 'Error',
          message: 'Something went wrong. Please try again later.',
          position: 'topRight',
        });
      })
      .finally(() => {
        hideLoader();
      });
  });
});
