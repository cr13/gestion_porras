// Definición de la clase Apuesta: `quien` = código de la persona que hace la apuesta `local, visitante` = goles del local y del visitante
exports.Apuesta = function (local, visitante, quien, goles_local, goles_visitante) {
    this.local = local;
    this.visitante= visitante;
    this.quien= quien;
    this.goles_local = goles_local;
  	this.goles_visitante = goles_visitante;
    this.as_string = as_string;
    this.get_quien = get_quien;
    this.get_marcador_string = get_marcador_string;

}

// Devuelve la apuesta como una cadena 
function as_string() {
    return this.local + " vs " + this.visitante +" "+ this.goles_local  + "-" + this.goles_visitante;
}

// Devuelve quien a realizado la apuesta
function get_quien() {
    return this.quien;
}

// Devuelve el marcador del evento como una cadena 
function get_marcador_string() {
    return this.goles_local + '-' + this.goles_visitante;
}