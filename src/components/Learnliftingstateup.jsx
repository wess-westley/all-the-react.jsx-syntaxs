import React from 'react'

const Learnliftingstateup = (props) => {
    const handleclick=()=>{
        let stock ="tesla";
        props.getstock(stock)

    }
  return (
    <>
      <h1>Lifting state up</h1>
      <button onClick={handleclick}>click here</button>
    </>
  )
}

export default Learnliftingstateup
