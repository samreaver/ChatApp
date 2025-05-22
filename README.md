# ChatApp
A simple chat management web app built with Node.js, Express, MongoDB (Mongoose), and EJS.  
# WhatsApp Chat Clone (Node.js + Express + MongoDB)

A simple chat management web app built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and **EJS**.  
You can create, view, edit, and delete chat messages between users.

## Features

- List all chats
- Add a new chat
- Edit existing chat messages
- Delete chats
- Simple, clean UI with EJS and CSS



## Project Structure

```
.
├── index.js           # Main Express server
├── init.js            # Script to seed the database
├── models/
│   └── chat.js        # Mongoose Chat schema
├── views/
│   ├── index.ejs      # List chats
│   ├── new.ejs        # New chat form
│   └── edit.ejs       # Edit chat form
├── public/
│   └── style.css      # Stylesheet
└── package.json
```

## Usage

- Visit `/chats` to see all chats.
- Click "New Chat" to add a chat.
- Use "Edit" or "Delete" to modify or remove chats.

## Dependencies

- express
- mongoose
- ejs
- method-override

## License

MIT

---

**Made with ❤️ using Node.js, Express, and MongoDB**
