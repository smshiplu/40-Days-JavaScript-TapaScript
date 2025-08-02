function isAdmin(user) {
  return user.getRole() === "Admin" ? true : false
}

function isMember(user) {
  return user.getRole() === "Member" ? true : false
}

export {
  isAdmin,
  isMember
}