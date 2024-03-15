import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Shop(){
    
    return(
        <>
            <Navigation/>
            <div className="shop-title-bg"><h1>All items</h1></div>
            <div className="shop-container"></div>
            <Footer/>
        </>
    );
}