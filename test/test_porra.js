var assert = require("assert"),
    apuesta = require(__dirname+"/../Apuesta.js");

describe('Apuesta', function(){
    // Testea que se haya cargado bien la librería
    describe('Carga', function(){
		it('should be loaded', function(){
		    assert(apuesta, "Cargado");
		});
	
    });
    describe('Crea', function(){
		it('should create apuestas correctly', function(){
		    var nueva_apuesta = new apuesta.Apuesta('Elche','Valencia', 'cr13', '2','3');
		    assert.equal(nueva_apuesta.as_string(), "Elche vs Valencia 2-3","Creado");
		});
    });
    describe("Crea", function () {
	    it("El quien de una apuesta no se puede modificar", function () {
	      var nueva_apuesta = new apuesta.Apuesta('Elche','Valencia', 'cr13', '2','3');
	      assert.strictEqual(nueva_apuesta.get_quien(), "cr13", "Verificado quien");
	    });
  	});
    describe('Marcador', function(){
		it('should show score correctly', function(){
		    var apuesta_uno = new apuesta.Apuesta('Barca','Madrid', 'cr13', '0','1');		    					
		    assert.equal(apuesta_uno.get_marcador_string(), "0-1");
		});
    });
});
