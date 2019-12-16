import React from 'react';
import Home from '../Components/Home/Home';
import NavBar from '../Components/NavBar/NavBar'
import './App.scss';

// import Shop from '../Components/Shop/Shop';
const cart = [];
let tempCart = {};
export class App extends React.Component{

  // state = {
  //   cartLength: ''
  // }

  //  getLength = (size) => {
  //   const cartSize  = size
  //   console.log(cartSize)
  // }

  // sendLength = () =>{
  //   const data = this.getLength();
  //   this.setState({cartLength:data},()=>{
  //     console.error(this.state.cartLength,"88888")
  //   })
  // }
  state = {
    myCart:[]
  }


    getCartLength = ()=> {
        const cartLen = this.state.myCart.length;
        return cartLen;
      }

      addQuantityToCart = (cartWithQuantity) => { 
             tempCart = cartWithQuantity;
            return tempCart;
        }

    handleAddToCart= () => {
        //const newCart = Object.assign({quantity:0}, bundle);
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
    const len = this.state.myCart.length;
    return (
      <div className="App">
        <NavBar cart={len} />
        {/* <Home getCartLen = {this.getLength} /> */}
        <Home handleAddToCart = {this.handleAddToCart} addQuantityToCart={this.addQuantityToCart} myCart={this.state.myCart} />
      </div>
    );
  }
}

export default App;
