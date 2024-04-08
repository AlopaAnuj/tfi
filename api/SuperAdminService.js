const wrap = require("async-middleware").wrap;
const router = require("express").Router();
const AdminDb = require("../datbase/AdminDb.js");
const SchemaValidator = require("../utils/SchemaValidation.js");
const JoiSchema = require("./JoiSchema.js");
const { computeHash, getHashedPassword } = require("../utils/encrypt.js")
const validateStateId = SchemaValidator(
  JoiSchema.validateStateId,
  "params",
  true
);
const validateCondidateId = SchemaValidator(
  JoiSchema.condidateId,
  "params",
  true
);
router.get(
  "/getAllStateUsers",
  wrap(async (req, res) => {
    let result = await AdminDb.getAllStateUsers(req.dbInstance);
    return res.status(200).json({
      result,
    });
  })
);

router.get(
  "/getAllCondidateOfState/:stateId",
  wrap(validateStateId),
  wrap(async (req, res) => {
    let result = await AdminDb.getAllCondidates(req.dbInstance, req.params.stateId);
    return res.status(200).json({
      result,
    });
  })
);

const validateStateAdminObj = SchemaValidator(
  JoiSchema.validateStateAdmin,
  "body",
  true
);

router.post(
  "/createStateAdmin",
  wrap(validateStateAdminObj),
  wrap(async (req, res) => {
    let transaction = req.transaction;
    let data = {
      userName: computeHash(req.body.userName),
      password: await getHashedPassword(`${req.body.userName}@123`),
      role: req.body.role,
      stateName: req.body.stateName
    }
    if (req.body.id) {
      data.id = req.body.id
    }
    await AdminDb.saveAndUpdateStateAdmin(req.dbInstance, data, transaction);
    return res.status(200).json({
      "statusDescription": "Data saved successfully."
    });
  })
);

router.post(
  "/requesttoapprove/:id",
  wrap(validateCondidateId),
  wrap(async (req, res) => {
    let transaction = req.transaction;
      await AdminDb.approveRequest(req.dbInstance, req.params.id, transaction);
      return res.status(200).json({
          "statusDescription": "Request submitted successfully."
      });
  })
);

router.delete(
  "/logout",
  wrap(async (req, res) => {
      try {
          let transaction = req.transaction;
          let userId = req.user.userId;
          let userDetails = await AdminDb.getUserDetailsByUserId(
              req.dbInstance,
              userId,
              transaction
          );
          if (
              userDetails
          ) {
              let tokenDetails = await AdminDb.getUserIdByAccessToken(
                  req.dbInstance,
                  userId,
                  transaction
              );
              if (tokenDetails) {
                  await AdminDb.removeTokenDetails(
                      req.dbInstance,
                      userId,
                      transaction
                  );
                  return res.status(200).json({
                      statusDescription: "Logged out successfully",
                  });

              } else {
                  return res.status(400).json({
                      statusDescription: "User already logged out.",
                  });
              }
          } else {
              return res.status(400).json({
                  statusDescription: "User does't exist.",
              });
          }
      } catch (er) {
          console.log(er)
      }
  })
);

module.exports = router;
