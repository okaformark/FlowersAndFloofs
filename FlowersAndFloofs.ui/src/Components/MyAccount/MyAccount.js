import React from 'react';

import authRequests from '../Auth/Auth';
import customerData from '../../DataRequests/customersData';

class MyAccount extends React.Component {
    state = {
        user: {}
    }
    componentDidMount() {
        const userEmail = authRequests.getEmail();
        customerData.getCustomerInfoByEmail(userEmail).then((resp) => {
            this.setState({user: resp});
        });
    }
    render() {
        // const customer = this.props.currentCustomer;
        // console.error('current customer from account', customer);
        // const personal = this.props.customerPersonalData;
        // console.error('personal from account', personal);
        
        return (
            <div>
                <h1>Account/Profile Page!</h1>
                {/* <h3>Welcome {personal.firstName}</h3> */}
                {console.error('user email from account', this.state.user)}
            </div>
        );
    }
}

export default MyAccount;