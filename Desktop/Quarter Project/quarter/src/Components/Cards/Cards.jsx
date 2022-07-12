import "./Cards.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CardsData from './CardsData'

function Cards() {
    return (
        <>
            <div className="quar-CardsSection">
                <div className="container">
                    <div className="quar-Cards-title-area">
                        <span class="quar-ImgText-subheading"> Our Services</span>
                        <p class="quar-ImgText-heading">Our Main Focus</p>
                    </div>
                    <div className="quar-CardsMain">
                        {CardsData.map((items) => {
                            return (
                                <>
                                    <div className="quar-CardsMain__item">
                                        <div className="quar-cards-feature-icon">
                                            <img src={items.imgsrc} alt="cards-icon" />
                                        </div>
                                        <div className="quar-cards-info">
                                            <h3>
                                                <a href="https://google.com" title="cards-feature">{items.title}</a>
                                            </h3>
                                            <p>{items.description}</p>
                                            <a href="https://google.com" title="service-btn">{items.serviceTitle}<span className="quar-cards-service-icon"><HiOutlineArrowNarrowRight /></span></a>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cards;