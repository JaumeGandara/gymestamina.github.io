function menu() {
    document.getElementById('icona2').style.visibility = "visible";
    document.getElementById('icona1').style.visibility = "hidden";
    document.getElementById('nav').style.visibility = "hidden";

    document.getElementById('icona2').style.marginLeft = "10px";
    document.getElementById('icona2').style.height = "50px";
    document.getElementById('icona2').style.width = "50px";

    document.getElementById('icona1').style.marginLeft = "0px";
    document.getElementById('icona1').style.height = "0px";
    document.getElementById('icona1').style.width = "0px";

    document.getElementById('nav').style.height = "0px";
    document.getElementById('nav').style.width = "0px";
}

function menu1() {
    document.getElementById('icona1').style.visibility = "visible";
    document.getElementById('icona2').style.visibility = "hidden";
    document.getElementById('nav').style.visibility = "visible";
    
    document.getElementById('icona1').style.marginLeft = "15px";
    document.getElementById('icona1').style.height = "50px";
    document.getElementById('icona1').style.width = "50px";
    
    document.getElementById('icona2').style.marginLeft = "0px";
    document.getElementById('icona2').style.height = "0px";
    document.getElementById('icona2').style.width = "0px";

    document.getElementById('nav').style.height = "350px";
    document.getElementById('nav').style.width = "100%";
}