import React from 'react';
import Home from '../Components/Home/Home';
import NavBar from '../Components/NavBar/NavBar'
import './App.scss';

// import Shop from '../Components/Shop/Shop';
const cart = [];
let tempCart = {};
const tempUnitPrice = [];
const tempPrice = [];
export class App extends React.Component{
  state = {
    myCart:[],
    price:[],
    unitPrice: []
  }


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
            cart.push(tempCart);
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
    const myPrice = this.state.price;
    const myUnitPrice = this.state.unitPrice;
    return (
      <div className="App">
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