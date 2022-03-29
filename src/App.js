import React, { useState } from "react";

// Component Import: 
import WidgetSection from './components/widgetSection';
import CommandSection from './components/commandSection';

//Import Data:
import widgetData from './widgetData';

//Import CSS
import './App.css';

function App() {
  
  const [selectedWidgetsData, setSelectedWidgetsData] = useState({
    "PyTorch Build":"Stable(1.11.0)",
    "Your OS":"Linux",
    "Package":"Conda",
    "Language":"Python",
    "Compute Platform":"CUDA 10.2"
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
