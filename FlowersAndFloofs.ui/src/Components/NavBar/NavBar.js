import React from 'react';
import  ShoppingCartIcon from './Icons/ShoppingCartIcon';
import HomeIcon from './Icons/HomeIcon';
import LockIcon from './Icons/LogOutIcon';
// import { Modal, }  from 'react-bootstrap';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button} from 'reactstrap';

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
    render() {
        const { cart } = this.props;
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
                     <Modal isOpen={this.state.modalShow} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            <p>Enjoy your food!!!</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.addClaim}>Claim</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
            </div>
        )
    }
}


export default NavBar;
