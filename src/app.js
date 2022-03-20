const express = require("express");
const database = require("../data");
const app = express();

// Homepage
app.get("/", (req, res) =>  {
  const hostname = req.protocol + '://' + req.headers.host;
  console.log(`Hostname: ${hostname}`); // e.g. http://localhost:3000
  
  res.status(200).send(   
    `
    <div align="center">
    <img src="https://img.shields.io/badge/Demo-NUS%20FinTech%20Batch16%20DevOps%20CI/CD%20Show%20and%20Tell-%20brightgreen" height="50" />

    <br><br> 
    <p style="font-family:verdana;font-size:160%">
    GET requests sample: <br>
    <a href="${hostname}/users/all" target="_blank">${hostname}/users/all</a><br>
    <a href="${hostname}/users/1" target="_blank">${hostname}/users/1</a>
    </p>   

    <p>
    <a href="https://github.com/eyanlim/GitHub-Actions-CICD"><img src="https://img.shields.io/badge/-GitHub%20Actions%20CI/CD-blue?logo=github&logoColor=white&style=flat&label=Lim%20E%20Yan"></a>
    </p>
    </div>
    `
  );  
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
