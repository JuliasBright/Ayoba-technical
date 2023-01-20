import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Router, Request, Response } from 'express';
import { TrackService } from './src/track/track.service';
import { PlaylistController } from './src/playlist/playlist.controller';
import { TrackController } from './src/track/track.controller';
import { Track } from './src/track/Track.model';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@Controller()
@UseGuards(JwtAuthGuard)
export class AppController {
    @Get('tracks')
    redirectToTracks() {
        return { url: '/track' };
    }

    @Get('playlists')
    redirectToPlaylists() {
        return { url: '/playlist' };
    }
}
