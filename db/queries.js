const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function getSeachNames(name) {
    const {rows} = await pool.query(`
        SELECT * FROM usernames WHERE username LIKE '%${name}%'
        `);
    console.log(`db results: ${rows}`);
    return rows;
}
async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllNames() {
    await pool.query("DELETE FROM usernames");
}
module.exports = {
  getAllUsernames,
  insertUsername,
  getSeachNames,
  deleteAllNames
};