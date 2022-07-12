import AnnouncementLeftPart from "./AnnouncementData";
function AnnContDetails() {
    return (
        <>
            <div className="Announcement-main">
                <ul>
                    {AnnouncementLeftPart.map((items) => {
                        return (
                            <>
                                <li>
                                    <a href={items.link} rel="noreferrer">
                                        <span className="announcmentIcon">{items.icon}
                                        </span> {items.text}
                                    </a>
                                </li>
                            </>
                        )

                    })}

                </ul>
            </div>
        </>
    )
}
export default AnnContDetails;