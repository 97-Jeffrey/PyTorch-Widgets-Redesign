import './App.css';
// Component Import: 
import WidgetSection from './components/widgetSection';
import CommandSection from './components/commandSection';

// Data import:
import widgetData from './widgetData';

function App() {
  return (
    <div className="App">
      <div className="widgets-section">
        {widgetData.map((eachData, index)=>{
          return (
            <WidgetSection 
              key={index}
              data={eachData}
          />)
        })} 
      </div>
      <div className='command-section'>
        <CommandSection />
      </div>
    </div>
  );
}

export default App;
