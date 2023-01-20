import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Playlist } from './playlist.model';

@Injectable()
export class PlaylistService {
    findOne(playlistId: any) {
      throw new Error('Method not implemented.');
    }
    constructor(@InjectModel('Playlist') private readonly playlistModel: Model<Playlist>) {}

    async findAll(): Promise<Playlist[]> {
        return await this.playlistModel.find().populate('trackList').exec();
    }

    async findOne(id: string): Promise<Playlist> {
        return await this.playlistModel.findById(id).populate('trackList').exec();
    }

    async create(playlist: Playlist): Promise<Playlist> {
        const newPlaylist = new this.playlistModel(playlist);
        return await newPlaylist.save();
    }

    async update(id: string, playlist: Playlist): Promise<Playlist> {
        return await this.playlistModel.findByIdAndUpdate(id, playlist, { new: true });
    }

    async delete(id: string): Promise<Playlist> {
        return await this.playlistModel.findByIdAndRemove(id);
    }
}
