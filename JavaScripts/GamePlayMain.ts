import PlayerAttr from "./PlayerAttr"

@Core.Class
export default class GamePlayMain extends Core.Script {
    private totalPlayerAttrs: Map<string, PlayerAttr> = new Map

    protected onStart(): void {
        Events.addPlayerJoinedListener(this.OnPlayerJoined.bind(this))
        Events.addPlayerLeftListener(this.OnPlayerLeft.bind(this))
    }

    private async OnPlayerJoined(player:Gameplay.Player){
        console.log('玩家加入' + player.character.guid)
        let obj = await Core.Script.spawnScript<PlayerAttr>(PlayerAttr, true)
        obj.InitData(player.character)
        this.totalPlayerAttrs.set(player.character.guid, obj)
        console.log('脚本为' + obj)
    }
    private OnPlayerLeft(player:Gameplay.Player){
        console.log('玩家离开' + player.character.guid)
        let obj = this.totalPlayerAttrs.get(player.character.guid)
        obj.destroy()
        this.totalPlayerAttrs.delete(player.character.guid)
    }
}
