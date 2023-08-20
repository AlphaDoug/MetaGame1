import { WeaponBaseCls } from "./WeaponBaseCls"
import { WeaponTool } from "./WeaponTool";
import { TweenUtil } from "../Tool/TweenUtil";

export class CameraController{
    m_camera: CameraSystem
    gun : WeaponBaseCls
    offset : Vector
    m_currentHeight : number
    m_supposedHeight : number
    deltaOffset : Vector
    fieldOfView : number
    deltaTheta : number
    gamma : number
    distance : number
    deltaPhy : number
    shakeTime : number
    shakeStrenth : number

    crouchController : TweenUtil
    ShakeController : TweenUtil
    // 单例模式
    private static _instance: CameraController;
    public static get Instance() {
        if (CameraController._instance == null) {
            CameraController._instance = new CameraController()
        }
        return CameraController._instance
    }
    constructor() {
        this.crouchController = new TweenUtil(
            () => {
                return 0.4
            },
            (t1 : number, t2 : number, t3 : number) => {
                this.m_supposedHeight = Gameplay.getCurrentPlayer().character.capsuleHalfHeight * 2
                let fin = this.m_currentHeight + 10 * t3 * (this.m_supposedHeight - this.m_currentHeight)
                this.m_currentHeight = fin
            },
            () => {
                this.m_currentHeight = this.m_supposedHeight
            }
        )
        this.ShakeController = new TweenUtil(
            () => {
                return this.shakeTime
            },
            (t1 : number, t2 : number, t3 : number) => {
                this.deltaOffset = new Vector(
                    WeaponTool.Shake(this.shakeStrenth),
                    WeaponTool.Shake(this.shakeStrenth),
                    WeaponTool.Shake(this.shakeStrenth)
                ).multiply(t1 / t2)
            },
            () => {
                this.deltaOffset = new Vector(0, 0, 0)
            }
        )
    }
    Update(dt:number):void{
        this.crouchController.UpdateFunction(this.crouchController, dt)
        this.ShakeController.UpdateFunction(this.crouchController, dt)
        if(this.deltaPhy != 0){
            //Gameplay.getCurrentPlayer().character.lookAt
        }
        
    }
    Crouch(){
        this.crouchController.StartFunction(this.crouchController)
        if(this.gun && this.gun._isdraw){
            this.gun._cameraControl.Crouch()
        }
    }
    SetOffset(){
        this.m_camera.cameraSystemRelativeTransform.location = this.offset.add(Vector.up.multiply(this.m_currentHeight)).add(this.deltaOffset)
    }
    CameraShake(strength:number, time:number){
        this.shakeStrenth = strength
        this.shakeTime = time
        this.ShakeController.StartFunction(this.ShakeController)
    }
}