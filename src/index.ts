import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';

const sorter = new Sorter(new NumbersCollection([4, -3, 11, 2]));
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
