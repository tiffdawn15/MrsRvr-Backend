const Image = require("./Models/Image")
const Rover = require("./Models/Rover")


const roverJsonData = require("./rover.json")


=





Image.deleteMany({}).then(() => {
        Image.create(roverJsonData)
     
        .then(images => console.log(images))
        .catch(err => console.log(err))
    })
    Image.save
   

]