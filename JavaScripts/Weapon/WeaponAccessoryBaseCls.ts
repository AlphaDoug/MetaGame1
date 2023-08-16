import { WeaponBaseCls } from "./WeaponBaseCls"
import { WeaponTool } from "./WeaponTool"

export abstract class WeaponAccessoryBaseCls{
    private weaponAccessory: GameObject
    public id:number
    private uuid: string
    private attachedWeapon : WeaponBaseCls
    public configData: GameConst.WeaponAccessoryConfigData
    constructor(_obj: GameObject){
        this.weaponAccessory = _obj
        this.attachedWeapon = null
        WeaponTool.InitWeaponAccessoryConfig(this)
        this.PickSound()
    }
    public Update(dt:number){

    }
    public EquipToWeapon(weapon: WeaponBaseCls){
        this.attachedWeapon = weapon
    }
    public UnEquipFromWeapon(){
        this.attachedWeapon = null
    }
    public destructor(){
        
    }
    private PickSound(){

    }
}