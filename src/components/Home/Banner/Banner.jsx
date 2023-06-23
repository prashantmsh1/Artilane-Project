import "./Banner.scss";
import Bannerimg from "../../../assets/bannerimage.png";
const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Sales</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi at error, ipsa iure asperiores sequi atque! Ratione aspernatur odit eius.</p>
                    <div className="ctas">
                        <div className="banner-cta">Read more</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={Bannerimg} alt=""/>
            </div>
        </div>
    );
};

export default Banner;
