
import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

import "firebase/storage";

const firebaseConfig = {
    
    apiKey: "AIzaSyBrdxKDd9IPXYvbV2RgEjECA-jWb-wJRGw",
  authDomain: "agent-task-dcbbc.firebaseapp.com",
  projectId: "agent-task-dcbbc",
  storageBucket: "agent-task-dcbbc.appspot.com",
  messagingSenderId: "806071158431",
  appId: "1:806071158431:web:e9090607042687f2a504aa",
  measurementId: "G-DDBEP012C9"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app, 'gs://ehab-mazad.appspot.com');

export { storage, firebase  };
