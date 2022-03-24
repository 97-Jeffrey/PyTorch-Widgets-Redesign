import React, { useState } from "react";

// Component Import: 
import WidgetSection from './components/widgetSection';
import CommandSection from './components/commandSection';

// Data import:
import widgetData from './widgetData';

//Import CSS
import './App.css';

function App() {
  
  const [selectedWidgetsData, setSelectedWidgetsData] = useState({
    "PyTorch Build":"",
    "Your OS":"",
    "Package":"",
    "Language":"",
    "Compute Platform":""
  })


  return (
    <div className="App">
      <div className="widgets-section">
        {widgetData.map((eachData, index)=>{
          return (
            <WidgetSection 
              key={index}
              data={eachData}
              selectedWidgetsData={selectedWidgetsData}
              setSelectedWidgetsData={setSelectedWidgetsData}
          />)
        })} 
      </div>
      <div className='command-section'>
        <CommandSection 
            selectedWidgetsData={selectedWidgetsData}
        />
      </div>
    </div>
  );
}

export default App;
