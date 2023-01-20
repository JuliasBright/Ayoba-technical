import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Track, TrackModel } from './track.model';

@Injectable()
export class TrackService {
  constructor(@InjectModel('Track') private trackModel: Model<Track>) {}

  async findAll(): Promise<Track[]> {
    return await this.trackModel.find().exec();
  }

  async findOne(id: string): Promise<Track> {
    return await this.findOne(id);
  }

  async create(track: Track): Promise<Track> {
    const newTrack = new this.trackModel(track);
    return await newTrack.save();
  }

  async update(id: string, track: Track): Promise<Track> {
    return await this.update(id, track);
  }

  async delete(id: string): Promise<Track> {
    return await this.delete(id);
  }
}
