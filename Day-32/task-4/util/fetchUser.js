export function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(async () =>{
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      
        if(!response.ok) {
          reject(`HTTP Error: ${response.status}`);
        }

        const data = await response.json()
        resolve(data);

      } catch (error) {
        throw Error(error);
      }
    }, 1000)
  })
}