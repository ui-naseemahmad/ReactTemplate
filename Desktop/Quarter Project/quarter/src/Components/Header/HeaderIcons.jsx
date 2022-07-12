import HeaderIconsData from "./HeaderIconsData";
import { GiHamburgerMenu} from "react-icons/gi";
function HeaderIcons(props){
    return(
        <>
          <div className={`IconsMain`}>

                <ul>
                    {HeaderIconsData.map((items)=>{
                        return(
                            <li >{items}</li>
                        )
                    })}   
                     <li onClick={props.Toggle} ><GiHamburgerMenu /></li>
                </ul>
          </div>
        </>
    )
}

export default HeaderIcons;