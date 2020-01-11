import React from 'react';

import authRequests from '../Auth/Auth';
import customerData from '../../DataRequests/customersData';

class MyAccount extends React.Component {
    render() {
        const customer = this.props.getCurrentCustomer;
        console.error('current customer from account', customer);
        const personal = this.props.getCustomerPersonalData;
        console.error('personal from account', personal);
        return (
            <div>
                <h1>Account/Profile Page!</h1>
            </div>
        );
    }
}

export default MyAccount;