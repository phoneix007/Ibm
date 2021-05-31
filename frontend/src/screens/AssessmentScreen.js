import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { updateAssessmentDetails } from "../actions/teacherActions";
import { assessmentDetails } from "../actions/teacherActions";


export var AssessmentScreen = ({ history, match }) => {
	
	var dispatch = useDispatch();

	var userLogin = useSelector((state) => state.userLogin);
	var { userInfo, userRole } = userLogin;

	var assessmentDetail = useSelector((state) => state.assessment);
	var { loading, AssessmentsInfo, error } = assessmentDetail;

	const urlVar = useSelector(state => state.urlVar)
    const { urlParameter } = urlVar

	if(userLogin.userInfo) {
		var tc_id = userInfo.TC_id
		var tp_id = userInfo.TP_id
	}
	

	var Getcuid = (tc_id, tp_id, am_id, co_id, CA_status) => {

		const ch_id = urlParameter.cohortID;

		updateAssessmentDetails(ch_id, tc_id, tp_id, am_id, co_id, CA_status);
		
	};

	useEffect(() => {
		if (userInfo && userRole === "Teacher") {
			dispatch(assessmentDetails(urlParameter.CO_id));
		} else {
			history.push("/login");
		}
	}, [dispatch, history, userRole, userInfo, urlParameter]);

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

								{/* <Link to={`/sections/${key.SP_id}`}><td>{key.SP_Name}</td></Link> */}
								<td>
									{key.AM_Duration === null
										? `${key.AM_Duration}`
										: key.AM_Duration}
								</td>
								<td>
								{/* {key.CA_status === null
										? (<button
											onClick={() => Getcuid(tc_id, tp_id, key.AM_id, key.CO_id)}
										> unlock </button>)
										: (<button
											onClick={() => Getcuid(tc_id, tp_id, key.AM_id, key.CO_id)}
										> end </button>)} */}

{(() => {
            if (key.CA_status == null) {
              return (
                
					<button onClick={() => Getcuid(tc_id, tp_id, key.AM_id, key.CO_id, key.CA_status)}
										> unlock </button>
										
				
              )
            } else if (key.CA_status === "U") {
              return (
                <button onClick={() => Getcuid(tc_id, tp_id, key.AM_id, key.CO_id, key.CA_status)}
				> End assessment </button>			
              )
            } else {
              return (
				<button onClick={() => Getcuid(tc_id, tp_id, key.AM_id, key.CO_id, key.CA_status)}
				> View result </button>

              )
            }
        })()}




								</td>
								{/* <button onClick={Getcuid(tc_id,tp_id,key.AM_id,key.CO_id)}></button> */}
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</>
	);
};

export default AssessmentScreen;
