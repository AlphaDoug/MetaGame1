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
    /**
     * 输出三倍标准差为1 的分布在（-1， 1）之间的正态分布
     */
    export function GaussRandom(_isSeeded : boolean) : number{
        if (!_isSeeded) {
            
        }
        let u = Math.random()
        let v = Math.random()
        let z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
        z = ( z + 3) / 6
        z = z * 2 - 1
        if (Math.abs(z) > 1) {
            return GaussRandom(true)
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
    /**
     * 输入一个方向和一个最大扩散角，
     * 输出以该方向为中心轴，角度为半顶角的圆锥的底面上的一个点（高斯分布）
     */
    export function RandomRotate(dir:Vector, dirAngle :Vector){
        let axis1 = Vector.cross(dir, new Vector(1, 1, 1).normalized)
        let axis2 = Vector.cross(dir, axis1)
        
    }

    export function RotateVector(axis: Vector, angle: number): Vector {
        const cosAngle = Math.cos(angle);
        const sinAngle = Math.sin(angle);
        
        const parallelComponent = axis.(this.dot(axis));  Vector.project(axis, cosAngle, sinAngle);
        const perpendicularComponent = this.subtract(parallelComponent);
    
        const crossProduct = axis.Cross(perpendicularComponent);
    
        const rotatedPerpendicularComponent = perpendicularComponent.scale(cosAngle).add(crossProduct.scale(sinAngle));
        const rotatedVector = rotatedPerpendicularComponent.add(parallelComponent);
    
        return rotatedVector;
    };
}
