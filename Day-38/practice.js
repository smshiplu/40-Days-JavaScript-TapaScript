
// cyclic reference

function createCycle(objA, objB) {

  objA.ref = objB;
  objB.ref = objA;
  
  return {
    "a": objA,
    "b": objB
  }
}

console.log(createCycle({salary: 100}, {salary: 200}));
