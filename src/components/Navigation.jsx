import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <div className="nav-bar">
            <div className="logo">

            </div>
            <div className="container">
                <Link to="/"><button className="home-btn">Home</button></Link>
                <Link to="/shop"><button className="shop-btn">Shop</button></Link>
                <button className="categories-btn">Categories</button>
                <Link to="/"><button className="about-btn">About</button></Link>
            </div>
            <div className="container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>
            <i className="fa-solid fa-cart-shopping relative">
                <div className="items-circle">0</div>
            </i>
            </div>
        </div>
    );
}