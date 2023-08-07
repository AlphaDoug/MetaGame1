import { WeaponAccessoryBaseCls } from "./WeaponAccessoryBaseCls";
import { WeaponBaseCls } from "./WeaponBaseCls";
import { WeaponCameraCls } from "./WeaponCameraCls";
import { WeaponMagazineCls } from "./WeaponMagazineCls";
import { WeaponRecoilCls } from "./WeaponRecoilCls";

declare namespace WeaponTool{
    export function InitWeaponConfig(_weapon:WeaponBaseCls):void
    export function InitWeaponMagazineConfig(_magazine:WeaponMagazineCls):void
    export function InitWeaponRecoilConfig(_recoil:WeaponRecoilCls):void
    export function InitWeaponCameraConfig(_camera:WeaponCameraCls):void
    export function InitWeaponAccessoryConfig(_accessory:WeaponAccessoryBaseCls):void
    
}

namespace WeaponTool{
    function InitWeaponConfig(_weapon:WeaponBaseCls){
        
    }
}