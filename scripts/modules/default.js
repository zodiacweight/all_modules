define([
        './myFriend',
        './myCoworker' 
        
        ], function(myFriend, myCoworker){
    return {
        myCoworker:myCoworker, 
        myFriend:myFriend
    }
})