import { Typography } from '@material-ui/core'
import React from 'react'
import "./Footer.css"
import resumeData from '../../utils/resumeData'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <Typography className='footer_name'>{resumeData.name}</Typography>
      </div>
      <div className='footer_right'>
      <Typography className='footer_copyright'>
        Designed and Developed by <a href='/' target='_blank'>Sapana Shah</a>
        <br/>
        Clone idea from <a href='https://themeforest.net/user/tavonline' target="_blank">Travonline</a>.

      </Typography>
      </div>
    </div>
  )
}

export default Footer