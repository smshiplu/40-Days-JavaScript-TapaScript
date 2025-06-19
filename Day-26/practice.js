console.log(`Day 26 - 40 Days of JavaScript - Common Mistakes\n`);

// ✅ 1. Promises and Loop

const ids = [1, 2, 3, 4];

function fetchData(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
}

//This doesn't gives the output sequentially
function loopFetches() {
  for (let index = 0; index < ids.length; index++) {
    console.log(`***Fetching details of ID: ${ids[index]}***`);
    const promise = fetchData(ids[index])
    // promise
      // .then(response => {
      //   response.json().then(data => {
      //     console.log(`
      //       ID: ${data?.id},
      //       Name: ${data?.name},
      //       Company: ${data?.company.name},
      //       Address: ${data?.address.city}
      //     `);
      //   })
      // })

    promise
      .then(response => response.json())
      .then(data => {
        console.log(
          `
            Id: ${data?.id},
            Name: ${data?.name},
            Company: ${data?.company?.name},
            Address: ${data?.address?.city}
          `
        );
      })
  }
}
// loopFetches();


//This async/await gives the result sequentially but but this is not the organic way to handle async things.
const loopFetchesAsync = async () => {
  for (let index = 0; index < ids.length; index++) {
    console.log(`***Fetching details of ID: ${ids[index]}***`);
    const response = await fetchData(ids[index]);
    const data = await response.json();
    console.log(
      `
        Id: ${data?.id},
        Name: ${data?.name},
        Company: ${data?.company?.name},
        Address: ${data?.address?.city}
      `
    );
  }
}
// loopFetchesAsync()

//This the organic way to fetch multiple data simultaneously 

const looAll = async () => {
  const responses = await Promise.allSettled(
    ids.map(id => fetchData(id))
  )
  console.log(responses);
  
  // console.log(responses[0].value.json()); // returns promise of value

  const data = await Promise.allSettled(
    responses.map(response => response.value.json()) // returns promises of values
  );
  console.log(data);
  
  
  data.map(userInfo => {
    const user = userInfo.value;
    console.log(`***Fetching details of ID: ${user?.id}***`);
    console.log(
      `
        Id: ${user?.id},
        Name: ${user?.name},
        Company: ${user?.company?.name},
        Address: ${user?.address?.city}
      `
    );
  })
  
  
}
looAll()