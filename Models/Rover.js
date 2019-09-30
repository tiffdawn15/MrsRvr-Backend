//Model for the Rover documentaiton. When the picture is clicked on in the front end this data should populate. 




const mongoose = require("../connection")
       const Schema = mongoose.Schema
       
       
       const roverSchema = new Schema({
           
          name: String, 
          Landing_Date: Number, 
          Launch_Date: Number, 
          Status: String, 
          Max_Sol: Number, 
        

        
       })
       

       const Rover = mongoose.model("Rover", roverSchema);

        module.exports = Rover;
