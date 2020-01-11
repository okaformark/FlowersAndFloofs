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

const getCustomerInfoByEmail = customerEmail => new Promise((resolve, reject) => {
  axios.get(`${databaseUrl}/customerPersonal/email/${customerEmail}`)
  .then((resp) => {
    let customer = {};
    customer = resp.data;
    console.error('resp data', resp.data);
    resolve(customer);
  })
    .catch((error) => {
      reject(error);
    });
});

const addCustomerToDatabase = (customerObj) => axios.post(`${databaseUrl}/customers`, customerObj);
const addCustomerPersonalToDatabase = (customerPersonalObj) => axios.post(`${databaseUrl}/customerPersonal`, customerPersonalObj);

const deleteCustomerPersonalFromDatabase = customerId => axios.delete(`${databaseUrl}/customerPersonal/${customerId}`);

const editCustomersInfo = (customerId, customerObj) => axios.put(`${firebaseUrl}/customers/${customerId}.json`, customerObj);

export default {
  addCustomerToDatabase,
  getCustomers,
  getCustomerInfoByEmail,
  deleteCustomerPersonalFromDatabase,
  editCustomersInfo,
  addCustomerPersonalToDatabase
};