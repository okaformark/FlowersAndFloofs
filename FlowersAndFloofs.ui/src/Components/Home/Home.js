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

        // returns product already in the cart that matches the one the users clicks on 
        //const existingCart = cart.filter(product => product.id === bundle.id);
    
        
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

    sendCartLength = () => {
        const yee =this.props.getCartLen(this.getCartLength());
        return yee
    }

    render (){
        return (
            <div className="Home">
                {/* <NavBar cartSize ={length}/> */}
                {this.sendCartLength()}
                <header className="App-header">
                    <Shop handleAddToCart = {this.handleAddToCart} addQuantityToCart={this.addQuantityToCart}/>
                </header>
                <Cart cart={this.state.myCart}/>
            </div>
        )
    }
}

export default Home;
