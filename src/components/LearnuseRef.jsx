import React, { useRef, useState } from 'react'

const LearnuseRef = () => {
    const[name,setName]=useState("")
    const anything=useRef("enter you name ")
    console.log(anything)
    const previousName=useRef("")
    const cleartext=()=>{
        setName("")
        anything.current.focus()
    }
    const handleinput =(e)=>{
        previousName.current= name;
        setName(e.target.value)}
  return (
    <>
      <h1>understanding useRef</h1>
      <input ref={anything} type="text" value={name} onChange={handleinput}/>
      <button onClick={cleartext}>clear</button>
      <h2>previousName{previousName.current}</h2>
    </>
  )
}

export default LearnuseRef
