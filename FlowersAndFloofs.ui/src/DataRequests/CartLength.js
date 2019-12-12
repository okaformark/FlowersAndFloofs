import React from 'react'

class CartLength extends React.Component {

    componentDidMount(){
        console.error("propppp", this.props.cartQuant);
    }
    totalCartQuantity = () => {
        return 
    }
    render() {
     console.error("size", this.props.cartQuant);
        return (
            <div>
                <div>{this.props.cartQuant}</div>
                {/* {{console.error("leeeeen",this.props.cartQuant)}
                {this.totalCartQuantity()} */} 
            </div>
        )
    }
}

export default CartLength
