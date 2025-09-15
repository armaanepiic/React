import Display from './components/Display';
import CounterButtons from './components/CounterButtons';
import Header from './components/Header';

import './App.css'

function App() {
  let count = 0;

  const increase = () => {
    count++;
    console.log(count);
  }
  const decrease = () => {
    count--;
    console.log(count);
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 text-center'>
      <Header/>
      <Display currentCount={count}/>
      <CounterButtons increment = {increase} decrement={decrease}/>
    </div>
  )
}

export default App;
