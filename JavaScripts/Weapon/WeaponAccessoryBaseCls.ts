import { WeaponBaseCls } from "./WeaponBaseCls"

export abstract class WeaponAccessoryBaseCls{
    private weaponAccessory: GameObject
    private id:number
    private uuid: string

    private attachedWeapon : WeaponBaseCls
    private HitPart: GameConst.HitPartEnum
    constructor(_obj: GameObject){
        this.weaponAccessory = _obj
        this.attachedWeapon = null
    }
}