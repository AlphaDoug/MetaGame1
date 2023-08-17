import { WeaponAccessoryBaseCls } from "./WeaponAccessoryBaseCls"
import { WeaponAnimationCls } from "./WeaponAnimationCls"
import { WeaponCameraCls } from "./WeaponCameraCls"
import { WeaponGUICls } from "./WeaponGUICls"
import { WeaponMagazineCls } from "./WeaponMagazineCls"
import { WeaponRecoilCls } from "./WeaponRecoilCls"
import { WeaponSoundCls } from "./WeaponSoundCls"
import { WeaponTool } from "./WeaponTool"
type FireModeEnum = GameConst.FireModeEnum

export abstract class WeaponBaseCls {

    /**枪械预制体*/
    public prefab: GameObject
    /**
     * 枪械配置ID
     */
    id: number
    /**枪械绑定的锚点 */
    public root: GameObject
    /**枪械所属的玩家角色 */
    public character: Character
    /**枪口位置点 */
    private muzzleObj: GameObject
    /**枪管方向 */
    private dir: Vector
    /**投弹口对象 */
    private toss: GameObject

    /**枪械是否被持有 */
    _isdraw: boolean = false
    _isZoomIn : boolean = false
    private _rapidlyRemainingBullets: number = 1
    private _curShootMode : FireModeEnum = GameConst.FireModeEnum.Auto
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
    public _weaponAccessoryList : Map<GameConst.WeaponAccessoryTypeEnum, WeaponAccessoryBaseCls> = new Map<GameConst.WeaponAccessoryTypeEnum, WeaponAccessoryBaseCls>()
    
    private _magazine: WeaponMagazineCls
     _recoil : WeaponRecoilCls
    _cameraControl : WeaponCameraCls
     _weaponGUI:WeaponGUICls
    private _animationController : WeaponAnimationCls
    private _weaponSound : WeaponSoundCls
    public error: number

    public get _configData() : GameConst.WeaponConfigData

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
    /**析构函数，需要手动调用 */
    public destructor() : void {
        this.EarlyDestructor()
        this._weaponGUI.SetVisible(false)
        this._magazine.RecordingBulletsLeft(true)
        this.prefab.setVisibility(Type.PropertyStatus.On)
        this._weaponAccessoryList.forEach((value, key) => {
            if (value) {
                value.UnEquipFromWeapon()             
            }
        })
        this._weaponAccessoryList.clear()
        //析构枪上的自有类
        this._cameraControl.destructor()
        this._weaponGUI.destructor()
        this._animationController.destructor()
        this._weaponSound.destructor()
        //清除枪械所有者
        //self.gun.Player.Value = nil


    }
    /**在实例化最开始执行 */
    protected EarlyInitialize():void{

    }
    /**实例化最后执行 */
    protected LaterInitialize():void {

    }
    protected EarlyDestructor():void {
        
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
                    this._magazine.LoadMagazine();
                    this._onReload = false;
                    Events.dispatchLocal(GameConst.LocalWeaponEvent.ReloadFinished, this)
                } else {
                    // Currently reloading one bullet at a time
                    this._magazine.LoadOneBullet();
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
        /**检查当前拉枪栓操作是否结束 */
        if (this._isPumpNextUpdate && this._pumpWait < 0) {
            this._isAllowed = true
            this._isPumpNextUpdate = false
            this._isPumping = false
            this._isWaitingPump = false
            Events.dispatchLocal(GameConst.LocalWeaponEvent.Pumped, this)
            if(this._aimBeforePump && !this._autoFireAim){
                this._aimBeforePump = false
                this.MechanicalAimStart()
            }
        }
        this._hasJustFired = false
        /**检查开火状态 */
        if (this._isFiringOnNextUpdate && this._isAllowed) {
            let fireDelay = 1 / this._configData.shootSpeed
            let delay = 0
            let hasFired = false
            while(this._fireWait < 0){
                for(let i = 1; i <= this._configData.bulletPerShoot; i++){
                    if(this._magazine.isEmptyLoaded){
                        break
                    }
                    if (this.Fire(delay, !this._configData.consumeSingleBulletPerShoot)) {
                        hasFired = true
                        this._rapidlyRemainingBullets--
                    }else{
                        this._rapidlyRemainingBullets = 0
                    }
                }
                if(hasFired && this._configData.consumeSingleBulletPerShoot){
                    this.Consume()
                }
                if(hasFired){
                    if(!this._configData.pumpAfterFire){
                        this.MakeBulletShell()
                    }
                    Events.dispatchLocal(GameConst.LocalWeaponEvent.Fired, this)
                }else{
                    Events.dispatchLocal(GameConst.LocalWeaponEvent.EmptyFire, this)
                }
                delay += fireDelay
                this._fireWait += fireDelay
                this._isGoingToFire = false
            }
            if(hasFired){
                this._recoil.Fire()
                this._cameraControl.InputRecoil(this._recoil)
            }
            //当前不允许开枪，则将枪中子弹连发剩余子弹清零
            if(!this._isAllowed){
                this._rapidlyRemainingBullets = 0
            }
            //根据不同的开火模式进行数据重置
            if(this._curShootMode != GameConst.FireModeEnum.Auto){
                if(this._rapidlyRemainingBullets <= 0 || this._magazine.isEmptyLoaded){
                    this._rapidlyRemainingBullets = 0
                    this._isGoingToFire = false
                    this._isFiringOnNextUpdate = false
                }
                if(this._curShootMode == GameConst.FireModeEnum.Single){
                    this._isGoingToFire = false
                    this._isFiringOnNextUpdate = false
                }
            }else{
                this._rapidlyRemainingBullets = this._rapidlyRemainingBullets <= 0 ? 0 : this._rapidlyRemainingBullets
                this._isGoingToFire = false
                this._isFiringOnNextUpdate = false
            }
            this._fireWait = Math.max(0, this._fireWait)
            this._reloadWait = Math.max(0, this._reloadWait)
            this._pumpWait = Math.max(0, this._pumpWait)
            //其他控制类的更新
            this._cameraControl.Update(_dt)
            this._animationController.Update(_dt)
            this._recoil.Update(_dt)
            this._weaponGUI.Update(_dt)
            this._magazine.Update()

            this.RefreshScales()
        }
    }

