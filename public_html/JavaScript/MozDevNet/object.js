/* 3 ways to create an object */

// 1 - init
var sailboat = {
    name: 'Freya',
    brand: 'Bavaria',
    // Bad choice of Object if you intend to use this as a prototype
    // and update the values of children: See 'Loki' below
    engine : {
        type: 'outboard',
        hrspwr: 35
    },
    club : {
        name : 'Vikings',
        location : 'Jericho'
    },
    getInfo : function() {
        return this.name + " Engine: " + this.engine.type;
    }
};

// 2 constructor
function Kayak(brand, length) {
    this.brand = brand || 'NA';
    this.length = length || 'NA';
}
Kayak.prototype.print = function() {
    return this.brand ;
};

// 3 - Object.create
var loki = Object.create(sailboat);
// update properties
loki.name = 'Loki';
loki.brand = 'Tasar';
/* !! the folowing will change the value of engine in the original 'sailboat 
engine is a pointer to an object so all instances will point to the same object
     loki.engine.type = 'None';
     loki.engine.hrspwr = 0; */
//add properties
loki.numSails = 2;


/* =================++==================*/
/*               EXAMPLES               */
/* =================++==================*/

console.log(sailboat); //Object {name: "Freya", brand: "Bavaria", engine: Object}
console.log(Object.getPrototypeOf(sailboat)); // Object{}

var vscKayak = new Kayak('Nordic', 12);
console.log(vscKayak); // Kayak {brand: "Nordic", length: 12}
console.log(Object.getPrototypeOf(vscKayak)); // Kayak {}
console.log(Kayak.prototype); // Kayak {}
console.log(Kayak.prototype.constructor); // function Kayak() { ...}

console.log(loki); // Object {name: "Loki", brand: "Tasar", numSails: 2}
var lokiProto = Object.getPrototypeOf(loki); 
console.log(lokiProto); // Object {name: "Freya", brand: "Bavaria", engine: Object, club: Object}
console.log(lokiProto.constructor); // function Object() { [native code] }



