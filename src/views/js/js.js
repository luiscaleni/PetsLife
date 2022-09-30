setTimeout(() => {
    $('#loader').fadeOut(1000, function(){
        $('#loader').addClass("hide");
    });
}, 0001);

function huella(){
    var x = document.getElementById('execute');
    if (x.style.display === 'none') {
        setTimeout(function(){ $(".execute").addClass("magicUP");}, 0001);
        setTimeout(function(){ $(".execute").removeClass("magicUP"); }, 1000);
        x.style.display = 'block';
    }else {
        setTimeout(function(){ $(".execute").addClass("magicUP");}, 0001);
        setTimeout(function(){ $(".execute").removeClass("magicUP"); }, 1000);
        x.style.display = 'block';
    }
}

//ocultar
function ocultar() {
    var x = document.getElementById('execute');
    if (x.style.display === 'block') {
        setTimeout(function(){ $(".execute").addClass("magic"); }, 0001);
        setTimeout(function(){ $(".execute").removeClass("magic"); }, 1000);
        setTimeout(function(){ x.style.display = 'none';}, 1000);
        z.style.display = 'none';
    }else {
        x.style.display = 'none';
    }
}
