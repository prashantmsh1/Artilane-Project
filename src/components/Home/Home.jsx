import "./Home.scss";
import Banner from '../Home/Banner/Banner';
import Category from "../Home/Category/Category";
import Products from "../Products/Products";
const Home = () => {
    return (
        <div >
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category/>
                    <Products/>
                </div>
            </div>
        </div>
    );
};

export default Home;