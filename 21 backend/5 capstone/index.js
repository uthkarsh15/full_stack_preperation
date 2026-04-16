import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req,res) =>{
    const name1 = req.body["name"];
    const post1 = req.body["text"];
    res.render("index.ejs", { Name: name1, Post: post1});
})
app.post("/update", (req, res) => {
  const name2 = req.body.name;
  const post2 = req.body.text;

  res.render("index.ejs", { Name: name2, Post: post2 });
});
app.post("/delete", (req, res) =>{
    res.render("index.ejs");
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})