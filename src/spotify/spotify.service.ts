import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SpotifyService {
  constructor() {}
  async getToken(code: string) {
    const response = await axios.get("https://accounts.spotify.com/api/token",
      { params: { client_id: process.env.SPOTIFY_CLIENT_ID, client_secret: process.env.SPOTIFY_CLIENT_SECRET, code: code, redirect_url: "https://accounts.spotify.com/api/token" }});

    return response.data;
  }
}
