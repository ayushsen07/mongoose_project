/**
 * define thte schema of students collection to be stored in db
 */

const mongoose = require("mongoose")

// Define the schema 
const studentSchema = new mongoose.Schema({
    name : String,
    age : Number
})

// Go ahead ans make a corresponding collection for schema
module.exports = mongoose.model("Students", studentSchema)    // here Students is collection name where the schema is stored 