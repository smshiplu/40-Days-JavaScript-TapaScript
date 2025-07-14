export function createUser(userData) {
  return new Promise((resolve, reject) => {
    setTimeout(async () =>{
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify({
            userData
          })
        });

        if(!response.ok) {
          reject(`HTTP Error: ${response.status}`);
        }

        const data = await response.json()
        resolve(data);

      } catch (error) {
        throw Error(error);
      }
    } , 1000)
  });
}
