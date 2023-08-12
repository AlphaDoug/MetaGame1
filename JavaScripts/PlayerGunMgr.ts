import { WeaponAccessoryBaseCls } from "./Weapon/WeaponAccessoryBaseCls"
import { WeaponAmmoBaseCls } from "./Weapon/WeaponAmmoBaseCls"
import { WeaponBaseCls } from "./Weapon/WeaponBaseCls"

export class PlayerGunMgr {
    player:Character

    curGun:WeaponBaseCls
    mainGun:WeaponBaseCls
    deputyGun:WeaponBaseCls
    miniGun:WeaponBaseCls
    prop1:WeaponBaseCls
    prop2:WeaponBaseCls

    public hadAccessoryList:Record<string, WeaponAccessoryBaseCls>
    public hadAmmoList:Record<string, WeaponAmmoBaseCls>

    canUpdateGun = true
    constructor(player:Character){
        //事件绑定
        InputUtil.onKeyDown(Keys.One, () => {
            this.SwitchWeapon(1)
        })
        InputUtil.onKeyDown(Keys.Two, () => {
            this.SwitchWeapon(2)
        })
        InputUtil.onKeyDown(Keys.Three, () => {
            this.SwitchWeapon(3)
        })
        InputUtil.onKeyDown(Keys.Four, () => {
            this.SwitchWeapon(4)
        })
        InputUtil.onKeyDown(Keys.Five, () => {
            this.SwitchWeapon(5)
        })
        InputUtil.onKeyDown(Keys.X, () => {
            this.SwitchWeapon(0)
        })
        InputUtil.onKeyDown(Keys.G, () => {
            this.DropWeapon()
        })
        InputUtil.onKeyDown(Keys.B, () => {
            this.ChangeShootMode()
        })
        InputUtil.onKeyDown(Keys.LeftAlt, () => {
            //显示鼠标

        })
        InputUtil.onKeyDown(Keys.RightMouseButton, () => {
            //判断血量


            if(this.curGun){
                this.curGun.MechanicalAimStart()
            }
        })
        
        InputUtil.onKeyDown(Keys.R, () => {
            //判断血量
            

            if(this.curGun){
                this.curGun.LoadMagazine()
            }
        })

        InputUtil.onKeyPress(Keys.R, () => {
            
        })

        InputUtil.onKeyUp(Keys.LeftAlt, () => {
            //不显示鼠标

        })
        InputUtil.onKeyUp(Keys.LeftAlt, () => {
            //尝试离开瞄准
            if (this.curGun) {
                this.curGun.MechanicalAimStop()
            }
        })
    }

    SwitchWeapon(index:number){

    }
    ChangeShootMode(){
        
    }
    DropWeapon(){

    }
}
