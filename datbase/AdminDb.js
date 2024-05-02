const UserEnum = require("../lookup/UserEnum");

exports.getAllStateUsers = async (dbInstance) => {
  return dbInstance.sequelize.models.stateLogin.findAll({
    where: {
      role: 2
    }
  });
};

exports.getStateAdminById = async (dbInstance, Id) => {
  return dbInstance.sequelize.models.stateLogin.findOne({
    where: {
      id: Id,
      role: 2
    }
  });
};

exports.getUserName = async (dbInstance, Id) => {
  return dbInstance.sequelize.models.stateLogin.findOne({
    attributes: ["userName", "password"],
    where: {
      id: Id,
      role: 2
    }
  });
};

exports.getAllCondidates = async (dbInstance, userId) => {
  return dbInstance.sequelize.models.condidates.findAll({
    where: { userId },
    order: [["modifieddatetime", "DESC"]],
  });
};

exports.getCondidateDetails = async (dbInstance, id, userId, transaction) => {
  return dbInstance.sequelize.models.condidates.findOne({
    where: { id, userId },
    transaction
  });
};

exports.deleteCondidate = async (dbInstance, id, userId, transaction) => {
  return dbInstance.sequelize.models.condidates.destroy({
    where: { id, userId }, transaction
  });
};

exports.requestToApprove = async (dbInstance, id, userId, transaction) => {
  return dbInstance.sequelize.models.condidates.update({status: UserEnum.userStatus.requestToApprove},{
    where: { id, userId }, transaction
  });
};
exports.approveRequest = async (dbInstance, id, transaction) => {
  return dbInstance.sequelize.models.condidates.update({status: UserEnum.userStatus.active, reason: ""},{
    where: { id }, transaction
  });
};

exports.requestRejected = async (dbInstance, data, transaction) => {
  return dbInstance.sequelize.models.condidates.update({status: UserEnum.userStatus.requestToChange, reason: data.reason},{
    where: { id: data.id }, transaction
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

exports.saveEvent = async (dbInstance, eventData, transaction) => {
  return dbInstance.sequelize.models.eventDetails.upsert(eventData, {
    transaction
  });
};

exports.getAllEvents = async (dbInstance) => {
  return dbInstance.sequelize.models.eventDetails.findAll({
  });
};

exports.getEventById = async (dbInstance, id) => {
  return dbInstance.sequelize.models.eventDetails.findOne({ where: {id}
  });
};

exports.deleteEventById = async (dbInstance, id) => {
  return dbInstance.sequelize.models.eventDetails.destroy({ where: {id}
  });
};

exports.changePassword = async (dbInstance, changePasswordObj, transaction) => {
  return dbInstance.sequelize.models.stateLogin.update({password: changePasswordObj.password},{
    where: { id: changePasswordObj.userId}, transaction
  });
};

exports.removeAccessTokenFromDB = async (dbInstance, userId, transaction) => {
  return await dbInstance.sequelize.models.tokenDetails.destroy({
    where: {
      userId,
    },
    transaction,
  });
};