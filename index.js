const express = require('express');
const app = express();
const path = require("path");
const morgan = require("morgan");
const moment = require("moment");
const methodOverride = require("method-override");
const PORT = 3000;
// Database setup
const mongoose = require('./models/db');  // ده بيشغل الاتصال بقاعدة البيانات
const Customer = require("./models/articleSchema");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(express.static("public"));
app.use(methodOverride('_method'));

// View Engine
app.set('view engine', 'ejs');


// Routes
// Home page - List all customers
app.get('/', (req, res) => {
  Customer.find()
    .then(result => {
      res.render("index", { arr: result, moment });
    })
    .catch(err => console.log(err));
});

// Add Customer - Form
app.get('/user/add.html', (req, res) => {
  res.render("user/add");
});

// Edit Customer - Form
app.get('/edit/:id', (req, res) => {
  Customer.findById(req.params.id)
    .then(result => {
      res.render("user/edit", { obj: result });
    })
    .catch(err => console.log(err));
});

// View Customer - Single
app.get('/user/:id', (req, res) => {
  Customer.findById(req.params.id)
    .then(result => {
      res.render("user/view", { obj: result, moment });
    })
    .catch(err => console.log(err));
});

// Add Customer - Submit
app.post('/user/add.html', (req, res) => {
  Customer.create(req.body)
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
});

// Search Customers
app.post('/search', (req, res) => {
  const searchText = req.body.searchText;
  Customer.find({
    $or: [
      { firstName: searchText },
      { lastName: searchText }
    ]
  })
    .then(result => {
      res.render("user/search", { arr: result });
    })
    .catch(err => console.log(err));
});

// Update Customer
app.put('/edit/:id', (req, res) => {
  Customer.updateOne({ _id: req.params.id }, req.body)
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
});

// Delete Customer
app.delete('/delete/:id', (req, res) => {
  Customer.deleteOne({ _id: req.params.id })
    .then(() => res.redirect("/"))
    .catch(err => console.log(err));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
