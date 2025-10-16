import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'

function SearchBar({ setSearchTerm }) {
  return (
    <div className="mb-4">
      <InputGroup>
        <InputGroup.Text>Search</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Type a name..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
    </div>
  )
}

export default SearchBar


