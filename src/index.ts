import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

// numbers
const numbersCollection = new NumbersCollection([10, -3, 0, 4]);
numbersCollection.sort();
console.log(numbersCollection.data);

// string
const charactersCollection = new CharactersCollection('Xaavb');
charactersCollection.sort();
console.log(charactersCollection.data);

// Linked list
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
