import faker from 'faker';
import {Personne} from './Personne';

export class Chauffeuse extends Personne{
    constructor(){
        super(faker.name.firstName(), 
              {lat: faker.address.latitude(),
              long: faker.address.longitude()});
    }
}