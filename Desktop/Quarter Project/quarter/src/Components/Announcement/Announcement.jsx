import React from 'react'
import AnnouncementContDetails from './AnnouncementContDetails';
import SocialLinks from './SocialLinks';
import "./Announcement.css";
import Button from '../Button';





function Announcement() {
  return (
    <div className='qur-AnnoumnetSection'>
      <div className='container'>
      <div className='qur-announcementBar'>
        <div className='qur-left-part'>
          <AnnouncementContDetails />
        </div>
        <div className='qur-right-part'>
          <SocialLinks />
          <Button type='listing' text='Add Lisitng' link='#' />
        </div>
      </div>
      </div>
    </div>
  )
}
export default Announcement;