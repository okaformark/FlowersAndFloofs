import axios from 'axios';

const baseUrl = 'https://localhost:44381/api/shippingAddress';

const getUserShippingAddresses = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/shippingAddress.json?orderBy="customerId"&equalTo="1"`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

const addNewUserShippingAddress = newUserBillingAddressObj => axios.post(`${baseUrl}/billingAddress.json`, newUserBillingAddressObj);

export default {getUserShippingAddresses, addNewUserShippingAddress};