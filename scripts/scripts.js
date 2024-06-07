$(document).ready(function(){
    let opening = $('.opening');
    let close = $('.close');
    let container = $('.container');
    
    opening.click(function(){
        container.fadeIn(500);
    });
    close.click(function(){
        container.fadeOut(500);
    });
});
