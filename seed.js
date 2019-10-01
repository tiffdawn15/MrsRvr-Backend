const Rover = require("./Models/Rover")
const Weather = require("./Models/Weather")



const roverJsonData = require("./rover.json")
const weatherJsonData = require("./weather.json")




const roverSeedData = roverJsonData.map(roverJson => {
    const roverData = {};

    roverData.img_src = roverJson.img_src;
    roverData.earth_date = roverJson.earth_date;
    roverData.SOL = roverJson.SOL;
    
    roverData.render = true

    return roverData;
})






const weatherSeedData = weatherJsonData.map(weatherJson => {
    const weatherData = {};

    weatherData.sol = weatherJson.sol;
    weatherData.airTemp = weatherJson.airTemp;
    weatherData.First_UTC = weatherJson.First_UTC;
    weatherData.Last_UTC = weatherJson.Last_UTC;
    weatherData.pre = weatherJson.pre; 
    weatherData.Season = weatherJson.Season
    weatherData.render = true

    return weatherData;
})




Rover.deleteMany({}).then(() => {
        Rover.create(roverSeedData)
     
        .then(rover => console.log(rover))
        .catch(err => console.log(err))
    })
    Rover.save
   

Weather.deleteMany({}).then(() => {
    Weather.create(weatherJsonData)
    .then(weather => console.log(weather))
    .catch(err => console.log(err))
})

Weather.save