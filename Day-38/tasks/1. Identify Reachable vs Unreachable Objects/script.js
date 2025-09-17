console.log(`## 1. Identify Reachable vs Unreachable Objects

Write a small program where:

- You create an object user
- Create a second object profile that references user
- Then set user = null

Is the original user object still reachable? Why or why not?\n`);

let user = {
  id: 1,
  name: "shiplu",
}

const profile = user;

user = null;

console.log(profile); // {id: 1, name: 'shiplu'}

// Explanations: Although the user variable is set to null, the variable profile still has the reference in the memory of that particular object. As long as the data has a reference to the variable, the garbage collector doesn't clear that data from the memory. That is something called "Reachable Theory." 