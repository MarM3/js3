function Persona(nombre, apellidos, edad){
    this.res = document.getElementById("resultado");
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;

    this.muestraNombreCompleto = function(){
        this.res.innerHTML += ("Nombre y apellidos: " + this.nombre + ' ' + this.apellidos + "<br>")
    };
    this.muestraEdad = function(){
        this.res.innerHTML +=("Edad es: "+this.edad+ "<br>");
    };
}

function crearPersona(nombre, apellidos, edad){
    var persona = new Persona (nombre, apellidos, edad);
    persona.muestraNombreCompleto();
    persona.muestraEdad();
}