var exampleAsyncArrayFunction = function() {
   console.log('example-async-array-function called', document.getElementById('element'));
}

if (typeof asyncFunctions === "undefined") {
   var asyncFunctions = [];
}
asyncFunctions.push(exampleAsyncArrayFunction);
