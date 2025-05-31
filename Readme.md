# CustomerManager

A simple Node.js and Express-based CRUD application for managing customer data. It allows you to create, view, edit, delete, and search customers using a MongoDB database and EJS for server-side rendering.

## 🔧 Features

- Add new customers
- View all customers
- Edit customer information
- Delete customer entries
- Search customers by first or last name
- Server-side rendering with EJS
- Middleware logging with Morgan
- Method override to support PUT and DELETE from forms


📜 Scripts
npm start        # Run the app normally
npm run dev      # Run with nodemon (auto-restart on changes)
npm run debug    # Run with Node inspector (debug mode)
npm run watch    # Watch .js and .json files with nodemon

## 📁 Project Structure
CustomerManager/
├── models/
│ ├── articleSchema.js # Mongoose schema for Customer
│ └── db.js # MongoDB connection
├── views/
│ ├── index.ejs
│ └── user/
│ ├── add.ejs
│ ├── edit.ejs
│ ├── view.ejs
│ └── search.ejs
├── public/ # Static assets (CSS, JS, images)
├── app.js # Main Express app
├── package.json
└── README.md

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) running locally or via cloud (e.g. Atlas)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ahmedhamdinooo/customer-manager.git
cd CustomerManager


Install dependencies:
npm install

Configure MongoDB connection in models/db.js.
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/customersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true}
);

Start the application:
node index.js

The app will run on http://localhost:3000

🧪 Usage
Visit / to view all customers.

Go to /user/add.html to add a new customer.

Click on "Edit" or "View" for individual customer actions.

Use the search bar on the home page to find customers by name.



📦 Dependencies
express

mongoose

ejs

morgan

moment

method-override





