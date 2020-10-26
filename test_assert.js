#!/usr/bin/env nodejs

var apuesta = require("./Apuesta.js");
assert= require("assert");


var apuesta_uno = new apuesta.Apuesta('Elche','Valencia', 'cr13', '2','3');

assert(apuesta_uno, "Apuesta registrada");

assert.equal(apuesta_uno.as_string(), "Elche vs Valencia 2-3","Creado");

var apuesta_dos = new apuesta.Apuesta('Barca','Madrid', 'cr13', '0','1');
assert(apuesta_dos, "Apuesta registrada");
assert.equal(apuesta_dos.as_string(), "Barca vs Madrid 0-1","Creado");

var apuesta_tres = new apuesta.Apuesta('Atletico','Betis', 'cr13', '1','0');
assert(apuesta_tres, "Apuesta registrada");
assert.equal(apuesta_tres.as_string(), "Atletico vs Betis 1-0","Creado");

// Comprobamos que no se hayan registrado apuestas repetidas
assert.notDeepStrictEqual(apuesta_uno, apuesta_dos);
assert.notDeepStrictEqual(apuesta_uno, apuesta_tres);
assert.notDeepStrictEqual(apuesta_dos, apuesta_tres);


var apuesta_cuatro = new apuesta.Apuesta('Barca','Madrid', 'cr13', '0','1');
assert(apuesta_cuatro, "Apuesta registrada");
assert.equal(apuesta_cuatro.as_string(), "Barca vs Madrid 0-1","Creado");

// Comprobamos que se hayan registrado apuestas repetidas
assert.deepStrictEqual(apuesta_dos, apuesta_cuatro);


console.log("Se han superado todos los tests con exito !!");
