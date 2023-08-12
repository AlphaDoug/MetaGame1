import { WeaponBaseCls } from "./WeaponBaseCls";
import { WeaponRecoilCls } from "./WeaponRecoilCls";

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
    m_jumpTotal : number
    m_backTotal : number
    enableAssistAim : boolean
    aimEnemy : Character
    AimingIsOver : boolean
    m_jumpFovRateScale : number
    m_aimTimeRateScale : number
    m_jumpFovRateTable : Record<GameConst.WeaponAccessoryTypeEnum, number>
    m_aimTimeRateTable : Record<GameConst.WeaponAccessoryTypeEnum, number>
    UpdateTable : number[]
    FixUpdateTable : number[]
}