import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { TrackService } from './track.service';
import { Track } from './track.model';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { ErrorHandler } from '@nestjs/common/interfaces';

@Controller('tracks')
@UseGuards(JwtAuthGuard)
export class TrackController {
  constructor(private trackService: TrackService) {}

  @Get()
  async findAll(): Promise<Track[]> {
    return await this.trackService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Track> {
      return await this.trackService.findOne(id);
  }

  @Post()
  async create(@Body() track: Track): Promise<Track> {
      return await this.trackService.create(track);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() track: Track): Promise<Track> {
      return await this.trackService.update(id, track);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Track> {
      return await this.trackService.delete(id);
  }
}
