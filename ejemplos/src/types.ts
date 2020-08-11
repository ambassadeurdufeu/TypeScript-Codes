/*7. TIPOS PRIMITIVOS */

/*Usando anotación de tipos
let vehiculo: string;
let cantidad: number;
let esAutomovil: boolean;*/

//Usando inferencia de tipos

let vehiculo = "automovil";
let cantidad: 1;
let esAutomovil: true;

/* Usando tambien inferencia de tipos
cantidad = 2*4;
*/

/*8.TIPOS NO PRIMITIVOS */
/*Con anotación
let persona:{
    nombre: string,
    edad: number,
    direccion:{
        calle: string,
        comuna: string
    }
} = {
    nombre: 'Erick',
    edad: 25,
    direccion:{
        calle:'Paseos CDMX',
        comuna:'Lomas',
    }
};
*/
/*Con inferencia
let persona= {
    nombre: 'Erick',
    edad: 25,
    direccion:{
        calle:'Paseos CDMX',
        comuna:'Lomas',
    }
};


console.log(persona.edad);*/

/*9. TIPO ARRAY */
let persona= {
    nombre: 'Erick',
    edad: 25,
    direccion:{
        calle:'Paseos CDMX',
        ciudad:'CDMX',
    },
    /*Declarandolo dentro del objeto persona */
    cursos: ['TypeScript', 'Node', 'Python']
};

/*Declarandolo de forma independiente*/
let hobbies=['Deporte', 'Audio', 'Trading'];

/*Imprimiendo el arreglo como tal*/
console.log(hobbies);

/*Imprimiendo los elementos del arreglo*/
for(const hobbie of hobbies){
    console.log(hobbie.toLocaleUpperCase());
}

/*10. Tuplas*/
//Las tuplas sirven para restringir el tipo de dato dentro de un arreglo
type vehiculoType = [string, number, string];
let automovil : [string, number, string] = ['mazda', 2020, 'rojo'];
let motocicleta: vehiculoType = ['yamaha', 2020, 'rojo'];
console.log(automovil);

/*11. Enums */
//ENUM te regresa el valor de la categoría a la que pertenece un arreglo
//puede ser útil para clasificar objetos.
enum role {estudiante, profesor}
let persona2= {
    nombre: 'Erick',
    edad: 25,
    direccion:{
        calle:'Paseos CDMX',
        ciudad:'CDMX',
    },
    /*Declarandolo dentro del objeto persona */
    cursos: ['TypeScript', 'Node', 'Python'],
    role: role.estudiante
};

console.log(persona2);

//13. Union
//UNION es el operador or |
//UNION sirve para restringir también el tipo de dato
//UNION ya te resalta el error desde el código incluso sin compilar.
function padLeft(value: string, padding: string | number){
    if(typeof padding === 'number'){
        return Array(padding + 1).join(' ') + value;
    }

    if(typeof padding === 'string'){
        return padding + value;
    }

    throw new Error(`Espera unstring pero recibi '${padding}'.`);
}

console.log(padLeft('Hola Mundo', 20));

//14. Literal
let vehiculo2: 'automovil';
vehiculo2 = 'juasjuas';

