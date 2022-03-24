import './App.css';
import WidgetSection from './components/widgetSection';
import widgetData from './widgetData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {widgetData.map((eachData, index)=>{
          return (
            <WidgetSection 
              key={index}
              data={eachData}
          />)
        })}
        
      </header>
    </div>
  );
}

export default App;
