'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('account', {  
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      shippingstate: {
        type: Sequelize.STRING
      },
      shippingpostalcode: {
        type: Sequelize.STRING
      },
      billingcity: {
        type: Sequelize.STRING
      },
      accountsource: {
        type: Sequelize.STRING
      },
      shippingcountry: {
        type: Sequelize.STRING
      },
      shippinggeocodeaccuracy: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      lastmodifiedbyid: {
        type: Sequelize.STRING
      },
      shippingstreet: {
        type: Sequelize.STRING
      },
      billingpostalcode: {
        type: Sequelize.STRING
      },
      billingstate: {
        type: Sequelize.STRING
      },
      shippingcity: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      billingcountry: {
        type: Sequelize.STRING
      },
      billinggeocodeaccuracy: {
        type: Sequelize.STRING
      },
      fax: {
        type: Sequelize.STRING
      },
      sicdesc: {
        type: Sequelize.STRING
      },
      billingstreet: {
        type: Sequelize.STRING
      },
      sfid:{
        type:Sequelize.STRING
      },
      _hc_lastop:{
        type:Sequelize.STRING
      },
      isdeleted:{
        type:Sequelize.BOOLEAN
      },
      description: {
        type: Sequelize.TEXT
      },
      _hc_err:{
        type: Sequelize.TEXT
      },
      shippinglongitude:{
        type: Sequelize.FLOAT
      },
      billinglatitude:{
        type: Sequelize.FLOAT
      },
      billinglongitude:{
        type: Sequelize.FLOAT
      },
      shippinglatitude:{
        type: Sequelize.FLOAT
      },
      lastmodifieddate:{
        type: Sequelize.DATE
      },
      systemmodstamp: {
        type: Sequelize.DATE
      },
      createddate:{
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Account');
  }
}; 