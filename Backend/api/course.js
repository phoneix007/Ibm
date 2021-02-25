const express = require('express');
const pool = require('../config');
const router = express.Router();

router.get('/:co_id', (req, res) => {
  pool.getConnection((err, conn) => {
    if(err) res.status(400).send('Connection Error');
    else {
      let sql = `SELECT * FROM SessionPlan WHERE CO_id = ?;`;
      conn.query(sql, [req.params.co_id], (err, result) => {
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