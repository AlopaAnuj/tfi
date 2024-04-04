
exports.getAllStateUsers = async (dbInstance) => {
  return dbInstance.sequelize.models.stateLogin.findAll({
    where: {
      role: 2
    }
  });
};

exports.getAllCondidates = async (dbInstance, userId) => {
  return dbInstance.sequelize.models.condidates.findAll({
    where: { userId }
  });
};

exports.getCondidateDetails = async (dbInstance, id, userId) => {
  return dbInstance.sequelize.models.condidates.findOne({
    where: { id, userId }
  });
};

exports.deleteCondidate = async (dbInstance, id, userId, transaction) => {
  return dbInstance.sequelize.models.condidates.destroy({
    where: { id, userId }, transaction
  });
};

exports.saveAndUpdateCondidate = async (dbInstance, condidateObj, transaction) => {
  return dbInstance.sequelize.models.condidates.upsert(condidateObj, {
    transaction
  });
};

exports.saveAndUpdateStateAdmin = async (dbInstance, adminObj, transaction) => {
  return dbInstance.sequelize.models.stateLogin.upsert(adminObj, {
    transaction
  });
};

exports.getUserDetailsByUserId = async (dbInstance, userId, transaction) => {
  return dbInstance.sequelize.models.stateLogin.findOne({
    attributes: [
      "id",
    ],
    where: {
      id:userId,
    },
    transaction,
  });
};

exports.getUserIdByAccessToken = async (
  dbInstance,
  userId,
  transaction
) => {
  return dbInstance.sequelize.models.tokenDetails.findOne({
    attributes: ["userId"],
    where: {
      userId,
    },
    transaction,
  });
};
exports.removeTokenDetails = async function (
  dbInstance,
  userId,
  transaction
) {
  let result = await dbInstance.sequelize.models.tokenDetails.destroy({
    where: {
      userId,
    },
    transaction,
  });
  return result;
};
