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


const cart = [];
let tempCart = {};
let tempUnitPrice = [];
let tempPrice = [];

class App extends React.Component {
  state = {
    cart: [],
    authed: false,
    customerObj: {
      name: ''
    },
    myCart:[],
    price:[],
    unitPrice: []
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

  clearCart = () => {
    this.setState({myCart: []}, ()=> {
      this.setState({isClicked:!this.state.isClicked})
    })
    return this.state.isClicked;
  }

    deleteItem = (id) =>{
      const deleteCart = [...this.state.myCart]
      const filterCart = deleteCart.filter(item => item.id !== id)
      console.log(filterCart,"lol");
      cart.push(filterCart);
      this.setState({myCart: filterCart}, ()=> {
        cart.length=0;
        tempPrice.length=0;
        tempUnitPrice.length=0;
      })
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

  deleteItem = (id,index) =>{
    const deleteCart = [...this.state.myCart]
    const filterCart = deleteCart.filter(item => item.id !== id)
    // const filterUnitPrice = this.state.unitPrice.filter(price => price[index] !== id-1)
    console.log(filterCart,"lol");
    // cart.push(filterCart);
    this.setState({myCart: filterCart}, ()=> {
      cart.length=0;
      //tempPrice.length=0;
      //tempUnitPrice.length=0;
    })
  }
  // deleteItem = (id, e) =>{
  //  // e.preventDefault();
  //   // let {tempCart} = this.state;
  //   tempCart = this.state.myCart.filter(item => item.id !== id);
  //   // cart = tempCart;

  //   this.setState({myCart: tempCart, cart: tempCart});
  // }

  getCartLength = ()=> {
      const cartLen = this.state.myCart.length;
      console.error('cart length', cartLen);
      return cartLen;
    }

      getPrice = (price,unitPrice, id) =>{
        tempPrice.push(price);
        tempUnitPrice.push(unitPrice);
        // this.setState({price:tempPrice, unitPrice:tempUnitPrice}, 
        // ()=>{console.error(this.state.unitPrice, this.state.price, id,"kkkkkk")})
        tempCart.unitPrice = unitPrice;
        tempCart.price = price;
      } 

    addQuantityToCart = (cartWithQuantity) => { 
          tempCart = cartWithQuantity;
          console.log(tempCart,"pop")
          return tempCart;
      }

    handleAddToCart= (id) => {
        //const newCart = this.addQuantityToCart(tempCart);
        
        const newCart = tempCart;
          
          if(Object.entries(newCart).length === 0){
              alert("Enter Quantity");
          }
          else {
              cart.push(newCart);
              console.log(cart,"cart")
          // returns products already in the cart different from the one the user adds to cart
          const uniqueObjects = [...new Map(cart.map(item => [item.id, item])).values()]
            console.log(uniqueObjects,"unique")
          //if there are  matching products that exists
          if(uniqueObjects.length > 0){
            this.setState({ myCart: [...uniqueObjects]}, () =>{
                console.error(this.state.myCart);
            this.getCartLength();
            })
          }
      }
    };
  
  render(){
    const { authed } = this.state;
    const len = this.state.myCart.length;
    // const myPrice = this.state.price;
    // const myUnitPrice = this.state.unitPrice;

    const myPrice = this.state.myCart.price;
    const myUnitPrice = this.state.myCart.unitPrice;
    return (
      <div className="App">
        <BrowserRouter>
        <NavBar authed={authed} 
                cart={len}  
                myCart={this.state.myCart} 
                price={myPrice} 
                unitPrice={myUnitPrice}
                deleteItem={this.deleteItem}
                clearCart={this.clearCart}
                />
          <React.Fragment>
            <div className="container">
              <Switch>
                <PublicRoute path='/auth' component={Auth} authed={authed} />
                {/* <Route path='/new-customer' component={NewCustomer} authed={authed} createCustomer={ this.createCustomer }/> */}
                <Route path='/landing-page' component={LandingPage} authed={authed} />
                <PrivateRoute path="/home" component={Home}
                authed={authed}
                handleAddToCart = {this.handleAddToCart} 
                addQuantityToCart={this.addQuantityToCart} 
                myCart={this.state.myCart} 
                getPrice={this.getPrice} />
                <PrivateRoute path='/my-account' component={MyAccount} authed={authed} />
                <PrivateRoute path='/orders' component={MyOrders} authed={authed} />
                <PrivateRoute path='/shop' component={Shop} authed={authed} />
                <PrivateRoute path='/checkout' component={Checkout} authed={authed} />
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