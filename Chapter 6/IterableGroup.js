class Group {
    constructor() {
        this.elements = [];
    }

    add(element) {
        if (!this.has(element))
            this.elements.push(element);
    }

    delete(element) {
        if (this.has(element))
            this.elements.splice(this.elements.indexOf(element), 1);
    }

    has(element) {
        return this.elements.includes(element);
    }

    static from(obj) {
        let newGroup = new Group();
        for (let element of obj) {
            newGroup.add(element);
        }
        return newGroup;
    }


}

let g1 = Group.from(["a", "b", "c"]);

	g1[Symbol.iterator] = function() {
        return {
            index: 0,
          	arr: this.elements,

            next() {
                if (this.index <= this.arr.length - 1) {
                    return {
                        done: false,
                        value: this.arr[this.index++]
                    };
                } else
                    return {
                        done: true
                    };
            }
        }
    }

  

for (let value of g1) {
    console.log(value);
}
// → a
// → b
// → c