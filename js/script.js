$("#button-subscribe").click(function(){
    goto("panel-form");
});

$("#menu-about").click(function(){
    goto("panel-about");
});

$("#menu-speakers").click(function(){
    goto("panel-speakers");
});

function goto(classe){
    var offset = $("." + classe).offset().top;
    $("body,html").animate(
    {
        scrollTop: offset + 'px'
    }, 1000);
}