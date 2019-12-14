import React, { Component } from 'react'
import SingleCartProduct from '../SingleCartProduct/SingleCartProduct';

export class Cart extends Component {
    render() {
        return (
        <div>
            {this.props.cart.map(product => (
            <SingleCartProduct product={product} key={product.id}/>
        ))}
        </div>
        )
    }
}

export default Cart
