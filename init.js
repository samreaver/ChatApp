const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection success");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

const allChats = [
    {
    from: "Neha",
    to: "Priya",
    msg: "send me your exam sheets",
    created_at : new Date(),
    },
    {
    from: "Nehal",
    to: "Mayank",
    msg: "Are you coming to the party?",
    created_at : new Date(),
    },
    {
    from: "Sameer",
    to: "Tejasvi",
    msg: "We need to discuss the project.",
    created_at : new Date(),
    },
    {
    from: "Sameer", 
    to: "Saharsh",
    msg: "WE have done it.",
    created_at : new Date(),
    },

];

Chat.insertMany(allChats);

