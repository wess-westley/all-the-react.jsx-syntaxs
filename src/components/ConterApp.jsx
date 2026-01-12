import React from 'react'
import { useState } from 'react'
const ConterApp = () => {
    const[number,setNumber]=useState(0)
    const reset= ()=>{
        setNumber(0)
    }
    const increase = () =>{
        setNumber(number+1)
        if(number>100){
            alert('max reached')
            return number;
        }
    }
   const decrease = () => {
  setNumber(prev => {
    if (prev <= -100) {
      alert("Min reached")
      return prev 
    }
    return prev - 1
  })
}

  return (
    <>
      <h1> {number}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increase}>+</button>
    </>
  )
}

export default ConterApp
