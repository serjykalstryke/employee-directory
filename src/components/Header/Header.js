import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className="row" id="header">
      <div className="col">
      <h1>Employee Directory</h1>
      <p>Start typing an employee's first or last name to filter by employee's name</p>
      </div>
    </div>
  )
}

export default Header