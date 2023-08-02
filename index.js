var prompt = require('prompt');
console.log("hello world")

let b = 5
let c = 6
function adder(b, c){
    console.log(b + c)
}
adder(b, c)


prompt.start();

prompt.get(['no1', 'no2'], function(err, result){
    var a = parseInt(result.no1);
    var b = parseInt(result.no2);
    let sum =  a + b 
    console.log("sum of numbers is "+ sum)

})