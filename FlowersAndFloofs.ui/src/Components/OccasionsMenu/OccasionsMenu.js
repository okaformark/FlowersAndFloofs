import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import occasionRequest from '../../DataRequests/occasionRequest';

class OccasionsMenu extends React.Component {
    state = {
        occasions: []
    }

    componentDidMount(){
        occasionRequest.getAllOccasions().then(data => {
            let allOccasions = [...data];
            this.setState({occasions: allOccasions});
        })
        console.error(this.state.occasions)
    }

    showAllOccasions(){
        const allOccasions = [this.state.occasions];
        console.error(allOccasions);

        return allOccasions.map(value => <div><h2>Occasion: </h2>{value.Name}</div>)
    }

    render() {
        const makeOccasions = this.state.occasions.map(occasion => (
            <ListGroupItem 
                key={occasion.id}
                id={occasion.id}
                name={occasion.name}
            >
                {occasion.name}
            </ListGroupItem>
          ));
          return (
            <div className="container">
              <h1>Occasions</h1>
              <ListGroup>
                  {makeOccasions}
              </ListGroup>
            </div>
          )
    }
}

export default OccasionsMenu;