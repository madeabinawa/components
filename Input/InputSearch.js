import React from 'react'
import {
  InputGroup,
  FormControl,
  Button
} from 'react-bootstrap'
import {
  IoSearchOutline
} from 'react-icons/io5'

const InputSearch = ({name, value, placeholder, onChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <FormControl
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <InputGroup.Append>
          <Button 
            variant="primary"
            type="submit"
          >
            <IoSearchOutline />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </form>
  )
}

export default InputSearch
