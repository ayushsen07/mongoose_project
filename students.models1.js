const mongoose = require('mongoose')

// schema
const studentschema = new mongoose.Schema({
    /**
     * WHY we do this type of schema bcz
     * here we set the validation on storing the data
     * set constraints to storing the data 
     * here all the required field is correct than store the data in db
     * if all the required field is not fill than it give error to storing the data in DB
     */
    name :{
        type : String,
        required :true

    },
    age :{
        type : Number,
        min : 19
    },
    email : {
        type : String,
        required : true,
        lowercase : true,
        minLength : 15
    },

    subjects :[String],
    createdAt : {
        type : Date ,
        immutable : true,
        default : ()=>{
            return Date.now()
        }
    }
})