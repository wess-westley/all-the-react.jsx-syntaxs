import React from 'react'
import useCounter from '../Hooks/UseCounter'
const CreationofcustomHooks = () => {
    const{decrement,reset,increment,count}=useCounter(5)
  return (
    <>
      <h1>Custom Hooks </h1>
      <h2>counter:{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default CreationofcustomHooks
