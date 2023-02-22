import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SpotifyService } from "../spotify/spotify.service";

@Injectable()
export class PlaylistService {
  constructor(private readonly spotifyService: SpotifyService) { }

  async playlist(code: string) {
    const token = await this.spotifyService.getToken(code);
    console.log(token)

    const response = await axios.get(process.env.SPOTIFY_PLAYLIST_ENDPOINT,
      { headers: { Authorization: `Bearer ${"a"}` }});


    return response.data;
  }
}
