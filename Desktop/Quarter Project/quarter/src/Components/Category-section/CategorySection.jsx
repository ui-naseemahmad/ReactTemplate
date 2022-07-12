import "./CategorySection.css"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CategoryData from "./categorySectionData";
function CategorySection() {
    return (
        <>
            <div className="quar-CategorySection">
                <div className="container">
                    <div className="quar-Cards-title-area">
                        <span class="quar-ImgText-subheading"> Our Aminities</span>
                        <p class="quar-ImgText-heading">Building Aminities
                        </p>
                    </div>
                    <div className="quar-CategorySection">
                        <div className="quar-CategoryMain">
                            {CategoryData.map((items) => {
                                return (
                                    <>
                                        <div className="quar-CategoryMain__item">
                                            <a href={items.links} title="categoryIcons">
                                                <span class="quar-category-icon">{items.icon}</span>
                                                <span class="quar-category-title">{items.title}</span>
                                                <span class="quar-category-btn"><HiOutlineArrowNarrowRight /></span>
                                            </a>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CategorySection;