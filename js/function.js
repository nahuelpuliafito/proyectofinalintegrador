window.onload = function(){
    document.getElementById("demo").innerHTML="<br>";
}
document.getElementById("boton_datos").onclick = function () {
    console.log("Click en el boton de datos");
        document.getElementById("demo").innerHTML = "Nombre:Christy Kennedy<br>E-mail: christy.kennedy@example.com<br>Fecha de nacimiento: 9/4/1945<br>Dirección: 384 Preston Rd<br>Telefono: (700) 553-8838<br>";
};
document.getElementById("boton_exp").onclick = function () {
    console.log("Click en el boton de datos");
        document.getElementById("demo").innerHTML = "Expieriencia Laboral<br>2000-2015: Empleada en maxikiosko 'La Vaca Que Fuma'<br>2020-2022: Tienda de reparación de PC.<br>";
};
document.getElementById("boton_habilidades").onclick = function () {
    console.log("Click en el boton de datos");
        document.getElementById("demo").innerHTML = "Instalación de sistemas de aire acondicionado.<br>Lectura en braile.<br><br>Idiomas: Español, Inglés, Guaraní, Latin, Esperanto<br><br>Cursos: Argentina Programa, Academia TICMAS - Primeros pasos del desarrollo FrontEnd.";
};