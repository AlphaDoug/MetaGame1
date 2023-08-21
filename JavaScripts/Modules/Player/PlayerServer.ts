import { PlayerData } from "./PlayerData";
import { PlayerClient } from "./PlayerClient";

export class PlayerServer extends ModuleS<PlayerClient, PlayerData> {

    protected override onStart(): void {
        console.log('PlayerServer')
    }
}