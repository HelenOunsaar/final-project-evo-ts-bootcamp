import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import Reels from './components/Reels';
import Level from './components/Level';
import Win from './components/Win';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header title='FRUIT SPINNER'/>
        <Reels />
        <Level level={0}/>
        <Win />
      </div>
    </Provider>
  )
}

export default App
