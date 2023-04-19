import './App.css';
import Header from './components/Header';
import Reels from './components/Reels';
import Level from './components/Level';

function App() {

  return (
    <div className="App">
     <Header title='FRUIT SPINNER'/>
     <Reels />
     <Level level={0}/>
    </div>
  )
}

export default App
