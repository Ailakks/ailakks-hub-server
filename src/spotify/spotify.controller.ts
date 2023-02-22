import { Controller, Get, HttpStatus, Res, Query } from "@nestjs/common";
import { SpotifyService } from "./spotify.service";

@Controller('token')
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @Get()
  async get(@Res() response, @Query('code') code: string) {
    return response.status(HttpStatus.OK).json(await this.spotifyService.getToken(code));
  }
}
