import { EventConst } from "../GameConst/EventConst";
import PlayerAttr from "../PlayerAttr";
import { PlayerGunMgr } from "../PlayerGunMgr";
import { PlayerClient } from "./../Modules/Player/PlayerClient";
import { PlayerData } from "./../Modules/Player/PlayerData";
import { PlayerServer } from "./../Modules/Player/PlayerServer";

/**
 * 游戏客户端主脚本
 */
@Core.Class
export default class Client extends Core.Script {
    private totalPlayerAttrs: Map<string, PlayerAttr> = new Map
    mPlayerGunMgr: PlayerGunMgr
    static mInstance: Client
    constructor(data){
        super(data)
        Events.addServerListener(EventConst.ClientEvent.PlayerAddSuccessedEvent, this.OnPlayerSuccessAdded.bind(this))
        Client.mInstance = this
    }
    /** 当脚本被实例后，会在第一帧更新前调用此函数 */
    protected async onStart() {
        this.registerModule()
        this.mPlayerGunMgr = await PlayerGunMgr.Instance()

    }

    /**
     * 周期函数 每帧执行
     * 此函数执行需要将this.useUpdate赋值为true
     * @param dt 当前帧与上一帧的延迟 / 秒
     */
    protected onUpdate(dt: number): void {

    }

    /** 脚本被销毁时最后一帧执行完调用此函数 */
    protected onDestroy(): void {

    }

       /** 注册模块 */
    protected registerModule() {
        ModuleManager.getInstance().registerModule(PlayerServer, PlayerClient, PlayerData);
    }

    private async OnPlayerSuccessAdded(c_guid : string, ins_guid : string){
        console.log('OnPlayerSuccessAdded   ', c_guid,"  ", ins_guid)
        let s = await ScriptManager.asyncFindScript(ins_guid) as PlayerAttr
        console.log(s)
        this.totalPlayerAttrs.set(c_guid, s)
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