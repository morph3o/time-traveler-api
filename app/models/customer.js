"use strict";

var reader = require('../utils/readJson.js');

var Customer = function() {
}

Customer.prototype.getTripInfo = function () {
    var customer_data;
    reader.readJSONFile("./json-objects/lufthansa/customer_details.json", function (err, json) {
      if(err) {console.error("ERROR");}
      //console.log("into Customer ->>> "+json.CustomersResponse.Customers.Customer);
      this.customer_data = json.CustomersResponse.Customers.Customer;
    });
    return customer_data;
}

module.exports = new Customer();
