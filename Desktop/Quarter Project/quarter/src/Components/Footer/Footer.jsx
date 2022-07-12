import "./Footer.css"
import SocialLinks from "../Announcement/SocialLinks";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
import { BsEnvelope } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";


function Footer() {
    return (
        <>
            <div className="quar-FooterSection">
                <div className="container">
                    <div className="quar-FooterMain">
                        <div className="quar-FooterMain__item">
                            <div className="quar-FooterMain__item--item1">
                                <div className="site-logo">
                                    <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/logo-2.png" alt="Logo" />
                                </div>
                                <p className="desc">Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                                <div className="quar-footer-address">
                                    <ul>
                                        <li>
                                            <div className="quar-footer-address-info">
                                                <FaMapMarkerAlt /><p>Brooklyn, New York, US</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quar-footer-address-info">
                                                <TbPhoneCall /> <p><a href="tel:+0123-456789">+0123-456789</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="quar-footer-address-info">
                                                <BsEnvelope /> <p><a href="mailto:example@example.com">example@example.com</a> </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <SocialLinks />
                            </div>
                            <div className="quar-FooterMain__item--itemMid">
                                <div className="quar-footer-widget">
                                    <h4 className="quar-footer-title">Company</h4>
                                    <div className="quar-footer-menu">
                                        <ul>
                                            <li><a href="https://google.com">About</a></li>
                                            <li><a href="https://google.com">Blog</a></li>
                                            <li><a href="https://google.com">All Products</a></li>
                                            <li><a href="https://google.com">Contact</a></li>
                                            <li><a href="https://google.com">FAQ</a></li>
                                            <li><a href="https://google.com">Contact us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="quar-FooterMain__item--itemMid">
                                <div className="quar-footer-widget">
                                    <h4 className="quar-footer-title">Services</h4>
                                    <div className="quar-footer-menu">
                                        <ul>
                                            <li><a href="https://google.com">Cart</a></li>
                                            <li><a href="https://google.com">Wishlist</a></li>
                                            <li><a href="https://google.com">Login</a></li>
                                            <li><a href="https://google.com">Checkout</a></li>
                                            <li><a href="https://google.com">Terms & Condition</a></li>
                                            <li><a href="https://google.com">Promotional Offers</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="quar-FooterMain__item--itemMid">
                                <div className="quar-footer-widget">
                                    <h4 className="quar-footer-title">About</h4>
                                    <div className="quar-footer-menu">
                                        <ul>
                                            <li><a href="https://google.com">Login</a></li>
                                            <li><a href="https://google.com">My Account</a></li>
                                            <li><a href="https://google.com">Wishlist</a></li>
                                            <li><a href="https://google.com">Add Listing</a></li>
                                            <li><a href="https://google.com">FAQ</a></li>
                                            <li><a href="https://google.com">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="quar-FooterMain__item--item1">
                                <div className="quar-footer-widget">
                                    <h4 className="quar-footer-title">Newsletter</h4>
                                    <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
                                    <div className="quar-footer-newsletter">
                                        <form action="#">
                                            <input type="email" name="email" placeholder="Email*" />
                                            <div className="quar-btn-wrapper">
                                                <button className="quar-theme-btn" type="submit">
                                                    <RiSendPlaneFill />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <h5 className="quar-mt-30">We Accept</h5>
                                    <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/icons/payment-4.png" alt="Payment" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
              
            </div>
            <div className="quar-FooterBottom">
                    <div class="quar-copyright-area">
                        <div class="quar-col-md-6">
                            <div class="quar__copyright-design ">
                                <p>All Rights Reserved @ Company <span class="current-year">2022</span></p>
                            </div>
                        </div>
                        <div class="quar__copyright-menu">
                            <ul class="go-top">
                                <li><a href="https://google.com">Terms &amp; Conditions</a></li>
                                <li><a href="https://google.com">Claim</a></li>
                                <li><a href="https://google.com">Privacy &amp; Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Footer;