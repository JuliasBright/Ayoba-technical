import { Document, Schema, model } from 'mongoose';

export interface Track extends Document {
  id: string;
  name: string;
  album: string;
  artist: string;
  duration: number;
  artwork: string;
  audio: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const TrackSchema = new Schema({
  name: { type: String, required: true },
  album: { type: String, required: true },
  artist: { type: String, required: true },
  duration: { type: Number, required: true },
  artwork: { type: String, required: true },
  audio: { type: String, required: true },
}, {
  timestamps: true
});

export const TrackModel = model<Track>('Track', TrackSchema);