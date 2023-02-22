import {Module} from '@nestjs/common';
import { PlaylistController } from "./playlist/playlist.controller";
import { PlaylistService } from "./playlist/playerlist.service";

import * as dotenv from "dotenv";
import { SpotifyService } from "./spotify/spotify.service";

dotenv.config();

@Module({
    controllers: [PlaylistController],
    providers: [PlaylistService, SpotifyService],
})
export class AppModule {
}