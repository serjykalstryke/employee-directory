import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm";
import EmployeeTable from "./components/EmployeeTable/EmployeeTable";
import API from "./utils/API";
import Context from "./utils/Context";

import "./App.css";

function App() {
	//* State
	const [employeeState, setEmployeeState] = useState({
		employees: [],
		filteredEmployees: [],
	});
	const [sortState, setSortState] = useState(true);
	const [searchState, setSearchState] = useState("");

	// On page load, make the API call and save results to state
	useEffect(() => {
		API.getEmployees().then(({ data: { results } }) => {
			setEmployeeState({
				employees: results,
				filteredEmployees: results,
			});
		});
	}, []);

	// Whenever searchState (representing the input in the search bar) changes, filter the employee list
	useEffect(() => {
		setEmployeeState({
			...employeeState,
			filteredEmployees: employeeState.employees.filter((employee) => {
				return (
					// allow users to search for first/last name or phone
					employee.name.first.indexOf(searchState) !== -1 ||
					employee.name.last.indexOf(searchState) !== -1 ||
					employee.phone.indexOf(searchState) !== -1
				);
			}),
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchState]);

	// Sort by either name column
	const sortName = (column) => {
		const updateSort = sortState
			? employeeState.filteredEmployees.sort((a, b) =>
					a.name[column].localeCompare(b.name[column])
			  )
			: employeeState.filteredEmployees.sort((a, b) =>
					b.name[column].localeCompare(a.name[column])
			  );
		setEmployeeState({
			...employeeState,
			filteredEmployees: updateSort,
		});
		setSortState(!sortState);
	};

	return (
		<Context.Provider value={{ employeeState, sortName, setSearchState }}>
			<div className="container">
				<Fragment>
					<Header />
					<SearchForm />
					<EmployeeTable />
				</Fragment>
			</div>
		</Context.Provider>
	);
}

export default App;
