//35. Clases
/*class Vehicle{
    brandName: string;

    constructor(b: string){
        this.brandName = b;
    }

    drive(){
        console.log(`conduciendo un ${this.brandName}`)
    }
}

const vehicle = new Vehicle("mazda");
//vehicle.drive();
//console.log(Vehicle);

let motorcycle = {
    brandName: 'yamaha',
    drive: vehicle.drive
}
console.log(motorcycle.drive());*/

//37. Visibilidad de atributos
/*class Vehicle{
    private brandName: string;
    private model: string;
    private color:string;

    constructor(b: string, model: string, color: string){
        this.brandName = b;
        this.model = model;
        this.color = color;
    }

    drive(){
        console.log(`conduciendo un ${this.brandName}, modelo ${this.model} de color ${this.color}`)
    }
}

const vehicle = new Vehicle("mazda", '3', 'azul chiclamino');
vehicle.drive();*/

//38. Atributos en constructor
/*class Vehicle{
    constructor(
        private brandName: string, 
        private model: string, 
        private color: string
        ){}

    drive(){
        console.log(`conduciendo un ${this.brandName}, modelo ${this.model} de color ${this.color}`)
    }
}

const vehicle = new Vehicle("mazda", '3', 'azul chiclamino');
vehicle.drive();*/

//39. Visibilidad de atributos
//READONLY desde el constructor
//READONLY no exste en JS
/*class Vehicle{
    constructor(
        private readonly brandName: string, 
        private readonly model: string, 
        private readonly color: string
        ){}

    drive(){
        console.log(`conduciendo un ${this.brandName}, modelo ${this.model} de color ${this.color}`)
    }
}

const vehicle = new Vehicle("mazda", '3', 'azul chiclamino');
vehicle.drive();*/

//40. Herencia
/*class Vehicle{
    constructor(
        private readonly brandName: string, 
        private readonly model: string, 
        private readonly color: string
        ){}

    drive(){
        console.log(`conduciendo un ${this.brandName}, modelo ${this.model} de color ${this.color}`)
    }
}

class Voiture extends Vehicle{
drive(): void{
    console.log('Estoy conduciendo un auto')
    }
}

const vehicle = new Voiture("mazda", '3', 'azul chiclamino');
vehicle.drive();*/

//41. Visibilidad de herencia
/*class Vehicle{
    constructor(
        protected readonly brandName: string, 
        protected readonly model: string, 
        protected readonly color: string
        ){}

    drive(){
        console.log(`conduciendo un ${this.brandName}, modelo ${this.model} de color ${this.color}`)
    }
}

class Voiture extends Vehicle{
    drive(): void{
        console.log(`Estoy conduciendo un auto ${this.brandName}`);
    }
}

const vehicle = new Voiture("mazda", '3', 'azul chiclamino');
vehicle.drive();*/

//42. GETTER & SETTER
/*
class Vehicle{
    constructor(
        protected readonly brandName: string, 
        protected readonly model: string, 
        protected readonly color: string,
        private price: number
        ){}

    get getPrice(){
        return `El precio actual es ${this.price}`;
    }

    set setPrice(value: number){
        this.price = value;
    }

    drive(){
        console.log(`conduciendo un ${this.brandName}, modelo ${this.model} de color ${this.color}`)
    }
}

class Voiture extends Vehicle{
    drive(): void{
        console.log(`Estoy conduciendo un auto ${this.brandName}`);
    }
}

const vehicle = new Voiture("mazda", '3', 'azul chiclamino', 200);
console.log(vehicle.getPrice);
vehicle.setPrice = 400;
console.log(vehicle.getPrice);*/

