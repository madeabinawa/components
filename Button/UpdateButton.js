import React from 'react'
import {
  OverlayTrigger,
  Tooltip,
  Button
} from 'react-bootstrap'
import {
  IoPencilOutline
} from 'react-icons/io5'

const UpdateButton = ({onClick, tooltipText, tooltipPlacement}) => {
  return (
    <OverlayTrigger
      placement={tooltipPlacement}
      overlay={
        <Tooltip>
          {tooltipText ? tooltipText : 'Ubah data'}
        </Tooltip>
      }
    >
      <Button 
        variant="success"
        size="sm"
        className="m-1"
        onClick={onClick}
      >
        <IoPencilOutline/>
      </Button>
    </OverlayTrigger>
  )
}

export default UpdateButton
