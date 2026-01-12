import React from 'react'
import { useState } from 'react'
const Useeffect = () => {
    const[Count,SetCount]=useState(0)
    const[Randomnumber,SetRandomNumber]=useState(null)
    const Minus =()=>{
        SetCount(Count-1)
    }
    const Add=()=>{
        SetCount(Count+1)
    }
    const reset=()=>{
        SetCount(0)
    }
    const generaterandomnum=()=>{
        const Randomnumber=Math.floor(Math.random()*100)
        SetRandomNumber(Randomnumber)
    }
  return (
    <>
    <h1>Count</h1>
    <h2>{Count}</h2>
    <button onClick={Add}>increase</button>
    <button onClick={reset}>Reset</button>
    <button onClick={Minus}>Minus</button>
    <hr/>
    <h1>Random Number:{Randomnumber} </h1>
    <button onClick={generaterandomnum}>generate number</button>
      
    </>
  )
}

export default Useeffect
