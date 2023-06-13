$(function(){
    let cat_sel = 0
    if (cat_sel != 0){
        $.getJSON("https://suppletory-solids.000webhostapp.com/products_categories.php?idcategoria=" + cat_sel, {idcategoria: cat_sel}, function (data) {
            data.forEach(function (product) {
                $("#products_display").append(
                    '<div class="col">' +
                    '<div class="card">' +
                    '<img src="' +
                    (product.imagenchica != null ? product.imagenchica :
                        'imagenes/producto_placeholder.png') +
                    '" class="card-img-top" alt="...">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + product.producto + '</h5>' +
                    '<p class="card-text">S/.' +
                    (product.preciorebajado == 0 ? Number(product.precio).toFixed(2) :
                        Number(product.preciorebajado).toFixed(2) +
                        '<span class="precio-tachado">S/.' + Number(product.precio).toFixed(2) + '</span>' +
                        '<div class="precio-dscto">' +
                        Number((product.precio - product.preciorebajado) / product.precio * 100).toFixed(0) + '%') +
                    '</div>' +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        })
    }else{
        $.getJSON("https://suppletory-solids.000webhostapp.com/products.php", function (data) {
            data.forEach(function (product) {
                $("#products_display").append(
                    '<div class="col">' +
                    '<div class="card">' +
                    '<img src="' +
                    (product.imagenchica != null ? product.imagenchica :
                        'imagenes/producto_placeholder.png') +
                    '" class="card-img-top" alt="...">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' + product.producto + '</h5>' +
                    '<p class="card-text">S/.' +
                    (product.preciorebajado == 0 ? Number(product.precio).toFixed(2) :
                        Number(product.preciorebajado).toFixed(2) +
                        '<span class="precio-tachado">S/.' + Number(product.precio).toFixed(2) + '</span>' +
                        '<div class="precio-dscto">' +
                        Number((product.precio - product.preciorebajado) / product.precio * 100).toFixed(0) + '%') +
                    '</div>' +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            })
        })
    }
    $.getJSON("https://suppletory-solids.000webhostapp.com/categories.php", function(data){
        data.forEach(function(category){
            $("#product_filters").append(
                '<li class="list-group-item category" category="' + category.idcategoria + '"' + 
                ' title="' + category.descripcion + '">' + category.categoria +
                '<span class="badge rounded-pill text-bg-success">' + category.cantidad + '</span></li>'
            )
        })
        $(".list-group-item").click(function(){
            $(".list-group-item").removeClass("active clicked");
            $(this).toggleClass("active clicked");
            cat_sel = $(this).attr("category")
        })
        $(".list-group-item").mouseleave(function(){
            if (!$(this).hasClass("clicked")){
                $(this).removeClass("active");
            }
        })
    })
    $.getJSON("https://suppletory-solids.000webhostapp.com/products_total.php", function(data){
        $("#products_q").append(
            '<h2>Mostrando ' + data.total + ' productos</h2>'
        )
    })
    $("#btnDel").on("click",function(){
        $(".list-group-item").removeClass("active clicked");
    })
})