import { WeaponBaseCls } from "./WeaponBaseCls"

export abstract class WeaponAccessoryBaseCls{
    private weaponAccessory: GameObject
    public id:number
    private uuid: string

    private attachedWeapon : WeaponBaseCls
    private HitPart: GameConst.HitPartEnum


    public configData: GameConst.WeaponAccessoryConfigData
    constructor(_obj: GameObject){
        this.weaponAccessory = _obj
        this.attachedWeapon = null
    }

    public EquipToWeapon(weapon: WeaponBaseCls){
        this.attachedWeapon = weapon
    }
}