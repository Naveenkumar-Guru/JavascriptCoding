let uName = "Naveen";

if (uName.length >= 5) {
  console.log(uName, "valid username username ");
} else {
  console.log(uName, "Invalid username");
}

//for-each
let usernames = ["naveen", "manoj", "jaya", "saravana"];
usernames.forEach((Name) => {
  if (Name.length >= 5) {
    console.log(Name, "Valid username");
  } else {
    console.log(Name, "Invalid username (must be at least 5 characters)");
  }
});
