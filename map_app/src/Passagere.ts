import faker from 'faker';
import {Personne} from './Personne';

export class Passagere extends Personne{
    constructor(){
        super(faker.name.firstName(), 
              {lat: faker.address.latitude(),
              long: faker.address.longitude()});
    }
}