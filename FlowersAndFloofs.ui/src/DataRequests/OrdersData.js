import axios from 'axios';


const databaseURL = 'https://localhost:44381/api';

const getOrderById= id => new Promise((resolve, reject) => {
    axios.get(`${databaseURL}`).then((result) => {
      resolve(result.data);
    })
      .catch((error) => {
        reject(error);
      });
  });
  


const addToOrdersDatabase = (orderObj) => axios.post(`${databaseURL}/orders`, orderObj);

const addToOrderBundleDatabase = (orderBundleObj) => axios.post(`${databaseURL}/orderBundle`, orderBundleObj);

export default { addToOrdersDatabase, addToOrderBundleDatabase, getOrderById };