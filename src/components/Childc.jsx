import React from 'react'
import { stockcontext } from '../App'
const Childc = () => {
  return (
    <>
      lastborn
      <stockcontext.Consumer>
  {({ stock, price }) => (
    <h2>ChildC = {stock} : {price}</h2>
  )}
</stockcontext.Consumer>

    </>
  )
}

export default Childc
