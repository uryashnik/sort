import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';

const numberCollection = new NumbersCollection([4, -3, 11, 2]);
console.log(numberCollection);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection);
