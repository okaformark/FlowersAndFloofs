import axios from 'axios';
import apiKeys from './apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getCustomers = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/customers.json`)
    .then((resp) => {
      const customerResults = resp.data;
      const customers = [];
      Object.keys(customerResults).forEach((uid) => {
        customers.push(customerResults[uid]);
      });
      resolve(customers);
    })
    .catch(err => reject(err));
});

const getCustomerInfoByCustomerId = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/customers.json?orderBy="uid"&equalTo="${uid}"`)
    .then((resp) => {
      const customer = resp.data;
      if (Object.keys(customer).length > 0) {
        Object.keys(customer).forEach((customersId) => {
          user[customersId].id = customersId;
          resolve(customer[customersId]);
        });
      }
    })
    .catch(err => reject(err));
});

const addCustomerToDatabase = customerObj => axios.post(`${firebaseUrl}/customers.json`, customerObj);

const deleteCustomerFromDatabase = customerId => axios.delete(`${firebaseUrl}/${customerId}.json`);

const editCustomersInfo = (customerId, customerObj) => axios.put(`${firebaseUrl}/customers/${customerId}.json`, customerObj);

export default {
  addCustomerToDatabase,
  getCustomers,
  getCustomerInfoByCustomerId,
  deleteCustomerFromDatabase,
  editCustomersInfo,
};