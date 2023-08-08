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
    public isEmptyLoaded : boolean
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

    private UpdateFullyLoaded():boolean {
        this.isFullyLoaded = this.leftAmmo >= this.GetMaxAmmo()
        return this.isFullyLoaded
    }
    private UpdateEmptyLoaded():boolean{
        this.isEmptyLoaded = this.leftAmmo <= 0 
        return this.isEmptyLoaded
    }
    public UpdateCanLoad():boolean{
        this.canLoaded = !this.isFullyLoaded && this.ammoInventory && this.ammoInventory.count > 0
        return this.canLoaded
    }
    public UpdateLoadPercentage():number{
        this.loadPercentage = Math.floor(this.leftAmmo / this.GetMaxAmmo() * 100)
        return this.loadPercentage
    }
    private Consume():Function{
        return () => {
            if (this.leftAmmo > 0) {
                this.leftAmmo -= 1
                return true
            }
            return false
        }
    }
    public LoadOneBullet():void{
        if(this.canLoaded){
            this.leftAmmo += 1
            //self.m_ammoInventory:PlayerConsumeAmmo(1)
        }
    }
    public LoadMagazine():void{
        if (this.canLoaded) {
            let addition = this.GetMaxAmmo() - this.leftAmmo
            //addition = self.m_ammoInventory:PlayerConsumeAmmo(addition)
            this.leftAmmo += addition
            this.UpdateFullyLoaded()
        }
    }


    private Update():void{
        if(this.preMaxAmmo > this.GetMaxAmmo()){
            /**这一帧卸下了扩容弹夹,需要强行减少当前的子弹 */
            if(this.GetMaxAmmo() < this.leftAmmo){
                let deltaAmmo = this.leftAmmo - this.GetMaxAmmo()
                this.leftAmmo -= deltaAmmo
                this.ammoInventory.count += deltaAmmo
            }
        }
        this.preMaxAmmo = this.GetMaxAmmo()
        this.UpdateFullyLoaded()
        this.UpdateEmptyLoaded()
        this.UpdateCanLoad()
        this.UpdateLoadPercentage()
        /**将当前的剩余子弹更新到场景中的节点上 */


        this.RefreshScales()
    }
    private RefreshScales():void{

    }
    public GetLoadTime():number{
        return this._configData.loadTime + this.loadTimeRateScale
    }
    private GetMaxAmmo():number {
        return this.maxAmmoRateScale + this._configData.maxNum > 0 ? this.maxAmmoRateScale + this._configData.maxNum : 1
    }
}