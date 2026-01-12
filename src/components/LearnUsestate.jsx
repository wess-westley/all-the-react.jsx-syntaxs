import React from 'react'
import { useState } from 'react'
const LearnUsestate = () => {
    const [num,setNum]=useState(5);
    
    const handlenum=()=>{
      setNum(num+1)
    }
    const[stock,setStock]=useState({stock:"Apple",price: 100})
    console.log(stock)
    const newstockprice=()=>{
      setStock({...stock,price:200})
    }
  return (
    <>
      <h2>Number:{num}</h2>
      <button onClick={handlenum}>
        changeNumber
      </button>
      <hr/>
      <h2>{stock.stock}:{stock.price}</h2>
      <button onClick={newstockprice}>newstockprice</button>
    </>
  )
}

export default LearnUsestate
