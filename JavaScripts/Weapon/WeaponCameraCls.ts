import { WeaponBaseCls } from "./WeaponBaseCls";
import { WeaponRecoilCls } from "./WeaponRecoilCls";
import { TweenUtil } from "../Tool/TweenUtil";
import { WeaponTool } from "./WeaponTool";
import { CameraController } from "./CameraController";

export class WeaponCameraCls{
    gunRecoil : WeaponRecoilCls
    gun : WeaponBaseCls
    m_camera : CameraSystem
    m_originZoom : number
    m_supposedZoom : number
    m_sightZoom : number
    aimTime : number
    m_isZoomIn : boolean
    m_originOffset : Vector
    m_aimOffset : Vector
    m_currentOffset : Vector
    isUpdating : boolean
    screenSize : Vector2
    m_sensitivity : number
    m_originDistance : number
    distance : number
    m_aimDistance : number
    m_gamma : number
    deltaPhy : number
    deltaTheta : number
    m_deltaFOV : number
    m_lastMousePos : Vector2
    vibrationAmpl : number
    m_backTime : number
    m_jumpTotal : Vector2
    m_backTotal : number
    enableAssistAim : boolean
    aimEnemy : Character
    AimingIsOver : boolean
    m_jumpFovRateScale : number
    m_aimTimeRateScale : number
    lastZoom : number
    targetCallTime : number
    targetReturn : [Vector, boolean]
    m_jumpFovRateTable : Map<GameConst.WeaponAccessoryTypeEnum, number>
    m_aimTimeRateTable : Map<GameConst.WeaponAccessoryTypeEnum, number>
    
    selfSpinController:TweenUtil
    jumpFOVController:TweenUtil
    jumpController:TweenUtil
    recoverController:TweenUtil
    assistAimController:TweenUtil
    aimController:TweenUtil
    deaimController:TweenUtil

    configData : GameConst.WeaponCameraConfigData

