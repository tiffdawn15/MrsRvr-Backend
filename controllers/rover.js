const Rover = require("../Models/Rover")


module.exports = {
    index: (req, res) => {
      Rover.find({})
      .populate("onet")
      .then(rover => {
        res.json(rover);
      });
    },
    //Show an individual Job record based off of the title
    // show:(req,res) => {
    //     Rover.find({title: req.params.title}).then(rover => {
    //         res.json(rover)
    //     })
    // },
    //Create a new Job record at root (using Post method)
    create:(req,res) => {
        const newRover = req.body
        Rover.create(newRover).then(rover => res.json(rover));
        
    }, 
    //Update an existing Job record referncing the title
    // update:(req,res) => {
    //     const updatedJobs = req.body

    //     Rover.findOneAndUpdate({title: req.params.title}, updatedJobs, {
    //         new: true
    //     })
    //     .then(rover => res.json(rover))
    // },
    //Delete a rover record referencing the title 
    // destroy: (req,res) => {
    //     Rover.findOneAndDelete({title: req.params.title})
    //     .then(rover => res.json(rover))
    // }

  };
  