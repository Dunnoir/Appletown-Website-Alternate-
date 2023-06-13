$(function(){
    $.getJSON("https://suppletory-solids.000webhostapp.com/shippings.php", function(data){
        data.forEach(function(ship){
            $("#shipping_table").append(
                '<tr>' +
                '<td>' + ship.idempresaenvio + '</td>' +
                '<td>' + ship.nombre + '</td>' +
                '<td>' + ship.telefono + '</td>' +
                '<tr>'
            )
        })
    })
    $.getJSON("https://suppletory-solids.000webhostapp.com/providers.php", function(data){
        data.forEach(function(provider){
            $("#providers_table").append(
                '<tr>' +
                '<td>' + provider.nombreempresa + '</td>' +
                '<td>' + provider.nombrecontacto + '</td>' +
                '<td>' + provider.cargocontacto + '</td>' +
                '<td>' + provider.direccion + '</td>' +
                '<td>' + provider.ciudad + '</td>' +
                '<td>' + provider.pais + '</td>' +
                '<tr>'
            )
        })
    })
})