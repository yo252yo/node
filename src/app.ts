import express from "express";
import path from "path";
import * as Router from "./router";

const port = 9090;

const app = express();

// Templates
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../src/views")); // this is run from compiled/

// Post
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router
app.use('/static', express.static(path.join(__dirname, '../src/static'))); // this is run from compiled/
app.use('/', Router.router);

// Activate
app.listen( port, () => {
  console.log( `[APP] server started at http://localhost:${ port }` );
} );
