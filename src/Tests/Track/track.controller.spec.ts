import { Test, TestingModule } from '@nestjs/testing';
import { TrackController } from '../../Track/track.controller';
import { TrackService } from '../../Track/track.service';
import { Track } from '../../Track/track.model';

describe('TrackController', () => {
  let trackController: TrackController;
  let trackService: TrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrackController],
      providers: [TrackService],
    }).compile();

    trackController = module.get<TrackController>(TrackController);
    trackService = module.get<TrackService>(TrackService);
  });

  describe('findAll', () => {
    it('should return an array of tracks', async () => {
      const result = [{ id: '1', name: 'Track 1', album: 'Album 1', artist: 'Artist 1', duration: 180 }];
      jest.spyOn(trackService, 'findAll').mockImplementation(() => result);

      expect(await trackController.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a track by id', async () => {
      const result = { id: '1', name: 'Track 1', album: 'Album 1', artist: 'Artist 1', duration: 180 };
      jest.spyOn(trackService, 'findOne').mockImplementation(() => result);

      expect(await trackController.findOne('1')).toBe(result);
    });
  });

  describe('create', () => {
    it('should create a new track', async () => {
      const track: Track = { name: 'Track 1', album: 'Album 1', artist: 'Artist 1', duration: 180 };
      const result = { id: '1', ...track };
      jest.spyOn(trackService, 'create').mockImplementation(() => result);

      expect(await trackController.create(track)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update an existing track', async () => {
      const track: Track = { name: 'Track 1', album: 'Album 1', artist: 'Artist 1', duration: 180 };
      const result = { id: '1', ...track };
      jest.spyOn(trackService, 'update').mockImplementation(() => result);

      expect(await trackController.update('1', track)).toBe(result);
    });
  });

  describe('delete', () => {
    it('should delete a playlist', async () => {
        jest.spyOn(trackService, 'delete').mockImplementation(() => Promise.resolve({}));
        expect(await trackController.delete('1')).toEqual({});
      });
    });
});