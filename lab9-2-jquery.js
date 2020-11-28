/*
    LAB 9 - 2 INVENTORY PAGE
    STUDENT: BRYAN HUGHES
*/

$(document).ready(function () {
    /*********************************
        ONLOAD, HIDE THE DESCRIPTION
    **********************************/
    $('.desc').hide();

    /*
        ***FAILED ATTEMPTS***
        $('td').hide(); ?? why this
        $('#desc').hide();
        $('td').next(function () {
            $('#desc').hide();
        });
        SPENT A LOT OF TIME ON MESSING AROUND
        WITH THIS, IT ENDED UP BEING THE '.' BEFORE
        'desc'
    */

    /*****************
        HOVER EVENTS
    ******************/
   $('tr').hover(
        //Change color to red on hover
        function(){
            $(this).css({"background": "red", "color": "white"});
        },
        //Change the color back off hover
        function(){
            $(this).css({"background": "white", "color": "black"});
        });

    /*****************
        CLICK EVENTS
    ******************/
   //Display single row of data onclick
    $('tr').click(function() {
        //find the '.desc' of 'this' row and show it
        $(this).find('.desc').show();
        //secondary click function nested within
        $('tr').click(function () {
            //when another 'tr' is clicked, hide the '.desc'
            $('.desc').hide();
            //find the '.desc' of the row clicked and show it
            $(this).find('.desc').show();
        });
    });
});