import mongoose, { Schema, Document } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
  location: string;
  createdAt: Date;
  imageId: string;
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageId: { type: String },
});

export default mongoose.models.Event ||
  mongoose.model<IEvent>("Event", EventSchema);
