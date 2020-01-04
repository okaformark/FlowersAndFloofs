import React from 'react';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Home from '../Components/Home/Home';
import NavBar from '../Components/NavBar/NavBar'
import Auth from '../Components/Auth/Auth';

import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../DataRequests/fbConnection';
import './App.scss';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props}/>)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />)
  );
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props}/>)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />)
  );
  return <Route {...rest} render={props => routeChecker(props)} />;
};


// import Shop from '../Components/Shop/Shop';
const cart = [];
let tempCart = {};
const tempUnitPrice = [];
const tempPrice = [];


export class App extends React.Component{
  state = {
    myCart:[],
    price:[],
    unitPrice: [],
    authed: false
  }

  //Start of standard firebase auth
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

  //End of standard FB auth


    deleteItem = (id) =>{
      this.setState({myCart: this.state.myCart.filter(item => item.id !== id)})
    }

    getCartLength = ()=> {
        const cartLen = this.state.myCart.length;
        return cartLen;
      }

      getPrice = (price,unitPrice) =>{
        tempPrice.push(price);
        tempUnitPrice.push(unitPrice);
        this.setState({price:tempPrice, unitPrice:tempUnitPrice}, 
        ()=>{console.error(this.state.unitPrice, this.state.price,"kkkkkk")})
      } 

      addQuantityToCart = (cartWithQuantity) => { 
             tempCart = cartWithQuantity;
            return tempCart;
        }

    handleAddToCart= () => {
        const newCart = this.addQuantityToCart(tempCart);
        if(Object.entries(newCart).length === 0){
            alert("Enter Quantity");
        }
        else{
            cart.push(newCart);
        // returns products already in the cart different from the one the user adds to cart
        const uniqueObjects = [...new Map(cart.map(item => [item.id, item])).values()]

        //if there are  matching products that exists
         if(cart.length > 0 && uniqueObjects.length > 0){
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
    const myPrice = this.state.price;
    const myUnitPrice = this.state.unitPrice;
    return (
      <div className="App">
                <BrowserRouter>
          <React.Fragment>
            {/* <NavBar authed={authed} /> */}
            <div className="container-fluid">
            <div className="row">
                <Switch>
                  <PublicRoute path="/auth" component={Auth} authed={authed} />
                  <PrivateRoute path="/home" component={Home} authed={authed} />
                  <Redirect from="*" to="/auth" />
                </Switch>
              </div>
              </div>
          </React.Fragment>
        </BrowserRouter>
        <NavBar cart={len}  
                myCart={this.state.myCart} 
                price={myPrice} 
                unitPrice={myUnitPrice}
                deleteItem={this.deleteItem}
                />
        <Home handleAddToCart = {this.handleAddToCart} 
              addQuantityToCart={this.addQuantityToCart} 
              myCart={this.state.myCart} 
              getPrice={this.getPrice} />
      </div>
    );
  }
}

export default App;
