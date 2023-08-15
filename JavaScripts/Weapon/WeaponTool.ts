import { WeaponAccessoryBaseCls } from "./WeaponAccessoryBaseCls";
import { WeaponBaseCls } from "./WeaponBaseCls";
import { WeaponCameraCls } from "./WeaponCameraCls";
import { WeaponMagazineCls } from "./WeaponMagazineCls";
import { WeaponRecoilCls } from "./WeaponRecoilCls";

export namespace WeaponTool{
    export function InitWeaponConfig(_weapon:WeaponBaseCls){
        
    }
    export function InitWeaponMagazineConfig(_magazine:WeaponMagazineCls){
        
    }
    export function InitWeaponRecoilConfig(_recoil:WeaponRecoilCls){
        
    }
    export function InitWeaponCameraConfig(_camera:WeaponCameraCls){
        
    }
    export function InitWeaponAccessoryConfig(_accessory:WeaponAccessoryBaseCls){
        
    }
    export function Shake(_strength:number){
        return _strength * (Math.random() - 0.5)
    }
    /**
     * 将一个向量，按照给定的旋转轴，旋转指定弧度之后得到一个新的向量
     * @param source 源向量
     * @param axis 旋转轴
     * @param angle 旋转角度值
     * @returns 结果向量
     */
    export function RotateVector(source:Vector, axis : Vector, angle : number):Vector{
        let ro = source.toRotation()
        let qu = ro.toQuaternion()
        let outer : Quaternion
        angle = angle 
        Quaternion.fromAxisAngle(axis, angle, outer)
        let res : Vector
        Quaternion.multiplyVector(source, outer, res)
        return res
    }
    /**
     * 输出三倍标准差为1 的分布在（-1， 1）之间的正态分布
     */
    export function GaussRandom() : number{
        let u = Math.random()
        let v = Math.random()
        let z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
        z = ( z + 3) / 6
        z = z * 2 - 1
        if (Math.abs(z) > 1) {
            return GaussRandom()
        }
        return z
    }
    /**
     * 窗函数，在小于A时保持原值，在大于A时逐渐趋近于1
     */
    export function Asymptote(x : number, A : number) : number{
        A = A || 0.4
        if(A <= 0 || A >= 1){
            console.error('A must be between 0 and 1');
        }
        if(x < 0){
            console.error('x should be positive')
        }
        if(x <= A){
            return x
        }
        return 1 + (3 * A * A - 2 * A) / x + (A * A - 2 * A * A * A) / x / x
    }
    /**双边可用的窗函数(普通窗函数的奇延拓) */
    export function AsymtoteBi(x : number, A : number) : number{
        A = A || 0.4
        if(A <= 0 || A >= 1){
            console.error('A must be between 0 and 1');
        }
        if(x >= 0){
            return Asymptote(x, A)
        }
        return -Asymptote(x, A)
    }
    export function RandomRotate(direction: Vector, maxSpreadAngle: number):Vector {
        // 生成随机扩散角
        const spreadAngle = GaussRandom() * maxSpreadAngle;

        // 生成随机旋转角度
        const randomRotation = Math.random() * 2 * Math.PI;

        // 计算随机点的坐标
        const x = Math.sin(spreadAngle) * Math.cos(randomRotation);
        const y = Math.cos(spreadAngle);
        const z = Math.sin(spreadAngle) * Math.sin(randomRotation);

        // 将随机点旋转到指定方向
        const dirZ = direction.z;
        const rotateMatrix = [
            [Math.cos(dirZ), -Math.sin(dirZ), 0],
            [Math.sin(dirZ), Math.cos(dirZ), 0],
            [0, 0, 1]
        ];

        const rotatedX = rotateMatrix[0][0] * x + rotateMatrix[0][1] * y + rotateMatrix[0][2] * z;
        const rotatedY = rotateMatrix[1][0] * x + rotateMatrix[1][1] * y + rotateMatrix[1][2] * z;
        const rotatedZ = rotateMatrix[2][0] * x + rotateMatrix[2][1] * y + rotateMatrix[2][2] * z;

        return new Vector(rotatedX, rotatedY, rotatedZ);
    }
    export function AccelerateScalar(x : number, _linearRange : number, _maxScale : number) : number{
        if (_maxScale <= 1 || _linearRange <= 0) {
            console.error('最大比例必须大于1, 线性范围必须大于0');
            return
        }
        if (x < 0) {
            console.error('使用双边的函数以支持负值')
        }
        if (x <= _linearRange) {
            return 1
        }else if(x>=_maxScale * _linearRange){
            return _maxScale
        }else{
            return 1 / _linearRange * x
        }
    }
    export function BiAccelerateScalar(x : number, _linearRange : number, _maxScale : number){
        let sign = x >= 0 ? 1 : -1
        return AccelerateScalar(sign * x, _linearRange, _maxScale)
    }
    export function GenerateCurve(_startPoint : Vector, _startVec : Vector, _length : number, _dt : number, _gravity : number){
        _gravity = _gravity ? _gravity : 1
        let curve: Vector[]
        for (let index = 1; index <= _length; index++) {
            let posX = new Vector2(_startPoint.x, _startPoint.z).add(new Vector2(_startVec.x, _startVec.z)).multiply(_dt * index)
            let PosY = _startVec.y * _dt * index - 0.5 * 9.8 * _gravity * (_dt * index) * (_dt * index) + _startPoint.y
            curve.push(new Vector(posX.x, PosY, posX.y))
        }
        return curve
    }
    export function GetAttenuationByGunId(_type:number, _gun:WeaponBaseCls, _dis:number):number{
        if (_type == 1) {
            //获取子弹飞行距离伤害衰减
            let disAttenuation = _gun._configData.damageAttenuation
            let len = disAttenuation.length
            if(len == 0){
                return 0
            }
            for (let i = len; i >= 1; i--) {
                if(disAttenuation[i].Distance <= _dis){
                    return disAttenuation[i].Attenuation
                }
            }
            return 0
        } else if(_type == 2) {
            //获取爆炸范围伤害衰减
            let explosionAttenuation = _gun._configData.explosionDamageAttenuation
            let len = explosionAttenuation.length
            if(len == 0){
                return 0
            }
            for (let i = len; i >= 1; i--) {
                if(explosionAttenuation[i].Distance <= _dis){
                    return explosionAttenuation[i].Attenuation
                }
            }
            return 0
        }
    }
    /**
     * 
     * @param _self 自己的角色  
     * @param _isHitSelf 是否可以命中自己
     * @param _isHitFriend 是否可以命中队友
     * @param _dis 半径
     * @param _angle 角度
     * @param _pos 检测的原点
     * @returns 
     */
    export function GetEnemyByRange(_self:Character, 
        _isHitSelf:boolean, 
        _isHitFriend:boolean, 
        _dis:number, 
        _angle:number, 
        _pos:Vector):Character[]{
            let characters : Character[]




            return characters
    }
    export function GetWeaponAmmoId(_weaponId : number) : number{
        


        return
    }
}
