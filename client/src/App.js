import logo from './logo.svg';
import Tabs from './components/Tabs';
import './App.css';

function App() {

  const tabsArray = [
    {
      label: 'tab 1',
      content: 'tab 1 content is showing here'
    },
    {
      label: 'tab 2',
      content: 'tab 2 content is showing here'
    },
    {
      label: 'tab 3',
      content: 'tab 3 content is showing here'
    }
  ]
  console.log(tabsArray)



  return (
    <div className="App">
      <Tabs array={tabsArray} />
    </div>
  );
}

export default App;
