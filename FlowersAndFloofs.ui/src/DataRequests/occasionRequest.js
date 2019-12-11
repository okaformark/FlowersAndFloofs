import axios from 'axios';

const baseUrl = 'https://localhost:44381/api/occasion';

const getAllOccasions = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

export default {getAllOccasions};