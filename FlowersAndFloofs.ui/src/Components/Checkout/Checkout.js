import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

import billingAddressRequest from '../../DataRequests/billingAddressRequest';
import shippingAddressRequest from '../../DataRequests/shippingAddressRequest';
import SingleAddress from '../SingleAddress/SingleAddress';

class Checkout extends React.Component {
    state = {
        billingAddresses: [],
        shippingAddresses: [],
    }

    componentDidMount(){
        billingAddressRequest.getAllBillingAddresses().then(data => {
            this.setState({allBillingAddresses: data})
            console.error("all billing addresses: ", this.state.allBillingAddresses);
        });
        shippingAddressRequest.getAllShippingAddresses().then(data => {
            this.setState({allShippingAddresses: data})
            console.error("all shipping addresses: ", this.state.allShippingAddresses);
        });
    }

    makeShippingAddresses = (results) => {
        return results.map(address => (
            <SingleAddress 
                key={address.id}
                streetAddress={address.streetAddress}
                aptOrHouseNum={address.aptOrHouseNum}
                city={address.city}
                state={address.state}
                zipCode={address.zipCode}
            />
        ));
    }

    makeBillingAddresses = (results) => {
        return results.map(address => (
            <SingleAddress 
                key={address.id}
                streetAddress={address.streetAddress}
                aptOrHouseNum={address.aptOrHouseNum}
                city={address.city}
                state={address.state}
                zipCode={address.zipCode}
            />
        ));
    }

    render(){
        const makeShippingAddressCards = (this.state.shippingAddresses.length > 0 ? this.makeshippingAddresses(this.state.shippingAddresses) :
            console.error('no shipping addresses found'));

        return (
            <React.Fragment>
                <Row>
                    <h3>Shipping Addresses:</h3>
                    {makeShippingAddressCards}
                </Row>
                <div>"This is for billing addresses"</div>
            </React.Fragment>
        )
    }
}

export default Checkout;