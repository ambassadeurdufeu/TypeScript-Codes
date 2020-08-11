//33. Interface
enum Role{
    Doctor,
    Anestesista,
    Asistente,
    Administrativo
}

//Interfaces
interface Staff{
    name: string,
    email: string,
    role: Role
}

interface Billable{
    total: number,
    currentBill(): string
}

//Objetos
const  medico = {
    name: "Natalia",
    email: "nat@gmail.com",
    role: Role.Doctor,
    total: 25,
    currentBill(){
        return `Valor actual de la factura es de ${this.total}`
    }
};

//Funciones
const printStaff = (staff: Staff) =>{
    console.group(staff);
}

const printCurrentBill = (bill: Billable) =>{
    console.log(bill.currentBill());
}

printStaff(medico);

printCurrentBill(medico);