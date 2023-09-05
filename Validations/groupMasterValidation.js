const Joi = require('joi');

const groupMasterSchema = Joi.object({
  bsid: Joi.number().optional(),
  group_Code: Joi.number().integer().required(),
  group_Name_E: Joi.string().required(),
  group_Name_R: Joi.string().required(),
  group_Type: Joi.string().required(),
  group_Summary: Joi.string().required(),
  group_Order: Joi.number().integer().required(),
  Company_Code: Joi.number().integer().required(),
  Created_By: Joi.string(),
  Modified_By: Joi.string()
});

module.exports = groupMasterSchema;
