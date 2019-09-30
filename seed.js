const Image = require("./Models/Image")
const Rover = require("./Models/Rover")



const roverJsonData = require("./rover.json")






// const roverSeedData = roverJsonData.map(roverJson => {
//     const roverData = {};



//     return roverData;
// })





Image.deleteMany({})
    .then(() => {
        Jobs.create(roverSeedData)
        .then(images => console.log(images))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))


Rover.deleteMany({})
    .then(() => {
        Skills.create(skillsJsonData)
        .then(skills => console.log(skills))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
