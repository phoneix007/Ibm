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

	var teacherCohort = useSelector((state) => state.teacherCohort);
	var { TeacherInfo } = teacherCohort;

	var teacherCourses = useSelector((state) => state.teacherCourses);
	var { CoursesInfo } = teacherCourses;

	const urlVar = useSelector(state => state.urlVar)
    const { urlParameter } = urlVar

	
	var tc_id = userInfo ? userInfo.TC_id : null
	var tp_id = userInfo ? userInfo.TP_id : null
	//var ch_id = useSelector(state=>state.teacherCourses.TeacherInfo[0].CH_id)

	//var co_id = useSelector(state=>state.AssessmentsInfo.CO_id)
	var text="unlock"
	var Getcuid = (tc_id, tp_id, am_id, co_id, CA_status) => {
		text = "lock";
		var cu_id;
		var ch_id;
		for (var i = 0; i < Object.keys(CoursesInfo).length; i++) {
			//console.log(CoursesInfo[i].CO_id)
			if (CoursesInfo[i].CO_id === co_id) {
				cu_id = CoursesInfo[i].CU_id;
			}
			break;
		}
		ch_id=urlParameter.cohortID;

		updateAssessmentDetails(ch_id, tc_id, tp_id, am_id, co_id, CA_status);
		
	};

	useEffect(() => {
		if (userInfo && userRole === "Teacher") {
			dispatch(assessmentDetails(match.params.id));
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
				console.log(key.CA_status)
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

//OnClick
