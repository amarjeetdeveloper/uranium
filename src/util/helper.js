const printDate =function(){
    let currentDate = new Date()
    console.log("Date is ",currentDate.getDate())
}
const printMonth = function(){
    let currentMonth = new Date()
    console.log("month is",currentMonth.getMonth()+1)
}
const getBatchInfo = function(){
    console.log("uranium 2 the topic for today is nodejs module")
}

module.exports.date= printDate
module.exports.month= printMonth
module.exports.batch= getBatchInfo


