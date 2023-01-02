import {Typography} from "@material-ui/core";
import React from 'react';
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import "./Profile.css";
import resumeData from "../../utils/resumeData";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineConnector from "@mui/lab/TimelineConnector";
import CustomButtom from '../Button/Button';
import GetAppIcon from "@material-ui/icons/GetApp";



const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (<Typography className="timelineItem_text">
          <span>{title}:</span> <a href={link} target='_blank'>{text}</a>
        </Typography>) : (
        
        <Typography className="timelineItem_text"><span>{title}:</span>{text}</Typography>
        )}
      </TimelineContent>
  </TimelineItem>
);






const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className='profile_img'>
        <img src={require('../../assests/images/profile.jpg')} alt=""/>
        
      </figure>
      <div className='profile_information'>
       
        <CustomTimeline icon={<PersonOutlineOutlinedIcon/>}>
           <TimelineConnector />
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key)=> (
          <CustomTimelineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
          )
          )
        }
        </CustomTimeline>
        
        <br />
        <div className="button_container"style={{dispaly: "flex"}}>
         <CustomButtom text={'Download CV'}icon={<GetAppIcon />} />
         </div>
      </div>
      </div>
  )
}

export default Profile;
