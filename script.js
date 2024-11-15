"use strict";
let interMiami = 9;
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
let palabras = 'Me emocioné al verlo a Messi';
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = ' porque juega Messi';
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami${motivo}`);
    if (equipo1 == equipo2)
        console.log('Empatan');
    if (equipo1 < equipo2)
        console.log('Gana FC Dallas');
}
jugar(interMiami, fcDallas, juegaMessi);
// -------------- ANY -------------------
let disney;
disney = 'Star Wars y Marvel';
console.log(disney);
disney = 15000000;
console.log(disney);
disney = true;
console.log(disney);
// ---------------- ARRAYS -----------------
let arregloNumeros = [1, 2, 3, 4, 5, 6];
let arregloTexto = ['HTML', 'CSS', 'JS'];
arregloTexto[0].indexOf('HTML');
let dev = {
    nombre: 'Joaquin',
    tecnologias: ['HTML', 'CSS', 'JS', 'TS'],
    tomarMate: true
};
dev = {
    nombre: 'Ricardo',
    tecnologias: ['Java'],
    tomarMate: false
};
let dev2 = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol']
};
let dev2Interface = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomarMate: null,
    apellido: 'Buenardo',
    recibido: false
};
let devInterface = {
    nombre: 'Joaquin',
    tecnologias: ['HTML', 'CSS', 'JS', 'TS'],
    tomarMate: true
};
function enviarCurriculum(programador) {
    console.log(`Este Curriculum es de ${programador.nombre}`);
}
enviarCurriculum(devInterface);
enviarCurriculum(dev2Interface);
// ------------- CLASES Y POO ----------------
class Pelicula {
    proyectarEnCine() {
        console.log(`La pelicula ${this.nombre} está siendo proyectada`);
    }
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
}
const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling']);
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr.']);
pelicula.proyectarEnCine();
console.log(pelicula);
// -------- ENCAPSULAMIENTO Y GENERICOS ---------------
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Joaquin');
sorteo.setTicket('S7');
console.log(sorteo.sortear());
