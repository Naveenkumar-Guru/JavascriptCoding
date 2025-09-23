//spread operator (...) to copy and merge arrays in JavaScript
//1. Copy an Array
let Array1 = [1, 2, 3, 4, 5];
let copyarry = [...Array1];
console.log(Array1);
console.log(copyarry === Array1);

// //2. Merge Two Arrays
let mergearray1 = [10, 20, 30];
let mergearray2 = [40, 50, 60];
let mergetwoarrays = [...mergearray1, ...mergearray2];
console.log(mergetwoarrays);

// //3.Merge with Extra Values
let arr1 = [1, 2, 3];
let arr2 = [5, 6, 7];
let newarray = [0, ...arr1, 4, ...arr2];
console.log(newarray);

//.with out spread operator(...) you can copy and merge arrays using traditional methods in JavaScript.

// //1. Using slice();
let a1 = [101, 102, 103, 104];
let a2 = a1.slice();
console.log(a1);
console.log(a2 === a1);

//2.Using Array.from()
let b1 = [104, 105, 108, 105];
let b2 = Array.from(b1);
console.log(b2);

//3.Add values before and after
let c1 = [3, 4, 5, 6];
let c2 = [1, 2].concat(c1, [100]);
console.log(c2);

let d1 = [1001, 1002];
let d2 = [1003, 1005];
let d3Merge = [1006].concat(d1, [1007], d2);

console.log(d3Merge);
