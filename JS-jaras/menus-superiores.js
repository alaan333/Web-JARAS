$(document).ready(function(){

    var mr= $('#menu-ropa')
    var mc= $('#menu-calzado')
    var ma= $('#menu-accesorios')
    var mco= $('#menu-contacto')

    $('#boton-ropa').click(function(){
        var l=event.clientX;
        mr.css('left',l-30)
        mr.css('top',70)
        mr.fadeToggle('slow')
        mc.fadeOut('slow')
        ma.fadeOut('slow')
        mco.fadeOut('slow')
    })
   
    $('#boton-calzado').click(function(){
        var l=event.clientX;
        mc.css('left',l-30)
        mc.css('top',70)
        mc.fadeToggle('slow')
        mr.fadeOut('slow')
        ma.fadeOut('slow')
        mco.fadeOut('slow')
    })

    $('#boton-accesorios').click(function(){
        var l=event.clientX;
        ma.css('left',l-30)
        ma.css('top',70)
        ma.fadeToggle('slow')
        mr.fadeOut('slow')
        mc.fadeOut('slow')
        mco.fadeOut('slow')
    })

    $('#boton-contacto').click(function(){
        var l=event.clientX;
        mco.css('left',l-30)
        mco.css('top',70)
        mco.fadeToggle('slow')
        mr.fadeOut('slow')
        ma.fadeOut('slow')
        mc.fadeOut('slow')
    })

    $('.texto-principal').mouseover(function(){
        mco.fadeOut('slow')
        mr.fadeOut('slow')
        ma.fadeOut('slow')
        mc.fadeOut('slow')
    })
    $('.logo').mouseover(function(){
        mco.fadeOut('slow')
        mr.fadeOut('slow')
        ma.fadeOut('slow')
        mc.fadeOut('slow')
    })
    $('.social').mouseover(function(){
        mco.fadeOut('slow')
        mr.fadeOut('slow')
        ma.fadeOut('slow')
        mc.fadeOut('slow')
    })
    
    
    

})