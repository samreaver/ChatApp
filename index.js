const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const Chat = require("./models/chat.js")
const methodOverride = require("method-override");
const ejs = require("ejs");

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));

//mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(() => {
    console.log("connection success");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//Index route
app.get("/chats", async (req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs", {chats});
});
//New chat route
app.get("/chats/new", (req,res)=>{
    res.render("new.ejs");
}); 

//Create chat route
app.post("/chats",(req,res)=>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to:
        to,
        msg: msg,
        created_at: new Date()
    });
    newChat.save()
    .then((result) => {
        console.log("Chat saved successfully");
        res.redirect("/chats");
    });

});
//Edit Route
app.get("/chats/:id/edit", async (req,res)=>{
    let id = req.params.id;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

//Update Route
app.put("/chats/:id", async (req,res)=>{
    let { id } = req.params;
    let {msg: newMsg} = req.body;
    let updateChat = await Chat.findByIdAndUpdate(id, 
         {msg: newMsg},
        {runValidators: true, new: true}
    );
    res.redirect("/chats");
       
    
});

//Delete Route
app.delete("/chats/:id", async (req,res)=>{
    let { id } = req.params;
    let deleteChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");

});