    constructor(_gunRecoil:WeaponRecoilCls){
        WeaponTool.InitWeaponCameraConfig(this)
        this.gunRecoil = _gunRecoil
        this.gun = _gunRecoil.gun
        this.m_originZoom = this.gun._configData.waistAimFOV
        this.m_supposedZoom = this.m_originZoom
        this.m_sightZoom = this.gun._configData.mechinicalAimFOV
        this.aimTime = this.gun._configData.aimTime
        //this.m_originOffset = 全局配置
        //this.m_aimOffset = 全局配置
        this.m_currentOffset = this.m_originOffset
        this.isUpdating = false
        this.screenSize = WindowUtil.getViewportSize()
        //this.m_sensitivity = 
        //this.m_originDistance = 
        this.distance = this.m_originDistance
        //this.m_aimDistance = 
        this.m_gamma = 0
        this.deltaPhy = 0
        this.deltaTheta = 0
        this.m_deltaFOV = 0
        this.m_lastMousePos = new Vector2()
        this.vibrationAmpl = 0
        this.m_backTime = 0
        this.m_jumpTotal = Vector2.zero
        this.m_backTotal = 0
        //this.enableAssistAim = false
        this.aimEnemy = null
        this.AimingIsOver = false
        this.m_jumpFovRateScale = 1
        this.m_aimTimeRateScale = 1
        /**z轴旋转动画 */
        this.selfSpinController = new TweenUtil(
            ()=>{
            let remnPhase = 2 * Math.PI - this.selfSpinController.customData.get("phase")
            return Math.min(this.m_backTime, remnPhase / this.configData.vibrationOmega)
            },
            (t1:number,t2:number,t3:number)=>{
                this.m_gamma = this.selfSpinController.customData.get("Ampl") * Math.exp(-this.configData.vibrationDump * t1) * 
                Math.sin(this.configData.vibrationOmega * t1) + this.selfSpinController.customData.get("phase")
            },
            () => {
                this.m_gamma = 0
            },
            ()=>{
                if (!this.selfSpinController.customData.has("phase")||!this.selfSpinController.customData.has("Ampl")) {
                    this.selfSpinController.customData.set("phase", 0)
                    this.selfSpinController.customData.set("Ampl", this.vibrationAmpl * WeaponTool.GaussRandom())
                    return
                }
                let tempA = this.selfSpinController.customData.get("Ampl") * Math.exp(-this.configData.vibrationDump * this.selfSpinController.time)
                let temp0 = tempA * this.configData.vibrationOmega * 
                Math.cos(this.configData.vibrationOmega * this.selfSpinController.time + this.selfSpinController.customData.get("phase"))
                let delta = this.configData.vibrationOmega * this.vibrationAmpl * WeaponTool.GaussRandom()
                let newPhase = Math.atan(this.m_gamma * this.configData.vibrationOmega / (delta +temp0))
                let newAmpl = (delta + temp0) / this.configData.vibrationOmega / Math.cos(newPhase)
                this.selfSpinController.customData.set("phase", newPhase)
                this.selfSpinController.customData.set("Ampl", newAmpl)
            })
        /**跳动FOV动画 */
        this.jumpFOVController = new TweenUtil(
            ()=>{
                let stdSpeed = this.jumpFOVController.customData.get("jumpFOV") / this.configData.jumpTime
                if (stdSpeed == 0) {
                    return 0
                }else{
                    return 2 * this.configData.jumpTime +
                    (this.jumpFOVController.customData.get("jumpFOV") - this.m_deltaFOV) / stdSpeed
                }
            },
            (t1:number,t2:number,dt:number)=>{
                if (t2 -t1 > 2 * this.configData.jumpTime) {
                    this.m_deltaFOV += dt * this.jumpFOVController.customData.get("jumpFOV") / this.configData.jumpTime
                } else {
                    this.m_deltaFOV = (t2 -t1)/(2 * this.configData.jumpTime) * this.jumpFOVController.customData.get("jumpFOV")
                }
            },
            () => {
                this.m_deltaFOV = 0
            },
            ()=>{
                this.jumpFOVController.customData.set("jumpFOV", this.GetJumpFOV())
            }
        )
        /**枪口跳动总动画 */
        this.jumpController = new TweenUtil(
            ()=>{
                return this.configData.jumpTime
            },
            (t1:number,t2:number,dt:number)=>{
                let omega = 0.5 * Math.PI / t2
                let power = omega * Math.cos(omega * (t1 - 0.5 * dt)) * dt
                this.deltaTheta = this.deltaTheta + power * this.m_jumpTotal.y
                this.deltaPhy = this.deltaPhy + power * this.m_jumpTotal.x
                this.jumpController.customData.set("total" , this.jumpController.customData.get("total").subtract(this.m_jumpTotal.multiply(power)))
            },
            () => {
                this.deltaTheta += this.jumpController.customData.get("total").y
                this.deltaPhy += this.jumpController.customData.get("total").x
                this.jumpController.customData.set("total", new Vector2())
                if (this.aimEnemy) {
                    this.assistAimController.StartFunction(this.assistAimController)
                }
                this.gun._weaponGUI.Fire()
            },
            () => {
                if(this.recoverController.isPlaying){
                    this.recoverController.StopFunction(this.recoverController)
                }
                if (this.jumpController.isPlaying) {
                    this.jumpController.StopFunction(this.jumpController)                   
                }
                this.jumpController.customData.set("total", this.m_jumpTotal)
            }
        )
        /**枪口回复总动画 */
        this.recoverController = new TweenUtil(
            ()=>{
                return this.m_backTime
            },
            (t1:number,t2:number,dt:number)=>{
                let Ampl = this.m_backTotal * this.configData.vibrationDump / (1 - Math.exp(-this.configData.vibrationDump * t2))
                let delta = Ampl * Math.exp(-this.configData.vibrationDump * (t1 - 0.5 * dt)) * dt
                this.deltaTheta = this.deltaTheta - delta
                this.recoverController.customData.set("total", this.recoverController.customData.get("total") + delta)
            },
            () => {},
            () => {
                this.recoverController.customData.set("total", 0)
            }
        )
        /**辅瞄动画 */
        this.assistAimController = new TweenUtil(
            ()=>{
                return this.gun._configData.assistAimTime
            },
            (_t1:number,_t2:number,_dt:number)=>{
                if (!this.aimEnemy){
                    return
                }
                let targetPos = this.GetAimPos(this.aimEnemy)
                //如果已经在瞄着人了则停止
                let dir = this.m_camera.transform.getForwardVector().normalized
                let pos = this.GetCameraPos()
                let res = Gameplay.lineTrace(pos.add(dir.multiply(0.5)), pos.add(dir.multiply(this.gun._configData.distance)))
                res.forEach((v ,k) => {
                    if (v.gameObject == this.aimEnemy) {
                        this.assistAimController.customData.set("isChange", true)
                        return
                    }
                })
                //如果拉过头了则停止
                if(this.IsRight(targetPos)!= this.assistAimController.customData.get("isChange")){
                    this.assistAimController.customData.set("isChange", true)
                } 
                if(this.assistAimController.customData.get("isChange")){
                    return
                }
                this.deltaTheta += _dt * this.assistAimController.customData.get("omegaTheta")
                this.deltaPhy += _dt * this.assistAimController.customData.get("omegaPhy")
            },
            () => {},
            () => {
                let targetPos = this.GetAimPos(this.aimEnemy)
                let relativePos = targetPos.subtract(this.GetCameraPos())
                this.assistAimController.customData.set("isRight", this.IsRight(targetPos))
                this.assistAimController.customData.set("isChange", false)
                let thetaTotal = Math.atan(relativePos.y / new Vector2(relativePos.x, relativePos.z).magnitude)-
                (90 - Vector.angle(this.m_camera.transform.getForwardVector(), Vector.up)) / 180 * Math.PI
                let phyTotal = Vector2.angle(
                    new Vector2(relativePos.x, relativePos.z),
                    new Vector2(this.m_camera.transform.getForwardVector().x, this.m_camera.transform.getForwardVector().z)
                ) *
                Math.PI / 180 *
                (this.assistAimController.customData.get("isRight") ? -1 : 1)
                let ratio = this.gun._configData.assistAimRatio / this.gun._configData.assistAimTime
                this.assistAimController.customData.set("omegaTheta", thetaTotal * ratio)
                this.assistAimController.customData.set("omegaPhy", phyTotal * ratio)
            }
        )
        //开镜总动画
        this.aimController = new TweenUtil(
            ()=>{
                return this.GetAimTime()
            },
            (t1:number,t2:number,dt:number)=>{
                let por = t1 / t2
                this.m_supposedZoom = (1 - por) * this.m_originZoom + por * this.aimController.customData.get("sightZoom")
                por = Math.sqrt(1 - ( 1 - por) * ( 1 - por))
                this.m_currentOffset = this.m_originOffset.multiply(1 - por).add(this.m_aimOffset.multiply(por))
                this.distance = (1-por) * this.m_originDistance + por * this.m_aimDistance
            },
            () => {
                this.m_supposedZoom = this.aimController.customData.get("sightZoom")
                this.m_currentOffset = this.m_aimOffset
                this.distance = this.m_aimDistance
                this.AimingIsOver = true
            },
            () => {
                if(this.deaimController.isPlaying){
                    this.deaimController.StopFunction(this.deaimController)
                }
                this.m_isZoomIn = true
                //本地设置角色不可见

                this.aimController.customData.set("sightZoom", this.GetSightFOV())
            }
        )       
        //关镜总方法
        this.deaimController = new TweenUtil(
            ()=>{
                return this.gun._configData.stopAimTime
            },
            (t1:number,t2:number,dt:number)=>{
                let por = t1 / t2
                this.m_supposedZoom = (1-por)*this.deaimController.customData.get("preZoom")+por*this.m_originZoom
                this.m_currentOffset = this.m_aimOffset.multiply(1 - por).add(this.m_originOffset.multiply(por))
                this.distance = (1-por)*this.m_aimDistance+por*this.m_originDistance
            },
            () => {
                this.m_supposedZoom = this.m_originZoom
                this.m_currentOffset = this.m_originOffset
                this.distance = this.m_originDistance
                //todo 本地设置角色可见

                this.SetProperties()
            },
            () => {
                if(this.aimController.isPlaying){
                    this.aimController.StopFunction(this.aimController)
                }
                this.m_isZoomIn = false
                this.deaimController.customData.set("preZoom", this.m_supposedZoom)
            }
        )
    }

