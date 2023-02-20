import {Module} from '@nestjs/common';
import { PlaylistController } from "./playlist/playlist.controller";
import { PlaylistService } from "./playlist/playerlist.service";

import * as dotenv from "dotenv";

dotenv.config();

@Module({
    controllers: [PlaylistController],
    providers: [PlaylistService],
})
export class AppModule {
}