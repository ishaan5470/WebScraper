import { adminDb } from "@/firebaseAdmin";
import type { NextApiResponse,NextApiRequest } from "next";
import admin from "firebase-admin";
type Data={
    collection_id:string,
    start_eta:number,
};

type Error={
    error:string
}
export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse<Data | Error>

){

    try{

    const {search}=req.body;
    console.log("Search is>>>>>> ", search)

    const response= await fetch (`https://api.brightdata.com/dca/trigger?collector=c_ljphzbd22dxinmoh30&queue_next=1`,{
        method:"POST",
        headers:{
            Authorization:`Bearer ${process.env.BRIGHTDATA_APIKEY}`,
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            search,
        }),
    });
    //now capture the data with response.json


    const data=await response.json();
    console.log("Data is >>", data);
    const {collection_id,start_eta} = data;

    await adminDb.collection('searches').doc(collection_id).set({
        search,
        start_eta,
        status:"pending",
        updatedAt:admin.firestore.Timestamp.now(),
    })


     return res.status(200).json({
        collection_id:"1234",
        start_eta:1234
    });

} catch(e:any){
    console.log("Error is >>>", e);
    return res.status(500).json({error:e.message})
    
}
}
