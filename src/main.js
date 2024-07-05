import { fetchImages } from './js/pixabay-api.js';
import {
  clearGallery,
  renderImages,
  showNoResultsMessage,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#search-form');

  form.addEventListener('submit', async event => {
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

    try {
      const images = await fetchImages(query);
      if (images.length === 0) {
        showNoResultsMessage();
      } else {
        renderImages(images);
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    } finally {
      hideLoader();
    }
  });
});
