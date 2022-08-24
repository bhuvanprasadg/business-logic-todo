const express = require("express");
const app = express();
const PORT = 3000;
const todos = require("./routes/todos");
const addtodo = require("./routes/addtodo");
const findtodo = require("./routes/findtodo");
const deletetodo = require("./routes/deletetodo");

app.use("/todos",todos);
app.use("/addtodo",addtodo);
app.use("/find",findtodo);
app.use("/delete",deletetodo);

app.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

module.exports = app;