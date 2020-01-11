import React from 'react';

import authRequests from '../Auth/Auth';
import customerData from '../../DataRequests/customersData';
import orderData from '../../DataRequests/orderRequest';
import SingleCartProduct from '../SingleCartProduct/SingleCartProduct';
import SingleOrderRow from '../SingleOrderRow/SingleOrderRow';

class MyAccount extends React.Component {
    state = {
        user: {},
        orders: []
    }
    componentDidMount() {
        const userEmail = authRequests.getEmail();
        customerData.getCustomerInfoByEmail(userEmail).then((resp) => {
            this.setState({user: resp});
        }).then(() => {
            const customer = this.state.user;
            orderData.getOrdersForCustomer(customer.id).then((resp) => {
                console.error('orders', resp);
                this.setState({orders: resp});
            })
        });
    }

    deleteProfile = () => {
        const {user} = this.state;
        customerData.deleteCustomerPersonalFromDatabase(user.id);
        authRequests.logoutUser();
        console.error(`user ${user.id} has been deleted`);
    }

    

    render() {
        const {orders} = this.state;
       const makeOrders = orders.map((order) => (
           <SingleOrderRow order={order}
                              key={order.id}
                              />
       ))
        return (
            <div>
                <h1>Account/Profile Page!</h1>
                <h3>Welcome {this.state.user.firstName}</h3>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col" className="border-0 bg-light">
                            <div className="p-2 px-3 text-uppercase">Order Id</div>
                            </th>
                            <th scope="col" className="border-0 bg-light">
                                <div className="py-2 text-uppercase">Order Total</div>
                            </th>
                        </tr>
                    </thead>
                    {makeOrders}
                </table>
                <button className="btn btn-danger" onClick={this.deleteProfile}>Delete My Account</button>
            </div>
        );
    }
}

export default MyAccount;