$(function(){ // this prevents the codes to execute immediately when user lands onto the page and wait for user's action
    // JQuery is not required. You can you vanilla (regular) JS as well
    'use strict';
    var clickCounter = 0;
    $('form#true button').click(function(){
        clickCounter++; //increment click counter
        $('#click-counter').text(clickCounter); //add click counter to span element
        //this changes the style of the button after clicking
        $('button' ).hover(
            function() {
              $('button').css({'background-color': '#efba01','border':'1px solid #efba01','border-color': '#efba01','color': '#000','font-weight': '600'});
            }, function() {
              $('button').css({'background-color': '#327997','border':'1px solid #327997','color': '#FFF','font-weight': 'normal'});
            }
        );
        $('#click-container').show(); //display number of clicks
        if(clickCounter == 5) { //submit the form if the user clicked 5 times
            /*
             *submit the form
             *if it's only redirection needed we can also use
             *window.location.href='http://truenorthinc.com';
            */
            $('form#true').submit(); //submit the form
        }
    });
});