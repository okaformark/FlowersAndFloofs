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
    puppy:[]
  }

  componentDidMount() {
    productRequest.getSingleProduct(this.props.flowerId).then(data => {
      this.setState({flower: data})
    })
    productRequest.getSingleProduct(this.props.puppyId).then(data => {
      this.setState({puppy: data})
     //return <div>Puppy: {this.state.flower.title}</div>;
    })

  }

  calcBundlePrice = () => {
    const {flower, puppy} = this.state;
    const totalPrice = flower.price + puppy.price;
    return totalPrice.toFixed(2);
  }

  render() {
    const {
      flower,
      puppy
    } = this.state;

    return (
      <div className="col-4">
        <Card body className="text-center">
          <CardHeader>{flower.title} {"&"} {puppy.title}</CardHeader>
          <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
          <CardText className="">{this.props.description}</CardText>
            <CardText>Price: {this.calcBundlePrice()}</CardText>
        </Card>
      </div>
    )
  }
}

export default SingleBundle;