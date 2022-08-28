const express = require("express");
const app = express();
const todos = require("./routes/todos");
const addtodo = require("./routes/addtodo");
const findtodo = require("./routes/findtodo");
const deletetodo = require("./routes/deletetodo");
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Private-Network',true);
    next();
});
app.use("/todos",todos);
app.use("/addtodo",addtodo);
app.use("/find",findtodo);
app.use("/delete",deletetodo);

app.listen(process.env.APP_PORT, () => {
 console.log(`server running on port ${process.env.APP_PORT}`);
});

module.exports = app;
