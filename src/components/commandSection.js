import React, { Fragment }from 'react';

// import CSS :
import "../styling/commandSection.css";

const CommandSection = ({ selectedWidgetsData }) =>{

  const {
    "PyTorch Build": pytorch, 
    "Your OS":os, 
    Package,
    "Language":language,
    "Compute Platform":platform
  } = selectedWidgetsData;
  
  return (
    <Fragment>
      <div className='command-text'>
        Run this Command:
      </div>
      <div className="command">
         <div>cmd: {pytorch} {os} {Package} {language} {platform}</div>
      </div>
    </Fragment>
  )
}

export default CommandSection;