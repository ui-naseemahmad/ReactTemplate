import { useState } from 'react';
import './Apartment.css';
import ApartmentData from "./ApartmentData";




function Apartment() {
    const [isActive, setIsActive] = useState(false);
    const [show, setshow] = useState(0);

    const handleClick = (index) => {
        setIsActive(index)
        setshow(index);
    };

    return (
        <>
            <div className="quar-ApartmentSection">
                <div className="container">
                    <div className="quar-Cards-title-area">
                        <span class="quar-ImgText-subheading"> Apartment Sketch s</span>
                        <p class="quar-ImgText-heading">Apartments Plans
                        </p>
                    </div>
                    <>
                        <div className='tabsection'>
                            <div class="quar-tabs">
                                {ApartmentData.map((items, index) => {
                                    return (
                                        <span className={isActive === index ? 'activeTab' : null} onClick={() => handleClick(index)}>{items.tabName}</span>
                                    )
                                })}
                            </div>
                        </div>
                    </>
                    {ApartmentData.map((items, index) => {
                        return (
                            show === index && <>
                                <div className="quar-ApartmentMain">
                                    <div className="quar-ApartmentMain__left">
                                        <div class="quar-apartments--plan">
                                            <h2>{items.heading}</h2>
                                            <p>{items.description}</p>
                                            <div class="quar-apartments--info">
                                                <ul>
                                                    <li><label>{items.features1}</label> <span>{items.value1}</span></li>
                                                    <li><label>{items.features2}</label> <span>{items.value2}</span></li>
                                                    <li><label>{items.features3}</label> <span>{items.value3}Ft</span></li>
                                                    <li><label>{items.features4}</label> <span>{items.value4}</span></li>
                                                    <li><label>{items.features5}</label> <span>{items.value5}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="quar-Apartmentain__right">
                                        <div className="quar-Apartment-image">
                                            <img src={items.imgsrc} className="ImgText-img1" alt='market-img' />
                                        </div>
                                    </div>
                                </div>
                            </>

                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Apartment;