console.log(`Day 24: Master JavaScript async/await & Simplify Promises Like a PRO 🤩\n`);


console.log(`✅ 1. Create a function wait(ms) that returns a promise which resolves after ms milliseconds. Use async/await to log messages before and after the delay\n`);
console.log(`Ans:
  async function wait(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(\`Task 1 done after \${ms} milliseconds!\`)
      }, ms);
    })
  }
  (
    async () => {
      const ret = await wait(1000)
      console.log(ret);
    }
  )()
\n`);
{
  async function wait(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Task 1 done after ${ms} milliseconds!`)
      }, ms);
    })
  }
  (
    async () => {
      const ret = await wait(1000)
      console.log(ret);
    }
  )()
}
console.log(`\n`);


console.log(`✅ 2. Using async/await, log "One", then after 1 second log "Two", then "Three" after another 2 seconds. No setTimeout outside of promises\n`);
console.log(`Ans:
  async function logSequentially() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("One")
      }, 1000);
    })
    .then(one => {
      console.log(one);

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Two")
        }, 2000);
      })
    })
    .then(two => {
      console.log(two);

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Three")
        }, 3000);
      })
    })
    .then(three => console.log(three))
  }

  (
    async () => {
      await logSequentially()
    }
  )()
\n`);
{
  async function logSequentially() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("One")
      }, 1000);
    })
    .then(one => {
      console.log(one);

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Two")
        }, 2000);
      })
    })
    .then(two => {
      console.log(two);

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Three")
        }, 3000);
      })
    })
    .then(three => console.log(three))
  }

  (
    async () => {
      await logSequentially()
    }
  )()
}
console.log(`\n`);


console.log(`✅ 3. Use fetch() with async/await to load a local JSON file (data.json) and display its contents in the console\n`);
console.log(`Ans:
  async function fetchJsonData() {
    try {
      const data = await fetch("./data.json").then(response => response.json());
      console.log(data); //Output: {users: Array(2)}

    } catch (error) {
      console.log(error);
    }
  }
  fetchJsonData();
\n`);
{
  async function fetchJsonData() {
    try {
      const data = await fetch("./data.json").then(response => response.json());
      console.log(data); //Output: {users: Array(2)}

    } catch (error) {
      console.log(error);
    }
  }
  fetchJsonData();
}
console.log(`\n`);


console.log(`✅ 4. Use the public API \`https://jsonplaceholder.typicode.com/users/1\` to fetch and display the user’s name, email, and address on the page\n`);
console.log(`Ans:
async function fetchUser() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1").then(response => response.json());

    document.getElementById("showResult").innerHTML = \`
      <ul>
        <li>Username: \${data.username}</li>
        <li>Email: \${data.email}</li>
        <li>Address: Street \${data.address.street}, Suite \${data.address.suite}, Zip code \${data.address.zipcode}, City \${data.address.city}</li>
      </ul>
    \`
  } catch (error) {
    console.log(error);
  }
 }
 fetchUser();
\n`);
{
 async function fetchUser() {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/users/1").then(response => response.json());
    
    document.getElementById("showResult").innerHTML = `
     <h2>Task: 4</h2>
      <ul>
        <li>Username: ${data.username}</li>
        <li>Email: ${data.email}</li>
        <li>Address: Street: ${data.address?.street}, Suite: ${data.address?.suite}, Zip code: ${data.address?.zipcode}, City: ${data.address?.city}</li>
      </ul>
    `
  } catch (error) {
    console.log(error);
  }
 }
 fetchUser();
}
console.log(`\n`);


console.log(`✅ 5. Modify the previous task to handle errors (e.g., wrong URL) and display a user-friendly error message in the DOM\n`);
console.log(`Ans:
async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1{wrong}")

    if(!response.ok) {
      throw new Error(\`User data cannot be fetch: \${response.status}\`)
    }
    
    const data = await response.json();
    
    document.getElementById("showResult").innerHTML = \`
      <h2>Task: 5</h2>
      <ul>
        <li>Username: \${data.username}</li>
        <li>Email: \${data.email}</li>
        <li>Address: Street: \${data.address.street}, Suite: \${data.address.suite}, Zip code: \${data.address.zipcode}, City: \${data.address.city}</li>
      </ul>
    \`
  } catch (error) {
    console.log(error);
    document.getElementById("showError").innerHTML = \`
    <h2>Task: 5</h2>
    <p style="color:red">\${error.message}</p>\`;
  }
 }
 fetchUser();
\n`);
{
async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1{wrong}")

    if(!response.ok) {
      throw new Error(`User data cannot be fetch: ${response.status}`)
    }
    
    const data = await response.json();
    
    document.getElementById("showResult").innerHTML = `
      <h2>Task: 5</h2>
      <ul>
        <li>Username: ${data.username}</li>
        <li>Email: ${data.email}</li>
        <li>Address: Street: ${data.address.street}, Suite: ${data.address.suite}, Zip code: ${data.address.zipcode}, City: ${data.address.city}</li>
      </ul>
    `
  } catch (error) {
    console.log(error);
    document.getElementById("showError").innerHTML = `
    <h2>Task: 5</h2>
    <p style="color:red">${error.message}</p>`;
  }
 }
 fetchUser();
}
console.log(`\n`);


console.log(`✅ 6. Refactor then/catch to async/await
  fetch('/api/data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
\n`);
console.log(`Ans:
  (async () => {
    try {
      const res = await fetch('/api/data');
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  })()
\n`);
{
  (async () => {
    try {
      const res = await fetch('/api/data');
      const data = await res.json();
      console.log(data);
      
    } catch (error) {
      console.log(error);
    }
  })()
}
console.log(`\n`);