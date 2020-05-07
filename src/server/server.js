const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const recipeController = require('./controllers/recipeController')
const cookieParser = require('cookie-parser')

const app = express();
const PORT = 3000;

//Handle parsing of the request body
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser())

app.post('/api/recipes', recipeController.getRecipes, (req, res) => {
  return res.status(200).send(res.locals.recipes)
})

//handle requests for static files
if (process.env.NODE_env === "production") {
  app.use("/build", express.static(path.resolve(__dirname, "../../build")));

  app.get("/", (req, res) => {
    // console.log(req)
    return res.status(200).sendFile(path.resolve(__dirname, "../../index.html"))
  });
}
app.use('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../../index.html"))
})
/*--------------------*/
/*-- Error Handling --*/
/*--------------------*/
app.use("/", (req, res) => {
  res.status(404).send("You made a stupid mistake");
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error!",
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log("Server listening on Port 3000");
});
