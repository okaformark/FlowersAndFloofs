import React from 'react';

import './SingleBundle.scss';

import productRequest from '../../DataRequests/productRequest';
import CartLength from '../../DataRequests/CartLength';

import {
  Card,
  CardText,
  CardHeader,
  CardImg,
  Button,
} from 'reactstrap';


const cart = [];
class SingleBundle extends React.Component {
  state = {
    flower: [],
    puppy:[],
    myCart:[]
  }

  componentDidMount() {
    productRequest.getSingleProduct(this.props.flowerId).then(data => {
      this.setState({flower: data})
    })
    productRequest.getSingleProduct(this.props.puppyId).then(data => {
      this.setState({puppy: data})
    })

  }

  calcBundlePrice = () => {
    const {flower, puppy} = this.state;
    const totalPrice = flower.price + puppy.price;
    return totalPrice.toFixed(2);
  }

  getProductImage = () => {

  }

  getCartLength = ()=> {
    const cartLen = this.state.myCart.length;
    //console.error(cartLen);
    return cartLen;
  }


  handleAddToCart= (e) => {
    e.preventDefault();
    const { bundleId, quantity } = this.props;
    const newCart = Object.assign({quantity:0}, this.props);
    cart.push(newCart);
    console.error("fiiiii",cart)
    // returns product already in the cart that matches the one the users clicks on 
    const existingCart = cart.filter(product => product.bundleId === bundleId);
    console.error("existing", existingCart);

    
    // returns products already in the cart different from the one the user adds to cart
    const uniqueObjects = [...new Map(cart.map(item => [item.bundleId, item])).values()]
    console.error("notexisting", uniqueObjects);

    //if there are  matching products that exists
    if(existingCart.length > 0 && uniqueObjects.length > 0){

      this.setState({ myCart: [...uniqueObjects]}, () =>{
      this.getCartLength()
      //console.log(this.state.myCart)
      })
    }
  };  



  render() {
    const {
      flower,
      puppy, myCart
    } = this.state;

    return (
      <div className="col-4">
        <Card body className="text-center">
          <CardHeader>{flower.title} {"&"} {puppy.title}</CardHeader>
          <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
          <CardText className="">{this.props.description}</CardText>
            <CardText>Price: {this.calcBundlePrice()}</CardText>
        </Card>
        <Button type="button" className="btn btn-danger btn-sm " onClick={this.handleAddToCart}>Add to Cart
        </Button>
        <select className="custom-select custom-select-sm">
          <option defaultValue={'Quantity'}>Quantity</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
        </select>
        <CartLength data={myCart.length}/>
      </div>
    )
  }
}

export default SingleBundle;