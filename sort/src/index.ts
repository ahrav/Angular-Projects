import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numCol = new NumbersCollection([5, 2, 1, 6]);
numCol.sort();
console.log(numCol.data);

const charCol = new CharactersCollection("jackieee");
charCol.sort();
console.log(charCol.data);

const lCol = new LinkedList();
lCol.add(3);
lCol.add(1);
lCol.add(4);

lCol.sort();
lCol.print();
