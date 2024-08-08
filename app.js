const express = require("express");
const controller = require("./controllers/userController");


const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    console.log("usernames will be logged");
    const searchName = req.query.search;
    if (searchName) {
        return await controller.searchName(searchName, res);
    }
    return await controller.getUsernames(req, res);
});

app.get('/delete', async (req, res) => {
    console.log("delete all usernames");
    return await controller.deleteAll(req, res);
})


app.get("/new", async (req, res) => {
    return await controller.createUsernameGet(req, res);
});

app.post("/new", async(req, res) => {
    return await controller.createUsernamePost(req, res);
});

app.listen(3000);