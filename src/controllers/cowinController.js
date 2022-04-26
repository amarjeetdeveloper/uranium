let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistrictSessions = async function (req, res) {
    try {
        let district = req.query.districtId
        let date = req.query.date

        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message})
    } 
}


let getWeather = async function (req, res) {
    try {
        let city = req.query.q
        let appid  = req.query.appid

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message})
    } 
}


let getSortedCities = async function(req,res){
    try {
        let cities =[ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]  
        let cityObjArray = []
        
        for(i =0 ;i<cities.length;i++){
            let obj = {city : cities[i]}
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=f7131e1287f3ccc601f658f3791ab09a`)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }

        let sorted = cityObjArray.sort(function (a,b){return  a.temp - b.temp})
        console.log(sorted)
        res.status(200).send({status:true, data:sorted})
         }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message})
    } 
}


let getmemes = async function (req, res) {
    try {
    let template_id = req.query.template_id
  let text0 = req.query.text0
  let text1 = req.query.text1
  let username = req.query.username
  let password = req.query.password
        
        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message})
    } 
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictSessions = getDistrictSessions
module.exports.getWeather = getWeather
module.exports.getSortedCities = getSortedCities
module.exports.getmemes = getmemes


second ka 3        let getSortTemp = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let tempCities = [];
        for (i = 0; i < cities.length; i++) {
            let Obj = { city: cities[i] }
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=d4d8d60307b7c562b9da95dbc814dd0b`
            }
            let result = await axios(options)
            Obj.temp = result.data.main.temp
            tempCities.push(Obj)
            console.log(Obj)
        }
        let sortByTemp = tempCities.sort(function (a, b) { return a.temprature - b.temprature})
        res.status(200).send({ data: sortByTemp})
    }catch (err) {
    res.status(500).send({ Error: err.message })
}
}
