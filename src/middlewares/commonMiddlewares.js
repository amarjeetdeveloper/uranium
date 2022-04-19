
const mid1= function ( req, res, next) {
    const date = new Date();
    console.log(date + req.ip + req.url)
    next()
}

const mid2= function ( req, res, next) {
    console.log(date + req.ip + req.url)
    next()
}

const mid3= function ( req, res, next) {
    console.log(date + req.ip + req.url)
    next()
}

const mid4= function ( req, res, next) {
    console.log(date + req.ip + req.url)
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