    destructor(){
        this.EndAll()
    }
    Update(dt:number) {
        if(!this.isUpdating){
            return
        }
        this.SetProperties()
        this.m_aimTimeRateTable.clear()
        this.gun._weaponAccessoryList.forEach((v, k)=>{
            this.m_aimTimeRateTable.set(k, v.configData.aimTimeRate)
        })
        this.m_jumpFovRateTable.clear()
        this.gun._weaponAccessoryList.forEach((v, k)=>{
            this.m_jumpFovRateTable.set(k, v.configData.jumpFovRate)
        })
        this.selfSpinController.UpdateFunction(this.selfSpinController, dt)
        this.jumpFOVController.UpdateFunction(this.jumpFOVController, dt)
        this.jumpController.UpdateFunction(this.jumpController, dt)
        this.recoverController.UpdateFunction(this.recoverController, dt)
        this.assistAimController.UpdateFunction(this.assistAimController, dt)
        this.deaimController.UpdateFunction(this.deaimController, dt)
        this.aimController.UpdateFunction(this.aimController, dt)

        this.RefreshScales()
        this.RefreshSettings()
        this.deltaPhy = 0
        this.deltaTheta = 0
    }
    OnEquipWeapon(_gunController : WeaponBaseCls, info) {
        this.gun = _gunController
        this.m_camera = Gameplay.getCurrentPlayer().character.cameraSystem
        this.lastZoom = this.m_camera.cameraFOV
        let t = new Transform()
        t.rotation = this.m_camera.cameraSystemRelativeTransform.rotation
        t.scale = this.m_camera.cameraSystemRelativeTransform.scale
        t.location = new Vector(0, 0, Gameplay.getCurrentPlayer().character.capsuleHalfHeight * 2).add(this.m_currentOffset)
        this.m_camera.cameraSystemRelativeTransform = t
        this.m_sightZoom = this.gun._configData.mechinicalAimFOV
        this.m_originZoom = this.gun._configData.waistAimFOV
        this.m_supposedZoom = this.m_originZoom
        CameraController.Instance.fieldOfView = this.m_sightZoom
        this.isUpdating = true
        CameraController.Instance.gun = this.gun
    }
    InputRecoil(_recoil : WeaponRecoilCls){
        this.m_backTime = this.GetBackTime()
        let vert = _recoil.GetVertical() * Math.PI / 180
        this.m_backTotal = _recoil._configData.backTotal * vert
        this.vibrationAmpl = _recoil.GetSelfSpinRange() * Math.PI / 180
        this.m_jumpTotal = new Vector2(_recoil.GetHorizontal() * Math.PI / 180, vert)
        this.selfSpinController.StartFunction(this.selfSpinController)
        this.jumpController.StartFunction(this.jumpController)
        this.recoverController.StartFunction(this.recoverController)
        this.jumpFOVController.StartFunction(this.jumpFOVController)
    }
    Crouch(){
        this.assistAimController.StopFunction(this.assistAimController)
    }
    MechanicalAimStart(){
        this.AimingIsOver = false
        this.aimController.StartFunction(this.aimController)
    }
    GetAssistAimDis():number{
        return this.m_isZoomIn ? this.gun._configData.assistAimDis1 : this.gun._configData.assistAimDis0
    }
    MechanicalAimStop(){
        this.deaimController.StartFunction(this.deaimController)
    }
    GetAimTime():number{
        return this.aimTime + this.m_aimTimeRateScale
    }
    GetBackTime():number{
        return this.gun._recoil.GetShakeTime()
    }
    OnUnEquipWeapon(_useStateBefore : boolean){
        CameraController.Instance.fieldOfView = this.lastZoom
        CameraController.Instance.gun = null
        this.EndAll()
        this.isUpdating = false
    }
    GetEnemies():Array<Character>{
        let res = new Array<Character>()
        Gameplay.getAllPlayers().forEach((v)=>{
            
        })
        return res
    }
    IsVisible(_enemy:Character):boolean{
        let pos = this.GetCameraPos()
        let res = true
        let rayCastHead = Gameplay.lineTrace(pos, _enemy.getWorldLocation().add(Vector.up.multiply(_enemy.capsuleHalfHeight)))
        rayCastHead.forEach((v)=>{
            if(!(v.gameObject instanceof Character) || (v.gameObject != _enemy && (v.gameObject) != Gameplay.getCurrentPlayer().character)){
                res = false
                return
            }
        })
        return res
    }
    EndAll() {
        if(this.m_isZoomIn){
            this.MechanicalAimStop()
        }
        this.selfSpinController?.StopFunction(this.selfSpinController)
        this.jumpFOVController?.StopFunction(this.jumpFOVController)
        this.jumpController?.StopFunction(this.jumpController)
        this.recoverController?.StopFunction(this.recoverController)
        this.assistAimController?.StopFunction(this.assistAimController)
        this.deaimController?.StopFunction(this.deaimController)
        this.aimController?.StopFunction(this.aimController)

    }
    RefreshSettings() {
        
    }
    RefreshScales() {
        let factor = 1
        this.m_jumpFovRateTable.forEach((v, k)=>{
            factor *= v
        })
        this.m_jumpFovRateScale = factor
        factor = 1
        this.m_aimTimeRateTable.forEach((v, k)=>{
            factor *= v
        })
        this.m_aimTimeRateScale = factor
    }
    SetProperties() {
        CameraController.Instance.deltaTheta += this.deltaTheta
        CameraController.Instance.deltaPhy += this.deltaPhy
        CameraController.Instance.gamma = this.m_gamma
        CameraController.Instance.fieldOfView = this.m_supposedZoom + this.m_deltaFOV
        CameraController.Instance.distance = this.distance
        CameraController.Instance.offset = this.m_currentOffset
    }
    GetSightFOV(): number {
        //若配件中有一个配件设置了大于零的开镜FOV则直接返回此数值,否则返回枪械自身的FOV
        let fov = 0
        this.gun._weaponAccessoryList.forEach((v, k)=>{
            if (v.configData.aimFovRate > 0) {
                fov = v.configData.aimFovRate
                return
            }
        })
        if (fov != 0) {
            return fov
        }else{
            return this.gun._configData.mechinicalAimFOV
        }
    }
    IsRight(targetPos: Vector):boolean {
        return Vector.dot(Vector.cross(this.m_camera.transform.getForwardVector(), Vector.up), targetPos.subtract(this.GetCameraPos())) > 0
    }
    IsUp(targetPos: Vector):boolean {
        let relativePos = targetPos.subtract(this.GetCameraPos())
        return Math.atan(relativePos.y / new Vector2(relativePos.x, relativePos.z).magnitude) > (90 - Vector.angle(this.m_camera.transform.getForwardVector(), Vector.up) * Math.PI / 180)
    }
    DragStart(){
        this.m_lastMousePos = UI.getMousePositionOnViewport()
    }
    GetCameraPos():Vector {
        let offset = this.m_camera.cameraSystemRelativeTransform.location
        return Gameplay.getCurrentPlayer().character.getWorldLocation().add(WeaponTool.RotateVector(offset, Vector.up, Gameplay.getCurrentPlayer().character.getWorldRotation().z))
    }
    GetJumpFOV(): number {
        return this.configData.jumpFOV * this.m_jumpFovRateScale * 
        Gameplay.getCurrentPlayer().character.cameraSystem.cameraFOV / this.m_originZoom
    }
    GetAimPos(enemy:Character): Vector {
        let pos1:Vector
        let pos2 :Vector
        pos1 = enemy.getAppearance<HumanoidV2>().getSlotWorldPosition(SlotType.Head)
        pos2 = enemy.getAppearance<HumanoidV2>().getSlotWorldPosition(SlotType.Buttocks)
        return pos1.multiply(2).add(pos2).divide(3)
    }
    GetTarget():[Vector, boolean]{
        if(this.targetCallTime && TimeUtil.elapsedTime() - this.targetCallTime < 0.01){
            return this.targetReturn
        }
        let dir = this.m_camera.transform.getForwardVector().normalized
        let pos = this.GetCameraPos()
        let raycastAll = Gameplay.lineTrace(pos.add(dir.multiply(0.5)), pos.add(dir.multiply(this.gun._configData.distance)))
        this.aimEnemy = null
        if(this.enableAssistAim){
            let minDis = this.GetAssistAimDis()
            let candidate:Character
            this.GetEnemies().forEach((v)=>{
                //找到最近的人
                let targetPos = this.GetAimPos(v)
                let targetDis = targetPos.subtract(pos).magnitude
                let angle = Vector.angle(dir, targetPos.subtract(pos))
                let aimDis = targetDis * Math.sin(angle * Math.PI / 180)
                if(angle < 30 && aimDis <= minDis && this.IsVisible(v)){
                    candidate = v
                    minDis = aimDis
                }
            })
            this.aimEnemy = candidate
        }
        let finalPoint
        let i
        raycastAll.forEach((v)=>{
            if(!(v instanceof Character)){
                finalPoint = v.impactPoint
                return
            }
        })
        if(finalPoint){
            this.targetReturn = [finalPoint, true]
        }else{
            this.targetReturn = [dir, false]
        }
        this.targetCallTime = TimeUtil.elapsedTime()
        return this.targetReturn
    }
    GetSensitivity():number{
        return this.m_camera.cameraFOV / 60 * this.m_sensitivity
    }
    DragHold(){
        let temp = UI.getMousePositionOnViewport()
        if(!this.m_lastMousePos){
            return
        }
        this.deltaPhy += (temp.x - this.m_lastMousePos.x) * this.screenSize.x * this.GetSensitivity()
        this.deltaTheta += (temp.y - this.m_lastMousePos.y) * this.screenSize.y * this.GetSensitivity()
        this.m_lastMousePos = temp
    }
    DragEnd():void{
        this.m_lastMousePos = null
    }

}