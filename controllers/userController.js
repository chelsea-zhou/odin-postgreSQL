const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function searchName(name, res) {
    const usernames = await db.getSeachNames(name);
    console.log("Usernames: ", usernames);
    res.send("seach Usernames containing: " + name + '-' + usernames.map(user => user.username).join(", "));
   
}
async function createUsernameGet(req, res) {
  res.render("newUser");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function deleteAll(req, res) {
    await db.deleteAllNames();
    res.redirect("/");
}
module.exports =  {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchName,
  deleteAll
};
