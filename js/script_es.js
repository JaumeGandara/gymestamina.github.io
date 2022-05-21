function inici(){
    document.getElementById('boton1').style.backgroundColor ="blueviolet";

    localStorage.setItem("usuari1", 'Admin');
    localStorage.setItem("usuari2", 'Jaume');
    localStorage.setItem("usuari3", 'Toni');
    localStorage.setItem("usuari4", 'Rubén');
    localStorage.setItem("usuari5", 'Bernat');
    localStorage.setItem("usuari6", 'Gaby');
    localStorage.setItem("usuari7", 'Pau');

    localStorage.setItem("contrasenya1", 6969);
    localStorage.setItem("contrasenya2", 2314);
    localStorage.setItem("contrasenya3", 1234);
    localStorage.setItem("contrasenya4", 1243);
    localStorage.setItem("contrasenya5", 1342);
    localStorage.setItem("contrasenya6", 4234);
    localStorage.setItem("contrasenya7", 3412);
}

function sol() {
    document.body.style.backgroundImage = "url('../img/PESOLIBRE07.jpg')";
    document.getElementById('boton1').style.backgroundColor = "blueviolet";
    document.getElementById('boton2').style.backgroundColor = null;
}

function nit() {
    document.body.style.backgroundImage = "url('../img/piscina.jpg')";
    document.getElementById('boton2').style.backgroundColor = "blueviolet";
    document.getElementById('boton1').style.backgroundColor = null;
}

function ves() {
    const usu1 = localStorage.getItem('usuari1');
    const pass1 = localStorage.getItem('contrasenya1');

    const usu2 = localStorage.getItem('usuari2');
    const pass2 = localStorage.getItem('contrasenya2');
    
    const usu3 = localStorage.getItem('usuari3');
    const pass3 = localStorage.getItem('contrasenya3');
    
    const usu4 = localStorage.getItem('usuari4');
    const pass4 = localStorage.getItem('contrasenya4');
    
    const usu5 = localStorage.getItem('usuari5');
    const pass5 = localStorage.getItem('contrasenya5');
    
    const usu6 = localStorage.getItem('usuari6');
    const pass6 = localStorage.getItem('contrasenya6');
    
    const usu7 = localStorage.getItem('usuari7');
    const pass7 = localStorage.getItem('contrasenya7');

    var nom = document.getElementById('nom');
    var contrasenya = document.getElementById('contrasenya');

    if (nom.value == usu1 && contrasenya.value == pass1){
        window.location.replace('../es/principal.html');
    }
    if (nom.value == usu2 && contrasenya.value == pass2){
        window.location.replace('../es/principal.html');
    }
    if (nom.value == usu3 && contrasenya.value == pass3){
        window.location.replace('../es/principal.html');
    }
    if (nom.value == usu4 && contrasenya.value == pass4){
        window.location.replace('../es/principal.html');
    }
    if (nom.value == usu5 && contrasenya.value == pass5){
        window.location.replace('../es/principal.html');
    }
    if (nom.value == usu6 && contrasenya.value == pass6){
        window.location.replace('../es/principal.html');
    }
    if (nom.value == usu7 && contrasenya.value == pass7){
        window.location.replace('../es/principal.html');
    }
    else {
        alert('Error 401')
    }
}