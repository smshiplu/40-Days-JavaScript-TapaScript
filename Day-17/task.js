console.log(`Day 17 - Introduction to the DOM with JavaScript Projects\n\n`);

console.log(`## 1. Find the Most Frequent Word in a Paragraph

  Consider the follwoing HTML:

  <div id="text">This is a test. This test is only a test.</div>

  Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

  Hints:

  - Use document.querySelector() or getElementById() to select the paragraph.
  - Convert the text into an array of words.
  - Use querySelector() to display the most frequent word along with the count inside another '<div>'.
\n`);
console.log(`Ans:
  const textElem = document.getElementById("text");
  const mostFrequentWordElem = document.querySelector("#most-frequent-word")
  const words = textElem.textContent.split(" ").join(".").split(".");

  const mostUsedWords = words.filter((word, index, selfArr) => {
    return selfArr.indexOf(word) !== index;
  });

  let counts = {};
  mostUsedWords.forEach((word) => {
    counts[word] = (counts[word] || 0) + 1;
  });
 
  const holdAllValues = [];
  for (const key in counts) {
    holdAllValues.push(counts[key]);
  }

  const maxTimeOfWord = Math.max(...holdAllValues);
  for (const key in counts) {
    if(counts[key] === maxTimeOfWord) {
      mostFrequentWordElem.textContent = ("Most frequent word is - '{key}',  and total count of this word is - {counts[key]}"); // add text dynamically to div

      console.log("Most frequent word is - '{key}',  and total count of this word is - {counts[key]}"); //Output: Most frequent word is - 'test',  and total count of this word is - 2
      break;
    }
  }
`);
{
  const textElem = document.getElementById("text");
  const mostFrequentWordElem = document.querySelector("#most-frequent-word")
  const words = textElem.textContent.split(" ").join(".").split(".");

  const mostUsedWords = words.filter((word, index, selfArr) => {
    return selfArr.indexOf(word) !== index;
  });

  let counts = {};
  mostUsedWords.forEach((word) => {
    counts[word] = (counts[word] || 0) + 1;
  });
 
  const holdAllValues = [];
  for (const key in counts) {
    holdAllValues.push(counts[key]);
  }

  const maxTimeOfWord = Math.max(...holdAllValues);
  for (const key in counts) {
    if(counts[key] === maxTimeOfWord) {
      mostFrequentWordElem.textContent = (`Most frequent word is - '${key}',  and total count of this word is - ${counts[key]}`); // add text dynamically to div

      console.log(`Most frequent word is - '${key}',  and total count of this word is - ${counts[key]}`); //Output: Most frequent word is - 'test',  and total count of this word is - 2
      break;
    }
  }
}
console.log(`\n`);

console.log(`## 2. Create a zebra pattern

  Consider the following HTML:

  <ul id="cars">
    <li>BMW</li>
    <li>Mahindra</li>
    <li>Audi</li>
    <li>Toyota</li>
    <li>Honda</li>
    <li>Hundai</li>
    <li>Tata</li>
    <li>Suzuki</li>
  </ul>

  Now put alternate colors and background colors to each of the list tags. for example,

    - If tne BMW is in white color text, the background should be in black color.
    - Then for the next car it will be reversed, the color is black and the background is white.
    - Then again the next one is white color and background black
    - So on.
\n`);
console.log(`Ans:
  const cars = document.querySelectorAll("li");
  cars.forEach((car, index) => {
    car.style.margin = "10px 0";
    car.style.padding = "5px";
    car.style.border = "1px solid #000";
    car.style.listStyle = "none";

    if(index % 2 === 0) {
      car.style.backgroundColor = "#000"
      car.style.color = "#fff"
    } else {
      car.style.backgroundColor = "#fff"
      car.style.color = "#000"
    }
  });
`);
{
  const cars = document.querySelectorAll("li");
  cars.forEach((car, index) => {
    car.style.margin = "10px 0";
    car.style.padding = "5px";
    car.style.border = "1px solid #000";
    car.style.listStyle = "none";

    if(index % 2 === 0) {
      car.style.backgroundColor = "#000"
      car.style.color = "#fff"
    } else {
      car.style.backgroundColor = "#fff"
      car.style.color = "#000"
    }
  });
}
console.log(`\n`);

console.log(`## 3. Write different ways we can access DOM and what they returns\n`);
console.log(`Ans:
`);
{
  console.log(`
  1. document.getElementsByTagName("h1"), returns HTMLCollection of all the h1 tags\n`, 
  document.getElementsByTagName("h1"), 
  `\n\n`,
  
  `2. document.getElementById("text"), returns the html element which has the id of 'text'\n`,
  document.getElementById("text"),
  `\n\n`,

  `3. document.getElementsByClassName("indian-brand"), returns HTMLcollection of the elements which have the class name of indian-brand\n`,
  document.getElementsByClassName("indian-brand"),
  `\n\n`,

  `4. document.querySelector("ul"), any tag, id or class can be selected using this method. It returns the respective element\n`,
  document.querySelector("ul"),
  `\n\n`,

  `5. document.querySelectorAll("li"), any tag or class can be selected using this method. It returns the NodeList of respective elements\n`,
  document.querySelectorAll("li"),
  );
}
console.log(`\n`);

console.log(`## 4. Find and Replace Text Inside a Page
  Write a script that finds all occurrences of a word inside a '<p>' tag and replaces them with another word dynamically.

  <p id="para">This is a test. This test is only a test.</p>
\n`);
console.log(`Ans:
  const paraElm = document.getElementById("text");
  console.log("Original paragraph - ", paraElm);
  const replacedPara = paraElm.textContent.replace("test", "examine")
  console.log("Paragraph after replacing the word test by examine - ", replacedPara);
`);
{
  const paraElm = document.getElementById("para");
  console.log("Original paragraph - ", paraElm);
  const replacedPara = paraElm.textContent.replace("test", "examine")
  console.log("Paragraph after replacing the word test by examine - ", replacedPara);
}
console.log(`\n`);

console.log(`## 5. Extract and Count Unique Links from a Page

Count all the unique hyperlinks ('<a>') in a page and display their count.\n`);
console.log(`Ans:
  const links = document.querySelectorAll("a");
  const hrefAttributes = [];
  let count = 0;
  links.forEach((link, index) => {
    hrefAttributes.push(link.getAttribute("href"));
  });

  const uniqueAttributes = hrefAttributes.filter((item, index, selfArr) => {
    return selfArr.indexOf(item) === index; 
  });

  console.log("The count of total unique '<a>' tag - ", uniqueAttributes.length); //Output: The count of total unique '<a>' tag -  4
`);
{
  const links = document.querySelectorAll("a");
  const hrefAttributes = [];
  let count = 0;
  links.forEach((link, index) => {
    hrefAttributes.push(link.getAttribute("href"));
  });

  const uniqueAttributes = hrefAttributes.filter((item, index, selfArr) => {
    return selfArr.indexOf(item) === index; 
  });

  console.log("The count of total unique '<a>' tag - ", uniqueAttributes.length); //Output: The count of total unique '<a>' tag -  4
}
console.log(`\n`);



