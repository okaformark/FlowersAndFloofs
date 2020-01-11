import React from 'react';
import { Container, Row, Col, ButtonGroup, Button, Input } from 'reactstrap';

import productRequest from '../../DataRequests/productRequest';
import bundleRequest from '../../DataRequests/bundleRequest';
import SingleBundle from '../SingleBundle/SingleBundle';
import SearchBarIcon from '../NavBar/Icons/SearchBarIcon';
import occasionRequest from '../../DataRequests/occasionRequest';

import './Shop.scss';


// const style = {
//   display:'flex'
//   };

class Shop extends React.Component {
  state = {
    bundles: [],
    filteredBundles: [],
    occasions: [],
  }

  componentDidMount() {
    bundleRequest.getAllBundles().then(data => {
      let allBundles = [...data];
      this.setState({ bundles: allBundles });
    });
    productRequest.getAllProducts().then(data => {
      this.setState({ allProducts: data })
      // console.error("all products: ", this.state.allProducts);
    })
    this.getBundles();
    occasionRequest.getAllOccasions().then(data => {
      let allOccasions = [...data];
      this.setState({ occasions: allOccasions });
    });
  }

  getBundles = () => {
    bundleRequest.getAllBundles()
      .then(bundles => this.setState({ bundles, filteredBundles: bundles }))
      .catch(err => console.error('no bundles for you', err))
  }

  filterBundlesByCategory = (e) => {
    e.preventDefault();
    const buttonCategory = e.target.id;
    const { bundles } = this.state;
    this.setState({ filteredBundles: bundles });
    const filteredResults = this.state.bundles.filter(bundle => bundle.occasionId === buttonCategory);
    this.setState({ filteredBundles: filteredResults });
  }

  makeBundles = (results) => {
    return results.map(bundle => (
      <SingleBundle
        key={bundle.id}
        flowerId={bundle.flowerId}
        puppyId={bundle.puppyId}
        occasionId={bundle.occasionId}
        description={bundle.description}
        image={bundle.productImageUrl}
        bundleId={bundle.id}
        bundle={bundle}
        handleAddToCart={this.props.handleAddToCart}
        addQuantityToCart={this.props.addQuantityToCart}
        getPrice={this.props.getPrice}
      />
    ));
  }

  searchInput = (e) => {
    e.preventDefault();
    let resultBundles = [];
    const bundles = this.state.bundles;
    const searchTerm = e.target.value.toLowerCase();
    bundles.forEach(product => {
      const desc = product.description.toLowerCase();
      if (desc.includes(searchTerm) && searchTerm !== "") {
        resultBundles.push(product);
      }
      this.setState({ filteredBundles: resultBundles });
      this.makeBundles(this.state.filteredBundles);
    });
  }

  render() {
    const makeCards = (this.state.filteredBundles.length > 0 ? this.makeBundles(this.state.filteredBundles) :
      this.makeBundles(this.state.bundles));

    const makeOccasions = this.state.occasions.map(occasion => (
      <Button
        key={occasion.id}
        id={occasion.id}
        className="occasionCategoryButton"
        onClick={this.filterBundlesByCategory}
      >
        {occasion.name}
      </Button>
    ))
    const customer = this.props.currentCustomer;
    const personal = this.props.customerPersonalData;

    return (
      <Container>
        <Row>
          <Col xs="12" s="12" m="3" lg="3" align="center" id="searchAndCategoryContainer">
            <form className="form-inline my-2 my-lg-0" id="searchIconAndInput">
              <SearchBarIcon /><Input id="shopSearchInput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.searchInput} />
            </form>
            <Row>
              <Col xs="3" id="shopProductCategoriesContainer">
                <ButtonGroup vertical id="categoryBtnContainer">
                  {makeOccasions}
                  <Button id="showAllBtn" onClick={this.getBundles}>Show All</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </Col>
          <Col xs="12" sm="12" m="9" lg="9">
            <h1>Shop</h1>
            <Row>
              {makeCards}
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Shop;

