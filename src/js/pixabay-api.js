const API_KEY = '44792549-8b3a4a2cfb17648b3cdad98bf';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  const data = await response.json();
  return data.hits;
}
