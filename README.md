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

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/whatsapp-chat-clone.git
   cd whatsapp-chat-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start MongoDB**
   - Make sure MongoDB is running locally on `mongodb://127.0.0.1:27017/whatsapp`.

4. **Seed the database (optional)**
   ```bash
   node init.js
   ```

5. **Start the server**
   ```bash
   node index.js
   ```
   The app will run at [http://localhost:8080](http://localhost:8080).

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
