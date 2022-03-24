import React, {useState, Fragment }from 'react';
import './widgetSection.css'


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
      <div className="section ">
        <div>
          {groupName}
        </div>
        <div className="widgets">
          {selections.map((each, index)=>{
            return (
              <div 
                key={index}
                onClick={()=>clickWidget(index)}
                className={ selectedwidget=== index? "widget active":"widget"}>{each} 
                
              </div>)
          })}
        </div>
      </div>
    </Fragment>
  )
}


export default WidgetSection;
