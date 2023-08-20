import { WeaponBaseCls } from "./WeaponBaseCls";

export class WeaponAnimationCls{
    gun : WeaponBaseCls
    id : number
    player : Character
    rightArmPosition : Vector
    leftArmPosition : Vector
    config : GameConst.WeaponAnimationConfigData
    shoulderRayMinDistance : number
    noShootingState : boolean
    layer : number
    constructor(){

    }

    Update(dt:number){
        //加速跑状态下收枪,其他状态正常持枪
        
    }

    destructor(){
        
    }
}