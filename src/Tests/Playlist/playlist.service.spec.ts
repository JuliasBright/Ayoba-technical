import { Test, TestingModule } from "@nestjs/testing";
import { PlaylistService } from "../../Playlist/playlist.service";
import { getModelToken } from "@nestjs/mongoose";
import { Playlist } from "../../Playlist/playlist.model";
import { Model } from "mongoose";

describe("PlaylistService", () => {
  let service: PlaylistService;
  let playlistModel: Model<Playlist>;

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('should return a playlist', async () => {
      jest.spyOn(playlistModel, 'findById').mockImplementation(() => ({
        populate: () => ({ exec: () => ({}) }),
      }));

      expect(await service.findOne('1')).toEqual({});
    });
  });

  describe('create', () => {
    it('should create a new playlist', async () => {
      jest.spyOn(playlistModel.prototype, 'save').mockImplementation(() => ({}));
      expect(await service.create({} as Playlist)).toEqual({});
    });
  });

  describe('update', () => {
    it('should update a playlist', async () => {
      jest
        .spyOn(playlistModel, 'findByIdAndUpdate')
        .mockImplementation(() => ({}));
      expect(await service.update('1', {} as Playlist)).toEqual({});
    });
  });

  describe('delete', () => {
    it('should delete a playlist', async () => {
      jest
        .spyOn(playlistModel, 'findByIdAndDelete')
        .mockImplementation(() => ({}));
      expect(await service.delete('1')).toEqual({});
    });
});
