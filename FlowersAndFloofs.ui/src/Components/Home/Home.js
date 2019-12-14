import React from 'react';
import NavBar from '../NavBar/NavBar';
import Shop from '../Shop/Shop';
import { isNull } from 'util';
import { isEmptyStatement } from '@babel/types';

const cart = [];
const cartForQuantity = [];
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
            // cartForQuantity.push(cartWithQuantity);
            //  tempCart = this.state.myCart;
             tempCart = cartWithQuantity
             console.error(tempCart, "ppppp")
            //  this.setState({myCart: [...tempCart]}, () =>{
            //      console.error("yay", this.state.myCart)
            //   this.getCartLength()
            //  }); 
            return tempCart;
        }
    
    handleAddToCart= (bundle) => {
        //const newCart = Object.assign({quantity:0}, bundle);
        const newCart = this.addQuantityToCart(tempCart);
        console.log(newCart,"kkkkkkkkk")
        if(Object.keys(newCart).length ==0){
            alert("enter quantity")
        }
        else{
            cart.push(newCart);
        console.error("sds", cart)

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
                <NavBar cartSize ={length}  />
                <header className="App-header">
                    <Shop handleAddToCart = {this.handleAddToCart} addQuantityToCart={this.addQuantityToCart}/>
                </header>
            </div>
        )
    }
}

export default Home;
