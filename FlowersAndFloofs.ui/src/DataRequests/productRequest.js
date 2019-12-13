import axios from 'axios';

const baseUrl = 'https://localhost:44381/api/products';

const getSingleProduct= productId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/${productId}`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

const getAllProducts= () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

export default {getSingleProduct, getAllProducts};