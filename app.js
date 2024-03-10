"use strict";
function sandwich(flavour) {
    console.log('sandwich Order:');
    for (let i = 0; i < flavour.length; i++) {
        console.log(`${flavour[i]}`);
    }
}
console.log('This order is for First Customer');
sandwich([' Grilled chicken', 'olive & cheese']);
console.log('This order is for Second Customer');
sandwich(['Ice cream', 'Roasted Beef']);
console.log('This order is for Third Customer');
sandwich(['club', 'Panini']);
