import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumbersCollection([4, -3, 11, 2]);
console.log(numberCollection);
numberCollection.sort();
console.log(numberCollection);

const charactersCollection = new CharacterCollection('ZxXYmba');
console.log(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
linkedList.print();
linkedList.sort();
linkedList.print();
