import { Controller, Get, HttpStatus, Param, Res } from "@nestjs/common";
import { PlaylistService } from "./playerlist.service";

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Get()
  async get(@Res() response, @Param() code: string) {
    return response.status(HttpStatus.OK).json(await this.playlistService.playlist(code));
  }
}
