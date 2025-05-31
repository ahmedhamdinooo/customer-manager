// db.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://myAdmin:ahmedhamdy123@127.0.0.1:27017/myDatabase?authSource=admin", {
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));
module.exports=mongoose