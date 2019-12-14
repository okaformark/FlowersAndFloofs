import React from 'react';
import NavBar from '../NavBar/NavBar';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';

const cart = [];
let tempCart = {};
class Home extends React.Component {

state = {
    myCart:[]
  }


    getCartLength = ()=> {
        const cartLen = this.state.myCart[0].length;
        return cartLen;
      }

      addQuantityToCart = (cartWithQuantity) => { 
             tempCart = cartWithQuantity;
            return tempCart;
        }
    
    handleAddToCart= () => {
        const newCart = this.addQuantityToCart(tempCart);
        if(Object.keys(newCart).length ==0){
            alert("enter quantity")
        }
        else{
            cart.push(newCart);
            
        // returns products already in the cart different from the one the user adds to cart
        const uniqueObjects = [...new Map(cart.map(item => [item.id, item])).values()]

        //if there are  matching products that exists
         if(cart.length > 0 && uniqueObjects.length > 0){
           this.setState({ myCart: [...uniqueObjects]}, () =>{
               console.error(this.state.myCart);
           this.getCartLength()
    
           })
        }
    }
    };

    render (){
        const { length } = this.state.myCart;
        return (
            <div className="Home">
                <NavBar cartSize ={length}/>
                <header className="App-header">
                    <Shop handleAddToCart = {this.handleAddToCart} addQuantityToCart={this.addQuantityToCart}/>
                </header>
                <Cart cart={this.state.myCart}/>
            </div>
        )
    }
}

export default Home;
