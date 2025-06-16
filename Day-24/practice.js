console.log(`Day 24: Master JavaScript async/await & Simplify Promises Like a PRO 🤩\n`);

//The async Keyword
{ 
  async function foo() {
    return 101;
  }
  console.log(foo()); //Output: Promise {<fulfilled>: 101}

  async function bar() {
    return Promise.resolve(101);
  }
  console.log(bar()); //Output: Promise {<pending>}

  bar().then(value => {
    console.log(value);
  })
}

//The await Keyword
{
  async function bar() {
    return Promise.resolve("The await keyword!");
  }
  async function tacklePromise() {
    const retBar = await bar();
    console.log(retBar)
  }
  tacklePromise();
}

// async/await in Multiple promises

const JOKE_API = "https://official-joke-api.appspot.com/random_joke";
const CAT_API = "https://catfact.ninja/fact"

// Promise.allSettled([JOKE_API, CAT_API])
//   .then(result => {
//     console.log(result);
//   })

// Promise.allSettled([
//   fetch(JOKE_API),
//   fetch(CAT_API)
// ]).then(result => {
//   console.log(result);
// })

async function resolveMultiplePromise() {
  const response = Promise.allSettled([
    fetch(JOKE_API),
    fetch(CAT_API)
    // JOKE_API, CAT_API
  ]);

  const data = await response;
  console.log(data);
  
  const joke_api_result = await data[0]?.value.json();
  const cat_api_result = await data[1]?.value.json();

  console.log(joke_api_result);
  console.log(cat_api_result);
}
resolveMultiplePromise();

async function resolveMultiplePromiseV2() {
  const response = await Promise.allSettled([
    fetch(JOKE_API).then(response => response.json()),
    fetch(CAT_API).then(response => response.json()),
  ]);

  console.log(response);

  const joke_api_result = response[0]?.value
  const cat_api_result = response[1]?.value

  console.log(joke_api_result);
  console.log(cat_api_result);
  
}
 resolveMultiplePromiseV2();

 