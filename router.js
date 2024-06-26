const express = require("express");
const router = express.Router();
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
const testServer = (req, res) => {
  return res.status(200).json({
    status: "ok",
  });
}

function routerConfig(){
  router.use("/verifyuser", wrap(verifyUser));
  router.use("/testserver", wrap(testServer));
  router.use("/superadminservice", jwtManager.authoriseAdmin, require("./api/SuperAdminService.js"));
  router.use("/userservice", jwtManager.authoriseUser, require("./api/UserService.js"));
  router.use("/userauthservice", require("./api/UserAuthService.js"));
  return router;
}

module.exports = routerConfig;
