import axios from 'axios';

const API_KEY = '7922977-f75c622a4e63e95df060b06c8';
const BASE_URL = 'https://pixabay.com/api/';

export const searchImages = async (value, page) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: value,
        page: page,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images from the server.');
  }
};
