// an array of objects, representing data for a person:
let persons = [
    {
      "gender": "female",
      "age": 32,
      "firstName": "Ada",
      "surName": "Byron"
    },
    {
      "gender": "male",
      "age": 42,
      "firstName": "Asen",
      "surName": "Asenov"
    },  
    { 
      "gender": "male",
      "age": 18,
      "firstName": "Petar",
      "surName": "Petrov"
    },
    {
      "gender": "male",
      "age": 33,
      "firstName": "Ivan",
      "surName": "Ivanov"
    }
  ];
  
  const findYoungestPerson = function(arr) {
    let minAge = arr[0].age;
    let youngestPerson;
  
    for (let i = 0; i < arr.length; i++) {
      let person = arr[i];
  
      if (person.age < minAge) {
        minAge = person.age;
        youngestPerson = person;
      }
    }
  
    return youngestPerson;
  }
  
  let youngestPerson = findYoungestPerson(persons);
  console.log(`The younger person is ${youngestPerson.firstName} - ${youngestPerson.age} years.`);