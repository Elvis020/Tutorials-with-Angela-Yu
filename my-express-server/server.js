const express = require("express");
const app = express();
const port = 4000;

// Routes🍠

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});
app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>");
});
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.listen(port, () => {
    console.table(`Server started at 😻port: ${port}`);
});