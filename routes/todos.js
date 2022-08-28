const express = require("express");
const router = express.Router();
const conn = require("../config/db");

router.get("/", async (req, res) => {
    try {
        console.log("All Todo called");
        conn.query("SELECT * FROM todo", function (err, data, fields) {
                res.set('Access-Control-Allow-Origin', '*');
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
