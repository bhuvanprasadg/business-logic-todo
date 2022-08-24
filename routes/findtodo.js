const express = require("express");
const router = express.Router();
const conn = require("../config/db");

router.get("/", async (req, res) => {
    try {
        console.log("search Todo called");
        conn.query("SELECT * FROM todo WHERE id=$1",[req.query.id], function (err, data, fields) {
            res.json({
                status: "success",
                data: data.rows,
            });
        });
    } catch (err) {
        res.json({
            error: err.toString(),
        });
    }
});

module.exports = router;