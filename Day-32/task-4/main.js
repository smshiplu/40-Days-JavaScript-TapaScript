console.log(`Day 32 - 40 Days of JavaScript - Modules\n`);

console.log(`4. Mock an API Module

Create api.js that exports functions like fetchUsers, createUser, etc.

- Simulate network delays using setTimeout
- Use these in a frontend to display mock data\n`);
console.log(`Ans:\n`);

// const { fetchUser, createUser } = await import("./util/api.js");

const promise = Promise.all(
  [
    await import ("./util/api.js")
  ]
);

promise.then(  data => {
  
  async function displayUserData() {    
    try {
      const userData = await data[0].fetchUser();

      document.getElementById("fetchedUser").innerHTML = "";
      userData.forEach(user => {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.innerHTML = `<span>User's Name: ${user.name} - Email: ${user.email}</span>`
        ul.appendChild(li);
        document.getElementById("fetchedUser").appendChild(ul);    
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  displayUserData();

  async function addUser() {
    try {
      const userData = {
        name: "Sheikh Azlan",
        username: "azlan",
        email: "azlan@email.com"
      }
      const newUserData = await data[0].createUser(userData);

      document.getElementById("newUser").innerHTML = `
        <p>${newUserData.userData.name}</p> 
        <p>${newUserData.userData.email}</p> 
      `;

    } catch (error) {
      console.error(error);
    }
  }

  addUser();
});



// async function displayUserData() {
//   const result = await fetchUser();
  
//   document.getElementById("fetchedUser").innerHTML = "";
//   result.forEach(user => {
//     const ul = document.createElement("ul");
//     const li = document.createElement("li");
//     li.innerHTML = `<span>User's Name: ${user.name} - Email: ${user.email}</span>`
//     ul.appendChild(li);
//     document.getElementById("fetchedUser").appendChild(ul);    
//   });
// }
// displayUserData();

// async function addUser() {
//   const userData = {
//     name: "Sheikh Azlan",
//     username: "azlan",
//     email: "azlan@email.com"
//   }
//   const newUser = await createUser(userData);

//   document.getElementById("newUser").innerHTML = `
//     <p>${newUser.userData.name}</p> 
//     <p>${newUser.userData.email}</p> 
//   `;
// }
// addUser();


