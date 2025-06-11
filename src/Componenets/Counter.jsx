import { useState } from "react"
import "./Counter.css"

export default function Counter(){
    let [count ,setcount ]=useState(0);
    let [count2,setcount2]=useState(0);
    console.log(count)

    function incrCount(){
        setcount(count + 1);
    }

    function decCount(){
        setcount(count - 1);
    }

    function incrCount2(){
        setcount2(count2 + 2);
    }

    function decCount2(){
        setcount2(count2 - 2);
    }

    

    return(
        <>
        <section className="counter">
            <h1>Count 1</h1>
            <button onClick={incrCount}>Incr count</button>
            <h1>{count}</h1>
            <button onClick={decCount}>Dec count</button>
        </section>
        <section className="counter">
            <h1>Count 2</h1>
            <button onClick={incrCount2}>Incr count</button>
            <h1>{count2}</h1>
            <button onClick={decCount2}>Dec count</button>
        </section>
        </>
    )
}