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
    private _pumpMakeShell = false
    private _aimBeforePump = false
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
        this._magazine = new WeaponMagazineCls(this)
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
        if (this._configData.autoReload) {
            //if(this._magazine.)
        }
        /**上一帧开火了并且需要拉枪栓,并且当前没有在装子弹和正在拉枪栓的过程中 */
        if (this._configData.pumpAfterFire && this._hasJustFired && !this._onReload && !this._isPumping) {
            if (this._isZoomIn) {
                this._isWaitingPump = true
            }else{
                this.PumpStart()
            }
        }
        if (this._zoomInTryPump && this._isWaitingPump) {
            this._zoomInTryPump = true
            this.PumpStart()
        }
        /**准备在下一帧进行换弹操作 */
        if(this._isGoingToReloadMagazine){
            this._onReload = true
            this._isReloadOnNextUpdate = true
            this._isAllowed = false
            //this._reloadWait = 
        }
        /**准备在下一帧进行拉枪栓操作 */
        if (this._isGoingToPump) {
            this._isPumpNextUpdate = true
            this._isAllowed = false
            this._pumpMakeShell = false
            this._isPumping = true
            this._pumpWait = 1 / this._configData.shootSpeed
        }
        /**进行开始射击/停止射击/开始换子弹的事件触发 */
        let isAllowedAndFiring = this._isGoingToFire && this._isAllowed
        if (this.character) {
            if (isAllowedAndFiring && !this._wasAllowedAndFiring) {
                Events.dispatchLocal(GameConst.LocalWeaponEvent.FireStarted, this)
            }
            if (!isAllowedAndFiring && this._wasAllowedAndFiring) {
                Events.dispatchLocal(GameConst.LocalWeaponEvent.FireStopped, this)
            }
            if (this._isGoingToPump) {
                this._isGoingToPump = false
                Events.dispatchLocal(GameConst.LocalWeaponEvent.PumpStarted, this)
            }
            if (this._isGoingToReloadMagazine) {
                if(this._configData.reloadWithMagazines){
                    Events.dispatchLocal(GameConst.LocalWeaponEvent.MagazineLoadStarted, this)
                }else{
                    Events.dispatchLocal(GameConst.LocalWeaponEvent.BulletLoadStarted, this)
                }
                if (this._isZoomIn) {
                    this.MechanicalAimStop()
                }
                this._isGoingToReloadMagazine = false
            }
        }
        this._wasAllowedAndFiring = isAllowedAndFiring

        this._fireWait -= _dt
        this._reloadWait -= _dt
        this._pumpWait -= _dt
        if (this._pumpWait < 0.8 / this._configData.shootSpeed && this._pumpWait > 0 && this._aimBeforePump) {
            this.MechanicalAimStop()
        }
        if (this._pumpWait < 0.6 / this._configData.shootSpeed && this._pumpWait > 0 && this._isPumping && !this._pumpMakeShell) {
            this.MakeBulletShell()
            this._pumpMakeShell = true
        }
        /**检查当前换弹操作是否结束 */
        if (this._hasJustFired && this._configData.canInterruptBulletLoad) {
            /**上一帧开火了，需要中断换弹操作 */
            this._reloadWait = 0
            this._isAllowed = true
            this._isReloadOnNextUpdate = false
            this._onReload = false
        }else{
            if (this._isReloadOnNextUpdate && this._reloadWait < 0) {
                if (this._configData.reloadWithMagazines) {
                    // Currently reloading the entire magazine
                    this._isAllowed = true;
                    this._isReloadOnNextUpdate = false;
                    //this._magazine.LoadMagazine();
                    this._onReload = false;
                    Events.dispatchLocal(GameConst.LocalWeaponEvent.ReloadFinished, this)
                } else {
                    // Currently reloading one bullet at a time
                    //this._magazine.LoadOneBullet();
                    Events.dispatchLocal(GameConst.LocalWeaponEvent.BulletLoaded, this)
                    // Reloaded one bullet, check if the magazine is not fully loaded
                    if (this._magazine.UpdateLoadPercentage() !== 100) {
                        // Magazine is not fully loaded, check if it can continue loading bullets
                        if (this._magazine.UpdateCanLoad()) {
                            // Can continue loading bullets
                            this._isAllowed = this._configData.canInterruptBulletLoad;
                            this._isReloadOnNextUpdate = true;
                            this._onReload = true;
                            this._reloadWait = this._magazine.GetLoadTime();
                        } else {
                            // Cannot continue loading bullets
                            this._isAllowed = true;
                            this._isReloadOnNextUpdate = false;
                            this._onReload = false;
                            Events.dispatchLocal(GameConst.LocalWeaponEvent.ReloadFinished, this);
                        }
                    } else {
                        // Magazine is fully loaded
                        this._isAllowed = true;
                        this._isReloadOnNextUpdate = false;
                        this._onReload = false;
                        Events.dispatchLocal(GameConst.LocalWeaponEvent.ReloadFinished, this);
                    }
                }
            }
            
        }
    }

    protected PumpStart():void{
        
    }
    protected MechanicalAimStop():void{
        
    }
    protected MakeBulletShell():void{
        
    }
}