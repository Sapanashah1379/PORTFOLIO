import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import WebOutlined from "@material-ui/icons/WebOutlined";
import AssignmentOutlined from "@material-ui/icons/WebOutlined";
// import Language from "material-ui/icons/Language";
// import YouTube from 'react-youtube';


export default {
  name: "sapana thakuri",
  title: "Fresher",
  email: "Sapu250@gmail.com",
  birthday: "dec 18  1999",
  address: "Nepalgunj",
  phone: "9741810419",

  socials: {
    facebook: {
      link: "https://www.facebook.com",
      text: "My facebook",
      icon: <FacebookIcon />,
    },

    GitHub: {
      link: "https://www.GitHub.com",
      text: "My github",
      icon: <GitHubIcon />,
    },

    LinkedIn: {
      link: "https://www.linkined.com",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    Twitter: {
      link: "https://www.Twitter.com",
      text: "My Twiter",
      icon: <TwitterIcon />,
    },
  },

  about: "hello my name is sapana",

  experiance: [
    {
      title: "Calculator",
      description: "I build app calculator that can add,subtract,divide amd multiply two numbers.",
    },
    {
       title: "Recycler View",
       description: "I build Recycler View.",
    },

    {
      title: "PORTFOLIO",
      description: "I build Portfolio.",
   },
  ],

  education: [
    {
      title: " School Leaving Certificate",
      date: "2001 - 2014",
      description: "First Division with 75 %",
    },

    {
      title: "HSEB",
      date: "2014 - 2016",
      description: "first Division with 67 %",
    },
    {
      title: "Bachelors in Computer Engineering",
      date: "2022 - Present",
      description: "hello there",
    },
  ],
  services: [
    {
      title: "FRONT END",
      description: "Have knwoledge in Front End development",
      icon: <WebOutlined />,
    },
  ],

  skills: [
    {
      title: "FONT-END",
      description: [
        "ReactJS",
        "JavaScripts",
        "TypeScripts",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BLACK-END",
      description: ["NodeJS", "Java", "Python"],
    },
    {
      title: "DATABASES",
      description: [" Ms SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "Github"],
    },
  ],
  projects: [
    {
      tag: "React",
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=xe5wFisD&id=6C5424FFD1144B5D127D2AE0E41548EB00F6F863&thid=OIP.xe5wFisD_Hf_Y8vp5OvSdwHaFj&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.c5ee70162b03fc77ff63cbe9e4ebd277%3Frik%3DY%252fj2AOtIFeTgKg%26riu%3Dhttp%253a%252f%252f3.bp.blogspot.com%252f-Mf0HnLsXRGg%252fTyi-KvqFPMI%252fAAAAAAAABlQ%252fb6wE-yBD7l8%252fs1600%252fn4.jpg%26ehk%3Dio6FWFR5rxXwOJ7ZhYeNxy9QB8ZhdZU6dC5FGW%252fgXdM%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=1200&expw=1600&q=photos&simid=608037279223595612&form=IRPRST&ck=FCEA1AE9B86C2A4192AFD32D5C14CC93&selectedindex=2&ajaxhist=0&ajaxserp=0&vt=0&sim=11",
      title: "REACT",
      caption: "a short description ",
      description: "Project description",
      links: [
        { link: "https://www.facebook.com", icon: <YouTube /> },
        { link: "https://www.facebook.com", icon: <GitHubIcon /> },
        // { link: "https://www.facebook.com", icon: <Language /> },
      ],
    },
    {
      tag: "Python",
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=xe5wFisD&id=6C5424FFD1144B5D127D2AE0E41548EB00F6F863&thid=OIP.xe5wFisD_Hf_Y8vp5OvSdwHaFj&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.c5ee70162b03fc77ff63cbe9e4ebd277%3Frik%3DY%252fj2AOtIFeTgKg%26riu%3Dhttp%253a%252f%252f3.bp.blogspot.com%252f-Mf0HnLsXRGg%252fTyi-KvqFPMI%252fAAAAAAAABlQ%252fb6wE-yBD7l8%252fs1600%252fn4.jpg%26ehk%3Dio6FWFR5rxXwOJ7ZhYeNxy9QB8ZhdZU6dC5FGW%252fgXdM%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=1200&expw=1600&q=photos&simid=608037279223595612&form=IRPRST&ck=FCEA1AE9B86C2A4192AFD32D5C14CC93&selectedindex=2&ajaxhist=0&ajaxserp=0&vt=0&sim=11",
      title: "Python",
      caption: "a short description ",
      description: "Project description",
      links: [
        { link: "https://www.facebook.com", icon: <YouTube /> },
        { link: "https://www.facebook.com", icon: <GitHubIcon /> },
        // {link: 'https://www.facebook.com', icon: <Language />}
      ],
    },

    {
      tag: "JavaScript",
      image:
        "https://www.bing.com/images/search?view=detailV2&ccid=xe5wFisD&id=6C5424FFD1144B5D127D2AE0E41548EB00F6F863&thid=OIP.xe5wFisD_Hf_Y8vp5OvSdwHaFj&mediaurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.c5ee70162b03fc77ff63cbe9e4ebd277%3Frik%3DY%252fj2AOtIFeTgKg%26riu%3Dhttp%253a%252f%252f3.bp.blogspot.com%252f-Mf0HnLsXRGg%252fTyi-KvqFPMI%252fAAAAAAAABlQ%252fb6wE-yBD7l8%252fs1600%252fn4.jpg%26ehk%3Dio6FWFR5rxXwOJ7ZhYeNxy9QB8ZhdZU6dC5FGW%252fgXdM%253d%26risl%3D%26pid%3DImgRaw%26r%3D0&exph=1200&expw=1600&q=photos&simid=608037279223595612&form=IRPRST&ck=FCEA1AE9B86C2A4192AFD32D5C14CC93&selectedindex=2&ajaxhist=0&ajaxserp=0&vt=0&sim=11",
      title: "javascript",
      description: "Project description",
      caption: "a short description ",
      links: [
        { link: "https://www.facebook.com", icon: <YouTube /> },
        { link: "https://www.facebook.com", icon: <GitHubIcon /> },
        // {link: 'https://www.facebook.com', icon: <Language />}
      ],
    },
  ],
};
