window.onscroll = function() {cambiarNavbar()};

function cambiarNavbar() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("navbar_main").style.backgroundColor = "#2087C5";
        document.getElementById("contactar").className = "btn_contactar_cambiado";
    } else {
        document.getElementById("navbar_main").style.backgroundColor = "transparent";
        document.getElementById("contactar").className = "btn_contactar";
    }
}