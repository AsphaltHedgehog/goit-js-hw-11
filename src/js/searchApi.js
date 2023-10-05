import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios'
import { refs } from '../index.js'

// ================================================================


axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = "39837600-44ccebdf36efc250e3924832c";

// ================================================================
  // search async function
// ================================================================

export async function fetchSearch(query, page) {
  try {
    const params = {
      key: KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: "true",
      page: page,
      per_page: '40',
    };

    // =============================

    const response = await axios.get('', { params: params });
    if (response.data.hits.length === 0) {
      Notify.failure("Sorry, there are no images matching your search query. Please try again.");
      throw new Error;
    }
    return response;
  }
  catch (error) {
    throw error;
  }
}


// ++++++++++++++++++++++++++++