var node_modules_path = 'node_modules/',
    modules_path = 'scripts/modules/';

requirejs.config({
    baseUrl: "../",
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        backbone: node_modules_path + 'backbone/backbone',
        jquery: node_modules_path + '/jquery/dist/jquery.min',
        underscore: node_modules_path + 'underscore/underscore-min',
        mods: modules_path + 'default',
        myFriend: modules_path + 'myFriend',
        myCoworker: modules_path + 'myCoworker'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            // defines the object which is going to be extracted from the loaded file
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        mods: {
            // defines dependencies. Notice: the order of loading is undefined! See the definition for the myCoworker file further
            deps: ['myFriend', 'myCoworker'],
            exports: 'defaultMod'
        },
        // So the file myCoworker has to wait for the myFriend file to be loaded and only then start to loads itself!
        myCoworker: ['myFriend']
    }
});
require(['backbone'
         , 'mods'
        ], function(Backbone, mods) {
    // 
    console.log('%cModules here','color:darkblue',{
        '0 Backbone':Backbone, 
        '1 $':$, 
        '2 _':_, 
        '3 mods': typeof mods !== 'undefined' ? mods : 'Not found',
        '4 wrk': typeof wrk !== 'undefined' ? wrk : 'Not found',
        '5 mess': typeof mess !== 'undefined' ? mess : 'Not found' });
    // myFriend и myCoworker - то, что возвращают модули
    //console.log("myFriend.talkMyFriend:", myFriend.talkMyFriend);
    //console.log("Вывод из myFriend: ", myFriend.talkMyFriend());
    //console.log("Выводы из myCoworker: ", myCoworker.askBoy(), " ", myCoworker.getAnswer());
});
