// NOTICE: we have no *define* method here being called, nevertheless this module is loaded. See the main.js comments for explanation
console.log('%cDefault module', 'background-color: lime', {
    wrk: typeof wrk !== 'undefined' ? wrk : 'Not found',
    mess: typeof mess !== 'undefined' ? mess : 'Not found'
});
var mods = 'What is going on, huh?';
// just for debugging to make it accessible on global scope 
window.gDefault = true;