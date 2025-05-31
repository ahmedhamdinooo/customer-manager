const mongoose= require("mongoose")
const Schema = mongoose.Schema; 
//define the Schema 
const customerSchema = new Schema({
firstName:String,
lastName:String,
Email:String,
Telephone:String,
Age:String,
Country:String,
Gender:String,
},{timestamps:true})
const Customer =mongoose.model("Customer",customerSchema)
module.exports=Customer