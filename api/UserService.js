const wrap = require("async-middleware").wrap;
const router = require("express").Router();
const AdminDb = require("../datbase/AdminDb");
const SchemaValidator = require("../utils/SchemaValidation");
const JoiSchema = require("./JoiSchema.js");

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
        let result = await AdminDb.getCondidateDetails(req.dbInstance, req.params.id, req.user.userId);
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

router.get(
    "/getAllCondidates",
    wrap(async (req, res) => {
        let result = await AdminDb.getAllCondidates(req.dbInstance, req.user.userId);
        return res.status(200).json({
            result,
        });
    })
);

module.exports = router;
