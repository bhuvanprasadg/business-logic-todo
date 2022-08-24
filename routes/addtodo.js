const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const conn = require("../config/db");

router.post("/",jsonParser, async (req, res) => {
    try {
        console.log("Create Todo called");
        conn.query("INSERT INTO todo(name) values($1)", [req.body.name], function (err, data, fields) {
            res.json({
                status: "success",
                message: "todo created!",
              });
        });
    } catch (err) {
        res.json({
            error: err.toString(),
        });
    }
});

module.exports = router;