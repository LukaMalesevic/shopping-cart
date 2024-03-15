import Footer from "./Footer";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <Navigation/>
        <div className="home-container">
            <div className="model-bg"></div>
            <h1>Modern Clothing</h1>
            <h2>Only the best from entire world</h2>
            <Link to="/shop"><button className="shop-now">Shop Now</button></Link>
        </div>
        <Footer/>
        </>
    );
}