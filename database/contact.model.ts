import { Schema, models, model, Document } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
}

const MessageSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = models.Message || model('Message', MessageSchema);

export default Message;
