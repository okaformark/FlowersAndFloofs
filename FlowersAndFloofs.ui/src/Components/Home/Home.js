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
             console.error(tempCart,"ooooooo")
            return tempCart;
        }
    
    handleAddToCart= () => {
        //const newCart = Object.assign({quantity:0}, bundle);
        const newCart = this.addQuantityToCart(tempCart);
        console.error(newCart,"iiiii");
        if(Object.entries(newCart).length === 0){
            console.error("ppppp");
            alert("Enter Quantity");
        }
        else{
            cart.push(newCart);

        // returns product already in the cart that matches the one the users clicks on 
        //const existingCart = cart.filter(product => product.id === bundle.id);
    
        
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
