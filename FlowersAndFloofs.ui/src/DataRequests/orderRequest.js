import axios from 'axios';

const baseUrl = 'https://localhost:44381/api/orders';

const getOrdersForCustomer= customerId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/${customerId}`).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

const getOrders = customerId => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/orders${customerId}`)
    .then((resp) => {
      const results = resp.data.PromiseValue;
      const orders = [];
      Object.keys(results).forEach((id) => {
        orders.push(results[id]);
      });
      resolve(orders);
    })
    .catch(err => reject(err));
});

// const getAllProducts= () => new Promise((resolve, reject) => {
//   axios.get(`${baseUrl}`).then((result) => {
//     resolve(result.data);
//   })
//     .catch((error) => {
//       reject(error);
//     });
// });

export default {getOrdersForCustomer, getOrders};