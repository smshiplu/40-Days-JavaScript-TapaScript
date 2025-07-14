console.log(`Day 32 - 40 Days of JavaScript - Modules\n`);

console.log(`✅ 2. Create a Feature-Based Module Structure

Create a small blog app where:

- post.js handles posts
- user.js handles user info
- main.js brings it together via import
\n`);
console.log(`Ans:
\n`);

/* *********************************** */
/* *********************************** */

import { default as postList } from "./util/post.js";
import userList from "./util/user.js";

function postByUser() {
  const newPostList = postList.map((post) => {
    const username = userList.map(user => {
      return user.id === post.userId ? user.name : ""
    }).filter(name => name !== "" && name.length > 1);
    
    post.postBy = username;
    return post;
  });

  newPostList.forEach(post => {
    console.log(`\n
      Post Title: ${post.title} \n
      Post Body: ${post.body} \n
      - by ${post.postBy}
    \n`);
  });

  userList.filter(user => {
    user.userInfo()
  })
  
}
postByUser();







