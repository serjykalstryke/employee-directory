import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="row" id="header">
			<div className="col">
				<h1>Employee Directory</h1>
				<p>
					Start typing an employee's first name, last name, or phone number. You
					can also click on The first and last name column headers to sort by
					employee name
				</p>
			</div>
		</div>
	);
};

export default Header;
