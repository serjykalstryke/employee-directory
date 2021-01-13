import React, { useEffect, useState } from 'react';


const SearchForm = ({ employees, filterEmployees }) => {
  const [searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    const filteredEmployees =
      searchTerm === ''
        ? employees
        : employees.filter(
            ({ name: { first, last } }) =>
              first.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0          );

    filterEmployees(filteredEmployees);
  }, [searchTerm, employees]);

  return (
    <div id="header" className="input-group">
      <div class="input-group-prepend">
    <span class="input-group-text" id="">First or Last name</span>
  </div>
    <input className="form-control" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} /> 
  
    </div>
  );
};

export default SearchForm;
