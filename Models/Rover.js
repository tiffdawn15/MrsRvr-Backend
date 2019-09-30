const mongoose = require("../connection")
       const Schema = mongoose.Schema
       
       
       const roverSchema = new Schema({
           
          name: String, 
          Landing_Date: Number, 
          Launch_Date: Number, 
          Status: String, 
          Max_Sol: Number, 
          Cammera: [ 
            name: String
          ]

        }
       })
       

       const Rover = mongoose.model("Rover", roverSchema);

        module.exports = Rover;
