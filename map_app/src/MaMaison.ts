import { Personne } from "./Personne";

export class MaMaison implements Mappable{
    private location:{
        lat: string;
        long: string;
    };

    get getLocation(){
        return this.location;
    }

    constructor(passagere: Personne){
        this.location = {
            lat: (parseInt(passagere.getLocation.lat) + 0.0002).toString(),
            long: (parseInt(passagere.getLocation.long) + 0.0001).toString(),
        }
    }
}