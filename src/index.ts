import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const charCollection = new CharactersCollection('Xaayb');

const sorter = new Sorter(charCollection);
sorter.sort();

console.log(charCollection.data);
