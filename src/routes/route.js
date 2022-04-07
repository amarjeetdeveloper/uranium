const express = require('express');
const logger = require('../logger/logger')

const router = express.Router();
const helper = require('../util/helper')
const format = require('../validator/formatter')
const lodash = require('lodash')


router.get('/test-me', function (req, res) {
   helper.date()
   helper.month()
   helper.batch()
logger.logging()
format.trimming()
format.upper()
format.lower()
    res.send('My first ever api!')
});

router.get('/hello', function(req,res) {
    let months = ['jan','feb','march','april','may','june','july','august','sep','oct','nov','dec']
    let subArray = lodash.chunk(months, 3)
    console.log('the result of months: ',subArray)
    let oddNumbers = [1,3,5,7,9,11,13,15,17,19]
    console.log('the last 9 odd number:', lodash.tail(oddNumbers))
    let a = [1,3,6,8,454,5]
    let b = [56,12,46,31,54]
    let c = [32,54,68,99,89,89,98]
    let d = [45,87,846,4,5,1,5,5]
    let e = [879,78,8,7456,3]
    console.log('unique number is',lodash.union(a,b,c,d,e))
    let arrayKeyValuePairs = [["horror","The Shining"],["drama","Titanic'"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log("the final key value is:", lodash.fromPairs(arrayKeyValuePairs))
    res.send('my second api!')
});


module.exports = router;

// adding this comment for no reason
