const pool = require('../config/db')

const getTeacherCohort = (req, res) => {
    const { tc_id } = req.body
    pool.getConnection((err, conn) => {
        if(err) res.status(400).send('Connection Error');
        else {
          let sql = 'SELECT * FROM Cohort WHERE TC_id = ?'
          
          conn.query(sql, [tc_id], (err, result) => {
              if(err) res.status(400).send('Querry Error');
              else {
                if(result.length > 0) {
                    res.json(result)
                }
                else {
                    res.status(401)
                    res.json({ message: "No Data Found" })
                }
              }
              conn.release();
            })
          }
      })
}

const getTeacherCourses = (req, res) => {
  const { cu_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `SELECT * FROM Course a INNER JOIN CurriculumDetails b ON a.CO_id=b.CO_id WHERE CU_id = ?;`
        
        conn.query(sql, [cu_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length > 0) {
                  res.json(result)
              }
              else {
                  res.status(401)
                  res.json({ message: "No Data Found" })
              }
            }
            conn.release();
          })
        }
    })
}

const getTeacherSessionPlans = (req, res) => {
  const { co_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `SELECT SessionPlan.SP_id,SessionPlan.SP_Name,SessionPlan.SP_Duration,SessionPlan.SP_Sequence,SessionPlan.CO_id FROM SessionPlan,CompletedSession WHERE SessionPlan.SP_id=CompletedSession.SP_id ORDER BY SessionPlan.SP_id`
        /*`SELECT * FROM SessionPlan WHERE SP_id = (SELECT SP_id FROM completedsession WHERE CO_id=?);` */
        conn.query(sql , (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length > 0) {
                  res.json(result)
              }
              else {
                  res.status(401)
                  res.json({ message: "No Data Found" })
              }
            }
            conn.release();
          })
        }
    })
}

const getTeacherSections = (req, res) => {
  const { sp_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = "SELECT * FROM SessionSection WHERE SP_id = ?;"
        
        conn.query(sql, [sp_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length > 0) {
                  res.json(result)
              }
              else {
                  res.status(401)
                  res.json({ message: "No Data Found" })
              }
            }
            conn.release();
          })
        }
    })
}

const getContent = (req, res) => {
  const { ct_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `SELECT * FROM Content WHERE  CT_id= ?;`
        
        conn.query(sql, [ct_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length > 0) {
                  res.json(result)
              }
              else {
                  res.status(401)
                  res.json({ message: "No Data Found" })
              }
            }
            conn.release();
          })
        }
    })
}

const getSessionStatus = (req, res) => {
  const { co_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `SELECT * FROM CompletedSession WHERE  Co_id= ?;`
        
        conn.query(sql, [co_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              res.json(result)
            }
            conn.release();
          })
        }
    })
}

const unlockSession = (req, res) => {
  const { ch_id, sp_id, co_id, tc_id, to_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `INSERT INTO CompletedSession (CH_id, SP_id, CS_CompletionDate, CS_StartDate, CO_id, TC_id, TO_id) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 5 day), NOW(), ?, ?, ?);`
        
        conn.query(sql, [ch_id, sp_id, co_id, tc_id, to_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else res.json(result)
            conn.release();
          })
        }
    })
}


module.exports = { getTeacherCohort, getTeacherCourses, getTeacherSessionPlans, getTeacherSections, getContent, getSessionStatus, unlockSession }