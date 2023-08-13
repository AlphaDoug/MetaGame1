import { WeaponBaseCls } from "./WeaponBaseCls";
import { WeaponRecoilCls } from "./WeaponRecoilCls";
import { TweenUtil } from "../Tool/TweenUtil";
import { WeaponTool } from "./WeaponTool";

export class WeaponCameraCls{
    gunRecoil : WeaponRecoilCls
    gun : WeaponBaseCls
    m_camera : GameObject
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
                this.jumpController.customData.set("total" , this.jumpController.customData.get("total").divide(this.m_jumpTotal.multiply(power)))
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
                let dir = this.m_camera.forwardVector.normalized
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
                let relativePos = targetPos.divide(this.GetCameraPos())
                this.assistAimController.customData.set("isRight", this.IsRight(targetPos))
                this.assistAimController.customData.set("isChange", false)
                let thetaTotal = Math.atan(relativePos.y / new Vector2(relativePos.x, relativePos.z).magnitude)-
                (90 - Vector.angle(this.m_camera.forwardVector, Vector.up)) / 180 * Math.PI
                let phyTotal = Vector2.angle(
                    new Vector2(relativePos.x, relativePos.z),
                    new Vector2(this.m_camera.forwardVector.x, this.m_camera.forwardVector.z)
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
    RefreshSettings() {
        throw new Error("Method not implemented.");
    }
    RefreshScales() {
        throw new Error("Method not implemented.");
    }
    SetProperties() {
        throw new Error("Method not implemented.");
    }
    GetSightFOV(): any {
        throw new Error("Method not implemented.");
    }
    GetAimTime(): number {
        throw new Error("Method not implemented.");
    }
    IsRight(targetPos: Vector):boolean {
        throw new Error("Method not implemented.");
    }
    GetCameraPos():Vector {
        throw new Error("Method not implemented.");
    }
    GetJumpFOV(): number {
        throw new Error("Method not implemented.");
    }
    GetAimPos(enemy:Character): Vector {
        throw new Error("Method not implemented.");
    }
}