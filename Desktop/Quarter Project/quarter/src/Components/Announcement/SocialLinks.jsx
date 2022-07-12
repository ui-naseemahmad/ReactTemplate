import SocialLinksData from "./SocialLinkData";

function SocialLinks(){
    return(
        <>
          <div className="socialLinks">
              <ul>
                  {SocialLinksData.map((items)=>{
                      return(
                          <li><a href={items.icon} title={items.title}>{items.icon}</a></li> 
                      )
                  })}
              </ul>
          </div>
        </>
    )
}
export default SocialLinks;