import React from 'react'

const Th = ({children}) => {
  return (
    <th 
      className="text-center align-middle"
      style={{
        fontSize: '14px'
      }}
    >
      {children}
    </th>
  )
}

export default Th
