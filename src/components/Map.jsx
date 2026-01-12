import React from 'react'

const Map = () => {
    const Names=['westley','wess','Mercy','Rathan']
  return (
    <>
      <h2>understanding Maps</h2>
      <ul>
        {Names.map((i,index)=>(
            
            <li key={index}>{i}</li>
        ))}
      </ul>
    </>
  )
}

export default Map
