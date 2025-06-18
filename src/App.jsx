import { useState } from 'react';
import './App.css'
import Counter from './Componenets/Counter';

function App() {

  let [flag,setflag]=useState(false);
  // console.log(flag)

  const Changflag =()=>{
    setflag(!flag);
  }
  // console.log(Changflag)

  return (
    <>
    <h1>React life Cycle</h1>
    <button onClick={Changflag}>ToggelBtn</button>
    <hr />
    {flag? <Counter/> : null}
    </>
  )
}

export default App;
