let interMiami: number = 9
let fcDallas: number = 11
let messi: number = 1
let juegaMessi: boolean = true

let palabras: string = 'Me emocioné al verlo a Messi'

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean) {
    let motivo: string = ''
    if(juegaMessi) {
        equipo1 += messi
        motivo = ' porque juega Messi'
    }
    if(equipo1 > equipo2) console.log(`Gana Inter Miami${motivo}`)
    if(equipo1 == equipo2) console.log('Empatan')
    if(equipo1 < equipo2) console.log('Gana FC Dallas')
}

jugar(interMiami, fcDallas, juegaMessi)

// -------------- ANY -------------------

let disney;

disney = 'Star Wars y Marvel'
console.log(disney)

disney = 15000000
console.log(disney)

disney = true
console.log(disney)

// ---------------- ARRAYS -----------------

let arregloNumeros: number[] = [1,2,3,4,5,6]

let arregloTexto: string[] = ['HTML','CSS','JS']

arregloTexto[0].indexOf('HTML')

// ---------------- OBJETOS Y TYPES PERSONALIZADOS -----------------

type ProgramadorType = {
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean | null
}

let dev: ProgramadorType = {
    nombre: 'Joaquin',
    tecnologias: ['HTML','CSS','JS','TS'],
    tomarMate: true
}

dev = {
    nombre: 'Ricardo',
    tecnologias: ['Java'],
    tomarMate: false
}

let dev2: ProgramadorType = {
    nombre: 'Federico',
    tecnologias: ['HTML','Cobol']
}

// ---------------- INTERFACE -------------------

interface ProgramadorInterface {
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean | null
}

let dev2Interface = {
    nombre: 'Federico',
    tecnologias: ['HTML','Cobol'],
    tomarMate: null,
    apellido: 'Buenardo',
    recibido: false
}

let devInterface: ProgramadorInterface = {
    nombre: 'Joaquin',
    tecnologias: ['HTML','CSS','JS','TS'],
    tomarMate: true
}

function enviarCurriculum(programador : ProgramadorInterface) {
    console.log(`Este Curriculum es de ${programador.nombre}`)
}

enviarCurriculum(devInterface)
enviarCurriculum(dev2Interface)

// ------------- CLASES Y POO ----------------

class Pelicula {
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log(`La pelicula ${this.nombre} está siendo proyectada`)
    }

    constructor(nombre: string, protagonistas: string[], actores: string[]) {
        this.nombre = nombre
        this.protagonistas = protagonistas
        this.actores = actores
    }
}

const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling'])
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr.'])

pelicula.proyectarEnCine()
console.log(pelicula)

// -------- ENCAPSULAMIENTO Y GENERICOS ---------------

class Sorteo<T>{

    private ticket?: T;

    constructor(private nombre : string) {
    }

    setTicket(ticket: T) {
        this.ticket = ticket
    }

    getTicket() {
        return this.ticket
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }

}

let sorteo = new Sorteo<string>('Joaquin')
sorteo.setTicket('S7')
console.log(sorteo.sortear())