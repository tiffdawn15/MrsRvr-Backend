const Rover = require("../Models/Rover")


module.exports = {
    index: (req, res) => {
      Rover.find({})
      .populate("onet")
      .then(rover => {
        res.json(rover);
      });
    },
    // Shows a  record based off of the title
    show:(req,res) => {
        Rover.find({roverName: req.params.roverName}).then(rover => {
            res.json(rover)
        })
    },
    // Create a new Job record at root (using Post method)
    create:(req,res) => {
        const newRover = req.body
        Rover.create(newRover).then(rover => res.json(rover));
        
    }, 
    //Update an existing Job record referncing the title
    update:(req,res) => {
        const updatedRover = req.body

        Rover.findOneAndUpdate({roverName: req.params.roverName}, updatedRover, {
            new: true
        })
        .then(rover => res.json(rover))
    },
    //Delete a rover record referencing the title 
    destroy: (req,res) => {
        Rover.findOneAndDelete({roverName: req.params.roverName})
        .then(rover => res.json(rover))
    }

  };
  