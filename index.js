// code your solution here
// index.js

// Define the superbowlWin function
function superbowlWin(recordArray) {
  // Use the find method to return the first object in the array that has a result property equal to "W"
  const win = recordArray.find(record => record.result === "W");

  // Return the year property of the returned object, or undefined if no object has a result property equal to "W"
  return win ? win.year : undefined;
}

// Define the record array for the Denver Broncos
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "L"},
  { year: "2013", result: "L"},
  //...
];


// Use the superbowlWin function to return the year if the result key matches "W"
const finalResult = superbowlWin(record);


// Log the finalResult to the console
console.log(finalResult); // Output: "2015"

