import PropTypes from 'prop-types';

Item.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    cartItems: PropTypes.array.isRequired,
    nextCartItems: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
}


function addItemToTheCart(currentId, items, nextItems, itemTitle, itemImage, itemPrice){
    if(items.some(obj => obj['id'] === currentId)){
        let array = [...items];
        array.forEach(item => {
            item.id === currentId ? ++item.count : null;
        });
        nextItems(array);
    }else{
        let array = [...items];
        const item = {
            id: currentId,
            count: 1,
            title: itemTitle,
            price: itemPrice,
            image: itemImage
        }
        array.push(item);
        nextItems(array);
    }   
    console.log(items);
}

export default function Item(props){

    const itemImageStyle = {
        backgroundImage: `url(${props.image})`
    }
    return(
        <div id={props.id} className="item">
            <div style={itemImageStyle} className="item-image"></div>
            <div className="item-status">
                <h1>{props.title}</h1>
                <h2>${props.price}</h2>
                <button onClick={() => addItemToTheCart(props.id, props.cartItems, props.nextCartItems, props.title, props.image, props.price)} className='add-to-cart-btn'>Add to cart</button>
            </div>
        </div>
    );
}