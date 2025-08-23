const user ={
    name: "John",
    logincount: 0,
    signin: true,
    getuserdetails:function(){
        console.log("got user details");
        console.log(`name : ${this.name}`);

    }
}
//console.log(user.name);
//console.log(user.getuserdetails());

function user2(username, logincount, isloggedin){
    this.name = username;
    this.logincount = logincount;
    this.signin = isloggedin;
    return this;

}
const userone = new   user2("manas",1,true)
console.log(userone);