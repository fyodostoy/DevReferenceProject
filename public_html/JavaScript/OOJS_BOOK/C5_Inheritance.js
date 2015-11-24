function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function() {
    return this.name;
};

var person1 = new Person('Jack');
lg (Object.getPrototypeOf(person1)); // Person {}
lg(person1.hasOwnProperty('name')); // ture
lg(person1.hasOwnProperty('sayName')); // false
lg(person1.toString()); // [object Object]

// valueOf() used whenever an operator is called on an object
// by default returns object, but in some cases it is overwritten
lg(person1.valueOf()); // Person {name: "Jack"}
var now = Date();
lg (now.valueOf()); // Sat Nov 21 2015 12:22:15 GMT-0800 (Pacific Standard Time)


/* INHERITANCE VIA Object.create() */
var mammel = {
    name: 'some mammel',
    sayName : function() {
        return 'This is ' + this.name;
    }
};

var dog = Object.create(mammel);
dog.name = 'fido';

// OR

var cat = Object.create(mammel, {name: {value: 'Moe'}});

lg(dog.hasOwnProperty('sayName')); // false
lg(dog.hasOwnProperty('name')); // true
lg(mammel.isPrototypeOf(dog)); // true
lg(Object.isPrototypeOf(dog)); // false
lg(dog.sayName());
lg(cat.sayName());

/* INHERITANCE VIA CONSTRUCTOR */
function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}
Rectangle.prototype.getArea = function() {
    return this.length * this.width;
};

function Square(size) {
    // MDN SYNTAX - I prefer this
    //this.base = Rectangle;
    //this.base(size, size);
    this.length=size;
    this.width=size;
}
Square.prototype = new Rectangle(); // make sure constructor won't throw an error with no argument
                                    // and no global var is alteredsuch as a tracker
Square.prototype.constructor = Square; // without this -> Rectangle
var sq1 = new Square(2);
lg(sq1.length);
lg(sq1.getArea());
lg(Square.prototype.constructor); // function Square () { ... }

lg(sq1 instanceof Square); // true
lg(sq1 instanceof Rectangle); // true
lg(sq1 instanceof Object); // true






function lg(o){ console.log(o);}


