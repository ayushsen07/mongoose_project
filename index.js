const mongoose = require('mongoose')

const studentModel = require("./modles/students.model")   // this is the student model i create it in the models folder and here we import it

/**
 * write the code to connect with mongoose
 */

mongoose.connect("mongodb://localhost/be_demodb")   // this line show  wheres the connection happen 

const db = mongoose.connection // this start the coneection with the mongoDB

db.on("error", ()=>{
    console.log("error while connecting mongoDB")
})
db.once("open",()=>{
    console.log("connected to mongoDB")
    // logic to insert the data in DB
    init()
    dbQueries()
})

 async function init(){
  console.log("init***")
    //logic to insert the data in DB
  const student ={
    name : "ayush",
    age : 99
  }

  const std_obj= await studentModel.create(student)
  console.log(std_obj)
}

 async function dbQueries(){
  // read the data of student 

  console.log("inside the dbQueries function")
  // read the student data
  try{
    const student = await studentModel.findById("65fc226900b1b39cd70f9fe7")
  }
  catch(err){
    console.log(err)
  }


  // try to go and search based on name
  try{
    console.log("search by name")
    const students = await studentModel.find({name:"ayush"})
   // const students = await studentModel.findOne({name:"ayush"})  // give only one 
   // const students = await studentModel.find()  // act as all  
    console.log(students)

  }
  catch(err){
    console.log(err)

  }

  // deal with the multiple query
  const stds = await studentModel.where("age").gt("12").where("name").equals("ayush").limit(2)
  console.log(stds)

  /**
   * delete one document where name = ayush
   */

  const student = await studentModel.deleteOne({name:"ayush"})
  console.log(student)
}
