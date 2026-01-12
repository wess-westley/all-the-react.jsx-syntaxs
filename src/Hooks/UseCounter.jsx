import { useState } from "react";

function useCounter(intialvalue=0){
    const[count,setCount]=useState(intialvalue)
    const increment=()=>{
        setCount(count+1)


    }
    const decrement=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount({intialvalue})
    }
    return{decrement,reset,increment,count}
}
export default useCounter;