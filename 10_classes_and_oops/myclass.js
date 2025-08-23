// class user{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;  
//     }
//     encryptpassword(){
//         return `${this.password}abc`
//     }
// }
// const chai = new user("chai","chai@gmail.com","1234");
// console.log(chai.encryptpassword()) ;

// console.log(chai);
// behind the scene

function user2(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;  
}
user2.prototype.encryptpassword = function(){   
    return `${this.password}abc`
}
const tea = new user2("tea","tea@gmail.com","1234");
console.log(tea.encryptpassword()) ;                      
console.log(tea);