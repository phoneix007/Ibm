const express = require('express');
const pool = require('../config');
const router = express.Router();



// @route   GET /session/id 
// @desc    Return Contents per Session based on Session Id from Courses
// @access  Public
router.get('/:sp_id', (req, res) => {
  pool.getConnection((err, conn) => {
    if(err) res.status(400).send('Connection Error');
    else {
      let sql = "SELECT * FROM SessionSection WHERE SP_id = ?;"
      conn.query(sql, [req.params.sp_id], (err, result) => {
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

// @route   GET session/content/:id 
// @desc    Return Content Data by Content ID from SessionSection
// @access  Public
router.get('/content/:ct_id', (req, res) => {
  pool.getConnection((err, conn) => {
    if(err) res.status(400).send('Connection Error');
    else {
      let sql = `SELECT * FROM Content WHERE  CT_id= ?;`;
      conn.query(sql, [req.params.ct_id], (err, result) => {
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
