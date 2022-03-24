import React, {useState, Fragment }from 'react';
import './widgetSection.css'


const WidgetSection = ({ data, selectedWidgetsData, setSelectedWidgetsData
}) =>{
  
  const {groupName, selection} = data;
  const [selectedwidget, setSelectedWidget]  = useState("");

  const clickWidget = index =>{
    setSelectedWidget(index)
    setSelectedWidgetsData(
      {...selectedWidgetsData, [groupName]: selection[index]}
    )
    
  }
  
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
