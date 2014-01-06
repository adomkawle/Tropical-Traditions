var App;

var navBarAdded = false;
var OS = Ti.Platform.osname;
var OSNo;

var isTablet;

Ti.UI.backgroundColor = '#E5E5E5';

if (OS == 'android') {

	OSNo = 1;

} else {
	OSNo = 2;
};

var ti = {};

function getOrientation(o) {
	switch (o) {
		case Titanium.UI.PORTRAIT: {
			return 'portrait';
		}
		case Titanium.UI.UPSIDE_PORTRAIT: {
			return 'portrait';
		}
		case Titanium.UI.LANDSCAPE_LEFT: {
			return 'landscape';
		}
		case Titanium.UI.LANDSCAPE_RIGHT: {
			return 'landscape';
		}
	}
}


var navBarData = {
	"APP NAME" : [
			{
				title : 'Recipe I', image : '/images/guest.png'
			}, {
				title : 'Recipe II' , image : '/images/gift.png'
			}, {
				title : 'Recipe III' , image : '/images/downloads.png'
			}, {
				title : 'Recipe IV' , image : '/images/geography.png'
			},
			{
				title : 'Recipe V', image : '/images/guest.png'
			}, {
				title : 'Recipe VI' , image : '/images/gift.png'
			}, {
				title : 'Recipe VII' , image : '/images/downloads.png'
			}, {
				title : 'Recipe VIII' , image : '/images/geography.png'
			}
	],
};

var navMenuView;

var LeftNameToggle = true;

