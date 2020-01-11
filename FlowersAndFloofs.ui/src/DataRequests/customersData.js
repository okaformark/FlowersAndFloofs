import axios from 'axios';
import apiKeys from '../Helpers/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;
const databaseUrl = 'http://localhost:50662/api';

const getCustomers = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/customers.json`)
    .then((resp) => {
      const customerResults = resp.data.PromiseValue;
      const customers = [];
      Object.keys(customerResults).forEach((uid) => {
        customers.push(customerResults[uid]);
      });
      resolve(customers);
    })
    .catch(err => reject(err));
});

// const getCustomerInfoByEmail = customerEmail => axios.get(`${databaseUrl}/customerPersonal/email/${customerEmail}`);

const getCustomerInfoByEmail = customerEmail => new Promise((resolve, reject) => {
  axios.get(`${databaseUrl}/customerPersonal/email/${customerEmail}`)
  .then((resp) => {
    const customerPersonal = resp.data;
    let customer = {};
    customer = resp.data;
    console.error('resp data', resp.data);
    resolve(customer);
  //   customer.push(customerPersonal);
  //   resolve(customer);
  })
    .catch((error) => {
      reject(error);
    });
});

// const getCustomerInfoByEmail = customerEmail => new Promise((resolve, reject) => {
//   axios.get(`${databaseUrl}/customerPersonal//email/${customerEmail}`)
//     .then((resp) => {
//       const customer = resp.data;
//       let cust = [];
//       // resolve (customer);
//       // if (Object.keys(customer).length > 0) {
//         Object.keys(customer).forEach((customersId) => {
//           cust[customersId].id = customersId;
//           resolve(customer[customersId]);
//         });
//       // }
//     })
//     .catch(err => reject(err));
// });

const addCustomerToDatabase = (customerObj) => axios.post(`${databaseUrl}/customers`, customerObj);
const addCustomerPersonalToDatabase = (customerPersonalObj) => axios.post(`${databaseUrl}/customerPersonal`, customerPersonalObj);

const deleteCustomerFromDatabase = customerId => axios.delete(`${firebaseUrl}/${customerId}.json`);

const editCustomersInfo = (customerId, customerObj) => axios.put(`${firebaseUrl}/customers/${customerId}.json`, customerObj);

export default {
  addCustomerToDatabase,
  getCustomers,
  getCustomerInfoByEmail,
  deleteCustomerFromDatabase,
  editCustomersInfo,
  addCustomerPersonalToDatabase
};