import React from 'react';
import NavBar from '../NavBar/NavBar';
import Shop from '../Shop/Shop';
import productRequest from '../../DataRequests/productRequest'

const cart = [];
class Home extends React.Component {

state = {
    myCart:[]
  }


    getCartLength = ()=> {
        const cartLen = this.state.myCart.length;
        console.error("len",cartLen);
        return cartLen;
      }
    
    handleAddToCart= (bundle) => {
        console.log("mark", bundle);
        //const { bundleId } = this.state.myCart;
        const newCart = Object.assign({quantity:0}, bundle);
        //console.log("hii", newCart);
        cart.push(newCart);
        //console.log("cart",cart);
        // returns product already in the cart that matches the one the users clicks on 
        const existingCart = cart.filter(product => product.id === bundle.id);
        //console.error("existing", existingCart);
    
        
        // returns products already in the cart different from the one the user adds to cart
        const uniqueObjects = [...new Map(cart.map(item => [item.id, item])).values()]
        //console.error("cart", uniqueObjects);
    
        //if there are  matching products that exists
         if(existingCart.length > 0 && uniqueObjects.length > 0){
    
           this.setState({ myCart: [...uniqueObjects]}, () =>{
           this.getCartLength()
    
           })
        }
       };  
       
    render (){
        const { length } = this.state.myCart;
        return (
            <div className="Home">
                <NavBar cartSize ={length}  />
                <header className="App-header">
                    <Shop handleAddToCart = {this.handleAddToCart} />
                </header>
            </div>
        )
    }
}

export default Home;
