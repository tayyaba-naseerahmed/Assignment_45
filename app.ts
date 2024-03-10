//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

function show_magician(Magician) {
    for(var i = 0 ; i < magicianNames.length ; i++){
        console.log("Magician Name : " + magicianNames[i])
    }
    }
    let  magicianNames = ["Professor Snape", "Albus DumbleDoor" , "Tom Riddle"];

    show_magician(magicianNames);