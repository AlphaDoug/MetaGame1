import { WeaponAmmoBaseCls } from "./WeaponAmmoBaseCls";
import { WeaponBaseCls } from "./WeaponBaseCls";
import { WeaponTool } from "./WeaponTool";
/**枪械模块：弹夹基类 */
export class WeaponMagazineCls{
    private weapon : WeaponBaseCls
    private id : number
    private leftAmmo : number
    private ammoInventory : WeaponAmmoBaseCls
    private loadPercentage : number
    private isFullyLoaded : boolean
    private isEmptyLoaded : boolean
    private canLoaded : boolean
    private loadTimeRateTable: Record<string, number>;
    private loadTimeRateScale: number;
    private maxAmmoRateTable: Record<string, number>;
    private maxAmmoRateScale: number;
    private preMaxAmmo : number

    private _configData: GameConst.WeaponMagazineConfigData

    constructor(weapon : WeaponBaseCls){
        WeaponTool.InitWeaponMagazineConfig(this)
        
    }

    private UpdateFullyLoaded():void {
        this.isFullyLoaded = this.leftAmmo >= this.GetMaxAmmo()
    }
    private GetMaxAmmo():number {
        return this.maxAmmoRateScale + this._configData.maxNum > 0 && this.maxAmmoRateScale + this._configData.maxNum || 1
    }
}