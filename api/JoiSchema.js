const Joi = require("joi");

exports.loginDetails = Joi.object({
  userName: Joi.string().max(100).required(),
  password: Joi.string().required()
});

exports.validateCreateCondidate = Joi.object({
  fullName: Joi.string().required().max(100),
  guardianName: Joi.string().required().max(100),
  dateOfBirth: Joi.string().required(),
  address: Joi.string().required(),
  contactNumber: Joi.string().trim().regex(/^\d+$/).length(10).required(),
  gender: Joi.string().required(),
  state: Joi.string().required(),
  district: Joi.string().required(),
  email: Joi.string().email().required(),
  primaryRole: Joi.string().required(),
  secondaryRole: Joi.string().optional().allow(""),
  otherRole: Joi.string().optional().allow(""),
  photo: Joi.string().required(),
  birthCertificate: Joi.string().required(),
  aadhar: Joi.string().required(),
  aadharNumber: Joi.string().trim().regex(/^\d+$/).length(12).required(),
  birthCertificateNumber: Joi.string().required()
});

exports.validateStateId = Joi.object({
  stateId: Joi.number().required()
});

exports.condidateId = Joi.object({
  id: Joi.number().required(),
});

exports.validateStateAdmin = Joi.object({
  userName: Joi.string().required().max(100),
  role: Joi.number().required(),
  stateName: Joi.string().required(),
  id: Joi.number().optional()
});

exports.validateRefreshToken = Joi.object({
  refreshToken: Joi.string().required()
});

exports.validateRequestRejected = Joi.object({
  id: Joi.number().required(),
  reason: Joi.string().required()
});