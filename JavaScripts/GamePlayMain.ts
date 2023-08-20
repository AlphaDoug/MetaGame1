@Core.Class
export default class GamePlayMain extends Core.Script {
    protected onStart(): void {
        Events.addPlayerJoinedListener(this.OnPlayerJoined.bind(this))
        Events.addPlayerLeftListener(this.OnPlayerLeft.bind(this))
    }

    private OnPlayerJoined(player:Gameplay.Player){
        console.log('玩家加入' + player.character.guid)
        let obj = GameObject.spawn({ guid : '419E9A8A411721D818EACAAEFF979263', replicates : true})
        console.log('脚本为' + obj)
    }
    private OnPlayerLeft(player:Gameplay.Player){
        console.log('玩家离开' + player.character.characterName)

    }
}
