import jwt from "jsonwebtoken";
// import { model } from "mongoose";
import adminModel from "../models/Admin.js";
import userModel from "../models/user.js"
export const authorize=(role = []) =>{
  return [
 
        (req, res, next) => {
            try{
            let token=req.headers.authorization.split(" ")[1]||"none"
            let decoded=jwt.verify(token, process.env.JWT_SECRET);
            if(!decoded){
                return res.status(401).json({ message: 'Unauthorized' });
            }}catch(error){return res.status(401).json({ message: 'Unauthorized' });}
            if(role.includes("superAdmin")||role.includes("admin")){
                let admin;
                adminModel.find({userName:req.body.userName}).then(
                    function(success){admin= success}, function(reject){admin= "none"}
                )
                if(admin==="none"){return res.status(401).send({message: "Access Denied"})}
                let adminRole;
                admin[0].isSuper? adminRole="superAdmin": adminRole="admin";
                if(!role.includes(adminRole)){
                   return res.status(401).send({message: "Access Denied"})
                }
                
            }
            if(role.includes("user")){
                let user;
                try{
                userModel.find({_id: req.params.ID}).then(function(success){
                    user= success
                    console.log(user)
                }, function(reject){user= "none"})
               // let userRole=user.email||false
                if(user==="none"){
                    return res.status(401).send({message: "Access Denied"})
                
            }}catch(error){return res.status(400).send({err:error, data:user, message:"batata"})}} 
            next();
 
        }
 
    ];
 
 }
 export default authorize
