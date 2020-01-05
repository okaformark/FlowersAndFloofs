import React from 'react';
import {
  Router,
  BrowserRouter,
  Route,
  Redirect,
  Switch,
}
  from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../DataRequests/fbConnection';

import Auth from '../Components/Auth/Auth';
import Home from '../Components/Home/Home';
import LandingPage from '../Components/LandingPage/LandingPage';
import NewCustomer from '../Components/NewCustomer/NewCustomer';
import MyAccount from '../Components/MyAccount/MyAccount';
import NavBar from '../Components/NavBar/NavBar';
import Shop from '../Components/Shop/Shop';
import Checkout from '../Components/Checkout/Checkout';
import MyOrders from '../Components/MyOrders/MyOrders';

// import customersData from '../helpers/data/customersData';

import './App.scss';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component authed={authed} {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component authed={authed} {...props} {...rest} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
    customerObj: {
      name: '',
    },
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  // getCustomer = () => {
  //   if (this.state.authed) {
  //     const firebaseId = firebase.auth().currentUser.uid;
  //     customersData.getCustomerInfoByCustomerId(firebaseId)
  //       .then(customerObj => this.setState({ customerObj }))
  //       .catch(err => console.error('trouble fetching user data', err));
  //   }
  // }

  // createUser = (saveMe) => {
  //   customersData.addCustomerToDatabase(saveMe)
  //     .then(() => {
  //       this.getCustomer();
  //     })
  //     .catch();
  // }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <NavBar authed={authed} />
            <div className="container">
              <Switch>
                <PublicRoute path='/auth' component={Auth} authed={authed} />
                {/* <Route path='/new-customer' component={NewCustomer} authed={authed} createCustomer={ this.createCustomer }/> */}
                <Route path='/landing-page' component={LandingPage} authed={authed} />
                <PrivateRoute path="/home" component={Home} authed={authed} />
                <PrivateRoute path='/my-account' component={MyAccount} authed={authed} />
                <PrivateRoute path='/orders' component={MyOrders} authed={authed} />
                <PrivateRoute path='/shop' component={Shop} authed={authed} />
                <Redirect from="*" to="/auth" />
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
