const pool = require("../config/db");

const getTeacherCohort = (req, res) => {
	const { tc_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = "SELECT * FROM Cohort WHERE TC_id = ?";

			conn.query(sql, [tc_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else {
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

const getTeacherCourses = (req, res) => {
	const { cu_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `SELECT * FROM Course a INNER JOIN CurriculumDetails b ON a.CO_id=b.CO_id WHERE CU_id = ?;`;

			conn.query(sql, [cu_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else {
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

const getTeacherSessionPlans = (req, res) => {
	const { co_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `SELECT * FROM SessionPlan WHERE CO_id = ?;`;

			conn.query(sql, [co_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else {
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

const getTeacherSections = (req, res) => {
	const { sp_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = "SELECT * FROM SessionSection WHERE SP_id = ?;";

			conn.query(sql, [sp_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else {
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

const getContent = (req, res) => {
	const { ct_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `SELECT * FROM Content WHERE  CT_id= ?;`;

			conn.query(sql, [ct_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else {
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

const getSessionStatus = (req, res) => {
	const { co_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `SELECT * FROM CompletedSession WHERE Co_id= ?;`;

			conn.query(sql, [co_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else {
					res.json(result);
				}
				conn.release();
			});
		}
	});
};

const unlockSession = (req, res) => {
	const { ch_id, sp_id, co_id, tc_id, tp_id } = req.body;

	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `INSERT INTO CompletedSession (CH_id, SP_id, CS_CompletionDate, CS_StartDate, CO_id, TC_id, TP_id) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 5 day), NOW(), ?, ?, ?);`;

			conn.query(sql, [ch_id, sp_id, co_id, tc_id, tp_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else res.json(result);
				conn.release();
			});
		}
	});
};

const getContentStatus = (req, res) => {
	const { tc_id } = req.body;

	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `SELECT * FROM CompletedContent WHERE TC_id = ?`;

			conn.query(sql, [tc_id], (err, result) => {
				if (err) res.status(400).send("Querry Error");
				else res.json(result);
				conn.release();
			});
		}
	});
};

const markContentStatus = (req, res) => {
	const { tc_id, ss_id, sp_id, tp_id } = req.body;

	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			let sql = `INSERT INTO CompletedContent (TC_id, SS_id, SP_id, CompleteDate) SELECT ?, ?, ?, NOW() WHERE NOT EXISTS (SELECT * FROM CompletedContent WHERE TC_id=? AND SS_id=? AND SP_id=?)`;
			conn.query(
				sql,
				[tc_id, ss_id, sp_id, tc_id, ss_id, sp_id],
				(err, results) => {
					if (err) res.status(400).send(err);
					else {
						let sql =
							"UPDATE CompletedSession CS INNER JOIN (SELECT tb1.SP_id, tb1.TC_id FROM (select *,count(SP_id) as count from CompletedContent group by SP_id) as tb1,(select *,count(SP_id) as count from SessionSection group by SP_id ) as tb2 WHERE tb1.count=tb2.count AND tb1.SP_id = tb2.SP_id) v ON CS.TC_id=v.TC_id AND CS.SP_id=v.SP_id AND CS.TC_id=? AND CS.TP_id=? SET CS.STATUS=1, CS.CS_CompletionDate=NOW()";

						conn.query(sql, [tc_id, tp_id], (err, result) => {
							if (err) res.status(400).send("Querry Error");
							else {
								res.json(result);
							}
						});
					}
					conn.release();
				}
			);
		}
	});
};

const getTeacherAssessments = (req, res) => {
	console.log("hi");
	const { co_id } = req.body;
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {
			//let sql = `SELECT * FROM assessment WHERE CO_id = ?;`;
			let sql=`select AM.CO_id, AM.AM_id, AM.AM_Name, CA.CA_status from assessment AM LEFT JOIN cohorassessment as CA ON AM.AM_id = CA.AM_id WHERE AM.CO_id=?;`
			conn.query(sql, [co_id], (err, result) => {
				if (err) res.status(400).send(err);
				else {
					if (result.length > 0) {
						res.json(result);
					} else {
						res.status(401);
						res.json({ message: "No Data Found" });
					}
				}
				conn.release();
			});
		}
	});
};

const updateTeacherAssessments = (req, res) => {
	const { ch_id, tc_id, tp_id, am_id, co_id, CA_status } = req.body;
	console.log(ch_id, tc_id, tp_id, am_id, co_id, CA_status)
	pool.getConnection((err, conn) => {
		if (err) res.status(400).send("Connection Error");
		else {

			if(CA_status == null)
			{//let sql0='select CH_id from cohort where TC_id=? and TP_id=? and CU_id=(select CU_id from curriculumdetails where CO_id=?)'
			let sql = `insert into cohorassessment (CH_id, TC_id, TP_id, CA_status,AM_id,CO_id) values(?,?,?,'U',?,?);`;
			// console.log("hiiiiiiiii")
			conn.query(sql, [ch_id, tc_id, tp_id, am_id, co_id], (err, result) => {
				
				if (err) res.status(400).send(err);
				// else {
				// 	console.log(req.body);
				// 	if (result.length > 0) {
				// 		res.json(result);
				// 		//console.log("helloooo");
				// 	} else {
				// 		res.status(401);
				// 		res.json({ message: "No Data Found" });
						
				// 	}
				// }
			});}

			else if(CA_status == "U")
			{//let sql0='select CH_id from cohort where TC_id=? and TP_id=? and CU_id=(select CU_id from curriculumdetails where CO_id=?)'
				let sql = `update cohorassessment set CA_status='E' WHERE CH_id=? AND TC_id=? AND TP_id=? AND AM_id=? AND CO_id=?`;
				 console.log(CA_status);
				conn.query(sql, [ch_id, tc_id, tp_id, am_id, co_id], (err, result) => {
					
					if (err) res.status(400).send(err);
					else {
						console.log(req.body);
						if (result.length > 0) {
							res.json(result);
							//console.log("helloooo");
						} else {
							res.status(401);
							res.json({ message: "No Data Found" });
							//console.log("lul");
						}
					}
				});}
	




		}
	});
};

module.exports = {
	getTeacherAssessments,
	updateTeacherAssessments,
	getTeacherCohort,
	getTeacherCourses,
	getTeacherSessionPlans,
	getTeacherSections,
	getContent,
	getSessionStatus,
	unlockSession,
	getContentStatus,
	markContentStatus,
};
