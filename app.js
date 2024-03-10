"use strict";
function describe_city(city, country = 'Turkey') {
    console.log(`${city}  is in ${country}`);
}
describe_city('Istanbul');
describe_city(' Gaza', 'Palestine');
describe_city('Karachi', 'Pakistan');
