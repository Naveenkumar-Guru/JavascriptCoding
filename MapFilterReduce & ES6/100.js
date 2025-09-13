// //1. Copy an Array
// let Array1 = [1, 2, 3, 4, 5];
// let copyarry = [...Array1];
// console.log(Array1);
// console.log(copyarry === Array1);

//2. Merge Two Arrays
let mergearray1 = [10, 20, 30];
let mergearray2 = [40, 50, 60];
let mergetwoarrays = [...mergearray1, ...mergearray2];
console.log(mergetwoarrays);

// Merge with Extra Values
let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];
let newarray = [0, ...arr1, 4, ...arr2];
console.log(newarray);
