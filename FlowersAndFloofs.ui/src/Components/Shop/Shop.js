import React from 'react';

import {
  Card,
  CardText,
  CardHeader,
  Button,
} from 'reactstrap';

import bundleRequest from '../../DataRequests/bundleRequest';

class Shop extends React.Component {
  state = {
    bundles: []
  }

  componentDidMount(){
    bundleRequest.getAllBundles().then(data => {
      let allBundles = [...data];
      this.setState({bundles: allBundles});
    })
    console.error(this.state.bundles);

  }

  showAllBundles(){
    const allBundles = [...this.state.bundles];
    console.error(allBundles);

    return allBundles.map(value => <div>{value.Id}</div>);
  }


  render() {
    return (
      <div>
        <h1>Shop</h1>
        {this.showAllBundles()}
      </div>
    )
  }
}

export default Shop;