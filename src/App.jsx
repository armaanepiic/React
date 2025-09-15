import CountDisplay from './components/CountDisplay';
import CounterButtons from './components/CounterButtons';
import Header from './components/Header';

import './App.css'

function App() {

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 text-center'>
      <Header/>
      <CountDisplay/>
      <CounterButtons/>
    </div>
  )
}

export default App;
