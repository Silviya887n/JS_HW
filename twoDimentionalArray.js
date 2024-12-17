let fruitsData = [
    ["apple", "orange", "cherry"],
    [1.2, 2.0, 3.5],
  ];
  
  // TASK: log in console each fruit and its price
  
  // YOUR CODE HERE
  let larr =fruitsData[0];
  for (let i = 0; i < larr.length; i++) {
   
    console.log(`${fruitsData[0][i]} = ${fruitsData[1][i]}`)
  }
  
  // EXPECTED OUTPUT:
  // apple = 1.2,
  // orange = 2.0,
  // cherry = 3.5