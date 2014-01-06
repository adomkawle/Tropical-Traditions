
var UI = require("/UI/ui_app");
//var Controllers = require("/Controllers/controllers_app");
var API = require("/API/api_app");

exports.UI = UI;
//exports.Controllers = Controllers;
exports.API = API;

/*
 * *********** Main app configuration initialization****************
 */  
exports.initialize = function() {
			UI.initialize(this);
			//Controllers.initialize(this);
			API.initialize(this);
};