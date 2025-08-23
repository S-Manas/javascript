const promiseone = new Promise(function (resolve, reject) {
  //resolve("Promise resolved successfully");
  setTimeout(() => {
    console.log("Async task is complete");
    resolve("Promise resolved successfully");
  }, 1000);
})
promiseone.then((result) => {
  console.log(result);
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2 is complete");
    resolve("async2 resolved successfully");
  },1000)
} ).then((result) => {
  console.log(result);
})

const promisetwo = new Promise(function (resolve,reject){
  setTimeout(function()
  {
    resolve({username : "JohnDoe", age: 30});
  },1000)

})
promisetwo.then(function(user){
  console.log(user)
})

const promise3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    let error = false
    if (!error){
      resolve({username:"manas",pass:"123"})
    }else{
      reject("Error: Something went wrong");
    }
  }, 1000);
})
promise3
.then((user) =>{
  console.log(user);
  return user.username;
})
.then((username) => {
  console.log("Username is: " + username);
})
.catch((error) => {
  console.error(error);
})
.finally(() => {
  console.log("Promise chain completed.");
});

const promise4 = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if (!error) {
      resolve({username:"javascript", pass:"456"});
    } else {
      reject("Error: Something went wrong in promise4");
    }
  },1000);
});

async function consumePromise(){
  try{
    const response =await promise4
    console.log(response);
  }catch(error){
    console.log(error)
  }
}
consumePromise();

async function getalldata(){
  try{
    const response = await fetch('https://api.github.com/users/S-Manas')
    const data = await response.json();
    console.log(data);
  }catch(error){
    console.log(error);
  }
}
getalldata();

fetch('https://api.github.com/users/S-Manas')
.then(response => {
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error('Error fetching data:', error);
})