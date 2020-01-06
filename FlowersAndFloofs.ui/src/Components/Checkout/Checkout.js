import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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

    makeAddresses = (results) => {
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

        return (
            <ReactFragment>
                <div>"This is for billing addresses"</div>
                <div>"This is for shipping addresses"</div>
            </ReactFragment>
        )
    }
}
