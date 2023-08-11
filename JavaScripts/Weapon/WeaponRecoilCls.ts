import { WeaponBaseCls } from "./WeaponBaseCls"

export class WeaponRecoilCls{
    private id : number
    private gun : WeaponBaseCls
    private _verticalScale: number = 1;
    private _horizontalScale: number = 1;
    private _minErrorScale: number = 1;
    private _maxErrorScale: number = 1;
    private _recoverRateScale: number = 1;
    private _selfSpinRangeRateScale: number = 1;
    
    private _unstability: number = 0;
    private _currentError: number = 0;

    private _horizontalRateTable: number[] = [];
    private _verticalRateTable: number[] = [];
    private _minErrorRateTable: number[] = [];
    private _maxErrorRateTable: number[] = [];
    private _recoverRateTable: number[] = [];
    private _selfSpinRangeRateTable: number[] = [];

    private _lastPos : Vector
    private _configData : GameConst.WeaponRecoilConfigData

    difFunction(_unstability:number) {
        
    }
}