import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Item from "./Item";
import PropTypes from 'prop-types';
import Cart from "./Cart";

Shop.propTypes = {
    cart: PropTypes.bool.isRequired,
    nextCart: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired,
    nextCartItems: PropTypes.func.isRequired
}


export default function Shop(props){
    const [shop, nextShop] = useState(null)
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    let cartStyle;

    if(props.cart){
        cartStyle = {
            filter: 'brightness(70%)',
            pointerEvents: 'none'
        }
    }

    useEffect(() => {
        let url = 'https://fakestoreapi.com/products';
        if(shop !== null){
            url = url + `/category/${shop}`;
        }
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setData(jsonData);
            setIsLoading(false);
        };

        fetchData();
    }, [shop]);

    if(isLoading){
        return <div>Loading...</div>;
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
            nextShop={nextShop} 
            cart={props.cart}
            nextCart={props.nextCart}
            cartItems={props.cartItems}
            nextCartItems={props.nextCartItems}
            />
            <div style={cartStyle} className="shop-title-bg"><h1>{ shop === null ? 'All items' : shop}</h1></div>
            <div style={cartStyle} className="shop-container">
                {data && data.map(item => (
                    <Item 
                    key={item.id} 
                    id={item.id} 
                    title={item.title} 
                    price={item.price}
                    image={item.image}></Item>
                ))}
            </div>
            <Footer style={cartStyle}/>
        </>
    );
}