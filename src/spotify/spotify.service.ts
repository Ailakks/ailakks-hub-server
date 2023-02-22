import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { urlencoded } from "express";

@Injectable()
export class SpotifyService {
  constructor() {}
  async getToken(code: string) {
    const formData = new URLSearchParams();
    formData.append('client_id', process.env.SPOTIFY_CLIENT_ID);
    formData.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET);
    formData.append('code', code);
    formData.append('code', code);
    formData.append('grant_type', 'authorization_code')
    formData.append('redirect_url', 'http://localhost:3001/ailakks-hub/music');

    const response = await axios.post("https://accounts.spotify.com/api/token", formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).catch((error) => console.log(error));

    console.log(response)
    return "a";
  }
}
