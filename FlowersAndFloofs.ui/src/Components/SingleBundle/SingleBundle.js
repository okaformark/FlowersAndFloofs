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
      console.error("flower: ",this.state.flower.id);
      console.error(this.state.flower.title);
    })
    productRequest.getSingleProduct(this.props.puppyId).then(data => {
      this.setState({puppy: data})
      console.error("puppy: ", this.state.puppy.id);
      console.error(this.state.puppy.title);
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

    const {image} = this.props;

    return (
      <div>
        <Card body className="text-center">
          <CardHeader>{flower.title} {"&"} {puppy.title}</CardHeader>
          <CardImg top width="100%" src="https://via.placeholder.com/300x200" alt="Card image cap" />
            <CardText>Price: {this.calcBundlePrice()}</CardText>
        </Card>
        
      </div>
    )
  }
}

export default SingleBundle;