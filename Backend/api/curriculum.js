const express = require('express');
const pool = require('../config');
const router = express.Router();



// @route   GET /curriculum
// @desc    Return curriculum data
// @access  Public
router.get('/', (req, res) => {
    pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `SELECT * FROM Curriculum;`;
        conn.query(sql, (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else res.send(result);
            conn.release();
          });
        }
    });
  });

// @route   GET /curriculum/id
// @desc    Return Courses mapped to curriculum 
// @access  Public
router.get('/courses/:id', (req, res) => {
    pool.getConnection((err, conn) => {
      if(err) res.status(400).send('Connection Error');
      else {
        let sql = `select * from Course a inner join CurriculumDetails b on a.CO_id=b.CO_id WHERE CU_id = ?;`;
        conn.query(sql, [req.params.id], (err, result) => {
            if(err) res.status(400).send('Querry Error');
            else {
              if(result.length !== 0) res.send(result);
              else res.json({ error: 'No Data Found' });
            }
            conn.release();
          });
        }
    });
});

module.exports = router;