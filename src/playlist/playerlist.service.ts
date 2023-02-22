import { Injectable, UnauthorizedException } from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class PlaylistService {
  constructor() { }

  async playlist(token: string) {
    const response = await axios.get(process.env.SPOTIFY_PLAYLIST_ENDPOINT,
      { headers: { Authorization: `Bearer ${token}` }});

    if (!response) {
      throw new UnauthorizedException("Invalid token");
    }

    return response.data;
  }
}
