import React from 'react';

import './SingleBundle.scss';

import productRequest from '../../DataRequests/productRequest';

import {
  Card,
  CardText,
  CardHeader,
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

  // getFlower = (flowerId) => {
  //   productRequest.getSingleProduct(flowerId).then(data => {
  //     this.setState({flower: data})
  //     return <div>{this.state.flower.title}</div>;
  //   })
  // }

  // getPuppy = (puppyId) => {
  //   productRequest.getSingleProduct(puppyId).then(data => {
  //     this.setState({puppy: data})
  //    return <div>{this.state.flower.title}</div>;
  //   })
  // }

  render() {
    const {
      flower,
      puppy
    } = this.state;

    return (
      <div>
        <Card body className="text-center">
          <CardHeader><h4>Bundle</h4></CardHeader>
            <CardText>Flower: {flower.title}</CardText>
            <CardText>Puppy: {puppy.title}</CardText>
        </Card>
      </div>
    )
  }
}

export default SingleBundle;