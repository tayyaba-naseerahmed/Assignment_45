//Do the following to create a program that simulates
// how websites ensure that everyone has a unique username.

//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users.
// Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. 
//If it has, print a message that the person will need to enter a
//new username. If a username has not been used, print a message saying that the username is available.
 let new_users = ["faris","hashim","saadi","mahir","salar"]

 for(let i=0; i < new_users.length; i++){

    if (new_users[i] == "jehan sikandar")
    {console.log(`This username ${new_users[i].toLowerCase().toUpperCase()} is not available`)}
    
    else if(new_users[i] == "birbal")
    {console.log(`This username ${new_users[i].toLowerCase().toUpperCase()} is not available`)}
    
    else
    
    (console.log(`This username ${new_users[i].toLowerCase().toUpperCase()} is avaliable`))
}

  
