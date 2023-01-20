import { Document, Schema, model } from 'mongoose';
import { Track } from '../track/track.model';

export interface Playlist extends Document {
  id: string;
  name: string;
  creator: string;
  playtime: number;
  trackList: Track[];
  createdAt?: Date;
  updatedAt?: Date;
}

const PlaylistSchema = new Schema({
  name: { type: String, required: true },
  creator: { type: String, required: true },
  playtime: { type: Number, required: true },
  trackList: [{ type: Schema.Types.ObjectId, ref: 'Track' }],
}, {
  timestamps: true
});

export const PlaylistModel = model<Playlist>('Playlist', PlaylistSchema);
