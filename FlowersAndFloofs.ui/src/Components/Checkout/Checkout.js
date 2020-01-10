import React from 'react';
import {
    Row,
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

// import firebase from 'firebase/app';
import 'firebase/auth';

const defaultBillingAddress = {
    id: '',
    customerId: 1,
    streetAddress: '',
    aptOrHouseNum: '',
    city: '',
    state: '',
    zipCode: '',
}

class Checkout extends React.Component {
    state = {
        billingAddresses: [],
        shippingAddresses: [],
        newBillingAddress: defaultBillingAddress,
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

    formFieldStringState = (name, e) => {
        const tempBillingAddress = { ...this.state.newBillingAddress };
        tempBillingAddress[name] = e.target.value;
        this.setState({newBillingAddress: tempBillingAddress });
    }

    BAStreetAddressChange = e => this.formFieldStringState('streetAddress', e);

    BAAptOrHouseNumChange = e => this.formFieldStringState('aptOrHouseNum', e);

    BACityChange = e => this.formFieldStringState('city', e);

    BAStateChange = e => this.formFieldStringState('state', e);

    BAZipCodeChange = e => this.formFieldStringState('zipCode', e);

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

    render() {
        const { newBillingAddress } = this.state;
        // const billingAddressesLink = '/billingAddress';

        const makeShippingAddressCards = (this.state.shippingAddresses.length > 0 ? this.makeShippingAddresses(this.state.shippingAddresses) :
            console.error('no shipping addresses found'));

        const makeBillingAddressCards = (this.state.billingAddresses.length > 0 ? this.makeBillingAddresses(this.state.billingAddresses) :
            console.error('no billing addresses found'));

        return (
            <div className="billingAndShippingAddressSelection">
                <div className="addBillingAddress">
                    <div id="billingAddressForm">
                        <h1 className="text-center">Add New Billing Address</h1>
                        <form className="form-horizontal col-sm-6 col-sm-offset-3">
                            <div className="form-group">
                                <label htmlFor="inputBAStreetAddress" className="col-sm-4 control-label">
                                    Street Address:
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        type="name"
                                        className="form-control"
                                        id="inputBAStreetAddress"
                                        placeholder="42 Pike Place"
                                        value={newBillingAddress.streetAddress}
                                        onChange={this.BAStreetAddressChange}
                                    />
                                </div>
                                <label htmlFor="inputBAAptOrHouseNum" className="col-sm-4 control-label">
                                    Apartment or House Number:
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputBAAptOrHouseNum"
                                        placeholder="Unit 5A"
                                        value={newBillingAddress.aptOrHouseNum}
                                        onChange={this.BAAptOrHouseNumChange}
                                    />
                                </div>
                                <label htmlFor="inputBACity" className="col-sm-4 control-label">
                                    City:
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputBACity"
                                        placeholder="Nashville"
                                        value={newBillingAddress.city}
                                        onChange={this.BACityChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputBAState" className="col-sm-4 control-label">
                                    State:
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputBAState"
                                        placeholder="GA"
                                        value={newBillingAddress.state}
                                        onChange={this.BAStateChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputBAZipCode" className="col-sm-4 control-label">
                                    Zip Code:
                                </label>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputBAZipCode"
                                        placeholder="30643"
                                        value={newBillingAddress.zipCode}
                                        onChange={this.BAZipCodeChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-12">
                                    <button
                                        type="submit"
                                        className="btn btn-default col-xs-12"
                                        onClick={this.addBillingAddressClickEvent}
                                    >
                                    Add Billing Address
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Row>
                    <h3>Shipping Addresses:</h3>
                    {makeShippingAddressCards}
                </Row>
                <Row>
                    <h3>Billing Addresses:</h3>
                    {makeBillingAddressCards}
                </Row>
            </div>
        )
    }
}

export default Checkout;