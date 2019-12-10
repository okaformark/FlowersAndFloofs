import React from 'react';

import productRequest from '../../DataRequests/productRequest';
import bundleRequest from '../../DataRequests/bundleRequest';
import SingleBundle from '../SingleBundle/SingleBundle';
import SearchBarIcon from '../NavBar/Icons/SearchBarIcon';
import {Input, Button} from 'reactstrap';


class Shop extends React.Component {
  state = {
    bundles: [],
    searchResults: [],
    singleSearchResult: {},
    filteredBundles: []
  }

  componentDidMount(){
    bundleRequest.getAllBundles().then(data => {
      let allBundles = [...data];
      this.setState({bundles: allBundles});
    });
    productRequest.getAllProducts().then(data => {
      this.setState({searchResults: data})
      console.error("all products: ",this.state.searchResults);
    })
  }

  showAllBundles(){
    const allBundles = [...this.state.bundles];
    return allBundles.map(value => <div><h2>Bundle: </h2>{value.id}</div>);
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
        const searchResults = this.state.searchResults;
        const searchTerm = e.target.value.toLowerCase();
        searchResults.forEach(result => {
            const title = result.title.toLowerCase();
            if (title.includes(searchTerm) && searchTerm !== "") {
              const matchedBundle = result.productTypeId = 1 ? this.state.bundles.filter(bundle => bundle.puppyId === result.id) :
              this.state.bundles.filter(bundle => bundle.flowerId === result.id)

              resultBundles.push(matchedBundle);
            }
          });
          console.error("result bundle", resultBundles);
          this.setState({filteredBundles: resultBundles});
         // this.makeBundles(this.state.filteredBundles);
        }

  render() {
    const notSearching = this.makeBundles(this.state.bundles);
    const searching = this.makeBundles(this.state.filteredBundles);
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
          {this.state.filteredBundles.length > 0 ? searching : notSearching}
        </div>

      </div>
    )
  }
}

export default Shop;