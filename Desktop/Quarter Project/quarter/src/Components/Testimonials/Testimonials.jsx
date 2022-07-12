import "./Testimonials.css"
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import Slider from "react-slick";
import TestimonialData from "./TestimonialData";

function Testimonials() {
    var settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <div className='prev-arrows'><FiArrowLeft /></div>,
        nextArrow: <div className='next-arrows'><FiArrowRight /></div>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <div className="quar-Testimonials">
                <div className="container">
                    <div className="quar-Cards-title-area">
                        <span class="quar-ImgText-subheading"> Our Testimonials</span>
                        <p class="quar-ImgText-heading">Clients Feedbacks
                        </p>
                    </div>
                    <div className="quar-TestimonialSection">
                        <Slider {...settings}>
                            {TestimonialData.map((items,index) => {
                                return (
                                    <>
                                        <div key={index} className="quar-TestimonialMain">
                                            <div class="quar-testimonial-info">
                                                <p>
                                                    {items.quoteIcon}
                                                    {items.feedback}
                                                </p>
                                                <div class="quar-testimoni-info-inner">
                                                    <div class="quar-testimoni-img">
                                                        <img src={items.userImg} alt="#" />
                                                    </div>
                                                    <div class="quar-testimoni-name-designation">
                                                        <h5>{items.UserName}</h5>
                                                        <label>{items.UserDesig}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )

                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;