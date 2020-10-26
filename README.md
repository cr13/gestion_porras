# Gestion_porras

[![Build Status](https://travis-ci.org/cr13/gestion_porras.svg?branch=main)](https://travis-ci.org/cr13/gestion_porras)


En este repositorio se va a crear una aplicación para gestionar la porra (Fútbol, baloncesto ...).

Además se va a realizar una serie de test.


### Comandos de ejecución

```bash
#Se instalan las dependencias de node necesarias para el proyecto
npm install

#Ejecutar el test assert

npm start

#Ejecutar test mocha

npm test



```

### Generar documentación

```bash
# Tenemos que instalar:

npm install -g grunt-cli
npm install docco grunt-docco --save-dev

```

Se crea el fichero [Gruntfile.js](./Gruntfile.js)

```bash
# Generamos la documentación con el siguiente comando

grunt docco

```

 La documentación se generará en el directorio especificado en el grutfile, que este case es en el directorio docs.