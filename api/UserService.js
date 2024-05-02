const wrap = require("async-middleware").wrap;
const router = require("express").Router();
const AdminDb = require("../datbase/AdminDb");
const SchemaValidator = require("../utils/SchemaValidation");
const JoiSchema = require("./JoiSchema.js");
const UserEnum = require("../lookup/UserEnum.js")
const { computeHash, getHashedPassword } = require("../utils/encrypt.js")

const validateCondidateObj = SchemaValidator(
    JoiSchema.validateCreateCondidate,
    "body",
    true
);

router.post(
    "/addCondidate",
    wrap(validateCondidateObj),
    wrap(async (req, res) => {
        let transaction = req.transaction;
        req.body.userId = req.user.userId;
        req.body.status = UserEnum.userStatus.pending;
        await AdminDb.saveAndUpdateCondidate(req.dbInstance, req.body, transaction);
        return res.status(200).json({
            "statusDescription": "Data saved successfully."
        });
    })
);

const validateCondidateId = SchemaValidator(
    JoiSchema.condidateId,
    "params",
    true
);
router.get(
    "/getCondidateDetails/:id",
    wrap(validateCondidateId),
    wrap(async (req, res) => {
        let transaction = req.transaction;
        let result = await AdminDb.getCondidateDetails(req.dbInstance, req.params.id, req.user.userId, transaction);
        return res.status(200).json({
            result,
        });
    })
);

router.delete(
    "/deleteCondidate/:id",
    wrap(validateCondidateId),
    wrap(async (req, res) => {
        await AdminDb.deleteCondidate(req.dbInstance, req.params.id, req.user.userId);
        return res.status(200).json({
            "statusDescription": "Condidate deleted successfully."
        });
    })
);

router.post(
    "/requesttoapprove/:id",
    wrap(validateCondidateId),
    wrap(async (req, res) => {
        await AdminDb.requestToApprove(req.dbInstance, req.params.id, req.user.userId);
        return res.status(200).json({
            "statusDescription": "Request submitted successfully."
        });
    })
);

router.get(
    "/getAllCondidates",
    wrap(async (req, res) => {
        let result = await AdminDb.getAllCondidates(req.dbInstance, req.user.userId);
        return res.status(200).json({
            result,
        });
    })
);

const changePassword = SchemaValidator(JoiSchema.changePassword, "body", true);

router.post("/changePassword", wrap(changePassword), wrap(async function (req, res) {
  let transaction = req.transaction;
  let passwordObj = {
    password: await getHashedPassword(req.body.newPassword),
    userId: req.user.userId,
  };
  let result = await AdminDb.changePassword(req.dbInstance, passwordObj, transaction);
  if (result) {
    await AdminDb.removeAccessTokenFromDB(req.dbInstance, req.user.userId, transaction);
    return res.status(200).json({
      statusDescription: "Password has been updated successfully."
    });
  } else {
    return res.status(200).json({
      statusDescription: "Not able to update the password."
    });
  }
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
