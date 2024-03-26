const config = require("config");
const helmet = require("helmet");
const nocache = require("nocache");
const compress = require("compression");
const bodyParser = require("body-parser");
const sequelizedb = require("./sequelizedb");

exports.startServer = async function (app) {  
      console.log("starting the server.....");
      let http = require("http");
      let server = http.createServer(app);

      server.keepAliveTimeout = 90 * 1000;
      server.listen(config.port, function (err) {
      console.log("server starting at port " + config.port);
      if (err) {
        console.log(err);
        throw err;
      }
    });
  };

exports.setupApp = function (app, getDBInstance, shouldCache) {
    app.use(
      helmet({
        hidePoweredBy: true,
        xssFilter: true,
        noSniff: true,
        hsts: {
          maxAge: 15552000,
          includeSubDomains: false,
        },
        frameguard: {
          action: "sameorigin",
        },
        referrerPolicy: {
          policy: "same-origin",
        },
      })
    );
    if (!shouldCache) {
      app.use(nocache());
    }
  
    app.use(compress());
    app.use(
      bodyParser.json({
        limit: "2mb",
      })
    );
    app.use(
      bodyParser.urlencoded({
        extended: true,
      })
    );
    app.use(bodyParser.text());
    app.use((req, res, next) => {
      console.log({
        url: req.url,
        method: req.method,
        description: "Request received",
      });
      res.on("finish", () => {
        console.log({
          url: req.url,
          method: req.method,
          status: res.statusCode,
          contentType: res.get("Content-Type"),
        });
      });
      next();
    });

    app.use(async function (req, res, next) {
      if (getDBInstance) {
        req.dbInstance = getDBInstance(req);
        if (req.dbInstance == undefined) {
          return res.sendStatus(400);
        }
        if (
          req.method == "POST" ||
          req.method == "PUT" ||
          req.method == "DELETE"
        ) {
          req.transaction = await req.dbInstance.sequelize.transaction();
        }
      }
      next();
    });
  };

  exports.sequelizedb = sequelizedb;
