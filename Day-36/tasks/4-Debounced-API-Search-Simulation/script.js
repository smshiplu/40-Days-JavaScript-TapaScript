console.log(`4. Debounced API Search Simulation

Simulate a fetch to search GitHub users using a mock API.
Fire the search only when the user pauses typing for 600ms.

- ✅ Use debounce()
- ✅ Simulate delay with setTimeout()
- ✅ Bonus: Show loading spinner during wait
\n`);

console.log(`Ans:\n`);

async function fetchUser(query) {
  try {
    if(!query.trim()) return;
    
    const letters = query.split("")
    const [first, ...rest] = letters;
    const capitalizeName = first.toUpperCase() +  rest.join("");
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${capitalizeName}`);

    if(!response.ok) {
      throw new Error(`Error: No name found - ${response.status}`);
    }

    const users = await response.json();

    document.getElementById("output").innerHTML = "";
    users.forEach(async user => {
      console.log(`🔍 Found ${users.length} users for query "${query}":
      - ${user.username} (${user.name})`);
      
      document.getElementById("output").innerHTML = `
        <h3>🔍 Found ${users.length} users for query "${query}":</h3>
        <p><strong>- ${user.username} (${user.name})</strong></p>
      `;
    });
    
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
  }
}

function debounce(fn, delay=500) {
  let timer; 

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  }
}

// const searchUser = (e) => {
//   const query = e.target.value;
//   fetchUser(query);
// }

const debounceSearchUser = debounce((e) => {
  const query = e.target.value;
  fetchUser(query);
}, 600);

document.getElementById("search").addEventListener("input", debounceSearchUser);

// Bret, Antonette, Samantha, Karianne, Kamren, Leopoldo_Corkery, Elwyn.Skiles


