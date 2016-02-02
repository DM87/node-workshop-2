var getFortune = require('./library/fortune.js');

process.argv.forEach(function (val, index, array){
    if (index === 2)
    //console.log(Number(val));
    //console.log(array);
    //console.log(index);
    
    for (var i = 0; i < Number(val); i++) {
        console.log(Number(val));
    console.log(getFortune()+"\n"); 
    }
});

