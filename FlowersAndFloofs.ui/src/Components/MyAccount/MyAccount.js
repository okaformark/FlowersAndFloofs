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
        
        return (
            <div>
                <h1>Account/Profile Page!</h1>
                <h3>Welcome {this.state.user.firstName}</h3>
                {/* {console.error('user email from account', this.state.user)} */}
            </div>
        );
    }
}

export default MyAccount;