const Image = require("./Models/Image")
const Weather = require("./Models/Weather")



const roverJsonData = require("./rover.json")
const weatherJsonData = require("./weather.json")








Image.deleteMany({}).then(() => {
        Image.create(roverJsonData)
     
        .then(images => console.log(images))
        .catch(err => console.log(err))
    })
    Image.save
   

Weather.deleteMany({}).then(() => {
    Weather.create(weatherJsonData)
    .then(weather => console.log(weather))
    .catch(err => console.log(err))
})

Weather.save