import { TbBed, TbBath, TbCar } from "react-icons/tb";

import { FaMapMarkerAlt } from "react-icons/fa";
import { FiArrowRight,FiArrowLeft  } from "react-icons/fi";
import { AiOutlineExpandAlt, AiOutlineHeart, AiOutlinePlusCircle, AiFillCamera } from "react-icons/ai";

import { BsCameraReels } from "react-icons/bs";
import Slider from "react-slick";

import "./ProSlider.css"


function ProSlider() {

        var settings = {
            infinite: true,
            speed: 600,
            slidesToShow: 3,
            dots:true,
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
          
                <div className="quar-ProSlider">
                    <div className="container">
                        <div className="quar-Cards-title-area">
                            <span class="quar-ImgText-subheading"> Our Services</span>
                            <p class="quar-ImgText-heading">Our Main Focus</p>
                        </div>
                       
                        <div className="quar-ProSliderMain2">
                        <Slider {...settings}>
                                <div className="quar-ProSliderMain2__item">
                                    <div className="quar--productImg">
                                        <a href="https://google.com" title="productImg">
                                            <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg" alt="productImg-img" />
                                        </a>
                                        <div class="quar-product-badge">
                                            <p class="quar-sale-badge">For Sale</p>
                                        </div>
                                        <div class="quar-productlocation-gallery">
                                            <div class="quar-Imglocation">
                                                <p>
                                                    <a href="#/contact" title="title"><FaMapMarkerAlt />Belmont Gardens, Chicago
                                                    </a>
                                                </p>

                                            </div>
                                            <div class="product-img-gallery go-top">
                                                <ul>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><AiFillCamera /></span> 4</a></li>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><BsCameraReels /></span> 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quar--productInfo">
                                        <div class="quar-product-price">
                                            <span className="quar-product-price-price">$34,900
                                                <span className="quar-product-price-month">/Month</span>
                                            </span>
                                        </div>
                                        <h2 class="quar-product-title"><a href="https://google.com" title="product-title">Modern Apartment</a></h2>
                                        <p className="quar-product-description">
                                            Beautiful Huge 1 Family House In Heart Of <br />Westbury. Newly Renovated With New Wood
                                        </p>
                                        <ul class="quar-facility-lists2 featured-list">
                                            <li><span>3 <TbBed /></span>Bedrooms</li>
                                            <li><span>2 <TbBath /></span>Bathrooms</li>
                                            <li><span>2 <TbCar /></span>Car parking</li>

                                        </ul>
                                    </div>
                                    <div className="quar--productInfoBottom">
                                        <div className="quar-agent-details">
                                            <a href="https://google.com" title="agentImg">
                                                <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/author.jpg" alt='agentimg' />
                                            </a>
                                            <div className="quar-agent-tile">
                                                <h6><a href="https://google.com" title="title">William Seklo</a></h6>
                                                <small>Estate Agents</small>
                                            </div>
                                        </div>
                                        <div className="quar-product-action">
                                            <ul>
                                                <li><a href="https://google.com" title="Quick View" ><AiOutlineExpandAlt /></a></li>
                                                <li><a href="https://google.com" title="Wishlist" ><AiOutlineHeart /></a></li>
                                                <li><a href="https://google.com" title="action" ><AiOutlinePlusCircle /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="quar-ProSliderMain2__item">
                                    <div className="quar--productImg">
                                        <a href="https://google.com" title="productImg">
                                            <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg" alt="productImg-img" />
                                        </a>
                                        <div class="quar-product-badge">
                                            <p class="quar-sale-badge">For Sale</p>
                                        </div>
                                        <div class="quar-productlocation-gallery">
                                            <div class="quar-Imglocation">
                                                <p>
                                                    <a href="#/contact" title="title"><FaMapMarkerAlt />Belmont Gardens, Chicago
                                                    </a>
                                                </p>

                                            </div>
                                            <div class="product-img-gallery go-top">
                                                <ul>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><AiFillCamera /></span> 4</a></li>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><BsCameraReels /></span> 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quar--productInfo">
                                        <div class="quar-product-price">
                                            <span className="quar-product-price-price">$34,900
                                                <span className="quar-product-price-month">/Month</span>
                                            </span>
                                        </div>
                                        <h2 class="quar-product-title"><a href="https://google.com" title="product-title">Modern Apartment</a></h2>
                                        <p className="quar-product-description">
                                            Beautiful Huge 1 Family House In Heart Of <br />Westbury. Newly Renovated With New Wood
                                        </p>
                                        <ul class="quar-facility-lists2 featured-list">
                                            <li><span>3 <TbBed /></span>Bedrooms</li>
                                            <li><span>2 <TbBath /></span>Bathrooms</li>
                                            <li><span>2 <TbCar /></span>Car parking</li>

                                        </ul>
                                    </div>
                                    <div className="quar--productInfoBottom">
                                        <div className="quar-agent-details">
                                            <a href="https://google.com" title="agentImg">
                                                <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/author.jpg" alt='agentimg' />
                                            </a>
                                            <div className="quar-agent-tile">
                                                <h6><a href="https://google.com" title="title">William Seklo</a></h6>
                                                <small>Estate Agents</small>
                                            </div>
                                        </div>
                                        <div className="quar-product-action">
                                            <ul>
                                                <li><a href="https://google.com" title="Quick View" ><AiOutlineExpandAlt /></a></li>
                                                <li><a href="https://google.com" title="Wishlist" ><AiOutlineHeart /></a></li>
                                                <li><a href="https://google.com" title="action" ><AiOutlinePlusCircle /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="quar-ProSliderMain2__item">
                                    <div className="quar--productImg">
                                        <a href="https://google.com" title="productImg">
                                            <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg" alt="productImg-img" />
                                        </a>
                                        <div class="quar-product-badge">
                                            <p class="quar-sale-badge">For Sale</p>
                                        </div>
                                        <div class="quar-productlocation-gallery">
                                            <div class="quar-Imglocation">
                                                <p>
                                                    <a href="#/contact" title="title"><FaMapMarkerAlt />Belmont Gardens, Chicago
                                                    </a>
                                                </p>

                                            </div>
                                            <div class="product-img-gallery go-top">
                                                <ul>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><AiFillCamera /></span> 4</a></li>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><BsCameraReels /></span> 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quar--productInfo">
                                        <div class="quar-product-price">
                                            <span className="quar-product-price-price">$34,900
                                                <span className="quar-product-price-month">/Month</span>
                                            </span>
                                        </div>
                                        <h2 class="quar-product-title"><a href="https://google.com" title="product-title">Modern Apartment</a></h2>
                                        <p className="quar-product-description">
                                            Beautiful Huge 1 Family House In Heart Of <br />Westbury. Newly Renovated With New Wood
                                        </p>
                                        <ul class="quar-facility-lists2 featured-list">
                                            <li><span>3 <TbBed /></span>Bedrooms</li>
                                            <li><span>2 <TbBath /></span>Bathrooms</li>
                                            <li><span>2 <TbCar /></span>Car parking</li>

                                        </ul>
                                    </div>
                                    <div className="quar--productInfoBottom">
                                        <div className="quar-agent-details">
                                            <a href="https://google.com" title="agentImg">
                                                <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/author.jpg" alt='agentimg' />
                                            </a>
                                            <div className="quar-agent-tile">
                                                <h6><a href="https://google.com" title="title">William Seklo</a></h6>
                                                <small>Estate Agents</small>
                                            </div>
                                        </div>
                                        <div className="quar-product-action">
                                            <ul>
                                                <li><a href="https://google.com" title="Quick View" ><AiOutlineExpandAlt /></a></li>
                                                <li><a href="https://google.com" title="Wishlist" ><AiOutlineHeart /></a></li>
                                                <li><a href="https://google.com" title="action" ><AiOutlinePlusCircle /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="quar-ProSliderMain2__item">
                                    <div className="quar--productImg">
                                        <a href="https://google.com" title="productImg">
                                            <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg" alt="productImg-img" />
                                        </a>
                                        <div class="quar-product-badge">
                                            <p class="quar-sale-badge">For Sale</p>
                                        </div>
                                        <div class="quar-productlocation-gallery">
                                            <div class="quar-Imglocation">
                                                <p>
                                                    <a href="#/contact" title="title"><FaMapMarkerAlt />Belmont Gardens, Chicago
                                                    </a>
                                                </p>

                                            </div>
                                            <div class="product-img-gallery go-top">
                                                <ul>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><AiFillCamera /></span> 4</a></li>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><BsCameraReels /></span> 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quar--productInfo">
                                        <div class="quar-product-price">
                                            <span className="quar-product-price-price">$34,900
                                                <span className="quar-product-price-month">/Month</span>
                                            </span>
                                        </div>
                                        <h2 class="quar-product-title"><a href="https://google.com" title="product-title">Modern Apartment</a></h2>
                                        <p className="quar-product-description">
                                            Beautiful Huge 1 Family House In Heart Of <br />Westbury. Newly Renovated With New Wood
                                        </p>
                                        <ul class="quar-facility-lists2 featured-list">
                                            <li><span>3 <TbBed /></span>Bedrooms</li>
                                            <li><span>2 <TbBath /></span>Bathrooms</li>
                                            <li><span>2 <TbCar /></span>Car parking</li>

                                        </ul>
                                    </div>
                                    <div className="quar--productInfoBottom">
                                        <div className="quar-agent-details">
                                            <a href="https://google.com" title="agentImg">
                                                <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/author.jpg" alt='agentimg' />
                                            </a>
                                            <div className="quar-agent-tile">
                                                <h6><a href="https://google.com" title="title">William Seklo</a></h6>
                                                <small>Estate Agents</small>
                                            </div>
                                        </div>
                                        <div className="quar-product-action">
                                            <ul>
                                                <li><a href="https://google.com" title="Quick View" ><AiOutlineExpandAlt /></a></li>
                                                <li><a href="https://google.com" title="Wishlist" ><AiOutlineHeart /></a></li>
                                                <li><a href="https://google.com" title="action" ><AiOutlinePlusCircle /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="quar-ProSliderMain2__item">
                                    <div className="quar--productImg">
                                        <a href="https://google.com" title="productImg">
                                            <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg" alt="productImg-img" />
                                        </a>
                                        <div class="quar-product-badge">
                                            <p class="quar-sale-badge">For Sale</p>
                                        </div>
                                        <div class="quar-productlocation-gallery">
                                            <div class="quar-Imglocation">
                                                <p>
                                                    <a href="#/contact" title="title"><FaMapMarkerAlt />Belmont Gardens, Chicago
                                                    </a>
                                                </p>

                                            </div>
                                            <div class="product-img-gallery go-top">
                                                <ul>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><AiFillCamera /></span> 4</a></li>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><BsCameraReels /></span> 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quar--productInfo">
                                        <div class="quar-product-price">
                                            <span className="quar-product-price-price">$34,900
                                                <span className="quar-product-price-month">/Month</span>
                                            </span>
                                        </div>
                                        <h2 class="quar-product-title"><a href="https://google.com" title="product-title">Modern Apartment</a></h2>
                                        <p className="quar-product-description">
                                            Beautiful Huge 1 Family House In Heart Of <br />Westbury. Newly Renovated With New Wood
                                        </p>
                                        <ul class="quar-facility-lists2 featured-list">
                                            <li><span>3 <TbBed /></span>Bedrooms</li>
                                            <li><span>2 <TbBath /></span>Bathrooms</li>
                                            <li><span>2 <TbCar /></span>Car parking</li>

                                        </ul>
                                    </div>
                                    <div className="quar--productInfoBottom">
                                        <div className="quar-agent-details">
                                            <a href="https://google.com" title="agentImg">
                                                <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/author.jpg" alt='agentimg' />
                                            </a>
                                            <div className="quar-agent-tile">
                                                <h6><a href="https://google.com" title="title">William Seklo</a></h6>
                                                <small>Estate Agents</small>
                                            </div>
                                        </div>
                                        <div className="quar-product-action">
                                            <ul>
                                                <li><a href="https://google.com" title="Quick View" ><AiOutlineExpandAlt /></a></li>
                                                <li><a href="https://google.com" title="Wishlist" ><AiOutlineHeart /></a></li>
                                                <li><a href="https://google.com" title="action" ><AiOutlinePlusCircle /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="quar-ProSliderMain2__item">
                                    <div className="quar--productImg">
                                        <a href="https://google.com" title="productImg">
                                            <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg" alt="productImg-img" />
                                        </a>
                                        <div class="quar-product-badge">
                                            <p class="quar-sale-badge">For Sale</p>
                                        </div>
                                        <div class="quar-productlocation-gallery">
                                            <div class="quar-Imglocation">
                                                <p>
                                                    <a href="#/contact" title="title"><FaMapMarkerAlt />Belmont Gardens, Chicago
                                                    </a>
                                                </p>

                                            </div>
                                            <div class="product-img-gallery go-top">
                                                <ul>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><AiFillCamera /></span> 4</a></li>
                                                    <li><a href="https://google.com" ><span className="quar-gelleryIcon"><BsCameraReels /></span> 2</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quar--productInfo">
                                        <div class="quar-product-price">
                                            <span className="quar-product-price-price">$34,900
                                                <span className="quar-product-price-month">/Month</span>
                                            </span>
                                        </div>
                                        <h2 class="quar-product-title"><a href="https://google.com" title="product-title">Modern Apartment</a></h2>
                                        <p className="quar-product-description">
                                            Beautiful Huge 1 Family House In Heart Of <br />Westbury. Newly Renovated With New Wood
                                        </p>
                                        <ul class="quar-facility-lists2 featured-list">
                                            <li><span>3 <TbBed /></span>Bedrooms</li>
                                            <li><span>2 <TbBath /></span>Bathrooms</li>
                                            <li><span>2 <TbCar /></span>Car parking</li>

                                        </ul>
                                    </div>
                                    <div className="quar--productInfoBottom">
                                        <div className="quar-agent-details">
                                            <a href="https://google.com" title="agentImg">
                                                <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/blog/author.jpg" alt='agentimg' />
                                            </a>
                                            <div className="quar-agent-tile">
                                                <h6><a href="https://google.com" title="title">William Seklo</a></h6>
                                                <small>Estate Agents</small>
                                            </div>
                                        </div>
                                        <div className="quar-product-action">
                                            <ul>
                                                <li><a href="https://google.com" title="Quick View" ><AiOutlineExpandAlt /></a></li>
                                                <li><a href="https://google.com" title="Wishlist" ><AiOutlineHeart /></a></li>
                                                <li><a href="https://google.com" title="action" ><AiOutlinePlusCircle /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                </Slider>
                        </div>
                      
                    </div>
                </div>
             
            </>
        )
    }
export default ProSlider;