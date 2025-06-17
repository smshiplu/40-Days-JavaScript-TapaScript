# Day 25 - 40 Days of JavaScript - Async JavaScript - fetch() API

## **🎯 Goal of This Lesson**

- ✅ Introduction
- ✅ What Will We Learn Today?
- ✅ What is fetch() API
- ✅ fetch() API Syntax
- ✅ fetch() with async/await
- ✅ HTTP Methods
- ✅ feth() - GET Resources
- ✅ fetch() with Query Params
- ✅ fetch() CREATE a Resource
- ✅ fetch() UPDATE a Resource
- ✅ fetch() DELETE a Resource
- ✅ fetch() Custom Headers
- ✅ Create REQUESTs
- ✅ Handling Response &Error
- ✅ Canceling fetch() Request
- ✅ Tasks and Assignments


## **👩‍💻 🧑‍💻 Assignment Tasks**

### ✅ 1. Use `fetch()` to retrieve a list of users from `https://jsonplaceholder.typicode.com/users` and log the names to the console  

```js
    async function retrieveUsers() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            if(!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`)
            }

            const data = await response.json();
            console.log("List of Users", data);
        
        } catch (error) {
            console.error(`User fetch error: ${error.message}`);
        }
    }
  retrieveUsers();
```  


### ✅ 2. Fetch all posts by userId=1 from `https://jsonplaceholder.typicode.com/posts?userId=1` and display the titles in the DOM  

```js
    async function allPostsByUser(userId) {
        try {
            const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
            const searchParams = { userId };
            const searchString = new URLSearchParams(searchParams).toString();
            const API_URL = BASE_URL + "?" + searchString;
            
            const response = await fetch(API_URL);

            if(!response.ok) {
                throw new Error("HTTP Error:" + response.status);
            }

            const data = await response.json();
            displayTitle(data);

        } catch (error) {
            console.error(error.message);
        }
    }
    allPostsByUser(1);

    function displayTitle(data) {
        data.forEach(post => {
            document.getElementById("postTitle").innerHTML += `<h2>${post.title}</h2>`
        })
    }
```  


### ✅ 3. Send a `POST` request to `https://jsonplaceholder.typicode.com/posts` with a new post (title, body, userId). Show the response in console  

```js
    async function addPost() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: crypto.randomUUID(),
                    title: "Learning JavaScript with TapaScript",
                    body: "Day 25 JavaScript fetch() Explained Like Never Before 🤩"
                })
            });

            if(!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response of adding Post",data);

        } catch (error) {
            console.error(error.message);
        }
    }
    addPost();
```

### ✅ 4. Update the post with `ID = 1` by sending a `PUT` request with a new title and body. Use the same endpoint  

```js
    async function updatePost1() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: crypto.randomUUID(),
                    title: "40 Days of JavaScript course is a gem!",
                    body: "Learning JavaScript with TapaScript like never before."
                })
            });

            if(!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response of updating Post by PUT", data);

        } catch (error) {
            console.error(error.message);
        }
    }
    updatePost1();
```  

### ✅ 5. Send a `PATCH` request to update just the title of post `ID = 1`  

```js
    async function updatePost2() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userId: crypto.randomUUID(),
                    title: "Just loving 40 Days of JavaScript!",
                    body: "Learning JavaScript with TapaScript like never before."
                })
            });

            if(!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response of updating Post by PATCH", data);

        } catch (error) {
            console.error(error.message);
        }
    }
    updatePost2();
```  

### ✅ 6. Send a `DELETE` request to remove post with `ID = 1`. Log the status of the response  

```js
    async function deletePost() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            console.log("Status of deleting Post response", response.status);

        } catch (error) {
            console.error(error.message);
        }
    }
    deletePost();
```  

### ✅ 7. Send a POST request to `https://jsonplaceholder.typicode.com/posts` with `Content-Type: application/json` in headers. Log the response  

```js
    async function sendPostRequest() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(!response.ok) {
                throw new Error("HTTP Error", response.status);
            }

            const contentType = response.headers.get("Content-Type")
            console.log("Headers Content-Type:", contentType);

        } catch (error) {
            console.log(error.message);
        }
    }
    sendPostRequest();
```  

### ✅ 8. Create a custom function `request(url, options)` that wraps fetch. Use it to `GET` users and `POST` a new post  

```js
    function request(url, options) {
        const req = new Request(url, options)
        return req;
    }

    const getReq = request("https://jsonplaceholder.typicode.com/users");
    fetchData(getReq);

    const postReq = request("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: crypto.randomUUID(),
            title: "Title added for custom function using Request() constructor",
            body: "The Request() constructor to write cleaner and reusable code for fetching API."
        })
    });
    fetchData(postReq);

    async function fetchData(request) {
        try {
            const response = await fetch(request);
            const data = await response.json();
            console.log("Custom Function Output:", data);
            
        } catch (error) {
            console.error("Custom Function Error:", error.message);
        }
    }
```  

### ✅ 9. Make a fetch call to a broken URL and use `.catch()` or `try...catch` to show a user-friendly error message  

```js
    async function brokenURLFetch() {
        await fetch("https://jsonplaceholder.typicode.com/posts/")
            .then(async (response) => {
                if(!response.ok) {
                    throw new Error(`Broken URL Error: ${response.status}`);
                }
                const data = await response.json();
                    console.log("Correct URL Fetch Data:", data);
                })
            .catch(err => {
                console.error(err);
            })
    }
    brokenURLFetch();
```  

### ✅ 10. Use `AbortController` to cancel a long-running fetch request (you can delay the response using a mock server or setTimeout)

```js
    const controller = new AbortController();
    const signal = controller.signal;

    document.getElementById("abortBtn").addEventListener("click", () => {
        if(controller) {
            controller.abort("User aborted the download action!");
            console.warn("Download Aborted!");
        }
    })

    document.getElementById("downloadBtn").addEventListener("click", downloadFetchRequest);

    async function downloadFetchRequest() {
        try {
            console.log("Downloading...");
            
            setTimeout( async () => {
                const response = await fetch("./download-functionality/file.txt", {signal});
                if(!response.ok) {
                    throw new Error("HTTP Error:", response.status);
                }

                const blob = await response.blob();
                const objectUrl = URL.createObjectURL(blob);

                const link = document.createElement("a");
                link.href = objectUrl;
                link.download = "text.txt";
                link.click();
                URL.revokeObjectURL(objectUrl);
            }, 10000);

        } catch (error) {
            console.log(`Download Error: ${error.message}`);
        }
    }
```

Please find the task assignments in the [Task File](./task.md).