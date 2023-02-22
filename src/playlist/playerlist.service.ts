import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PlaylistService {
  constructor() { }

  async playlist(token: string) {
    const response = await axios.get(process.env.SPOTIFY_PLAYLIST_ENDPOINT,
      { headers: { Authorization: `Bearer ${token}` }});


    return { token: token, data: response.data };
  }
}
