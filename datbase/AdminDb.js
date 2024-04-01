
exports.getAllStateUsers = async (dbInstance) => {
  return dbInstance.sequelize.models.stateLogin.findAll({
    where: {
      role: 2
    }
  });
};

exports.getAllCondidates = async (dbInstance, userId) => {
  return dbInstance.sequelize.models.condidates.findAll({ where: {userId}
  });
};

exports.getCondidateDetails = async (dbInstance, id, userId) => {
  return dbInstance.sequelize.models.condidates.findOne({ where: {id, userId}
  });
};

exports.deleteCondidate = async (dbInstance, id, userId, transaction) => {
  return dbInstance.sequelize.models.condidates.destroy({ where: {id, userId}, transaction
  });
};

exports.saveAndUpdateCondidate = async (dbInstance, condidateObj, transaction) => {
  return dbInstance.sequelize.models.condidates.upsert(condidateObj, {transaction
  });
};

exports.saveAndUpdateStateAdmin = async (dbInstance, adminObj, transaction) => {
  return dbInstance.sequelize.models.stateLogin.upsert(adminObj, {transaction
  });
};