import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.headers.common['x-api-key'] =
  '7922977-f75c622a4e63e95df060b06c8';

export const searchImages = async (value, apiKey, page) => {
  const response = await axios.get(
    `/?q=${value}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};
