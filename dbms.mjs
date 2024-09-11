import express from "express";
import bodyParser from "body-parser";
import DatabaseManager from "./src/models/DatabaseManager.mjs";

const app = express();
const dbManager = new DatabaseManager();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("static"));

app.get("/", async (req, res) => {
    await dbManager.initDb();
    const users = await dbManager.fetchData("users");
    await dbManager.closeDb();
    res.send(`
        <html>
            <head>
                <title>DBMS Interface</title>
                <link rel="stylesheet" href="assets/css/style.css">
            </head>
            <body>
                <h1>DBMS Interface</h1>
                <form action="/add-user" method="post">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required>
                    <button type="submit">Add User</button>
                </form>
                <h2>All Users</h2>
                <ul>
                    ${users
                        .map(
                            (user) =>
                                `<li>${user.username} <a href="/delete-user?id=${user.id}">Delete</a></li>`
                        )
                        .join("")}
                </ul>
            </body>
        </html>
    `);
});

app.post("/add-user", async (req, res) => {
    const { username, password } = req.body;
    await dbManager.initDb();
    await dbManager.insertData("users", { username, password });
    await dbManager.closeDb();
    res.redirect("/");
});

app.get("/delete-user", async (req, res) => {
    const { id } = req.query;
    await dbManager.initDb();
    await dbManager.deleteData("users", { id });
    await dbManager.closeDb();
    res.redirect("/");
});

app.listen(8004, () => {
    console.log("Server is running on http://localhost:8004");
});
