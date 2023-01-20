import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TrackService } from '../src/Track/track.service';
import { PlaylistService } from '../src/Playlist/playlist.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly trackService: TrackService,
    private readonly playlistService: PlaylistService
  ) {}

  async validateUser(payload: any) {
    const track = await this.trackService.findOne(payload.trackId);
    const playlist = await this.playlistService.findOne(payload.playlistId);
    if (track && playlist) {
      return { id: track.id, name: track.name };
    }
    return null;
  }

  async login(user: any) {
    const payload = { trackId: user.id, name: user.name };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}