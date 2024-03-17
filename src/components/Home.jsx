import Footer from "./Footer";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Cart from "./Cart";

Home.propTypes = {
    cart: PropTypes.bool.isRequired,
    nextCart: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
    nextCartItems: PropTypes.func.isRequired,
}


export default function Home(props){
    let cartStyle;

    if(props.cart){
        cartStyle = {
            filter: 'brightness(70%)',
            pointerEvents: 'none'
        }
    }

    return(
        <>
            {props.cart ? <Cart 
                        cart={props.cart}
                        nextCart={props.nextCart}
                        cartItems={props.cartItems}
                        nextCartItems={props.nextCartItems}
                        /> : null}
            <Navigation style={cartStyle}
            cart={props.cart}
            nextCart={props.nextCart}
            cartItems={props.cartItems}
            nextCartItems={props.nextCartItems}
            />
        <div style={cartStyle} className="home-container">
            <div className="model-bg"></div>
            <h1>Modern Clothing</h1>
            <h2>Only the best from entire world</h2>
            <Link to="/shop"><button className="shop-now">Shop Now</button></Link>
        </div>
        <Footer style={cartStyle}/>
        </>
    );
}