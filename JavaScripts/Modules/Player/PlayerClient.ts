import { PlayerData } from "./PlayerData";
import { PlayerServer } from "./PlayerServer";

export class PlayerClient extends ModuleC<PlayerServer, PlayerData> {
    protected onAwake(): void {
        console.log('PlayerClientonAwake')
    }
    protected override onStart(): void {
        console.log('PlayerClientonStart')
    }
}