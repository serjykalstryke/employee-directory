import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Items from "../Items";
import Context from "../../utils/Context";

import "./EmployeeTable.css";

const EmployeeTable = () => {
	const { sortName } = useContext(Context);

	return (
		<Container fluid className="employeeTable">
			<Row>
				<Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>Image</th>
							<th className="button" onClick={() => sortName("first")}>
								First Name&nbsp;<i className="fas fa-sort"></i>
							</th>
							<th className="button" onClick={() => sortName("last")}>
								Last Name&nbsp;<i className="fas fa-sort"></i>
							</th>
							<th>Phone</th>
							<th>Email</th>
							<th>DOB</th>
						</tr>
					</thead>

					<Items />
				</Table>
			</Row>
		</Container>
	);
};

export default EmployeeTable;
