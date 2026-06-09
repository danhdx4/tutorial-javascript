class User {
    constructor(id, name) {
        this.id = id;
        this.name = name
    }

    nhactay() {
        return "nhac tay";
    }
    
    getInfo() {
        return `Hello ${this.name}`
    }

    di() {
        return "di";
    }
}

let user = new User(1, "danh");

let object = {
    id: 1,
    name: "user",
    di: () => {
        return "Hello";
    }
}

// console.log(user, object)
// console.log(user.getInfo(), object.di())

class Cal {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    sub() {
        return this.a - this.b;
    }
}

class CalFx570 extends Cal {
    constructor(a, b, c) {
        super(a, b)
        this.c = c;
    }

    add() {
        return this.a + this.b + this.c;
    }

    ptb2() {
        
    }
}

let cal = new CalFx570(2, 5, 1);
console.log(cal.add());