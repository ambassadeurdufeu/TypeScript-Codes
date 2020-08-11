import { Personne } from "./Personne";

export class Map{
    private googleMap: google.maps.Map;
    constructor(divId: string){
        this.googleMap = new google.maps.Map(document.getElementById(divId)!,{
            zoom: 1,
            center:{
                lat: 0,
                lng:0,
            },
        });
    }

    AddMarker(mappable: Mappable){
        const infoWindow = new google.maps.InfoWindow({
            content: "Salut a tous!",
        });
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat: parseInt(mappable.getLocation.lat),
                lng: parseInt(mappable.getLocation.long),
            },
        });

        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker);
        });
    }
}