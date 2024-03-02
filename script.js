const express = require("express");
const app = express();
const path = require("path");
app.set("view engine" , "ejs")
app.set("views" , path.join(__dirname , "views"));
app.use(express.urlencoded({extended : true}));
app.use(express.static("./public"))

let Book = [];

app.get("/" , (req , res) => {
    res.render("index")
})


app.get("/show" , (req , res) => {
    res.render("show" , {Book})
})


app.get("/register" , (req , res) => {
    res.render("register")
})


app.post("/register" , (req , res) => {
   let data = req.body;
   Book.push(data)
  res.redirect("/show")
})



app.get("/details/:index" , (req ,res) => {
    let data = Book[req.params.index];
    console.log(data)
    res.render("details" , {data:data , index : req.params.index });
})

app.get("/update/:index" , (req ,res) => {
    let data = Book[req.params.index];
    res.render("update" , {data:data , index : req.params.index })
})

app.post("/update/:index" , (req , res) => {
    Book[req.params.index] =  req.body; 
    res.redirect("/show")
 })

 app.get("/delete/:index" , (req , res) => {
    Book.splice(req.params.index , 1);
    res.redirect("/show")
 })

app.listen(3000 , () => {
    console.log("posrt is working ")
})