    /**
     * 枪上装备一个配件
     * @param acce 配件实例
     * @returns 
     */
    public EquipAccessory(acce:WeaponAccessoryBaseCls): [boolean, WeaponAccessoryBaseCls] {
        let acceId = acce.id
        let canBeEquip = false
        this._configData.canBeEquipAccessory.forEach(id => {
            if (id == acceId) {
                canBeEquip = true
            }
        })
        if (!canBeEquip) {
            return [false, null]
        }
        let originAcce = this._weaponAccessoryList.get(acce.configData.location)
        this._weaponAccessoryList.set(acce.configData.location, acce)
        acce.EquipToWeapon(this)
        return [true, originAcce]
    }
    public UnEquipAccessory(_locationOrCls:WeaponAccessoryBaseCls | number): void{
        if(_locationOrCls instanceof WeaponAccessoryBaseCls){
            this._weaponAccessoryList.delete(_locationOrCls.configData.location)
        }else{
            this._weaponAccessoryList.delete(_locationOrCls)
        }
    }
    /**换弹夹,换弹夹的的时候不能拉枪栓 */
    public LoadMagazine(): void {
        if(this._isdraw && ! this._isPumping && this._magazine.canLoaded && ! this._onReload){
            this._isGoingToReloadMagazine = true
        }
    }
    protected PumpStart():void{
        if(this._isdraw && !this._onReload){
            this._isGoingToPump = true
            this._aimBeforePump = this._isZoomIn
        }
    }
    protected async MakeBulletShell():Promise<void>{
        if(this.toss == null){
            return
        }
        let temp = new Rotation(180 * Math.random(), 0, 180 * Math.random())
        let obj = await GameObjPool.getInstance().asyncSpawn(this._configData.bulletShell)
        obj.setWorldLocation(this.toss.getWorldLocation())
        obj.setWorldRotation(temp)
    }
    protected async MakeFireEffect():Promise<void>{
        let obj =await GameObjPool.getInstance().asyncSpawn(this._configData.fireEffect)
        obj.setWorldLocation(this.muzzleObj.getWorldLocation())
    }
    protected async MakeBullet(endObj:GameObject, endPos:Vector, endNormal:Vector){
        if(!endObj){
            return
        }
        if(endObj instanceof Character){
            return
        }
        let obj = await GameObjPool.getInstance().asyncSpawn(this._configData.bulletHole)
        obj.setWorldLocation(endPos)
        obj.setWorldScale(new Vector(0.1, 0.1, 0.1))
    }
    protected async MakeHitEffect(endPos:Vector):Promise<void>{
        let obj = await GameObjPool.getInstance().asyncSpawn(this._configData.hitEffect)
        obj.setWorldLocation(endPos)
    }
    public IgnoreSelf(ignore:boolean){
        this._isIgnoringSelf = ignore
    }
    public SetFireCondition(side:number){
        this._hasFireCondition = true
        this._fireConditionSide = side
    }
    public CancelFireCondition(){
        this._hasFireCondition = false
    }
    public TryFireOneBullet(){
        if(this._isdraw){
            this._isGoingToFire = true
            switch (this._curShootMode) {
                case GameConst.FireModeEnum.Single:
                    this._rapidlyRemainingBullets = 1
                    break
                case GameConst.FireModeEnum.Rapidly_1:
                    this._rapidlyRemainingBullets = this._configData.rapidly_1
                    break
                case GameConst.FireModeEnum.Rapidly_2:
                    this._rapidlyRemainingBullets = this._configData.rapidly_2
                    break
                default:
                    break
            }
        }
    }
    public TryKeepFire(){
        if(this._isdraw && this._curShootMode == GameConst.FireModeEnum.Auto){
            this._isGoingToFire = true
        }
    }
    public TryPump(b:boolean){
        if(this._configData.pumpAfterFire && this._isZoomIn && !this._isPumping){
            //开枪后要拉栓并且现在是开镜状态
            this._zoomInTryPump = true
        }
        if(!b){
            return
        }
        this._autoFireAim = b
    }
    public MechanicalAimStart():void {
        if(this._isZoomIn || !this._isdraw){
            return
        }
        if(!(this.character.movementState == MovementMode.Walk) || this._isPumping || this._onReload){
            return
        }
        this._isZoomIn = true
        this._cameraControl.MechanicalAimStart()
        this._weaponGUI.MechanicalAimStart()
        Events.dispatchLocal(GameConst.LocalWeaponEvent.AimIn, this)
    }
    public MechanicalAimStop():void{
        if(!(this._isZoomIn && this._isdraw)){
            return
        }
        this._isZoomIn = false
        this._cameraControl.MechanicalAimStop()
        this._weaponGUI.MechanicalAimStop()
        Events.dispatchLocal(GameConst.LocalWeaponEvent.AimOut, this)
    }
    public WithdrawWeapon():void{
        if(!this._isdraw){
            return
        }
        this._aimBeforePump = false
        if(this._isZoomIn){
            this.MechanicalAimStop()
        }
        this._cameraControl.OnUnEquipWeapon(true)
        this._weaponGUI.SetVisible(false)
        this.prefab.setVisibility(Type.PropertyStatus.Off)
        if(this._onReload){
            this._reloadWait = 0
            this._isReloadOnNextUpdate = false
            this._onReload = false
            this._isAllowed = true
            Events.dispatchLocal(GameConst.LocalWeaponEvent.ReloadFinished, this)
        }
        this._isdraw = false
        Events.dispatchLocal(GameConst.LocalWeaponEvent.WithDrawWeapon, this)
    }
    public DrawWeapon():void{
        if(this._isdraw){
            return
        }
        this._isWithDrawing = true
        this._isdraw = true
        this._aimBeforePump = false
        this._weaponGUI.SetVisible(true)
        this._cameraControl.OnEquipWeapon(this, null)
        this.prefab.setVisibility(Type.PropertyStatus.On)
        
        if(this._isWaitingPump){
            this.PumpStart()
        }
        setTimeout(() => {
            if (this) {
                this._isWithDrawing = false
            }
        }, 1000);       
        Events.dispatchLocal(GameConst.LocalWeaponEvent.DrawWeapon, this)
    }
    /**
     * Consume
     */
    public Consume():void {
        this._magazine.Consume()()
    }
    public ChangeShootMode():GameConst.FireModeEnum {
        if(this._isdraw && this._isAllowed){
            if(this._configData.shootMode.length > 0){
                //y有多种射击模式
                let nextIndex:number
                this._configData.shootMode.forEach((value, index) => {
                    if(value == this._curShootMode){
                        nextIndex ++
                        return
                    }
                })
                if(this._configData.shootMode[nextIndex] == null){
                    nextIndex = 1
                }
                this._curShootMode = this._configData.shootMode[nextIndex] 
            }
            return this._curShootMode
        }
    }
    public RayCastOrigin():Vector{
        return this.character.getWorldLocation().add(this.character.getForwardVector().multiply(0.5).add((Vector.up.multiply(this.character.capsuleHalfHeight * 2 - 0.1)))) 
    }
    public RayCastTarget():Vector{
        let [info, isTarget]:[Vector, boolean] = this._cameraControl.GetTarget()
        if(isTarget){
            return info
        }else{
            return info.multiply(this._configData.distance).add(this.muzzleObj.getWorldLocation())
        }
    }
    private OverloadRayCast(dir:Vector):GameConst.WeaponHitResult{
        let target = this.RayCastOrigin().add(dir.multiply(this._configData.distance))
        let info = Gameplay.lineTrace(this.RayCastOrigin(), target)
        let result:GameConst.WeaponHitResult
        if(info.length == 0){
            return result
        }
        //判定命中是靶子或者障碍物
        info.forEach(element => {
            if (false) {
                //当前命中的是角色
                break
            }
            if (element.gameObject) {
                
                return result
            }


        })
        //判定命中玩家的部位,判定成功后直接返回
        info.forEach(element => {
            
        })

        return result
    }
    private CalculateRayCastDirection():Vector{
        let dir = this.RayCastTarget().subtract(this.RayCastOrigin()).normalized
        if (this._animationController.noShootingState) {
            //当前为不可射击状态
            dir = this.muzzleObj.forwardVector
        }
        if (this._isZoomIn && this._configData.accurateAim) {
            return dir
        }
        return WeaponTool.RandomRotate(dir, this._recoil._currentError)     
    }
    protected Fire(delay:number, consume:boolean){
        let isFriend = false
        let direction = this.CalculateRayCastDirection()
        let hit = this.OverloadRayCast(direction)
        this._hasJustFired = true
        if(!isFriend && hit){
            let endPos = hit.HitPoint
            let endNorm = hit.HitNormal
            let endObj = hit.HitObject
            if(consume){
                this.Consume()
            }
            if(hit.HitObject == null){
                endPos = this.RayCastOrigin().add(direction.multiply(this._configData.distance * ))
            }
            this.MakeBullet(endObj, endPos, endNorm)
            if(hit.IsTarget){
                hit.Damage = this._configData.damage
                Events.dispatchLocal(GameConst.LocalWeaponEvent.SuccessfullyHitTarget, this, hit)
            }
            return true
        }else{
            return false
        }   
    }
    protected Damage(hit : GameConst.WeaponHitResult){
        let hitPos = hit.HitPoint
        let attenuation:number
        if(hitPos == null){
            attenuation = 0
        }else{
            let dis:number = hitPos.subtract(this.character.getWorldLocation()).magnitude
            attenuation = WeaponTool.GetAttenuationByGunId(1, this, dis)
        }
        let damage = this._configData.damage + attenuation
        damage = damage <= 0 ? 0 : damage
        switch (hit.HitPart) {
            case GameConst.HitPartEnum.Limb:
                damage = damage * this._configData.hitLimbDamageRate
                break;
            case GameConst.HitPartEnum.Body:
                damage = damage * this._configData.hitBodyDamageRate
                break;
            case GameConst.HitPartEnum.Head:
                damage = damage * this._configData.hitHeadDamageRate
                break;
            default:
                break;
        }
        if(damage > 0){
            let targetPlayer : Character 
            Events.dispatchLocal(GameConst.LocalWeaponEvent.SuccessfullyHit, hitPos, targetPlayer, damage, hit.HitPart)
            //伤害发起

        }
    }
    private RefreshScales() {
        let factor = 1
        
    }



}