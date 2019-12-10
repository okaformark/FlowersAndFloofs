import React from 'react';

import bundleRequest from '../../DataRequests/bundleRequest';
import SingleBundle from '../SingleBundle/SingleBundle';


class Shop extends React.Component {
  state = {
    bundles: [],
    cart: ""
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

    return allBundles.map(value => <div><h2>Bundle: </h2>{value.id}</div>);
  }

  getCartItemLength=(cartLen)=>{
    this.setState({ cart: cartLen});
  }

  render() {

    const makeBundles = this.state.bundles.map(bundle => (
      <SingleBundle 
      key={bundle.id}
      flowerId={bundle.flowerId}
      puppyId={bundle.puppyId}
      occasionId={bundle.occasionId}
      description={bundle.description}
      image={bundle.productImageUrl}
      bundleId={bundle.id}
      cartLength = {this.getCartItemLength}
      />
    ));
    const images = this.state.bundles.map(bundle => (
      console.error("bundle", bundle)
    ));
    return (
      <div className="container">
        <h1>Shop</h1>
        <div className="row">
        {makeBundles}
        {images}
        </div>

      </div>
    )
  }
}

export default Shop;