import { useState } from 'react'
import './App.css'
import Counter from './Componenets/Counter'

function App() {

  let [flag, setFlag] = useState(false);

  const changeflag = () => {
    setFlag(!flag);
  }
  // console.log(" changeflag")

  return (
    <div>
      <h1>React Life Cycle{input}</h1>
      <form>
        <input type="text"/>
      </form>
      <button onClick={changeflag}>Toggel data</button>
      { flag? <Counter/> : null }
    </div>
  )
}

      export default App;
