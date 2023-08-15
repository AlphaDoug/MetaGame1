import { WeaponBaseCls } from "./WeaponBaseCls"

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
    // 单例模式
    private static _instance: CameraController;
    public static get Instance() {
        if (CameraController._instance == null) {
            CameraController._instance = new CameraController()
        }
        return CameraController._instance
    }
}