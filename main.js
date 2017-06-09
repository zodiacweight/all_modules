requirejs.config({
    baseUrl: "./",
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        jquery: 'node_modules/jquery/dist/jquery.min',
        backbone: 'node_modules/backbone/backbone-min',
        underscore: 'node_modules/underscore/underscore-min',
        mods: 'my_modules/default_empty',
        myFriend: 'my_modules/myFriend',
        myCoworker: 'my_modules/myCoworker'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        },
        mods: {
            deps: ['myFriend', 'myCoworker'],
            exports: 'allMods'
        }
    }
});
require(['backbone', 
         //'mods',
         'my_modules/default_empty'
        ], function(Backbone, mods) {
    
    // 
    console.log('Modules here','color:darkblue',{'Backbone':Backbone, '$':$, '_':_, 'mods':mods });
    // myFriend и myCoworker - то, что возвращают модули
    //console.log("myFriend.talkMyFriend:", myFriend.talkMyFriend);
    //console.log("Вывод из myFriend: ", myFriend.talkMyFriend());
    //console.log("Выводы из myCoworker: ", myCoworker.askBoy(), " ", myCoworker.getAnswer());
});
