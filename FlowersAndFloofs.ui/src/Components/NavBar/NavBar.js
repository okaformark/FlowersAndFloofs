import React from 'react';
import  ShoppingCartIcon from './Icons/ShoppingCartIcon';
import SearchBarIcon from './Icons/SearchBarIcon';
import HomeIcon from './Icons/HomeIcon';
import LockIcon from './Icons/LogOutIcon';
import './NavBar.scss';


const style = {
display:'flex'
};

// remember to replace hrefs with react link
const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-fuchsia">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-responsive-collapse" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">LOGO
                    </a>
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
                    <button className = "btn btn-success btn-sm ml-3" style={style}>
                        <ShoppingCartIcon className="shoppingcarticon"/> Cart&nbsp;&nbsp;
                        <span className="badge badge-pill badge-danger">0</span>
                    </button>
                    <form className="form-inline my-2 my-lg-0" >
                        <input className="form-control mr-sm-2 ml-3" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary btn-sm my-2 my-sm-0" type="submit" style={style}>
                            <SearchBarIcon /> Search
                        </button>
                    </form>
                    <button className="btn btn-outline-danger btn-sm my-2 my-sm-0 ml-3" style={style}>
                        <LockIcon />Log Out
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
