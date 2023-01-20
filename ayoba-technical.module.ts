import { Module } from '@nestjs/common';
import { TrackModel } from './src/Track/track.model';
import { PlaylistModel } from './src/Playlist/playlist.model';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TrackModel, PlaylistModel, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
