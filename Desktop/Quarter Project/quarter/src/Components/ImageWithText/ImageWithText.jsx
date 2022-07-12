import './ImageWithText.css';
import Button from "..//Button"
import { FaHouseUser, FaMountain, FaHeartbeat } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

function ImageWithText() {
    return (
        <>
            <div className="quar-ImgTextSection">
                <div className="container">
                    <div className="quar-ImgTextMain">
                        <div className="quar-ImgTextMain__left">
                            <div className="quar-ImgText-image">
                                <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/others/7.png' className="ImgText-img1" alt='market-img' />
                                <div className="quar-D-ImgText-img2">
                                    <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/others/8.png' className="ImgText-img2" alt='market-img' />
                                    <a href="https://google.com" title='play-btn' className={`quar-play-btn2 `}><FaPlay /></a>
                                </div>
                            </div>
                        </div>
                        <div className="quar-ImgTextMain__right">
                            <span className='quar-ImgText-subheading'> About Us</span>
                            <p className='quar-ImgText-heading'>The Leading Real Estate Rental Marketplace</p>
                            <p className='quar-ImgText-description'>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services
                            </p>
                            <ul class="quar-ImgTextInfoList">
                                <li><span className='quar-ImgText--icon'><FaHouseUser /></span>Smart Home Design</li>
                                <li><span className='quar-ImgText--icon'><FaMountain /></span>Beautiful Scene Around</li>
                                <li><span className='quar-ImgText--icon'><FaHeartbeat /></span>Exceptional Lifestyle</li>
                                <li><span className='quar-ImgText--icon'><RiSecurePaymentLine /></span>Complete 24/7 Security</li>
                            </ul>
                            <p className='quar-callout'>"Enimad minim veniam quis nostrud exercitation<br /> llamco laboris. Lorem ipsum dolor sit amet"</p>
                            <Button text='OUR-SERVICES' type='primary' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ImageWithText;