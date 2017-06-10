requirejs.config({
    //baseUrl: "./scripts",
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        // jquery: 'node_modules/jquery/dist/jquery.min',
        'test-shim': 'test-shim',
        // underscore: 'node_modules/underscore/underscore-min',
        //mods: 'my_modules/default_empty',
        myFriend: 'modules/myFriend',
        myCoworker: 'modules/myCoworker'
    },
    shim: {
        'test-shim': {
            //deps: ['underscore', 'jquery'],
            deps: ['myFriend', 'myCoworker'],
            exports: 'testValue'
        }/*,
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        mods: {
            deps: ['myFriend', 'myCoworker'],
            exports: 'gMods'
        }*/
    }
});
require(['test-shim'
         //, 'mods'
         //, 'my_modules/default_empty'
        ], function(Backbone/*, mods*/) {
    
    // 
    console.log('%cModules here','color:darkblue',{
        'Backbone':Backbone, 
        wrk: typeof wrk ? wrk : 'Not found',
        mess: typeof mess ? mess : 'Not found'/*, '$':$, '_':_, 'mods':mods*/ });
    // myFriend и myCoworker - то, что возвращают модули
    //console.log("myFriend.talkMyFriend:", myFriend.talkMyFriend);
    //console.log("Вывод из myFriend: ", myFriend.talkMyFriend());
    //console.log("Выводы из myCoworker: ", myCoworker.askBoy(), " ", myCoworker.getAnswer());
});
