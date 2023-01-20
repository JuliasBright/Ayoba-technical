import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { Playlist } from './playlist.model';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';


@Controller('playlists')
@UseGuards(JwtAuthGuard)
export class PlaylistController {
  constructor(private playlistService: PlaylistService) {}

  @Get()
  async findAll(): Promise<Playlist[]> {
    return await this.playlistService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Playlist> {
    return await this.playlistService.findOne(id);
  }

  @Post()
  async create(@Body() playlist: Playlist): Promise<Playlist> {
    return await this.playlistService.create(playlist);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() playlist: Playlist): Promise<Playlist> {
    return await this.playlistService.update(id, playlist);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Playlist> {
    return await this.playlistService.delete(id);
  }
}
