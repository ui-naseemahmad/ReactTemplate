import './ImageWithText2.css';
import { TbBed, TbBath, TbCar, TbSquare } from "react-icons/tb";

function ImageWithText2() {
    return (
        <>
            <div className="quar-ImgTextSection2">
                <div className="container">
                    <div className="quar-ImgTextMain2">
                        <div className="quar-ImgTextMain2__left">
                        <span className='quar-ImgText-subheading'> About Us</span>
                            <p className='quar-ImgText-heading'>Today Sells Properties</p>
                            <p className='quar-ImgText-description'>Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information
                            </p>
                            <ul class="quar-facility-lists">
                                <li> Live Music Cocerts at Luviana</li>
                                <li>Our SecretIsland Boat Tour is Just for You</li>
                                <li>Live Music Cocerts at Luviana</li>
                                <li>Live Music Cocerts at Luviana</li>
                            </ul>
                            <ul class="quar-facility-lists2">
                                <li><span>3 <TbBed /></span>Bedrooms</li>
                                <li><span>2 <TbBath /></span>Bathrooms</li>
                                <li><span>2 <TbCar /></span>Car parking</li>
                                <li><span>3450 <TbSquare /></span>square Ft</li>
                            </ul>
                            <ul class="quar-properties-imges">
                                <li><a href="https://google.com" data-rel="lightcase:myCollection"><img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/img-slide/11.jpg" alt="PropImage" /></a></li>
                                <li><a href="https://google.com" data-rel="lightcase:myCollection"><img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/img-slide/12.jpg" alt="PropImage" /></a></li>
                                <li><a href="https://google.com" data-rel="lightcase:myCollection"><img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/img-slide/13.jpg" alt="PropImage" /></a></li>
                                </ul>
                        </div>
                        <div className="quar-ImgTextMain2__right">
                            
                                <div className="quar-ImgText2-image">
                                <img src='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/others/9.png' className="ImgText-img1" alt='market-img' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default ImageWithText2;