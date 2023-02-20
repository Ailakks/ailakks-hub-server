import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PlaylistService {
  constructor() {}
  async playlist() {
    const response = await axios.get(process.env.SPOTIFY_PLAYLIST_ENDPOINT,
      { headers: { Authorization: `Bearer ${process.env.SPOTIFY_API_KEY}` }});

    return response.data;
  }
}
