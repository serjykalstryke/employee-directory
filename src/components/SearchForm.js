import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Context from "../utils/Context";

const SearchForm = () => {
	const { setSearchState } = useContext(Context);

	return (
		<Form.Control
			type="search"
			placeholder="Search for name or phone"
			onChange={(e) => setSearchState(e.target.value)}
		/>
	);
};

export default SearchForm;
