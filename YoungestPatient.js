// helper function to convert a string into CamelCased string:
const toCamelCase = function(str) {   
    // get the first letter and make it UpperCased:
    let firstLetter = str.substr(0, 1).toUpperCase();
  
    // get the rest of the string and make it LowerCased:
    let rest = str.toLowerCase().substr(1);
  
    return firstLetter + rest;
  };
  
  // constructor function for creating student objects
  // when is called with "new" will auto-magically return the object
  function Student(fName, sName) {
    this.firstName = fName;
    this.surName = sName; 
  
    this.sayFullName = function() {
      console.log(
        toCamelCase(this.firstName) + " " + toCamelCase(this.surName)
      );
    };
  }
  
  // "factory" function for creating student objects
  // we explicitly create and return the object
  function studentFactory(fName, sName) {
    let obj = {};
    obj.firstName = fName;
    obj.surName = sName;
  
    obj.sayFullName = function() {
      console.log(toCamelCase(fName) + " " + toCamelCase(sName));
    };
  
    return obj;
  }
  
  // create students objects by literals:
  let student1 = {
    firstName: "MARia",
    surName: "petrova",
  
    sayFullName: function() {
      // we access the object properties prefexing them with "student1" or "this":
      console.log(toCamelCase(this.firstName) + " " + toCamelCase(this.surName));
    }
  };
  let student2 = {
    firstName: "petaR",
    surName: "ATANASOV",
  
    sayFullName: function() {
      // we access the object properties prefexing them with "student1" or "this":
      console.log(toCamelCase(this.firstName) + " " + toCamelCase(this.surName));
    }
  };
  
  // create student objects with the constructor function:
  let student3 = new Student("stoyan", "IVANOV");
  let student4 = new Student("maRINA", "hristova");
  
  // create student objects with the factory function:
  let student5 = studentFactory("VaSIL", "poPOV");
  let student6 = studentFactory("eliSAVETA", "mihajlova");
  
  // let's test the objects:
  student1.sayFullName();
  student2.sayFullName();
  student3.sayFullName();
  student4.sayFullName();
  student5.sayFullName();
  student6.sayFullName();

  //
  // конструктор за обекти от тип Patient:
  function Patient( age, firstName, lastName ){
    this.age = age;
    this.firstName = firstName;
    this.lastName= lastName;

    // TODO: discuss why this is memory greedy:
    this.printAge = function(){
        console.log( this.firstName + " е на " + this.age + " години.");
    };     
};

// създаване и използване на обектите:
var ivan = new Patient( 60, "Иван", "Иванов");
var petyr = new Patient( 74, "Петър", "Петров");

ivan.printAge();  
petyr.printAge();

// ЗАДАЧА: определяне на по-младия пациент:
// функцията връща true, ако patient1 е по-млад (използваме '<=') от patient2.
// в противен случй - връща false:
function isYounger( patient1, patient2 ){
  // ~~~~~~~~~~~~~~~~~~~~~~ //
  // --> your code here <-- //
  // ~~~~~~~~~~~~~~~~~~~~~~ //

  if(patient1.age <= patient2.age){
    return true;
  }
  else{
    return false;
  }
}

if ( isYounger(ivan, petyr) ){
  console.log(ivan.firstName + " е по-млад от " + petyr.firstName );
}else{
  console.log(petyr.firstName + " е по-млад от " + ivan.firstName );
};