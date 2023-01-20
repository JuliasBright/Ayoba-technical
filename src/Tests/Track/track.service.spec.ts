import { Test, TestingModule } from '@nestjs/testing';
import { TrackService } from '../../Track/track.service';
import { Track } from '../../Track/track.model';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

const track: Track = {
  name: 'Test Track',
  album: 'Test Album',
  artist: 'Test Artist',
  duration: 180,
  artwork: 'http://test.com/artwork.jpg',
  audio: 'http://test.com/audio.mp3',
}

describe('TrackService', () => {
  let trackService: TrackService;
  let trackModel: Model<Track>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TrackService,
        {
          provide: getModelToken('Track'),
          useValue: {
            find: jest.fn().mockReturnValue([track]),
            findById: jest.fn().mockReturnValue(track),
            findByIdAndRemove: jest.fn().mockReturnValue(track),
            findByIdAndUpdate: jest.fn().mockReturnValue(track),
            save: jest.fn().mockReturnValue(track),
          }
        }
      ],
    }).compile();

    trackService = module.get<TrackService>(TrackService);
    trackModel = module.get<Model<Track>>(getModelToken('Track'));
  });

  it('should find all tracks', async () => {
    const tracks = await trackService.findAll();
    expect(tracks).toEqual([track]);
  });

  it('should find one track by id', async () => {
    const track = await trackService.findOne('123');
    expect(trackModel.findById).toBeCalledWith('123');
    expect(track).toEqual(track);
  });

});