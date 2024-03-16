import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

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
            const element = document.getElementsByClassName('cart-container');
            if(element[0] && !element[0].contains(event.target)){
            if(!ignoreFirstClick) props.nextCart(false);
            setIgnoreFirstClick(false);
            }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () =>{
            document.removeEventListener('click', handleClickOutside);
        }
    }, [ignoreFirstClick]);

    return(
        <div className="cart-container">

        </div>
    );
}