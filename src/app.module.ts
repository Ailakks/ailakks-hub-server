import {Module} from '@nestjs/common';
import { PlaylistController } from "./playlist/playlist.controller";
import { PlaylistService } from "./playlist/playerlist.service";

import * as dotenv from "dotenv";
import { SpotifyService } from "./spotify/spotify.service";
import { SpotifyController } from "./spotify/spotify.controller";

dotenv.config();

@Module({
    controllers: [PlaylistController, SpotifyController],
    providers: [PlaylistService, SpotifyService],
})
export class AppModule {
}