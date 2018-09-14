'use strict';
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define('Account', {
    shippingstate: DataTypes.STRING,
    shippingpostalcode: DataTypes.STRING,
    billingcity: DataTypes.STRING,
    accountsource: DataTypes.STRING,
    shippingcountry: DataTypes.STRING,
    shippinggeocodeaccuracy: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    lastmodifiedbyid: DataTypes.STRING,
    shippingstreet: DataTypes.STRING,
    billingpostalcode: DataTypes.STRING,
    billingstate: DataTypes.STRING,
    shippingcity: DataTypes.STRING,
    type: DataTypes.STRING,
    billingcountry: DataTypes.STRING,
    billinggeocodeaccuracy: DataTypes.STRING,
    fax: DataTypes.STRING,
    sicdesc: DataTypes.STRING,
    billingstreet: DataTypes.STRING,
    sfid: DataTypes.STRING,
    _hc_lastop: DataTypes.STRING,
    isdeleted:DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    _hc_err: DataTypes.TEXT,
    shippinglongitude: DataTypes.FLOAT,
    billinglatitude: DataTypes.FLOAT,
    billinglongitude: DataTypes.FLOAT,
    shippinglatitude: DataTypes.FLOAT,
    lastmodifieddate: DataTypes.DATE,
    systemmodstamp: DataTypes.DATE,
    createddate: DataTypes.DATE,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
  }, {
    schema: 'salesforce', 
    tableName: 'account',
    timestamps: false,
  });
  Account.associate = function(models) {
    // associations can be defined here
  };
  return Account;
};