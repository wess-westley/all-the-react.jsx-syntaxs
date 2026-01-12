import React,{useMemo, useState} from 'react'

const LearnUsememo = () => {
    const[count,setcount]=useState(0)
    const[number,setnumber]=useState(10)
    const increasecount=()=>{
        if (count == 10){
            setnumber(9999)
        }
        setcount(count+1)
    }
   const caculatesumofnumber= useMemo(()=>{
    let sum=0;
    for(let i=1;i<=number;i++){
        sum +=i;
        
    }
     return sum;
    },[number])
    console.log(`sum of number form  1 to${number}   `)
  return (
    <>
      <h1>count {count}</h1>
      <button onClick={increasecount}>increase</button>
     <button onClick={() => alert(caculatesumofnumber)}>sum</button>

    </>
  )
}

export default LearnUsememo
