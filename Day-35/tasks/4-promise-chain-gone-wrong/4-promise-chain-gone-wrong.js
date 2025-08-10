console.log(`✅ 4. Promise Chain Gone Wrong

  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data received");
      }, 1000);
    });
  }

  async function start() {
    const data = fetchData()
      .then(res => {
        console.log("Then block:", res);
        throw new Error("Something went wrong!");
      });

    console.log("Data:", await data);
  }

  start();


  - Issue: Error isn’t caught properly. Unhandled rejection occurs.
  - Goal: Catch the error properly using try/catch with await pattern.

  \n`);
console.log(`Ans: \n`);

{
  function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data received");
        // reject("Data cannot be received!")
      }, 1000);
    });
  }

  async function start() {
    try {
      const data = fetchData()
      .then(res => {
        console.log("Then block:", res); // Then block: Data received
        throw new Error("Something went wrong!");
      });

      console.log("Data:", await data); // as soon as error is thrown  this line of code never be executed

    } catch (error) {
      console.error("Error:", error instanceof Error ? error.message : error); //Error: Something went wrong!
    }
  }
  start();
}

