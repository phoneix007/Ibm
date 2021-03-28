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


module.exports = { getTeacherCohort, getTeacherCourses }