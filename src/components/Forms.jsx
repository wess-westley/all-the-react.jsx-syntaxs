import React from 'react'
import { useState } from 'react'

const Forms = () => {
    const[Firstname,setFirstname]=useState("")
    const [lastname,setlastname]=useState("")
    const handlechange1=(e)=>{
      setFirstname(e.target.value)
    }
    const handlechange2=(e)=>{
      setlastname(e.target.value)
    }
    const handlesubmit=(e)=>{
      e.preventDefault()
      console.log("form submitted",FormData)
    }
  return (
    <>
      <h2>Understanding how to use forms </h2>
      <form action="" onSubmit={handlesubmit}>
        <label>First Name:</label>
        <input type="text" name="Firstname" onChange={handlechange1} value={Firstname}></input>
        <label>Last Name:</label>
        <input type="text" name ="lastname" onChange={handlechange2} value={lastname}></input>
        <input type="submit" value='submit'></input>
         
      </form>
    </>
  )
}

export default Forms
