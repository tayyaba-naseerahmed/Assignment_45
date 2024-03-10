"use strict";
let guest_list = ['mehmet', 'umar', 'mosa', 'tasmia', 'uzma'];
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam ' + guest_list[i] + ',\nWe invite you on dinner tomorrow.\nThankyou\n');
}
let not_present = 'Tasmia';
let new_guest = 'Motaz Azaiza';
guest_list[3] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + '\nThank You \n');
}
{
    console.log(`Miss.${not_present} 'will not coming for tomorrow dinner.`);
}
