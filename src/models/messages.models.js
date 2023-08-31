import { Schema, model } from "mongoose";

//MODELO DE MESSAGES

const messageSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const messageModel = model('messages', messageSchema)
export default messageModel;