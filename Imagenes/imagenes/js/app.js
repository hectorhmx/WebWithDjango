function cambiar(){
    document.getElementById("cambiar").innerHTML="Hola desde El getElement By ID"
}

function hola(){
    document.getElementById('myImage').src='img/hola.jpg'
}

function adios(){
    document.getElementById('myImage').src='img/adios.jpg'
}

function desaparece(){
    //document.getElementById('adios').style.color="transparent"
    document.getElementById('adios').style.display="none"
}

function aparecer(){
    document.getElementById('aparece').style.color="black"
}

function windows(){
    window.alert("Hola soy un alert")
}