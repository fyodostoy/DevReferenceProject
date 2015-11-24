function lg(o){ console.log(o);}

/* PRIMITIVE TYPES */
var name = 'Jackson'; //string
var number = 17; // number
var bool = true; // boolean
var nothing = null; // null
var undef; // undefined

lg (typeof name);
lg (typeof number);
lg (typeof bool);
lg (typeof undef);
lg (typeof nothing); // !! object
// use this instead
lg (nothing === null);

// primitive methods
lg (name.toUpperCase()); 
lg (name.charAt(0));
lg (name.substr(1, 4)); // -. acks : inclusive
lg (number.toFixed(2)); // 17.00
lg (number.toString(16)); // -> 11 : hex number

/* REFERENCE TYPES */
var object1 = new Object();
object1.name = 'One';
var object2 = object1; // both pointing/referncing to the same object/location in memory

// DEREFRENCING 
object1 = null; // usefull for garbage collection
// this will NOT work anylonger : lg (object1.name); 
lg (object2.name); // this still works

// BUILT-IN REFERENCE TYPE
// 1- Array
var items = new Array('book', 'laptop');
var tools = ['hammer', 'cutter'];
// 2- Date
var now = new Date();
// 3- Error
var error = new Error ('Oppps!');
// 4- Function 
var func1 = new Function("alert('Dont use this syntax');"); // !! Dont use this syntax!
function func2() {
    alert('Always use this syntax');}
// 5 - Object
var obj1 = new Object();
obj1.name = 'Obj Ori JS book';
var obj2 = { name: 'Obj Ori JS book'};
// 6- RegExp
var nums1 = new RegExp('\\d+', 'g');
var nums2 = /\d+/g;

// PROPERTY ACCESS
// dot notation
items.push('cellphone');
// bracket notation
// usefull for dynamic access
var method = 'push';
items[method]('pen');
lg( items[3]); // -> pen

// IDENTIFYING REFERENCE TYPES
// typeof returns object for all but function
// use 'instanceof constructor'
lg (items instanceof Array); // true
lg (items instanceof Object); // also true
lg (items instanceof Function); // false

// instanceof can get confused if an array is passed between frames
// ECMAScript 5 : Array.isArray();
lg (Array.isArray(items));

// PRMITIVE WRAPPER TYPES
// String, Number, Boolean
// Don't use!!