import React from 'react';

import bundleRequest from '../../DataRequests/bundleRequest';
import SingleBundle from '../SingleBundle/SingleBundle';
import occasionRequest from '../../DataRequests/occasionRequest';

import { ButtonGroup, Button } from 'reactstrap';

class Shop extends React.Component {
  state = {
    bundles: [],
    filteredBundles: [],
    occasions: [],
  }

  getBundles = () => {
    bundleRequest.getAllBundles()
    .then(bundles => this.setState({ bundles, filteredBundles: bundles }))
    .catch(err => console.error('no bundles for you', err))
  }

  filterBundlesByCategory = (e) => {
    e.preventDefault();
    const buttonCategory = e.target.id;
    const regex = new RegExp(buttonCategory, 'gi');
    const { bundles } = this.state;
    this.setState({ filteredBundles: bundles });
    const filteredResults = this.state.filteredBundles.filter(bundle => bundle.occasionId.match(regex));
    this.setState({ filteredBundles: filteredResults });
  }

  showAllBundles = (e) => {
    bundleRequest.getAllBundles()
      .then(bundles => this.setState({ bundles, filteredBundles: bundles }))
      .catch(err => console.error('unable to reset state', err));
  }

  componentDidMount(){
    this.getBundles();
    occasionRequest.getAllOccasions().then(data => {
      let allOccasions = [...data];
      this.setState({occasions: allOccasions});
    });
    console.error(this.state.occasions);
  }

  render() {
    const makeOccasions = this.state.occasions.map(occasion => (
      <Button
        key={occasion.id}
        id={occasion.id}
        className="occasionCategoryButton"
        onClick={this.filterByCategory}
      >
        {occasion.name}
      </Button>
    ))
    const makeBundles = this.state.filteredBundles.map(bundle => (
      <SingleBundle 
      key={bundle.id}
      flowerId={bundle.flowerId}
      puppyId={bundle.puppyId}
      occasionId={bundle.occasionId}
      description={bundle.description}
      image={bundle.productImageUrl}
      />
    ));
    const images = this.state.bundles.map(bundle => (
      console.error("bundle", bundle)
    ));
    return (
      <div className="container">
        <h1>Categories</h1>
        <div className = "row">
          <ButtonGroup>
            {makeOccasions}
            <Button id="showAllBtn" onClick={this.showAllBundles}>Show All</Button>
          </ButtonGroup>
        </div>
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