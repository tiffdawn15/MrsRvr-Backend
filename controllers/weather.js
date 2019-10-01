const Weather = require("../Models/Weather")


module.exports = {
    index: (req, res) => {
      Weather.find({})
      .populate("weather")
      .then(weather => {
        res.json(weather);
      });
    },
    //Show an individual Job record based off of the title
    // show:(req,res) => {
    //     Weather.find({title: req.params.title}).then(Weather => {
    //         res.json(Weather)
    //     })
    // },
    //Create a new Job record at root (using Post method)
    create:(req,res) => {
        const newWeather = req.body
        Weather.create(newWeather).then(weather => res.json(weather));
        
    }, 
    //Update an existing Job record referncing the title
    // update:(req,res) => {
    //     const updatedJobs = req.body

    //     Weather.findOneAndUpdate({title: req.params.title}, updatedJobs, {
    //         new: true
    //     })
    //     .then(Weather => res.json(weather))
    // },
    //Delete a Weather record referencing the title 
    // destroy: (req,res) => {
    //     Weather.findOneAndDelete({title: req.params.title})
    //     .then(Weather => res.json(Weather))
    // }

  };