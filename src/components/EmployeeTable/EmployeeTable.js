import React, { useState } from 'react';
import "./EmployeeTable.css"

const EmployeeTable = props => {
  return (
    <div className="container">
      <table className="table table-hover">
        <thead>
          <tr className="row">
            <th className="col">Image</th>
            <th className="col">Name</th>
            <th className="col">Phone</th>
            <th className="col">Email</th>
            <th className="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(employee => (
            <tr key={employee.login.username} className="row">
              <td className="col">
              <img src={employee.picture.thumbnail} alt='Thumbnail' />
            </td>
            <td className="col">{`${employee.name.first} ${employee.name.last} `}</td>
              <td className="col">{employee.phone}</td>
              <td className="col">{employee.email}</td>
              <td className="col">{employee.dob.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
