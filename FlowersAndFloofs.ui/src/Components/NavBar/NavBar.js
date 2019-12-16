import React from 'react';
import  ShoppingCartIcon from './Icons/ShoppingCartIcon';
import HomeIcon from './Icons/HomeIcon';
import LockIcon from './Icons/LogOutIcon';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button} from 'reactstrap';
import SingleCartProduct from '../SingleCartProduct/SingleCartProduct';

const style = {
display:'flex'
};

// remember to replace hrefs with react link
class NavBar extends React.Component {

    state = {
        modalShow: false,
    }


    toggle = () => {
        this.setState(prevState => ({
            modalShow: !prevState.modalShow
        }), () => {
            console.error(this.state.modalShow, this.props.cart);
        });
    }

    makeModalTable=()=>{
        return(
            <div>
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
                                            <div className="py-2 text-uppercase">Total Price</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="py-2 text-uppercase">Quantity</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="py-2 text-uppercase">Remove</div>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        const { cart } = this.props;
        const { price } = this.props;
        const { unitPrice } = this.props;
        const makeCart = this.props.myCart.map(product =>(
            <SingleCartProduct product={product} key={product.id} price={price} unitPrice={unitPrice}/>
        ))
        const makeModalTable=()=>{
            return(
                <div>
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
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-fuchsia">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">LOGO</a>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0" >
                            <li className="nav-item active">
                                <a className="nav-link ml-3" href="#" style={style}>
                                    <HomeIcon />Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ml-3" href="#">About <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ml-3" href="#">My Orders</a>
                            </li>
                        </ul>
                        <button className = "btn btn-success btn-sm ml-3" style={style} onClick={this.toggle}>
                            <ShoppingCartIcon className="shoppingcarticon"/> Cart&nbsp;&nbsp;
                        <span className="badge badge-pill badge-danger">{cart}</span>
                    </button>
                        
                        <button className="btn btn-outline-danger my-2 my-sm-0 ml-3" style={style}>
                            <LockIcon />Log Out
                        </button>
                    </div>
                </nav>
                     <Modal isOpen={this.state.modalShow}
                            toggle={this.toggle} 
                            className={this.props.className} 
                            modalTransition={{ timeout: 700 }} 
                            backdropTransition={{ timeout: 1300 }}>
                        <ModalHeader toggle={this.toggle}>Your Cart</ModalHeader>
                        <ModalBody>
                            {makeModalTable()}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.checkout}>Checkout</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            </div>
        )
    }
}


export default NavBar;
