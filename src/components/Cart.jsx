import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import CartItem from "./CartItem";

Cart.propTypes = {
    cart: PropTypes.bool.isRequired,
    nextCart: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
    nextCartItems: PropTypes.func.isRequired
}

export default function Cart(props){
    const [ignoreFirstClick, setIgnoreFirstClick] = useState(true);
    useEffect(() => {
        const handleClickOutside = (event) =>{
            const element = document.getElementsByClassName('test');
            console.log(element[1]);
            if(element[0] && !element[0].contains(event.target) && (element[1] === undefined || element[1].contains(event.target))){
            if(!ignoreFirstClick) props.nextCart(false);
            setIgnoreFirstClick(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        document.body.style.overflow = 'hidden';
    
        return () =>{
            document.body.style.overflow = '';
            document.removeEventListener('click', handleClickOutside);
        }
    }, [ignoreFirstClick]);

    let estimatedTotal = 0;

    props.cartItems.forEach(items => {
        return estimatedTotal += items.price * items.count;
    });


    return(
        <div className="cart-container test">
            <h1>Your Cart</h1>
            <div className="text-container">
                <h2>PRODUCT</h2><h2>TOTAL</h2>
            </div>
            <hr className="width-100"/>
            <div className="cart-items-container">
                {props.cartItems.map((item) => 
                    <CartItem key={item.id} item={item} cartItems={props.cartItems} nextCartItems={props.nextCartItems} nextCart={props.nextCart}/>
                )}
            </div>
            <hr className="width-100"/>
            <div className="text-container">
                <h3>Estimated total</h3> <p className="price-txt">${estimatedTotal}</p>
            </div>
            <h4>Tax included. Shipping and discounts calculated at checkout</h4>
            <button className="check-out-btn">Check Out</button>
        </div>
    );
}