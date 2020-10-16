const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const hostname = "localhost";

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(port, hostname, () => {
    console.log("server started on: http://" + hostname + ":" + port);
});