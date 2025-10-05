async function samarth(){
    return [100,200];
}
console.log(samarth());
// promise
//
// NO the promise will be overrided
async function samarth(){
return new Promise(function(resolve, reject) {reject("goo away")})
}
console.log(samarth());
I