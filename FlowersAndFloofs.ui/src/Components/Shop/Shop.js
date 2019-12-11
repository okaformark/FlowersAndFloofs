import React from 'react';

import productRequest from '../../DataRequests/productRequest';
import bundleRequest from '../../DataRequests/bundleRequest';
import SingleBundle from '../SingleBundle/SingleBundle';
import SearchBarIcon from '../NavBar/Icons/SearchBarIcon';
import {Input, Button} from 'reactstrap';


class Shop extends React.Component {
  state = {
    bundles: [],
    filteredBundles: []
  }

  componentDidMount(){
    bundleRequest.getAllBundles().then(data => {
      let allBundles = [...data];
      this.setState({bundles: allBundles});
    });
    productRequest.getAllProducts().then(data => {
      this.setState({allProducts: data})
      console.error("all products: ",this.state.allProducts);
    })
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
            this.setState({filteredBundles: resultBundles});
            this.makeBundles(this.state.filteredBundles);
          });
        }

  render() {
    const makeCards = (this.state.filteredBundles.length > 0 ? this.makeBundles(this.state.filteredBundles) :
    this.makeBundles(this.state.bundles));
    return (
      <div className="container">
      <form className="form-inline my-2 my-lg-0" >
      {/* <Search /> */}
        <Input className="form-control mr-sm-2 ml-3" type="search" placeholder="Search" aria-label="Search" onChange={this.searchInput} />
      <Button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
          <SearchBarIcon /> Search
      </Button>
      </form>
        <h1>Shop</h1>
        <div className="row">
          {makeCards}
        </div>

      </div>
    )
  }
}

export default Shop;