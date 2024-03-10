"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
let magicians_names = ["Professor Snape", "Albus DumbalDoor", "Tom Riddle"];
show_magicians(magicians_names);
