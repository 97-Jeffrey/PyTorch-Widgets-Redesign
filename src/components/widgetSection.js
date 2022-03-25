import React, { useState, Fragment } from 'react';

// import css file
import './widgetSection.css'

// import components:
import Widget from './widget';


const WidgetSection = ({ data, selectedWidgetsData, setSelectedWidgetsData
}) =>{
  
  const {groupName, selections} = data;
  const [selectedwidget, setSelectedWidget]  = useState(0);


  // widget will update Background when clicked
  const clickWidget = index =>{
    setSelectedWidget(index)
    setSelectedWidgetsData(
      {...selectedWidgetsData, [groupName]: selections[index]}
    )
    
  }
  
  return (
    <Fragment>
      <div className="section">
        <div className="section-groupName">
          {groupName}
        </div>
        <div className="widgets">
          {selections.map((selection, index)=>{
            return (
              <Widget 
                key={index}
                index ={index}
                selection={selection}
                onClick={()=>clickWidget(index)}
                selectedwidget={selectedwidget}
              />
              )
          })}
        </div>
      </div>
    </Fragment>
  )
}


export default WidgetSection;
