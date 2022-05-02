function esconder_tudo (){
    $("#join").toggle(1000)
    $("#tech").toggle(1000)

    if($('#tech').is(':visible')){
        $('#esconder_tudo').text("Esconder Tudo").attr({ title: "Esconder Tecnologia"})
    } else {
        $('#esconder_tudo').text("Mostrar Tudo").attr({ title: "Mostrar Tecnologia"});   
    }
}