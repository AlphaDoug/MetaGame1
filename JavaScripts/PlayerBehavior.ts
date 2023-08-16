import { PlayerGunMgr } from "./PlayerGunMgr"

/**
 * 枪械模块：玩家行为树
 */
export class PlayerBehavior {
    player:Gameplay.Character
    state : GameConst.PlayerActionModeEnum
    /**不同职业的配速 */
    SpeedStdCoeft:number
    /**人物移动状态系数 */
    coefInertia:number
    /**人物加速度系数 */
    InerPara:number
    GunWeight:number
    BehJudgeTab:Map<string, boolean>
    keyDownTab:Array<string>

    // 单例模式
    private static _instance: PlayerBehavior;
    public static get Instance() {
        if (PlayerBehavior._instance == null) {
            PlayerBehavior._instance = new PlayerBehavior()
        }
        return PlayerBehavior._instance
    }   
    private BindEventHandler(){
        Events.addServerListener(EventConst.ClientEvent.OnEquipWeaponEvent, this.OnEquipWeaponEventHandler.bind(this))
        Events.addLocalListener(EventConst.ClientEvent.OnEquipWeaponEvent, this.OnEquipWeaponEventHandler.bind(this))
        //Events.addServerListener(EventConst.ClientEvent.ch, this.ChangeOccEventHandler.bind(this))
    } 
    constructor(){

        
    }
    private InitialDataRead(){
        /**玩家行为判断参数 */
        this.BehJudgeTab = new Map<string, boolean>([
            ["Run", false],
            ["Crouch", false],
            ["Quickly", false],
            ["Aim", false],
        ])
        this.keyDownTab = []
    }
    private InitPlayerAttributes(){
        this.player.maxJumpHeight = 1
    }
    /**
     * 装备枪更新跳跃速度
     */
    private OnEquipWeaponEventHandler(){
        if(PlayerGunMgr.Instance.curGun == null){
            return
        }
        //this.player.maxJumpHeight = 
    }
    private ChangeOccEventHandler(occId:number){
        
    }
    /**玩家行为判断 */
    private PlayerBehaviorChanged(_behavior : string){
        if(this.BehJudgeTab.get(_behavior)){
            this.BehJudgeTab.set(_behavior, false)
        }else{
            this.BehJudgeTab.set(_behavior, true)
        }
        this.BehJudgeTab.forEach((value, key) => {
            if(value){
                this.keyDownTab.push(key)
            }
        })
        if(this.keyDownTab.length == 1){
            switch (this.keyDownTab[0]) {
                case 'Run':
                    this.PlayerModeChanged(GameConst.PlayerActionModeEnum.Run)
                    break;      
                default:
                    break;
            }
        }else if(this.keyDownTab.length == 2){
            this.keyDownTab.forEach((value, key) => {
                switch (value) {
                    case 'Crouch':
                        this.PlayerModeChanged(GameConst.PlayerActionModeEnum.CrouchRun)
                        break;
                    case 'Quickly':
                        this.PlayerModeChanged(GameConst.PlayerActionModeEnum.QuicklyRun)
                        break;
                    case 'Aim':
                        this.PlayerModeChanged(GameConst.PlayerActionModeEnum.AimRun)
                        break;
                    default:
                        break;
                }
            })
        }else if(this.keyDownTab.length == 3){
            this.keyDownTab.forEach((value, key) => {
                switch (value) {
                    case 'Quickly':
                        this.PlayerModeChanged(GameConst.PlayerActionModeEnum.QuicklyCrouchRun)
                        break;
                    case 'Aim':
                        this.PlayerModeChanged(GameConst.PlayerActionModeEnum.AimCrouchRun)
                        break;               
                    default:
                        break;
                }
            })
        }
        this.keyDownTab = []
    }
    private PlayerModeChanged(modeName : GameConst.PlayerActionModeEnum){
        this.state = modeName
    }
}