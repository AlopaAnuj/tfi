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
  contactPersion: Joi.string().max(100).required(),
  mobileNumber:  Joi.string().trim().regex(/^\d+$/).length(10).required(),
  email: Joi.string().email().required(),
  id: Joi.number().optional()
});

exports.validateRefreshToken = Joi.object({
  refreshToken: Joi.string().required()
});

exports.validateRequestRejected = Joi.object({
  id: Joi.number().required(),
  reason: Joi.string().required()
});

exports.validateEventData =  Joi.object({
  id: Joi.number().optional(),
  eventName: Joi.string().required().max(100),
  eventType: Joi.number().required().max(10),
  eventDate: Joi.string().required(),
  venue: Joi.string().max(100).required(),
  organizer: Joi.string().max(100).required(),
  contactNumber: Joi.string().trim().regex(/^\d+$/).length(10).required(),
  email: Joi.string().email().required(),
  redirectURL: Joi.string().required().max(100),
});

exports.changePassword = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string().pattern(new RegExp('^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$()≠!%*#_?&^+=-])[A-Za-z0-9$()≠@$!%*#_?&^+=-]{8,}')).required()
});