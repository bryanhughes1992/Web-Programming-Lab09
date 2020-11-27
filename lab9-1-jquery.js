//LAB 9 - 1 FAQ PAGE
// BRYAN N. HUGHES

/*
    PART ONE - CREATE SLIDING PANELS FOR THE CONTENT BOXES
*/
//When DOM is loaded, fire this anonymous function
jQuery(document).ready(function() {
    //Automatically hide all the paragraph content
    $("p").hide();


    //When heading is clicked, hide paragraph content
    $('h2').click(function(){
        $(this).next('p').slideToggle(1500);
        $('p').hide();
    });

});
