var guest_list = ['mehmet', 'umar', 'mosa', 'tasmia', 'uzma'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('\n unfortunately we can not arrang big table, only two people allow:');
}
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry Sir/Madam.".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ',\n yes you are still invited on tomorrow dinner \n Thank you \n');
}
guest_list.slice(0, 2);
console.log(guest_list);
