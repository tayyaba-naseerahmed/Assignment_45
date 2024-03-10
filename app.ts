let cars: string = 'subaru';

// Test  1: Equality comparison (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(cars == 'subaru'); // True
 
// Test  2: Strict Equality comparison (True)
console.log("Is car === 'subaru'? I predict True");
console.log(cars === 'subaru'); // True

// Test  3:  Inequality comparison (False)
console.log("Is car != 'subaru'? I predict False");
console.log(cars != 'subaru'); //False


// Test  4: Strict Inequality comparison (False) 
console.log("Is car !== 'subaru'? I predict False");
console.log(cars !== 'subaru'); //False

// Test 5: Less than comparison (False)
console.log("Is car < 'subaru'? I predict false.");
console.log(cars < 'subaru'); // False (lexicographic comparison)

//Test 6: Greater than comparison (False)
console.log("Is car > 'subaru'? I predict false.");
console.log(cars > 'subaru'); // False (lexicographic comparison)

// Test 7: Less than or equal comparison (True)
console.log("Is car <= 'subaru'? I predict True.");
console.log(cars < 'subaru'); //True

// Test 8: Greater than or equal comparison (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(cars >= 'subaru');

// Test 9: Checking truthiness (True)
console.log("Is car? I predict True");
console.log(cars); // True (non-empty string is truthy)

// Test 10: Checking falsiness (False)
console.log("Is !car? I predict False");
console.log(!cars); // False (negation of a truthy value)











