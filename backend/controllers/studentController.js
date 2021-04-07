const pool = require('../config/db')



const getStudentCourses = (req, res) => {
  const { st_id } = req.body
  console.log(`inside backend st id=${st_id}`)
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        /*let sql1 = `SELECT ch_id FROM COHORTSTUDENT WHERE _id = ?;`
        conn.query(sql1, [st_id], (err, result) => {
          if(err) res.status(400).send('Querry Error');
          else {
            if(result.length > 0) {
                let ch_id=result;
            }
            else {
                res.status(401)
                res.json({ message: "No Data Found" })
            }
          }
          conn.release();
        })*/
        let sql = `SELECT * FROM Course a INNER JOIN CurriculumDetails b ON a.CO_id=b.CO_id WHERE cu_id = ?;`
        let ch_id=st_id;
        console.log(`ch_id:${ch_id}`)
        conn.query(sql, [ch_id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length > 0) {
                  res.json(result)
                  console.log("123")
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

const getStudentSessionPlans = (req, res) => {
  const { co_id } = req.body
  pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `SELECT * FROM SessionPlan WHERE CO_id = ?;`
        
        conn.query(sql, [co_id], (err, result) => {
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

const getStudentSections = (req, res) => {
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


module.exports = {  getStudentCourses, getStudentSessionPlans, getStudentSections, getContent }