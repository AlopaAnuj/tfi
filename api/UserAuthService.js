const wrap = require("async-middleware").wrap;
const router = require("express").Router();
const UserAuthDb = require("../datbase/UserAuthDb");
const encrypt = require("../utils/encrypt.js");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "meQ84_Dir3";
const SchemaValidator = require("../utils/SchemaValidation");
const JoiSchema = require("./JoiSchema.js");
const uuidV4 = require("uuid").v4;

const generateJwtToken = (tokenData, expiryTime) => {
    return jwt.sign(tokenData, SECRET_KEY, { expiresIn: expiryTime });
};
const validateLoginDetails = SchemaValidator(
    JoiSchema.loginDetails,
    "body",
    true
);

router.post(
    "/login",
    wrap(validateLoginDetails),
    wrap(async (req, res) => {
        let transaction = req.transaction;
        let userName = encrypt.computeHash(req.body.userName);
        let result = await UserAuthDb.getUserDetails(req.dbInstance, userName);
        if (result.length > 0) {
            let isPasswordMatched = await encrypt.compare(
                req.body.password,
                result[0].password
            );
            if (isPasswordMatched) {
                let userObj = {
                    userId: result[0].id,
                    stateName: result[0].stateName,
                    role: result[0].role
                }
                let accessToken = generateJwtToken(userObj, "20m")
                let newRefreshToken = uuidV4();
                let refreshToken = generateJwtToken({ refreshToken: newRefreshToken }, "60m")
                await UserAuthDb.saveRefreshToken(req.dbInstance, { userId: result[0].id, refreshToken: newRefreshToken, transaction })
                return res.status(200).json({
                    accessToken,
                    refreshToken,
                    role: result[0].role,
                    userId: result[0].id,
                    userState: result[0].stateName
                });
            }
        }
        return res.status(400).json({
            statusDescription: "Username or password wrong."
        });
    })
);

const validateRefreshToken = SchemaValidator(
    JoiSchema.validateRefreshToken,
    "body",
    true
);

const verifyRefreshTokenDetails = (req, res, next) => {
    jwt.verify(req.body.refreshToken, SECRET_KEY, (err, payload) => {
        if (err) {
            return res
                .status(401)
                .json({ statusDescription: "Token is not valid." });
        } else {
            if (req.user != undefined && req.user != null) {
                req.user.refreshToken = payload.refreshToken;
                req.user.iat = payload.iat;
                req.user.exp = payload.exp;
            } else {
                req.user = payload;
            }
            return next();
        }
    });
};
router.post(
    "/accessTokenByRefreshToken",
    wrap(validateRefreshToken),
    wrap(verifyRefreshTokenDetails),
    wrap(async (req, res) => {
        try {
            let transaction = req.transaction;
            if (req.user.refreshToken) {
                let userResult = await UserAuthDb.getUserIdByRefershToken(
                    req.dbInstance,
                    req.user.refreshToken,
                    transaction
                );
                if (userResult) {
                    let userId = userResult.userId;
                    let userDetails = await UserAuthDb.getUserDetailsByUserId(
                        req.dbInstance,
                        userId,
                        transaction
                    );
                    if (!userDetails) {
                        res
                            .status(400)
                            .send({ statusDescription: "Something went wrong." });
                    } else {
                        let userObj = {
                            userId: userDetails.id,
                            stateName: userDetails.stateName,
                            role: userDetails.role
                        }
                        let accessToken = generateJwtToken(userObj, "20m")
                        let newRefreshToken = uuidV4();
                        let refreshToken = generateJwtToken({ refreshToken: newRefreshToken }, "60m")
                        await UserAuthDb.saveRefreshToken(req.dbInstance, { userId: userDetails.id, refreshToken: newRefreshToken, transaction })
                        return res.status(200).json({ accessToken, refreshToken });
                    }
                }
            }
            return res
                .status(401)
                .json({ statusDescription: "No token provided" });
        } catch (err) {
            console.log(err)
        }
    })

);

module.exports = router;
