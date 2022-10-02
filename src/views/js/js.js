setTimeout(() => {
    $('#loader').fadeOut(1000, function(){
        $('#loader').addClass("hide");
    });
}, 0001);

//Abrir app
function huella(){
    var x = document.getElementById('execute'); 
    setTimeout(function(){ $(".execute").addClass("magicUP");}, 0001);
    setTimeout(function(){ $(".execute").removeClass("magicUP"); }, 1000);
    localStorage.setItem("app","true");
    console.log(localStorage.getItem("app"));
    x.style.display = 'block';
}
var x = document.getElementById('execute');
if(localStorage.getItem("app")==="true"){
    x.style.display = 'block';
}else{
    x.style.display = 'none';
}

//ocultar
function ocultar() {
    var x = document.getElementById('execute');
    if (x.style.display === 'block') {
        setTimeout(function(){ $(".execute").addClass("magic"); }, 0001);
        setTimeout(function(){ $(".execute").removeClass("magic"); }, 1000);
        setTimeout(function(){ x.style.display = 'none';}, 1000);
        localStorage.setItem("app","false");
        console.log(localStorage.getItem("app"));
    }else {
        x.style.display = 'none';
    }
}

//Save name
function saveNombre(){
    $(document).ready(function (){
        $('#nombre').on('keyup', function(){
                var valor = $('#nombre').val();
                $('#reflejar').text(valor);
                localStorage.setItem("nombres",valor);
                console.log(localStorage.getItem("nombres"));
                //$('#campo').val("Hola mundo");
            });
        });
}