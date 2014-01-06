
var App;
var navMenu;


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

var OS = Ti.Platform.osname;


function createNavMenu() {
	var navWin = Titanium.UI.createWindow({
		//backgroundColor : 'transparent',
		navBarHidden : true,
	});

	navMenu = Ti.UI.createScrollView({
		height : Ti.UI.FILL,
		width : '75%',
		left : '75%',
		backgroundColor : ( OS == "android" ) ? "#EEEEEE" : "#FFFFFF",
		separatorColor : '#D9D9D9',
		top : '45dp',
		left : 0,
		layout : 'vertical',
	});


	for (n in navBarData) {

		var grp_section = Ti.UI.createView({
			height : '46dp',
			width : '100%',
		});

		var lbl = Ti.UI.createLabel({
			color : ( OS == "android" ) ? "#585858" : "#000000",
			text : n,
			font : {
				fontSize : '16sp',
				fontWeight : 'bold',
				fontFamily : 'Helvetica Neue'
			},
			left : '10dp',
			bottom : '4dp',
		});
		

		var grp_sep = Ti.UI.createView({
			bottom : '0',
			height : '3dp',
			width : '100%',
			backgroundColor : '#CECECE',
		});

		grp_section.add(lbl);
		grp_section.add(grp_sep);
		navMenu.add(grp_section);

		for (var i = 0, j = navBarData[n].length; i < j; i++) {

			var dataRow = Ti.UI.createView({
				hasChild : true,
				height : '45dp',
				width : '100%',
				title : navBarData[n][i].title,
				index : i
			});

			var title = Ti.UI.createLabel({
				color : ( OS == "android" ) ? "#585858" : "#000000",
				text : navBarData[n][i].title,
				font : {
					fontSize : '14sp',
					fontFamily : 'Helvetica Neue'
				},
				color : '#333333',
				left : '50dp',
				title : navBarData[n][i].title,
				index : i
			});
			
			
			var img = Ti.UI.createImageView({
				height : '26dp',
				width : '26dp',
				left : '10dp',
				image : navBarData[n][i].image,
				title : navBarData[n][i].title,
				index : i
			});


			var row_sep = Ti.UI.createView({
				bottom : '0',
				height : '1dp',
				width : '100%',
				backgroundColor : '#C3C3C0',
			});

			dataRow.add(title);
			dataRow.add(img);
			dataRow.add(row_sep);

			navMenu.add(dataRow);
			
			if(i == '0' && n == 'REVISTAS'){
				dataRow.backgroundColor =  "#9B9B9B",
				title.color = ( OS == "android" ) ? "#FFFFFF" : "#000000";
			}
			
		}
	}


}

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




Ti.Gesture.addEventListener('orientationchange', function(e) {

	var orientation = getOrientation(e.orientation);

	if (orientation == 'landscape') {

			navMenu.height = '83%';
	} else {
			navMenu.height = '100%';
	}

});



exports.getNavMenu = function(){

	return navMenu;
};


exports.initialize = function(app){
	App = app;
	createNavMenu();
};
