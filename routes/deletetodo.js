const express = require("express");
const router = express.Router();
const conn = require("../config/db");

router.delete("/", async (req, res) => {
    try {
        console.log("delete Todo called");
        conn.query("DELETE FROM todo WHERE id=$1",[req.query.id], function (err, data, fields) {
            res.json({
                status: "success"
            });
        });
    } catch (err) {
        res.json({
            error: err.toString(),
        });
    }
});

module.exports = router;