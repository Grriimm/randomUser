import User from './User.js';

const tabUsers = [];

async function getUsers() {
    try{
        const userResponse = await fetch('https://randomuser.me/api/?results=20');
        const userData = await userResponse.json();
        userData.results.forEach((user) => {
            const newUser = (new User(
                user.name.title, 
                user.name.first, 
                user.name.last, 
                user.location.city, 
                user.location.country, 
                user.dob.age, 
                user.email, 
                user.picture.large));
                tabUsers.push(newUser);
        });
        
        tabUsers.sort((a, b) => a.lastName.localeCompare(b.lastName));
        
        tabUsers.forEach((user) => {
            user.render();
        });
    } catch (error) {
        console.error(error)
    }
}

const buttonSortName = document.querySelector("#sort--name");
const buttonSortAge = document.querySelector("#sort--age");

buttonSortName.addEventListener("click", (e) => {
    if (!e.target.classList.contains("selected")) {
        e.target.classList.add("selected");
        buttonSortAge.classList.remove("selected");

        tabUsers.sort((a, b) => {
            return a.lastName.localeCompare(b.lastName);
        });

        tabUsers.forEach((user) => {
            user.render();
        });

    } else {
        console.log("Le bouton est déjà selected");
    }
});

buttonSortAge.addEventListener("click", (e) => {
    if (!e.target.classList.contains("selected")) {
        e.target.classList.add("selected");
        buttonSortName.classList.remove("selected");

        tabUsers.sort((a, b) => {
            return a.age - b.age;
        });

        tabUsers.forEach((user) => {
            user.render();
        });
    } else {
        console.log("Le bouton est déjà selected");
    }
});


getUsers();