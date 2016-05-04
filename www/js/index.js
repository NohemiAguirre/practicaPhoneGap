$('#formulario').submit(function()){
    var datosNombre = $('#name').val(); /*Recolectaro las variables del usuario*/
    var datosEmail = $('#mail').val();
    var datosUsuario = $('#username1').val();
    var datosPassword = $('#pass').val();

    archivoInsertar= "http://phonegapitchcii.hoxty.com/php/insertar_datos.php?jsoncallback=?"; /*json es una forma de manipular datos a travez de ese mismo formato*/
    $.getJSON(archivoInsertar, {nombre:datosNombre.email:datosEmail,usuario:datosUsuario, password:datosPassword}).done(function(respuestaServer){
        alert(respuestaServer.mensaje +"\nGenerado en: " + respuestaServer.hora + "\n" + respuestaServer.generador)

        if(respuestaServer.validacion =="ok"){ /*si las respuestas de los datos son correctos no va a mandar a la pagina de login en dado caso de que no nos mandara un error*/
            $('#formulario').trigger("reset");
            $mobile.changePage("#login");

        }else{
            $mobile.changePage("#error");
        }
        
    })
        return false;
});

$('#formulario').submit(function()){
    var datosUsuario = $('#nombredeusuario').val();
    var datosPassword = $("#clave").val();

    archivoValidaion= "http://phonegapitchcii.hoxty.com/php/insertar_datos.php?jsoncallback=?"; /*json es una forma de manipular datos a travez de ese mismo formato*/
    $.getJSON(archivoInsertar, {nombre:datosNombre.email:datosEmail,usuario:datosUsuario, password:datosPassword}).done(function(respuestaServer){
        alert(respuestaServer.mensaje +"\nGenerado en: " + respuestaServer.hora + "\n" + respuestaServer.generador)

        if(respuestaServer.validacion =="ok"){ /*si las respuestas de los datos son correctos no va a mandar a la pagina de login en dado caso de que no nos mandara un error*/
            $('#formulario1').trigger("reset");
            $mobile.changePage("#home");
            $('#_personalizado').text(datosUsuario); 
        }else{
            $mobile.changePage("#error");
        }
        
    })
        return false;
});

$('#btn_sign').bind("click", function(event,ui){
    $mobile.changePage("#sing");
});

$('#btn_login').bind("click", function(event,ui){
    $mobile.changePage("#login");
});

$('#btn_inicio').bind("click", function(event,ui){
    $mobile.changePage("#inicio");
});

$('#btn_map').bind("click", function(event,ui){
    $mobile.changePage("#paginaMap");
});