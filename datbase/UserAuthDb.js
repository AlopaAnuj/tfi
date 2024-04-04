exports.getUserDetails = async (dbInstance, userName) => {
  return dbInstance.sequelize.models.stateLogin.findAll({
    where: {
      userName,
    }
  });
};

exports.getUserIdByRefershToken = async (
  dbInstance,
  refreshToken,
  transaction
) => {
  return dbInstance.sequelize.models.tokenDetails.findOne({
    attributes: ["userId"],
    where: {
      refreshToken,
    },
    transaction,
  });
};

exports.getUserDetailsByUserId = async (dbInstance, userId, transaction) => {
  return dbInstance.sequelize.models.stateLogin.findOne({
    attributes: [
      "id",
      "stateName",
      "role",
    ],
    where: {
      id:userId,
    },
    transaction,
  });
};

exports.saveRefreshToken = async function (
  dbInstance,
  userObj,
  transaction
) {
  return dbInstance.sequelize.models.tokenDetails.upsert(userObj, {
    transaction,
  });
};