import app from 'firebase/app'
import 'firebase/database'

// Configuration file  importing env information
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_ID
}

//firebase class to consolidate our routes and request 
class Firebase { 
  constructor(){ 
    !app.apps.length ? app.initializeApp(config) : app.app();
    this.db = app.database()
  }

  dbRoot = ()=> this.db.ref("/")
}

export default Firebase