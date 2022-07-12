import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import './CallToAction.css';
function CallToAction() {
    return (
        <>
            <div className="quar-CallToActionSection">
                <div class="quar-CallToActionMain">
                    <div class="quar-CallToActionMain__item">
                        <div class="coll-to-info text-color-white">
                            <h2>Looking for a dream home?</h2>
                            <p>We can help you realize your dream of a new home</p>
                        </div>
                        <div class="quar-btn-wrapper2">
                            <a class="btn btn-effect-" href="https://google.com">Explore Properties
                                <HiOutlineArrowNarrowRight />
                            </a>
                            {/* <Button text='Explore Properties' link="https://google.com" type='secondary' /> <HiOutlineArrowNarrowRight /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CallToAction;