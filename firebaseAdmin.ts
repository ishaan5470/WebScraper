import * as admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
const serviceAccount=require("./serviceAccountKey.json");

//now we will see if we have intialise any app previously and getApp will tell the same 
if (!getApps().length){
    //if not app is availaible then we are gonna intialise app

    admin.initializeApp({
        credential:admin.credential.cert(serviceAccount),
    });
}
//now when we have done this we can accesss out database from firebase 
 const adminDb=admin.firestore();
 export {adminDb}; 