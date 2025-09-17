console.log(`## 2. Simulate and Break a Cyclic Reference

Observe how cyclic references can cause memory retention.

- Create two objects a and b
- Make them reference each other (a.ref = b and b.ref = a)
- Nullify external references to both

Explain why this may or may not cause a memory leak. Add a.ref = null; b.ref = null; and explain how it helps\n`);

const a = {salary: 100}
const b = {salary: 200}

a.ref = b;
b.ref = a;

console.log(a); // cycling value occurs

a.ref = null;

console.log(a); // {salary: 100, ref: null}

// Explanation: This is the classic example of cyclic reference of memory. When variable a is called, it keeps cycling through its values. Of course, it retains the memory and causes a memory leak, but as soon as the variable a.ref is assigned to null (a.ref = null), at that time the reference is disconnected and the cycling reference no longer occurs.

