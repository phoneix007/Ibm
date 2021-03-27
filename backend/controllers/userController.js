const generateToken = require('../utils/generateToken')
const pool = require('../config/db')

const getUsers = (req, res) => {
    const { email, password, role } = req.body
    pool.getConnection((err, conn) => {
        if(err) res.status(400).send('Connection Error');
        else {
          let sql = role === 'Student' ? `SELECT * FROM Student WHERE ST_Username = ? AND ST_Password = ?;` : 'SELECT * FROM Teacher WHERE TE_Emailid = ? AND TE_Password = ? ;'
          
          conn.query(sql, [email, password], (err, result) => {
              if(err) res.status(400).send('Querry Error');
              else {
                if(result.length > 0) {
                    result[0].token = generateToken(result[0].TE_id ? result[0].TE_id : result[0].ST_id) 
                    res.json(result[0])
                }
                else {
                    res.status(401)
                    res.json({ message: "Invalid Email or Password" })
                }
              }
              conn.release();
            })
          }
      })
}


module.exports = { getUsers }