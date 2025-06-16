console.log(`Day 25 JavaScript fetch() Explained Like Never Before 🤩\n`);


// ✅ 1. What is fetch() API and syntax?
fetch(URL, options)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))


// ✅ 2. Using async/await with fetch()

//transforming above codes into async/await
async function fetchData(URL, options) {
  try {
    const response = await fetch(URL, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData("http://localhost:3000/posts") 
