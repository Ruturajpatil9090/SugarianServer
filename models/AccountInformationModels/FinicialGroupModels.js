const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const groupMasterSchema = require('../../Validations/groupMasterValidation');

const GroupMaster = sequelize.define('nt_1_bsgroupmaster1', {
  group_Code: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: 'Group Code must be an integer',
      },
      notNull: {
        msg: 'Group Code is required',
      },
    },
  },
  group_Name_E: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Group Name is required',
      },
      isString(value) {
        if (typeof value !== 'string') {
          throw new Error('Group_Name_E must be a string');
        }
      },
    },
  },
  group_Name_R: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Group_Name_R is required',
      },
      isString(value) {
        if (typeof value !== 'string') {
          throw new Error('Group_Name_R must be a string');
        }
      },
    },
  },
  group_Type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Group Type is required',
      },
      isValidGroupType(value) {
        if (!['t', 'b','p'].includes(value.toLowerCase())) {
            throw new Error('Group Summary must be one of: T, B,P');
        }
    },
    },
  },
  group_Summary: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        notNull: {
            msg: 'Group Summary is required',
        },
        isValidGroupSummary(value) {
            if (!['y', 'n'].includes(value.toLowerCase())) {
                throw new Error('Group Summary must be one of: y, n');
            }
        },
    },
},

  group_Order: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: 'Group Order must be an integer',
      },
      notNull: {
        msg: 'Group Order is required',
      },
    },
  },
  Company_Code: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: 'Company Code must be an integer',
      },
      notNull: {
        msg: 'Company Code is required',
      },
    },
  },
  Created_By: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Modified_By: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bsid: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
 
}, {
  
  tableName: 'nt_1_bsgroupmaster1', 
  timestamps: false, 

});

GroupMaster.removeAttribute('id');
GroupMaster.primaryKey = 'bsid';

//Here we have to check the validation befor submitting the records using joi.
GroupMaster.addHook('beforeValidate', (groupMasterInstance, options) => {
  if (options.isNewRecord) {
    const { error } = groupMasterSchema.validate(
      groupMasterInstance.dataValues,
      {
        abortEarly: false,
        presence: 'required',
      }
    );

    if (error) {
      throw new Error(error.details[0].message);
    }
  }
});



module.exports = GroupMaster;




















// GroupMaster.addHook('beforeValidate', (groupMasterInstance, options) => {
//   const { error } = groupMasterSchema.validate(groupMasterInstance.dataValues);
//   console.log(error)
//   if (error) {
//     throw new Error(error.details[0].message);
//   }
// });
