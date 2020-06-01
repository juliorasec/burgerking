const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.set("view engine", "njk");

nunjucks.configure("src/app/view", {
  express: server,
  autoescape: true,
  noCache: true,
});

// ? caso queira usar essa mesma api, para outro endereço um ,  npm install cors , server.use(cors());


server.use(express.static("public"));

server.get('/', (req, res)=> {
  return res.render('home/index');
})

server.listen(1313, () => console.log("Server is Running"));