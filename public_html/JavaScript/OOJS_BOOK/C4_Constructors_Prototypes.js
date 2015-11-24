function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function() {
    return this.name;
};

var person1 = new Person('Jack');
lg(person1 instanceof Person); // true
lg(person1);
lg(Object.getPrototypeOf(person1));

// you can overwrite the prototype
// but it also overwrites the constructor
Person.prototype = { 
    saySomething : function() {
        return 'something'; 
    } 
};
var person2 = new Person('John');
lg(Object.getPrototypeOf(person2));


function lg(o){ console.log(o);}