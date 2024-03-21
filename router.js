const express = require("express");
const router = express.Router();
const envVariable = require("./config/envValues.js");
const swaggerUi = require("swagger-ui-express");
const swaggerConfig = require("./SwaggerConfig");
const errorHandler = require("./utils/server.js").errorHandler;
const jwtManager = require("./utils/authenticateToken");
const wrap = require("async-middleware").wrap;

const verifyUser = (req, res, next) => {
  try {
    let token =
      req.headers["x-access-token"] || req.query.token || req.body.token;
    if (token) {
      jwt.verify(token, SECRET_KEY, function (err, decoded) {
        if (err) {
          return res.status(401).json({
            status: 0,
          });
        } else if (decoded.role === 2 || decoded.role === 1) {
          return res.status(200).json({
            status: 1,
          });
        } else {
          return res.status(403).json({
            status: 0,
          });
        }
      });  
    } else {
      return res.status(400).json({
        status: 0,
      });
    }
  } catch (error) {
    return res.status(403).json({
      status: 0,
    });
  }
}
function routerConfig(){
  router.use("/verifyuser", wrap(verifyUser));
  router.use("/adminservice", jwtManager.authoriseAdmin, require("./api/AdminService.js"));
  router.use("/userservice", jwtManager.authoriseUser, require("./api/UserService.js"));
  router.use("/userauthservice", require("./api/UserAuthService.js"));

  router.use(
    "/apidocs",
    swaggerUi.serve,
    swaggerUi.setup(null, {
      explorer: true,
      swaggerUrls: [{ url: `/api/generate-json/v1`, name: "v1" }],
    })
  );
  router.get("/generate-json/:apiVersion", (req, res) =>
    res.status(200).json(swaggerConfig["v1"])
  );
  router.use(errorHandler(envVariable));

  return router;
}

module.exports = routerConfig;
