$(document).ready(function (){
    $('#dropdown-content').hide();
    $('#second-dropdown').hide();

    $('#dropdown').click(function(){
        $('#dropdown-content').toggle(200);
    });

    $('#more-items').click(function(){
        $('#second-dropdown').toggle(200);
    });
});

