import React from 'react';
import {
    Row,
    // Form, 
    // FormGroup, 
    // Label, 
    // Input, 
    // FormText, 
    Button,
} from 'reactstrap';

import billingAddressRequest from '../../DataRequests/billingAddressRequest';
import shippingAddressRequest from '../../DataRequests/shippingAddressRequest';
import SingleAddress from '../SingleAddress/SingleAddress';
import SingleCartProduct from '../SingleCartProduct/SingleCartProduct';
// import firebase from 'firebase/app';
import 'firebase/auth';

import './Checkout.scss';

const defaultBillingAddress = {
    customerId: 1,
    streetAddress: '',
    aptOrHouseNum: '',
    city: '',
    state: '',
    zipCode: '',
}

const defaultShippingAddress = {
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
        newShippingAddress: defaultShippingAddress,
    }

    componentDidMount() {
        billingAddressRequest.getUserBillingAddresses().then(data => {
            this.setState({ billingAddresses: data })
            console.error("all billing addresses: ", this.state.billingAddresses);
        });
        shippingAddressRequest.getUserShippingAddresses().then(data => {
            this.setState({ shippingAddresses: data })
            console.error("all shipping addresses: ", this.state.shippingAddresses);
        });
    }

    BAFormFieldStringState = (name, e) => {
        const tempBillingAddress = { ...this.state.newBillingAddress };
        tempBillingAddress[name] = e.target.value;
        this.setState({ newBillingAddress: tempBillingAddress });
    }

    SAFormFieldStringState = (name, e) => {
        const tempShippingAddress = { ...this.state.newShippingAddress };
        tempShippingAddress[name] = e.target.value;
        this.setState({ newShippingAddress: tempShippingAddress });
    }

    BAStreetAddressChange = e => this.BAFormFieldStringState('streetAddress', e);

    BAAptOrHouseNumChange = e => this.BAFormFieldStringState('aptOrHouseNum', e);

    BACityChange = e => this.BAFormFieldStringState('city', e);

    BAStateChange = e => this.BAFormFieldStringState('state', e);

    BAZipCodeChange = e => this.BAFormFieldStringState('zipCode', e);

    SAStreetAddressChange = e => this.SAFormFieldStringState('streetAddress', e);

    SAAptOrHouseNumChange = e => this.SAFormFieldStringState('aptOrHouseNum', e);

    SACityChange = e => this.SAFormFieldStringState('city', e);

    SAStateChange = e => this.SAFormFieldStringState('state', e);

    SAZipCodeChange = e => this.SAFormFieldStringState('zipCode', e);

    addBillingAddressClickEvent = (e) => {
        e.preventDefault();
        const saveMe = { ...this.state.newBillingAddress };
        saveMe.customerId = 1;
        billingAddressRequest.addNewUserBillingAddress(saveMe)
        .then(() => console.error('address added!'))
        .catch(err => console.error('unable to save', err));
    }

    addShippingAddressClickEvent = (e) => {
        e.preventDefault();
        const saveMe = { ...this.state.newShippingAddress };
        saveMe.customerId = 1;
        shippingAddressRequest.addNewUserShippingAddress(saveMe)
        .then(() => console.error('address added!'))
        .catch(err => console.error('unable to save', err));
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

    render() {
        const { newBillingAddress, newShippingAddress } = this.state;
        const makeShippingAddressCards = (this.state.shippingAddresses.length > 0 ? this.makeShippingAddresses(this.state.shippingAddresses) :
            console.error('no shipping addresses found'));

        const makeBillingAddressCards = (this.state.billingAddresses.length > 0 ? this.makeBillingAddresses(this.state.billingAddresses) :
            console.error('no billing addresses found'));

        const makeCart = this.props.myCart.map((product, index) =>(
            <SingleCartProduct product={product} 
                                key={product.id} 
                                price={product.price} 
                                unitPrice={product.unitPrice}
                                deleteItem={this.props.deleteItem}
                                />
        ))
        
        return (
            <div className="billingAndShippingAddressSelection">
                <div className="row d-flex justify-content-between">
                <div className="col-6">
                <div className="addBillingAddress">
                    <div id="billingAddressForm">
                        <h2 className="text-center">Payment and Shipping Information</h2>
                        <h3 className="text-left">Billing Address</h3>
                        <h6 className="text-left">Select existing billing address:</h6>
                            <Row className="d-flex justify-content-around">
                                {makeBillingAddressCards}
                            </Row>
                        <h6 className="text-left newAddressSectionLabel">Add new billing address to address book:</h6>
                        <form className="form-horizontal">
                            <div className="d-flex flex-row">
                                <div className="form-group d-flex flex-row">
                                    <label htmlFor="inputBAStreetAddress" className="col-sm-4 control-label addressInputLabel">
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
                                </div>
                                <div className="form-group d-flex flex-row">
                                    <label htmlFor="inputBAAptOrHouseNum" className="col-sm-4 control-label addressInputLabel">
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
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="form-group d-flex flex-row">
                                    <label htmlFor="inputBACity" className="col-sm-4 control-label addressInputLabel">
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
                                <div className="form-group d-flex flex-row">
                                    <label htmlFor="inputBAState" className="col-sm-4 control-label addressInputLabel">
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
                                <div className="form-group d-flex flex-row">
                                    <label htmlFor="inputBAZipCode" className="col-sm-4 control-label addressInputLabel">
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
                                <div className="form-group d-flex flex-row">
                                    <div className="col-sm-12">
                                        <Button
                                            type="submit"
                                            className="btn btn-default col-xs-12 addNewAddressButton"
                                            onClick={this.addBillingAddressClickEvent}
                                            >
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <hr></hr>
                        <h3 className="text-left">Shipping Address:</h3>
                        <h6 className="text-left">Select existing shipping address:</h6>
                        <Row className="d-flex justify-content-around">
                            {makeShippingAddressCards}
                        </Row>
                        <h6 className="text-left newAddressSectionLabel">Add new shipping address to address book:</h6>
                        <form className="form-horizontal">
                            <div className="d-flex flex-row">
                                <div className="form-group d-flex flex-row">
                                    <label htmlFor="inputSAStreetAddress" className="col-sm-4 control-label addressInputLabel">
                                        Street Address:
                                </label>
                                    <div className="col-sm-8">
                                        <input
                                            type="name"
                                            className="form-control"
                                            id="inputSAStreetAddress"
                                            placeholder="42 Pike Place"
                                            value={newShippingAddress.streetAddress}
                                            onChange={this.SAStreetAddressChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group d-flex flex-row">
                                    <label htmlFor="inputSAAptOrHouseNum" className="col-sm-4 control-label addressInputLabel">
                                        Apartment or House Number:
                                </label>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputSAAptOrHouseNum"
                                            placeholder="Unit 5A"
                                            value={newShippingAddress.aptOrHouseNum}
                                            onChange={this.SAAptOrHouseNumChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-row">
                                <div className="form-group d-flex flex-row">
                                    <label htmlFor="inputSACity" className="col-sm-4 control-label addressInputLabel">
                                        City:
                                    </label>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputSACity"
                                            placeholder="Nashville"
                                            value={newShippingAddress.city}
                                            onChange={this.SACityChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group d-flex flex-row">
                                    <label htmlFor="inputSAState" className="col-sm-4 control-label addressInputLabel">
                                        State:
                                    </label>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputSAState"
                                            placeholder="GA"
                                            value={newShippingAddress.state}
                                            onChange={this.SAStateChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group d-flex flex-row">
                                    <label htmlFor="inputSAZipCode" className="col-sm-4 control-label addressInputLabel">
                                        Zip Code:
                                    </label>
                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputSAZipCode"
                                            placeholder="30643"
                                            value={newShippingAddress.zipCode}
                                            onChange={this.SAZipCodeChange}
                                        />
                                    </div>
                                </div>
                                <div className="form-group d-flex flex-row">
                                    <div className="col-sm-12">
                                        <Button
                                            type="submit"
                                            className="btn btn-default col-xs-12 addNewAddressButton"
                                            onClick={this.addShippingAddressClickEvent}
                                            >
                                            Save
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
                <div className="col-6">
                    <h1>Your summary</h1>
                    <div className="row">
                        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="border-0 bg-light">
                                            <div className="p-2 px-3 text-uppercase">Product</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Unit Price</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Quantity</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Total Price</div>
                                            </th>
                                            <th scope="col" className="border-0 bg-light">
                                                <div className="py-2 text-uppercase">Remove</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    {makeCart}
                                </table>
                            </div>
                            <button 
                                type="submit" 
                                className="checkout">
                                    Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Checkout;