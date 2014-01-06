


var App;

var home = require('/UI/ui_home');
var navMenu = require('/UI/ui_navMenu');

exports.home = home;
exports.navMenu = navMenu;



/*
 * UI initialization
 */
exports.initialize = function(app) {
	
	App = app;
	navMenu.initialize(App);
	home.initialize(App);
};

