import axios from 'axios';

const baseUrl = 'https://localhost:44381/api/billingAddress';

const getUserBillingAddresses= customerId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/billingAddresses.json?orderBy="customerId"&equalTo="${customerId}"`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

export default {getUserBillingAddresses};