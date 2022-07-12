import "./Counter.css";
import { TbPageBreak } from "react-icons/tb";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlineChair } from "react-icons/md";
import CountUp from 'react-countup';
function Counter() {
    return (
        <>
            <div className="quar-CounterSection">
                <div className="container">
                    <div className="quar-CounterMain">
                        <div className="quar-ounterMain__item">
                            <div className="quar-CounterIcon">
                                <span><TbPageBreak /></span>
                            </div>
                            <h2><CountUp end={560}/>+</h2>
                            <p>Total Area Sq</p>
                        </div>
                        <div className="quar-ounterMain__item">
                            <div className="quar-CounterIcon">
                                <span><HiOutlineOfficeBuilding /></span>
                            </div>
                            <h2><CountUp end={197}/>+</h2>
                            <p>Apartments Sold</p>
                        </div>
                        <div className="quar-ounterMain__item">
                            <div className="quar-CounterIcon">
                                <span><GiFoodTruck /></span>
                            </div>
                            <h2><CountUp end={268}/>+</h2>
                            <p>Total Constructions</p>
                        </div>
                        <div className="quar-ounterMain__item">
                            <div className="quar-CounterIcon">
                                <span><MdOutlineChair /></span>
                            </div>
                            <h2><CountUp end={340}/>+</h2>
                            <p>TApartio Rooms</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter;