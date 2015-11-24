function lg(o){ console.log(o);}

/* DECLARATION VS EXPRESSION */

// declaration : will be hoisted to the top
lg (add(2, 3));
function add(num1, num2) {
    return num1 + num2;
}

// function expression / anonymous function
// fun. exp. is referenced via a variable or property
var sum = function(n1, n2) {
    return n1 + n2;
};
lg (sum(4, 5));

// PARAMETERS AND ARGUMETNS
// function params are stored in an array like structure called arguments
lg (add.length); // -> 2 : the number parameters it expects
lg (add (1, 2, 4, 5)); // -> 3 : accepts the first 2, ignores the rest of params
lg (add (1)); // won't throw an error, -> NaN

function lastArg() {
    return arguments[(arguments.length - 1)];
}
lg (lastArg(1, 13, 17)); // -> 17

/* OVERLOADNG */
// Don't apply to js, but can imitate behaviour
function addOverload(p1, p2){
    var result;
    if (arguments.length===0) {
        result = 'No argument!';
    }
    else if (arguments.length===1) {
        result = p1;
    }
    else {
        result = p1 + p2;
    }
    return result;
}

lg (addOverload()); // -> no argument!
lg (addOverload(7)); // 7
lg (addOverload(9, 4)); // 13
lg (addOverload(9, 4, 6)); // 13
    
/* OBJECT METHOD */
// pass this object to a function
// cal(this, param1, ..., paramN) , apply(this, arrayOfParams) , bind()
function sayName(label) {
    return label + ' : ' + this.name;
}

var person1 = { name: 'John' };
var person2 = { name: 'Jill'}

lg (sayName.call(person1, 'Label for P1')); //Label for P1 : John
lg (sayName.apply(person2, ['L2 for P2'])); //L2 for P2 : Jill

// bind() is used to create a new function by "binding" the old function to an object
var sayNameOfPerson1 = sayName.bind(person1); // no params are bound, need to pass the label
lg (sayNameOfPerson1('Label for binded function')); //Label for binded function : John

var sayNameOfPerson2 = sayName.bind(person2, 'Label for binded - Person 2'); // label param is defined here
lg (sayNameOfPerson2()); // Don't need param -> Label for binded - Person 2 : Jill