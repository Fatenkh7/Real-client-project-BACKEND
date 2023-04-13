import { Schema, model } from "mongoose";

const packageSchema=new Schema({
    packageTitle:{
        type:String,
        required:true,
    },
    idImage:{
        type:Schema.Types.ObjectId,
        required:true,
        //ref:"Image"
    },
    description:{
        type:String,
        required:true,
    },
    locations:[{
        type:String,
        required:true
    }],
    duration:{
        type:String
    },
    isCustomized:{
        type:Boolean
    },
    idCustomer:{
        type:Schema.Types.ObjectId,
        required:function() { return this.isCustomized === true; },
        //ref:"User"
    }
}, {collection:"Package"});
const Package=model("Package", packageSchema);
export default Package;