//43. Métodos STATIC
/*class Vehicle{
    constructor(
        protected readonly brandName: string, 
        protected readonly model: string, 
        protected readonly color: string,
        private price: number
        ){}

    get getPrice(){
        return `El precio actual es ${this.price}`;
    }

    set setPrice(value: number){
        this.price = value;
    }

    static PriceToCurrency(value: number, typeOfCurrency: string){
        let result = "";
        switch(typeOfCurrency){
            case "USD":
                result = "USD" + value;
                break;
            case "EUR":
                result = "EUR" + value;
                break;
        }
        return result;
    }

    drive(){
        console.log(`conduciendo un ${this.brandName}, modelo ${this.model} de color ${this.color}`)
    }
}

class Voiture extends Vehicle{
    drive(): void{
        console.log(`Estoy conduciendo un auto ${this.brandName}`);
    }
}

const vehicle = new Voiture("mazda", '3', 'azul chiclamino', 200);
console.log(Voiture.PriceToCurrency(200, `USD`));*/

//44. Clases ABSTRACT
/*
abstract class Vehicle{
    constructor(
        protected readonly brandName: string, 
        protected readonly model: string, 
        protected readonly color: string,
        private price: number
        ){}

    get getPrice(){
        return `El precio actual es ${this.price}`;
    }

    set setPrice(value: number){
        this.price = value;
    }

    static PriceToCurrency(value: number, typeOfCurrency: string){
        let result = "";
        switch(typeOfCurrency){
            case "USD":
                result = "USD" + value;
                break;
            case "EUR":
                result = "EUR" + value;
                break;
        }
        return result;
    }

    abstract drive(): void;
}

class Voiture extends Vehicle{
    drive(): void{
        console.log(`Estoy conduciendo un auto ${this.brandName}`);
    }
}

class Avion extends Vehicle{
    drive(): void{
        console.log(`Estoy volando un avion ${this.brandName}`);
    }
}

const vehicle = new Voiture("mazda", '3', 'azul chiclamino', 200);
console.log(Voiture.PriceToCurrency(200, `USD`));*/

//44. CLASSes & INTERFACEs

//Interfaces
//INTERFACE es para definir la estructura de un objeto
interface Billable2{
    currentBill(): string;
}

interface Flyable{
    altitude(): string;
}

//Clase padre
//En CLASS se crean los atributos sin CONST ni LET
//Si se usa ABSTRACT en clases padre, siempre se debe instanciar en clases hijas
abstract class Vehicle{ //Es ABSTRACT por que conceptualmente no está bien
    constructor(
        //PROTECTED: solo puede ser llamado desde aquí y en su herencia
        //PRIVATE: solo puede ser llamado desde aquí
        //READONLY por que conceptualmente esos atributos ya no deben cambiar
        //READONLY desde el constructor
        protected readonly brandName: string, 
        protected readonly model: string, 
        protected readonly color: string,
        private price: number
        ){}

    get getPrice(){//GET por que price es PRIVATE
        return `El precio actual es ${this.price}`;
    }

    set setPrice(value: number){//SET por que price es PRIVATE
        this.price = value; //No se envía como parámetro sino que se le asigna
    }

    //STATIC para evitar el keyword NEW y para propiedades que no varían en el tiempo
    //Por qué STATIC aquí?
    //STATIC para cosas genéricas
    static PriceToCurrency(value: number, typeOfCurrency: string){
        let result = "";
        switch(typeOfCurrency){
            case "USD":
                result = "USD" + value;
                break;
            case "EUR":
                result = "EUR" + value;
                break;
        }
        return result;
    }
    //Aqui el ABSTRACT solo para mostrar que tambien aplica en métodos
    abstract drive(): void;
}

//Clases hijas
//EXTEND para herencia
//IMPLEMENTS para hacer uso de INTERFACEs 
//Al usar INTERFACE se tienen que implementar todas las características que ésta tenga
class Voiture extends Vehicle implements Billable2{
    drive(): void{
        console.log(`Estoy conduciendo un auto ${this.brandName}`);
    }
    currentBill(): string{
        return "La factura es de 100";
    }
}

class Avion extends Vehicle implements Billable2, Flyable{
    drive(): void{
        console.log(`Estoy volando un avion ${this.brandName}`);
    }
    currentBill(): string{
        return "La factura es de 100";
    }
    altitude(): string{
        return "30K ft";
    }
}

//Se crea un objeto de la clase padre
//Se usa CONST ya que no es una CLASS
//Se usa una INTERFACE
//Como no es STATIC se usa NEW
const vehicle: Flyable = new Avion("Boeing", '737', 'gris', 200);

