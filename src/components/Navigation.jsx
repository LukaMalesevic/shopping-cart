import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

Navigation.propTypes = {
    nextShop: PropTypes.func.isRequired,
    cart: PropTypes.bool.isRequired,
    nextCart: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
    nextCartItems: PropTypes.func.isRequired,
    style: PropTypes.object.isRequired
}


export default function Navigation(props){
    const [dropDownState, nextDropDownState] = useState(false);
    const dropDownStyle = {
        display: 'none'
    }
    if(dropDownState){
        dropDownStyle.display = 'flex'
    }
    return(
        <div style={props.style} className="nav-bar">
            <div className="logo">

            </div>
            <div className="container">
                <Link to="/"><button className="home-btn">Home</button></Link>
                <Link to="/shop"><button  onClick={() => props.nextShop(null)} className="shop-btn">Shop</button></Link>
                <button onMouseEnter={() =>nextDropDownState(true)} onMouseLeave={() =>nextDropDownState(false)} className="categories-btn">Categories
                    <div style={dropDownStyle} className="drop-down">
                        <Link to="/shop"><button onClick={() => props.nextShop('electronics')} className="drop-down-btn">Electronics</button></Link>
                        <Link to="/shop"><button onClick={() => props.nextShop('jewelery')} className="drop-down-btn">Jewelery</button></Link>
                        <Link to="/shop"><button onClick={() => props.nextShop("men's clothing")} className="drop-down-btn">Men&apos;s clothing</button></Link>
                        <Link to="/shop"><button onClick={() => props.nextShop("women's clothing")} className="drop-down-btn">Women&apos;s clothing</button></Link>
                    </div>
                </button>
                <Link to="/"><button className="about-btn">About</button></Link>
            </div>
            <div className="container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>
            <i onClick={() => props.nextCart(true)} className="fa-solid fa-cart-shopping relative">
                <div className="items-circle">0</div>
            </i>
            </div>
        </div>
    );
}