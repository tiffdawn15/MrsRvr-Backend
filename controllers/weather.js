const Weather = require("../Models/Weather")


module.exports = {
    index: (req, res) => {
      Weather.find({})
      .populate("weather")
      .then(weather => {
        res.json(weather);
      });
    },
    // Show an individual Job record based off of the title
    show:(req,res) => {
        Weather.find({Sol: req.params.Sol}).then(Weather => {
            res.json(Weather)
        })
    },
    //Create a new Job record at root (using Post method)
    create:(req,res) => {
        const newWeather = req.body
        Weather.create(newWeather).then(weather => res.json(weather));
        
    }, 
    //Update an existing Job record referncing the title
    update:(req,res) => {
        const updatedSOL = req.body

        Weather.findOneAndUpdate({Sol: req.params.Sol}, updatedSOL, {
            new: true
        })
        .then(Weather => res.json(weather))
    },
    //Delete a Weather record referencing the title 
    destroy: (req,res) => {
        Weather.findOneAndDelete({Sol: req.params.Sol})
        .then(Weather => res.json(Weather))
    }

  };