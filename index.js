const envVariable = require("./config/envValues.js");
const routerConfig = require("./router.js");
const express = require("express");
const models = require("./models/index");
const app = express();
const compress = require("compression");
const bodyParser = require("body-parser");
const cors = require("cors");
const DB = require("./utils/server.js").sequelizedb;
const server = require("./utils/server.js")


DB.initialize(envVariable);
for (let prop of Object.keys(DB)) {
  if (prop !== "initialize") {
    DB[prop] = models.attachModels(DB[prop].sequelize, DB[prop].Sequelize);
  }
}

function getDBInstance() {
  let country = envVariable.defaultCountry;
  return DB[country];
}
server.setupApp(app, getDBInstance)
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));
app.use(cors());

app.use("/api", routerConfig());

Object.defineProperty(DB, "usingSequelize", {
  value: true,
  enumerable: false,
});

server.heartbeat.initialise(
  DB,
  envVariable.healthCheckPort
);
server.startServer(app).catch((err) => {
    console.log(err)
//   logger.info(err);
});

