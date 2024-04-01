const config = require("config");
const helmet = require("helmet");
const nocache = require("nocache");
const compress = require("compression");
const bodyParser = require("body-parser");
const sequelizedb = require("./sequelizedb");
let tamper = require("./tamper.js");

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
    app.use(
      tamper(function (req) {
        let transactionDone = false;
        let transactionRolledBack = false;
        if (
          req.method != "POST" &&
          req.method != "PUT" &&
          req.method != "DELETE"
        ) {
          return false;
        }
        return async function (body, statusCode) {
          try {
            if (!transactionDone) {
              if (statusCode >= 400) {
                console.log("rollback initiated");
                let t = req.transaction.rollback();
                transactionDone = true;
                await t;
              } else {
                console.log("commit initiated");
                let t = req.transaction.commit();
                transactionDone = true;
                await t;
                console.log("commit successful");
              }
            }
            return body;
          } catch (error) {
            console.log("traction", error)
            if (!transactionRolledBack) {
              console.log("attempt to rollback is initiated");
              req.transaction.rollback().catch((_err) => {
                console.log("error on rolling back ignored");
              });
              transactionRolledBack = true;
            }
            console.log("transaction commit failure");
          }
        };
      })
    );
  };

  exports.sequelizedb = sequelizedb;
