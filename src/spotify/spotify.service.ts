import { Injectable, UnauthorizedException } from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class SpotifyService {
  constructor() {}
  async getToken(code: string) {
    const formData = new URLSearchParams();
    formData.append('client_id', process.env.SPOTIFY_CLIENT_ID);
    formData.append('client_secret', process.env.SPOTIFY_CLIENT_SECRET);
    formData.append('code', code);
    formData.append('grant_type', 'authorization_code')
    formData.append('redirect_uri', process.env.SPOTIFY_REDIRECT_URI);

    const response = await axios.post("https://accounts.spotify.com/api/token", formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).catch((error) => console.log(error));

    if (!response) {
      throw new UnauthorizedException("Invalid code");
    }

    return response.data.access_token;
  }
}
