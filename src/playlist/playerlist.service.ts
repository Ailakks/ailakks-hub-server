import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SpotifyService } from "../spotify/spotify.service";

@Injectable()
export class PlaylistService {
  constructor(private readonly spotifyService: SpotifyService) { }

  async playlist(code: string) {
    const token = await this.spotifyService.getToken(code);

    const response = await axios.get(process.env.SPOTIFY_PLAYLIST_ENDPOINT,
      { headers: { Authorization: `Bearer ${token}` }});


    return { token: token, data: response.data };
  }
}
