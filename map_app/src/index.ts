import { Map } from "./Carte";
import { Chauffeuse } from "./Chauffeuse";
import { Passagere } from "./Passagere";
import { MaMaison } from "./MaMaison";

var map = new Map ("map"); 
const chauffeuse = new Chauffeuse();
const passagere = new Passagere();
const maMaison = new MaMaison(passagere);

map.AddMarker(chauffeuse);
map.AddMarker(passagere);
map.AddMarker(maMaison);



