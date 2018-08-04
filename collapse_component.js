$(document).ready(function() {
    $('p').hide();

    $('.first-div').click(function(){
        $('p').removeClass('activated');
        $(this).find('p').toggle(200).addClass('activated');
        $('p:not(.activated)').hide();
        
        });
});