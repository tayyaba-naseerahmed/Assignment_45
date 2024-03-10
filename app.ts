//Unchanged Magicians: Start with your work from Exercise 40. Call the
//function make_great() with a copy of the array of magicians’ names. Because the
//original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original
//names and one array with the Great added to each magician’s name.

function show_magicians( magicians: string[]) {
    for ( let magician of magicians) {
        console.log( magician.charAt(0). toUpperCase() + magician.slice(1))
    }
    }
function make_great( magician: string [] ) {
    for (let i = 0; i < show_magicians.length; i++){
        magician[i] = magician[i] +  'The Great'
    }
}
function make_great2( magicians:string[]): string [] {
    let Greatmagicians: string[] = [] ;
    for ( let i = 0 ; i < magicians.length ; i ++){
        Greatmagicians.push(magicians [i] + 'The Great' )
    }
    return Greatmagicians ;
}

let magicians2 : string [] = ['Professor Snape ' , 'Tom Riddle' , 'Albus DumbalDoor']
  let magicians3 : string [] =  make_great2(magicians2)
  show_magicians(magicians2);
  show_magicians(magicians2);
  