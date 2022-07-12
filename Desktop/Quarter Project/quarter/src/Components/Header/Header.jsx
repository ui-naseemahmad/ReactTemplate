import React, { useState , useEffect } from "react";
import Logo from './Logo'
import Navbar from './Navbar';
import "./Header.css";
import HeaderIcons from "./HeaderIcons";

 function Header(){
    const [isOpen,setIsopen]=useState(false)
    function Toggle(){
        isOpen==true ? setIsopen(false):setIsopen(true)
    }

const [scroll, setScroll] = useState(false)
useEffect(() => {
    window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 400)
    });
})
    return(
        <>
          <div className={`qur-headerSection ${isOpen ? 'nav-open' : null } ${scroll ? 'navSticky' : null}`}>
             <div className="container">
                 <div className="headerMain">
                     <Logo />
                     <Navbar toggles={Toggle} />
                     <HeaderIcons  open={isOpen} Toggle={()=>Toggle()}/>
                 </div>
             </div>

          </div>
        </>
    )

 }
export default Header;