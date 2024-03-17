import PropTypes from 'prop-types';

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    cartItems: PropTypes.array.isRequired,
    nextCartItems: PropTypes.func.isRequired,
    nextCart: PropTypes.func.isRequired,
}

function handleIncrement(cartItems, nextCartItems, id){

    let array = [...cartItems];
    array.forEach(item => {
        item.id === id ? ++item.count : null;
    });
    nextCartItems(array);
}

function handleDecrement(cartItems, nextCartItems, id){

    let array = [...cartItems];
    array.forEach(item => {
        if(item.count > 1){
            item.id === id ? --item.count : null;
        }
    });
    nextCartItems(array);
}

function handleDelete(cartItems, nextCartItems, id){

    let indexToDelete;
    let array = [...cartItems];
    array.forEach((item, index) => {
        item.id === id ? indexToDelete = index : null;
    });
    array = array.filter(((_, index) => index !== indexToDelete))
    nextCartItems(array);

}

export default function CartItem(props){

    const itemImageStyle = {
        backgroundImage: `url(${props.item.image})`
    }
    return (
        <>
        <div className="cart-item">
            <div style={itemImageStyle} className="cart-item-image center-image"></div>
            <div className="cart-item-info">
                <h1>{props.item.title}</h1>
                <h1 className='price-txt'>${props.item.price}</h1>
            </div>
            <div className="cart-item-price-calc">
                <div className="set-item-count">
                    <button onClick={() => handleIncrement(props.cartItems, props.nextCartItems, props.item.id, props.nextCart)} className='count-inc-btn'>+</button>
                    <h2 className='count-inc-btn'>{props.item.count}</h2>
                    <button onClick={() => handleDecrement(props.cartItems, props.nextCartItems, props.item.id, props.nextCart)} className='count-inc-btn'>-</button>
                </div>
                <h2 className='price-txt'>${props.item.price * props.item.count}</h2>
                <button onClick={() => handleDelete(props.cartItems, props.nextCartItems, props.item.id, props.nextCart)} className='delete-btn test'>Delete</button>
            </div>
        </div>
        <hr/>
        </>
    );
}