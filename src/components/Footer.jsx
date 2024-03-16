import PropTypes from 'prop-types';

Footer.propTypes = {
    style: PropTypes.object.isRequired
}

export default function Footer(props){
    return(
        <footer style={props.style}>
            <h1>©2024 Company</h1>
            <h1>Refund policy</h1>
            <h1>Privacy policy</h1>
            <h1>Terms of services</h1>
            <h1>Contact information</h1>
        </footer>
    );
}