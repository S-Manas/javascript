function nay() {
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("a");
    console.log("s");
}
//nay()
function addtwono(num1,num2) {
    console.log(num1+num2);   
}
addtwono(2,4)
function addtwono(num1,num2) {
    let result = num1+num2
    return result   
    //return num1+num2
}
const result = addtwono(2,4)
//console.log("result is :",result);

function calculateprice(...num1) {
    return num1
}
//console.log(calculateprice(2,3,4))
//console.log(typeof(num1))
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("manas"))
// console.log(loginUserMessage("sam"))


const user = {
    username : "manas",
    price : 299
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
const myNewArray = [200,400,199,600]
function returnSecondValue(getarray) {
    return getarray[1]
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 500, 1000]));