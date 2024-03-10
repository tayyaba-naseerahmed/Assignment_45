"use strict";
function city_country(city, country) {
    return (`"${city}, ${country}"`);
}
let F1 = city_country('Istanbul', 'Turkey');
let F2 = city_country('Gaza', 'Palestine');
let F3 = city_country('Karachi', 'Pakistan');
console.log(F1);
console.log(F2);
console.log(F3);
