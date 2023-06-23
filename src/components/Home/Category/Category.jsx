import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg"
import cat2 from "../../../assets/category/cat-2.jpg"
import cat3 from "../../../assets/category/cat-3.jpg"
import cat4 from "../../../assets/category/cat-4.jpg"

const Category = () => {
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={cat1} alt="" />
                    <div className="over-text">Textile</div>
                </div>
                <div className="category">
                    <img src={cat2} alt="" />
                    <div className="over-text">Decoration</div>
                </div>
                <div className="category">
                    <img src={cat3} alt="" />
                    <div className="over-text">Paper Craft</div>
                </div>
                <div className="category">
                    <img src={cat4} alt="" />
                    <div className="over-text">Utility Craft </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
