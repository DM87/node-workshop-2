var getFortune = require('./library/fortune.js');


function firstLetter(sentence, func) {
    return func(sentence[0]);
    }
//console.log(firstLetter('Whatever'));

function lastLetter(sentence, func) {
   return func(sentence[sentence.length - 1]);
}
//lastLetter('whatever', function(x){console.log(x)})
//EX3
function getFirstAndLast(sentence, funct){
    return firstLetter(sentence, funct) + lastLetter(sentence, funct);
}
getFirstAndLast("hello", function(newStr) { console.log(newStr); }); // should output "ho"

console.log(getFortune());