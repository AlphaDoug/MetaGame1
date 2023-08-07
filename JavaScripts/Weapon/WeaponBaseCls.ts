import { WeaponAnimationCls } from "./WeaponAnimationCls"
import { WeaponCameraCls } from "./WeaponCameraCls"
import { WeaponGUICls } from "./WeaponGUICls"
import { WeaponMagazineCls } from "./WeaponMagazineCls"
import { WeaponRecoilCls } from "./WeaponRecoilCls"
import { WeaponSoundCls } from "./WeaponSoundCls"

export abstract class WeaponBaseCls {

    /**枪械预制体*/
    public prefab: GameObject
    /**
     * 枪械配置ID
     */
    private id: number
    /**枪械绑定的锚点 */
    public root: GameObject
    /**枪械所属的玩家角色 */
    private character: Character
    /**枪口位置点 */
    private muzzleObj: GameObject
    /**枪管方向 */
    private dir: Vector
    /**投弹口对象 */
    private toss: GameObject

    /**枪械是否被持有 */
    private _isdraw: boolean = false
    private _isZoomIn : boolean = false
    private _rapidlyRemainingBullets: number = 1
    private _curShootMode : number = 1
    private _hasJustFired : boolean = false
    private _fireWait : number = 0
    private _isGoingToFire = false
    private _isFiringOnNextUpdate = false
    private _isAllowed = true
    private _wasAllowedAndFiring = false
    private _isGoingToReloadMagazine = false
    private _isReloadOnNextUpdate = false
    private _reloadWait = 0
    private _onReload = false
    private _isIgnoringSelf = true
    private _hasFireCondition = true
    private _fireConditionSide = 1
    private _isGoingToPump = false
    private _isPumpNextUpdate = false
    private _pumpWait = 0
    private _isPumping = false
    private _isWaitingPump = false
    private _zoomInTryPump = false
    private _isWithDrawing = false
    private _weaponAccessoryList : object = {
        muzzle: null,
        grip: null,
        magazine : null,
        butt: null,
        sight : null
    }
    
    private _magazine: WeaponMagazineCls
    private _recoil : WeaponRecoilCls
    private _cameraControl : WeaponCameraCls
    private _weaponGUI:WeaponGUICls
    private _animationController : WeaponAnimationCls
    private _weaponSound : WeaponSoundCls

    private _configData : GameConst.WeaponConfigData

    private _autoFireAim:boolean
    constructor(_character:Character, _root : GameObject, _weaponObj: GameObject){
        this.EarlyInitialize()
        this.prefab = _weaponObj
        this.root = _root
        this.character = _character
        this._magazine = new WeaponMagazineCls()
        this._recoil = new WeaponRecoilCls()
        this._cameraControl = new WeaponCameraCls()
        this._weaponGUI = new WeaponGUICls()
        this._animationController = new WeaponAnimationCls()
        this._weaponSound = new WeaponSoundCls()




        this.LaterInitialize()
    }
    /**在实例化最开始执行 */
    protected EarlyInitialize():void{

    }
    /**实例化最后执行 */
    protected LaterInitialize():void {

    }
    /**枪械更新函数 */
    public Update(_dt:number){
        if (this._isWithDrawing) {
            return
        }
        if (this._isGoingToFire) {
            this._isFiringOnNextUpdate = true
        }
        /**自动装弹开启后，进行检测 */
        if (true) {
            
        }
        /**上一帧开火了并且需要拉枪栓,并且当前没有在装子弹和正在拉枪栓的过程中 */
        if (this.pum) {
            
        }
    }
}