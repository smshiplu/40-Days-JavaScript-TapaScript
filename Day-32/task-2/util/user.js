const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    userInfo: function() {
      console.log(`User's username: ${this.name} - email: ${this.email}`);
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    userInfo: function() {
      console.log(`User's username: ${this.name} - email: ${this.email}`);
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    userInfo: function() {
      console.log(`User's username: ${this.name} - email: ${this.email}`);
    }
  }
]

export default users;