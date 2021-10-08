class Sorter {
  // collection: number[];

  // constructor(collection: number[]){
  //   this.collection = collection;
  // }

  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // if collection is array of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }

        // if collection is string
        // some logic for strinngs
        if (typeof this.collection === 'string') {
        }

        // if collection is LinkedList
        if (this.collection instanceof LinkedList) {
        }
      }
    }
  }
}

const sorter = new Sorter([4, -3, 11, 2]);
console.log(sorter.collection);
sorter.sort();
console.log(sorter.collection);
