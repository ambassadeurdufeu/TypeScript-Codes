export abstract class Personne implements Mappable{
    protected name: string;
    protected location: {
        lat: string,
        long: string
    };

    get getLocation(){
        return this.location;
    }

    constructor(name: string, location:{lat:string, long: string}){
        this.name = name;
        this.location ={
            lat: location.lat,
            long: location.long,
        };
    }
}