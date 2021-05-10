import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { studentassessmentDetails } from "../actions/studentActions";

export const StudentAssessmentScreen = ({ history, match }) => {
	const dispatch = useDispatch();

	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo, userRole /*loading, error*/ } = userLogin;

	const studentassessment = useSelector((state) => state.studentAssessment);
	const { loading, AssessmentsInfo, error } = studentassessment;

	useEffect(() => {
		if (userRole === "Student") {
			dispatch(studentassessmentDetails(userInfo.ST_id));
		} else {
			history.push("/login");
		}
	}, [dispatch, history, match, userRole, userInfo]);

	return (
		<>
			<h1 style={{ "text-align": "center" }}>Assessments</h1>
			{loading ? (
				<Loader>Loading....</Loader>
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Table
					striped
					bordered
					hover
					borderless
					style={{ margin: "5% 20%", width: "60%", justifyContent: "center" }}
				>
					<thead>
						<tr>
							<th>ASSESSMENT NAME</th>
							<th>ASSESSMENT DURATION</th>
						</tr>
					</thead>
					<tbody>
						{AssessmentsInfo.map((key, index) => (
							<tr key={key.AM_id}>
								<td>{key.AM_Name}</td>

								<td>
									{key.AM_Duration === null
										? `${key.AM_Duration}`
										: key.AM_Duration}
								</td>
								<td>
									<Link to={`/startquizz`}>
									<button>start</button>
											</Link>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default StudentAssessmentScreen;

//<Link to={`/sections/${key.SP_id}`}><td>{key.SP_Name}</td></Link>
