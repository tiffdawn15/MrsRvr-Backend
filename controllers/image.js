const Image = require("../Models/Rover")


module.exports = {
    index: (req, res) => {
      Image.find({})
      .populate("onet")
      .then(Image => {
        res.json(Image);
      });
    },
    //Show an individual Image record based off of the title
    // show:(req,res) => {
    //     Image.find({title: req.params.title}).then(Image => {
    //         res.json(Image)
    //     })
    // },
    //Create a new Job record at root (using Post method)
    create:(req,res) => {
        const newImage = req.body
        Image.create(newImage).then(image => res.json(image));
        
    }, 
    //Update an existing Job record referncing the title | Need to update this one based off of the model. 
    // update:(req,res) => {
    //     const updatedImage = req.body

    //     Image.findOneAndUpdate({title: req.params.title}, updatedImage, {
    //         new: true
    //     })
    //     .then(Image => res.json(Image))
    // },
    //Delete a image record referencing the title 
    // destroy: (req,res) => {
    //     Image.findOneAndDelete({title: req.params.title})
    //     .then(Image => res.json(Image))
    // }

  };
  