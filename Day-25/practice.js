console.log(`Day 25 JavaScript fetch() Explained Like Never Before 🤩\n`);


// ✅ 1. What is fetch() API and syntax?
// fetch(URL, options)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))


// ✅ 2. Using async/await with fetch()

//transforming above codes into async/await

// async function fetchData(URL, options) {
//   try {
//     const response = await fetch(URL, options);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData("http://localhost:3000/posts");


//✅ 4. fetch() - GET Resources with query parameters

// async function fetchWithQueryParams() {
//   try {
//     const BASE_URL = "https://localhost:3000";
//     const searchParams = {
//       view:100,
//       _embed: "comments"
//     }
//     const queryString = new URLSearchParams(searchParams).toString()
//     // console.log(queryString); //view=100&_embed=comments

//     const API_URL = BASE_URL + "?" + queryString;
//     // console.log(API_URL); //https://localhost:3000?view=100&_embed=comments

//     const response = await fetch(API_URL);

//     if (!response.ok) {
//       throw new Error("HTTP Error:" + response.state);
//     }

//     const data = response.json();

//   } catch (error) {
//     console.error(error);
//   }
// }


//✅ fetch() Custom Headers

async function login(credentials) {
  
  try {
    const response  = await fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer secret-token",
        "Custom-Header": "Learning JS with tapaScript"
      },
      body: JSON.stringify(credentials)
    })
  } catch (error) {
    console.error(error);
  }
}

// login({username: "shiplu", password: "random"});


//✅ Create REQUESTs Object
const request1 = new Request("http://localhost:3000/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: crypto.randomUUID,
    title: "The request() Object constructor, to handle fetch() operation with reusability",
    view: 0
  })
});

async function post(request) {
  try {
    const response = await fetch(request);
    const data = await response.json();
    console.log("RESULT:", data);
    
  } catch (error) {
    console.error("ERROR:",error);
  }
}
// post(request1);

//Now it's very easy and simple task to create another fetch call with the instance to change only the specific options of the request

const request2 = new Request(request1, {
  body: JSON.stringify({
    id: crypto.randomUUID,
    title: "The usefulness of reusability Request() constructor",
    view: 100
  })
})
// post(request2);


// ✅ Handling Response &Error
{
  async function handleResponse() {
    try {
      const response = await fetch(API_URL);

      if(!response.ok) {
        throw new Error("HTTP Error:", response.status);
      }

      const contentType = response.headers.get("Content-Type");
      if(!contentType || !contentType.includes("application/json")) {
        throw new Error("We haven't got JSON");
      }

    } catch (error) {
      
    }
  }

}


// ✅ Canceling fetch() Request : find the example inside the download folder

