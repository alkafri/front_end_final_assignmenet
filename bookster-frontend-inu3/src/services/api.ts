import axios from 'axios';

export function getBooks() {
  return axios.get('/library/books');
}

export default {
  getBooks,
  // other API functions
};