import React from 'react';
import { Row, 
    // Form, 
    // FormGroup, 
    // Label, 
    // Input, 
    // FormText, 
    // Button,
    } from 'reactstrap';

import billingAddressRequest from '../../DataRequests/billingAddressRequest';
import shippingAddressRequest from '../../DataRequests/shippingAddressRequest';
import SingleAddress from '../SingleAddress/SingleAddress';

class Checkout extends React.Component {
    state = {
        billingAddresses: [],
        shippingAddresses: [],
    }

    componentDidMount(){
        billingAddressRequest.getUserBillingAddresses().then(data => {
            this.setState({billingAddresses: data})
            console.error("all billing addresses: ", this.state.billingAddresses);
        });
        shippingAddressRequest.getUserShippingAddresses().then(data => {
            this.setState({shippingAddresses: data})
            console.error("all shipping addresses: ", this.state.shippingAddresses);
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
        const makeShippingAddressCards = (this.state.shippingAddresses.length > 0 ? this.makeShippingAddresses(this.state.shippingAddresses) :
            console.error('no shipping addresses found'));

        const makeBillingAddressCards = (this.state.billingAddresses.length > 0 ? this.makeBillingAddresses(this.state.billingAddresses) :
            console.error('no billing addresses found'));

        return (
            <React.Fragment>
                <Row>
                    <h3>Shipping Addresses:</h3>
                    {makeShippingAddressCards}
                </Row>
                <Row>
                    <h3>Billing Addresses:</h3>
                    {makeBillingAddressCards}
                </Row>
            </React.Fragment>
        )
    }
}

export default Checkout;