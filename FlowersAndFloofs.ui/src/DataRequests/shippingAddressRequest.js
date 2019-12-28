import axios from 'axios';

const baseUrl = 'https://localhost:44381/api/shippingAddress';

const getAllShippingAddresses= () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

export default {getAllShippingAddresses};