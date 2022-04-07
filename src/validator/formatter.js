let trim = function(){
    console.log('the trim result is:','   Functionup    '.trim());
}
let changetoLowerCase = function(){
    console.log('chane string to lower: ','AMARJeeT'.toLowerCase());
}

let changetoUpperCase = function(){
   console.log('chane string to upper: ','amarjeeT'.toUpperCase());
}
    
module.exports.trimming = trim
module.exports.lower = changetoLowerCase
module.exports.upper = changetoUpperCase
