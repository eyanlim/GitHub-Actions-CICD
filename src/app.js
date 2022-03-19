const express = require("express");
const database = require("../data");
const app = express();

app.get("/", (req, res) =>  {
  res.status(200).send(`<h1>NUS FinTech Batch16 DevOps CI/CD Show & Tell Demo</h1>`)
})

// define an API to return all the users
app.get("/users/all", (req, res) => {
  let users = database.get_all_users();
  res.status(200).send(users);
});

// define an API to get user based on user_id passed in the request
app.get("/users/:uid", (req, res) => {
  let user = database.get_user_by_user_id(req.params.uid);
  res.send(user);
});

// define an API to add new user
app.post("/users/add", (req, res) => {
    let new_user = database.add_user(req.body);
    res.send("User added!");
    });

module.exports = app;