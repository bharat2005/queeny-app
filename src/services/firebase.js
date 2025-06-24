// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth , getReactNativePersistence} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import AsyncStorage, {} from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'

const firebaseConfig = {
  apiKey: Constants.expoConfig.extra.FIREBASE_API_KEY,
  authDomain: "queeny-bfb6d.firebaseapp.com",
  projectId: Constants.expoConfig.extra.FIREBASE_PROJECT_ID,
  storageBucket: "queeny-bfb6d.firebasestorage.app",
  messagingSenderId: "476521664590",
  appId: Constants.expoConfig.extra.PROJECT_APP_ID,
  measurementId: "G-F0QB288H6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})
export const db = getFirestore(app)