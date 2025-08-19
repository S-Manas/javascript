/*
let a = 10
const b = 20
var c = 30
*/
const b =40

if (true){
    let a = 10
    const b = 20
    var c = 30
}


//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "manas"
    function two() {
        console.log(username);
        
    }
    two()
}
//one()
if(true){
    const username = "manas"
    if(username === "manas")  {
        const website = " youtube"
        //console.log(username + website);
    }
}
//console.log(username);

//++++++++++++++++ Arrow function ++++++++++++++++++

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


