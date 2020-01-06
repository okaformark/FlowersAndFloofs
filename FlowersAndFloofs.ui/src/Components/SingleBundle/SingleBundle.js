import React from 'react';

import './SingleBundle.scss';

import productRequest from '../../DataRequests/productRequest';

import {
  Card,
  CardText,
  CardHeader,
  CardImg,
  Button,
} from 'reactstrap';


class SingleBundle extends React.Component {
  state = {
    flower: [],
    puppy:[],
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


  getQuantity=(e)=>{
    const flowerTitle = this.state.flower.title;
    const puppyTitle = this.state.puppy.title;
    const { bundle } = this.props;
   // e.preventDefault();
    const newCart = Object.assign({quantity:0}, bundle, {flowerTitle},{ puppyTitle})
    newCart.quantity = e.target.value;
    const unitPrice = this.calcBundlePrice();
    const price = unitPrice* e.target.value;
    const fixedPrice = price.toFixed(2);
    console.error("price from single bundle", fixedPrice, unitPrice);
    this.props.addQuantityToCart(newCart);
    this.props.getPrice(fixedPrice,unitPrice)
  }
  render() {
    const {
      flower,
      puppy
    } = this.state;
    const { bundle } = this.props;

    return (
      <div className="col-4">
        <Card body className="text-center">
          <CardHeader>{flower.title} {"&"} {puppy.title}</CardHeader>
          <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
          <CardText className="">{this.props.description}</CardText>
          <CardText>Price: {this.calcBundlePrice()}</CardText>
            <select className="custom-select custom-select-sm" onChange={this.getQuantity}>
            {/* <option defaultValue={'Quantity'}>Quantity</option> */}
            <option defaultValue="1">1</option>
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
        </Card>
        <Button type="button" className="btn btn-danger btn-sm " onClick={this.props.handleAddToCart.bind(this, bundle)} >Add to Cart
        </Button>
       
      </div>
    )
  }
}

export default SingleBundle;