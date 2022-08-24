const express = require("express");
const app = express();
const todos = require("./routes/todos");
const addtodo = require("./routes/addtodo");
const findtodo = require("./routes/findtodo");
const deletetodo = require("./routes/deletetodo");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors({origin:'*'}));
app.use("/todos",todos);
app.use("/addtodo",addtodo);
app.use("/find",findtodo);
app.use("/delete",deletetodo);

app.listen(process.env.APP_PORT, () => {
 console.log(`server running on port ${process.env.APP_PORT}`);
});

module.exports = app;