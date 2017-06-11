requirejs.config({
    // this is taken as a prefix for the values in *path* section (see further)
    baseUrl: "../",
    // this adds the token (the sign *?* and some string, attached to it after the link itself) for the file path in order to keep it slightly different every time and thus to avoid it caching
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        mods: 'scripts/modules/default',
        myFriend: 'scripts/modules/myFriend',
        myCoworker: 'scripts/modules/myCoworker'
    },
    /* this field is uded for files having dependencies but having NO *define* method being used. It allows not only get separated modules by alternative way, but also define the order of their loading */
    shim: {
        /* define dependencies for the file which name is established as field name. Notice that files, listed as value of the field have no predifined order of loading. In order to accomplish this we need to point out the dependencies to be loaded for every file before it starts to load itself (see the next field).  
        So this means that the module *mods* MUST load two other modules. The order of their loading UNDEFINED */
        mods: ['myFriend', 'myCoworker'],
        /* define files which must be loaded BEFORE this one. 
        So this means that the module myFriend MUST always be loaded BEFORE myCoworker */
        myCoworker: ['myFriend']
    }
});
require(['mods'], function (mods) {
    // 
    console.log('%cModules here', 'background-color:pink', {
        '3 mods': typeof mods !== 'undefined' ? mods : 'Not found',
        '4 wrk': typeof wrk !== 'undefined' ? wrk : 'Not found',
        '5 mess': typeof mess !== 'undefined' ? mess : 'Not found'
    });
});

