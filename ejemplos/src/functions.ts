//17. Creando funciones
/*
function sumar(valor: number, valor2: number) : number{
    return valor + valor2;
}

function imprimir(){
    console.log(sumar(2,2))
}

imprimir();*/

//18. Anotaciones en funciones
/*
const sumar = (valor1: number, valor2: number): number =>{
    return valor1 + valor2;
    //Dentro de las llaves puede haber más operaciones
};

const dividir = function(a: number, b:number):number{
    return a/b;
};

function imprimir(): void{
    console.log(sumar(2,2))
}

imprimir();*/

//19. Never en funciones
/*
const throwError = (message: string): never =>{
    throw new Error(message);
};*/

//20. Funciones como tipos
/*
const sumar = (valor1: number, valor2: number): number =>{
    return valor1 + valor2;
    //Dentro de las llaves puede haber más operaciones
};

function imprimir(): void{
    console.log('Test');
}

//Pasas la funcion a un tipo y especificas que estrcutura lleva
//Para evitar pasarle por ejemplo la funcion imprimir que nada tiene que ver
let sumar2: (a: number, b:number) => number;
sumar2 = sumar;
console.log(sumar2(2,2));*/

//21. Funciones callbacks
function imprimir(
    a: number, 
    b:number, 
    mostrar: (value: number) => void
): void{
    let resultado= a + b;
    mostrar(resultado);
}

imprimir(3, 2, x =>{
    console.log(x);
});