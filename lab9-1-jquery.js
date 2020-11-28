//LAB 9 - 1 FAQ PAGE
// BRYAN N. HUGHES

/**************************************************
    CREATE SLIDING PANELS FOR THE CONTENT BOXES
***************************************************/

//When DOM is loaded, fire this anonymous function
$(document).ready(function() {
    //Automatically hide all the paragraph content
    $('p').hide();
    //When heading is clicked, hide paragraph content
    $('h2').click(function(){
        $('p').hide();
        $(this).next('p').toggle(3000);
    });

    /***************************
        CHANGE COLOR ON HOVER
    ****************************/
   //Hover in
    $('p').hover(
        function(){
            $(this).css({'background': '#FFE5C3', 'color': '#524737'});
        },

    //Hover out
        function(){
            $(this).css({'background': '#524737', 'color': '#FFE5C3'});
        }
    );
});
