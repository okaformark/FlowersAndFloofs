import axios from 'axios';

import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

const baseUrl = 'http://localhost:50662/api';

// interceptors work by changing the outbound request before the xhr is sent 
// or by changing the response before it's returned to our .then() method.
axios.interceptors.request.use(function (request) {
  const token = sessionStorage.getItem('token');

  if (token != null) {
      request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
}, function (err) {
  return Promise.reject(err);
});

const registerUser = (user) => {

  //sub out whatever auth method firebase provides that you want to use.
  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(cred => {
    //get email from firebase
    let userInfo = {email: cred.user.email};
    //get token from firebase
    cred.user.getIdToken()
      //save the token to the session storage
      .then(token => sessionStorage.setItem('token',token))
      //save the user to the the api
      .then(() => axios.post(`${baseUrl}/users`,userInfo));
  });
};

const loginUser = (user) => {
  //sub out whatever auth method firebase provides that you want to use.
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(cred => {
    //get token from firebase
    cred.user.getIdToken()
        //save the token to the session storage
      .then(token => sessionStorage.setItem('token',token));
  });
};

const logoutUser = () => {
  return firebase.auth().signOut();
};

const getEmail = () => {
  return firebase.auth().currentUser.email;
};

export default {getEmail, loginUser, logoutUser, registerUser};


// class Auth extends React.Component {
//   loginClickEvent = (e) => {
//     e.preventDefault();
//     const provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider);
//   };

//   render() {
//     return (
//       <div className="Auth">
//         <button className="btn btn-warning" onClick={this.loginClickEvent}>Login with Google</button>
//       </div>
//     );
//   }
// }

// export default Auth;