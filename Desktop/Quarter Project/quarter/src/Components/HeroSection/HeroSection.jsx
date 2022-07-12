import './HeroSection.css';
import { FaPlay } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import SliderData from './SliderData';
import Button from '../Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { FiArrowRight,FiArrowLeft  } from "react-icons/fi";
import Slider from "react-slick";

function HeroSection() {
    var settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<div className='prev-arrows'><FiArrowLeft /></div>,
        nextArrow:<div className='next-arrows'><FiArrowRight /></div>
      };
    return (
        <>
          <Slider {...settings}>
            {SliderData.map((items) => {
                let customClass;
                if(items.id === '2'){
                    customClass='quar-d-none';
                }
                else{
                    customClass='';
                }
                return (
                  
                    <div className="quar-HeroSection">
                        <div className="container">
                            <div className="quar-HeroSectionMain">
                                <div className="quar-HeroSectionMain__leftItem">
                                    <p className="quar-sliderSubheading"><span className='subheadingIcon'><FaHome /></span>{items.subheading}</p>
                                    <h2 className="quar-sliderHeading">{items.heading}</h2>
                                    <p className="quar-sliderDescription">{items.description}</p>
                                    <Button text={items.btnText} link={items.link} type='primary' />
                                    {items.btnText2!==undefined? <Button text={items.btnText2} link={items.link} type='secondary' />:null}
                                    <a href="https://google.com" title='play-btn' className={`quar-play-btn ${customClass}`}><FaPlay /></a>
                                </div>
                                <div className="quar-HeroSectionMain__rightItem">
                                    <div className="sliderImgg">
                                        <img src={items.imgsrc} alt="sliderImg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                )
            })}
</Slider>
        </>
    )
}
export default HeroSection;