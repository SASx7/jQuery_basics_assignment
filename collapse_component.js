$(document).ready(function() {
    $('p').hide();

    $('.first-div').click(function(){
        $(this).find('p').toggle(200);
        });
});