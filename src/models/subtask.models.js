import mongoose,{ Schema } from "mongoose";
import { stringify } from "node:querystring";

const subTaskSchema= new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    task:{
        type:String,
        ref:"Task",
        required:true
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    createBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})


export const Subtask= mongoose.model("SubTask", subTaskSchema)