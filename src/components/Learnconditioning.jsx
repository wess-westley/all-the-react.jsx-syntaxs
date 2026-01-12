import React, { useState } from 'react'

const Learnconditioning = () => {
    const[islogged,setisloggedin]=useState(false)
    const[status,Setstatus]=useState(true)
  return (
    <>
    
      <h4>conditioning </h4>
      {islogged ? (
        <h2>welcom user!</h2>
      ):(
        <h2> Please log in </h2>
      )
      }
      {status && (<h3>show data</h3>)}
    </>
  )
}

export default Learnconditioning
