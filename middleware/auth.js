import jwt from "jsonwebtoken";
// import { model } from "mongoose";
import adminModel from "../models/Admin.js";
import userModel from "../models/user.js"
const config=process.env
const  authen = async (role=[]) => {
let token
token=req.headers.Authorization["bearer"]
if(!token){
return res.status(401).send("Access Denied")
}
try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if(role.includes("superAdmin")||role.includes("admin")){
        const admin= await adminModel.find({userName:req.body.userName})
        let adminRole= admin.isSuper? "superAdmin": "admin";
        if(role.includes(adminRole) &&decoded){
            next()
        }
        else res.status(401).send({message: "Access Denied"})  
    }
    if(role.includes("user")){
        const admin= await userModel.find({email:req.body.email})
        let userRole=admin.email? true:false
        if(userRole && decoded){
            next()
        }
        else res.status(401).send({message: "Access Denied"})  
    }
    
     
}
catch(err){
    console.log(req)
    return res.status(400).send({message: err.message})
}
};

export default authen