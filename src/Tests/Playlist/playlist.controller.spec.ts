import { Test, TestingModule } from '@nestjs/testing';
import { PlaylistController } from '../../Playlist/playlist.controller';
import { PlaylistService } from '../../Playlist/playlist.service';
import { JwtAuthGuard } from '../../../auth/jwt-auth.guard';

describe('PlaylistController', () => {
  let controller: PlaylistController;
  let service: PlaylistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlaylistController],
      providers: [
        PlaylistService,
        {
          provide: JwtAuthGuard,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<PlaylistController>(PlaylistController);
    service = module.get<PlaylistService>(PlaylistService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of playlists', async () => {
      jest.spyOn(service, 'findAll').mockImplementation(() => Promise.resolve([{}]));
      expect(await controller.findAll()).toEqual([{}]);
    });
  });

  describe('findOne', () => {
    it('should return a playlist', async () => {
      jest.spyOn(service, 'findOne').mockImplementation(() => Promise.resolve({}));
      expect(await controller.findOne('1')).toEqual({});
    });
  });

  describe('create', () => {
    it('should create a new playlist', async () => {
      jest.spyOn(service, 'create').mockImplementation(() => Promise.resolve({}));
      expect(await controller.create({} as any)).toEqual({});
    });
  });

  describe('update', () => {
    it('should update a playlist', async () => {
      jest.spyOn(service, 'update').mockImplementation(() => Promise.resolve({}));
      expect(await controller.update('1', {} as any)).toEqual({});
    });
  });

  describe('delete', () => {
    it('should delete a playlist', async () => {
      jest.spyOn(service, 'delete').mockImplementation(() => Promise.resolve({}));
      expect(await controller.delete('1')).toEqual({});
    });
  });
});
