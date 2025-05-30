console.log(`Day 18 - 40 Days of JavaScript - DOM Manipulations\n\n`);
console.log(`
`);
{
//Creating element
const pElem = document.createElement("p");
pElem.innerText = "This paragraph created dynamically.";
document.body.appendChild(pElem);
console.log(pElem); //<p>This paragraph created dynamically.</p>
}
console.log(`\n`);

{
//Inserting element

//Insert before
const spanElem = document.createElement("span");
spanElem.innerText = "Dynamically created span tag and inserted before paragraph which has a class 'lorem-para'";
console.log(spanElem); //Output: <span>Dynamically created span tag and inserted before paragraph which has a class 'lorem-para'</span>
const loremPara = document.querySelector(".lorem-para");
document.body.insertBefore(spanElem, loremPara);

//Insert after
const spanElem2 = document.createElement("span");
spanElem2.innerText = "Dynamically created span tag and inserted after paragraph which has a class 'lorem-para'";
document.body.insertBefore(spanElem2, loremPara.nextElementSibling);
}
console.log(`\n`);

{
//Modifying content 
//difference between textContent and innerText
const divElem = document.querySelector("div");
console.log("innerText: ", divElem.innerText); // don't get the element which has css display: none  
console.log("textContent: ", divElem.textContent); // get the element which has css display: none 
console.log("innerHTML: ", divElem.innerHTML); // get entire child elements with it's text content


//Removing element/Replacing elements
const ulElem = document.getElementById("myList");
const childrenOfUlElem = ulElem.children;
const itemToRemove = childrenOfUlElem[0];
// ulElem.removeChild(itemToRemove);

// ulElem.innerText = ""

// ulElem.replaceChildren() 

// ulElem.replaceChildren('Element to replace with the child li');
}
console.log(`\n`);

{
  //Traversing/Navigation DOM

  //To traverse or navigating through nodes from child to parent, there are two property is used, parentElement and parentNode 
  const spanElem = document.querySelector(".text");
  console.log("parentElement", spanElem.parentElement);
  console.log("parentNode", spanElem.parentNode);
  
  //children and childNodes
  const mainElem = document.getElementById("main-id");
  console.log("children", mainElem.children); // .children returns HTMLcollection of immediate child element
  console.log("childNodes", mainElem.childNodes); // .childNodes returns NodeList of immediate child element's nodes

  //firstChild and firstElementChild
  console.log("First Child", mainElem.firstChild); // .firstChild returns first node of an element
  console.log("First Child Element", mainElem.firstElementChild); // .firstElementChild returns the first element.

  //lastChild and lastElementChild
  console.log("Last Child", mainElem.lastChild);
  console.log("Last Child Element", mainElem.lastElementChild);
  
  //nextSibling and nextElementSibling
  const ulElem = document.getElementById("myList").children;
  console.log("Next Sibling", ulElem[0].nextSibling); // Returns text node
  console.log("Next Sibling Element", ulElem[0].nextElementSibling); // return <li>B</li>

  //previousSibling and previousElementSibling
  console.log("Previous Sibling", ulElem[0].previousSibling); // Returns text node
  console.log("Previous Sibling Element", ulElem[1].previousElementSibling); // return <li>A</li>
}



