const API_KEY = '44792549-8b3a4a2cfb17648b3cdad98bf';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => data.hits);
}
