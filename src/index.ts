import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';

const numberCollection = new NumbersCollection([4, -3, 11, 2]);
console.log(numberCollection);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);

const charactersCollection = new CharacterCollection('ZxXYmba');
console.log(charactersCollection);
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(charactersCollection);
