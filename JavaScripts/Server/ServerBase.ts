import { EventConst } from "../GameConst/EventConst"
import PlayerAttr from "./../PlayerAttr"
/**
 * 游戏服务端主脚本
 */
@Core.Class
export default class ServerBase extends Core.Script {
    private totalPlayerAttrs: Map<string, PlayerAttr> = new Map
    static mInstance: ServerBase
    constructor(data){
        super(data)
        ServerBase.mInstance = this
    }
    protected onStart(): void {
        Events.addPlayerJoinedListener(this.OnPlayerJoined.bind(this))
        Events.addPlayerLeftListener(this.OnPlayerLeft.bind(this))
    }

    private async OnPlayerJoined(player:Gameplay.Player){
        console.log('玩家加入' + player.character.guid)
        let obj = await Core.Script.spawnScript<PlayerAttr>(PlayerAttr, true)
        obj.InitData(player.character)
        this.totalPlayerAttrs.set(player.character.guid, obj)
        console.log('脚本为' + obj.guid)
        Events.dispatchToAllClient(EventConst.ClientEvent.PlayerAddSuccessedEvent, player.character.guid,  obj.guid)     
    }
    private OnPlayerLeft(player:Gameplay.Player){
        console.log('玩家离开' + player.character.guid)
        let obj = this.totalPlayerAttrs.get(player.character.guid)
        obj.destroy()
        this.totalPlayerAttrs.delete(player.character.guid)
    }

    public GetPlayerAttr(guid:string|Gameplay.Player):PlayerAttr{
        if (guid instanceof Gameplay.Player) {
            guid = guid.character.guid
            return this.totalPlayerAttrs.get(guid)
        }else{
            return this.totalPlayerAttrs.get(guid)
        }      
    }
}
