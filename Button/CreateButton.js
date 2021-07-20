import React from 'react'
import {
  Button
} from 'react-bootstrap'
import {
  IoAddOutline
} from 'react-icons/io5'

const CreateButton = ({onClick}) => {
  return (
    <Button 
      variant="primary"
      onClick={onClick}
      className="mx-1 mb-1"
    >
      <IoAddOutline size={18} />
      <span className="ml-2 text-uppercase">
        Tambah
      </span>
    </Button>
  )
}

export default CreateButton
