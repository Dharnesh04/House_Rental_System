const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname)); //to avoid sending static files using res.send file

mongoose.connect("mongodb://127.0.0.1:27017/lab");

const userSchema={
    fname:String,
    lname:String,
    email:String,
    addr:String
    
}        
const user=mongoose.model("users",userSchema)

const bookSchema={
    fname:String,
    lname:String,
    email:String,
    addr:String
    
}        
const book = mongoose.model("booking",bookSchema)

app.get("/",function(req,res){           
    res.sendFile(__dirname + '/index.html')
})

app.get("/about",function(req,res){           
    res.sendFile(__dirname + '/about.html')
})

app.get("/contact",function(req,res){           
    res.sendFile(__dirname + '/contact2.html')
})

app.get("/login",function(req,res){           
    res.sendFile(__dirname + '/login2.html')
})

app.get("/book2",function(req,res){           
    res.sendFile(__dirname + '/book2.html')
})

app.post("/contact/action", function(req, res) {
    let newUser = new user(
        {
            fname: req.body.user,
            lname: req.body.user2,
            email: req.body.email,
            addr: req.body.user3
        }
    )
    newUser.save();
    res.redirect("/index.html");
})

app.post("/delete", function(req, res) {
    console.log(req.body);
    book.deleteOne(
        {email: req.body.email},
        function(err, data){
            if (err) console.log(err);
            else {
                res.redirect("/index.html");
            }
        }
    )
})

app.post("/book/action", function(req, res) {
    console.log(req.body);
    let newBook = new book(
        {
            fname: req.body.user,
            lname: req.body.user2,
            email: req.body.email,
            addr: req.body.user3
        }
    )
    newBook.save();
    res.redirect("/index.html");
})
 
 

app.listen(3000,function(){
    console.log("server is running on 3000")
})