
// DETECT DEVICE AND DIMENSIONS ================================
 var osname = Ti.Platform.osname,
     version = Ti.Platform.version,
     height = Ti.Platform.displayCaps.platformHeight,
     width = Ti.Platform.displayCaps.platformWidth;  
// =============================================================



function config() {
var self = this;
	
  //**********User already logged in flag***********
  
  self.userLoggedIn = false;
  
  //================================================	
	
  self.height = height;
  self.width = width;	
  self.OS = Titanium.Platform.osname;	
  self.Images_Root = '/images/';	
  self.MSG_NO_INTERNET = "MaxxVault requires an internet connection to function properly. If you experience problems, please exit the app & try again.";
  
  self.APP_TITLE = "Elite Olympian";
  self.APP_LOGO =  self.Images_Root + "app_logo.png";

  self.IMG_BACKGROUND =  self.Images_Root + "app_background.png";
  self.IMG_BACKGROUND_568 =  self.Images_Root + "app_background-568h@2x.png";  
 
  self.IMG_INPUT_304 =  self.Images_Root + 'fld_create_input_dark.png';
  self.IMG_INPUT_304_ERROR =  self.Images_Root + 'fld_create_input_error.png';    
  
  //var img_app_background;
  if ( height == '568' ) {
   self.img_app_background = self.IMG_BACKGROUND_568;   
  } else {
    self.img_app_background = self.IMG_BACKGROUND;     
  }
  
  // GLOBAL VARIABLES
  self.IMG_INPUT_CREATELOGIN_LEFT = 8;
  self.APP_INPUT_CREATELOGIN_LEFT_ACTUAL = 16;

  if ( height == 568 ) {
    self.SPLASH_CREATE_BTN = 480;
    self.VIEW_CREATE_TOP = 567;
  } else {
    self.SPLASH_CREATE_BTN = 390;
    self.VIEW_CREATE_TOP = 479;
  }
  
  if ( width == 640 ) {
    self.VIEW_CREATE_LEFT = 639;
  } else {
    self.VIEW_CREATE_LEFT = 319;
  }
  
   if ( width == 640 ) {
    self.VIEW_CREATE_WIDTH = 640;
  } else {
    self.VIEW_CREATE_WIDTH = 320;
  }  
  
  self.INPUTS_304 = {
    left: (self.OS == 'android')? "4%": self.APP_INPUT_CREATELOGIN_LEFT,
    width: (self.OS == 'android')? "92%":  304,
    height: (self.OS == 'android')? "8%": 40
  };

  self.CREATELOGIN_INPUTS_ACTUAL = {
    bubbleParent: false,
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_NONE,
    borderRadius : '0',
    returnKeyType: Ti.UI.RETURNKEY_NEXT, 
    autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,       
    color: '#336699',
    left: (self.OS == 'android')? "4%" : '18.5',
    width: (self.OS == 'android')? "92%": 283, 
    height: (self.OS == 'android')? "9%": 45,
    autocorrect: false,
    backgroundColor : '#ffffff',
    borderColor:'#ffffff',
    paddingLeft  : '10',
  };
  
  // LOGIN VIEW VARIABLES
  self.VIEW_LOGIN_TOP = 480;
  self.VIEW_LOGIN_TOP_CONTENT = 80;

  // CREATE VIEW VARIABLES
  self.TOP_BAR_CREATE =  self.Images_Root + 'top_bar_create.png';  
  self.TXT_AGREE = "By clicking Create Account, you agree to our Terms of Use and that you have read our Privacy Policy.";  
  
  return self;
}

module.exports = config;


