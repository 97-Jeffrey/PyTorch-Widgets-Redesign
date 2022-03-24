import React, { Fragment }from 'react';
import "./commandSection.css";

const CommandSection = ({ selectedWidgetsData}) =>{

  console.log(selectedWidgetsData)
  const {
    "PyTorch Build": pytorch, 
    "Your OS":os, 
    Package,
    "Language":language,
    "Compute Platform":platform

  } = selectedWidgetsData
  return (
    <Fragment>
      <div className='command-text'>
        Run this Command:
      </div>
      <div className="command">
         cmd:{pytorch} {os} {Package} {language} {platform}
      </div>
    </Fragment>
  )
}

export default CommandSection;