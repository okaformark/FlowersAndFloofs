import axios from 'axios';

const baseUrl = 'https://localhost:44381/api/shippingAddress';

const getUserShippingAddresses = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}?orderBy="customerId"&equalTo="1"`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

const addNewUserShippingAddress = newUserShippingAddressObj => axios.post(`${baseUrl}`, newUserShippingAddressObj);

export default {getUserShippingAddresses, addNewUserShippingAddress};