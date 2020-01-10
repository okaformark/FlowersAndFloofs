import axios from 'axios';

const baseUrl = 'https://localhost:44381/api/billingAddress';

const getUserBillingAddresses = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/billingAddress.json?orderBy="customerId"&equalTo="1"`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

const addNewUserBillingAddress = newUserBillingAddressObj => axios.post(`${baseUrl}/billingAddress.json`, newUserBillingAddressObj);

export default {getUserBillingAddresses, addNewUserBillingAddress};