import mongoose, { Types } from "mongoose";
import { type } from "os";

const emailSchema = new mongoose.Schema({
    to:{
        type: String,
        required: true,
    },
    subject:{
        type:String,
        default: '(No Subject)',
    },
    message:{
        type: String,
        default: '',
    },
    // senderId:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
}, {timestamps: true})


const Email = mongoose.model("Email", emailSchema)

export default Email