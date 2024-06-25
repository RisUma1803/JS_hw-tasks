let users = {};

for (let i = 1; i <= 10; i++) { 
    let user = {};
    
    // set user id
    user.id = i;

    let namee = prompt("Enter name for user " + i)
        while (!isNaN(namee)) {
            namee = prompt("Enter valid name")
        };

    // set user name

    user.name = namee;

    let agee = prompt("Enter the age for user "+ i)
    while (isNaN(agee || agee <= 0)) {
        agee = prompt("Enter only number for age")
    }

    user.age = agee;


    // Add user to users object

    users[i] = user
}

for (const id in users) {
    console.log("User "+ users[id].id ,"\nName: "+ users[id].name ,"\nAge: "+users[id].age);
}