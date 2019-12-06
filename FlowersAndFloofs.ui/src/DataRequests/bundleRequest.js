import axios from 'axios';

const baseUrl = 'https://localhost:44381/api/bundle';

const getAllBundles= () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

export default {getAllBundles};