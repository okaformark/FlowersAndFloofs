import axios from 'axios';


const databaseURL = 'https://localhost:44381/api';

const getSingleOrderById= id => new Promise((resolve, reject) => {
    axios.get(`${databaseURL}/orders/singleOrder/${id}`)
    .then((result) => {
      let customer = {};
      customer = result.data;
      resolve(customer);
    })
      .catch((error) => {
        reject(error);
      });
  });
  


const addToOrdersDatabase = (orderObj) => axios.post(`${databaseURL}/orders`, orderObj);

const addToOrderBundleDatabase = (orderBundleObj) => axios.post(`${databaseURL}/orderBundle`, orderBundleObj);

export default { addToOrdersDatabase, addToOrderBundleDatabase, getSingleOrderById };