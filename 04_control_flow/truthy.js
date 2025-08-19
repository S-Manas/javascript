const userEmail = "manas@123.ai"
if (userEmail) {
  console.log("got user email: " + userEmail);
}
else {
  console.log("don't have user email");
}

/* falsy values 
false ,0,-0, "", null, undefined, NaN,BigInt 0n,""
truthy values
true, 1, -1, "0", "false", " ", [], {}, function() {}
everything else is truthy
*/
const emptyobject = {3 : "three"};
if (Object.keys(emptyobject).length) {
  console.log("object is not empty");
}