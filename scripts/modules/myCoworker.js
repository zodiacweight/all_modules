// NOTICE: we have no *define* method here being called, nevertheless this module is loaded. See the main.js comments for explanation
console.log('This code is ran in the myCoworker module...');
var wrk = {
    name: 'John'
};
// just for debugging to make it accessible on global scope 
window.gCoworker = true;