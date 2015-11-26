
function Employee(name, dept) {
    this.name = name || 'unkwnon';
    this.dept = dept || 'general';
}
Employee.prototype.getInfo = function() {
    return this.name + ' works in ' + this.dept;
};

/* =================++==================*/
/*          METHOD 1: call()            */
/* =================++==================*/
function Manager (name, dept, teamSize) {
    Employee.call(this, name, dept);
    this.teamSize = teamSize;
    this.report = [];
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;    // this is suggested by OOJS book 
                                            // without this line, prototype  and constructor will point to Employee(...)
Manager.prototype.title = 'Mngr';           // ADD after above, otherwise will be overwritten 

/* =================++==================*/
/*          METHOD 2: this.base()       */
/* =================++==================*/
function Engineer (name, dept, exprt) {
    this.base = Employee;
    this.base(name, dept);
    this.exprt = exprt;
    this.proj = [];
}
//Engineer.prototype = new Employee; // !! prototype will point to employee
Engineer.prototype = Object.create(Employee.prototype); // !! prototype will point to Engineer and _proto_ to Employee
Engineer.prototype.constructor = Engineer; // this is suggested by OOJS book. See method 1 above
Engineer.prototype.title = 'P_Eng';   // 
/* =================++==================*/
/*               EXAMPLES               */
/* =================++==================*/
{
    var erc = new Manager('Eric', 'QA', 12);
    console.log(erc); //Manager {name: "Eric", dept: "QA", teamSize: 12, report: Array[0]}
    console.log(erc.title); // Mngr
    console.log(Object.getPrototypeOf(erc)); // Manager {title: "Mngr"} >>
    console.log(Manager.prototype.constructor); // function Manager(...) {...}
}
{
    var kogan = new Engineer('Kogan', 'Dev', 'Mobile');
    console.log(kogan); 
    console.log(Object.getPrototypeOf(kogan)); // 
    console.log(Engineer.prototype.constructor); // function Engineer (...) {...}
}