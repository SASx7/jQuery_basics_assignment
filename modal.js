








$(document).ready(function(){
    $('.flex-container').hide();
    $('#main-button').click(function(e){
        $('.flex-container').slideDown();
        e.stopPropagation();
    });
    $(document).click(function(){
        $('.flex-container').slideUp();   
    });
    $('.flex-container').click(function(e){
        e.stopPropagation();
    });
    $('.close-button').click(function(e){
        $('.flex-container').slideUp();
        e.stopPropagation();
    });
   
   
});