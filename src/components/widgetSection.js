import React, { Fragment }from 'react';
import './widgetSection.css'


const WidgetSection = ({data}) =>{
  
  const {groupName, selection} = data;
  
  return (
    <Fragment>
      <div className="section ">
        <div>
          {groupName}
        </div>
        <div className="widgets">
          {selection.map((each, index)=>{
            return (
              <div 
                key={index}
                className="widget">{each} 
              </div>)
          })}
        </div>
      </div>
    </Fragment>
  )
}


export default WidgetSection;
