import React from 'react';

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

  // getFlower = () => {
  //   productRequest.getSingleProduct(this.props.flowerId).then(data => {
  //     this.setState({flower: data})
  //     return <div>Flower: {this.state.flower.title}</div>;
  //   })
  // }

  // getPuppy = () => {
  //   productRequest.getSingleProduct(this.props.puppyId).then(data => {
  //     this.setState({puppy: data})
  //    return <div>Puppy: {this.state.flower.title}</div>;
  //   })
  // }

  render() {
    const {
      id,
      flowerId,
      puppyId,
      occasionId
    } = this.props;

    return (
      <div>

      </div>
    )
  }
}

export default SingleBundle;