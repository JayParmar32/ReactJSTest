import { useEffect, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log(count);
//    console.log(count2)


  const incrementCount = () => {
      setCount(count + 1);
  };

  const decrementCount = () => {
      setCount(count - 1);
  };

  const incrementCount2 = () => {
      setCount2(count2 + 2);
  };

  const decrementCount2 = () => {
      setCount2(count2 - 2);
  };

  useEffect(()=>{
    console.log("only callback function: Everytime");
  })

  useEffect(()=>{
    console.log("callback function with empty array : 1st time load");
  })

  useEffect(()=>{
    console.log("callback  with state arrya : count's state change");
  },[count]);

  useEffect(()=>{
    return()=>{
      console.log("callback with return: component unmount");
    }
  },[])

  return (
    <>
    <div>
      <button onClick={incrementCount}>Increment</button>
      <p>Count: {count}</p>
      <button onClick={decrementCount}>Decrement</button>
    </div>
    <br /><br />
    <div>
      <button onClick={incrementCount2}>Increment</button>
      <p>Count: {count2}</p>
      <button onClick={decrementCount2}>Decrement</button>
    </div>
    </>
  );
}

export default MyComponent;