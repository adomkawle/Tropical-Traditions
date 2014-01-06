


var App = require('config/cfg_app');

// INCLUDE THEME CONFIGURATION FILE ============================
//var configFile = require('/config/cfg_globals');
//var config = new configFile();
// =============================================================
try {

	// REQUIRE INTERNET CONNECTION =================================
	Ti.Network.addEventListener('change', function(e) {
		Ti.API.info('==Networked changed==');
		Ti.API.info(JSON.stringify(e));

		if (!Ti.Network.online) {
			Ti.API.info("This app needs network connection. Please turn on your Interner connection!");
		} else {
			Ti.API.info("ONLINE !");
		}
	});


	if (!Ti.Network.online) {
		alert("This app needs network connection. Please turn on your Interner connection!");
		
	} else {
		App.initialize();
	}
	

} catch(e) {
	Ti.API.info("Exception during initialization " + e);
}

