$(function(){
    $.get("nav.html",function(data){
        $("#nav_placeholder").replaceWith(data);
    })
    $.get("footer.html",function(data){
        $("#footer_placeholder").replaceWith(data);
    })
})