import PropTypes from 'prop-types';

Item.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
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
                <button className='add-to-cart-btn'>Add to cart</button>
            </div>
        </div>
    );
}