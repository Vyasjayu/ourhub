import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBOyD3LNNM5-MbSeMqJvnjOKMKM0SHfBjg",
    authDomain: "ourhub-services.firebaseapp.com",
    projectId: "ourhub-services",
    storageBucket: "ourhub-services.firebasestorage.app",
    messagingSenderId: "39324742069",
    appId: "1:39324742069:web:89981679c3b67c992ae9fc"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);