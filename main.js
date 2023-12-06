// LUMINENCE CALCULATOR

// Input
let R = +prompt("Enter a R color valu (Red):");
let G = +prompt("Enter a B color value (Blue):");
let B = +prompt("Enter a B color value (Blue):");

console.log(R);
console.log(G);
console.log(B);

// Process
let brightness = Math.sqrt(0.299 * R ** 2 + 0.587 * G ** 2 + 0.114 * B ** 2);

// Output
alert(`The brightness is: ${brightness}`);
