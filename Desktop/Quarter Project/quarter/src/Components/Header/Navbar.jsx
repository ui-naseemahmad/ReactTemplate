import NavbarData from "./NavbarData"
import { MdOutlineCancel } from "react-icons/md";
const logosrc = 'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/logo.png';

function Navbar(props) {


    return (
        <>
            <div  className={`qur-headerNav`} >
                <div className="logoImg--Nav">
                    <img src={logosrc} alt="logo" /> <span onClick={props.toggles}> <MdOutlineCancel /></span>
                </div>
                <div class="pre-search__form">
                    <form action="#">
                        <input type="text" placeholder="Search..." />
                        <button><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                    </form>
                </div>
                <ul>
                    {NavbarData.map((items) => {
                        return (
                            <li><a href={items.link} title={items.text}>{items.text}
                                <span className="navBarIcon">{items.icon}</span></a></li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
export default Navbar;