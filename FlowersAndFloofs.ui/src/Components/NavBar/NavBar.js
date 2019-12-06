import React from 'react';
import  ShoppingCartIcon from './Icons/ShoppingCartIcon';
import SearchBarIcon from './Icons/SearchBarIcon';

const style = {
display:'flex'
};

// remember to replace hrefs with react link
const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0" >
                        <li className="nav-item active">
                            <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <button className = "btn btn-success btn-sm ml-12" style={style}>
                        <ShoppingCartIcon /> Your Cart
                    </button>" "
                    <form className="form-inline my-2 my-lg-0" >
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={style}>
                            <SearchBarIcon /> Search
                        </button>
                    </form> " "
                    <button className="btn btn-outline-danger my-2 my-sm-0">Log Out</button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
