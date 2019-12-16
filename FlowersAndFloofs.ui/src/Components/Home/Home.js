import React from 'react';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';

class Home extends React.Component {
    render (){
        return (
            <div className="Home">
                <header className="App-header">
                    <Shop handleAddToCart = {this.props.handleAddToCart} addQuantityToCart={this.props.addQuantityToCart}/>
                </header>
                {/* <Cart cart={this.props.myCart} /> */}
            </div>
        )
    }
}

export default Home;
