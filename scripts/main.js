requirejs.config({
    baseUrl: "../",
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        jquery: 'node_modules/jquery/dist/jquery.min',
        backbone: 'node_modules/backbone/backbone-min',
        underscore: 'node_modules/underscore/underscore-min',
        mods: 'scripts/modules/default',
        myFriend: 'scripts/modules/myFriend',
        myCoworker: 'scripts/modules/myCoworker'
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
            exports: 'mods'
        }
    }
});
require([
    'backbone',
    'mods'
], function (Backbone, mods) {

    // 
    console.log('%cModules here', 'background-color:pink', {
        '0 Backbone': Backbone,
        '1 $': $,
        '2 _': _,
        '3 mods': typeof mods !== 'undefined' ? mods : 'Not found',
        '4 wrk': typeof wrk !== 'undefined' ? wrk : 'Not found',
        '5 mess': typeof mess !== 'undefined' ? mess : 'Not found'
    });

    var myView = Backbone.View.extend({
            initialize: function () {
                console.log('Initialized, this=>', this);
            }
        }),
        view1 = new myView();
    // myFriend и myCoworker - то, что возвращают модули
    //console.log("myFriend.talkMyFriend:", myFriend.talkMyFriend);
    //console.log("Вывод из myFriend: ", myFriend.talkMyFriend());
    //console.log("Выводы из myCoworker: ", myCoworker.askBoy(), " ", myCoworker.getAnswer());
});
