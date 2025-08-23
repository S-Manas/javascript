const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(Math.PI)
// Math.PI = 5.8
// console.log(Math.PI) // Still 3.141592653589793  
//console.log(descripter)
const chai ={
    name: 'chai',
    price: 100,
    isAvailable: true,
    orderchai: function() {
        console.log('chai ordered');
    }

}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
Object.defineProperty(chai,'name',{
    writable: false,
    configurable: false,
    enumerable: true // if true then it will be shown in for in loop
})
 console.log(Object.getOwnPropertyDescriptor(chai, 'name')); 
for (let [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(key, value);
    }
}