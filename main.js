/*requirejs.config({
    baseUrl: "node_modules",
    paths: {
        jquery: '/jquery/dist/jquery.min',
		backbone: '/backbone/backbone-min',
		underscore: '/underscore/underscore-min',
		myFriend: 'modules/myFriend',
        myCooworkers: 'modules/myCoworker'
    },
    shim: {
        backbone: {
         depts: ['underscore', 'jquery'],
         exports: Backbone
        },
        my_modules: {
         depts: ['myFriend', 'myCoworker']
        }
    }
}); */
require(["modules/myFriend", "modules/myCoworker"], function(myFriend, myCoworker){
     // 
     console.log({'myFriend':myFriend, 'myCoworker':myCoworker});
     // myFriend и myCoworker - то, что возвращают модули
     //console.log("myFriend.talkMyFriend:", myFriend.talkMyFriend);
     //console.log("Вывод из myFriend: ", myFriend.talkMyFriend());
     //console.log("Выводы из myCoworker: ", myCoworker.askBoy(), " ", myCoworker.getAnswer());
});