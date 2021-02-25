
/**1
 *  Define 3 variables en Typescript.
 *  Una para almacenar tu nombre, otra para el apellido y otra para tu edad.
 *  Luego visualiza los valores usando console.log
 */
const userName:string = 'Pepe'
const userLastName:string = 'Ramirez'
const userAge:number = 23

console.log(`El usuario se llama ${userName} ${userLastName} y tiene ${userAge} años.`)

/**2
 * Agrupa las variables del ejercicio anterior en un objeto usando interface.
 *  Ahora define el objeto e imprímelo por pantalla.
 */

interface User {
    userName:string
    userLastName:string
    userAge:number
}

const user:User = { userName: 'Lucía', userLastName: 'Suarez', userAge: 24 }

console.log(user)

/**2
 * Añade una propiedad al objeto anterior para definir si es profesor o no.
 */

//user.isTeacher:boolean = true
//user[isTeacher]:boolean = true

interface UserAcademy extends User {
    isTeacher:boolean
}

const newUser:UserAcademy = { ...user, isTeacher: true }

/**4
 * Crea una función que reciba por parámetro las propiedades del objeto anterior por separado,
 *  construye dicho objeto y devuelvelo.
 *  Después imprime el resultado usando console.log()
 */

function constructorOfUserAcademy( _userName:string, _userLastName:string, _userAge:number, _isTeacher:boolean ) :UserAcademy {
    const result:UserAcademy = {userName: _userName, userLastName: _userLastName, userAge: _userAge, isTeacher: _isTeacher}
    return result
}

/**5
 * Dado el siguiente objeto el Javascript, define una interfaz para el:
    const spiderman = {
        name: "Peter Parket",
        actor: "Tom Holland",
        films: ["Homecomming", "Far from home", "No way home"],
    };
 */

interface Character {
    name:string
    actor:string
    films:string[]
}

const spiderman:Character = { name: 'Peter Parket', actor: 'Tom Holland', films: ["Homecomming", "Far from home", "No way home"] }

/**6
 * Define la misma estructura de antes pero en lugar de usando interfaces, usando type.
 */

type ComicCharacter = {
    name:string
    actor:string
    films:string[]
}


/** 7
 * Ahora define tres variabes de tipo Spiderman, una para cada actor: “Tom Holland”, “Andrew Garfield” y “Tobie Maguire”.
 */

let tomHolland, andrewGarfield, tobieMaguire : Spiderman

/** 8
 * Usando definiciones avanzadas de tipos y partiendo del tipo SpidermanBase,
 *  crea un tipo FirstSpiderman, SecondSpiderman y ThirdSpiderman, haciendo referencia al nombre del actor.
 *  A su vez, crea un tipo Spiderman, que pueda ser de los tres anteriores.
 */

type SpidermanBase = {}
type FirstSpiderman = SpidermanBase & { actorName: 'first spiderman actor name' }
type SecondSpiderman =  SpidermanBase & { actorName: 'second spiderman actor name'}
type ThirdSpiderman =  SpidermanBase & { actorName: 'TomHolland'}
type Spiderman = FirstSpiderman | SecondSpiderman | ThirdSpiderman


/** 9
 * ¿Qué ocurre cuando creas una variable de tipo Spiderman 
 * y le intentas asignar un actor que no es uno de los tres definidos?
 */

tomHolland = { actorName: 'TomHolland'}

//const newSpiderman:Spiderman = tomHolland
//Type '{ actorName: string; }' is not assignable to type 'Spiderman'.
 //Types of property 'actorName' are incompatible.
 //Type 'string' is not assignable to type '"first spiderman actor name" | "second spiderman actor name" | "third spiderman actor name"'.

const thirdSpiderman:ThirdSpiderman = { actorName: 'TomHolland' }
const otherSpiderman:Spiderman = thirdSpiderman
const otherOneSpiderman:Spiderman = { actorName: 'TomHolland'}
const theLastOneSpiderman:Spiderman = otherOneSpiderman
