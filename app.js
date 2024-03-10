"use strict";
// lowerCase
let personName = "Tayyaba Naseer Ahmed";
console.log("lowerCase:", personName.toLowerCase());
// upperCase
console.log("upperCase:", personName.toLocaleUpperCase());
// TilteCase
console.log("titleCase:", personName.replace(/\bw/g, c => c.toUpperCase()));
