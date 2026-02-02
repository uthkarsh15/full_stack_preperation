import express from "express";
const app = express();
const port = 3000;

app.get("/",(req, res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>hello!</h1>");
});

app.get("/about",(req, res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>about me</h1><P>my name is uthkarsh</p>");
});

app.get("/contact",(req, res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>contact me</h1><p>9891430518</p>");
});
app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
});