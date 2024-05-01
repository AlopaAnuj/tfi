const UserEnum = require("../lookup/UserEnum");

exports.getAllStateUsers = async (dbInstance) => {
  return dbInstance.sequelize.models.stateLogin.findAll({
    where: {
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