function createUIComps() {

	ti = {

		activityIndicator : Ti.UI.createActivityIndicator({
			font : {
				fontFamily : 'RobotoCondensed-Light',
				fontSize : '18sp',
				//fontWeight : 'bold'
			},
			color : 'black',
			width : '280dp',
			message : '  Cargando...',
			style : (OS == "android") ? Ti.UI.ActivityIndicatorStyle.DARK : Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
		}),

		indView : Titanium.UI.createView({
			height : '60dp',
			width : '180dp',
			borderWidth : '1',
			backgroundColor : 'white',
			borderColor : '#636363',
			borderRadius : 15,
			opacity : 0.7
		}),

		activityIndicatorView : Ti.UI.createView({
			backgroundColor : '#636363',
			opacity : '0.9',
			left : '0',
			width : '100%',
			height : '100%',
			top : '0',
		}),

		shadowView : Ti.UI.createView({
			backgroundColor : 'transparent',
			left : '75%',
			width : '25%',
			height : '100%',
			top : '45dp',
		}),

		main_home : Ti.UI.createView({
			backgroundColor : 'transparent',
			top : 0,
			width : '100%',
			height : Ti.UI.FILL,
			top : '45dp',
			backgroundGradient : {
				type : 'linear',
				colors : ['#5a6971', '#20333f'],
				startPoint : {
					x : 0,
					y : 0
				},
				endPoint : {
					x : 0,
					y : '100%'
				},
				backFillStart : false,
			},
		}),


		title : Titanium.UI.createLabel({
			color : "black",
			text : 'Recipe',
			font : {
				fontSize : '18sp',
				fontFamily : 'RobotoCondensed-Regular',
				//fontWeight : 'bold'
			},
			textAlign : 'center',
			width : 'auto',
			left : '30dp'
		}),

		topBarClickView : Titanium.UI.createView({
			backgroundColor : 'transparent',
			top : 0,
			width : '150dp',
			height : '45dp',
			left : '0',
		}),

		topRightBarClick : Titanium.UI.createImageView({
			backgroundColor : 'transparent',
			image : '/images/PPM-logo1.png',
			top : 0,
			width : '140dp',
			height : '45dp',
			right : '0',
		}),

		appName : Titanium.UI.createLabel({
			color : "#000000",
			text : 'Web',
			font : {
				fontSize : '16sp',
				fontFamily : 'RobotoCondensed-Light',
				//fontWeight : 'bold'
			},
			textAlign : 'center',
			width : 'auto',
			right : '10dp'
		}),

		appImage : Ti.UI.createImageView({
			image : '/images/geography.png',
			height : '30dp',
			width : '30dp',
			left : '10dp',
		}),

		img_TopBar : Ti.UI.createView({
			backgroundColor : (OS == "android" ) ? "#DDDDDD" : "#D9D9D9",
			top : 0,
			width : '100%',
			height : '45dp'
		}),

		icon : Titanium.UI.createView({
			left : '2dp',
			height : '24dp',
			width : '24dp',
			backgroundImage : '/images/ic_navigation_drawer.png',
			bubbleParent : false
		}),

		firstWin : Titanium.UI.createWindow({
			backgroundColor : '#E5E5E5',
			navBarHidden : (OS == "android" ) ? true : false,
			exitOnClose : true,
			modal : (OS == "android" ) ? true : false,
			orientationModes : [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
		}),

		label1 : Titanium.UI.createLabel({
			color : '#999',
			text : 'I am Window 1',
			font : {
				fontSize : '20sp',
				fontFamily : 'RobotoCondensed-Light'
			},
			textAlign : 'center',
			width : 'auto'
		}),
		topBarEdge : Ti.UI.createView({
			bottom : '0',
			height : '2dp',
			width : '100%',
			backgroundColor : "#6D6D6D",//(OS == "android" ) ? "black" : "#007AFF",
		}),
	};

};

function buildUI() {

	ti.topBarClickView.add(ti.icon);
	ti.topBarClickView.add(ti.title);

	ti.img_TopBar.add(ti.topBarClickView);

	ti.firstWin.add(ti.img_TopBar);
	ti.img_TopBar.add(ti.topBarEdge);

	ti.firstWin.add(ti.main_home);

	ti.indView.add(ti.activityIndicator);
	ti.activityIndicatorView.add(ti.indView);

	ti.firstWin.add(navMenuView);

}

var NavMenu_Show = function() {

	navMenuView.animate({
		left : '0',
		duration : 250,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN
	});

	//setTimeout(function() {
	ti.firstWin.add(ti.shadowView);
	//}, 150);
	ti.shadowView.left = '0';
	ti.shadowView.width = '100%';

	ti.shadowView.animate({
		left : '75%',
		duration : 250,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN
	});

};

var NavMenu_Hide = function() {

	navMenuView.animate({
		left : '-75%',
		duration : 250,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN
	});

	ti.shadowView.animate({
		left : '0',
		duration : 250,
		curve : Ti.UI.ANIMATION_CURVE_EASE_IN
	});

	setTimeout(function() {
		ti.firstWin.remove(ti.shadowView);
	}, 300);

};

function eventListeners() {

	ti.topBarClickView.addEventListener('click', function() {

		if (LeftNameToggle == true) {

			NavMenu_Show();
			LeftNameToggle = false;

		} else {
			NavMenu_Hide();
			LeftNameToggle = true;
		}

		ti.topBarClickView.backgroundColor = "#9B9B9B";
		ti.title.color = "#FFFFFF";
		//( OS == "android" ) ? "#FFFFFF" : ";

		setTimeout(function() {
			ti.topBarClickView.backgroundColor = 'transparent';
			ti.title.color = "#000000";
			//(OS == "android" ) ? "#000000" : "#007AFF";
		}, 300);

	});


	/*	ti.title.addEventListener('click', function() {

	 if (LeftNameToggle == true) {

	 NavMenu_Show();
	 LeftNameToggle = false;

	 } else {
	 NavMenu_Hide();
	 LeftNameToggle = true;
	 }

	 });
	 */

	ti.shadowView.addEventListener('click', function() {

		if (LeftNameToggle == false) {
			NavMenu_Hide();
			LeftNameToggle = true;
		}

	});

	navMenuView.addEventListener('click', function(e) {

		Ti.API.info('Event   ' + JSON.stringify(e));

		if (e.source.title != "" && e.source.title != undefined && e.source.title != null) {
			ti.title.text = e.source.title;

			for (var i = 0, j = navMenuView.getChildren().length; i < j; i++) {

				if (navMenuView.getChildren()[i].title == e.source.title) {

					navMenuView.getChildren()[i].backgroundColor = "#9B9B9B", navMenuView.getChildren()[i].children[0].color = (OS == "android" ) ? "#FFFFFF" : "#000000";

				} else {
					navMenuView.getChildren()[i].backgroundColor = (OS == "android" ) ? "#EEEEEE" : "#FFFFFF";
					navMenuView.getChildren()[i].children[0].color = (OS == "android" ) ? "#585858" : "#000000";
				};
			};


			if (LeftNameToggle == false) {
				NavMenu_Hide();
				LeftNameToggle = true;
			};

		};

	});

	Ti.Gesture.addEventListener('orientationchange', function(e) {

		var orientation = getOrientation(e.orientation);

		if (orientation == 'landscape') {

			if (OS == 'iphone' || OS == 'ipad') {
				ti.firstWin.fullscreen = true;
				ti.firstWin.modal = false;
				ti.firstWin.top = '20dp';
			}
		} else {
			if (OS == 'iphone' || OS == 'ipad') {
				ti.firstWin.fullscreen = true;
				ti.firstWin.modal = false;
			}
		}

	});

	ti.firstWin.addEventListener('open', function() {

		if (OS == 'iphone' || OS == 'ipad') {
			ti.firstWin.top = '20dp';
		} else {
			ti.firstWin.backgroundColor = '#E5E5E5';
		};

	});

	Ti.App.addEventListener("STARTSPINNER", function() {

		ti.firstWin.add(ti.activityIndicatorView);
		ti.activityIndicator.show();

	});

	Ti.App.addEventListener("STOPSPINNER", function() {

		ti.firstWin.remove(ti.activityIndicatorView);
		ti.activityIndicator.hide();

	});

};


exports.initialize = function(app) {
	App = app;

	navMenuView = App.UI.navMenu.getNavMenu();
	navMenuView.left = '-75%';

	createUIComps();
	eventListeners();
	buildUI();
	ti.firstWin.open();

};
