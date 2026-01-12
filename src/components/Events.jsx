import React from 'react'

const Events = () => {
    const handleclick=()=>{
        return alert("clicked")
    }
    const handleClickAgain=(message)=>{
        return console.log(message)
    }
  return (
    <>
      <button onClick={handleclick}>click here</button>
      <br/>
      <button onClick={() => handleClickAgain("clicked again")}>
  click again
</button>


    </>
  )
}

export default Events
