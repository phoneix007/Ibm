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
        let sql = `SELECT * FROM SessionPlan WHERE CO_id = ?;`
        
        conn.query(sql , [co_id], (err, result) => {
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
        let sql = `SELECT * FROM CompletedSession WHERE Co_id= ?;`
        
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
  const { ch_id, sp_id, co_id, tc_id, tp_id } = req.body
  
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `INSERT INTO CompletedSession (CH_id, SP_id, CS_CompletionDate, CS_StartDate, CO_id, TC_id, TP_id) VALUES (?, ?, DATE_ADD(NOW(), INTERVAL 5 day), NOW(), ?, ?, ?);`
        
        conn.query(sql, [ch_id, sp_id, co_id, tc_id, tp_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else res.json(result)
            conn.release();
          })
        }
    })
}

const getContentStatus = (req, res) => {
  const { tc_id } = req.body
  
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error')
      else {
        let sql = `SELECT * FROM CompletedContent WHERE TC_id = ?`
        
        conn.query(sql, [tc_id], (err, result) => {
            if(err) res.status(400).send('Querry Error')
            else res.json(result)
            conn.release()
          })
        }
    })
}

const markContentStatus = (req, res) => {
  const { tc_id, ss_id, sp_id, tp_id } = req.body
  
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error')
      else {
        let sql = `INSERT INTO CompletedContent (TC_id, SS_id, SP_id, CompleteDate) SELECT ?, ?, ?, NOW() WHERE NOT EXISTS (SELECT * FROM CompletedContent WHERE TC_id=? AND SS_id=? AND SP_id=?)`        
        conn.query(sql, [tc_id, ss_id, sp_id,tc_id, ss_id, sp_id], (err, results) => {
            if(err) res.status(400).send(err)
            else {
              let sql = 'UPDATE CompletedSession CS INNER JOIN (SELECT tb1.SP_id, tb1.TC_id FROM (select *,count(SP_id) as count from CompletedContent group by SP_id) as tb1,(select *,count(SP_id) as count from SessionSection group by SP_id ) as tb2 WHERE tb1.count=tb2.count AND tb1.SP_id = tb2.SP_id) v ON CS.TC_id=v.TC_id AND CS.SP_id=v.SP_id AND CS.TC_id=? AND CS.TP_id=? SET CS.STATUS=1, CS.CS_CompletionDate=NOW()';
              
              conn.query(sql, [tc_id, tp_id], (err, result) => {
                  if(err) res.status(400).send('Querry Error');
                  else {
                    res.json(result)
                  }
                })
            }
            conn.release()
          })
        }
    })
}


module.exports = { getTeacherCohort, getTeacherCourses, getTeacherSessionPlans, getTeacherSections, getContent, getSessionStatus, unlockSession, getContentStatus, markContentStatus }