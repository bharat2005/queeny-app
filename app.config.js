import 'dotenv/config'

export default {

  "expo": {
    "name": "queeny",
    "slug": "queeny",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "queeny",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ],
      "expo-font",
      "expo-video"
    ],
    "experiments": {
      "typedRoutes": true
    },
      "extra":{
 FIREBASE_API_KEY:process.env.FIREBASE_API_KEY,
FIREBASE_PROJECT_ID:process.env.FIREBASE_PROJECT_ID,
PROJECT_APP_ID:process.env.PROJECT_APP_ID,
  }
  }

}
