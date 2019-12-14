import axios from 'axios';

const baseUrl = 'http://localhost:50662/api/bundle';

const getSelectedBundle = bundleId => new promise((resolve,reject) => {
    axios.get(`${baseUrl}/${bundleId}`)
        .then((result) => {
            resolve(result.data);
        })
        .catch((error) => {
            reject(error);
        })
})

export default getSelectedBundle;

