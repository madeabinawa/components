import React from 'react'

const Td = ({children, colSpan, rowSpan, textRight}) => {
  return (
    <td 
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={`p-1 px-2 align-middle ${textRight && 'text-right'}`}
      style={{
        fontSize: '14px'
      }}
    >
      {children}
    </td>
  )
}

export default Td
