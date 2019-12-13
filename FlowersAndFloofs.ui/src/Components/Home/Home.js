import React from 'react';
import NavBar from '../NavBar/NavBar';
import Shop from '../Shop/Shop';
import productRequest from '../../DataRequests/productRequest'

const cart = [];
const cartForQuantity = [];
class Home extends React.Component {

state = {
    myCart:[]
  }


    getCartLength = ()=> {
        const cartLen = this.state.myCart.length;
        return cartLen;
      }

    
    handleAddToCart= (bundle) => {
        const newCart = Object.assign({quantity:0}, bundle);
        cart.push(newCart);

        // returns product already in the cart that matches the one the users clicks on 
        const existingCart = cart.filter(product => product.id === bundle.id);
    
        
        // returns products already in the cart different from the one the user adds to cart
        const uniqueObjects = [...new Map(cart.map(item => [item.id, item])).values()]

        //if there are  matching products that exists
         if(existingCart.length > 0 && uniqueObjects.length > 0){
           this.setState({ myCart: [...uniqueObjects]}, () =>{
           this.getCartLength()
    
           })
        }
       };  

       addQuantityToCart = (cartWithQuantity) => { 
           cartForQuantity.push(cartWithQuantity);
           if (this.state.myCart.length > 0)
           {
            this.setState({myCart: [...cartForQuantity]}, () =>{
             this.getCartLength()
            });   
           }
           else{
               alert("Add the item to your Cart First");
               cartWithQuantity.quantity=0;
           }
          
        }


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
