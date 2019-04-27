//Document ready event

//$(selector).action

$(document).ready(function(){
    $("button").click(function(){
        $(h2).hide();
    });

    $("#desaparezco").dblclick(function(){
        $(this.hide());
    });
    
    $("#flip").mouseenter(function(){
        $("#contenido").slideDown(5000);
    })

    $("#stop").click(function(){
        $("#contenido").stop()
    })
})
