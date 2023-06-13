$(function(){
    $.getJSON("https://suppletory-solids.000webhostapp.com/employees.php", function(data){
        data.forEach(function(employee){
            $("#employees").append(
                '<div class="col">' +
                    '<div class="card">' +
                        '<img src="imagenes/empleados/' + employee.foto + '" class="card-img-top" alt="...">' +
                            '<div class="card-body">' +
                                '<h5 class="card-title">' + employee.nombres + ' ' + employee.apellidos + '</h5>' +
                                '<p class="card-text">' + employee.cargo + '</p>' +
                            '</div>' +
                    '</div>' +
                '</div>'
            )
        })
    })
})